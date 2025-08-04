import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Plane, Luggage, Building, MapPin, Palmtree, Play } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-primary">
        <Navigation />
      </div>
      
      {/* Main Content */}
      <div className="pt-32 px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left - About Us Title */}
          <div>
            <h1 className="text-6xl lg:text-7xl font-bold text-primary leading-tight">
              About Us
            </h1>
          </div>
          
          {/* Right - Description */}
          <div className="flex items-center">
            <p className="text-muted-foreground text-lg leading-relaxed">
              At SoarFare, we believe travel should be simple, exciting, and accessible to 
              everyone. Whether you're planning your first adventure or your next one, we're 
              here to help you get there with ease. Our innovative points-based system lets 
              you save monthly and book flights your way—without the pressure of upfront 
              costs.
            </p>
          </div>
        </div>

        {/* Travel Journey Icons */}
        <div className="mb-16">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <Plane className="text-primary w-8 h-8" />
            <div className="flex-1 border-t-2 border-dotted border-muted-foreground/40 mx-4"></div>
            <Luggage className="text-primary w-8 h-8" />
            <div className="flex-1 border-t-2 border-dotted border-muted-foreground/40 mx-4"></div>
            <Building className="text-primary w-8 h-8" />
            <div className="flex-1 border-t-2 border-dotted border-muted-foreground/40 mx-4"></div>
            <Plane className="text-primary w-8 h-8" />
            <div className="flex-1 border-t-2 border-dotted border-muted-foreground/40 mx-4"></div>
            <Palmtree className="text-primary w-8 h-8" />
            <div className="flex-1 border-t-2 border-dotted border-muted-foreground/40 mx-4"></div>
            <MapPin className="text-primary w-8 h-8" />
            <div className="flex-1 border-t-2 border-dotted border-muted-foreground/40 mx-4"></div>
            <Plane className="text-primary w-8 h-8" />
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                Cleared for departure
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                Discover the world<br />
                with <span className="text-orange-500">SoarFare</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                No more waiting for the "right time" to travel. SoarFare helps you save now so you can 
                book when the moment feels right. No blackout dates, no gimmicks—just flexible travel, 
                your way.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground">Worldwide User</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2500+</div>
                <div className="text-muted-foreground">Total Flights</div>
              </div>
            </div>

            {/* CTA Button */}
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 mt-2 text-lg rounded-lg">
              Subscribe Now
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/travelers.jpg"
              alt="Happy travelers"
              className="w-full h-[500px] object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Bottom Animated Text Banners */}
        <div className="space-y-8 mb-12">
          {/* Top Banner */}
          <div className="overflow-hidden">
            <div className="flex items-center gap-8 text-3xl lg:text-4xl font-bold text-orange-500 animate-pulse">
              <Play className="w-6 h-6 fill-orange-500" />
              <span className="whitespace-nowrap">Get There With Soarfare</span>
              <div className="flex items-center gap-2">
                <span className="text-sm">SEE</span>
                <div className="w-12 h-12 border-2 border-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-xs">MORE</span>
                </div>
                <span className="text-sm">ABOVE</span>
              </div>
            </div>
          </div>
          
          {/* Bottom Banner */}
          <div className="overflow-hidden">
            <div className="flex items-center gap-8 text-3xl lg:text-4xl font-bold text-orange-500 animate-pulse">
              <Play className="w-6 h-6 fill-orange-500" />
              <span className="whitespace-nowrap">Get There With Soarfare</span>
              <div className="flex items-center gap-2">
                <span className="text-sm">SEE</span>
                <div className="w-12 h-12 border-2 border-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-xs">MORE</span>
                </div>
                <span className="text-sm">ABOVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;