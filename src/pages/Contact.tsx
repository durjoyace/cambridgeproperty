import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import ContactForm from "@/components/forms/ContactForm";
import { PAGE_META } from "@/lib/seo/metadata";
import { contactPointSchema, breadcrumbSchema } from "@/lib/seo/schemas";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "acquisitions@barrettjohnson.com",
    href: "mailto:acquisitions@barrettjohnson.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(617) 778-3521",
    href: "tel:6177783521",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cambridge, MA",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Fri, 9:00 AM – 6:00 PM ET",
  },
];

export default function Contact() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <>
      <SEOHead
        {...PAGE_META.contact}
        schema={[
          contactPointSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact" },
          ]),
        ]}
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-8 pb-20 bg-charcoal" ref={sectionRef}>
        <div className="container mx-auto" data-reveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="divider-gold" />
            <span className="section-label">Get in Touch</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] tracking-tight">
              Contact
              <br />
              <span className="text-gold">Barrett &amp; Johnson</span>
            </h1>
            <p className="font-sans text-sm md:text-base leading-[1.8] text-cream-muted font-light lg:max-w-sm lg:ml-auto">
              Whether you're considering selling a property, exploring a partnership, or have a general inquiry — our principals are available to speak directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-pad bg-charcoal-mid">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Contact details */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="divider-gold" />
                  <span className="section-label">Direct Contact</span>
                </div>
                <p className="font-sans text-sm text-cream-muted font-light leading-[1.7] mb-8">
                  No gatekeepers, no automated responses. Patrick and Tim are personally available for acquisitions, management inquiries, and partnership opportunities.
                </p>
              </div>
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-gold/20 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-gold/60" />
                      </div>
                      <div>
                        <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-1">
                          {info.label}
                        </div>
                        <div className="font-sans text-sm text-cream font-light">{info.value}</div>
                      </div>
                    </div>
                  );

                  if (info.href) {
                    return (
                      <a
                        key={info.label}
                        href={info.href}
                        className="block hover:opacity-80 transition-opacity duration-300"
                      >
                        {content}
                      </a>
                    );
                  }
                  return <div key={info.label}>{content}</div>;
                })}
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-charcoal">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8 pt-16">
            <div className="divider-gold" />
            <span className="section-label">Our Market</span>
          </div>
          <p className="font-sans text-sm text-cream-muted/70 font-light leading-[1.7] mb-8 max-w-lg">
            Based in Cambridge, operating across Greater Boston. Our portfolio
            spans Central Square, Harvard Square, and Somerville.
          </p>
        </div>
        <div className="w-full h-80 md:h-96 relative overflow-hidden">
          <iframe
            title="Barrett & Johnson — Cambridge, MA"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47161.58692722656!2d-71.13!3d42.375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370a5cb30cc5f%3A0xc53a8e6489686c87!2sCambridge%2C%20MA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            className="w-full h-full border-0 grayscale contrast-125 opacity-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="absolute inset-0 pointer-events-none border-t border-b border-gold/10" />
        </div>
      </section>
    </>
  );
}
