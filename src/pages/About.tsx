import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import { PAGE_META } from "@/lib/seo/metadata";
import { personSchema, breadcrumbSchema } from "@/lib/seo/schemas";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import patrickHeadshot from "@/assets/patrick-barrett.png";
import timPlaceholder from "@/assets/tim-johnson-placeholder.svg";
import { Wordmark } from "@/components/brand/Wordmark";
import { Ampersand } from "@/components/brand/Ampersand";
import { PageHeader } from "@/components/brand/PageHeader";

const principals = [
  {
    name: "Patrick Barrett",
    role: "Founder & Managing Partner",
    credential: "Cambridge zoning attorney · developer · Investment Committee chair",
    image: patrickHeadshot,
    bio: "Patrick spent fifteen years on the operating and development side of real estate before he spent a day structuring capital. That order matters. He originated and developed the $45 million, 67-key 907 Main hotel in Central Square through one of the most complex entitlement processes in the country, authored the Central Square Overlay zoning amendments adopted by the Cambridge City Council in 2017, and led the 17 Story Street preservation project to unanimous Historical Commission approval. Most real estate firms are organized around the deal — origination teams hunt, capital teams raise, and the property becomes someone else's problem after the closing dinner. Patrick's view, formed over fifteen years of being the person who inherited those closing dinners, is that the operating work is where real returns are made or lost, and that a firm should be built in a way that keeps ownership and operations under one accountable roof.",
    focus: [
      "Acquisitions & underwriting",
      "Entitlement-led development",
      "Investment committee & governance",
      "LP correspondence",
    ],
    schema: {
      name: "Patrick Barrett",
      jobTitle: "Founder & Managing Partner, Thane & Reeve",
      description:
        "Founder and Managing Partner of Thane & Reeve. Cambridge zoning attorney, developer of the $45M 907 Main hotel, and author of the Central Square Overlay zoning amendments. Leads the firm's investment activity across the Northeast.",
    },
  },
  {
    name: "Timothy Johnson",
    role: "Partner",
    credential: "Certified Property Manager · Named principal on $37.75M institutional financing",
    image: timPlaceholder,
    bio: "Tim is a Certified Property Manager (CPM) and a named principal on the $37.75 million institutional construction financing behind 907 Main. He runs Thane & Reeve Management: asset management, property-level operations, leasing strategy, capital planning, and quarterly investor reporting across the firm's portfolio. The firm's view is straightforward: most underperformance in real estate is operational, not strategic. Holding the operating function in-house is how Thane & Reeve stays accountable to its own underwriting — the team that holds the asset at year seven is the team that bought it at year one.",
    focus: [
      "Asset management & operations",
      "Leasing strategy",
      "Capital improvement execution",
      "Quarterly LP reporting",
    ],
    schema: {
      name: "Timothy Johnson",
      jobTitle: "Partner, Thane & Reeve",
      description:
        "Partner at Thane & Reeve. Certified Property Manager and named principal on $37.75M institutional financing. Runs asset management and property operations across the firm's Northeast portfolio.",
    },
  },
];

