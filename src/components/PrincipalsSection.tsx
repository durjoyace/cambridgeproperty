import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import patrickHeadshot from "@/assets/patrick-barrett.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Editorial principal spread for the home page. Patrick carries the
 * portrait at editorial scale; Timothy Johnson is referenced in the
 * supporting paragraph beneath the hairline. The two-up portrait grid
 * returns when Tim's editorial portrait is commissioned.
 *
 * Two co-equal portrait slots with one of them empty is a louder signal
 * than one good portrait and a sentence — so for now, the firm is
 * announced by its founder, with its operating partner credited in the
 * voice an annual report would use.
 */
export default function PrincipalsSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="relative bg-paper-warm py-24 md:py-36 overflow-hidden"
      aria-label="The principals"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-14 md:mb-20 grid lg:grid-cols-[1fr_auto] items-end gap-8" data-reveal>
            <div>
              <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-brass mb-5">
                The Principals
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.12] text-ink tracking-tight max-w-3xl">
                Two senior decisions per investment.{" "}
                <span className="italic">Personal capital in every transaction.</span>
              </h2>
            </div>
            <p className="font-serif italic text-ink/60 text-sm md:text-base max-w-xs lg:text-right">
              Boston &middot; NYC corridor
              <br />
              Established MMXXVI
            </p>
          </div>

          <div className="h-px w-full bg-ink/20 mb-14 md:mb-20" data-reveal-rule />

          {/* Patrick — editorial portrait at scale */}
          <article className="grid md:grid-cols-12 gap-10 md:gap-14" data-reveal>
            <div className="md:col-span-6 lg:col-span-5">
              <figure className="relative aspect-[4/5] overflow-hidden bg-ink/10">
                <img
                  src={patrickHeadshot}
                  alt="Patrick Barrett, Founder and Managing Partner of Thane & Reeve"
                  className="w-full h-full object-cover object-top grayscale contrast-[1.05] brightness-[0.97]"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </figure>
              <figcaption className="mt-4 flex items-baseline justify-between font-sans text-[10px] tracking-[0.28em] uppercase text-ink/55">
                <span>Portrait &middot; Boston, MMXXVI</span>
                <span className="font-serif italic tracking-normal normal-case text-sm text-ink/65">
                  Plate №&thinsp;01
                </span>
              </figcaption>
            </div>

            <div className="md:col-span-6 lg:col-span-7 lg:pl-6">
              <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-brass mb-5">
                Founder &amp; Managing Partner
              </p>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-tight leading-[1.02] mb-5">
                Patrick Barrett
              </h3>
              <p className="font-serif italic text-ink/65 text-base md:text-lg mb-8 leading-snug">
                Cambridge zoning attorney &middot; developer &middot;
                Investment Committee chair
              </p>
              <div className="h-px w-16 bg-brass mb-8" />
              <p className="font-serif text-lg md:text-xl leading-[1.7] text-ink/85 mb-7">
                Originated and developed the $45M, 67&#8209;key 907 Main hotel
                through one of the most complex entitlement processes in the
                country. Authored the Central Square Overlay zoning amendments
                adopted by the Cambridge City Council in 2017. Led 17 Story
                Street to unanimous approval before the Cambridge Historical
                Commission.
              </p>
              <p className="font-serif text-lg md:text-xl leading-[1.7] text-ink/85 mb-10">
                Most real estate firms are organized around the deal &mdash;
                origination teams hunt, capital teams raise, and the property
                becomes someone else&rsquo;s problem after the closing dinner.
                Patrick&rsquo;s firm is built the other way around: the team
                that holds the asset at year seven is the team that bought it
                at year one.
              </p>
              <p className="font-serif italic text-lg md:text-xl leading-[1.55] text-ink/85 border-l-[1.5px] border-brass pl-6">
                The operating work is where real returns are made &mdash; or
                lost.
              </p>
            </div>
          </article>

          {/* Operating partner — Tim, inline with full credibility */}
          <div
            className="mt-16 md:mt-20 pt-10 border-t border-ink/15 grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start"
            data-reveal
          >
            <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-brass whitespace-nowrap">
              Operating Partner
            </p>
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-ink tracking-tight leading-snug mb-4">
                <span className="text-ink">Timothy Johnson, CPM</span>
                <span className="font-serif italic text-ink/65 text-base md:text-lg ml-3 whitespace-nowrap">
                  &mdash; Partner
                </span>
              </h3>
              <p className="font-serif text-base md:text-lg leading-[1.7] text-ink/80 max-w-3xl">
                Certified Property Manager and named principal on the $37.75M
                institutional construction financing for 907 Main. Tim runs
                Thane &amp; Reeve Management &mdash; asset strategy, property
                operations, leasing, capital planning, and quarterly investor
                reporting across the firm&rsquo;s portfolio. The reeve&rsquo;s
                work is held in&#8209;house, on systems the firm controls, by
                the same team that signs the underwriting.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-14 md:mt-16 pt-8 border-t border-ink/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="font-serif italic text-ink/65 text-sm md:text-base max-w-xl">
              The firm is deliberately small. Two senior decisions per
              investment. Personal capital in every transaction.
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
