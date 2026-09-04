// Navigation labels and destinations, shared by the navbar, menu panel, and footer.

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

export const bookLabel = "Book Appointment";
export const bookHref = "/book";
export const callLabel = "Call";
