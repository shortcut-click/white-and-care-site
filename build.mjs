// White & Care — static site generator.
// Usage: node build.mjs   →   outputs ./dist (deploy this folder).
import { mkdir, writeFile, rm, cp } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { layout, SITE } from "./src/partials.mjs";
import { allPages } from "./src/pages.mjs";

const ROOT = dirname(fileURLToPath(import.meta.url));
const DIST = join(ROOT, "dist");

// Optional base path for hosting under a sub-directory (e.g. GitHub Pages
// project sites served at https://user.github.io/<repo>/). When set, every
// root-absolute URL (href="/…", src="/…") is prefixed, and pages are marked
// noindex so the preview deploy never competes with the production domain.
const _b = (process.env.WC_BASE || "").trim().replace(/^\/+|\/+$/g, "");
const BASE = _b ? "/" + _b : "";

function applyBase(html) {
  if (!BASE) return html;
  return html
    .replace(/(href|src)="\//g, `$1="${BASE}/`)
    .replace('content="index, follow, max-image-preview:large"', 'content="noindex, nofollow"');
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

  // copy assets
  await cp(join(ROOT, "assets"), join(DIST, "assets"), { recursive: true });

  // render pages
  const pages = allPages();
  for (const p of pages) {
    const out = join(DIST, p.path);
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, applyBase(layout(p.meta, p.body)), "utf8");
    console.log("✓", p.path);
  }

  // sitemap.xml
  const urls = pages.map((p) => p.meta.canonical);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`
    + urls.map((u) => `  <url><loc>${u}</loc><changefreq>monthly</changefreq><priority>${u === SITE + "/" ? "1.0" : "0.8"}</priority></url>`).join("\n")
    + `\n</urlset>\n`;
  await writeFile(join(DIST, "sitemap.xml"), sitemap, "utf8");

  // robots.txt
  await writeFile(join(DIST, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`, "utf8");

  console.log(`\nBuilt ${pages.length} pages → ${resolve(DIST)}`);
}

build().catch((e) => { console.error(e); process.exit(1); });
