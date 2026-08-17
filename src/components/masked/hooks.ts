import { useEffect, useMemo, useRef, useState } from "react";
import type { RefObject } from "react";

export interface MaskPosition {
  /** Card offset from the section's left edge. */
  x: number;
  /** Card offset from the section's top edge. */
  y: number;
  /** Section width. */
  sw: number;
  /** Section height. */
  sh: number;
}

/**
 * Watches a section with a ResizeObserver and computes, per card, its offset
 * relative to the section plus the section's dimensions. Cards use these to
 * window one shared background image.
 */
export function useMaskPositions(
  sectionRef: RefObject<HTMLElement | null>,
  cardRefs: RefObject<(HTMLElement | null)[]>
): MaskPosition[] {
  const [positions, setPositions] = useState<MaskPosition[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const measure = () => {
      const sectionRect = section.getBoundingClientRect();
      const next = (cardRefs.current ?? []).map((card) => {
        if (!card) return { x: 0, y: 0, sw: sectionRect.width, sh: sectionRect.height };
        const rect = card.getBoundingClientRect();
        return {
          x: rect.left - sectionRect.left,
          y: rect.top - sectionRect.top,
          sw: sectionRect.width,
          sh: sectionRect.height,
        };
      });
      setPositions(next);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(section);
    return () => observer.disconnect();
  }, [sectionRef, cardRefs]);

  return positions;
}

/**
 * Loads an image off screen and returns how wide it renders when scaled to the
 * section height, preserving its aspect ratio.
 */
export function useImageWidth(src: string, sectionHeight: number): number {
  const [naturalSize, setNaturalSize] = useState<{ w: number; h: number } | null>(null);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setNaturalSize({ w: image.naturalWidth, h: image.naturalHeight });
    image.src = src;
    return () => {
      image.onload = null;
    };
  }, [src]);

  return useMemo(() => {
    if (!naturalSize || sectionHeight <= 0) return 0;
    return naturalSize.w * (sectionHeight / naturalSize.h);
  }, [naturalSize, sectionHeight]);
}

/** Matches the single md breakpoint used across the site. */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    setIsMobile(query.matches);
    const onChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}

/**
 * Staggered entrance for a section's cards. Fires once when the section
 * scrolls into view, then hands each card its delay through getAnimStyle.
 */
export function useStaggeredReveal(count: number, threshold = 0.15) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [threshold]);

  const getAnimStyle = (index: number): React.CSSProperties => {
    if (reduced) return {};
    return {
      opacity: revealed ? 1 : 0,
      transform: revealed ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 120}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 120}ms`,
    };
  };

  return { sectionRef, revealed, getAnimStyle, count };
}
