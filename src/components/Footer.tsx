export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-border/30 py-16 md:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Brand */}
          <div>
            <div className="font-display text-xl font-semibold text-cream mb-2 tracking-tight">
              Barrett &amp; Johnson
            </div>
            <div className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/60">
              Cambridge Property Owners &amp; Developers
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-10 gap-y-3">
            {[
              { label: "Our Approach", href: "#thesis" },
              { label: "Portfolio", href: "#portfolio" },
              { label: "Markets", href: "#markets" },
              { label: "Work With Us", href: "#submit" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-[10px] tracking-[0.15em] uppercase text-cream-muted/50 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-sans text-xs text-cream-muted/30 font-light">
            © 2026 Patrick W. Barrett III &amp; Tim Johnson, CPM. All rights reserved.
          </p>
          <p className="font-sans text-xs text-cream-muted/30 font-light">
            All submissions are confidential and encrypted.
          </p>
        </div>
      </div>
    </footer>
  );
}
