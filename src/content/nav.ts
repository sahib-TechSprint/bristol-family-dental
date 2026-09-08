// Navigation labels and destinations, shared by the navbar, menu panel, and footer.
//
// The site takes no form submissions. Every primary action is a phone call, so
// the one call to action links to the practice phone number. If the practice
// later adds compliant online scheduling, change callHref and callLabel here
// and every button on the site follows.

import { practice } from "./practice";

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "New Patients", href: "/new-patients" },
  { label: "Insurance", href: "/insurance" },
  { label: "Contact", href: "/contact" },
];

/** Primary action everywhere: a phone call to the front desk. */
export const callHref = `tel:${practice.phone.tel}`;
export const callLabel = `Call ${practice.phone.display}`;
/** Short form for the compact mobile navbar pill. */
export const callShort = "Call";
/** Secondary action shown beside the call button. */
export const secondaryLabel = "Hours and directions";
export const secondaryHref = "/contact";
