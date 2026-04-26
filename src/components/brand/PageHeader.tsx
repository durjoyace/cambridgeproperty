import { cn } from "@/lib/utils";
import { Wordmark } from "./Wordmark";

type PageHeaderProps = {
  /** Sans tracked-caps label (right side, top line). The PDF uses these for
   *  document-context labels: "FOUNDING DOCUMENT", "CONFIDENTIAL", "TRACK RECORD".
   *  In a site context, the page name reads as the label. */
  label: string;
  /** Italic Fraunces descriptor (right side, second line). The PDF uses this
   *  for context — "Real Property · Northeast", "Selected work, written up". */
  descriptor?: string;
  /** Surface tone — defaults to paper. */
  tone?: "paper" | "ink";
  className?: string;
};

/**
 * Shared editorial page header — the consistent top-of-page band used
 * across the founding document. Small Wordmark left, label + italic
 * descriptor right, hairline rule below.
 */
export function PageHeader({
  label,
  descriptor,
  tone = "paper",
  className,
}: PageHeaderProps) {
  const isInk = tone === "ink";
  const labelTone = isInk ? "text-paper/55" : "text-ink/55";
  const descriptorTone = isInk ? "text-paper/65" : "text-ink/65";
  const ruleTone = isInk ? "bg-paper/20" : "bg-ink/20";

  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <div className="flex items-start justify-between gap-6">
        <Wordmark size="sm" tone={isInk ? "paper" : "ink"} />
        <div className="text-right max-w-md">
          <div
            className={cn(
              "font-sans text-[10px] tracking-[0.28em] uppercase",
              labelTone,
            )}
          >
            {label}
          </div>
          {descriptor && (
            <div
              className={cn(
                "font-serif italic text-[13px] md:text-sm mt-1.5",
                descriptorTone,
              )}
            >
              {descriptor}
            </div>
          )}
        </div>
      </div>
      <div className={cn("mt-5 h-px w-full", ruleTone)} />
    </div>
  );
}
