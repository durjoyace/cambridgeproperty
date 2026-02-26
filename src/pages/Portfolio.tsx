import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import { PAGE_META } from "@/lib/seo/metadata";
import { breadcrumbSchema, itemListSchema } from "@/lib/seo/schemas";
import { caseStudies } from "@/lib/data/case-studies";
import { COMPANY_STATS } from "@/lib/data/stats";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import hotel907 from "@/assets/907-main.jpg";
import storyStreet from "@/assets/17-story-street.jpg";
import building2 from "@/assets/building-2.jpg";

const propertyImages: Record<string, string> = {
  "907-main": hotel907,
  "building-2": storyStreet,
};

const stats = [
  { value: "$45M", label: "Ground-Up Development", sub: "907 Main — The Lark Cambridge" },
  { value: "$37.75M", label: "Financing Secured", sub: "Institutional debt placement" },
  { value: "75", label: "Doors Under Management", sub: `${COMPANY_STATS.residentialUnits} Residential · ${COMPANY_STATS.retailDoors} Retail` },
  { value: `Est. ${COMPANY_STATS.foundingYear}`, label: "Founded", sub: "Cambridge & Greater Boston" },
  { value: "$100M+", label: "Active Pipeline", sub: "Massachusetts & select U.S. markets" },
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
            }))
          ),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Portfolio", url: "/portfolio" },
          ]),
        ]}
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-8 pb-20 bg-charcoal" ref={sectionRef}>
        <div className="container mx-auto" data-reveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="divider-gold" />
            <span className="section-label">Development Portfolio</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] tracking-tight">
              Active
              <br />
              <span className="text-gold">Development</span>
            </h1>
            <p className="font-sans text-sm md:text-base leading-[1.8] text-cream-muted font-light lg:max-w-sm lg:ml-auto">
              Each asset sourced directly, entitled through complex municipal
              process, and operated as a long-term hold. No intermediaries, no
              investment committee lag.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal-mid">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border/40">
            {stats.map((s, i) => (
              <div key={i} className="bg-charcoal-mid p-8 md:p-10 flex flex-col">
                <div className="font-display text-3xl md:text-4xl font-semibold text-gold mb-3 tracking-tight">
                  {s.value}
                </div>
                <div className="font-sans text-[10px] tracking-[0.15em] uppercase text-cream mb-1.5">
                  {s.label}
                </div>
                <div className="font-sans text-[10px] text-cream-muted/50 font-light">
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="section-pad bg-charcoal">
        <div className="container mx-auto">
          <div className="flex flex-col gap-16">
            {caseStudies.map((cs) => {
              const img = cs.image ? propertyImages[cs.image] : building2;
              return (
                <div
                  key={cs.slug}
                  className="group grid lg:grid-cols-2 gap-0 bg-charcoal-mid border border-border/40 overflow-hidden hover:border-gold/15 transition-all duration-500 shadow-card"
                >
                  {/* Image */}
                  <Link
                    to={`/portfolio/${cs.slug}`}
                    className="relative h-72 lg:h-auto lg:min-h-[420px] overflow-hidden"
                  >
                    <img
                      src={img}
                      alt={cs.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
                      loading="lazy"
                      width={800}
                      height={500}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-charcoal-mid/30 lg:block hidden" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-mid via-transparent to-transparent lg:hidden" />
                    <span className="absolute top-5 left-5 font-sans text-[9px] tracking-[0.25em] uppercase text-gold border border-gold/30 bg-charcoal/70 backdrop-blur-sm px-3 py-1.5">
                      {cs.assetType}
                    </span>
                  </Link>

                  {/* Content */}
                  <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-5">
                      {cs.statusDetail && (
                        <span className="font-sans text-[9px] tracking-[0.15em] uppercase text-gold border border-gold/30 bg-gold/5 px-3 py-1.5">
                          {cs.statusDetail}
                        </span>
                      )}
                      <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-cream-muted/60 border border-border/40 px-3 py-1.5">
                        {cs.status}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl md:text-3xl font-semibold text-cream mb-2 tracking-tight">
                      {cs.title}
                    </h2>
                    <p className="font-sans text-xs text-cream-muted/60 mb-6">
                      {cs.location}
                      {cs.neighborhood ? ` — ${cs.neighborhood}` : ""}
                    </p>

                    <p className="font-sans text-sm text-cream-muted leading-[1.7] font-light mb-8">
                      {cs.description}
                    </p>

                    {/* Performance snapshot */}
                    {cs.performanceSnapshot && (
                      <div className="mb-8 p-5 bg-charcoal border border-gold/10">
                        <div className="flex items-center gap-2 mb-4">
                          <TrendingUp size={12} className="text-gold/60" />
                          <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold/70">
                            Performance Snapshot
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          {cs.performanceSnapshot.map((pm, j) => (
                            <div key={j}>
                              <div className="font-display text-lg md:text-xl font-semibold text-gold mb-1">
                                {pm.value}
                              </div>
                              <div className="font-sans text-[9px] tracking-[0.1em] uppercase text-cream-muted/70 mb-0.5">
                                {pm.label}
                              </div>
                              {pm.context && (
                                <div className="font-sans text-[10px] text-cream-muted/40 font-light">
                                  {pm.context}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/40 mb-8">
                      {cs.metrics.map((m, j) => (
                        <div key={j}>
                          <div className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold/60 mb-1.5">
                            {m.label}
                          </div>
                          <div className="font-sans text-xs text-cream font-light">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={`/portfolio/${cs.slug}`}
                      className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-gold/60 hover:text-gold transition-colors duration-300 self-start"
                    >
                      View Full Details <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stabilized Portfolio Summary */}
      <section className="section-pad bg-charcoal-mid">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-charcoal border border-gold/10 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold/60 mb-4">
                  Operating Base
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-cream mb-4 tracking-tight">
                  Stabilized Portfolio
                </h2>
                <p className="font-sans text-sm text-cream-muted/80 font-light leading-[1.8] mb-6">
                  Vertically integrated ownership and operations across{" "}
                  {COMPANY_STATS.residentialUnits} residential units and{" "}
                  {COMPANY_STATS.retailDoors} retail spaces in Cambridge and
                  Somerville. AppFolio-powered, sub-4-hour maintenance response,
                  fully principal-managed since 2010.
                </p>
                <Link
                  to="/management"
                  className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-gold/60 hover:text-gold transition-colors duration-300"
                >
                  Operations Platform <ArrowRight size={12} />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: `${COMPANY_STATS.totalDoors}`, label: "Total Doors" },
                  { value: `${COMPANY_STATS.residentialUnits}`, label: "Residential" },
                  { value: `${COMPANY_STATS.retailDoors}`, label: "Retail" },
                  { value: "100%", label: "Owner-Operated" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="font-display text-2xl font-semibold text-gold mb-1">
                      {item.value}
                    </div>
                    <div className="font-sans text-[10px] text-cream-muted/50">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream mb-6 tracking-tight">
            Have a Property to Discuss?
          </h2>
          <p className="font-sans text-sm text-cream-muted font-light leading-[1.8] mb-10">
            We acquire multifamily, mixed-use, and urban retail assets in the
            $5M–$50M range. Every submission is reviewed personally by Patrick
            and Tim.
          </p>
          <Link
            to="/sell-your-property"
            className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 bg-gold text-primary-foreground font-medium hover:bg-gold-light transition-all duration-300 shadow-gold focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
          >
            Submit a Property <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
