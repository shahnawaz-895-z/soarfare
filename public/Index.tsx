import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import ExploreMoreSection from "@/components/exploremore";
import BlogSection from "@/components/blogsection";
import FAQSection from "@/components/faqsection";
import TestimonialSection from "@/components/testimonialsection";
import Footer from "@/components/footer";
import VideoSection from "@/components/videosection";
import BenefitsVideoSection from "@/components/benefitsVideosection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="absolute top-0 left-0 right-0 z-20">
        <Navigation />
      </div>
      <HeroSection />
      <StatsSection />
      <BenefitsVideoSection/>
      <BenefitsSection />
      <PricingSection />
      <VideoSection/>
      <ExploreMoreSection />
      <BlogSection />
      <FAQSection />
      <TestimonialSection />
      
    </div>
  );
};

export default Index;
