// Per page titles and meta descriptions, written as copy, not keyword strings.

export interface PageMeta {
  title: string;
  description: string;
}

export const seo: Record<string, PageMeta> = {
  home: {
    title: "Dentist in Santa Ana, CA | Bristol Family Dental Center",
    description:
      "Family dentist in Santa Ana: cleanings, fillings, crowns, veneers, braces, and clear aligners. Bilingual team, most insurance taken. Call (714) 540-7101.",
  },
  services: {
    title: "Dental Services in Santa Ana | Bristol Family Dental Center",
    description:
      "Complete dental care in Santa Ana: exams, cleanings, fillings, root canals, crowns, dentures, veneers, whitening, and orthodontics. Se habla español.",
  },
  about: {
    title: "About Our Dental Practice | Bristol Family Dental Center",
    description:
      "Bristol Family Dental Center, Santa Ana: general dentistry with Pablo Lazaro, D.D.S., orthodontics with Dr. Efrain Chara, and a bilingual team.",
  },
  newPatients: {
    title: "New Patients and FAQ | Bristol Family Dental Center",
    description:
      "New to Bristol Family Dental Center in Santa Ana? What to expect at your first visit, forms in English and Spanish, and answers to common questions.",
  },
  insurance: {
    title: "Insurance and Payment Options | Bristol Family Dental Center",
    description:
      "Bristol Family Dental Center in Santa Ana accepts most dental insurance, including PPO and HMO plans, plus CareCredit, cash, check, or card.",
  },
  contact: {
    title: "Contact Us in Santa Ana | Bristol Family Dental Center",
    description:
      "Find Bristol Family Dental Center at 2618 S. Bristol St., Santa Ana, at Central and Bristol. Hours, directions, phone, and fax for our office.",
  },
  privacy: {
    title: "Privacy Policy | Bristol Family Dental Center",
    description:
      "How the Bristol Family Dental Center website handles information: no forms, no tracking, what the map and host collect, and your California rights.",
  },
  terms: {
    title: "Terms of Use and Disclaimer | Bristol Family Dental Center",
    description:
      "The terms that apply when you use the Bristol Family Dental Center website, including the medical disclaimer, imagery notice, and limitation of liability.",
  },
  accessibility: {
    title: "Accessibility Statement | Bristol Family Dental Center",
    description:
      "Bristol Family Dental Center wants a website everyone can use: how we meet WCAG 2.1 AA, current limitations, and how to reach us if something is hard.",
  },
  notFound: {
    title: "Page Not Found | Bristol Family Dental Center",
    description:
      "That page could not be found. Head back to Bristol Family Dental Center's home page or call our Santa Ana office.",
  },
};
