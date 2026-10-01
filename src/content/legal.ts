// Legal pages, English. Plain language drafts written for a website that
// collects nothing: no forms, no accounts, no analytics. They are careful
// drafts, not legal advice; the practice's attorney should review them before
// the domain goes live, and the effective date should be updated whenever
// the wording changes.

import type { LegalSection } from "../components/LegalPage.astro";

export const legalEffectiveDate = "October 1, 2026";

// ------------------------------------------------------------------ privacy

export const privacy = {
  label: "Legal",
  heading: "Privacy policy",
  intro: `Effective ${legalEffectiveDate}. The short version: this website has no forms and no accounts, it does not use advertising or analytics trackers, and the practice never sells personal information. The only things that touch your information are the phone call or email you choose to make.`,
  ariaLabel: "Privacy policy details",
};

export const privacySections: LegalSection[] = [
  {
    heading: "Who we are",
    body: [
      "This website is operated for Bristol Family Dental Center, a dental practice located at 2618 S. Bristol St., Santa Ana, CA 92704, phone (714) 540-7101. The site was designed and is maintained by Carbon Quill Media on the practice's behalf. This policy explains what information the site handles and what it does not.",
    ],
  },
  {
    heading: "What this site collects: nothing you type",
    body: [
      "There are no forms, logins, chat widgets, or appointment tools on this site. You cannot enter your name, contact details, or health information anywhere on it. To reach the practice you call or email, and those conversations happen outside this website.",
      "Like every website, the site is delivered by a hosting provider (Vercel) that keeps standard technical logs to run and protect the service: the IP address a request came from, the page requested, the time, and the browser type. The practice does not use those logs to identify or profile visitors, and they are kept only as long as the hosting provider needs them for security and operations.",
    ],
  },
  {
    heading: "Cookies and similar technologies",
    body: [
      "This site does not set cookies of its own, and it does not use analytics, advertising, or social media trackers. The site stores one small flag in your browser's session storage to remember that the opening animation has already played; it contains no personal information and is cleared when you close the tab.",
      "The contact page embeds a map from Google Maps. When that map loads, Google receives your IP address and may set its own cookies under Google's privacy policy, which the practice does not control. If you would rather not load Google's map, use the Get Directions link instead, or block third party cookies in your browser; every other part of the site works without it.",
      "Because the site does not track visitors, it does not respond to browser Do Not Track signals; there is nothing to turn off.",
    ],
    link: { label: "Google privacy policy", href: "https://policies.google.com/privacy", external: true },
  },
  {
    heading: "When you call or email us",
    body: [
      "Information you share with the practice by phone, by email, or in person becomes part of your relationship with the practice, not part of this website. It is handled under the practice's health privacy obligations, including HIPAA and California's Confidentiality of Medical Information Act where they apply. Email is not a secure channel, so please keep health details for a phone call or your visit.",
    ],
  },
  {
    heading: "Downloads",
    body: [
      "The new patient forms on this site are PDF files you download, print, and fill out by hand. Nothing you write on them passes through this website. Bring the completed form to your visit.",
    ],
  },
  {
    heading: "Links to other websites",
    body: [
      "The site links to outside services such as Google Maps, Yelp, the Birdeye reviews listing, CareCredit, and the Dental Board of California. Those services have their own privacy practices, which the practice does not control. Review counts and ratings shown on this site are read from those platforms on the date noted in the site's records and are the opinions of their authors.",
    ],
  },
  {
    heading: "Children",
    body: [
      "This site is written for adults arranging care for themselves or their families. It is not directed at children under 13, and because it collects no information from anyone, it collects none from children.",
    ],
  },
  {
    heading: "Your California privacy rights",
    body: [
      "The practice does not sell or share personal information as those terms are defined in the California Consumer Privacy Act, and it collects no personal information through this website, so there is nothing to opt out of. If you believe the practice holds personal information about you from this website, you may ask what it is, ask for it to be corrected, or ask for it to be deleted, and you will not be treated differently for asking. Call (714) 540-7101 or email info@bristolfamilydentalcenter.com. Requests about your dental records are handled by the office under the health privacy rules that apply to patient records.",
    ],
  },
  {
    heading: "Security",
    body: [
      "The site is served over HTTPS and is built as static pages with no database and no server side processing of visitor information. That design keeps the amount of information at risk as close to zero as a website can get.",
    ],
  },
  {
    heading: "Changes and contact",
    body: [
      "If this policy changes, the new version will be posted on this page with a new effective date. Questions about this policy can go to the practice at (714) 540-7101 or info@bristolfamilydentalcenter.com.",
    ],
  },
];

// -------------------------------------------------------------------- terms

export const terms = {
  label: "Legal",
  heading: "Terms of use and disclaimer",
  intro: `Effective ${legalEffectiveDate}. These terms apply when you use this website. The most important parts: the site is general information, not dental advice; the clinical illustrations are digital renderings, not photographs of the practice; and hours, services, and insurance participation should be confirmed by phone.`,
  ariaLabel: "Terms of use details",
};

