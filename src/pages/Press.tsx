import { ExternalLink, CheckCircle } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import { breadcrumbSchema } from "@/lib/seo/schemas";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  pressItems,
  publicRecord,
  categoryColors,
} from "@/lib/data/press";

export default function Press() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <>
      <SEOHead
        title="Press & Public Record — Barrett & Johnson"
        description="Development projects, institutional financing, community leadership, and policy work by Patrick Barrett and Barrett & Johnson across Cambridge and Greater Boston."
        canonical="/press"
        schema={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Press & Public Record", url: "/press" },
          ]),
        ]}
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-8 pb-20 bg-charcoal" ref={sectionRef}>
        <div className="container mx-auto" data-reveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="divider-gold" />
            <span className="section-label">Press & Public Record</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] tracking-tight">
              In the
              <br />
              <span className="text-gold">Record</span>
            </h1>
            <p className="font-sans text-sm md:text-base leading-[1.8] text-cream-muted font-light lg:max-w-sm lg:ml-auto">
              Others imply credibility. We have documented public record —
              government hearings, institutional media, policy contributions,
              and regulatory outcomes verified by independent sources across
              16 years of direct operation.
            </p>
          </div>
        </div>
      </section>

      {/* Press Coverage */}
      <section className="section-pad bg-charcoal-mid">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="divider-gold" />
            <span className="section-label">Coverage</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pressItems.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-charcoal border border-border/40 p-8 hover:border-gold/15 transition-all duration-500 shadow-card block"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-sans text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 border ${
                        categoryColors[item.category]
                      }`}
                    >
                      {item.category}
                    </span>
                    <span className="font-sans text-[10px] text-cream-muted/60">
                      {new Date(item.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                      })}
                    </span>
                  </div>
                  <ExternalLink
                    size={12}
                    className="text-cream-muted/50 group-hover:text-gold/60 transition-colors"
                  />
                </div>
                <h3 className="font-display text-lg font-semibold text-cream mb-2 group-hover:text-gold transition-colors duration-300 leading-tight">
                  {item.headline}
                </h3>
                <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-gold/50 mb-3">
                  {item.source}
                </p>
                <p className="font-sans text-sm text-cream-muted/70 font-light leading-[1.7]">
                  {item.excerpt}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Public Record Timeline */}
      <section className="section-pad bg-charcoal">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="divider-gold" />
              <span className="section-label">Public Record</span>
              <div className="divider-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream tracking-tight mb-4">
              Since 2010 in Cambridge
            </h2>
            <p className="font-sans text-sm text-cream-muted/70 font-light leading-[1.8] max-w-lg mx-auto">
              A verified timeline of development, community engagement, and
              policy work — with source links to public filings, press coverage,
              and independent reporting.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border/40" />

            <div className="space-y-12">
              {publicRecord.map((item) => (
                <div
                  key={item.year + item.title}
                  className="relative flex items-start gap-8 pl-16"
                >
                  {/* Dot */}
                  <div className="absolute left-4 top-1 w-4 h-4 border border-gold/40 bg-charcoal flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-gold/60" />
                  </div>
                  <div>
                    <div className="font-display text-lg font-semibold text-gold mb-1">
                      {item.year}
                    </div>
                    <h3 className="font-sans text-base font-medium text-cream mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-cream-muted/70 font-light leading-[1.7] mb-3">
                      {item.description}
                    </p>
                    {item.approval && (
                      <div className="flex items-center gap-2 mb-3 bg-gold/5 border border-gold/15 px-4 py-2.5 inline-flex">
                        <CheckCircle size={12} className="text-gold/70 shrink-0" />
                        <span className="font-sans text-xs text-gold/80 font-light">{item.approval}</span>
                      </div>
                    )}
                    {item.sources && (
                      <div className="flex flex-wrap gap-3">
                        {item.sources.map((src) => (
                          <a
                            key={src.url}
                            href={src.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-sans text-[10px] tracking-[0.1em] text-gold/70 hover:text-gold border border-gold/30 hover:border-gold/50 px-3 py-1.5 transition-colors duration-300"
                          >
                            <ExternalLink size={9} />
                            {src.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-16 bg-charcoal-mid">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="divider-gold" />
            <span className="section-label">Community & Affiliations</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-charcoal border border-border/40 p-8">
              <h3 className="font-display text-lg font-semibold text-cream mb-2">
                Central Square BID
              </h3>
              <p className="font-sans text-xs tracking-[0.15em] uppercase text-gold/60 mb-3">
                Board Member & Treasurer
              </p>
              <p className="font-sans text-sm text-cream-muted/70 font-light leading-[1.7] mb-4">
                501(c)(3) nonprofit serving Central Square through
                placemaking, public safety ambassadors, and community
                programming. ~$3M annual budget.
              </p>
              <a
                href="https://www.centralsq.org/about"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-[10px] tracking-[0.1em] text-gold/70 hover:text-gold transition-colors"
              >
                <ExternalLink size={9} /> centralsq.org
              </a>
            </div>
            <div className="bg-charcoal border border-border/40 p-8">
              <h3 className="font-display text-lg font-semibold text-cream mb-2">
                Pioneer Legal Foundation
              </h3>
              <p className="font-sans text-xs tracking-[0.15em] uppercase text-gold/60 mb-3">
                Represented Client
              </p>
              <p className="font-sans text-sm text-cream-muted/70 font-light leading-[1.7] mb-4">
                Barrett's inclusionary zoning challenge is represented by
                attorneys Paul Johnson and Frank Bailey of the Pioneer Legal
                Foundation, advancing constitutional property rights in
                Massachusetts.
              </p>
              <a
                href="https://pioneerlegal.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-[10px] tracking-[0.1em] text-gold/70 hover:text-gold transition-colors"
              >
                <ExternalLink size={9} /> pioneerlegal.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
