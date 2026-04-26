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
 * Italic EB Garamond — "not punctuation, the entire business."
 * The brand-bible spec body text reads "Set in italic Garamond" — the
 * classic Et-ligature form is what matches the founding-doc page 3 lockup
 * (Fraunces italic & has a more modern, less calligraphic shape). EB
 * Garamond is the Google-Fonts revival of Garamont's 16th-century cuts.
 *
 * Renders inline with surrounding letterforms. The optional sealed
 * treatment adds the 2pt brass underline used on the seal mark.
 */
export function Ampersand({ className, sealed, tone = "brass" }: AmpersandProps) {
  const toneClass =
    tone === "ink" ? "text-ink" : tone === "paper" ? "text-paper" : "text-brass";

  // EB Garamond italic — classic Et-ligature ampersand.
  // Style declared inline so it overrides the project-level font-serif
  // chain (Fraunces) for the ampersand specifically.
  const garamondStyle = {
    fontFamily: '"EB Garamond", "Adobe Garamond Pro", Garamond, serif',
  } as const;

  if (sealed) {
    return (
      <span
        className={cn(
          "relative inline-flex flex-col items-center leading-none",
          className,
        )}
      >
        <span
          className={cn("italic font-normal leading-none", toneClass)}
          style={garamondStyle}
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
        "italic font-normal leading-none align-baseline",
        toneClass,
        className,
      )}
      style={garamondStyle}
    >
      &amp;
    </span>
  );
}
