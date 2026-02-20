export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-border py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="font-display text-lg font-semibold text-cream mb-1">
              Barrett &amp; Johnson
            </div>
            <div className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold">
              Institutional Multifamily Acquisitions
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: "Acquisition Thesis", href: "#thesis" },
              { label: "Portfolio", href: "#portfolio" },
              { label: "Partners", href: "#partners" },
              { label: "Sell Your Property", href: "#submit" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-[10px] tracking-[0.15em] uppercase text-cream-muted hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-sans text-xs text-muted-foreground">
            © 2026 Patrick W. Barrett III &amp; Tim Johnson, CPM. All rights reserved.
          </p>
          <p className="font-sans text-xs text-muted-foreground">
            All submissions are confidential and encrypted.
          </p>
        </div>
      </div>
    </footer>
  );
}
