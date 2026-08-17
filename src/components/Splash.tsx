import { useEffect, useRef, useState } from "react";

const SESSION_KEY = "bfdc-splash-seen";
const COUNT_MS = 2000;
const HOLD_MS = 200;
const FADE_MS = 700;
const REMOVE_MS = 900;

/**
 * First visit splash for the home page. A white overlay with a number counting
 * 0 to 100 over two seconds, then a short hold and a fade. A session flag keeps
 * internal navigation from ever replaying it. The overlay never gates the page:
 * the hero renders beneath it immediately.
 */
export default function Splash() {
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);
  const [fading, setFading] = useState(false);
  const frame = useRef(0);

  useEffect(() => {
    // The head script only adds this class when the splash should run
    // (first visit this session, motion allowed).
    if (!document.documentElement.classList.contains("splash-hold")) return;

    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // Storage can be unavailable in private modes; the splash still runs once.
    }

    setActive(true);

    const start = performance.now();
    const tick = (now: number) => {
      const value = Math.min(100, Math.round(((now - start) / COUNT_MS) * 100));
      setCount(value);
      if (value < 100) {
        frame.current = requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => setFading(true), HOLD_MS);
        window.setTimeout(() => {
          setActive(false);
          document.documentElement.classList.remove("splash-hold");
        }, HOLD_MS + REMOVE_MS);
      }
    };
    frame.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame.current);
  }, []);

  useEffect(() => {
    // Once the React overlay is painted it covers the page, so the CSS
    // pre-hydration cover can go.
    if (active) document.documentElement.classList.remove("splash-hold");
  }, [active]);

  if (!active) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex items-end bg-white"
      style={{
        opacity: fading ? 0 : 1,
        transition: `opacity ${FADE_MS}ms cubic-bezier(0.16, 1, 0.3, 1)`,
      }}
    >
      <div className="p-6 md:p-10 font-display text-7xl md:text-9xl font-bold tabular-nums leading-none text-black">
        {count}
      </div>
    </div>
  );
}
