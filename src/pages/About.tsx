import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import { PAGE_META } from "@/lib/seo/metadata";
import { personSchema, breadcrumbSchema } from "@/lib/seo/schemas";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import patrickHeadshot from "@/assets/patrick-barrett.png";
import timPlaceholder from "@/assets/tim-johnson-placeholder.svg";

const principals = [
  {
    name: "Patrick W. Barrett III",
    role: "Principal & Co-Founder",
    credential: "Zoning Attorney · Developer · Central Square BID Treasurer",
    image: patrickHeadshot,
    bio: "Patrick is a Cambridge zoning attorney and real estate developer with 20 years of entitlement and development experience across Greater Boston. He conceived and developed the 907 Main Hotel — a $45 million, 67-key boutique hotel in Central Square with $37.75M in institutional financing — and authored the Central Square Overlay zoning amendments adopted by the City Council in 2017. His active pipeline includes the preservation and adaptive reuse of the Harriet Jacobs House at 17 Story Street (Cambridge Historical Commission approved 7-0) and a planned $57 million residential condominium on Columbia Street. Patrick's constitutional challenge to Cambridge's inclusionary zoning implementation has been covered by WBUR, Mass Lawyers Weekly, and Commonwealth Beacon.",
    focus: ["Acquisitions & Entitlements", "Ground-Up Development", "Zoning & Land Use Policy", "Capital Formation"],
    directLine: "(617) 778-3521",
    schema: {
      name: "Patrick W. Barrett III",
      jobTitle: "Principal & Co-Founder",
      description:
        "Cambridge zoning attorney and real estate developer. $45M hotel developed, Central Square Overlay authored, 20 years entitlement experience. Central Square BID Treasurer.",
    },
  },
  {
    name: "Tim Johnson, CPM",
    role: "Principal & Co-Founder",
    credential: "Certified Property Manager · Named on $37.75M Institutional Financing",
    image: timPlaceholder,
    bio: "Tim is a Certified Property Manager (CPM) who leads Barrett & Johnson's vertically integrated operations platform. A named principal on the $37.75 million institutional financing for the 907 Main Hotel alongside Patrick, Tim brings both development-scale capital experience and day-to-day operational discipline. Since 2010, he has built an operations infrastructure powered by AppFolio that delivers institutional-grade reporting, sub-4-hour average maintenance response times, and tenant service across every door in the portfolio. Tim's operational discipline is what allows B&J to execute value-add strategies while maintaining high tenant satisfaction and retention.",
    focus: ["Property Operations", "Tenant Relations & Retention", "AppFolio Enterprise Systems", "Capital Improvement Execution"],
    schema: {
      name: "Tim Johnson, CPM",
      jobTitle: "Principal & Co-Founder, Certified Property Manager",
      description:
        "Certified Property Manager and named principal on $37.75M institutional financing. Leads vertically integrated operations across Barrett & Johnson's portfolio since 2010.",
    },
  },
];

