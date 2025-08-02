import { Button } from "@/components/ui/button";
import Container from "@/assets/Container.png";
import { Link } from "react-router-dom";

const StatsSection = () => {
  return (
    <div className="py-10 sm:py-16 md:py-18 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Heading Section - Only visible on smaller screens */}
        <div className="lg:hidden text-center mb-6 sm:mb-8 px-2">
          <p className="font-poppins text-xs sm:text-sm font-semibold text-[#0C2545] tracking-wide uppercase mb-2">
            Cleared for departure
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-poppins font-bold text-[#0C2545] leading-tight">
            Discover the world<br />
            with <span className="text-orange-500">SoarFare</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          
          {/* Image Section with Overlapping Icon */}
          <div className="order-1 lg:order-1 relative flex justify-center lg:justify-end">
            {/* Main Image */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <img 
                src="/image 5 (1).png" 
                alt="Two travelers sitting and enjoying the view"
                className="rounded-xl w-full h-auto object-cover shadow-md relative z-10 transform-gpu will-change-transform"
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
              
              {/* Overlapping Stat Icon - Under the main image */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-5 md:-right-5 lg:-top-6 lg:-right-6 z-0">
                <div className="w-16  h-16 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-md flex items-center justify-center p-3 sm:p-2 md:p-2.5 transform-gpu will-change-transform">
                  <img 
                    src="/statpng.png" 
                    alt="Custom Icon" 
                    className="w-full h-full object-contain transform-gpu will-change-transform"
                    style={{
                      maxWidth: '120%',
                      height: 'auto'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="order-2 lg:order-2 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-center lg:text-left px-2 sm:px-0">
            
            {/* Headings - Only visible on larger screens */}
            <div className="hidden lg:block space-y-2">
              <p className="font-poppins text-sm font-semibold text-[#0C2545] tracking-wide uppercase">
                Cleared for departure
              </p>
              <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-[#0C2545] leading-tight">
                Discover the world<br />
                with <span className="text-orange-500">SoarFare</span>
              </h2>
            </div>

            {/* Paragraph */}
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg font-barlow leading-relaxed max-w-lg mx-auto lg:mx-0">
              No more waiting for the "right time" to travel. SoarFare helps you save now so you can 
              book when the moment feels right. No blackout dates, no gimmicks—just flexible travel, 
              your way.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-xs sm:max-w-sm mx-auto lg:mx-0">
              <div className="text-center lg:text-left bg-white/50 rounded-lg p-2.5 sm:p-3 shadow-sm">
                <div className="text-xl sm:text-2xl lg:text-3xl font-poppins font-bold text-[#0C2545] mb-1">
                  10K+
                </div>
                <div className="text-xs sm:text-sm font-barlow text-muted-foreground">
                  Worldwide User
                </div>
              </div>
              <div className="text-center lg:text-left bg-white/50 rounded-lg p-2.5 sm:p-3 shadow-sm">
                <div className="text-xl sm:text-2xl lg:text-3xl font-poppins font-bold text-[#0C2545] mb-1">
                  2500+
                </div>
                <div className="text-xs sm:text-sm font-barlow text-muted-foreground">
                  Total Flights
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center lg:justify-start pt-2">
              <Link to="/subscription">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-poppins font-medium rounded-lg px-5 sm:px-6 py-2 sm:py-2.5 text-sm transition-all duration-200 shadow-md hover:shadow-lg">
                Subscribe Now
              </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-6 left-6 w-12 h-12 bg-orange-100 rounded-full opacity-20 hidden lg:block"></div>
        <div className="absolute bottom-6 right-6 w-16 h-16 bg-blue-100 rounded-full opacity-15 hidden lg:block"></div>
      </div>
    </div>
  );
};

export default StatsSection;