import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import { PAGE_META } from "@/lib/seo/metadata";
import { breadcrumbSchema, itemListSchema } from "@/lib/seo/schemas";
import { caseStudies } from "@/lib/data/case-studies";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import hotel907 from "@/assets/907-main.jpg";
import storyStreet from "@/assets/17-story-street.jpg";
import building2 from "@/assets/building-2.jpg";
import { PageHeader } from "@/components/brand/PageHeader";

const propertyImages: Record<string, string> = {
  "907-main": hotel907,
  "building-2": storyStreet,
};

const pipelineTeaser = [
  {
    numeral: "i.",
    label: "Mixed-use · 180 units",
    market: "Boston MSA",
    strategy: "Ground-up development",
    status: "Under LOI",
  },
  {
    numeral: "ii.",
    label: "Self-storage portfolio · 4 assets",
    market: "MA / RI",
    strategy: "Stabilized acquisition",
    status: "Diligence",
  },
  {
    numeral: "iii.",
    label: "Adaptive reuse · 120 units",
    market: "Providence",
    strategy: "Value-add + conversion",
    status: "Sourced",
  },
  {
    numeral: "iv.",
    label: "Last-mile industrial",
    market: "Outer Boroughs NY",
    strategy: "Recapitalization",
    status: "Sourced",
  },
];

export default function Portfolio() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <>
      <SEOHead
        {...PAGE_META.portfolio}
        schema={[
          itemListSchema(
            caseStudies.map((cs) => ({
              name: cs.title,
              url: `/portfolio/${cs.slug}`,
              description: cs.description,
            })),
          ),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Portfolio", url: "/portfolio" },
          ]),
        ]}
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-20 bg-paper" ref={sectionRef}>
        <div className="container mx-auto px-6 md:px-12" data-reveal>
          <PageHeader
            label="Portfolio"
            descriptor="Held, developed, and managed"
          />

          <div className="max-w-4xl">
            <p className="font-serif italic text-base md:text-lg text-brass mb-6">
              The work, written up
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.12] text-ink tracking-tight mb-6">
              A curated list, not a funnel.
            </h1>
            <p className="font-serif text-lg md:text-xl leading-[1.7] text-ink/85 max-w-2xl">
              Every asset below has been underwritten to the firm's standard and
              held to justify its place. We would close any of them tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="bg-paper-warm py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto flex flex-col gap-14">
            {caseStudies.map((cs, i) => {
              const img = cs.image ? propertyImages[cs.image] : building2;
              return (
                <article
                  key={cs.slug}
                  className="group grid lg:grid-cols-2 gap-0 bg-paper border border-ink/10 overflow-hidden hover:border-ink/25 transition-all duration-500"
                >
                  <Link
                    to={`/portfolio/${cs.slug}`}
                    className="relative h-72 lg:h-auto lg:min-h-[420px] overflow-hidden bg-paper-warm"
                  >
                    <img
                      src={img}
                      alt={cs.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
                      loading="lazy"
                      width={800}
                      height={500}
                    />
                    <span className="absolute top-5 left-5 font-sans text-[9px] tracking-[0.24em] uppercase text-ink bg-paper/90 backdrop-blur-sm px-3 py-1.5 border border-ink/15">
                      {cs.assetType}
                    </span>
                  </Link>

                  <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-5 flex-wrap">
                      {cs.statusDetail && (
                        <span className="font-sans text-[9px] tracking-[0.16em] uppercase text-brass border border-brass/30 px-3 py-1.5">
                          {cs.statusDetail}
                        </span>
                      )}
                      <span className="font-sans text-[9px] tracking-[0.24em] uppercase text-ink/55 border border-ink/15 px-3 py-1.5">
                        {cs.status}
                      </span>
                      <span className="ml-auto font-serif italic text-brass text-lg">
                        №&nbsp;{String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl md:text-3xl text-ink mb-2 tracking-tight leading-tight">
                      {cs.title}
                    </h2>
                    <p className="font-sans text-xs text-ink/55 mb-6">
                      {cs.location}
                      {cs.neighborhood ? ` — ${cs.neighborhood}` : ""}
                    </p>

                    <p className="font-serif text-base md:text-lg text-ink/85 leading-[1.7] mb-8">
                      {cs.description}
                    </p>

                    {cs.performanceSnapshot && (
                      <div className="mb-8 bg-paper-warm p-5 border-l-2 border-brass">
                        <p className="font-sans text-[9px] tracking-[0.22em] uppercase text-brass mb-4">
                          Performance snapshot
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                          {cs.performanceSnapshot.map((pm, j) => (
                            <div key={j}>
                              <div className="font-serif text-xl md:text-2xl text-ink mb-1">
                                {pm.value}
                              </div>
                              <div className="font-sans text-[9px] tracking-[0.12em] uppercase text-ink/55 mb-0.5">
                                {pm.label}
                              </div>
                              {pm.context && (
                                <div className="font-sans text-[10px] text-ink/55 font-light">
                                  {pm.context}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-ink/15 mb-8">
                      {cs.metrics.map((m, j) => (
                        <div key={j}>
                          <div className="font-sans text-[9px] tracking-[0.22em] uppercase text-ink/55 mb-1.5">
                            {m.label}
                          </div>
                          <div className="font-serif italic text-sm text-ink/85">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={`/portfolio/${cs.slug}`}
                      className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.22em] uppercase text-ink border-b border-ink/30 pb-1 self-start hover:border-brass hover:text-brass transition-colors duration-300"
                    >
                      Read the case <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Pipeline */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <p className="font-serif italic text-base md:text-lg text-brass mb-4">
                Active pipeline — deals we are working
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-ink tracking-tight max-w-3xl">
                A curated list, not a funnel. Each of these has been underwritten to
                the firm's standard; we would close any tomorrow.
              </h2>
            </div>

            <div className="border-t border-ink/20">
              <div className="grid grid-cols-12 gap-4 py-4 border-b border-ink/15 font-sans text-[10px] tracking-[0.24em] uppercase text-ink/55">
                <div className="col-span-1">№</div>
                <div className="col-span-5">Opportunity</div>
                <div className="col-span-3">Strategy</div>
                <div className="col-span-3 text-right">Status</div>
              </div>
              {pipelineTeaser.map((p) => (
                <div
                  key={p.label}
                  className="grid grid-cols-12 gap-4 py-6 border-b border-ink/10 items-center"
                >
                  <div className="col-span-1 font-serif italic text-brass">{p.numeral}</div>
                  <div className="col-span-5">
                    <div className="font-serif italic text-ink text-base md:text-lg">
                      {p.label}
                    </div>
                    <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-ink/55 mt-1">
                      {p.market}
                    </div>
                  </div>
                  <div className="col-span-3 font-sans text-sm text-ink/70">
                    {p.strategy}
                  </div>
                  <div className="col-span-3 text-right">
                    <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-brass border border-brass/40 px-3 py-1.5">
                      {p.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-ink">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl text-paper mb-6 tracking-tight">
            Have a property to discuss?
          </h2>
          <p className="font-serif italic text-paper/70 text-lg leading-[1.7] mb-10">
            We underwrite deal-by-deal. Every submission goes directly to a principal.
          </p>
          <Link
            to="/sell-your-property"
            className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.24em] uppercase px-10 py-4 bg-paper text-ink hover:bg-brass hover:text-paper transition-colors duration-300"
          >
            Submit a property <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
