import type { CSSProperties, ReactNode, Ref } from "react";
import type { MaskPosition } from "./hooks";

interface Props {
  bgImage: string;
  position: MaskPosition | undefined;
  imageWidth: number;
  focalX: number;
  className?: string;
  children?: ReactNode;
  cardRef?: Ref<HTMLDivElement>;
  style?: CSSProperties;
}

/**
 * One window into a shared section image. Every card in a section points at
 * the same image; each shows the slice that sits behind its own position, so
 * the section reads as a single cohesive photograph split across cards.
 *
 * Until the first measurement lands (or when JavaScript is unavailable), the
 * card falls back to a plain cover crop biased toward the focal point, so the
 * image paints immediately and the masked alignment refines in place.
 */
export default function MaskedCard({
  bgImage,
  position,
  imageWidth,
  focalX,
  className = "",
  children,
  cardRef,
  style,
}: Props) {
  const measured = position && position.sh > 0 && imageWidth > 0;

  let backgroundStyle: CSSProperties;
  if (measured) {
    const overflow = Math.max(0, imageWidth - position.sw);
    const focalOffset = overflow * focalX;
    backgroundStyle = {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: `auto ${position.sh}px`,
      backgroundPosition: `${-(position.x + focalOffset)}px ${-position.y}px`,
      backgroundRepeat: "no-repeat",
    };
  } else {
    backgroundStyle = {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: `${focalX * 100}% center`,
      backgroundRepeat: "no-repeat",
    };
  }

  return (
    <div ref={cardRef} className={className} style={{ ...backgroundStyle, ...style }}>
      {children}
    </div>
  );
}
