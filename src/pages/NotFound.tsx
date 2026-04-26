import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import { Wordmark } from "@/components/brand/Wordmark";

const helpfulLinks = [
  { label: "Capital", href: "/capital" },
  { label: "Development", href: "/development" },
  { label: "Management", href: "/management" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Page Not Found | Thane & Reeve"
        description="The page you're looking for doesn't exist or has been moved."
      />
      <div className="min-h-screen flex items-center justify-center bg-paper">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="mb-10">
            <Wordmark size="sm" tone="ink" />
          </div>
          <div className="font-serif italic text-7xl md:text-8xl text-brass/60 mb-6">IV·0·IV</div>
          <h1 className="font-serif text-2xl md:text-3xl text-ink mb-4 tracking-tight">
            This page is not held.
          </h1>
          <p className="font-serif text-base text-ink/75 leading-[1.7] mb-10">
            The address you're looking for isn't part of the portfolio. Return to
            the main page or visit one of our divisions below.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.22em] uppercase px-10 py-4 bg-ink text-paper hover:bg-brass transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brass/60 focus-visible:outline-none"
          >
            Return home <ArrowRight size={13} />
          </Link>

          <div className="mt-12 pt-8 border-t border-ink/10">
            <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-ink/55 mb-4">
              Or visit a division
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {helpfulLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-sans text-xs text-ink/55 hover:text-brass transition-colors duration-300 focus-visible:text-brass focus-visible:outline-none"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
