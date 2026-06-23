// White & Care · render library: icons + components (HTML string builders)

/* ============================ ICONS ============================ */
// Dental duotone icon set (ported from DentalIcon.jsx)
const TOOTH = "M7.6 3.6c-1.6 0-2.9 1.3-2.9 2.9 0 1 .3 1.8.6 2.8.3 1 .3 1.8.5 3 .2 1.3.4 2.9.8 4.4.3 1.3.7 2.7 1.7 2.7 1.1 0 1-1.8 1.3-3.1.1-.9.3-1.6.9-1.6s.8.7.9 1.6c.3 1.3.2 3.1 1.3 3.1 1 0 1.4-1.4 1.7-2.7.4-1.5.6-3.1.8-4.4.2-1.2.2-2 .5-3 .3-1 .6-1.8.6-2.8 0-1.6-1.3-2.9-2.9-2.9-1.1 0-1.8.6-2.8.6s-1.7-.6-2.8-.6Z";
const SHIELD = "M12 3.2 5.5 5.5v4.6c0 3.5 2.6 6.4 6.5 7.7 3.9-1.3 6.5-4.2 6.5-7.7V5.5L12 3.2Z";
const HEART = "M12 20.2S4.3 15.6 4.3 9.9A3.9 3.9 0 0 1 12 7.2a3.9 3.9 0 0 1 7.7 2.7C19.7 15.6 12 20.2 12 20.2Z";

const DENTAL = {
  tooth: { f: `<path d="${TOOTH}"/>`, l: `<path d="${TOOTH}"/>` },
  "sparkle-tooth": { f: `<path d="${TOOTH}"/>`, l: `<path d="${TOOTH}"/><path d="M18.4 2.6l.6 1.7 1.7.6-1.7.6-.6 1.7-.6-1.7-1.7-.6 1.7-.6z"/>` },
  "alert-tooth": { f: `<path d="${TOOTH}"/>`, l: `<path d="${TOOTH}"/><path d="M12.4 8.2 10.7 11h2.4l-1.7 2.8"/>` },
  "shield-tooth": { f: `<path d="${SHIELD}"/>`, l: `<path d="${SHIELD}"/><path d="M9.2 11.4 11 13.3 15 9.3"/>` },
  brush: { f: `<rect x="3" y="9" width="7" height="6" rx="2"/><rect x="9.5" y="10.4" width="11.5" height="3.2" rx="1.6"/>`, l: `<rect x="3" y="9" width="7" height="6" rx="2"/><rect x="9.5" y="10.4" width="11.5" height="3.2" rx="1.6"/><path d="M4.6 9V6.4M6.5 9V5.8M8.4 9V6.4"/>` },
  smile: { f: `<circle cx="12" cy="12" r="9"/>`, l: `<circle cx="12" cy="12" r="9"/><path d="M8.5 14a4.5 4.5 0 0 0 7 0"/><path d="M9 9.5h.01M15 9.5h.01"/>` },
  implant: { f: `<path d="M8.2 4h7.6l-1 4.2H9.2z"/><path d="M10 9h4l-.7 9.4a1.3 1.3 0 0 1-2.6 0z"/>`, l: `<path d="M8.2 4h7.6l-1 4.2H9.2z"/><path d="M10 9h4l-.7 9.4a1.3 1.3 0 0 1-2.6 0z"/><path d="M10.4 11.6h3.2M10.6 14h2.8M10.8 16.4h2.4"/>` },
  scanner: { f: `<rect x="9.5" y="9.5" width="5" height="5" rx="1"/>`, l: `<path d="M4 8.5V6.5A2.5 2.5 0 0 1 6.5 4h2M15.5 4h2A2.5 2.5 0 0 1 20 6.5v2M20 15.5v2a2.5 2.5 0 0 1-2.5 2.5h-2M8.5 20h-2A2.5 2.5 0 0 1 4 17.5v-2"/><path d="M3.5 12h17"/>` },
  clipboard: { f: `<rect x="5" y="4.5" width="14" height="16.5" rx="2.2"/>`, l: `<rect x="5" y="4.5" width="14" height="16.5" rx="2.2"/><rect x="9" y="2.8" width="6" height="3.4" rx="1.2"/><path d="M8.6 13.2 10.6 15.2 14.8 11"/>` },
  "heart-care": { f: `<path d="${HEART}"/>`, l: `<path d="${HEART}"/><path d="M7.4 11.4h2.2l1-1.9 1.7 3.8 1-1.9h2.3"/>` },
  syringe: { f: `<path d="m15.5 4.6 3.9 3.9-8 8-3.9-3.9z"/>`, l: `<path d="m13.5 2.6 7.9 7.9M18 4.5l-9.6 9.6 3.5 3.5L21.5 8z"/><path d="m8.4 14.1-5 5M6.2 16.8l1.6 1.6M9 14l1.5 1.5"/>` },
  award: { f: `<circle cx="12" cy="9" r="5.5"/>`, l: `<circle cx="12" cy="9" r="5.5"/><path d="m8.8 13.4-1.6 7 4.8-2.4 4.8 2.4-1.6-7"/><path d="m12 6.3.95 1.92 2.12.31-1.53 1.5.36 2.11L12 11.65l-1.9 1-.36-2.11-1.53-1.5 2.12-.31z"/>` },
  "calendar-check": { f: `<rect x="4" y="5.2" width="16" height="15" rx="2.4"/>`, l: `<rect x="4" y="5.2" width="16" height="15" rx="2.4"/><path d="M4 9.6h16M8 3.2v3M16 3.2v3"/><path d="m9 14.2 2 2 4-4"/>` },
  euro: { f: `<circle cx="12" cy="12" r="9"/>`, l: `<circle cx="12" cy="12" r="9"/><path d="M15.6 8.7a4.1 4.1 0 1 0 0 6.6"/><path d="M7.8 11h6M7.8 13.3h5"/>` },
};

