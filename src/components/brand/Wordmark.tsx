import { cn } from "@/lib/utils";
import { Ampersand } from "./Ampersand";

type WordmarkProps = {
  className?: string;
  /** Layout variant. "horizontal" = THANE & REEVE on one line.
   *  "stacked" = three lines (used in calling-card and footer-mark contexts). */
  variant?: "horizontal" | "stacked";
  /** Visual size — controls the serif cap height. */
  size?: "sm" | "md" | "lg" | "xl";
  /** Show "REAL PROPERTY" tagline beneath the mark. */
  withTagline?: boolean;
  /** Foreground color of the THANE / REEVE words. The ampersand is always brass. */
  tone?: "ink" | "paper" | "brass";
};

const sizeMap: Record<NonNullable<WordmarkProps["size"]>, string> = {
  sm: "text-base md:text-lg",
  md: "text-xl md:text-2xl",
  lg: "text-3xl md:text-5xl",
  xl: "text-5xl md:text-7xl lg:text-8xl",
};

const ampSizeMap: Record<NonNullable<WordmarkProps["size"]>, string> = {
  // Italic Fraunces & sits at cap-height in the PDF — but the italic glyph
  // at 1em renders visually ~55% the height of the upright caps because
  // its bounding box is x-height-anchored, not cap-height-anchored. We
  // scale up with a relative em so the proportion holds across breakpoints.
  sm: "text-[1.55em]",
  md: "text-[1.55em]",
  lg: "text-[1.6em]",
  xl: "text-[1.65em]",
};

/**
 * Primary THANE & REEVE wordmark.
 * Fraunces display caps, letter-spaced, with an italic brass ampersand
 * sitting between the two words at full optical weight. Mirrors the
 * primary horizontal lockup from the founding document.
 *
 * The wordmark itself never carries the seal underline — that treatment
 * is reserved for the standalone <Ampersand sealed /> mark.
 */
export function Wordmark({
  className,
  variant = "horizontal",
  size = "md",
  withTagline = false,
  tone = "ink",
}: WordmarkProps) {
  const toneClass =
    tone === "paper" ? "text-paper" : tone === "brass" ? "text-brass" : "text-ink";

  const taglineToneClass =
    tone === "paper" ? "text-paper/70" : "text-ink/60";

  const baseWord = cn(
    "font-serif font-normal tracking-wordmark uppercase leading-none",
    toneClass,
  );

  if (variant === "stacked") {
    return (
      <span
        className={cn(
          "inline-flex flex-col items-center gap-2",
          sizeMap[size],
          className,
        )}
      >
        <span className={baseWord}>Thane</span>
        <span className={ampSizeMap[size]}>
          <Ampersand />
        </span>
        <span className={baseWord}>Reeve</span>
        {withTagline && (
          <span
            className={cn(
              "mt-3 font-sans text-[0.65em] tracking-eyebrow uppercase",
              taglineToneClass,
            )}
          >
            Real Property
          </span>
        )}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex flex-col items-center",
        sizeMap[size],
        className,
      )}
    >
      <span className="inline-flex items-baseline gap-[0.5em]">
        <span className={baseWord}>Thane</span>
        <span className={cn(ampSizeMap[size])}>
          <Ampersand />
        </span>
        <span className={baseWord}>Reeve</span>
      </span>
      {withTagline && (
        <span
          className={cn(
            "mt-4 font-sans text-[0.55em] tracking-eyebrow uppercase",
            taglineToneClass,
          )}
        >
          Real Property
        </span>
      )}
    </span>
  );
}
