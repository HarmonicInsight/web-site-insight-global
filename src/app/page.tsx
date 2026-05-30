import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TwoProductsShowcase from "@/components/TwoProductsShowcase";
import SocialProofBar from "@/components/SocialProofBar";
import TrustBadgesSection from "@/components/TrustBadgesSection";
import ProblemSection from "@/components/ProblemSection";
import DualEntrySection from "@/components/DualEntrySection";
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
      <Header />
      <main>
        <HeroSection />
        {/*
          Two clearly separated product showcases (each with its own demo video).
          Placed immediately after Hero so reviewers / Lemon Squeezy / first-time
          visitors see "two distinct products" before any shared / pipeline copy.
        */}
        <TwoProductsShowcase />
        <SocialProofBar />
        <TrustBadgesSection />
        <ProblemSection />
        <DualEntrySection />
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
