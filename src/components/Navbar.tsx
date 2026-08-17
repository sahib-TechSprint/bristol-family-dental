import { useCallback, useEffect, useRef, useState } from "react";
import type { NavLink } from "../content/nav";

interface Props {
  links: NavLink[];
  bookLabel: string;
  bookHref: string;
  phoneDisplay: string;
  phoneTel: string;
  tagline: string;
  pathname: string;
}

/**
 * Fixed glass navbar with a two line wordmark, phone number, Book Appointment
 * pill, and a menu that opens as a right slide-in panel on mobile and a full
 * page nav on desktop. Keyboard complete: Escape closes, focus is trapped
 * while open, and focus returns to the trigger on close.
 */
export default function Navbar({
  links,
  bookLabel,
  bookHref,
  phoneDisplay,
  phoneTel,
  tagline,
  pathname,
}: Props) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const desktopTrigger = useRef<HTMLButtonElement>(null);
  const mobileTrigger = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const openMenu = useCallback((trigger: HTMLButtonElement | null) => {
    lastTrigger.current = trigger;
    setOpen(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  }, []);

  const closeMenu = useCallback(() => {
    setVisible(false);
    window.setTimeout(() => {
      setOpen(false);
      lastTrigger.current?.focus();
    }, 500);
  }, []);

  // Body scroll lock while the panel is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Escape closes; Tab is trapped inside the panel.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, closeMenu]);

  // Move focus into the panel once it is rendered.
  useEffect(() => {
    if (open) {
      const first = panelRef.current?.querySelector<HTMLElement>("a[href], button");
      first?.focus();
    }
  }, [open]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 md:px-6 py-2 md:py-3">
        <a href="/" className="block" aria-label="Bristol Family Dental Center, home">
          <span className="block font-display text-xl md:text-2xl font-extrabold uppercase tracking-tight leading-none">
            Bristol Family
          </span>
          <span className="block font-display text-xl md:text-2xl font-extrabold uppercase tracking-tight leading-none -mt-1.5 md:-mt-2">
            Dental Center
          </span>
          <span className="block text-[8px] md:text-[9px] font-medium mt-1.5 md:mt-2 uppercase tracking-[0.14em]">
            {tagline}
          </span>
        </a>

        <div className="flex items-center gap-2.5 md:gap-4">
          <a href={`tel:${phoneTel}`} className="hidden md:inline text-sm font-semibold">
            {phoneDisplay}
          </a>
          <a
            href={bookHref}
            className="hidden md:inline-flex items-center px-6 py-3 bg-black text-white rounded-full text-sm font-semibold motion-safe:hover:scale-105 motion-safe:transition-transform"
          >
            {bookLabel}
          </a>
          <button
            ref={desktopTrigger}
            type="button"
            onClick={() => openMenu(desktopTrigger.current)}
            aria-expanded={open}
            aria-controls="site-menu"
            className="hidden md:inline-flex items-center px-6 py-3 bg-white rounded-full border border-black text-sm font-semibold hover:bg-black hover:text-white transition-colors"
          >
            Menu
          </button>

          <a
            href={bookHref}
            className="md:hidden inline-flex items-center min-h-11 px-4 bg-black text-white rounded-full text-xs font-semibold"
          >
            Book
          </a>
          <button
            ref={mobileTrigger}
            type="button"
            onClick={() => (open ? closeMenu() : openMenu(mobileTrigger.current))}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden relative z-[70] flex h-11 w-11 items-center justify-center"
          >
            <span className="relative block h-5 w-6">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-black transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 rounded-full bg-black transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  open ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-6 rounded-full bg-black transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  open ? "bottom-auto top-1/2 -translate-y-1/2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div id="site-menu" className="fixed inset-0 z-[60]">
          <button
            type="button"
            tabIndex={-1}
            aria-label="Close menu"
            onClick={closeMenu}
            className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] md:w-full md:max-w-none md:shadow-none ${
              visible ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between px-6 py-4 md:px-10 md:py-6">
              <span className="font-display text-sm font-bold uppercase tracking-[0.14em]">
                Menu
              </span>
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                className="hidden h-11 w-11 items-center justify-center rounded-full border border-black/15 hover:border-black transition-colors md:flex"
              >
                <svg viewBox="0 0 14 14" className="h-3.5 w-3.5" aria-hidden="true">
                  <path
                    d="M2 2l10 10M12 2L2 12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav aria-label="Site" className="flex-1 overflow-y-auto px-6 pt-4 md:px-10 md:pt-8">
              <ul className="flex flex-col gap-2 md:gap-3">
                {links.map((link, index) => (
                  <li
                    key={link.href}
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "none" : "translateY(16px)",
                      transition: `opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${
                        100 + index * 60
                      }ms, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${100 + index * 60}ms`,
                    }}
                  >
                    <a
                      href={link.href}
                      aria-current={isCurrent(link.href) ? "page" : undefined}
                      className={`font-display inline-block py-1 text-4xl font-bold md:text-6xl lg:text-7xl transition-colors hover:text-neutral-500 ${
                        isCurrent(link.href) ? "text-neutral-400" : ""
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-black/10 px-6 py-6 md:px-10">
              <a href={`tel:${phoneTel}`} className="block py-2 text-lg font-semibold md:text-xl">
                {phoneDisplay}
              </a>
              <a
                href={bookHref}
                className="mt-3 block w-full rounded-full bg-black py-4 text-center text-base font-semibold text-white motion-safe:hover:scale-[1.02] motion-safe:transition-transform md:max-w-md"
              >
                {bookLabel}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
