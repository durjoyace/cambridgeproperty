import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ThesisSection from "@/components/ThesisSection";
import PortfolioSection from "@/components/PortfolioSection";
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
        <PortfolioSection />
        <SubmitSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
