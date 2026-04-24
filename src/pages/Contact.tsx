import { Mail, MapPin, Clock } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import ContactForm from "@/components/forms/ContactForm";
import { PAGE_META } from "@/lib/seo/metadata";
import { contactPointSchema, breadcrumbSchema } from "@/lib/seo/schemas";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Wordmark } from "@/components/brand/Wordmark";

const contactInfo = [
  {
    icon: Mail,
    label: "Firm",
    value: "contact@thaneandreeve.com",
    href: "mailto:contact@thaneandreeve.com",
  },
  {
    icon: Mail,
    label: "Capital · acquisitions",
    value: "acquisitions@thaneandreeve.com",
    href: "mailto:acquisitions@thaneandreeve.com",
  },
  {
    icon: Mail,
    label: "Management · operations",
    value: "management@thaneandreeve.com",
    href: "mailto:management@thaneandreeve.com",
  },
  {
    icon: MapPin,
    label: "Based",
    value: "Boston, MA · Operating Boston–NYC corridor",
  },
  {
    icon: Clock,
    label: "Response",
    value: "48 business hours · Mon–Fri",
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
      <section className="pt-24 md:pt-32 pb-20 bg-paper" ref={sectionRef}>
        <div className="container mx-auto px-6 md:px-12" data-reveal>
          <div className="flex items-center justify-between mb-12">
            <span className="font-serif italic text-2xl md:text-3xl text-brass">VII</span>
            <div className="text-right font-sans text-[10px] tracking-[0.28em] uppercase text-ink/55">
              <div>Contact</div>
              <div className="font-serif italic tracking-normal normal-case text-[13px] mt-1 text-ink/65">
                Partner correspondence
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-ink/20 mb-16" />

          <div className="max-w-4xl">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-ink/55 mb-6">
              Direct Correspondence
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.12] text-ink tracking-tight mb-6">
              Our line and our door are open.
            </h1>
            <p className="font-sans text-lg md:text-xl leading-[1.7] text-ink/70 font-light max-w-2xl">
              Whether you have a property to bring, a co-investment thesis to
              discuss, or want to walk an asset — reach a principal directly. That
              is not a closing pleasantry. We mean it literally.
            </p>
          </div>
        </div>
      </section>

      {/* Contact details + form */}
      <section className="bg-paper-warm py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-brass mb-4">
                  Direct contact
                </p>
                <p className="font-serif italic text-lg text-ink/75 leading-[1.7]">
                  No gatekeepers. No auto-responses. Partners are personally
                  available for acquisitions, management inquiries, and co-investment
                  conversations.
                </p>
              </div>

              <div className="border-t border-ink/15">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-5 py-5 border-b border-ink/15">
                      <Icon size={16} className="text-brass mt-1 shrink-0" />
                      <div>
                        <div className="font-sans text-[10px] tracking-[0.22em] uppercase text-ink/55 mb-1">
                          {info.label}
                        </div>
                        <div className="font-serif italic text-ink/85">{info.value}</div>
                      </div>
                    </div>
                  );
                  if (info.href) {
                    return (
                      <a
                        key={info.label}
                        href={info.href}
                        className="block hover:bg-paper transition-colors px-1"
                      >
                        {content}
                      </a>
                    );
                  }
                  return <div key={info.label}>{content}</div>;
                })}
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Geography band */}
      <section className="bg-ink py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center">
          <Wordmark size="sm" tone="paper" />
          <p className="mt-6 font-serif italic text-paper/75 text-lg md:text-xl max-w-2xl mx-auto leading-[1.6]">
            Based in Boston. Operating across the Boston–NYC corridor, with
            underwriting from Providence to the Hudson Valley.
          </p>
          <div className="mt-10 flex items-center justify-center gap-8 font-sans text-[10px] tracking-[0.3em] uppercase text-paper/55">
            <span>Boston</span>
            <span className="h-1 w-1 rounded-full bg-brass" />
            <span>Cambridge</span>
            <span className="h-1 w-1 rounded-full bg-brass" />
            <span>Providence</span>
            <span className="h-1 w-1 rounded-full bg-brass" />
            <span>NYC</span>
          </div>
        </div>
      </section>
    </>
  );
}
