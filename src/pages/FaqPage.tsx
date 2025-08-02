import Navigation from "@/components/Navigation";
import Footer2 from "@/components/footer2";
import SoarFareFAQ from "@/components/faq";

const FaqPage = () => {
  return (
    <div className="pt-32 min-h-screen bg-background">
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-[#081C3A]">
        <Navigation />
      </div>
      <SoarFareFAQ/>
      
      </div>
  );
}

export default FaqPage;