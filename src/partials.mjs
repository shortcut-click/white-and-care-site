// White & Care · shared chrome: head, header, footer, modal, layout
import { ui, btn, PHONE, TEL, MAPS } from "./lib.mjs";

const SITE = "https://www.whiteandcare.be";

// Last content review date — drives both the visible "Mis à jour" line and the
// dateModified/lastReviewed fields in JSON-LD (freshness signal for AI search).
// Bump these two together whenever the content is meaningfully revised.
const UPDATED_ISO = "2026-06-24";
const UPDATED_LABEL = "juin 2026";

// Entity disambiguation: official profiles for the Dentist's `sameAs`. These
// help AI/Knowledge Graph tie "White & Care" to its real-world entity.
const SAMEAS = [
  "https://www.facebook.com/p/White-Care-100086354506195/",
  "https://www.instagram.com/whiteandcare/",
  "https://www.google.com/maps?cid=2218993236697009025",
];

// Analytics / tracking (repris à l'identique du site Webflow original) :
// GA4 G-787XZYH3EH, GTM GTM-KW4N87BB (qui embarque Clarity lm9q43jtiu + Google
// Ads AW-11016373499), Meta Pixel 900731829579651.
// Injecté UNIQUEMENT en production (pas sur la preview github.io, pour ne pas
// polluer les comptes analytics du client avec du trafic de test).
// Tracking fires only on a true production build: no sub-path base (github.io
// preview) and no WC_PREVIEW flag (Cloudflare *.pages.dev preview at root).
const TRACKING_ENABLED = !(process.env.WC_BASE || "").trim() && !(process.env.WC_PREVIEW || "").trim();

const trackingHead = TRACKING_ENABLED ? `
<!-- Consent Mode v2 (défaut = refusé, RGPD Belgique). Doit s'exécuter AVANT GTM/gtag.
     Le CMP (iubenda) doit appeler gtag('consent','update',{...}) à l'acceptation. -->
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});gtag('set','ads_data_redaction',true);gtag('set','url_passthrough',true);</script>
<!-- iubenda Cookie Solution (bannière de consentement + autoblocking) — repris du site original.
     Charge avant GA/GTM/Meta pour bloquer les trackers jusqu'au consentement. -->
<script type="text/javascript">var _iub = _iub || []; _iub.csConfiguration = {"askConsentAtCookiePolicyUpdate":true,"floatingPreferencesButtonDisplay":"bottom-right","lang":"fr","perPurposeConsent":true,"siteId":3379023,"whitelabel":false,"cookiePolicyId":80675497,"banner":{"acceptButtonDisplay":true,"closeButtonDisplay":false,"customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"position":"float-top-center","rejectButtonDisplay":true}};</script>
<script type="text/javascript" src="https://cs.iubenda.com/autoblocking/3379023.js"></script>
<script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>
<!-- Google tag (gtag.js) -->
<script>(function(w,i,g){w[g]=w[g]||[];if(typeof w[g].push=='function')w[g].push.apply(w[g],Array.isArray(i)?i:[i]);})(window,['G-787XZYH3EH'],'google_tags_first_party');</script>
<script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('set', 'developer_id.dZGVlNj', true);gtag('set', 'developer_id.dYWYxNW', true);gtag('js', new Date());gtag('config', 'G-787XZYH3EH');</script>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KW4N87BB');</script>
<!-- Meta Pixel -->
<script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '900731829579651');fbq('track', 'PageView');</script>
` : "";

const trackingBodyNoscript = TRACKING_ENABLED ? `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KW4N87BB" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=900731829579651&ev=PageView&noscript=1"/></noscript>` : "";

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
  return `<nav class="wc-breadcrumb-bar" aria-label="Fil d'Ariane"><div class="wc-container" style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap"><div class="wc-breadcrumb">${items}</div><span class="wc-updated" style="font-size:13px;color:var(--wc-muted);white-space:nowrap">Mis à jour : ${UPDATED_LABEL}</span></div></nav>`;
}

function head({ title, description, canonical, ogImage, schema, breadcrumb, noindex }) {
  // Default OG image = cabinet-hero.jpeg (1024×768). Dimensions are emitted only
  // for this default; a page overriding ogImage would need its own dimensions.
  const og = ogImage || `${SITE}/assets/photos/cabinet-hero.jpeg`;
  const ogDims = ogImage ? "" : `
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1024">
<meta property="og:image:height" content="768">`;
  const url = canonical || SITE + "/";
  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${trackingHead}
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="robots" content="${noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"}">
<meta name="referrer" content="strict-origin-when-cross-origin">
${canonical ? `<link rel="canonical" href="${url}">` : ""}
<meta name="theme-color" content="#642eff">
<meta name="author" content="White & Care">
<link rel="icon" type="image/svg+xml" href="/assets/brand/favicon-wc.svg">
<link rel="apple-touch-icon" href="/assets/brand/favicon-wc.svg">
<link rel="manifest" href="/site.webmanifest">
<meta property="og:type" content="website">
<meta property="og:site_name" content="White & Care">
<meta property="og:locale" content="fr_BE">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${og}">
<meta property="og:image:alt" content="White & Care · cabinet dentaire à Anderlecht">${ogDims}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${og}">
<link rel="preload" href="/assets/fonts/poppins-700-latin.woff2" as="font" type="font/woff2" crossorigin>
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
    <a href="/" class="wc-nav-logo" aria-label="White & Care · accueil"><img src="/assets/brand/logo-noir.svg" alt="White & Care" width="662" height="102"></a>
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
    ? "Cabinet dentaire à Anderlecht réunissant une équipe pluridisciplinaire de dentistes et de spécialistes, au cœur du Shopping Cora Anderlecht."
    : "Cabinet dentaire à Anderlecht, Shopping Cora Anderlecht. Une grande équipe de dentistes, dont de nombreux praticiens conventionnés INAMI.";
  return `<footer class="wc-footer"><div class="wc-container wc-foot-grid">
  <div>
    <img src="/assets/brand/logo-blanc.svg" alt="White & Care" width="662" height="102">
    <p class="about">${about}</p>
  </div>
  ${cols}
  <div><h4>Contact</h4><ul class="wc-foot-contact">
    <li><span class="ic">${ui.phone(16)}</span> <a href="${TEL}" style="color:inherit">${PHONE}</a></li>
    <li><span class="ic">${ui.pin(16)}</span> Shopping Cora Anderlecht, 1070</li>
    <li><span class="ic">${ui.clock(16)}</span> Lun – Sam · 10h – 19h</li>
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
${trackingBodyNoscript}
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

export { SITE, UPDATED_ISO, UPDATED_LABEL, SAMEAS };