const timeline = [
  { year: "2010", event: "First Cambridge acquisitions — Patrick and Tim begin acquiring residential properties" },
  { year: "2015", event: "Mixed-use expansion — portfolio grows to include retail and multifamily assets" },
  { year: "2016", event: "907 Main Hotel — begin development of $45M boutique hotel, designed by Gensler Boston" },
  { year: "2017", event: "Central Square Overlay — Patrick authors zoning amendments adopted by Cambridge City Council" },
  { year: "2018", event: "AppFolio deployment — enterprise property management across all doors" },
  { year: "2019", event: "Central Square BID — Patrick joins the board, later becoming Treasurer (~$3M/year nonprofit)" },
  { year: "2019", event: "$37.75M financing closed — institutional construction debt from NY hedge fund" },
  { year: "2022", event: "75-door stabilization — 63 residential, 12 retail across Cambridge and Somerville" },
  { year: "2022", event: "BA-5 zoning petition — housing production amendment at 2400 Mass Ave" },
  { year: "2025", event: "Harriet Jacobs House approved 7-0 by Cambridge Historical Commission" },
  { year: "2025", event: "Platform launch — unified acquisition and operations platform" },
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

      {/* Hero */}
      <section className="pt-8 pb-20 bg-charcoal" ref={sectionRef}>
        <div className="container mx-auto" data-reveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="divider-gold" />
            <span className="section-label">About Barrett &amp; Johnson</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] tracking-tight">
              Principals,
              <br />
              <span className="text-gold">Not Managers</span>
            </h1>
            <p className="font-sans text-sm md:text-base leading-[1.8] text-cream-muted font-light lg:max-w-sm lg:ml-auto">
              Barrett &amp; Johnson is an operator-led real estate platform built on a
              simple thesis: the best capital stewardship comes from principals who have
              their own equity at risk in every asset they manage.
            </p>
          </div>
        </div>
      </section>

      {/* Principals */}
      <section className="section-pad bg-charcoal-mid">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="divider-gold" />
            <span className="section-label">Our Principals</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {principals.map((person) => (
              <div
                key={person.name}
                className="bg-charcoal border border-border/40 overflow-hidden hover:border-gold/15 transition-all duration-500 shadow-card"
              >
                {/* Headshot */}
                <div className="h-72 md:h-80 overflow-hidden bg-gradient-to-br from-charcoal-light to-charcoal">
                  {"image" in person && person.image ? (
                    <img
                      src={person.image as string}
                      alt={person.name}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      width={600}
                      height={400}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full border-2 border-gold/20 flex items-center justify-center">
                        <span className="font-display text-xl text-gold/40">
                          {person.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-cream mb-1">
                    {person.name}
                  </h3>
                  <p className="font-sans text-xs tracking-[0.1em] uppercase text-gold/70 mb-1.5">
                    {person.role}
                  </p>
                  <p className="font-sans text-[10px] text-cream-muted/40 mb-5">
                    {person.credential}
                  </p>
                  <p className="font-sans text-sm text-cream-muted leading-[1.7] font-light mb-6">
                    {person.bio}
                  </p>
                  {person.directLine && (
                    <a
                      href={`tel:${person.directLine.replace(/[^0-9]/g, "")}`}
                      className="inline-flex items-center gap-2 font-sans text-xs text-gold/60 hover:text-gold transition-colors duration-300 mb-6"
                    >
                      Direct: {person.directLine}
                    </a>
                  )}
                  <div className="pt-6 border-t border-border/40">
                    <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-3">
                      Areas of Focus
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {person.focus.map((f) => (
                        <span
                          key={f}
                          className="font-sans text-[10px] tracking-[0.1em] text-cream-muted/70 border border-border/40 px-3 py-1.5"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Investment — named, quantified */}
      <section className="section-pad bg-charcoal">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="divider-gold" />
                <span className="section-label">Community Investment</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream leading-[1.1] tracking-tight mb-6">
                Named Commitment,
                <br />
                <span className="text-gold">Not Vague Values</span>
              </h2>
              <p className="font-sans text-sm md:text-base leading-[1.8] text-cream-muted font-light max-w-md mb-8">
                We improve neighborhoods by improving buildings and by showing up.
                Community investment is not a page on our website — it's a named
                position, a fiduciary role, and an annual budget.
              </p>
              <Link
                to="/press"
                className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase text-gold group"
              >
                <span className="border-b border-gold/30 pb-1 group-hover:border-gold transition-colors duration-300">
                  View Public Record
                </span>
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-charcoal-mid border border-border/40 p-8">
                <h3 className="font-display text-lg font-semibold text-cream mb-1.5">
                  Central Square Business Improvement District
                </h3>
                <p className="font-sans text-xs tracking-[0.1em] uppercase text-gold/60 mb-4">
                  Board Member &amp; Treasurer — 501(c)(3) Nonprofit
                </p>
                <div className="grid grid-cols-2 gap-6 mb-5">
                  <div>
                    <div className="font-display text-2xl font-semibold text-gold mb-1">~$3M</div>
                    <div className="font-sans text-[10px] text-cream-muted/50">Annual Budget</div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-semibold text-gold mb-1">2019</div>
                    <div className="font-sans text-[10px] text-cream-muted/50">Board Member Since</div>
                  </div>
                </div>
                <p className="font-sans text-sm text-cream-muted/70 font-light leading-[1.7] mb-4">
                  Placemaking, public safety ambassadors, and community programming
                  serving Central Square businesses and residents.
                </p>
                <a
                  href="https://www.centralsq.org/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans text-[10px] tracking-[0.1em] text-gold/50 hover:text-gold transition-colors"
                >
                  <ExternalLink size={9} /> centralsq.org
                </a>
              </div>
              <div className="bg-charcoal-mid border border-border/40 p-8">
                <h3 className="font-display text-lg font-semibold text-cream mb-1.5">
                  Harriet Jacobs House Preservation
                </h3>
                <p className="font-sans text-xs tracking-[0.1em] uppercase text-gold/60 mb-4">
                  5+ Years Community Engagement
                </p>
                <p className="font-sans text-sm text-cream-muted/70 font-light leading-[1.7]">
                  Collaboration with the Jacobs Legacy Committee, Harvard Square Business
                  Association, and Cambridge residents to preserve an African American
                  heritage site while creating 50+ new homes including 10 affordable units.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-charcoal-mid">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="divider-gold" />
              <span className="section-label">Track Record</span>
              <div className="divider-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream tracking-tight">
              Platform Timeline
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border/40" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex items-start gap-8 pl-16">
                  <div className="absolute left-4 top-1 w-4 h-4 border border-gold/40 bg-charcoal-mid flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-gold/60" />
                  </div>
                  <div>
                    <div className="font-display text-lg font-semibold text-gold mb-1">{item.year}</div>
                    <p className="font-sans text-sm text-cream-muted font-light leading-[1.7]">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Co-Investment — elevated */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-charcoal-mid border border-gold/10 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold/60 mb-4">
                  Capital Partnership
                </div>
                <h3 className="font-display text-2xl font-semibold text-cream mb-4 tracking-tight">
                  Co-Investment Opportunities
                </h3>
                <p className="font-sans text-sm text-cream-muted/80 font-light leading-[1.8] mb-6">
                  We partner with aligned capital — family offices, individuals, and
                  institutional co-investors who share our long-term, operator-first
                  thesis. Every co-investment is structured around the asset, not the
                  vehicle. Principals invest alongside every partner.
                </p>
                <Link
                  to="/sell-your-property"
                  className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-gold/60 hover:text-gold transition-colors duration-300"
                >
                  Start a Conversation <ArrowRight size={12} />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Structure", value: "JV / Pref. Equity / Co-Invest" },
                  { label: "Check Size", value: "$5M — $50M" },
                  { label: "Alignment", value: "Principals invest alongside" },
                  { label: "Reporting", value: "Quarterly + audited on request" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="font-sans text-xs font-medium text-cream mb-1">{item.value}</div>
                    <div className="font-sans text-[10px] text-cream-muted/40">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-charcoal-mid">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream mb-6 tracking-tight">
            Ready to Work Together?
          </h2>
          <p className="font-sans text-sm text-cream-muted font-light leading-[1.8] mb-10">
            Whether you have a property to sell, a partnership opportunity, or a
            co-investment thesis to discuss — we'd welcome the conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/sell-your-property"
              className="inline-flex items-center justify-center gap-3 font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 bg-gold text-primary-foreground font-medium hover:bg-gold-light transition-all duration-300 shadow-gold"
            >
              Submit a Property <ArrowRight size={13} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 border border-cream/20 text-cream hover:border-gold hover:text-gold transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
