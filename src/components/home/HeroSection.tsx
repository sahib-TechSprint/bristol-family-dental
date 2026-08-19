import { useRef } from "react";
import MaskedCard from "../masked/MaskedCard";
import {
  useImageWidth,
  useIsMobile,
  useMaskPositions,
  useStaggeredReveal,
} from "../masked/hooks";

interface HeroContent {
  featureBars: readonly string[];
  supporting: string;
  label: string;
  displayLines: readonly string[];
  corner: string;
}

const BG = "/images/hero.webp";

/**
 * Full screen hero mosaic. The feature bar block and the main display card
 * both window the same photograph, so the section reads as one image seen
 * through two openings. The bars sit flush inside a single rounded container,
 * so the strip stays one continuous piece of the photo. The photograph is
 * bright, so ink type sits directly on it, with light glass surfaces where a
 * little separation helps.
 */
export default function HeroSection({ content, srHeading }: { content: HeroContent; srHeading: string }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const positions = useMaskPositions(sectionRef, cardRefs);
  const sectionHeight = positions[0]?.sh ?? 0;
  const imageWidth = useImageWidth(BG, sectionHeight);
  const isMobile = useIsMobile();
  // Mobile focal sits a little left of the desktop one so the subject rides
  // right of the bar labels and display type instead of directly behind them.
  const focalX = isMobile ? 0.58 : 0.8;
  const { sectionRef: revealRef, getAnimStyle } = useStaggeredReveal(2);

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
      className="flex h-[100svh] flex-col gap-1.5 px-3 pb-1.5 pt-24 md:h-screen md:gap-2 md:px-5 md:pb-2"
      aria-label="Welcome"
    >
      {/* One container owns the radius so the three bars read as a single
          uninterrupted strip of the photograph, not three sliced chips. */}
      <div
        className="shrink-0 overflow-hidden rounded-xl md:rounded-2xl"
        style={getAnimStyle(0)}
      >
        {content.featureBars.map((bar, index) => (
          <MaskedCard
            key={bar}
            bgImage={BG}
            position={positions[index]}
            imageWidth={imageWidth}
            focalX={focalX}
            cardRef={setCardRef(index)}
            className="relative flex h-14 items-center justify-center md:h-20"
          >
            <span className="absolute inset-0 bg-navy/20 backdrop-blur-[2px]" aria-hidden="true" />
            <span className="font-display relative z-10 px-4 text-center text-lg font-bold text-ink md:text-2xl">
              {bar}
            </span>
          </MaskedCard>
        ))}
      </div>

      <MaskedCard
        bgImage={BG}
        position={positions[3]}
        imageWidth={imageWidth}
        focalX={focalX}
        cardRef={setCardRef(3)}
        className="relative flex-1 overflow-hidden rounded-xl md:rounded-2xl"
        style={getAnimStyle(1)}
      >
        <p className="absolute left-4 top-4 z-10 max-w-[240px] rounded-lg bg-sky/85 p-3 text-xs font-semibold leading-snug text-ink/80 backdrop-blur-md md:left-7 md:top-7 md:max-w-[300px] md:bg-transparent md:p-0 md:text-sm md:text-ink/75 md:backdrop-blur-none [@media(min-width:768px)_and_(max-height:760px)]:hidden">
          {content.supporting}
        </p>

        <p className="absolute bottom-7 right-7 z-10 hidden rounded-full bg-sky/85 px-4 py-2 backdrop-blur-md md:block">
          <span className="type-eyebrow text-ink">{content.corner}</span>
        </p>

        <div className="absolute bottom-3 left-3 right-3 z-10 rounded-xl bg-sky/85 p-4 backdrop-blur-md md:bottom-6 md:left-7 md:right-auto md:rounded-none md:bg-transparent md:p-0 md:backdrop-blur-none">
          <p className="type-eyebrow mb-3 text-ink/65">{content.label}</p>
          <h1 className="text-ink">
            <span className="sr-only">{srHeading}</span>
            <span aria-hidden="true" className="font-display block">
              {content.displayLines.map((line) => (
                <span
                  key={line}
                  className="block text-[clamp(3rem,11vw,11rem)] font-bold leading-[0.79] tracking-tight"
                >
                  {line}
                </span>
              ))}
            </span>
          </h1>
        </div>
      </MaskedCard>
    </section>
  );
}
