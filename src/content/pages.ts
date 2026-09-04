// Copy for the inner pages: about, new patients, insurance, contact, book, and the 404.

export const about = {
  label: "About Us",
  heading: "The dentist Santa Ana families trust",
  teamHeading: "The team you will meet",
  volunteerHeading: "Care that travels",
  educationHeading: "Training and recognition",
};

export const newPatients = {
  label: "New Patients",
  heading: "Your first visit, without the mystery",
  expectHeading: "What to expect",
  expect:
    "We will review your health history and complete a full exam. Before you leave, the doctor will walk you through what he found and what he recommends, in plain language. No surprises and no pressure.",
  bringHeading: "What to bring",
  bring: [
    "A photo ID",
    "Your dental insurance card, if you have one",
    "A list of any medications you take",
    "Your completed new patient form, if you filled it out at home",
  ],
  formsHeading: "New patient forms",
  formsCopy:
    "Save time in the waiting room. Download the new patient form, fill it out at home, and bring it to your first visit. The form is available in English and Spanish.",
  formEn: { label: "Download Form (English)", href: "/forms/new-patient-en.pdf" },
  formEs: { label: "Descargar Formulario (Español)", href: "/forms/new-patient-es.pdf" },
  faqHeading: "Questions patients ask us",
};

export const insurance = {
  label: "Insurance and Payment",
  heading: "We make the money part simple",
  intro:
    "We accept virtually all insurance plans, and we will help you make sense of yours. Bring your card to your first visit, or tell us your carrier when you book, and we will check your coverage before you sit down.",
  plans: [
    {
      id: "ppo",
      badge: "PPO",
      name: "PPO Plans",
      text: "We are a preferred provider for most PPO plans. That means your insurance company already works directly with our office, so your benefits apply smoothly from the first visit.",
    },
    {
      id: "hmo",
      badge: "HMO",
      name: "HMO Plans",
      text: "We welcome HMO patients, with one important detail: your plan must assign or transfer you to our office before your visit. A quick call to the number on your insurance card usually takes care of it, and our front office can walk you through the steps.",
    },
    {
      id: "denti-cal",
      badge: "Denti-Cal",
      name: "Denti-Cal",
      text: "We proudly accept Denti-Cal, California's dental coverage for Medi-Cal members. If you are not sure what your plan covers, ask us and we will help you find out.",
    },
  ],
  paymentHeading: "No insurance? You are still covered.",
  payment: [
    {
      id: "cash-cards",
      badge: "Cash and Cards",
      name: "Cash, Check, and Credit Cards",
      text: "We accept cash, personal checks, and all major credit cards. Pay the way that works best for you.",
    },
    {
      id: "carecredit",
      badge: "CareCredit",
      name: "CareCredit Financing",
      text: "CareCredit lets qualified patients split treatment into manageable monthly payments. Applying takes a few minutes, and approval is often instant.",
    },
    {
      id: "in-house",
      badge: "In House",
      name: "In House Financing",
      text: "We also offer a limited in house financing option for select patients. A deposit is required, and our office manager can tell you whether your treatment qualifies.",
    },
  ],
  promiseHeading: "Our promise to you",
  promise:
    "Before any treatment begins, you will know exactly what we recommend, why we recommend it, and how your coverage applies. We explain everything in plain language, and we never pressure you into care you do not need.",
};

export const contact = {
  label: "Contact",
  heading: "Come say hello",
  findUsHeading: "How to find us",
  hoursHeading: "Office hours",
  mapTitle: "Map showing Bristol Family Dental Center at 2618 S Bristol St, Santa Ana, CA 92704",
};

export const book = {
  label: "Book an Appointment",
  heading: "Let's find you a time",
  sub: "Tell us a little about what you need and when works best. We will call you back to confirm your appointment. Prefer to talk to a person right now? Call us during office hours.",
  formHeading: "Request an appointment",
  confirmHeading: "Request received!",
  confirm:
    "Thank you. Our front office will call you to confirm a time that works. If you need us sooner, call (714) 540-7101 during office hours and we will pick up.",
  privacyNote: "We only use your information to contact you about your appointment.",
};

export const notFound = {
  heading: "This page moved, or never was.",
  sub: "No problem. The whole practice is just a click away.",
  homeCta: "Back to Home",
  bookCta: "Book Appointment",
};
