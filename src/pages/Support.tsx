import Navigation from "@/components/Navigation";
import Footer from "@/components/footer";
import SoarFareSupport from "@/components/supportComponent";

const Support = () => {
  return (
    <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 min-h-screen bg-background">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-20 bg-[#081C3A]">
        <Navigation />
      </div>
      
      {/* Support Component */}
      <div className="px-4 sm:px-6 lg:px-8">
        <SoarFareSupport />
        
      </div>
      
      
      
    </div>
  );
}

export default Support;