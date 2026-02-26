import { ArrowRight, CheckCircle } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import { PAGE_META } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schemas";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const vendorCategories = [
  {
    name: "General Contractors",
    description: "Full-scope renovation and construction for multifamily and mixed-use assets.",
  },
  {
    name: "Architects",
    description: "Design and permitting for unit renovations, additions, and common area upgrades.",
  },
  {
    name: "Plumbing",
    description: "Emergency service, repiping, and fixture upgrades across our portfolio.",
  },
  {
    name: "Electrical",
    description: "Panel upgrades, code compliance, and EV charging infrastructure.",
  },
  {
    name: "HVAC",
    description: "System installation, seasonal maintenance, and energy-efficiency retrofits.",
  },
  {
    name: "Legal",
    description: "Real estate transactions, landlord-tenant law, and regulatory compliance.",
  },
  {
    name: "Insurance",
    description: "Property and liability coverage tailored to multifamily portfolios.",
  },
  {
    name: "Environmental",
    description: "Lead paint, asbestos, and environmental assessments for acquisitions.",
  },
];

const partnerBenefits = [
  "Access to a 75-door portfolio with consistent project volume",
  "Long-term relationships — not one-off projects",
  "Professional billing and prompt payment",
  "Direct communication with ownership — no layers of management",
];

const partnerCriteria = [
  "Licensed and insured in the Commonwealth of Massachusetts",
  "Greater Boston service area availability",
  "Competitive pricing with transparent estimates",
  "Responsive communication and reliable scheduling",
];

const howItWorks = [
  {
    step: "01",
    title: "Apply",
    description: "Send us your company info, license details, and areas of specialization.",
  },
  {
    step: "02",
    title: "Qualify",
    description: "We verify credentials, check references, and assess fit with our portfolio needs.",
  },
  {
    step: "03",
    title: "Get Projects",
    description: "Approved vendors are added to our preferred network and receive project opportunities.",
  },
];

