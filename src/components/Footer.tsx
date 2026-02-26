import { Link, useLocation } from "react-router-dom";
import { LogIn } from "lucide-react";
import NewsletterCapture from "@/components/NewsletterCapture";

const navLinks = [
  { label: "Development", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "Press", href: "/press" },
  { label: "About", href: "/about" },
  { label: "Management", href: "/management" },
  { label: "Direct Acquisition", href: "/sell-your-property" },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const { pathname } = useLocation();
  const isHashLink = href.startsWith("/#");

  const cls = "font-sans text-[10px] tracking-[0.15em] uppercase text-cream-muted/50 hover:text-gold transition-colors duration-300 focus-visible:text-gold focus-visible:outline-none";

  if (isHashLink && pathname === "/") {
    return <a href={href.slice(1)} className={cls}>{children}</a>;
  }

  return <Link to={href} className={cls}>{children}</Link>;
}

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-border/30 py-16 md:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="block" aria-label="Barrett & Johnson homepage">
              <div className="font-display text-xl font-semibold text-cream mb-2 tracking-tight">
                Barrett &amp; Johnson
              </div>
              <div className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/60">
                Real Estate Developers &amp; Operators
              </div>
            </Link>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-10 gap-y-3">
            {navLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
            <a
              href="https://barrettjohnson.appfolio.com/connect/users/sign_in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-sans text-[10px] tracking-[0.15em] uppercase text-cream-muted/50 hover:text-gold transition-colors duration-300 focus-visible:text-gold focus-visible:outline-none"
            >
              <LogIn size={11} />
              Resident Portal
            </a>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-8">
            <div className="w-full md:max-w-xs">
              <NewsletterCapture />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="font-sans text-xs text-cream-muted/30 font-light">
              &copy; 2026 Patrick W. Barrett III &amp; Tim Johnson, CPM. All rights reserved.
            </p>
            <p className="font-sans text-xs text-cream-muted/30 font-light">
              All submissions are confidential and encrypted.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
