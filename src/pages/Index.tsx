import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ThesisSection from "@/components/ThesisSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import MarketsSection from "@/components/MarketsSection";
import SubmitSection from "@/components/SubmitSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ThesisSection />
        <ProcessSection />
        <PortfolioSection />
        <MarketsSection />
        <SubmitSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
