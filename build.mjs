// White & Care — static site generator.
// Usage: node build.mjs   →   outputs ./dist (deploy this folder).
import { mkdir, writeFile, rm, cp, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { layout, SITE, UPDATED_ISO } from "./src/partials.mjs";
import { allPages } from "./src/pages.mjs";

const ROOT = dirname(fileURLToPath(import.meta.url));
const DIST = join(ROOT, "dist");

// Optional base path for hosting under a sub-directory (e.g. GitHub Pages
// project sites served at https://user.github.io/<repo>/). When set, every
// root-absolute URL (href="/…", src="/…") is prefixed, and pages are marked
// noindex so the preview deploy never competes with the production domain.
const _b = (process.env.WC_BASE || "").trim().replace(/^\/+|\/+$/g, "");
const BASE = _b ? "/" + _b : "";

// WC_PREVIEW: force noindex without prefixing paths — for a Cloudflare Pages
// *.pages.dev preview served at the root (where WC_BASE's sub-path prefix is
// wrong). Tracking is also disabled (see partials.mjs) so a test URL never
// pollutes the client's analytics. A sub-path build (WC_BASE) is noindex too.
const NOINDEX = !!BASE || !!(process.env.WC_PREVIEW || "").trim();

function applyBase(html) {
  if (NOINDEX) {
    html = html.replace('content="index, follow, max-image-preview:large"', 'content="noindex, nofollow"');
  }
  if (!BASE) return html;
  return html.replace(/(href|src)="\//g, `$1="${BASE}/`);
}

// Responsive images: add srcset (mobile variant + original) + sizes to every
// <img> referencing a photo that has a generated variant in the manifest.
function addSrcset(html, resp) {
  return html.replace(/<img\b[^>]*\bsrc="([^"]*\/assets\/photos\/([^"/?]+))"[^>]*>/g, (tag, fullSrc, name) => {
    if (/\bsrcset=/.test(tag)) return tag;
    const info = resp[name];
    if (!info || !info.v) return tag;
    const variantSrc = fullSrc.slice(0, fullSrc.length - name.length) + info.v;
    const srcset = `${variantSrc} ${info.vw}w, ${fullSrc} ${info.w}w`;
    const sizes = "(max-width: 700px) 95vw, 620px";
    return tag.replace(`src="${fullSrc}"`, `src="${fullSrc}" srcset="${srcset}" sizes="${sizes}"`);
  });
}

// Preload the LCP hero image: find the (already base-prefixed) high-priority
// <img> and inject a matching <link rel="preload"> before the first stylesheet.
// Uses imagesrcset/imagesizes so the preload matches the candidate the browser
// actually picks (mobile fetches the small variant, not the full-size original).
function injectHeroPreload(html) {
  const img = html.match(/<img[^>]*fetchpriority="high"[^>]*>/);
  if (!img) return html;
  const tag = img[0];
  const src = tag.match(/\bsrc="([^"]+)"/);
  if (!src) return html;
  const ss = tag.match(/\bsrcset="([^"]+)"/);
  const sz = tag.match(/\bsizes="([^"]+)"/);
  const link = ss
    ? `<link rel="preload" as="image" imagesrcset="${ss[1]}"${sz ? ` imagesizes="${sz[1]}"` : ""} fetchpriority="high">\n`
    : `<link rel="preload" as="image" href="${src[1]}" fetchpriority="high">\n`;
  return html.replace('<link rel="stylesheet"', link + '<link rel="stylesheet"');
}

// Append a content-version query to the styles.css / main.js references so the
// host can cache them immutable while a content change still busts the cache.
// Matches the filename suffix, so it works with or without a WC_BASE prefix.
function applyAssetHashes(html, hash) {
  return html
    .replace(/\/assets\/styles\.css(?=")/g, `/assets/styles.css?v=${hash.css}`)
    .replace(/\/assets\/main\.js(?=")/g, `/assets/main.js?v=${hash.js}`);
}

// Conservative minifiers (no deps). CSS: keep single spaces so calc() stays
// valid; only strip comments, newlines and indentation. JS: line-based — drop
// indentation, blank lines and full-line // comments (newlines kept = ASI-safe).
function minifyCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s*\n\s*/g, " ")
    .replace(/\s{2,}/g, " ")
    .replace(/\s*([{};])\s*/g, "$1")
    .replace(/;}/g, "}")
    .trim();
}
function minifyJs(js) {
  return js
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .split("\n")
    .map((l) => l.replace(/^\s+/, ""))
    .filter((l) => l && !l.startsWith("//"))
    .join("\n");
}

async function build() {
  // clean (best-effort: on Windows the folder may be locked by an open
  // Explorer window or a running preview server — in that case we keep the
  // folder and overwrite files in place, since cp/writeFile overwrite anyway)
  if (existsSync(DIST)) {
    try { await rm(DIST, { recursive: true, force: true }); }
    catch (e) { console.warn(`! dist non supprimé (${e.code}), écrasement en place`); }
  }
  await mkdir(DIST, { recursive: true });

  // copy assets, then minify the two text assets in place; keep a short content
  // hash of each so HTML can reference them as ?v=<hash> (lets the host serve
  // them immutable for a year while a content edit auto-busts the cache).
  await cp(join(ROOT, "assets"), join(DIST, "assets"), { recursive: true });
  const assetHash = {};
  for (const [file, fn, key] of [["assets/styles.css", minifyCss, "css"], ["assets/main.js", minifyJs, "js"]]) {
    const out = fn(await readFile(join(ROOT, file), "utf8"));
    await writeFile(join(DIST, file), out, "utf8");
    assetHash[key] = createHash("sha256").update(out).digest("hex").slice(0, 8);
  }

  // responsive-image manifest (basename → {w,h,v,vw}); empty if not generated yet
  let resp = {};
  try { resp = JSON.parse(await readFile(join(ROOT, "assets/photos/_responsive.json"), "utf8")); }
  catch { console.warn("! _responsive.json absent — srcset non injecté"); }

  // render pages
  const pages = allPages();
  for (const p of pages) {
    const out = join(DIST, p.path);
    await mkdir(dirname(out), { recursive: true });
    let html = applyBase(layout(p.meta, p.body));
    html = addSrcset(html, resp);
    html = injectHeroPreload(html);
    html = applyAssetHashes(html, assetHash);
    await writeFile(out, html, "utf8");
    console.log("✓", p.path);
  }

  // sitemap.xml — indexable pages only (skip noindex / canonical-less pages like 404)
  const urls = pages.filter((p) => p.meta.canonical && !p.meta.noindex).map((p) => p.meta.canonical);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`
    + urls.map((u) => `  <url><loc>${u}</loc><lastmod>${UPDATED_ISO}</lastmod><changefreq>monthly</changefreq><priority>${u === SITE + "/" ? "1.0" : "0.8"}</priority></url>`).join("\n")
    + `\n</urlset>\n`;
  await writeFile(join(DIST, "sitemap.xml"), sitemap, "utf8");

  // robots.txt
  await writeFile(join(DIST, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`, "utf8");

  // Cloudflare Pages: _headers (cache + security baseline) and _redirects.
  // All static assets live under /assets/*, so one immutable rule covers
  // css/js (cache-busted via ?v=hash), fonts and photos. HTML is left to the
  // host default (revalidated) so content changes show immediately. CSP is
  // intentionally deferred (deploy report-only first, then enforce).
  await writeFile(join(DIST, "_headers"),
    `/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n\n`
    + `/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n`
    + `  X-Frame-Options: SAMEORIGIN\n  Permissions-Policy: geolocation=(), microphone=(), camera=()\n`
    + `  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload\n`, "utf8");

  // URL parity with the old site is 1:1 and Cloudflare Pages serves clean
  // (slash-less) URLs by default, so no path redirects are needed at launch.
  // Add orphan-URL 301s here if Search Console surfaces indexed URLs outside
  // the canonical slugs. Host canonicalization (apex -> www) and HTTPS are set
  // in the Cloudflare dashboard (Redirect Rule + Always Use HTTPS), not here.
  await writeFile(join(DIST, "_redirects"),
    `# Path redirects (none needed at launch — 1:1 URL parity).\n`
    + `# Example for a future orphan URL:\n`
    + `# /ancienne-page  /nouvelle-page  301\n`, "utf8");

  // site.webmanifest (PWA install metadata; SVG icon — paths base-aware for preview)
  const manifest = {
    name: "White & Care · Cabinet dentaire à Anderlecht",
    short_name: "White & Care",
    lang: "fr",
    start_url: BASE + "/",
    scope: BASE + "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#642eff",
    icons: [
      { src: BASE + "/assets/brand/favicon-wc.svg", type: "image/svg+xml", sizes: "any", purpose: "any maskable" },
    ],
  };
  await writeFile(join(DIST, "site.webmanifest"), JSON.stringify(manifest, null, 2), "utf8");

  console.log(`\nBuilt ${pages.length} pages → ${resolve(DIST)}`);
}

build().catch((e) => { console.error(e); process.exit(1); });
