// White & Care · hero builders (home + inner-page heroes)
import { ui, btn, badge, trustChip, stars, googleG, PHONE } from "./lib.mjs";

export function heroHome() {
  return `<section class="wc-hero" id="top"><div class="wc-container"><div class="wc-glass-card">
  <div class="wc-hero-grid">
    <div>
      <div class="wc-badges">${badge("Dentistes conventionnés", "trust")}${badge("Anderlecht · Cora", "neutral")}</div>
      <h1>Votre clinique dentaire à <span class="wc-gradient-text">Anderlecht</span></h1>
      <p class="wc-lead">Une grande équipe de dentistes, dont de nombreux praticiens conventionnés qui appliquent les tarifs officiels INAMI : des soins de qualité, à des tarifs clairs.</p>
      <div class="wc-hero-actions">
        ${btn("Prendre rendez-vous", { variant: "primary", iconLeft: ui.phone(15), book: true })}
        <a href="#soins" class="wc-link">Découvrir les soins ${ui.arrow()}</a>
      </div>
      <div class="wc-trust-row">
        ${trustChip("euro", "Conventionné", "Tarifs officiels INAMI")}
        ${trustChip("smile", "Multilingue", "FR · NL · EN · ES · AR")}
        ${trustChip("shield-tooth", "Cora Anderlecht", "Parking gratuit")}
        ${trustChip("calendar-check", "Lun – Sam", "10h – 19h")}
      </div>
    </div>
    <figure class="wc-hero-figure">
      <div class="glow"></div>
      <div class="frame"><img src="/assets/photos/img-14.avif" alt="Patient souriant · White & Care" width="600" height="680" fetchpriority="high"></div>
      <div class="wc-card wc-rating-badge">
        <span class="wc-stat">4,6</span>
        <span>${stars(5)}<span style="display:block;margin-top:3px;font-size:12.5px;color:var(--wc-muted)">191 avis Google</span></span>
      </div>
    </figure>
  </div>
</div></div></section>`;
}

// Bold gradient band hero for inner pages
export function pageHeroGradient({ eyebrow, title, lead, trail = [], primaryLabel = "Prendre rendez-vous", secondary }) {
  const crumb = trail.length
    ? `<nav class="wc-breadcrumb">${trail.map((t, i) => {
        const last = i === trail.length - 1;
        const sep = i > 0 ? ui.chevron(14) : "";
        if (last) return `${sep}<span class="cur">${t[0]}</span>`;
        return `${sep}<a href="${t[1]}">${t[0]}</a>`;
      }).join("")}</nav>`
    : "";
  return `<section class="wc-pagehero"><div class="wc-container">
  <div class="wc-cta-banner wc-pagehero-gradient">
    <span class="blob" style="right:-80px;top:-90px;width:300px;height:300px;background:rgba(255,255,255,0.13)"></span>
    <span class="blob" style="left:30%;bottom:-100px;width:240px;height:240px;background:rgba(255,255,255,0.1)"></span>
    <div class="wc-pagehero-body">
      ${crumb}
      <p class="wc-eyebrow-light"><span class="dash"></span>${eyebrow}</p>
      <h1>${title}</h1>
      ${lead ? `<p class="lead">${lead}</p>` : ""}
      <div class="wc-pagehero-actions">
        ${btn(primaryLabel, { variant: "white", book: true, iconLeft: ui.phone(15) })}
        ${secondary ? btn(secondary.label, { variant: "ghost", href: secondary.href }) : ""}
      </div>
    </div>
  </div>
</div></section>`;
}

// Split text + image hero (light) for inner pages
export function pageHeroSplit({ eyebrow, title, lead, image, alt, primaryLabel = "Prendre rendez-vous", secondary }) {
  return `<section class="wc-pagehero-split"><div class="wc-container"><div class="grid">
  <div class="wc-pagehero-body">
    <p class="wc-eyebrow">${eyebrow}</p>
    <h1>${title}</h1>
    ${lead ? `<p class="lead wc-lead">${lead}</p>` : ""}
    <div class="wc-pagehero-actions">
      ${btn(primaryLabel, { variant: "primary", book: true, iconLeft: ui.phone(15) })}
      ${secondary ? `<a href="${secondary.href}" class="wc-link">${secondary.label} ${ui.arrow()}</a>` : ""}
    </div>
    <div class="wc-trust-row" style="grid-template-columns:1fr 1fr;margin-top:32px">
      <div style="display:inline-flex;align-items:center;gap:12px"><span class="wc-stat" style="font-size:34px">4,6</span><span>${stars(5)}<span style="display:block;font-size:12.5px;color:var(--wc-muted);margin-top:2px">191 avis Google</span></span></div>
    </div>
  </div>
  <figure>
    <div class="glow"></div>
    <div class="frame"><img src="${image}" alt="${alt || title}" width="750" height="600" fetchpriority="high"></div>
  </figure>
</div></div></section>`;
}