export const termsSections: LegalSection[] = [
  {
    heading: "Agreement to these terms",
    body: [
      "This website is operated for Bristol Family Dental Center, 2618 S. Bristol St., Santa Ana, CA 92704. By using the site you agree to these terms and to the privacy policy. If you do not agree, please do not use the site; you can always reach the practice by phone at (714) 540-7101.",
    ],
  },
  {
    heading: "General information, not dental advice",
    body: [
      "The content of this website is general information about the practice and about dentistry. It is not dental or medical advice, it is not a diagnosis, and it is not a substitute for an examination by a licensed dentist. Reading this site does not create a dentist and patient relationship. If you have a dental emergency, call the office during business hours; if you believe you are experiencing a medical emergency, call 911.",
    ],
  },
  {
    heading: "About the images on this site",
    body: [
      "The clinical illustrations on this site (teeth, crowns, aligners, dental models, and instruments) are digital renderings created for the site's design. They are not photographs of the practice's premises, equipment, staff, or patients, and they do not depict treatment results. Every patient is different, and no image on this site promises a particular outcome.",
    ],
  },
  {
    heading: "Reviews and ratings",
    body: [
      "Where the site shows a review count or rating for a platform such as Yelp, Google, or Facebook, that number was read from the platform on the date recorded in the site's files and will change over time. Reviews are written by their authors on independent platforms; the practice does not write, edit, or control them, and the site links to the platforms rather than reproducing review text.",
    ],
  },
  {
    heading: "Hours, services, and insurance can change",
    body: [
      "Office hours, the services offered, the dentists and staff on the team, accepted insurance plans, and payment options are described in good faith as of the effective date above, but they change. Please confirm anything your visit depends on by calling the office. Whether a particular plan covers a particular treatment is decided by your insurance carrier, not by this website.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "The text, layout, wordmark, and illustrations on this site belong to Bristol Family Dental Center or are used with permission, and the site design is the work of Carbon Quill Media. You may view, print, and download pages for personal, non commercial use. The site's typeface, Open Sauce One, is used under the SIL Open Font License. Third party names such as Yelp, Google, Facebook, Birdeye, CareCredit, and Denti-Cal belong to their owners and are used only to identify those services.",
    ],
  },
  {
    heading: "Acceptable use",
    body: [
      "Please use the site as it is meant to be used. Do not attempt to interfere with its operation, to probe or attack the hosting infrastructure, or to scrape or republish its content beyond the personal use allowed above.",
    ],
  },
  {
    heading: "Third party websites",
    body: [
      "Links to other websites are provided for convenience. The practice does not control those sites and is not responsible for their content, their privacy practices, or their availability.",
    ],
  },
  {
    heading: "No warranties and limitation of liability",
    body: [
      "This website is provided as is and as available, without warranties of any kind, express or implied, including that it will be accurate, uninterrupted, or error free. To the fullest extent permitted by law, Bristol Family Dental Center and Carbon Quill Media are not liable for any damages arising from your use of, or inability to use, this website or any website it links to. Nothing in these terms limits the practice's obligations to its patients under the laws that govern dental care.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms are governed by the laws of the State of California, and any dispute about this website will be handled in the state or federal courts located in Orange County, California.",
    ],
  },
  {
    heading: "Practice and licensing information",
    body: [
      "Bristol Family Dental Center is a dental practice in Santa Ana, California. Its dentist, Pablo Lazaro, D.D.S., is licensed by the Dental Board of California. Orthodontic care at the office is provided by Dr. Efrain Chara, orthodontist, of Chara Orthodontics. Dentists are licensed and regulated by the Dental Board of California, 2005 Evergreen Street, Suite 1550, Sacramento, CA 95815, (877) 729-7789.",
    ],
    link: { label: "Dental Board of California", href: "https://www.dbc.ca.gov", external: true },
  },
  {
    heading: "Changes and contact",
    body: [
      "If these terms change, the new version will be posted on this page with a new effective date. Questions can go to the practice at (714) 540-7101 or info@bristolfamilydentalcenter.com.",
    ],
  },
];

// ------------------------------------------------------------ accessibility

export const accessibility = {
  label: "Accessibility",
  heading: "A site everyone can use",
  intro: `Statement last reviewed ${legalEffectiveDate}. If anything on this site is hard for you to read or use, call us and we will help directly and fix it for the next person.`,
  ariaLabel: "Accessibility statement details",
};

export const accessibilitySections: LegalSection[] = [
  {
    heading: "Our commitment",
    body: [
      "We want every patient and family member to be able to read this site, find our phone number, and find our door, regardless of ability or the technology they use. The site is built to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at level AA.",
    ],
  },
  {
    heading: "What the site does",
    body: [
      "Text colors are checked for contrast against their backgrounds, including text that sits on images. Every page can be navigated with a keyboard alone, including the menu and the language switch, and a skip link jumps straight to the content. Images that carry meaning have text alternatives, decorative images are hidden from assistive technology, and the site respects your reduced motion preference by turning off every animation. Both the English and Spanish versions of the site carry correct language tags so screen readers pronounce them properly. Links that open a new tab say so.",
    ],
  },
  {
    heading: "How we check",
    body: [
      "Every page is tested with automated accessibility tooling against the WCAG 2.1 AA rule set at five screen sizes, alongside manual keyboard, zoom, and screen reader checks. Accessibility is re-verified whenever the site changes in a meaningful way.",
    ],
  },
  {
    heading: "Known limitations",
    body: [
      "The downloadable new patient forms are scans of the practice's paper forms, so they are not fillable or screen reader friendly yet. If the forms are difficult for you, skip them: call us and we will take your information over the phone or help you at the front desk. The map on the contact page is provided by Google, and its controls are Google's own; the address and a Get Directions link sit right beside it in plain text.",
    ],
  },
  {
    heading: "Tell us if something is hard to use",
    body: [
      "If any part of this site is difficult for you, we want to know so we can fix it. Call us at (714) 540-7101 or email info@bristolfamilydentalcenter.com and tell us what happened and what you were trying to do. We take these reports seriously and respond as quickly as we can.",
    ],
  },
];
