import { cn } from "@/lib/utils";

type PullQuoteProps = {
  /** The quote — wrap key phrases in <em> for italic emphasis. */
  children: React.ReactNode;
  /** Optional attribution beneath the quote. */
  attribution?: string;
  /** Surface tone — paper or ink. Defaults to paper. */
  tone?: "paper" | "ink";
  /** Width constraint. Defaults to 56ch which reads well at body sizes. */
  className?: string;
};

/**
 * Editorial pull-quote — italic Fraunces, sandwiched between two
 * brass hairlines. Used to anchor long-form passages with a moment
 * of breathing room and a line worth lingering on.
 */
export function PullQuote({
  children,
  attribution,
  tone = "paper",
  className,
}: PullQuoteProps) {
  const isInk = tone === "ink";
  const ruleTone = isInk ? "bg-brass-light" : "bg-brass";
  const quoteTone = isInk ? "text-paper/90" : "text-ink/85";
  const attrTone = isInk ? "text-paper/55" : "text-ink/55";

  return (
    <figure className={cn("my-12 md:my-16 mx-auto max-w-3xl text-center", className)}>
      <div className={cn("h-px w-16 mx-auto mb-8", ruleTone)} aria-hidden />
      <blockquote
        className={cn(
          "font-serif italic text-2xl md:text-3xl lg:text-[2rem] leading-[1.4]",
          quoteTone,
        )}
      >
        {children}
      </blockquote>
      {attribution && (
        <figcaption
          className={cn(
            "mt-8 font-sans text-[10px] tracking-[0.28em] uppercase",
            attrTone,
          )}
        >
          {attribution}
        </figcaption>
      )}
      <div
        className={cn("h-px w-16 mx-auto mt-8", ruleTone)}
        aria-hidden
      />
    </figure>
  );
}
