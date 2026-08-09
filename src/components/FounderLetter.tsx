import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * A long-copy founder's letter. Single justified column, body Fraunces,
 * brass signature plate. The Ogilvy long-copy ad as a website section —
 * an LP can read it start to finish and walk away with a position.
 *
 * Voice is Patrick's. The argument is the firm's premise: that
 * specialization is the wrong frame for what produces real estate returns,
 * and that ownership and operations have to be held under one accountable
 * roof to compound.
 */
export default function FounderLetter() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="relative bg-paper py-20 md:py-28 overflow-hidden"
      aria-label="A note from the founder"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Header — chapter-style */}
          <div className="mb-10 md:mb-12 flex items-baseline justify-between" data-reveal>
            <p className="font-sans text-[11px] tracking-[0.26em] uppercase text-brass">
              A note from the founder
            </p>
            <p className="font-serif italic text-ink/65 text-sm">
              Boston &middot; MMXXVI
            </p>
          </div>
          <div className="h-px w-full bg-ink/20 mb-10 md:mb-12" data-reveal-rule />

          {/* Long-form body — single justified column */}
          <article
            className="font-serif text-lg md:text-xl leading-[1.75] text-ink/85 [&>p]:mb-7 [&>p:last-of-type]:mb-0"
            style={{ textAlign: "justify", hyphens: "auto" }}
            data-reveal
          >
            <p>
              <span className="font-serif text-[2.6em] leading-[0.85] float-left mr-3 mt-1 text-ink font-normal tracking-tight">
                M
              </span>
              ost of my career has been spent on the unglamorous side of
              real estate &mdash; first as a Cambridge zoning attorney, then
              negotiating Central Square&rsquo;s overlay amendments through
              the City Council, then through five years of hearings and
              neighborhood meetings before a wall was drawn at 907 Main. The
              work that decides whether a project happens is rarely the work
              that gets celebrated.
            </p>
            <p>
              In those rooms, the firms making the strongest case for a
              project were rarely the firms still operating the building five
              years later. Capital traded the project to development,
              development traded it to management, and by the time someone was
              accountable for occupancy and capex the underwriting was three
              teams old. The operating work is where returns are{" "}
              <em className="text-brass font-serif italic">
                made or lost.
              </em>
            </p>
            <p>
              We built 907 Main the other way around: entitlement, financing,
              construction, and operations under one roof. The hotel opened in
              2024 as The Lark Cambridge; we still own and run it. That
              experience became Thane &amp; Reeve. We acquire what we are
              willing to operate, develop what we intend to hold, manage
              in&#8209;house, and invest meaningful personal capital in every
              transaction.
            </p>
            <p className="font-serif italic text-ink">
              We will be small. We will be slow. We will walk from deals other
              firms will do.
            </p>
            <p>That is the firm.</p>
          </article>

          {/* Signature plate */}
          <div className="mt-12 md:mt-14 pt-8 border-t border-ink/15 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6" data-reveal>
            <div>
              <p
                className="font-serif italic text-3xl md:text-4xl text-brass leading-none"
                style={{ fontFeatureSettings: '"ss01"' }}
              >
                Patrick Barrett
              </p>
              <p className="mt-3 font-sans text-[11px] tracking-[0.22em] uppercase text-ink/70">
                Founder &amp; Managing Partner &middot; Thane &amp; Reeve
              </p>
            </div>
            <p className="font-serif italic text-ink/65 text-sm md:text-base max-w-xs sm:text-right">
              Cambridge zoning attorney &middot; developer &middot;
              Investment Committee chair
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
