import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import { PAGE_META } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schemas";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const vendorCategories = [
  "General Contractors",
  "Architects",
  "Plumbing",
  "Electrical",
  "HVAC",
  "Legal",
  "Insurance",
  "Environmental",
];

export default function Partners() {
  const sectionRef = useScrollReveal<HTMLElement>();

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
      <section className="pt-8 pb-20 bg-charcoal" ref={sectionRef}>
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
            Over 15 years of hands-on ownership, Patrick and Tim have built a trusted network of contractors, architects, and service providers who understand how owner-operators work.
          </p>
        </div>
      </section>

      {/* B&J Visual */}
      <section className="py-16 bg-charcoal-mid">
        <div className="container mx-auto flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="aspect-square border border-gold/10 flex items-center justify-center">
              <div className="absolute inset-6 border border-gold/[0.06]" />
              <div className="absolute inset-12 border border-gold/[0.04]" />
              <div className="absolute inset-[4.5rem] border border-gold/[0.03]" />
              <div className="text-center">
                <div className="font-display text-6xl font-semibold text-gold/15 mb-3 tracking-tight">B&amp;J</div>
                <div className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/25">
                  Vendor Network
                </div>
                <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream-muted/30 mt-2">
                  {vendorCategories.length} Categories
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Categories */}
      <section className="section-pad bg-charcoal">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream tracking-tight">
              Vendor Categories
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {vendorCategories.map((category) => (
              <div
                key={category}
                className="bg-charcoal-mid border border-border/40 p-6 md:p-8 text-center hover:border-gold/15 transition-all duration-300"
              >
                <div className="font-sans text-xs tracking-[0.15em] uppercase text-cream-muted/70">{category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal-mid">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream mb-6 tracking-tight">
            Inquire About Joining
          </h2>
          <p className="font-sans text-sm text-cream-muted font-light leading-[1.8] mb-10">
            Are you a contractor, architect, or service provider who works with multifamily properties in Greater Boston? We're always looking to expand our network.
          </p>
          <a
            href="mailto:partners@barrettjohnson.com"
            className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 bg-gold text-primary-foreground font-medium hover:bg-gold-light transition-all duration-300 shadow-gold"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
