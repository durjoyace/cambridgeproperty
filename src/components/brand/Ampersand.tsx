import { cn } from "@/lib/utils";

type AmpersandProps = {
  className?: string;
  /** Underline the glyph with a 2pt brass rule — the "seal" treatment. */
  sealed?: boolean;
  /** Override the color. Defaults to brass. */
  tone?: "brass" | "ink" | "paper";
};

/**
 * THANE & REEVE ampersand mark.
 * Italic Fraunces glyph — "not punctuation, the entire business."
 * Pair with a short brass underline to produce the seal treatment used
 * in the primary wordmark and on the seal-only lockup.
 */
export function Ampersand({ className, sealed, tone = "brass" }: AmpersandProps) {
  const toneClass =
    tone === "ink" ? "text-ink" : tone === "paper" ? "text-paper" : "text-brass";

  return (
    <span className={cn("relative inline-flex flex-col items-center leading-none", className)}>
      <span className={cn("font-serif italic font-normal", toneClass)}>&amp;</span>
      {sealed && (
        <span
          aria-hidden
          className="mt-[0.18em] block h-[2px] w-[0.6em] bg-brass"
        />
      )}
    </span>
  );
}
