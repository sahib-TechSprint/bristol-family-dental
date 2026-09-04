// Patient reviews, verified live before launch. Every number below was read
// from the platform on the date noted, and every quote is a verbatim excerpt
// from a five star or recommended review. Do not edit words inside quotes.
// Counts drift over time: re-verify before each redesign or major update.

export const reviewsVerifiedOn = "August 19, 2026";

export interface ReviewBadge {
  platform: string;
  rating?: string;
  count: number;
  countLabel: string;
  href: string;
  note?: string;
}

export const reviewBadges: ReviewBadge[] = [
  {
    platform: "Yelp",
    rating: "4.0",
    count: 51,
    countLabel: "51 reviews",
    href: "https://www.yelp.com/biz/bristol-family-dental-center-santa-ana",
  },
  {
    platform: "Google",
    rating: "3.8",
    count: 38,
    countLabel: "38 reviews",
    href: "https://www.google.com/maps/place/Bristol+Family+Dental+Center/@33.7118158,-117.8863284,17z/",
  },
  {
    platform: "Facebook",
    count: 29,
    countLabel: "29 reviews",
    href: "https://reviews.birdeye.com/bristol-family-dental-center-155354977451366",
    note: "counted via Birdeye",
  },
];

export interface ReviewExcerpt {
  quote: string;
  name: string;
  stars?: number;
  platform: string;
  href: string;
  lang?: "es";
}

export const reviewExcerpts: ReviewExcerpt[] = [
  {
    quote: "I didn't feel pressured to get a bunch of unnecessary work done.",
    name: "Krystian",
    stars: 5,
    platform: "Google",
    href: "https://www.google.com/maps/place/Bristol+Family+Dental+Center/@33.7118158,-117.8863284,17z/",
  },
  {
    quote: "All the staff are outstanding and they truly care",
    name: "Rachael F.",
    stars: 5,
    platform: "Yelp",
    href: "https://www.yelp.com/biz/bristol-family-dental-center-santa-ana",
  },
  {
    quote: "Roxana, was incredibly helpful and provided me with a wealth of information",
    name: "Diaz Family",
    stars: 5,
    platform: "Google",
    href: "https://www.google.com/maps/place/Bristol+Family+Dental+Center/@33.7118158,-117.8863284,17z/",
  },
  {
    quote: "Atención excelente tanto el proceso de limpieza y personal",
    name: "Connie",
    platform: "Facebook",
    href: "https://reviews.birdeye.com/bristol-family-dental-center-155354977451366",
    lang: "es",
  },
];

export const reviewsSection = {
  label: "Patient Reviews",
  heading: "What patients say about us",
  body: "Real reviews from real patients, in their own words. Read them all on the platform of your choice.",
};

// Booking focused questions for the homepage FAQ. Answers stick to facts
// already stated on the insurance, new patients, and hours content.
export interface HomeFaqItem {
  question: string;
  answer: string;
  linkLabel: string;
  linkHref: string;
}

export const homeFaq: HomeFaqItem[] = [
  {
    question: "Do you take my insurance?",
    answer:
      "We accept virtually all insurance plans, including most PPO plans, HMO plans, and Denti-Cal. Tell us your carrier when you book and we will check your coverage before you sit down.",
    linkLabel: "Book a visit",
    linkHref: "/book",
  },
  {
    question: "What if I do not have insurance?",
    answer:
      "Yes, we still welcome you. We accept cash, checks, and all major credit cards, and CareCredit financing is available for qualified patients. Our front office will walk you through every option.",
    linkLabel: "Book a visit",
    linkHref: "/book",
  },
  {
    question: "What should I bring to my first visit?",
    answer:
      "A photo ID, your insurance card if you have one, and a list of any medications you take. You can also download the new patient form and fill it out at home.",
    linkLabel: "Plan your first visit",
    linkHref: "/new-patients",
  },
  {
    question: "Do you see kids and adults?",
    answer:
      "Yes. We care for kids, parents, and grandparents under one roof, from first cleanings to braces, implants, and dentures, and we coordinate trusted specialists when a case calls for one.",
    linkLabel: "Book a visit",
    linkHref: "/book",
  },
  {
    question: "Do you offer braces or clear aligners?",
    answer:
      "Yes. We provide orthodontics for kids, teens, and adults, including traditional braces and clear aligners, with steady checkups along the way. Ask for an orthodontic consultation when you book.",
    linkLabel: "Book a visit",
    linkHref: "/book",
  },
];

export const homeFaqSection = {
  label: "Common Questions",
  heading: "Before you book",
  moreLabel: "More questions patients ask us",
  moreHref: "/new-patients#faq-heading",
};
