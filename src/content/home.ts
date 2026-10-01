// Home page copy, section by section, top to bottom.

export const hero = {
  supporting:
    "Complete care for every smile in the family, from first cleanings to full restorations",
  label: "Family Dentist in Santa Ana",
  // The practice's full name, as the office asked (October 2026). Two lines on
  // every width; the display size in HeroSection is tuned to this length.
  displayLines: ["Bristol Family", "Dental Center"],
  corner: "Se Habla Español",
  facts: ["Kids, teens, and adults", "Braces and clear aligners", "Most insurance, including Denti-Cal"],
  secondaryLabel: "Explore services",
  secondaryHref: "/services",
  image: {
    src: "/images/family-brushes.webp",
    mobileSrc: "/images/family-brushes-mobile.webp",
    alt: "Clinical render of three toothbrushes in three sizes, from a child's to an adult's, standing in a frosted glass on a deep blue surface",
  },
};

export const gallery = {
  heading: "Cosmetic Dentistry",
  sub: "Four ways we improve smiles",
  tallCard: "Chipped, stained, or uneven teeth can be corrected. Ask about a smile makeover.",
  display: "Smile makeover",
  imageAlt: "Clinical render of porcelain veneers and a ceramic crown on a dark blue surface",
  cards: [
    { number: "01", name: "Dental Veneers", href: "/services#veneers", active: true },
    { number: "02", name: "Dental Crowns", href: "/services#crowns", active: false },
    { number: "03", name: "Teeth Whitening", href: "/services#whitening", active: false },
    { number: "04", name: "Clear Aligners", href: "/services#clear-aligners", active: false },
  ],
};

// Restorative dentistry section (replaced the implant section in October
// 2026: the office does not offer implants until a dentist who places them
// joins the practice).
export const restorativeSection = {
  displayLines: ["Restorative", "Dentistry"],
  subtitle: "Repair and Replace",
  consultLabel: "How it works",
  consultHeading: "Crowns, Bridges, and Dentures",
  overlayCards: [
    { title: "Crowns and bridges", href: "/services#crowns", glass: false },
    { title: "Dentures and partials", href: "/services#dentures", glass: true },
  ],
  processSteps: [
    { number: "1", title: "Consultation", text: "An exam, X-rays if they are needed, and a plain explanation of what can be saved and what should be replaced." },
    { number: "2", title: "Preparation", text: "The tooth is shaped or impressions are taken, and a temporary protects it while the lab makes the final piece." },
    { number: "3", title: "Fitting", text: "Your crown, bridge, or denture is tried in, adjusted, and checked until the bite feels right." },
  ],
  images: {
    first: { src: "/images/restorative-bridge.webp", alt: "Clinical render of a three unit ceramic dental bridge on a deep blue surface" },
    second: { src: "/images/restorative-denture.webp", alt: "Clinical render of a full upper denture model with a translucent base on a deep blue surface" },
    tall: { src: "/images/restoration-tall.webp", alt: "Clear dental teaching model of the upper and lower jaws on a small articulator" },
  },
};

export const why = {
  label: "Why Bristol Family Dental Center",
  heading: "Care your whole family can count on",
  cards: [
    {
      icon: "tooth",
      title: "Orthodontics under this roof",
      text: "Braces and clear aligners for kids, teens, and adults, provided by Dr. Efrain Chara, orthodontist, right here in our office. Straighter teeth without being sent across town.",
    },
    {
      icon: "globe",
      title: "We speak Spanish",
      text: "Our team is bilingual. Ask your questions in English or Spanish and get answers in the language you think in.",
    },
    {
      icon: "family",
      title: "One office for the whole family",
      text: "First cleanings, braces, crowns, dentures. We care for kids, parents, and grandparents under one roof, and we coordinate trusted specialists when a case calls for one.",
    },
  ],
};

export const finalCta = {
  heading: "Ready when you are.",
  sub: "Call during office hours and a real person answers, in English or Spanish. We will find you a time that works.",
};
