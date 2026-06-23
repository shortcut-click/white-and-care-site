// White & Care · page registry. Each landing page lives in its own module
// under ./pages/ (rewritten from the per-page SEO briefs in site/seo/).
import { SITE } from "./partials.mjs";

import home from "./pages/home.mjs";
import conventionne from "./pages/dentiste-conventionne.mjs";
import implant from "./pages/implant-dentaire.mjs";
import invisalign from "./pages/invisalign.mjs";
import orthodontie from "./pages/orthodontie-anderlecht.mjs";
import blanchiment from "./pages/blanchiment-dentaire.mjs";
import surfacage from "./pages/surfacage-detartrage-dentaire.mjs";
import urgence from "./pages/urgence-dentaire-anderlecht.mjs";
import cabinet from "./pages/cabinet.mjs";

/* ============================================================ MENTIONS LÉGALES */
function mentions() {
  const url = SITE + "/mentions-legales";
  const sections = [
    ["Éditeur du site", [
      "White & Care SRL · cabinet dentaire conventionné INAMI.",
      "Centre commercial Cora, 1070 Anderlecht, Bruxelles, Belgique.",
      "Téléphone : +32 2 493 53 53 · E-mail : contact@whiteandcare.be",
      "Numéro d'entreprise (BCE) et numéro de TVA : à compléter par l'éditeur.",
    ]],
    ["Directeur de la publication", ["La direction de White & Care SRL."]],
    ["Hébergement", [
      "Le site est hébergé par un prestataire situé dans l'Union européenne, garantissant la conformité au RGPD.",
      "Les coordonnées de l'hébergeur sont disponibles sur simple demande.",
    ]],
    ["Propriété intellectuelle", [
      "L'ensemble des contenus de ce site (textes, visuels, logo White & Care) est protégé par le droit d'auteur. Toute reproduction, même partielle, sans autorisation écrite préalable est interdite.",
    ]],
    ["Données personnelles & cookies", [
      "Les données collectées via les formulaires (nom, téléphone) servent uniquement à traiter votre demande de rendez-vous ou de contact. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.",
      `Pour en savoir plus, consultez notre <a href="https://www.iubenda.com/privacy-policy/80675497" target="_blank" rel="noopener nofollow">politique de confidentialité</a> et notre <a href="https://www.iubenda.com/privacy-policy/80675497/cookie-policy" target="_blank" rel="noopener nofollow">politique de cookies</a>.`,
    ]],
    ["Responsabilité", [
      "Les informations médicales présentées sur ce site sont à but informatif et ne remplacent en aucun cas une consultation. White & Care ne saurait être tenu responsable d'une mauvaise interprétation de ces contenus.",
    ]],
  ];
  const blocks = sections.map(([h, paras]) =>
    `<div style="margin-bottom:28px"><h2 style="font-size:21px;color:var(--wc-ink)">${h}</h2>`
    + paras.map((p) => `<p style="font-size:15.5px;line-height:1.7;color:var(--wc-body);margin-top:10px">${p}</p>`).join("")
    + `</div>`
  ).join("");
  const body = `<section class="wc-pagehero"><div class="wc-container"><div class="wc-glass-card" style="padding:40px">
  <p class="wc-eyebrow">Informations légales</p>
  <h1 style="font-size:38px;margin-top:12px">Mentions légales</h1>
  <p class="wc-lead" style="color:var(--wc-muted);margin-top:8px">Dernière mise à jour : juin 2026.</p>
</div></div></section>
<section class="wc-section"><div class="wc-container">
  <div class="wc-card" style="padding:40px;max-width:860px;margin:0 auto">${blocks}</div>
</div></section>`;
  return {
    path: "mentions-legales/index.html",
    meta: {
      title: "Mentions légales | White & Care",
      description: "Mentions légales du site White & Care, cabinet dentaire conventionné INAMI à Anderlecht (Bruxelles) : éditeur, hébergement, propriété intellectuelle, données personnelles.",
      canonical: url,
    },
    body,
  };
}

export function allPages() {
  return [home(), conventionne(), implant(), invisalign(), orthodontie(), blanchiment(), surfacage(), urgence(), cabinet(), mentions()];
}
