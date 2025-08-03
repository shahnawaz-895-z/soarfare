import { useState, useEffect } from 'react';
import FlightSearchComponent from "./flightsearchform2";
import heroBackground from "@/assets/Rectangle 311.png";
import hero2 from "@/assets/hero2.png";
import hero3 from "@/assets/hero 3.png";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const backgrounds = [
    heroBackground,
    hero2,
    hero3
  ];
  
  const heroTexts = [
    {
      title: <>Plan<br/> <span className="text-orange-500">Ahead</span></>,
      subtitle: <>Take control of your travel goals with flexible <br/> monthly savings.</>
    },
    {
      title: <>Go<br/> <span className="text-orange-500">Anywhere</span></>,
      subtitle: "From Bali to Boston, your next adventure is a subscription away"
    },
    {
      title: <>Save <span className="text-orange-500">Now</span></>,
      subtitle: "Because life often gets in the way, when you're ready - so are we"
    }
  ];

  const goToSlide = (index) => {
    if (index !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % backgrounds.length;
    goToSlide(next);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative min-h-[500px] h-[60vh] sm:h-[70vh] lg:h-[80vh] flex flex-col">
      {/* Background Images with Swiper Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
            style={{ backgroundImage: `url(${bg})` }}
          />
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]"></div>
      
      {/* Enhanced bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-background via-background/80 to-transparent z-[2]"></div>

      {/* Content */}
      <div className="relative z-[3] flex flex-col flex-1 pb-32 sm:pb-24 lg:pb-20">
        <div className="flex-1 flex items-center justify-start px-4 sm:px-6 lg:px-12 min-h-0">
          <div className="w-full sm:ml-4 md:ml-8 lg:ml-12 text-center sm:text-left">
            <div className={`transition-all duration-500 ease-in-out ${
              isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-poppins font-extrabold text-white leading-tight mb-2 sm:mb-4">
                {heroTexts[currentSlide].title}
              </h1>
              <p className="text-white text-sm xs:text-base font-barlow sm:text-lg md:text-xl max-w-xs xs:max-w-sm sm:max-w-xl mx-auto sm:mx-0">
                {heroTexts[currentSlide].subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators - Positioned above flight search */}
      <div className="absolute bottom-28 sm:bottom-32 lg:bottom-36 left-1/2 transform -translate-x-1/2 flex space-x-3 z-[4]">
        {backgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-4 h-4 rounded-full transition-all duration-300 ease-in-out ${
              currentSlide === index 
                ? 'bg-orange-500 scale-110 shadow-lg shadow-orange-500/50' 
                : 'bg-white/60 hover:bg-white/80 hover:scale-105'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {/* Active indicator ring */}
            {currentSlide === index && (
              <div className="absolute inset-0 rounded-full border-2 border-white/40 scale-150 animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Search Form - Positioned to overlap and stay on top */}
<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-[50] w-full max-w-5xl px-3 sm:px-6">
  <FlightSearchComponent />
</div>
    </div>
  );
};

export default HeroSection;