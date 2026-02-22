import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Our Approach", href: "/#thesis" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Management", href: "/management" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Sell Your Property", href: "/sell-your-property" },
  { label: "Partners", href: "/partners" },
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
                Cambridge Property Owners &amp; Developers
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
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-sans text-xs text-cream-muted/30 font-light">
            &copy; 2026 Patrick W. Barrett III &amp; Tim Johnson, CPM. All rights reserved.
          </p>
          <p className="font-sans text-xs text-cream-muted/30 font-light">
            All submissions are confidential and encrypted.
          </p>
        </div>
      </div>
    </footer>
  );
}
