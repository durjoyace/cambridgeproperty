import { cn } from "@/lib/utils";
import { Ampersand } from "./Ampersand";

type WordmarkProps = {
  className?: string;
  /** Layout variant. "horizontal" = THANE & REEVE on one line. "stacked" = three lines. */
  variant?: "horizontal" | "stacked";
  /** Visual size. Controls the serif cap height only. */
  size?: "sm" | "md" | "lg" | "xl";
  /** Show "REAL PROPERTY" tagline beneath. */
  withTagline?: boolean;
  /** Foreground color. Defaults to ink (for paper surfaces). */
  tone?: "ink" | "paper" | "brass";
  /** Seal treatment on the ampersand. */
  sealed?: boolean;
};

const sizeMap: Record<NonNullable<WordmarkProps["size"]>, string> = {
  sm: "text-base md:text-lg",
  md: "text-xl md:text-2xl",
  lg: "text-3xl md:text-5xl",
  xl: "text-5xl md:text-7xl lg:text-8xl",
};

/**
 * Primary THANE & REEVE wordmark.
 * Fraunces display caps, letter-spaced, with an italic brass ampersand.
 * Matches the primary horizontal and stacked lockups in the founding document.
 */
export function Wordmark({
  className,
  variant = "horizontal",
  size = "md",
  withTagline = false,
  tone = "ink",
  sealed = false,
}: WordmarkProps) {
  const toneClass =
    tone === "paper" ? "text-paper" : tone === "brass" ? "text-brass" : "text-ink";

  const taglineToneClass =
    tone === "paper" ? "text-paper/70" : "text-ink/60";

  const baseWord = cn(
    "font-serif font-normal tracking-wordmark uppercase",
    toneClass,
    sizeMap[size],
  );

  if (variant === "stacked") {
    return (
      <span className={cn("inline-flex flex-col items-center leading-[1.1]", className)}>
        <span className={baseWord}>Thane</span>
        <Ampersand className={cn(sizeMap[size])} sealed={sealed} />
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
    <span className={cn("inline-flex flex-col items-center leading-[1.1]", className)}>
      <span className="inline-flex items-baseline gap-[0.35em]">
        <span className={baseWord}>Thane</span>
        <Ampersand className={sizeMap[size]} sealed={sealed} />
        <span className={baseWord}>Reeve</span>
      </span>
      {withTagline && (
        <span
          className={cn(
            "mt-3 font-sans text-[0.55em] tracking-eyebrow uppercase",
            taglineToneClass,
          )}
        >
          Real Property
        </span>
      )}
    </span>
  );
}
