import { ExternalLink, CheckCircle } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import { breadcrumbSchema } from "@/lib/seo/schemas";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { pressItems, publicRecord } from "@/lib/data/press";

export default function Press() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <>
      <SEOHead
        title="Press & Public Record — Thane & Reeve"
        description="Development projects, institutional financing, community leadership, and regulatory work by the principals of Thane & Reeve across the Northeast."
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
      <section className="pt-24 md:pt-32 pb-20 bg-paper" ref={sectionRef}>
        <div className="container mx-auto px-6 md:px-12" data-reveal>
          <div className="flex items-center justify-between mb-12">
            <span className="font-serif italic text-2xl md:text-3xl text-brass">XI</span>
            <div className="text-right font-sans text-[10px] tracking-[0.28em] uppercase text-ink/55">
              <div>Press &amp; Public Record</div>
              <div className="font-serif italic tracking-normal normal-case text-[13px] mt-1 text-ink/65">
                Verified, not implied
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-ink/20 mb-16" />

          <div className="max-w-4xl">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-ink/55 mb-6">
              In the record
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.12] text-ink tracking-tight mb-6">
              Others imply credibility.
              <br />
              <em className="text-brass font-serif italic">We have the record.</em>
            </h1>
            <p className="font-sans text-lg md:text-xl leading-[1.7] text-ink/70 font-light max-w-2xl">
              Public hearings, institutional media, zoning filings, and regulatory
              outcomes — verifiable across fifteen years of the principals' direct
              operation in Cambridge and Greater Boston, now consolidated under
              Thane &amp; Reeve.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="bg-paper-warm py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-4">
            Coverage
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink tracking-tight mb-12 leading-[1.2]">
            Press on the work.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {pressItems.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-paper border border-ink/10 p-8 hover:border-ink/25 transition-all duration-500 block"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-brass border border-brass/30 px-3 py-1.5">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-serif italic text-sm text-ink/55">
                      {new Date(item.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                      })}
                    </span>
                    <ExternalLink
                      size={13}
                      className="text-ink/30 group-hover:text-brass transition-colors"
                    />
                  </div>
                </div>
                <h3 className="font-serif text-lg md:text-xl text-ink mb-3 group-hover:text-brass transition-colors duration-300 leading-snug">
                  {item.headline}
                </h3>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-ink/55 mb-3">
                  {item.source}
                </p>
                <p className="font-sans text-sm text-ink/70 font-light leading-[1.75]">
                  {item.excerpt}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <div className="mb-16">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-4">
              Principal's track record
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink tracking-tight mb-4 leading-[1.2]">
              Since 2010 in Cambridge.
            </h2>
            <p className="font-sans text-base text-ink/70 font-light leading-[1.8] max-w-lg">
              A verified timeline of development, community engagement, and policy
              work — with source links to public filings and independent reporting.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-ink/15" />
            <div className="space-y-10">
              {publicRecord.map((item) => (
                <div
                  key={item.year + item.title}
                  className="relative flex items-start gap-8 pl-16"
                >
                  <div className="absolute left-3 top-2 w-6 h-6 border border-brass/50 bg-paper flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-brass" />
                  </div>
                  <div>
                    <div className="font-serif italic text-brass text-lg mb-1">
                      {item.year}
                    </div>
                    <h3 className="font-serif text-lg md:text-xl text-ink mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-ink/70 font-light leading-[1.75] mb-3">
                      {item.description}
                    </p>
                    {item.approval && (
                      <div className="mb-3 inline-flex items-center gap-2 bg-paper-warm border-l-2 border-brass px-4 py-2.5">
                        <CheckCircle size={12} className="text-brass shrink-0" />
                        <span className="font-serif italic text-ink/80 text-sm">
                          {item.approval}
                        </span>
                      </div>
                    )}
                    {item.sources && (
                      <div className="flex flex-wrap gap-2">
                        {item.sources.map((src) => (
                          <a
                            key={src.url}
                            href={src.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-sans text-[10px] tracking-[0.18em] uppercase text-ink/70 hover:text-brass border border-ink/20 hover:border-brass px-3 py-1.5 transition-colors duration-300"
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
      <section className="bg-paper-warm py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brass mb-4">
            Community &amp; affiliations
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink tracking-tight mb-10 leading-[1.2]">
            Showing up, not just writing checks.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-paper border border-ink/10 p-8">
              <h3 className="font-serif text-xl text-ink mb-2 tracking-tight">
                Central Square BID
              </h3>
              <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-brass mb-4">
                Board Member &amp; Treasurer
              </p>
              <p className="font-sans text-sm text-ink/70 font-light leading-[1.75] mb-4">
                501(c)(3) nonprofit serving Central Square through placemaking,
                public-safety ambassadors, and community programming. ~$3M annual
                budget.
              </p>
              <a
                href="https://www.centralsq.org/about"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-[10px] tracking-[0.2em] uppercase text-ink/70 hover:text-brass transition-colors"
              >
                <ExternalLink size={10} /> centralsq.org
              </a>
            </div>
            <div className="bg-paper border border-ink/10 p-8">
              <h3 className="font-serif text-xl text-ink mb-2 tracking-tight">
                Pioneer Legal Foundation
              </h3>
              <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-brass mb-4">
                Represented client
              </p>
              <p className="font-sans text-sm text-ink/70 font-light leading-[1.75] mb-4">
                Patrick's inclusionary zoning challenge is represented by attorneys
                Paul Johnson and Frank Bailey of the Pioneer Legal Foundation,
                advancing constitutional property rights in Massachusetts.
              </p>
              <a
                href="https://pioneerlegal.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-[10px] tracking-[0.2em] uppercase text-ink/70 hover:text-brass transition-colors"
              >
                <ExternalLink size={10} /> pioneerlegal.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
