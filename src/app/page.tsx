import FamilyBar from "@/components/FamilyBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import TrustBadgesSection from "@/components/TrustBadgesSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import ProductTour from "@/components/ProductTour";
import ProductsSection from "@/components/ProductsSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import UseCasesSection from "@/components/UseCasesSection";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StorySection from "@/components/StorySection";
import PricingSection from "@/components/PricingSection";
import NewsletterSection from "@/components/NewsletterSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <FamilyBar />
      <Header />
      <main>
        <HeroSection />
        <SocialProofBar />
        <TrustBadgesSection />
        <ProblemSection />
        <HowItWorks />
        <ProductTour />
        <ProductsSection />
        <FeaturesGrid />
        <UseCasesSection />
        <ComparisonSection />
        <TestimonialsSection />
        <StorySection />
        <PricingSection />
        <NewsletterSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
