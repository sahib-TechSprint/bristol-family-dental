// JSON-LD builders. Each page passes the structures it needs to the base layout.

import { practice } from "../content/practice";
import { doctor } from "../content/team";
import type { FaqItem } from "../content/faq";

function absolute(siteUrl: string, path: string): string {
  return new URL(path, siteUrl).toString();
}

export function dentistSchema(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": absolute(siteUrl, "/#practice"),
    name: practice.name,
    slogan: practice.tagline,
    url: absolute(siteUrl, "/"),
    telephone: practice.phone.display,
    faxNumber: practice.fax.display,
    email: practice.email,
    image: absolute(siteUrl, "/images/hero.webp"),
    address: {
      "@type": "PostalAddress",
      streetAddress: practice.address.street,
      addressLocality: practice.address.city,
      addressRegion: practice.address.state,
      postalCode: practice.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: practice.geo.latitude,
      longitude: practice.geo.longitude,
    },
    hasMap: practice.mapsUrl,
    openingHoursSpecification: practice.openingHoursSpecification,
    priceRange: practice.priceRange,
    availableLanguage: practice.languages,
    sameAs: practice.sameAs,
  };
}

export function faqSchema(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function personSchema(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absolute(siteUrl, "/about#dr-begino"),
    name: "Ruben H. Begino",
    honorificSuffix: "D.D.S.",
    jobTitle: "Dentist",
    worksFor: { "@id": absolute(siteUrl, "/#practice") },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "University of California, Irvine" },
      { "@type": "CollegeOrUniversity", name: "UC San Francisco School of Dentistry" },
    ],
    award: [
      "Recognized by the American College of Prosthodontics (2001)",
      "Recognized by the American Academy of Esthetic Dentistry (2001)",
    ],
    knowsLanguage: practice.languages,
    url: absolute(siteUrl, "/about"),
  };
}
