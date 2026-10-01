// JSON-LD builders. Each page passes the structures it needs to the base layout.

import { practice } from "../content/practice";
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
    image: absolute(siteUrl, "/og/og-default.png"),
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
    "@id": absolute(siteUrl, "/about#dentist"),
    name: "Pablo Lazaro",
    honorificSuffix: "D.D.S.",
    jobTitle: "Dentist",
    worksFor: { "@id": absolute(siteUrl, "/#practice") },
    knowsLanguage: practice.languages,
    url: absolute(siteUrl, "/about"),
  };
}
