import { useRef } from "react";
import MaskedCard from "../masked/MaskedCard";
import {
  useImageWidth,
  useIsMobile,
  useMaskPositions,
  useStaggeredReveal,
} from "../masked/hooks";

interface GalleryCard {
  number: string;
  name: string;
  href: string;
  active: boolean;
}

interface GalleryContent {
  heading: string;
  sub: string;
  tallCard: string;
  display: string;
  imageAlt: string;
  cards: readonly GalleryCard[];
}

const BG_DESKTOP = "/images/cosmetic-veneers.webp";
// Portrait crop of the same render, so the stacked mobile cards window a
// sensible slice instead of one enormous tooth.
const BG_MOBILE = "/images/cosmetic-veneers-mobile.webp";

/**
 * Cosmetic dentistry mosaic. Four masked cards share one clinical render of
 * veneers and a crown on deep navy; type sits on it in white, and every
 * working surface is navy glass, so contrast holds wherever the bright
 * ceramic falls behind a card.
 */
export default function GallerySection({
  content,
  ctaHref,
  ctaLabel,
}: {
  content: GalleryContent;
  ctaHref: string;
  ctaLabel: string;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const positions = useMaskPositions(sectionRef, cardRefs);
  const sectionHeight = positions[0]?.sh ?? 0;
  const isMobile = useIsMobile();
  const BG = isMobile ? BG_MOBILE : BG_DESKTOP;
  const imageWidth = useImageWidth(BG, sectionHeight);
  const focalX = 0.5;
  const { sectionRef: revealRef, getAnimStyle } = useStaggeredReveal(4);

  const setSectionRef = (el: HTMLElement | null) => {
    sectionRef.current = el;
    revealRef.current = el;
  };
  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  };

  return (
    <section
      ref={setSectionRef}
      className="grid min-h-[100svh] grid-cols-1 gap-1.5 px-3 pb-1.5 pt-1.5 md:h-screen md:min-h-0 md:grid-cols-2 md:grid-rows-[1fr_1fr_0.8fr] md:gap-2 md:px-5 md:pb-2 md:pt-2"
      aria-label="Cosmetic dentistry"
    >
      <span role="img" aria-label={content.imageAlt} className="sr-only" />

      <MaskedCard
        bgImage={BG}
        position={positions[0]}
        imageWidth={imageWidth}
        focalX={focalX}
        cardRef={setCardRef(0)}
        className="relative min-h-56 overflow-hidden rounded-xl bg-navy md:min-h-0 md:rounded-2xl"
        style={getAnimStyle(0)}
      >
        <div className="absolute left-3 top-3 z-10 rounded-xl bg-navy/80 px-4 py-3 backdrop-blur-md md:left-5 md:top-5 md:px-5 md:py-4">
          <h2 className="font-display text-3xl font-bold text-white md:text-5xl">{content.heading}</h2>
          <p className="type-eyebrow mt-2 text-white/80">{content.sub}</p>
        </div>
      </MaskedCard>

      <MaskedCard
        bgImage={BG}
        position={positions[1]}
        imageWidth={imageWidth}
        focalX={focalX}
        cardRef={setCardRef(1)}
        className="relative order-3 min-h-80 overflow-hidden rounded-xl bg-navy md:order-none md:row-span-2 md:min-h-0 md:rounded-2xl"
        style={getAnimStyle(1)}
      >
        <div className="absolute inset-x-3 bottom-3 z-10 rounded-xl bg-navy/85 p-5 backdrop-blur-md md:inset-x-5 md:bottom-5 md:p-7">
          <p className="font-display max-w-md text-xl font-bold leading-tight text-white md:text-2xl">
            {content.tallCard}
          </p>
          <a
            href={ctaHref}
            className="mt-5 inline-flex items-center rounded-full bg-white px-5 py-3 text-base font-bold text-navy transition-colors hover:bg-sky motion-safe:hover:scale-105 motion-safe:transition-[transform,background-color] md:px-8 md:py-4 md:text-lg"
          >
            {ctaLabel}
          </a>
        </div>
      </MaskedCard>

      <MaskedCard
        bgImage={BG}
        position={positions[2]}
        imageWidth={imageWidth}
        focalX={focalX}
        cardRef={setCardRef(2)}
        className="relative order-2 flex min-h-48 items-end overflow-hidden rounded-xl bg-navy md:order-none md:min-h-0 md:rounded-2xl"
        style={getAnimStyle(2)}
      >
        <p className="relative z-10 m-3 rounded-xl bg-navy/80 px-4 py-3 backdrop-blur-md md:m-5 md:px-5 md:py-4">
          <span className="font-display block text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.9] tracking-tight text-white">
            {content.display}
          </span>
        </p>
      </MaskedCard>

      <MaskedCard
        bgImage={BG}
        position={positions[3]}
        imageWidth={imageWidth}
        focalX={focalX}
        cardRef={setCardRef(3)}
        className="relative order-4 overflow-hidden rounded-xl bg-navy md:order-none md:col-span-2 md:rounded-2xl"
        style={getAnimStyle(3)}
      >
        <ul className="relative z-10 grid h-full grid-cols-1 gap-1.5 p-1.5 md:grid-cols-4 md:gap-2 md:p-2">
          {content.cards.map((card) => (
            <li key={card.number} className="h-full">
              <a
                href={card.href}
                className={`flex h-full min-h-16 items-center justify-between gap-3 rounded-lg px-4 py-3 md:min-h-0 md:rounded-xl md:px-5 ${
                  card.active
                    ? "bg-white text-ink"
                    : "bg-navy/80 text-white backdrop-blur-md hover:bg-navy"
                } motion-safe:transition-transform motion-safe:hover:scale-[1.02]`}
              >
                <span className="font-display text-base font-bold md:text-lg">{card.name}</span>
                <span
                  aria-hidden="true"
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                    card.active ? "border-ink/30" : "border-white/40"
                  }`}
                >
                  {card.number}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </MaskedCard>
    </section>
  );
}
