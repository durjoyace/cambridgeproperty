import { cn } from "@/lib/utils";

type Props = {
  /** Image source — high-resolution architectural photograph. */
  src: string;
  /** Alt text — descriptive, not decorative. */
  alt: string;
  /** Property / project name shown in the right marginalia. */
  caption: string;
  /** Single-line context (location · units · year · partner). */
  context: string;
  /** Optional plate number for editorial numbering. */
  plate?: string;
  /** Section tone — paper sets ink captions, ink sets paper captions. */
  tone?: "paper" | "ink";
  /** Image height. Defaults to a tall editorial crop. */
  height?: "tall" | "scenic";
  className?: string;
};

/**
 * Full-bleed architectural photograph with editorial caption marginalia.
 * The image is treated with a slight desaturation and a soft brass-tone
 * vignette; the caption is set as a marginalia plate on the right edge —
 * tracked-caps location, italic Fraunces context, brass plate number.
 *
 * Used as a visual pause between text-dense sections — the firm's
 * evidence, photographed.
 */
export function ArchitecturalFigure({
  src,
  alt,
  caption,
  context,
  plate,
  tone = "paper",
  height = "tall",
  className,
}: Props) {
  const isInk = tone === "ink";
  const sectionBg = isInk ? "bg-ink" : "bg-paper";
  const ruleTone = isInk ? "bg-paper/30" : "bg-ink/25";
  const labelTone = isInk ? "text-paper/55" : "text-ink/55";
  const titleTone = isInk ? "text-paper" : "text-ink";
  const contextTone = isInk ? "text-paper/75" : "text-ink/75";
  const heightCls = height === "tall" ? "h-[68vh] md:h-[78vh]" : "h-[48vh] md:h-[56vh]";

  return (
    <figure className={cn("relative w-full overflow-hidden", sectionBg, className)}>
      <div className={cn("relative w-full", heightCls)}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover grayscale contrast-[1.08] brightness-[0.95]"
          loading="lazy"
        />
        {/* Editorial vignette — barely there, anchors caption marginalia */}
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 pointer-events-none",
            isInk
              ? "bg-gradient-to-b from-ink/10 via-transparent to-ink/40"
              : "bg-gradient-to-b from-ink/5 via-transparent to-ink/30",
          )}
        />
      </div>

      {/* Caption strip — paper-on-ink or ink-on-paper, never overlaid on image */}
      <figcaption
        className={cn(
          "container mx-auto px-6 md:px-12 py-8 md:py-10",
          "grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-12 items-start",
        )}
      >
        <div className="flex items-center gap-4">
          {plate && (
            <span
              className={cn(
                "font-serif italic text-base md:text-lg",
                isInk ? "text-brass-light" : "text-brass",
              )}
            >
              {plate}
            </span>
          )}
          <div className={cn("hidden md:block h-px w-10", ruleTone)} />
        </div>
        <div>
          <h3
            className={cn(
              "font-serif text-xl md:text-2xl tracking-tight leading-snug",
              titleTone,
            )}
          >
            {caption}
          </h3>
          <p
            className={cn(
              "mt-2 font-serif italic text-sm md:text-base",
              contextTone,
            )}
          >
            {context}
          </p>
        </div>
        <p
          className={cn(
            "font-sans text-[10px] tracking-[0.28em] uppercase pt-1",
            labelTone,
          )}
        >
          The work, photographed
        </p>
      </figcaption>
    </figure>
  );
}
