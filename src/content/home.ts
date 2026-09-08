// Home page copy, section by section, top to bottom.

export const hero = {
  supporting:
    "Complete care for every smile in the family, from first cleanings to full restorations",
  label: "Family Dentist in Santa Ana",
  displayLines: ["Bristol", "Smiles"],
  corner: "Se Habla Español",
  facts: ["Kids, teens, and adults", "Braces and clear aligners", "Most insurance, including Denti-Cal"],
  secondaryLabel: "Explore services",
  secondaryHref: "/services",
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
    { number: "04", name: "Dental Implants", href: "/services#implants", active: false },
  ],
};

export const implantSection = {
  displayLines: ["Implant", "Dentistry"],
  subtitle: "Restore Missing Teeth",
  consultLabel: "Consultation",
  consultHeading: "Dental Restoration Services",
  overlayCards: [
    { title: "How implants are placed", href: "/services#implants", glass: false },
    { title: "Caring for dental implants", href: "/services#implants", glass: true },
  ],
  processSteps: [
    { number: "1", title: "Consultation", text: "An exam and an honest conversation to confirm an implant is right for you." },
    { number: "2", title: "Placement", text: "The small titanium post is placed and left to bond with the bone." },
    { number: "3", title: "Restoration", text: "Your custom crown is attached, and your smile is whole again." },
  ],
};

export const why = {
  label: "Why Bristol",
  heading: "Care your whole family can count on",
  cards: [
    {
      icon: "tooth",
      title: "Orthodontics under this roof",
      text: "Braces and clear aligners for kids, teens, and adults, handled by the same team that cares for the rest of your smile. Straighter teeth without being sent across town.",
    },
    {
      icon: "globe",
      title: "We speak Spanish",
      text: "Our team is bilingual. Ask your questions in English or Spanish and get answers in the language you think in.",
    },
    {
      icon: "family",
      title: "One office for the whole family",
      text: "First cleanings, braces, implants, dentures. We care for kids, parents, and grandparents under one roof, and we coordinate trusted specialists when a case calls for one.",
    },
  ],
};

export const finalCta = {
  heading: "Ready when you are.",
  sub: "Call during office hours and a real person answers, in English or Spanish. We will find you a time that works.",
};
