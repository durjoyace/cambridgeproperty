import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GrainOverlay } from "@/components/brand/GrainOverlay";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-ink focus:text-paper focus:font-sans focus:text-sm focus:font-medium focus:tracking-wide focus:outline-none"
      >
        Skip to main content
      </a>
      <GrainOverlay />
      <Navbar />
      <main id="main-content" className="relative z-[2]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
