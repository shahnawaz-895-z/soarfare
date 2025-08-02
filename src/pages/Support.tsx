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
      
      {/* Hero Section */}
      <div className="relative w-[70%] sm:w-[70%] md:w-[70%] lg:w-3/4 xl:w-3/4 2xl:w-3/4 overflow-hidden my-4 sm:my-6 md:my-8 mx-auto rounded-xl sm:rounded-2xl md:rounded-3xl">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src="/Rectangle 3 (1).png"
            alt="Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30 sm:bg-black/35 md:bg-black/30"></div>
        </div>

        <div className="relative z-10 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
          <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 lg:px-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              {/* Contact Us Label */}
              <h2 className="text-xs sm:text-sm md:text-base text-white mb-3 sm:mb-4 font-medium font-poppins tracking-wide">
                Contact Us
              </h2>

              {/* Main Heading */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold font-poppins text-white mb-6 sm:mb-8 leading-tight">
                We Are <br className="hidden sm:block" />
                <span className="text-white">Always Ready</span><br className="hidden sm:block" />
                <span className="text-white">To Help You</span>
              </h3>

              {/* Subscribe Button */}
              <button className="bg-orange-500 hover:bg-orange-600 font-poppins text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 rounded-md sm:rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium">
 Subscribe Now
</button>
            </div>
            
            {/* Right Content - Optional space for future content */}
            <div className="hidden lg:block lg:w-1/2">
              {/* This space can be used for additional content like contact form, image, etc. */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;