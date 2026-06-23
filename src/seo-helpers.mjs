// White & Care · shared SEO helpers (schema, FAQ schema, reusable copy)
import { SITE } from "./partials.mjs";

// "On parle votre langue" · reusable multilingual welcome paragraph
export const LANGUE = "Chez nous, chaque patient mérite de se sentir compris : notre équipe de dentistes parle plusieurs langues. Selon le praticien, vous pouvez vous exprimer pendant les soins en français, anglais, arabe (marocain et tunisien), allemand, portugais, espagnol, roumain, vietnamien, mandarin… Pour la prise de rendez-vous par téléphone, l'accueil s'effectue principalement en français, anglais ou arabe. Pensez à préciser votre langue dès la prise de rendez-vous pour organiser au mieux votre accueil.";

// Stable entity ids — one canonical business entity shared across all pages.
const DENTIST_ID = SITE + "/#dentist";
const WEBSITE_ID = SITE + "/#website";

// Page schema as a @graph: one canonical Dentist + WebSite + per-page WebPage.
// `type` lets specialist pages use "MedicalWebPage". Avoids the previous bug of
// the same @id carrying a different name/url on every page.
export function schema({ url, name, description, type = "WebPage" }) {
  const dentist = {
    "@type": "Dentist", "@id": DENTIST_ID,
    name: "White & Care",
    description: "Cabinet dentaire pluridisciplinaire à Anderlecht (centre commercial Cora, 1070 Bruxelles) : dentistes généralistes et spécialistes, dont de nombreux praticiens conventionnés INAMI.",
    url: SITE + "/",
    telephone: "+3224935353",
    image: SITE + "/assets/photos/cabinet-hero.jpeg",
    logo: SITE + "/assets/brand/logo-noir.svg",
    priceRange: "€€", currenciesAccepted: "EUR",
    address: { "@type": "PostalAddress", streetAddress: "Centre commercial Cora", addressLocality: "Anderlecht", postalCode: "1070", addressRegion: "Bruxelles", addressCountry: "BE" },
    geo: { "@type": "GeoCoordinates", latitude: 50.8333, longitude: 4.2833 },
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "10:00", closes: "18:30" }],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.6", reviewCount: "191" },
    availableLanguage: ["fr", "nl", "en", "es", "ar"], medicalSpecialty: "Dentistry",
  };
  const website = { "@type": "WebSite", "@id": WEBSITE_ID, url: SITE + "/", name: "White & Care", inLanguage: "fr-BE", publisher: { "@id": DENTIST_ID } };
  const page = {
    "@type": type, "@id": url + "#webpage", url, name, description,
    inLanguage: "fr-BE", isPartOf: { "@id": WEBSITE_ID }, about: { "@id": DENTIST_ID },
  };
  return { "@context": "https://schema.org", "@graph": [dentist, website, page] };
}

export function faqSchema(items) {
  return {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
}

export { SITE };