export default function About() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <>
      <SEOHead
        {...PAGE_META.about}
        schema={[
          ...principals.map((p) => personSchema(p.schema)),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "About", url: "/about" },
          ]),
        ]}
      />
      <Breadcrumbs />

      {/* Hero — About page from the founding doc */}
      <section className="pt-24 md:pt-32 pb-20 md:pb-28 bg-paper" ref={sectionRef}>
        <div className="container mx-auto px-6 md:px-12" data-reveal>
          <PageHeader label="About" descriptor="The firm, in the founder's voice" />

          <div className="max-w-4xl mx-auto text-center">
            <Wordmark size="xl" tone="ink" sealed />
            <p className="mt-8 font-serif italic text-xl md:text-2xl text-ink/80">
              Land held. Land managed.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <div className="h-px w-full bg-ink/15" />
              <span className="h-1.5 w-1.5 rounded-full bg-brass mx-4" aria-hidden />
              <div className="h-px w-full bg-ink/15" />
            </div>
            <p className="mt-12 font-serif text-xl md:text-3xl leading-[1.4] text-ink max-w-3xl mx-auto">
              We are a real estate firm built on a thousand-year-old idea: that{" "}
              <em className="text-brass not-italic font-serif italic">the ownership of land</em>{" "}
              and{" "}
              <em className="text-brass not-italic font-serif italic">the discipline to run it well</em>{" "}
              are two halves of the same job.
            </p>
          </div>
        </div>
      </section>

      {/* §01 — The Name */}
      <section className="bg-paper-warm py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[180px_1fr] gap-10 lg:gap-16">
            <div>
              <div className="font-sans text-[10px] tracking-[0.28em] uppercase text-brass mb-2">§ 01</div>
              <div className="font-serif italic text-xl text-brass">The name</div>
            </div>
            <div className="font-serif text-lg md:text-xl leading-[1.8] text-ink/85 space-y-6">
              <p>
                In Anglo-Saxon England, a <em>thane</em> was a noble who held land — not
                inherited idly, but earned through service and defended across generations. A{" "}
                <em>reeve</em> was the professional steward who actually ran the estate:
                overseeing the harvest, balancing the books, enforcing the obligations owed
                upward and owed down. Historians call the reeve the first English specialist
                in estate management.
              </p>
              <p>
                A thousand years later, real estate still works this way. Capital requires
                a principal; the principal requires a discipline. An acquisition only matters
                if what follows is a well-run asset. A development is only as good as the
                operator who takes it through lease-up. And no investor is paid twice — once
                for trusting you with the money, and again for actually running the thing.
              </p>
              <p>
                We took both names because we refuse to separate the two roles.
              </p>
            </div>
          </div>

          {/* Ampersand callout */}
          <div className="max-w-3xl mx-auto mt-20 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-20 bg-brass" />
            </div>
            <p className="font-serif italic text-2xl md:text-3xl text-ink leading-[1.4]">
              The ampersand is not a flourish.
              <br />
              It is the promise that ownership and stewardship never get uncoupled.
            </p>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-20 bg-brass" />
            </div>
          </div>
        </div>
      </section>

      {/* §02 — What we do */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[180px_1fr] gap-10 lg:gap-16">
            <div>
              <div className="font-sans text-[10px] tracking-[0.28em] uppercase text-brass mb-2">§ 02</div>
              <div className="font-serif italic text-xl text-brass">What we do</div>
            </div>
            <div className="font-serif text-lg md:text-xl leading-[1.8] text-ink/85 space-y-6">
              <p>
                Thane <Ampersand className="text-[0.85em]" /> Reeve is a flexible real estate
                operator. We acquire stabilized assets where the numbers are disciplined and
                the basis is right. We develop ground-up where we have an information
                advantage on the market. We syndicate alongside select limited partners who
                share our patience and our standards. And we manage everything we own — because
                we believe the operating work is where real returns are made or lost.
              </p>
              <p>
                We are deliberately catholic about asset class and geography, and deliberately
                narrow about how we underwrite. We will walk from deals that other firms will
                do. We will not chase a cycle. We will not index.
              </p>
            </div>
          </div>

          {/* Three cards */}
          <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {[
              {
                numeral: "i.",
                title: "Long-horizon capital",
                body:
                  "We underwrite to hold, not to flip. Every model we build assumes we're the buyer of last resort — so the asset has to work through the cycle, not just at the exit.",
              },
              {
                numeral: "ii.",
                title: "Operator's discipline",
                body:
                  "A good thesis dies in bad operations. We staff, budget, and report as though we were accountable to a trustee — because on most deals, we are.",
              },
              {
                numeral: "iii.",
                title: "Earned dominion",
                body:
                  "The medieval title was conferred on performance. Every asset in our portfolio has to justify its place. Every return has to be built, not assumed.",
              },
            ].map((c) => (
              <div key={c.title} className="bg-paper p-8 md:p-10">
                <div className="font-serif italic text-2xl text-brass mb-6">{c.numeral}</div>
                <h3 className="font-serif text-xl md:text-2xl text-ink mb-4 tracking-tight">
                  {c.title}
                </h3>
                <p className="font-sans text-sm md:text-base leading-[1.75] text-ink/70 font-light">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §03 — Who we serve */}
      <section className="bg-paper-warm py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[180px_1fr] gap-10 lg:gap-16">
            <div>
              <div className="font-sans text-[10px] tracking-[0.28em] uppercase text-brass mb-2">§ 03</div>
              <div className="font-serif italic text-xl text-brass">Who we serve</div>
            </div>
            <div className="font-serif text-lg md:text-xl leading-[1.8] text-ink/85 space-y-6">
              <p>
                We work with family offices, high-net-worth principals, and institutional
                capital seeking direct exposure to real estate alongside a small, aligned
                operator. Our co-invest structures are simple and readable. Our fees are
                transparent. The GP has real money in every deal.
              </p>
              <p>
                We don't raise blind pools. We don't collect assets to grow AUM. We
                underwrite each deal on its own terms, bring it to investors who have earned
                the right to see it, and walk if the math doesn't work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* §04 — The firm */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[180px_1fr] gap-10 lg:gap-16">
            <div>
              <div className="font-sans text-[10px] tracking-[0.28em] uppercase text-brass mb-2">§ 04</div>
              <div className="font-serif italic text-xl text-brass">The firm</div>
            </div>
            <div className="font-serif text-lg md:text-xl leading-[1.8] text-ink/85 space-y-6">
              <p>
                Thane <Ampersand className="text-[0.85em]" /> Reeve was founded in 2026 by
                Patrick Barrett. The firm operates through three divisions:{" "}
                <em className="text-brass">Thane <Ampersand className="text-[0.85em]" /> Reeve Capital</em>{" "}
                (acquisitions and syndication),{" "}
                <em className="text-brass">Thane <Ampersand className="text-[0.85em]" /> Reeve Development</em>{" "}
                (ground-up), and{" "}
                <em className="text-brass">Thane <Ampersand className="text-[0.85em]" /> Reeve Management</em>{" "}
                (asset and property operations).
              </p>
              <p>
                We are based in Boston and invest across the Northeast, with a particular
                focus on the Boston–NYC corridor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principals */}
      <section className="bg-paper-warm py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16" data-reveal>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-ink/55 mb-6">
                The Partners
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink tracking-tight max-w-3xl">
                A deliberately small senior team, staffed from the operating side of the industry.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {principals.map((person) => (
                <article
                  key={person.name}
                  className="bg-paper border border-ink/10 overflow-hidden"
                >
                  <div className="h-72 md:h-96 overflow-hidden bg-paper-warm">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      width={600}
                      height={800}
                    />
                  </div>
                  <div className="p-8 md:p-10">
                    <div className="font-sans text-[10px] tracking-[0.28em] uppercase text-brass mb-3">
                      {person.role}
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-ink mb-2 tracking-tight">
                      {person.name}
                    </h3>
                    <p className="font-serif italic text-sm text-ink/60 mb-6">
                      {person.credential}
                    </p>
                    <p className="font-sans text-sm md:text-base text-ink/75 leading-[1.8] font-light mb-8">
                      {person.bio}
                    </p>
                    <div className="pt-6 border-t border-ink/10">
                      <div className="font-sans text-[10px] tracking-[0.22em] uppercase text-ink/55 mb-3">
                        Areas of focus
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {person.focus.map((f) => (
                          <span
                            key={f}
                            className="font-serif italic text-sm text-ink/70 border border-ink/15 px-3 py-1"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 bg-ink">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <Wordmark size="md" tone="paper" sealed />
          <p className="mt-8 font-serif italic text-2xl md:text-3xl text-paper/90 leading-[1.4]">
            Land held. Land managed.
          </p>
          <p className="mt-6 font-sans text-base leading-[1.8] text-paper/65 font-light max-w-xl mx-auto">
            Whether you have a property to bring to us, a co-investment thesis to
            discuss, or want to walk an asset, our line and our door are open.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/sell-your-property"
              className="inline-flex items-center justify-center gap-3 font-sans text-[11px] tracking-[0.24em] uppercase px-10 py-4 bg-paper text-ink hover:bg-brass hover:text-paper transition-colors duration-300"
            >
              Submit a property <ArrowRight size={13} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 font-sans text-[11px] tracking-[0.24em] uppercase px-10 py-4 border border-paper/30 text-paper hover:border-paper hover:bg-paper/5 transition-all duration-300"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