export function dentalIcon(name = "tooth", size = 24) {
  const ic = DENTAL[name] || DENTAL.tooth;
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">`
    + `<g fill="currentColor" fill-opacity="0.14" stroke="none">${ic.f}</g>`
    + `<g fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ic.l}</g></svg>`;
}

// Lucide-style UI icons
export const ui = {
  phone: (s = 16) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  arrow: (s = 15) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  pin: (s = 16) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock: (s = 16) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
  mail: (s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
  check: (s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>`,
  chevron: (s = 14) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>`,
};

export const googleG = (s = 18) => `<svg viewBox="0 0 48 48" width="${s}" height="${s}" aria-hidden="true"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.094 5.571l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/></svg>`;

const STAR = `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 18.9 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z"/></svg>`;
export const stars = (n = 5) => `<span class="wc-stars">${STAR.repeat(n)}</span>`;

/* ============================ PRIMITIVES ============================ */
export const PHONE = "+32 2 493 53 53";
export const TEL = "tel:+3224935353";
export const MAPS = "https://www.google.com/maps/search/?api=1&query=White+%26+Care+Anderlecht";

// Every CTA / appointment / call button does ONE thing: phone the clinic.
// `book` is kept for backward-compat but always resolves to the tel: link.
export function btn(label, { variant = "primary", size = "md", href, book = false, iconLeft = "", iconRight = "" } = {}) {
  const cls = `wc-btn wc-btn-${variant}${size === "sm" ? " wc-btn-sm" : size === "lg" ? " wc-btn-lg" : ""}`;
  const inner = `${iconLeft}${label}${iconRight}`;
  const target = book ? TEL : (href || TEL);
  return `<a href="${target}" class="${cls}">${inner}</a>`;
}

export const badge = (label, tone = "brand") => `<span class="wc-badge wc-badge-${tone}">${label}</span>`;
export const eyebrow = (t) => `<p class="wc-eyebrow">${t}</p>`;
export const link = (label, href = "#") => `<a href="${href}" class="wc-link">${label} ${ui.arrow()}</a>`;

export function chip(name, size = 18) { return `<span class="wc-chip">${dentalIcon(name, size)}</span>`; }

export function trustChip(icon, title, desc) {
  return `<div class="wc-trustchip"><span class="wc-chip">${dentalIcon(icon, 24)}</span><span><span class="t">${title}</span><span class="d">${desc}</span></span></div>`;
}

export function feature({ icon, title, body }) {
  return `<article class="wc-card wc-feature"><span class="wc-chip">${dentalIcon(icon, 26)}</span><h3>${title}</h3><p>${body}</p></article>`;
}

export function step(n, { title, body }) {
  return `<article class="wc-card wc-step"><span class="num">${n}</span><h3>${title}</h3><p>${body}</p></article>`;
}

export function reviewCard({ initial, name, when, text }) {
  return `<li class="wc-card wc-review"><div class="top"><span class="ava">${initial}</span><div style="flex:1;min-width:0"><div class="nm">${name}</div><div class="wh">${when}</div></div>${googleG(18)}</div>${stars(5)}<p>${text}</p></li>`;
}

// image (real) or branded placeholder tile
export function tile(src, { label, icon = "smile", alt = "White & Care", radius = 14, ratio } = {}) {
  const r = `border-radius:${radius}px`;
  const ar = ratio ? `aspect-ratio:${ratio};` : "height:100%;";
  if (src) return `<div class="wc-tile" style="${r};${ar}"><img src="${src}" alt="${alt}" loading="lazy" decoding="async"></div>`;
  return `<div class="wc-tile wc-tile-ph" style="${r};${ar}"><div>${dentalIcon(icon, 30)}${label ? `<div class="lbl">${label}</div>` : ""}</div></div>`;
}

/* ============================ SECTION BUILDERS ============================ */
export function sectionHead({ eyebrow: eb, title, intro, center = false }) {
  return `<div class="wc-sechead${center ? " center" : ""}">${eb ? eyebrow(eb) : ""}<h2>${title}</h2>${intro ? `<p class="wc-lead">${intro}</p>` : ""}</div>`;
}

export function ctaBanner(text, { ctaLabel = "Prendre rendez-vous", book = true } = {}) {
  return `<section class="wc-section"><div class="wc-container"><div class="wc-cta-banner">`
    + `<span class="blob" style="right:-70px;top:-70px;width:230px;height:230px"></span>`
    + `<span class="blob" style="left:-50px;bottom:-50px;width:190px;height:190px"></span>`
    + `<div class="wc-cta-inner"><p>${dentalIcon("sparkle-tooth", 22)}${text}</p>${btn(ctaLabel, { variant: "white", book })}</div>`
    + `</div></div></section>`;
}

// glass intro/content block with optional bullets/checks/cta
export function glassBlock({ eyebrow: eb, title, h2 = true, paras = [], checks = [], cta }) {
  const head = (h2 ? `<h2>${title}</h2>` : `<h3 style="font-size:24px">${title}</h3>`);
  return `<section class="wc-section"><div class="wc-container"><div class="wc-glass-card wc-prose-block" style="padding:40px">`
    + `${eb ? eyebrow(eb) : ""}${title ? head : ""}`
    + paras.map((p) => `<p>${p}</p>`).join("")
    + (checks.length ? `<ul class="wc-checks">${checks.map((c) => `<li><span class="ic">${ui.check(20)}</span><span>${c}</span></li>`).join("")}</ul>` : "")
    + (cta ? `<div style="margin-top:22px">${cta}</div>` : "")
    + `</div></div></section>`;
}

export function zigzag({ id = "", eyebrow: eb, title, paras = [], bullets = [], image, imageSide = "right", alt, cta }) {
  const text = `<div>${eb ? eyebrow(eb) : ""}<h2>${title}</h2>`
    + paras.map((p) => `<p>${p}</p>`).join("")
    + (bullets.length ? `<ul class="wc-bullets">${bullets.map(([ic, b]) => `<li><span class="wc-chip">${dentalIcon(ic, 18)}</span><span>${b}</span></li>`).join("")}</ul>` : "")
    + (cta ? `<div class="wc-zig-cta">${cta}</div>` : "")
    + `</div>`;
  const pic = `<div class="wc-zig-pic">${image ? `<img src="${image}" alt="${alt || title}" width="720" height="900" loading="lazy" decoding="async">` : tile(null, { ratio: "4/5", radius: 18 })}</div>`;
  const inner = imageSide === "left" ? pic + text : text + pic;
  return `<section class="wc-zig"${id ? ` id="${id}"` : ""}><div class="wc-container"><div class="wc-glass-card"><div class="wc-zig-grid">${inner}</div></div></div></section>`;
}

export function featureGrid({ eyebrow: eb, title, intro, cards, cols = 3, center = true }) {
  return `<section class="wc-section-lg"><div class="wc-container">${sectionHead({ eyebrow: eb, title, intro, center })}`
    + `<div class="wc-cards-${cols}" style="margin-top:28px">${cards.map(feature).join("")}</div></div></section>`;
}

export function stepGrid({ eyebrow: eb, title, intro, steps, cols = 3 }) {
  return `<section class="wc-section-lg"><div class="wc-container">${sectionHead({ eyebrow: eb, title, intro, center: true })}`
    + `<div class="wc-cards-${cols}" style="margin-top:28px">${steps.map((s, i) => step(i + 1, s)).join("")}</div></div></section>`;
}

// "On parle votre langue" · reusable bilingual welcome block
export function langueSection(text) {
  return zigzag({
    eyebrow: "Accueil multilingue",
    title: "On parle votre langue !",
    paras: [text],
    bullets: [
      ["smile", "FR · NL · EN · ES · AR et plus selon le praticien"],
      ["heart-care", "Précisez votre langue dès la prise de rendez-vous"],
      ["calendar-check", "Un accueil qui vous met en confiance"],
    ],
    image: "/assets/photos/multilingue.avif",
    imageSide: "left",
    alt: "Équipe multilingue White & Care",
  });
}

export function faqSection({ eyebrow: eb = "Questions fréquentes", title, items }) {
  const list = items.map(([q, a]) => `<div class="wc-faq-item"><button class="wc-faq-q" aria-expanded="false">${q}<span class="pm">+</span></button><div class="wc-faq-a"><p style="padding-top:0">${a}</p></div></div>`).join("");
  return `<section class="wc-section-lg"><div class="wc-container">${sectionHead({ eyebrow: eb, title, center: true })}`
    + `<div class="wc-faq" style="margin-top:28px"><div class="wc-faq-list">${list}</div></div></div></section>`;
}

export function reviewsSection() {
  const REVIEWS = [
    { initial: "M", name: "MarinaDimdim", when: "il y a 5 mois", text: "Un cabinet dentaire qui va vous redonner foi en la profession." },
    { initial: "L", name: "LCOCO BXL", when: "il y a 6 mois", text: "Les meilleurs dentistes de Bruxelles. J'ai fait beaucoup de soins sans me ruiner." },
    { initial: "I", name: "Ingrid Van Paemel", when: "il y a 7 mois", text: "J'ai une phobie du dentiste, mais j'ai été traitée comme une reine. Je suis fière de mes dents." },
  ];
  return `<section class="wc-reviews"><div class="wc-container"><div class="wc-glass-card">`
    + `<div class="wc-reviews-head"><div>${eyebrow("Avis vérifiés")}<h2>Des patients satisfaits</h2></div>`
    + `<div class="wc-reviews-score"><span class="wc-stat">4,6</span><div>${stars(5)}<div class="meta">${googleG(15)} 191 avis Google</div></div></div></div>`
    + `<ul class="wc-reviews-grid">${REVIEWS.map(reviewCard).join("")}</ul>`
    + `</div></div></section>`;
}

export function statsStrip(stats) {
  return `<section class="wc-section"><div class="wc-container"><div class="wc-glass-card" style="padding:36px 40px"><div class="wc-stats">`
    + stats.map(([n, l]) => `<div><div class="wc-stat">${n}</div><div class="lbl">${l}</div></div>`).join("")
    + `</div></div></div></section>`;
}

// "Soins associés" · related-services module (hub-and-spoke internal linking).
// Each item: { href, icon, title, body }. Renders descriptive, crawlable links.
export function relatedServices(items, { eyebrow: eb = "Pour aller plus loin", title = "Soins associés" } = {}) {
  const cards = items.map(({ href, icon = "tooth", title: t, body = "" }) =>
    `<a class="wc-card wc-related-card" href="${href}">`
    + `<span class="wc-chip">${dentalIcon(icon, 24)}</span>`
    + `<span class="wc-related-txt"><span class="t">${t}</span>${body ? `<span class="d">${body}</span>` : ""}</span>`
    + `<span class="wc-related-arrow">${ui.arrow(16)}</span></a>`).join("");
  return `<section class="wc-section-lg"><div class="wc-container">${sectionHead({ eyebrow: eb, title, center: true })}`
    + `<div class="wc-cards-3 wc-related" style="margin-top:24px">${cards}</div></div></section>`;
}
