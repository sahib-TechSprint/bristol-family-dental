// Single source of truth for practice facts. Every page reads from here.
// Update this file when the practice details change; nothing below is duplicated elsewhere.

export const practice = {
  name: "Bristol Family Dental Center",
  tagline: "Your care is our concern.",
  phone: {
    display: "(714) 540-7101",
    tel: "+17145407101",
  },
  fax: {
    display: "(714) 540-6061",
  },
  email: "info@bristolfamilydentalcenter.com",
  address: {
    street: "2618 S. Bristol St.",
    city: "Santa Ana",
    state: "CA",
    zip: "92704",
    full: "2618 S. Bristol St., Santa Ana, CA 92704",
  },
  landmarks:
    "You will find us on the corner of Central and Bristol, between Segerstrom and Warner, in the shopping center with the KFC on the corner, directly across the street from Coastal Community Hospital.",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=2618+S+Bristol+St%2C+Santa+Ana%2C+CA+92704",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=2618+S+Bristol+St%2C+Santa+Ana%2C+CA+92704&output=embed",
  geo: {
    latitude: 33.7112,
    longitude: -117.8886,
  },
  hours: [
    { label: "Monday to Friday", value: "9:00 a.m. to 6:00 p.m." },
    { label: "Saturday and Sunday", value: "Closed" },
  ],
  hoursNote: "Same day visits are often available on weekdays. Call and we will do our best to fit you in.",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  languages: ["English", "Spanish"],
  sameAs: [
    "https://www.yelp.com/biz/bristol-family-dental-center-santa-ana",
    "https://www.instagram.com/bristol.family.dental.center/",
  ],
} as const;

export type Practice = typeof practice;
