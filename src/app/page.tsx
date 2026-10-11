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
import JsonLd, { softwareApp } from "@/components/JsonLd";

// 構造化データ（価格・評価は載せない）。説明文は競合名を含まない中立の文にする。
const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    softwareApp({
      name: "Insight Doc Translator",
      description:
        "Translate, simplify, summarize, and refine PowerPoint, PDF, Word, and Excel files in one Windows desktop app. 47 languages, 6 AI engines, layout preserved, your own AI keys.",
      url: "https://insightoffice.io/",
      downloadUrl: "https://license.h-insight.jp/download/INST?lang=en",
    }),
    softwareApp({
      name: "Insight Training Studio",
      description:
        "PowerPoint to multilingual training video on your desktop. Speaker notes become AI narration in 47 languages; export MP4, WAV/MP3, and SCORM 1.2 packages.",
      url: "https://insightoffice.io/",
      downloadUrl: "https://license.h-insight.jp/download/INMV?lang=en",
    }),
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={STRUCTURED_DATA} />
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
