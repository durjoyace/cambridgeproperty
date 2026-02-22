import { Link } from "react-router-dom";
import { ArrowRight, Building2, Users, Heart, Target } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import { PAGE_META } from "@/lib/seo/metadata";
import { personSchema, breadcrumbSchema } from "@/lib/seo/schemas";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const principals = [
  {
    name: "Patrick W. Barrett III",
    role: "Principal & Co-Founder",
    bio: "Patrick brings deep expertise in multifamily acquisitions and value-add strategy across Greater Boston. With a hands-on approach to every deal, he oversees acquisition sourcing, underwriting, capital improvements, and asset repositioning. Patrick believes in buying right, improving intelligently, and holding for the long term — a philosophy reflected in every property Barrett & Johnson owns.",
    focus: ["Acquisitions & Underwriting", "Value-Add Strategy", "Capital Improvements", "Asset Repositioning"],
    schema: {
      name: "Patrick W. Barrett III",
      jobTitle: "Principal & Co-Founder",
      description:
        "Cambridge-based real estate principal specializing in multifamily acquisitions and value-add strategy across Greater Boston.",
    },
  },
  {
    name: "Tim Johnson, CPM",
    role: "Principal & Co-Founder",
    bio: "Tim is a Certified Property Manager (CPM) who leads Barrett & Johnson's property operations, tenant relations, and management systems. With 15+ years of hands-on experience, he has built an operations platform powered by AppFolio that delivers institutional-grade reporting and tenant service across every door in the portfolio. Tim's operational discipline is the backbone of B&J's ability to execute value-add strategies while maintaining tenant satisfaction.",
    focus: ["Property Operations", "Tenant Relations", "AppFolio Systems", "Vendor Management"],
    schema: {
      name: "Tim Johnson, CPM",
      jobTitle: "Principal & Co-Founder, Certified Property Manager",
      description:
        "Certified Property Manager (CPM) leading property operations, tenant relations, and management systems for Barrett & Johnson's Greater Boston portfolio.",
    },
  },
];

const timeline = [
  { year: "2010", event: "Patrick and Tim begin acquiring residential properties in Cambridge" },
  { year: "2015", event: "Portfolio grows to include mixed-use assets across Greater Boston" },
  { year: "2018", event: "Adopt AppFolio enterprise property management across all doors" },
  { year: "2022", event: "Expand operations to 75 doors — 63 residential, 12 retail" },
  { year: "2025", event: "Launch Barrett & Johnson brand with unified acquisition and management platform" },
];

const values = [
  {
    icon: Building2,
    title: "Owner-Operated",
    description:
      "We own what we manage and manage what we own. No third-party conflicts, no absentee landlords — Patrick and Tim are personally invested in every property.",
  },
  {
    icon: Target,
    title: "Long-Term Conviction",
    description:
      "We buy to hold and improve — not to flip. Our underwriting reflects 10+ year holds, and our capital improvements reflect that commitment.",
  },
  {
    icon: Users,
    title: "Hands-On Management",
    description:
      "Every maintenance request, every lease renewal, every capital decision flows through our principals. Enterprise systems, personal accountability.",
  },
  {
    icon: Heart,
    title: "Community Investment",
    description:
      "We improve neighborhoods by improving buildings. Quality housing, responsive management, and thoughtful renovations that serve both tenants and the community.",
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
            { name: "About Us", url: "/about" },
          ]),
        ]}
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-8 pb-20 bg-charcoal" ref={sectionRef}>
        <div className="container mx-auto" data-reveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="divider-gold" />
            <span className="section-label">Our Story</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] tracking-tight">
              Owners,
              <br />
              <span className="text-gold">Not Managers</span>
            </h1>
            <p className="font-sans text-sm md:text-base leading-[1.8] text-cream-muted font-light lg:max-w-sm lg:ml-auto">
              Barrett &amp; Johnson was founded on a simple conviction: the best property management comes from people who have their own capital at risk. We are owners first — every decision reflects that.
            </p>
          </div>
        </div>
      </section>

      {/* Principals */}
      <section className="section-pad bg-charcoal-mid">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="divider-gold" />
              <span className="section-label">Our Principals</span>
              <div className="divider-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream tracking-tight">
              Meet the Team
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {principals.map((person) => (
              <div
                key={person.name}
                className="bg-charcoal border border-border/40 overflow-hidden hover:border-gold/15 transition-all duration-500 shadow-card"
              >
                {/* Headshot placeholder */}
                <div className="h-64 bg-gradient-to-br from-charcoal-light to-charcoal flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border-2 border-gold/20 flex items-center justify-center">
                    <span className="font-display text-2xl text-gold/40">
                      {person.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-cream mb-1.5">
                    {person.name}
                  </h3>
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-gold/70 mb-4">
                    {person.role}
                  </p>
                  <p className="font-sans text-sm text-cream-muted leading-[1.7] font-light mb-6">
                    {person.bio}
                  </p>
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

      {/* Timeline */}
      <section className="section-pad bg-charcoal">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="divider-gold" />
              <span className="section-label">Our Journey</span>
              <div className="divider-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream tracking-tight">
              Company Timeline
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border/40" />
            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={item.year} className="relative flex items-start gap-8 pl-16">
                  {/* Dot */}
                  <div className="absolute left-4 top-1 w-4 h-4 border border-gold/40 bg-charcoal flex items-center justify-center">
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

      {/* Values */}
      <section className="section-pad bg-charcoal-mid">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="divider-gold" />
              <span className="section-label">What We Stand For</span>
              <div className="divider-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream tracking-tight">
              Our Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group bg-charcoal border border-border/40 p-8 md:p-10 hover:border-gold/15 transition-all duration-500 shadow-card"
                >
                  <div className="w-12 h-12 border border-gold/20 flex items-center justify-center mb-6 group-hover:border-gold/40 transition-colors duration-300">
                    <Icon size={20} className="text-gold/60 group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-cream mb-3">{value.title}</h3>
                  <p className="font-sans text-sm text-cream-muted/80 font-light leading-[1.7]">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream mb-6 tracking-tight">
            Ready to Work Together?
          </h2>
          <p className="font-sans text-sm text-cream-muted font-light leading-[1.8] mb-10">
            Whether you have a property to sell, a partnership opportunity, or just want to connect — we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/sell-your-property"
              className="inline-flex items-center justify-center gap-3 font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 bg-gold text-primary-foreground font-medium hover:bg-gold-light transition-all duration-300 shadow-gold focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
            >
              Sell Your Property <ArrowRight size={13} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 border border-cream/20 text-cream hover:border-gold hover:text-gold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
