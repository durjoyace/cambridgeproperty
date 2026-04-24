import { cn } from "@/lib/utils";
import { Ampersand } from "./Ampersand";

type DivisionLockupProps = {
  /** The division name: "Capital" | "Development" | "Management" */
  division: string;
  /** Subtitle beneath the division name. */
  subtitle?: string;
  /** Ink surface (dark background) or paper surface. */
  tone?: "ink" | "paper";
  className?: string;
};

/**
 * Division lockup — "THANE & REEVE" small above, division name large below.
 * Used on Capital / Development / Management pages as the primary identity block.
 */
export function DivisionLockup({
  division,
  subtitle,
  tone = "paper",
  className,
}: DivisionLockupProps) {
  const isInk = tone === "ink";
  const parentTone = isInk ? "text-paper/70" : "text-ink/65";
  const divisionTone = isInk ? "text-paper" : "text-ink";
  const subtitleTone = isInk ? "text-paper/60" : "text-ink/60";

  return (
    <div className={cn("inline-flex flex-col items-center text-center", className)}>
      <div
        className={cn(
          "inline-flex items-baseline gap-[0.35em] font-serif tracking-wordmark uppercase text-xs md:text-sm",
          parentTone,
        )}
      >
        <span>Thane</span>
        <Ampersand className="text-xs md:text-sm" tone={isInk ? "brass" : "brass"} />
        <span>Reeve</span>
      </div>
      <div className="mt-4 h-px w-14 bg-brass" aria-hidden />
      <h1
        className={cn(
          "mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight",
          divisionTone,
        )}
      >
        {division}
      </h1>
      {subtitle && (
        <p
          className={cn(
            "mt-6 font-serif italic text-base md:text-lg max-w-md",
            subtitleTone,
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
