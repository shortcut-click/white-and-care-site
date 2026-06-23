// White & Care · shared chrome: head, header, footer, modal, layout
import { ui, btn, PHONE, TEL, MAPS } from "./lib.mjs";

const SITE = "https://www.whiteandcare.be";

const NAV = [
  ["Conventionné", "/dentiste-conventionne"],
  ["Implants", "/implant-dentaire"],
  ["Invisalign", "/invisalign"],
  ["Orthodontie", "/orthodontie-anderlecht"],
  ["Blanchiment", "/blanchiment-dentaire-cabinet-dentaire-anderlecht"],
  ["Urgence", "/urgence-dentaire-anderlecht"],
];

const FOOTER_COLS = [
  ["Soins", [
    ["Dentiste conventionné", "/dentiste-conventionne"],
    ["Implant dentaire", "/implant-dentaire"],
    ["Invisalign", "/invisalign"],
    ["Orthodontie", "/orthodontie-anderlecht"],
  ]],
  ["Esthétique & urgences", [
    ["Blanchiment dentaire", "/blanchiment-dentaire-cabinet-dentaire-anderlecht"],
    ["Détartrage / surfaçage", "/surfacage-detartrage-dentaire"],
    ["Le cabinet", "/soins-dentaires/votre-cabinet-dentaire-a-anderlecht"],
    ["Urgence dentaire", "/urgence-dentaire-anderlecht"],
  ]],
];

// BreadcrumbList JSON-LD from a [label, path][] trail (production URLs).
function breadcrumbLd(crumbs) {
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: crumbs.map(([n, h], i) => ({
      "@type": "ListItem", position: i + 1, name: n,
      item: h.startsWith("http") ? h : SITE + (h === "/" ? "/" : h),
    })),
  };
}

// Visible breadcrumb bar (light background; internal links get base-prefixed at build).
function breadcrumbBar(crumbs) {
  if (!crumbs || !crumbs.length) return "";
  const items = crumbs.map((c, i) => {
    const sep = i > 0 ? ui.chevron(14) : "";
    return i === crumbs.length - 1
      ? `${sep}<span class="cur" aria-current="page">${c[0]}</span>`
      : `${sep}<a href="${c[1]}">${c[0]}</a>`;
  }).join("");
  return `<nav class="wc-breadcrumb-bar" aria-label="Fil d'Ariane"><div class="wc-container"><div class="wc-breadcrumb">${items}</div></div></nav>`;
}

function head({ title, description, canonical, ogImage, schema, breadcrumb }) {
  const og = ogImage || `${SITE}/assets/photos/cabinet-hero.jpeg`;
  const url = canonical || SITE + "/";
  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="${url}">
<meta name="theme-color" content="#642eff">
<meta name="author" content="White & Care">
<link rel="icon" type="image/svg+xml" href="/assets/brand/favicon-wc.svg">
<link rel="apple-touch-icon" href="/assets/brand/favicon-wc.svg">
<meta property="og:type" content="website">
<meta property="og:site_name" content="White & Care">
<meta property="og:locale" content="fr_BE">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${og}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${og}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap">
<link rel="stylesheet" href="/assets/styles.css">
${schema ? `<script type="application/ld+json">${JSON.stringify(schema)}</script>` : ""}
${breadcrumb && breadcrumb.length ? `<script type="application/ld+json">${JSON.stringify(breadcrumbLd(breadcrumb))}</script>` : ""}
</head>`;
}

function header() {
  const desktopLinks = NAV.map(([l, h]) => `<a href="${h}">${l}</a>`).join("");
  const mobileLinks = NAV.map(([l, h]) => `<a href="${h}">${l}</a>`).join("");
  return `<header class="wc-header"><div class="wc-container">
  <div class="wc-glass-nav wc-nav">
    <a href="/" class="wc-nav-logo" aria-label="White & Care · accueil"><img src="/assets/brand/logo-noir.svg" alt="White & Care"></a>
    <nav class="wc-nav-links">${desktopLinks}</nav>
    <span class="wc-header-cta">${btn(PHONE, { variant: "primary", iconLeft: ui.phone(16), book: true })}</span>
    <button class="wc-hamburger" aria-label="Menu" aria-expanded="false">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#101828" stroke-width="1.8" stroke-linecap="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
    </button>
  </div>
  <div class="wc-glass-card wc-mobile-menu">
    <nav>${mobileLinks}${btn(PHONE, { variant: "primary", iconLeft: ui.phone(16), book: true })}</nav>
  </div>
</div></header>`;
}

function footer(meta = {}) {
  const cols = FOOTER_COLS.map(([h, items]) =>
    `<div><h4>${h}</h4><ul>${items.map(([l, href]) => `<li><a href="${href}">${l}</a></li>`).join("")}</ul></div>`
  ).join("");
  // Conventionnement rule: never claim "conventionné / INAMI / remboursé" on
  // specialist pages (implant, Invisalign, orthodontie). Neutral wording there.
  const about = meta.specialist
    ? "Cabinet dentaire à Anderlecht réunissant une équipe pluridisciplinaire de dentistes et de spécialistes, au cœur du centre commercial Cora."
    : "Cabinet dentaire à Anderlecht, centre commercial Cora. Une grande équipe de dentistes, dont de nombreux praticiens conventionnés INAMI.";
  return `<footer class="wc-footer"><div class="wc-container wc-foot-grid">
  <div>
    <img src="/assets/brand/logo-blanc.svg" alt="White & Care">
    <p class="about">${about}</p>
  </div>
  ${cols}
  <div><h4>Contact</h4><ul class="wc-foot-contact">
    <li><span class="ic">${ui.phone(16)}</span> <a href="${TEL}" style="color:inherit">${PHONE}</a></li>
    <li><span class="ic">${ui.pin(16)}</span> Centre commercial Cora, Anderlecht</li>
    <li><span class="ic">${ui.clock(16)}</span> Lun – Sam · 10h – 18h30</li>
  </ul></div>
</div>
<div class="wc-foot-bar">
  <nav class="wc-legal-links">
    <a href="/mentions-legales">Mentions légales</a>
    <a href="https://www.iubenda.com/privacy-policy/80675497" target="_blank" rel="noopener nofollow">Politique de confidentialité</a>
    <a href="https://www.iubenda.com/privacy-policy/80675497/cookie-policy" target="_blank" rel="noopener nofollow">Politique de cookies</a>
    <a href="https://www.iubenda.com/terms-and-conditions/80675497" target="_blank" rel="noopener nofollow">Conditions générales</a>
  </nav>
  <span>© 2026 White & Care. Tous droits réservés.</span>
</div>
</footer>`;
}

function mobileCta() {
  return `<div class="wc-mobile-cta">
  <a class="call" href="${TEL}" aria-label="Appeler le cabinet">${ui.phone(18)} Appeler</a>
  <a class="map" href="${MAPS}" target="_blank" rel="noopener" aria-label="Itinéraire">${ui.pin(18)}</a>
</div>`;
}

function ambient() {
  return `<div class="wc-ambient" aria-hidden="true"><span class="b1"></span><span class="b2"></span><span class="b3"></span><span class="b4"></span></div>`;
}

export function layout(meta, body) {
  return `${head(meta)}
<body>
${ambient()}
<a class="wc-skip" href="#main">Aller au contenu principal</a>
${header()}
<main id="main">
${breadcrumbBar(meta.breadcrumb)}
${body}
</main>
${footer(meta)}
${mobileCta()}
<script src="/assets/main.js" defer></script>
</body>
</html>`;
}

export { SITE };
