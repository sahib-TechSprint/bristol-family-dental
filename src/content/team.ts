// The doctor and team. Bios stick strictly to verified facts. Per the
// client's direction, the site runs without staff photography until a
// professional shoot is done, so these entries are intentionally text only.

export const doctor = {
  name: "Ruben H. Begino, D.D.S.",
  shortName: "Dr. Begino",
  role: "Lead Dentist, Head of Dentistry since 2006",
  intro:
    "Dr. Ruben H. Begino has led the dentistry at Bristol Family Dental Center since 2006. Patients know him for gentle hands, straight answers, and a practice built around families rather than upsells. He is a fluent Spanish speaker, and he treats every patient the way he would want his own family treated.",
  educationCopy:
    "Dr. Begino earned his B.S. in Biology with honors from UC Irvine in 1996, then his D.D.S. from the UC San Francisco School of Dentistry in 2001. That same year, his work was recognized by both the American College of Prosthodontics and the American Academy of Esthetic Dentistry, two of the most respected organizations in restorative and cosmetic dentistry. He has led the dentistry at Bristol Family Dental Center since 2006.",
  volunteerCopy:
    "For Dr. Begino, dentistry has never stopped at the office door. He has taken free dental care to families in Mexico, Guatemala, and Belize, served initiatives including Puente a la Salud and La Amistad, advocated for pediatric dentistry across Orange County, cared for homeless patients, and worked local health fairs. The belief behind all of it also shapes this practice: good dental care belongs to everyone.",
};

export interface TeamMember {
  name: string;
  role: string;
  note: string;
}

export const team: TeamMember[] = [
  {
    name: "Dr. Pablo Lazaro",
    role: "Dentist",
    note: "Provides the full range of general and restorative care alongside Dr. Begino.",
  },
  {
    name: "Jacquelin Magaña",
    role: "Office Manager",
    note: "Keeps the office running smoothly and helps with scheduling, insurance, and payment plans.",
  },
  {
    name: "Roxana Rojas",
    role: "Front Office",
    note: "The friendly voice on the phone. She will find you a time that works and answer your questions.",
  },
  {
    name: "Elizabeth Camberos",
    role: "Dental Assistant",
    note: "Keeps every visit comfortable, prepared, and on time, chairside with the doctors.",
  },
];

export const bilingualNote =
  "Every member of our team is bilingual. Ask your questions in English or Spanish and get answers in the language you think in.";
