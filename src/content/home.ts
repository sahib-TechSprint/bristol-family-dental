// Home page copy, section by section, top to bottom.

export const hero = {
  supporting:
    "Complete care for every smile in the family, from first cleanings to full restorations",
  label: "Trusted Dentist in Santa Ana",
  displayLines: ["Bristol", "Smiles"],
  corner: "Se Habla Español",
};

export const gallery = {
  heading: "Cosmetic Dentistry",
  sub: "Four ways we transform smiles",
  tallCard: "If you want a gorgeous smile, ask about a smile makeover.",
  display: "Smile makeover",
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
  consultCta: "Book Online",
  overlayCards: [
    { title: "The Process of Installing Implants", href: "/services#implants", glass: false },
    { title: "Caring for Dental Implants", href: "/services#implants", glass: true },
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
      title: "The whole team speaks Spanish",
      text: "Every member of our team is bilingual. Ask your questions in English or Spanish and get answers in the language you think in.",
    },
    {
      icon: "family",
      title: "One office for the whole family",
      text: "First cleanings, braces, implants, dentures. We care for kids, parents, and grandparents under one roof, and we coordinate trusted specialists when a case calls for one.",
    },
  ],
};

export const location = {
  label: "Visit Us",
  heading: "Easy to find, easy to book",
  directionsCta: "Get Directions",
};

export const finalCta = {
  heading: "Ready when you are.",
  sub: "Book online in two minutes, or call and talk to a real person. Se habla español.",
};
