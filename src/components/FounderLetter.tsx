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
      className="relative bg-paper py-24 md:py-36 overflow-hidden"
      aria-label="A note from the founder"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Header — chapter-style */}
          <div className="mb-12 md:mb-14 flex items-baseline justify-between" data-reveal>
            <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-brass">
              A note from the founder
            </p>
            <p className="font-serif italic text-ink/55 text-sm">
              Boston &middot; MMXXVI
            </p>
          </div>
          <div className="h-px w-full bg-ink/20 mb-12 md:mb-14" data-reveal-rule />

          {/* Long-form body — single justified column */}
          <article
            className="font-serif text-lg md:text-xl leading-[1.75] text-ink/85 [&>p]:mb-7 [&>p:last-of-type]:mb-0"
            style={{ textAlign: "justify", hyphens: "auto" }}
            data-reveal
          >
            <p>
              <span className="font-serif text-[2.6em] leading-[0.85] float-left mr-3 mt-1 text-ink font-normal tracking-tight">
                E
              </span>
              very fund I joined out of law school taught me the same thing,
              and it took me fifteen years to disagree with it. The thing was
              specialization &mdash; the idea that a real estate firm should
              pick a side of the table. Be a capital allocator, or be a
              developer, or be a manager. Don&rsquo;t try to do all three.
            </p>
            <p>
              The argument was always efficiency. Specialists scale.
              Specialists are legible to LPs. Specialists are easier to
              underwrite. I worked inside firms that won on this argument and
              I respected what they did. But I left because I came to believe
              the argument was wrong about{" "}
              <em className="text-brass not-italic font-serif italic">
                what produces returns.
              </em>
            </p>
            <p>
              What I saw, over and over, was that the deals that worked were
              the deals where one team was on the wire from acquisition
              through year ten. The deals that didn&rsquo;t work were the
              ones where the originator handed the asset off, the developer
              handed it off again, and by the time someone was actually
              accountable for occupancy and capex, the underwriting was three
              teams old and nobody believed in it anymore. The operating work
              is where returns are made or lost. Not the closing dinner.
            </p>
            <p>
              So Thane &amp; Reeve is built around the opposite premise.
              Three disciplines &mdash; Capital, Development, Management
              &mdash; under one accountable roof. We acquire what we are
              willing to operate. We develop what we intend to hold. We
              manage everything we own, in&#8209;house, on systems we
              control. We raise on a deal&#8209;by&#8209;deal basis from a
              closed list of investors who have earned the right to see our
              work. We invest meaningful personal capital in every
              transaction, because if the math doesn&rsquo;t work for us it
              shouldn&rsquo;t work for you.
            </p>
            <p className="font-serif italic text-ink">
              We will be small. We will be slow. We will walk from deals
              other firms will do.
            </p>
            <p>That is the firm.</p>
          </article>

          {/* Signature plate */}
          <div className="mt-14 md:mt-16 pt-10 border-t border-ink/15 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6" data-reveal>
            <div>
              <p
                className="font-serif italic text-3xl md:text-4xl text-brass leading-none"
                style={{ fontFeatureSettings: '"ss01"' }}
              >
                Patrick Barrett
              </p>
              <p className="mt-3 font-sans text-[10px] tracking-[0.28em] uppercase text-ink/55">
                Founder &amp; Managing Partner &middot; Thane &amp; Reeve
              </p>
            </div>
            <p className="font-serif italic text-ink/55 text-sm md:text-base max-w-xs sm:text-right">
              Cambridge zoning attorney &middot; developer &middot;
              Investment Committee chair
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
