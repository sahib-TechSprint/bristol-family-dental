// Per page titles and meta descriptions, written as copy, not keyword strings.

export interface PageMeta {
  title: string;
  description: string;
}

export const seo: Record<string, PageMeta> = {
  home: {
    title: "Dentist in Santa Ana, CA | Bristol Family Dental Center",
    description:
      "Gentle family dentistry in Santa Ana, from cleanings and fillings to implants, veneers, braces, and clear aligners. Bilingual team, most insurance accepted, including Denti-Cal. Call (714) 540-7101.",
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
      "New to Bristol Family Dental Center in Santa Ana? See what to expect at your first visit, download new patient forms in English or Spanish, and get answers to common dental questions.",
  },
  insurance: {
    title: "Insurance and Payment Options | Bristol Family Dental Center",
    description:
      "We accept virtually all dental insurance in Santa Ana: PPO, HMO, and Denti-Cal, plus CareCredit financing and cash, check, or card. Coverage explained before treatment.",
  },
  book: {
    title: "Book an Appointment | Bristol Family Dental Center",
    description:
      "Request a dental appointment at Bristol Family Dental Center in Santa Ana. Tell us what you need and when works best, and our bilingual front office will call you to confirm.",
  },
  contact: {
    title: "Contact Us in Santa Ana | Bristol Family Dental Center",
    description:
      "Find Bristol Family Dental Center at 2618 S. Bristol St., Santa Ana, on the corner of Central and Bristol. Hours, directions, phone, and fax for our family dental office.",
  },
  espanol: {
    title: "Dentista en Santa Ana, CA | Bristol Family Dental Center",
    description:
      "Dentista familiar en Santa Ana con equipo 100% bilingüe. Limpiezas, resinas, coronas, implantes, frenos y más. Aceptamos casi todos los seguros, incluyendo Denti-Cal. Llame al (714) 540-7101.",
  },
  notFound: {
    title: "Page Not Found | Bristol Family Dental Center",
    description:
      "That page could not be found. Head back to Bristol Family Dental Center's home page or book an appointment with our Santa Ana office.",
  },
};
