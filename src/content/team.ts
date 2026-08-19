// The doctor and team. Bios stick strictly to verified facts. Photos are the
// practice's own, from the original site: enhanced for color and size only,
// never altered. A professional photo shoot is on the client punch list.

export const doctor = {
  name: "Ruben H. Begino, D.D.S.",
  shortName: "Dr. Begino",
  role: "Lead Dentist, Head of Dentistry since 2006",
  photo: "/images/dr-begino.webp",
  photoAlt: "Dr. Ruben H. Begino at the office",
  education: [
    {
      years: "1996",
      title: "B.S. in Biology, with honors",
      place: "University of California, Irvine",
    },
    {
      years: "2001",
      title: "D.D.S., Doctor of Dental Surgery",
      place: "UC San Francisco School of Dentistry",
    },
    {
      years: "2001",
      title: "Recognized by the American College of Prosthodontics and the American Academy of Esthetic Dentistry",
      place: "",
    },
    {
      years: "2006",
      title: "Head of Dentistry, Bristol Family Dental Center",
      place: "Santa Ana, California",
    },
  ],
  intro:
    "Dr. Ruben H. Begino has led the dentistry at Bristol Family Dental Center since 2006. Patients know him for gentle hands, straight answers, and a practice built around families rather than upsells. He is a fluent Spanish speaker, and he treats every patient the way he would want his own family treated.",
  educationCopy:
    "Dr. Begino earned his B.S. in Biology with honors from UC Irvine in 1996, then his D.D.S. from the UC San Francisco School of Dentistry in 2001. That same year, his work was recognized by both the American College of Prosthodontics and the American Academy of Esthetic Dentistry, two of the most respected organizations in restorative and cosmetic dentistry.",
  volunteerCopy:
    "For Dr. Begino, dentistry has never stopped at the office door. He has taken free dental care to families in Mexico, Guatemala, and Belize, served initiatives including Puente a la Salud and La Amistad, advocated for pediatric dentistry across Orange County, cared for homeless patients, and worked local health fairs. The belief behind all of it also shapes this practice: good dental care belongs to everyone.",
};

export interface TeamMember {
  name: string;
  role: string;
  note: string;
  photo: string;
  photoAlt: string;
}

export const team: TeamMember[] = [
  {
    name: "Dr. Pablo Lazaro",
    role: "Dentist",
    note: "Provides the full range of general and restorative care alongside Dr. Begino.",
    photo: "/images/dr-lazaro.webp",
    photoAlt: "Dr. Pablo Lazaro",
  },
  {
    name: "Jacquelin Magaña",
    role: "Office Manager",
    note: "Keeps the office running smoothly and helps with scheduling, insurance, and payment plans.",
    photo: "/images/staff-jacquelin.webp",
    photoAlt: "Jacquelin Magaña, Office Manager",
  },
  {
    name: "Roxana Rojas",
    role: "Front Office",
    note: "The friendly voice on the phone. She will find you a time that works and answer your questions.",
    photo: "/images/staff-roxana.webp",
    photoAlt: "Roxana Rojas, Front Office",
  },
  {
    name: "Elizabeth Camberos",
    role: "Dental Assistant",
    note: "Keeps every visit comfortable, prepared, and on time, chairside with the doctors.",
    photo: "/images/staff-elizabeth.webp",
    photoAlt: "Elizabeth Camberos, Dental Assistant",
  },
];

export const teamPhoto = {
  src: "/images/team-bristol.webp",
  alt: "The Bristol Family Dental Center team together outdoors",
};

export const bilingualNote =
  "Every member of our team is bilingual. Ask your questions in English or Spanish and get answers in the language you think in.";

// Homepage team section copy.
export const teamSection = {
  label: "Meet the Team",
  heading: "Familiar faces, year after year",
  body: "The people who greet you, clean your teeth, and answer your billing questions are the same people you will see next visit. Dr. Begino and Dr. Lazaro lead a small bilingual team that has cared for Santa Ana families for years.",
  cta: "Meet everyone",
  ctaHref: "/about",
};
