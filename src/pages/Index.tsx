import HeroSection from "@/components/HeroSection";
import ThesisSection from "@/components/ThesisSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import MarketsSection from "@/components/MarketsSection";
import SubmitSection from "@/components/SubmitSection";
import PartnersSection from "@/components/PartnersSection";
import SEOHead from "@/components/seo/SEOHead";
import { PAGE_META } from "@/lib/seo/metadata";
import { organizationSchema, localBusinessSchema } from "@/lib/seo/schemas";

const Index = () => {
  return (
    <>
      <SEOHead
        {...PAGE_META.home}
        schema={[organizationSchema(), localBusinessSchema()]}
      />
      <HeroSection />
      <ThesisSection />
      <ProcessSection />
      <PortfolioSection />
      <MarketsSection />
      <SubmitSection />
      <PartnersSection />
    </>
  );
};

export default Index;
