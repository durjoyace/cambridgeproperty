import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import { PageHeader } from "@/components/brand/PageHeader";
import { breadcrumbSchema } from "@/lib/seo/schemas";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const EFFECTIVE_DATE = "June 22, 2026";

/** A privacy section: serif heading + serif body paragraphs. */
function Section({
  numeral,
  title,
  children,
}: {
  numeral: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid lg:grid-cols-[120px_1fr] gap-4 lg:gap-12 py-10 border-t border-ink/10 first:border-t-0">
      <div className="font-sans text-[10px] tracking-[0.28em] uppercase text-brass pt-1">
        {numeral}
      </div>
      <div>
        <h2 className="font-serif text-2xl md:text-3xl text-ink mb-5 tracking-tight leading-tight">
          {title}
        </h2>
        <div className="font-serif text-base md:text-lg leading-[1.75] text-ink/80 space-y-4">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function Privacy() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <>
      <SEOHead
        title="Privacy Policy — Thane & Reeve"
        description="How Thane & Reeve collects, uses, and protects the information you share through our website and contact forms."
        canonical="/privacy"
        schema={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Privacy Policy", url: "/privacy" },
          ]),
        ]}
      />
      <Breadcrumbs />

      <section className="pt-8 md:pt-10 pb-20 md:pb-28 bg-paper" ref={sectionRef}>
        <div className="container mx-auto px-6 md:px-12 max-w-4xl" data-reveal>
          <PageHeader label="Legal" descriptor="Privacy & your information" />

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.12] text-ink tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="font-serif text-lg md:text-xl leading-[1.7] text-ink/80 max-w-2xl mb-2">
            Thane &amp; Reeve is built on confidentiality — it is the first
            promise we make to the owners and partners who bring us their
            business. This policy explains what we collect through this website,
            why, and how we handle it.
          </p>
          <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-ink/55 mt-8">
            Effective {EFFECTIVE_DATE}
          </p>

          <div className="mt-14">
            <Section numeral="01" title="Who we are">
              <p>
                This website is operated by Thane &amp; Reeve Holdings LLC
                (&ldquo;Thane &amp; Reeve,&rdquo; &ldquo;we,&rdquo; or
                &ldquo;us&rdquo;), a real estate firm based in Boston,
                Massachusetts. For any privacy question, reach us at{" "}
                <a
                  href="mailto:contact@thaneandreeve.com"
                  className="text-brass hover:underline"
                >
                  contact@thaneandreeve.com
                </a>
                .
              </p>
            </Section>

            <Section numeral="02" title="Information you give us">
              <p>We only collect information you choose to send through the site:</p>
              <ul className="space-y-2 list-none">
                <li className="flex gap-3">
                  <span className="text-brass mt-2 select-none" aria-hidden>
                    &bull;
                  </span>
                  <span>
                    <strong className="font-normal text-ink">Contact form</strong>{" "}
                    — your name, email address, and the message you write.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brass mt-2 select-none" aria-hidden>
                    &bull;
                  </span>
                  <span>
                    <strong className="font-normal text-ink">
                      Property submissions
                    </strong>{" "}
                    — details about a property you bring to us (such as asset
                    type, location, unit count, and any figures you share), along
                    with your contact information.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brass mt-2 select-none" aria-hidden>
                    &bull;
                  </span>
                  <span>
                    <strong className="font-normal text-ink">
                      Newsletter / LP letter
                    </strong>{" "}
                    — the email address you provide to receive our
                    correspondence.
                  </span>
                </li>
              </ul>
              <p>
                We do not ask for sensitive personal data, and we ask that you
                not send it through these forms.
              </p>
            </Section>

            <Section numeral="03" title="Information collected automatically">
              <p>
                Like most websites, we may collect basic technical and usage
                information — such as your browser type, device, approximate
                location, and the pages you view — using privacy-respecting
                analytics. This helps us understand how the site is used and
                improve it. If and when we enable analytics cookies, we will do
                so in a manner consistent with applicable law, and you can
                control cookies through your browser settings.
              </p>
            </Section>

            <Section numeral="04" title="How we use your information">
              <p>We use the information you share only to:</p>
              <ul className="space-y-2 list-none">
                <li className="flex gap-3">
                  <span className="text-brass mt-2 select-none" aria-hidden>&bull;</span>
                  <span>respond to your inquiry or evaluate a property you submit;</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brass mt-2 select-none" aria-hidden>&bull;</span>
                  <span>send the correspondence you requested;</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brass mt-2 select-none" aria-hidden>&bull;</span>
                  <span>operate, secure, and improve the website.</span>
                </li>
              </ul>
              <p>
                We do <strong className="font-normal text-ink">not</strong> sell
                or rent your information, and we do not share property
                submissions with third parties for their own marketing. Property
                details are read by the principals — never listed, never
                brokered, never forwarded.
              </p>
            </Section>

            <Section numeral="05" title="Service providers">
              <p>
                We rely on a small set of trusted vendors to run the site and
                handle submissions. They process information only on our behalf:
              </p>
              <ul className="space-y-2 list-none">
                <li className="flex gap-3">
                  <span className="text-brass mt-2 select-none" aria-hidden>&bull;</span>
                  <span><strong className="font-normal text-ink">Vercel</strong> — website hosting.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brass mt-2 select-none" aria-hidden>&bull;</span>
                  <span><strong className="font-normal text-ink">Resend</strong> — delivering form emails to us and confirmations to you.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brass mt-2 select-none" aria-hidden>&bull;</span>
                  <span><strong className="font-normal text-ink">Neon</strong> — securely storing property submissions.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brass mt-2 select-none" aria-hidden>&bull;</span>
                  <span><strong className="font-normal text-ink">Analytics provider</strong> — aggregate usage measurement, if enabled.</span>
                </li>
              </ul>
              <p>
                We may also disclose information if required by law or to protect
                our rights, our people, or the public.
              </p>
            </Section>

            <Section numeral="06" title="Retention & security">
              <p>
                We keep your information only as long as needed for the purposes
                above or as required by law, and we apply reasonable safeguards
                to protect it. No method of transmission or storage is perfectly
                secure, but submissions are encrypted in transit and access is
                limited to the people who need it.
              </p>
            </Section>

            <Section numeral="07" title="Your choices & rights">
              <p>
                You may ask us to access, correct, or delete the personal
                information we hold about you, or to stop contacting you, by
                emailing{" "}
                <a
                  href="mailto:contact@thaneandreeve.com"
                  className="text-brass hover:underline"
                >
                  contact@thaneandreeve.com
                </a>
                . You can unsubscribe from our correspondence at any time using
                the link in those emails. Depending on where you live, you may
                have additional rights under laws such as the GDPR or CCPA; we
                will honor those rights where they apply.
              </p>
            </Section>

            <Section numeral="08" title="Other sites & changes">
              <p>
                Our site links to third-party services (for example, the resident
                portal). Their privacy practices are their own, and we encourage
                you to review them. We may update this policy from time to time;
                when we do, we will revise the effective date above.
              </p>
            </Section>

            <Section numeral="09" title="Contact us">
              <p>
                Questions about this policy or your information? Write to{" "}
                <a
                  href="mailto:contact@thaneandreeve.com"
                  className="text-brass hover:underline"
                >
                  contact@thaneandreeve.com
                </a>{" "}
                or to Thane &amp; Reeve Holdings LLC, Boston, Massachusetts.
              </p>
            </Section>
          </div>
        </div>
      </section>
    </>
  );
}
