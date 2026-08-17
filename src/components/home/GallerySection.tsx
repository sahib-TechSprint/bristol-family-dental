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
 * Smile gallery mosaic. Four masked cards share one photograph; the last card
 * carries four glass service links into the services page.
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

  const scrimTopBottom = (
    <span
      className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/60"
      aria-hidden="true"
    />
  );
  const scrimBottom = (
    <span
      className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/25"
      aria-hidden="true"
    />
  );

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
        {scrimTopBottom}
        <h2 className="font-display absolute left-4 top-4 z-10 text-3xl font-bold text-white md:left-6 md:top-6 md:text-5xl">
          {content.heading}
        </h2>
        <p className="absolute bottom-4 left-4 z-10 text-xs font-semibold text-white md:bottom-6 md:left-6 md:text-sm">
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
        {scrimBottom}
        <div className="absolute inset-x-4 bottom-4 z-10 md:inset-x-6 md:bottom-6">
          <p className="font-display max-w-md text-xl font-bold leading-tight text-white md:text-3xl">
            {content.tallCard}
          </p>
          <a
            href={bookHref}
            className="mt-5 inline-flex items-center rounded-full bg-white px-5 py-3 text-base font-bold text-black motion-safe:hover:scale-105 motion-safe:transition-transform md:px-8 md:py-5 md:text-xl"
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
        {scrimBottom}
        <p className="font-display relative z-10 p-4 text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.9] tracking-tight text-white md:p-6">
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
        <span className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <ul className="relative z-10 grid h-full grid-cols-1 gap-1.5 p-1.5 md:grid-cols-4 md:gap-2 md:p-2">
          {content.cards.map((card) => (
            <li key={card.number} className="h-full">
              <a
                href={card.href}
                className={`flex h-full min-h-16 items-center justify-between gap-3 rounded-lg px-4 py-3 md:min-h-0 md:rounded-xl md:px-5 ${
                  card.active
                    ? "bg-white/90 text-black backdrop-blur-md"
                    : "bg-white/20 text-white backdrop-blur-xl"
                } motion-safe:transition-transform motion-safe:hover:scale-[1.02]`}
              >
                <span className="font-display text-base font-bold md:text-lg">{card.name}</span>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                    card.active ? "border-black/30" : "border-white/50"
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