export default function Partners() {
  const heroRef = useScrollReveal<HTMLElement>();
  const benefitsRef = useScrollReveal<HTMLElement>();
  const criteriaRef = useScrollReveal<HTMLElement>();
  const categoriesRef = useScrollReveal<HTMLElement>();
  const processRef = useScrollReveal<HTMLElement>();

  return (
    <>
      <SEOHead
        {...PAGE_META.partners}
        schema={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Our Partners", url: "/partners" },
          ]),
        ]}
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-8 pb-20 bg-charcoal" ref={heroRef}>
        <div className="container mx-auto text-center max-w-3xl" data-reveal>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="divider-gold" />
            <span className="section-label">Service Network</span>
            <div className="divider-gold" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] tracking-tight mb-6">
            Our Vendor
            <br />
            <span className="text-gold italic">Network</span>
          </h1>
          <p className="font-sans text-base md:text-lg text-cream-muted leading-[1.8] font-light max-w-xl mx-auto">
            Since 2010, Patrick and Tim have built a trusted network of contractors, architects, and service providers through hands-on ownership — people who understand how owner-operators work.
          </p>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="section-pad bg-charcoal-mid" ref={benefitsRef}>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div data-reveal>
              <div className="flex items-center gap-4 mb-8">
                <div className="divider-gold" />
                <span className="section-label">Benefits</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream leading-[1.1] tracking-tight mb-6">
                Why Partner
                <br />
                <span className="text-gold">With Us</span>
              </h2>
              <p className="font-sans text-sm md:text-base leading-[1.8] text-cream-muted font-light max-w-md mb-8">
                Barrett & Johnson is a hands-on ownership group — not a management company with thousands of units and revolving vendor lists. Our partners get consistent, predictable work with direct access to ownership.
              </p>
              <div className="flex flex-col gap-4">
                {partnerBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-gold/60 shrink-0 mt-0.5" />
                    <span className="font-sans text-sm text-cream-muted/80 font-light">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats display */}
            <div data-reveal className="grid grid-cols-2 gap-4">
              <div className="bg-charcoal border border-border/40 p-8 text-center">
                <div className="font-display text-4xl font-semibold text-gold mb-2 tracking-tight">8</div>
                <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream-muted/60">Vendor Categories</div>
              </div>
              <div className="bg-charcoal border border-border/40 p-8 text-center">
                <div className="font-display text-4xl font-semibold text-gold mb-2 tracking-tight">75</div>
                <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream-muted/60">Doors Serviced</div>
              </div>
              <div className="bg-charcoal border border-border/40 p-8 text-center">
                <div className="font-display text-4xl font-semibold text-gold mb-2 tracking-tight">2010</div>
                <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream-muted/60">Founded</div>
              </div>
              <div className="bg-charcoal border border-border/40 p-8 text-center">
                <div className="font-display text-4xl font-semibold text-gold mb-2 tracking-tight">100%</div>
                <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream-muted/60">Owner-Operated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Criteria */}
      <section className="py-24 bg-charcoal" ref={criteriaRef}>
        <div className="container mx-auto max-w-3xl text-center" data-reveal>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="divider-gold" />
            <span className="section-label">Requirements</span>
            <div className="divider-gold" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream tracking-tight mb-6">
            What We Look For
          </h2>
          <p className="font-sans text-sm md:text-base text-cream-muted font-light leading-[1.8] mb-10 max-w-xl mx-auto">
            We hold our partners to the same standards we hold ourselves. Quality work, clear communication, and reliability are non-negotiable.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {partnerCriteria.map((criterion) => (
              <div key={criterion} className="flex items-start gap-3 bg-charcoal-mid border border-border/40 p-5">
                <CheckCircle size={14} className="text-gold/60 shrink-0 mt-0.5" />
                <span className="font-sans text-sm text-cream-muted/80 font-light">{criterion}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Categories */}
      <section className="section-pad bg-charcoal-mid" ref={categoriesRef}>
        <div className="container mx-auto">
          <div className="text-center mb-16" data-reveal>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="divider-gold" />
              <span className="section-label">Specializations</span>
              <div className="divider-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream tracking-tight">
              Vendor Categories
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-reveal>
            {vendorCategories.map((category) => (
              <div
                key={category.name}
                className="bg-charcoal border border-border/40 p-6 md:p-8 hover:border-gold/15 transition-all duration-300"
              >
                <div className="font-sans text-xs tracking-[0.15em] uppercase text-cream mb-2">{category.name}</div>
                <p className="font-sans text-xs text-cream-muted/60 font-light leading-relaxed">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-charcoal" ref={processRef}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16" data-reveal>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="divider-gold" />
              <span className="section-label">Process</span>
              <div className="divider-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream tracking-tight">
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6" data-reveal>
            {howItWorks.map((item) => (
              <div key={item.step} className="bg-charcoal-mid border border-border/40 p-8 md:p-10">
                <div className="font-display text-5xl font-semibold text-gold/10 mb-4 tracking-tight">{item.step}</div>
                <h3 className="font-display text-lg font-semibold text-cream mb-3">{item.title}</h3>
                <p className="font-sans text-sm text-cream-muted/80 font-light leading-[1.7]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal-mid">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream mb-6 tracking-tight">
            Join Our Network
          </h2>
          <p className="font-sans text-sm text-cream-muted font-light leading-[1.8] mb-10">
            Are you a contractor, architect, or service provider who works with multifamily properties in Greater Boston? We're always looking to expand our trusted vendor network.
          </p>
          <a
            href="mailto:partners@barrettjohnson.com"
            className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 bg-gold text-primary-foreground font-medium hover:bg-gold-light transition-all duration-300 shadow-gold focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
          >
            Apply to Partner <ArrowRight size={13} />
          </a>
        </div>
      </section>
    </>
  );
}
