import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useState } from "react";
import PricingCards from "./prisingcards";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic Plan",
      description: "Perfect for casual travellers or those getting started",
      price: "$20",
      period: "/MONTH",
      buttonText: "Join Now",
      features: [
        "Build flight credit every month",
        "Earn Elevation Rewards points",
        "Access to all SoarFare features",
        "Pause or cancel anytime",
        "Great for planning ahead on a budget"
      ],
      isPopular: false
    },
    {
      name: "Standard",
      description: "Our most popular plan - ideal for regular adventurers",
      price: "$50",
      period: "/MONTH",
      buttonText: "Join Now",
      features: [
        "Everything in the Starter Plan",
        "Earn more flight credits, faster",
        "Accelerated Elevation Rewards accumulation",
        "Cancel unwanted getaways at anytime"
      ],
      isPopular: true
    },
    {
      name: "Premium",
      description: "For frequent flyers and big dreamers",
      price: "$100",
      period: "/MONTH",
      buttonText: "Join Now",
      features: [
        "Everything in the Standard Plan",
        "Maximize your monthly flight savings",
        "Reach your travel goals even quicker",
        "Ideal for international trips or multiple trips per year"
      ],
      isPopular: false
    }
  ];

  return (
    <div className="py-12 sm:py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-sm text-[#0C2545] mb-2">Soar Your Way</p>
          <h2 className="text-3xl sm:text-4xl font-manrope font-bold text-[#0C2545] mb-6 sm:mb-8 px-4">
            Your Next Adventure Starts Here
          </h2>
          
          {/* Toggle */}
          {/* <div className="inline-flex items-center bg-muted rounded-full p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                !isYearly 
                  ? "bg-orange-500 text-white" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm font-manrope font-medium transition-colors ${
                isYearly 
                  ? "bg-orange-500 text-white" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly
            </button>
          </div> */}
        </div>

        {/* Pricing Cards */}
        <PricingCards/>
      </div>
    </div>
  );
};

export default PricingSection;