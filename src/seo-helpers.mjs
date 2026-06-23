// White & Care · shared SEO helpers (schema, FAQ schema, reusable copy)
import { SITE } from "./partials.mjs";

// "On parle votre langue" · reusable multilingual welcome paragraph
export const LANGUE = "Chez nous, chaque patient mérite de se sentir compris : notre équipe de dentistes parle plusieurs langues. Selon le praticien, vous pouvez vous exprimer pendant les soins en français, anglais, arabe (marocain et tunisien), allemand, portugais, espagnol, roumain, vietnamien, mandarin… Pour la prise de rendez-vous par téléphone, l'accueil s'effectue principalement en français, anglais ou arabe. Pensez à préciser votre langue dès la prise de rendez-vous pour organiser au mieux votre accueil.";

// Dentist LD+JSON schema · pages swap url / name / description
export function schema({ url, name, description }) {
  return {
    "@context": "https://schema.org", "@type": "Dentist", "@id": SITE + "/#dentist",
    name, description, url,
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
}

export function faqSchema(items) {
  return {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
}

export { SITE };
