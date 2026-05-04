import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import ProductsSection from "@/components/ProductsSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import UseCasesSection from "@/components/UseCasesSection";
import ComparisonSection from "@/components/ComparisonSection";
import StorySection from "@/components/StorySection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SocialProofBar />
        <ProblemSection />
        <HowItWorks />
        <ProductsSection />
        <FeaturesGrid />
        <UseCasesSection />
        <ComparisonSection />
        <StorySection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
