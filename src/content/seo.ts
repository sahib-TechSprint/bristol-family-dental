// Per page titles and meta descriptions, written as copy, not keyword strings.

export interface PageMeta {
  title: string;
  description: string;
}

export const seo: Record<string, PageMeta> = {
  home: {
    title: "Dentist in Santa Ana, CA | Bristol Family Dental Center",
    description:
      "Family dentistry in Santa Ana, from cleanings and fillings to implants, veneers, braces, and clear aligners. Bilingual team, most insurance accepted, including Denti-Cal. Call (714) 540-7101.",
  },
  services: {
    title: "Dental Services in Santa Ana | Bristol Family Dental Center",
    description:
      "Complete dental care under one roof in Santa Ana: exams, cleanings, fillings, root canals, crowns, dentures, implants, veneers, whitening, and orthodontics. Se habla español.",
  },
  about: {
    title: "Meet Dr. Ruben Begino, D.D.S. | Bristol Family Dental Center",
    description:
      "Dr. Ruben Begino, a UCSF trained dentist, has led Bristol Family Dental Center in Santa Ana since 2006. Meet the bilingual team behind our warm family care.",
  },
  newPatients: {
    title: "New Patients and FAQ | Bristol Family Dental Center",
    description:
      "New to Bristol Family Dental Center in Santa Ana? See what to expect at your first visit, download new patient forms in English or Spanish, and get answers to common questions.",
  },
  insurance: {
    title: "Insurance and Payment Options | Bristol Family Dental Center",
    description:
      "Bristol Family Dental Center in Santa Ana accepts most dental insurance, including PPO, HMO, and Denti-Cal, plus CareCredit, cash, check, or card. Coverage explained before treatment.",
  },
  contact: {
    title: "Contact Us in Santa Ana | Bristol Family Dental Center",
    description:
      "Find Bristol Family Dental Center at 2618 S. Bristol St., Santa Ana, at Central and Bristol. Hours, directions, phone, and fax for our family dental office.",
  },
  privacy: {
    title: "Privacy Policy | Bristol Family Dental Center",
    description:
      "How the Bristol Family Dental Center website handles information: no forms, no tracking, what the Google map and our host collect, and your California privacy rights.",
  },
  terms: {
    title: "Terms of Use and Disclaimer | Bristol Family Dental Center",
    description:
      "The terms that apply when you use the Bristol Family Dental Center website, including the medical disclaimer, imagery notice, and limitation of liability.",
  },
  accessibility: {
    title: "Accessibility Statement | Bristol Family Dental Center",
    description:
      "Bristol Family Dental Center wants a website everyone can use. Read what we do to meet WCAG 2.1 AA, current limitations, and how to reach us if something is hard to use.",
  },
  notFound: {
    title: "Page Not Found | Bristol Family Dental Center",
    description:
      "That page could not be found. Head back to Bristol Family Dental Center's home page or call our Santa Ana office.",
  },
};
