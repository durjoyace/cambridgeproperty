import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import patrickHeadshot from "@/assets/patrick-barrett.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Editorial principals spread for the home page. The credibility move:
 * names, faces, and credentials before any LP gets to the portfolio.
 *
 * Patrick carries a real portrait; Tim is rendered as an editorial
 * typographic plate (his initials in display Fraunces over paper-warm)
 * because a real headshot has not yet been commissioned. The plate is
 * deliberate, not placeholder — it reads as restraint, the way an
 * institutional firm leaves a chair set for the partner who's traveling.
 */
export default function PrincipalsSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="relative bg-paper-warm py-24 md:py-32 overflow-hidden"
      aria-label="The principals"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16 md:mb-20 grid lg:grid-cols-[1fr_auto] items-end gap-8" data-reveal>
            <div>
              <p className="font-serif italic text-base md:text-lg text-brass mb-5">
                The principals
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.18] text-ink tracking-tight max-w-3xl">
                Two operators. One balance sheet. Personal capital in every transaction.
              </h2>
            </div>
            <p className="font-serif italic text-ink/60 text-sm md:text-base max-w-xs lg:text-right">
              Boston · NYC corridor
              <br />
              Established MMXXVI
            </p>
          </div>

          {/* Hairline above the spread */}
          <div className="h-px w-full bg-ink/20 mb-14" data-reveal-rule />

          {/* The two principals */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Patrick — real portrait */}
            <article data-reveal>
              <div className="relative aspect-[4/5] overflow-hidden bg-ink/5 mb-7">
                <img
                  src={patrickHeadshot}
                  alt="Patrick Barrett, Founder and Managing Partner of Thane & Reeve"
                  className="w-full h-full object-cover object-top grayscale-[0.15] contrast-[1.02]"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </div>
              <div className="flex items-baseline justify-between mb-2">
                <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-brass">
                  Founder &amp; Managing Partner
                </p>
                <p className="font-serif italic text-ink/55 text-sm">№ 01</p>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-ink tracking-tight leading-[1.05] mb-4">
                Patrick Barrett
              </h3>
              <p className="font-serif italic text-ink/65 text-sm md:text-base mb-6 leading-snug">
                Cambridge zoning attorney · developer · Investment Committee chair
              </p>
              <div className="h-px w-12 bg-brass mb-6" />
              <p className="font-serif text-base md:text-lg leading-[1.7] text-ink/85 mb-6">
                Originated and developed the $45M, 67-key 907 Main hotel through
                one of the most complex entitlement processes in the country.
                Authored the Central Square Overlay zoning amendments adopted by
                the Cambridge City Council in 2017. Led 17 Story Street to
                unanimous Historical Commission approval.
              </p>
              <p className="font-serif italic text-base md:text-lg leading-[1.55] text-ink/80 border-l-[1.5px] border-brass pl-5">
                The operating work is where real returns are made — or lost.
              </p>
            </article>

            {/* Tim — typographic plate (no real photograph yet) */}
            <article data-reveal>
              <div className="relative aspect-[4/5] overflow-hidden bg-paper border border-ink/15 mb-7 flex items-center justify-center">
                <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                  <span className="font-sans text-[9px] tracking-[0.32em] uppercase text-ink/45">
                    Portrait, sittings &mdash; 2026
                  </span>
                  <span className="font-serif italic text-ink/45 text-xs">
                    in studio
                  </span>
                </div>
                <div className="text-center">
                  <span className="font-serif font-normal text-ink tracking-wordmark text-7xl md:text-8xl leading-none">
                    TJ
                  </span>
                  <div className="mt-6 mx-auto h-px w-16 bg-brass" />
                  <p className="mt-6 font-serif italic text-ink/60 text-sm md:text-base">
                    Timothy Johnson
                  </p>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <span className="font-sans text-[9px] tracking-[0.32em] uppercase text-ink/40">
                    Plate held
                  </span>
                  <span className="font-sans text-[9px] tracking-[0.32em] uppercase text-ink/40">
                    Tim Johnson · CPM
                  </span>
                </div>
              </div>
              <div className="flex items-baseline justify-between mb-2">
                <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-brass">
                  Partner &middot; CPM
                </p>
                <p className="font-serif italic text-ink/55 text-sm">№ 02</p>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-ink tracking-tight leading-[1.05] mb-4">
                Timothy Johnson
              </h3>
              <p className="font-serif italic text-ink/65 text-sm md:text-base mb-6 leading-snug">
                Certified Property Manager · named principal on $37.75M institutional
                construction financing
              </p>
              <div className="h-px w-12 bg-brass mb-6" />
              <p className="font-serif text-base md:text-lg leading-[1.7] text-ink/85 mb-6">
                Runs Thane &amp; Reeve Management: asset strategy, property
                operations, leasing, capital planning, and quarterly investor
                reporting across the firm's portfolio. The team that holds the
                asset at year seven is the team that bought it at year one.
              </p>
              <p className="font-serif italic text-base md:text-lg leading-[1.55] text-ink/80 border-l-[1.5px] border-brass pl-5">
                Most underperformance in real estate is operational, not strategic.
              </p>
            </article>
          </div>

          {/* Footer rule + read-the-firm link */}
          <div className="mt-16 md:mt-20 pt-10 border-t border-ink/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="font-serif italic text-ink/65 text-sm md:text-base max-w-xl">
              The firm is deliberately small. Two senior decisions per investment.
              Personal capital in every transaction.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.24em] uppercase text-ink border-b border-ink/30 pb-1 hover:border-brass hover:text-brass transition-colors duration-300 self-start sm:self-auto"
            >
              Read the firm
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
