import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useState } from "react";
import PricingCards from "./prisingcards";

const PricingSection2 = () => {
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
    <div className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
            <h2 className="text-4xl font-poppins font-semibold text-[#0C2545] mb-8">
            Choose a Plan<br/> that works for You
          </h2>
          <p className="text-sm font-barlow text-[#0C2545] mb-2">SoarFare is great for those that love to travel to always be building up<br/> points for the next great adventure!</p>
          
          
          {/* Toggle */}
          
        </div>

        {/* Pricing Cards */}
        <PricingCards/>
      </div>
    </div>
  );
};

export default PricingSection2;