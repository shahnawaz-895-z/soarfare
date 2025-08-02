import Navigation from "@/components/Navigation";
import PricingSection2 from "@/components/pricingSection2";
import BlogSection from "@/components/blogsection";
import Footer from "@/components/footer";
import TestimonialCard from "@/components/testimonialsection";
import Whysoarfare from "@/components/whysoarfaresection";
import MiddleComponent from "@/components/middleComponent";
const Subscriptions = () => {
  return (
    <div className="pt-32 min-h-screen bg-background">
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-[#081C3A]">
        <Navigation />
      </div>
      

      <PricingSection2/>
      <div className="flex justify-center items-center">
      <MiddleComponent/>
      </div>
      <div className="flex justify-center items-center">
  <Whysoarfare />
</div>
      <BlogSection/>
      <TestimonialCard/>
      
      </div>
  );
}

export default Subscriptions;