// Patient review platforms, verified live before launch. Every number below
// was read from the platform on the date noted. The site links to the
// platforms and shows their public totals; it does not reproduce review text,
// because review text belongs to its authors and the platforms' terms limit
// how it can be republished. Counts drift over time: re-verify before each
// redesign or major update, and record the date here.

export const reviewsVerifiedOn = "September 8, 2026";

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
    // Google Maps URL API search, which resolves to the practice's listing.
    href: "https://www.google.com/maps/search/?api=1&query=Bristol+Family+Dental+Center+2618+S+Bristol+St+Santa+Ana+CA+92704",
  },
  {
    platform: "Facebook",
    count: 29,
    countLabel: "29 reviews",
    href: "https://reviews.birdeye.com/bristol-family-dental-center-155354977451366",
    note: "counted via Birdeye",
  },
];

export const reviewsSection = {
  label: "Patient Reviews",
  heading: "Read what patients say about us",
  body: "Reviews are written by patients on independent platforms. Read them all, in their own words, on the platform of your choice.",
  ratingAria: "rated",
  outOf: "out of 5",
};

// Questions patients ask before they call. Answers stick to facts already
// stated on the insurance, new patients, and hours content.
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
      "We accept most insurance plans, including most PPO plans, HMO plans, and Denti-Cal. Tell us your carrier when you call and we will check your coverage before you sit down.",
    linkLabel: "Insurance and payment options",
    linkHref: "/insurance",
  },
  {
    question: "What if I do not have insurance?",
    answer:
      "You are still welcome. We accept cash, checks, and all major credit cards, and CareCredit financing is available for qualified patients. Our front office will walk you through every option.",
    linkLabel: "Insurance and payment options",
    linkHref: "/insurance",
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
      "Yes. We care for kids, parents, and grandparents under one roof, from first cleanings to braces, crowns, and dentures, and we coordinate trusted specialists when a case calls for one.",
    linkLabel: "See all services",
    linkHref: "/services",
  },
  {
    question: "Do you offer braces or clear aligners?",
    answer:
      "Yes. We provide orthodontics for kids, teens, and adults, including traditional braces and clear aligners, with steady checkups along the way. Ask for an orthodontic consultation when you call.",
    linkLabel: "Orthodontics",
    linkHref: "/services#group-orthodontics",
  },
];

export const homeFaqSection = {
  label: "Common Questions",
  heading: "Before you call",
  moreLabel: "More questions patients ask us",
  moreHref: "/new-patients#faq-heading",
};
