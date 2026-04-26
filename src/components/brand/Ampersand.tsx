import { cn } from "@/lib/utils";

type AmpersandProps = {
  className?: string;
  /** Render the seal treatment — adds a 2pt brass underline beneath the
   *  glyph. Reserved for the standalone seal mark (favicon, embossing,
   *  mark-only lockup). The wordmark itself never carries the underline. */
  sealed?: boolean;
  /** Override the color. Defaults to brass per founding-doc spec. */
  tone?: "brass" | "ink" | "paper";
};

/**
 * THANE & REEVE ampersand glyph.
 * Italic Fraunces — "not punctuation, the entire business."
 * Renders inline with surrounding letterforms. The optional sealed
 * treatment adds the 2pt brass underline used on the seal mark.
 */
export function Ampersand({ className, sealed, tone = "brass" }: AmpersandProps) {
  const toneClass =
    tone === "ink" ? "text-ink" : tone === "paper" ? "text-paper" : "text-brass";

  if (sealed) {
    return (
      <span
        className={cn(
          "relative inline-flex flex-col items-center leading-none",
          className,
        )}
      >
        <span
          className={cn("font-serif italic font-normal leading-none", toneClass)}
        >
          &amp;
        </span>
        <span
          aria-hidden
          className="mt-[0.18em] block h-[2px] w-[0.55em] bg-brass"
        />
      </span>
    );
  }

  return (
    <span
      className={cn(
        "font-serif italic font-normal leading-none align-baseline",
        toneClass,
        className,
      )}
    >
      &amp;
    </span>
  );
}
