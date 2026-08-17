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
  cards: readonly GalleryCard[];
}

const BG = "/images/gallery.webp";

/**
 * Smile gallery mosaic. Four masked cards share one bright photograph; type
 * sits on it in black, and the working surfaces are light glass, so the
 * section stays airy instead of dimmed.
 */
export default function GallerySection({
  content,
  bookHref,
  bookLabel,
}: {
  content: GalleryContent;
  bookHref: string;
  bookLabel: string;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const positions = useMaskPositions(sectionRef, cardRefs);
  const sectionHeight = positions[0]?.sh ?? 0;
  const imageWidth = useImageWidth(BG, sectionHeight);
  const isMobile = useIsMobile();
  const focalX = isMobile ? 0.65 : 0.8;
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
      aria-label="Smile gallery"
    >
      <MaskedCard
        bgImage={BG}
        position={positions[0]}
        imageWidth={imageWidth}
        focalX={focalX}
        cardRef={setCardRef(0)}
        className="relative min-h-56 overflow-hidden rounded-xl md:min-h-0 md:rounded-2xl"
        style={getAnimStyle(0)}
      >
        <h2 className="font-display absolute left-4 top-4 z-10 text-3xl font-bold text-black md:left-7 md:top-6 md:text-5xl">
          {content.heading}
        </h2>
        <p className="type-eyebrow absolute bottom-4 left-4 z-10 text-black/60 md:bottom-6 md:left-7">
          {content.sub}
        </p>
      </MaskedCard>

      <MaskedCard
        bgImage={BG}
        position={positions[1]}
        imageWidth={imageWidth}
        focalX={focalX}
        cardRef={setCardRef(1)}
        className="relative order-3 min-h-80 overflow-hidden rounded-xl md:order-none md:row-span-2 md:min-h-0 md:rounded-2xl"
        style={getAnimStyle(1)}
      >
        <div className="absolute inset-x-3 bottom-3 z-10 rounded-xl bg-white/70 p-5 backdrop-blur-md md:inset-x-5 md:bottom-5 md:p-7">
          <p className="font-display max-w-md text-xl font-bold leading-tight text-black md:text-2xl">
            {content.tallCard}
          </p>
          <a
            href={bookHref}
            className="mt-5 inline-flex items-center rounded-full bg-black px-5 py-3 text-base font-bold text-white motion-safe:hover:scale-105 motion-safe:transition-transform md:px-8 md:py-4 md:text-lg"
          >
            {bookLabel}
          </a>
        </div>
      </MaskedCard>

      <MaskedCard
        bgImage={BG}
        position={positions[2]}
        imageWidth={imageWidth}
        focalX={focalX}
        cardRef={setCardRef(2)}
        className="relative order-2 flex min-h-48 items-end overflow-hidden rounded-xl md:order-none md:min-h-0 md:rounded-2xl"
        style={getAnimStyle(2)}
      >
        <p className="font-display relative z-10 p-4 text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.9] tracking-tight text-black md:p-6">
          {content.display}
        </p>
      </MaskedCard>

      <MaskedCard
        bgImage={BG}
        position={positions[3]}
        imageWidth={imageWidth}
        focalX={focalX}
        cardRef={setCardRef(3)}
        className="relative order-4 overflow-hidden rounded-xl md:order-none md:col-span-2 md:rounded-2xl"
        style={getAnimStyle(3)}
      >
        <ul className="relative z-10 grid h-full grid-cols-1 gap-1.5 p-1.5 md:grid-cols-4 md:gap-2 md:p-2">
          {content.cards.map((card) => (
            <li key={card.number} className="h-full">
              <a
                href={card.href}
                className={`flex h-full min-h-16 items-center justify-between gap-3 rounded-lg px-4 py-3 text-black md:min-h-0 md:rounded-xl md:px-5 ${
                  card.active ? "bg-white/90 backdrop-blur-md" : "bg-white/40 backdrop-blur-xl"
                } motion-safe:transition-transform motion-safe:hover:scale-[1.02]`}
              >
                <span className="font-display text-base font-bold md:text-lg">{card.name}</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/30 text-xs font-bold">
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
