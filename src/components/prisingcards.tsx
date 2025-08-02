import React, { useState } from 'react';
import { Check } from 'lucide-react';

const PricingCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const plans = [
    {
      name: "Basic Plan",
      description: "Perfect for casual travelers or those getting started.",
      price: "$20",
      period: "/month",
      buttonText: "Join Now",
      isPopular: false,
      features: [
        "Build flight credit every month",
        "Earn Elevation Rewards points",
        "Access to all SoarFare features",
        "Pause or cancel anytime",
        "Great for planning ahead on a budget"
      ]
    },
    {
      name: "Standard",
      description: "Our most popular plan—ideal for regular travelers.",
      price: "$50",
      period: "/month",
      buttonText: "Join Now",
      isPopular: true,
      badge: "Our most popular plan—ideal for regular travelers.",
      features: [
        "Everything in the Starter Plan",
        "Earn more flight credit, faster",
        "Accelerated Elevation Rewards accumulation",
        "Great for weekend getaways or annual trips"
      ]
    },
    {
      name: "Premium",
      description: <>For frequent flyers and big dreamers.<br/><br/></>,

      price: "$100",
      period: "/month",
      buttonText: "Join Now",
      isPopular: false,
      features: [
        "Everything in the Standard Plan",
        "Maximize your monthly flight savings",
        "Reach your travel goals even quicker",
        <>Ideal for international trips or multiple<br/> flights per year</>
      ]
    }
  ];

  // Determine which card should be orange
  const getActiveCard = () => {
    return hoveredCard || "Standard";
  };

  const isCardActive = (planName) => {
    return getActiveCard() === planName;
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl p-6 border shadow-sm transition-all duration-300 cursor-pointer ${
              isCardActive(plan.name)
                ? "bg-orange-500 border-orange-500" 
                : "bg-white border-gray-200"
            }`}
            onMouseEnter={() => setHoveredCard(plan.name)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Top-right Icon */}
            <div className="absolute top-6 right-6">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                {plan.name === "Basic Plan" && (
                  // Add Basic Plan SVG here
                  <div><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_415_1018)">
<g clip-path="url(#clip1_415_1018)">
<path d="M23.5589 12.7401L22.1989 11.1601C21.9389 10.8601 21.7289 10.3001 21.7289 9.90006V8.20006C21.7289 7.14006 20.8589 6.27006 19.7989 6.27006H18.0989C17.7089 6.27006 17.1389 6.06006 16.8389 5.80006L15.2589 4.44006C14.5689 3.85006 13.4389 3.85006 12.7389 4.44006L11.1689 5.81006C10.8689 6.06006 10.2989 6.27006 9.90891 6.27006H8.17891C7.11891 6.27006 6.24891 7.14006 6.24891 8.20006V9.91006C6.24891 10.3001 6.03891 10.8601 5.78891 11.1601L4.43891 12.7501C3.85891 13.4401 3.85891 14.5601 4.43891 15.2501L5.78891 16.8401C6.03891 17.1401 6.24891 17.7001 6.24891 18.0901V19.8001C6.24891 20.8601 7.11891 21.7301 8.17891 21.7301H9.90891C10.2989 21.7301 10.8689 21.9401 11.1689 22.2001L12.7489 23.5601C13.4389 24.1501 14.5689 24.1501 15.2689 23.5601L16.8489 22.2001C17.1489 21.9401 17.7089 21.7301 18.1089 21.7301H19.8089C20.8689 21.7301 21.7389 20.8601 21.7389 19.8001V18.1001C21.7389 17.7101 21.9489 17.1401 22.2089 16.8401L23.5689 15.2601C24.1489 14.5701 24.1489 13.4301 23.5589 12.7401ZM18.6789 14.0001L17.5089 17.5601C17.3589 18.1501 16.7289 18.6301 16.0889 18.6301H14.2389C13.9189 18.6301 13.4689 18.5201 13.2689 18.3201L11.7989 17.1701C11.7689 17.8101 11.4789 18.0801 10.7689 18.0801H10.2889C9.54891 18.0801 9.24891 17.7901 9.24891 17.0901V12.3101C9.24891 11.6101 9.54891 11.3201 10.2889 11.3201H10.7789C11.5189 11.3201 11.8189 11.6101 11.8189 12.3101V12.6701L13.7589 9.79006C13.9589 9.48006 14.4689 9.26006 14.8989 9.43006C15.3689 9.59006 15.6689 10.1101 15.5689 10.5701L15.3289 12.1301C15.3089 12.2701 15.3389 12.4001 15.4289 12.5001C15.5089 12.5901 15.6289 12.6501 15.7589 12.6501H17.7089C18.0889 12.6501 18.4089 12.8001 18.5989 13.0701C18.7689 13.3301 18.7989 13.6601 18.6789 14.0001Z" fill="#0E1226"/>
</g>
</g>
<defs>
<clipPath id="clip0_415_1018">
<rect width="28" height="28" fill="white"/>
</clipPath>
<clipPath id="clip1_415_1018">
<rect width="28" height="28" fill="white"/>
</clipPath>
</defs>
</svg>

</div>
                )}
                {plan.name === "Standard" && (
                  // Add Standard SVG here
                  <div><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_415_1064)">
<g clip-path="url(#clip1_415_1064)">
<path d="M22.4797 19.9311L20.9667 20.2891C20.8011 20.3265 20.6495 20.4101 20.5293 20.53C20.4092 20.65 20.3254 20.8015 20.2877 20.9671L19.9677 22.3151C19.7927 23.0481 18.8577 23.2771 18.3717 22.7001L15.6317 19.5461C15.5807 19.4874 15.5455 19.4167 15.5294 19.3406C15.5133 19.2646 15.5169 19.1857 15.5399 19.1114C15.5628 19.0371 15.6043 18.9699 15.6604 18.9161C15.7166 18.8623 15.7855 18.8238 15.8607 18.8041C17.4877 18.4085 18.9437 17.4988 20.0127 16.2101C20.0522 16.1595 20.102 16.1178 20.1587 16.0877C20.2155 16.0576 20.2779 16.0398 20.3419 16.0355C20.406 16.0311 20.4703 16.0403 20.5305 16.0625C20.5908 16.0847 20.6457 16.1193 20.6917 16.1641L22.7267 18.1991C23.4227 18.8951 23.1767 19.7661 22.4797 19.9311Z" fill="#F07822"/>
<path d="M5.47503 19.9311L6.98704 20.2891C7.15264 20.3265 7.30428 20.4101 7.42443 20.53C7.54458 20.65 7.62834 20.8015 7.66603 20.9671L7.98604 22.3151C8.16104 23.0481 9.09603 23.2771 9.58203 22.7001L12.322 19.5461C12.3731 19.4874 12.4083 19.4167 12.4243 19.3406C12.4404 19.2646 12.4368 19.1857 12.4139 19.1114C12.391 19.0371 12.3495 18.9699 12.2933 18.9161C12.2372 18.8623 12.1682 18.8238 12.093 18.8041C10.4661 18.4085 9.01002 17.4988 7.94104 16.2101C7.9015 16.1595 7.85175 16.1178 7.79503 16.0877C7.7383 16.0576 7.67587 16.0398 7.61181 16.0355C7.54774 16.0311 7.48348 16.0403 7.42322 16.0625C7.36295 16.0847 7.30803 16.1193 7.26204 16.1641L5.22704 18.1991C4.53104 18.8951 4.77803 19.7661 5.47503 19.9311Z" fill="#F07822"/>
<path d="M13.999 4.83301C13.1562 4.83235 12.3214 4.99788 11.5426 5.32014C10.7637 5.64239 10.0561 6.11503 9.46006 6.71104C8.86406 7.30704 8.39141 8.01471 8.06916 8.79355C7.74691 9.5724 7.58138 10.4071 7.58203 11.25C7.58203 12.579 7.97603 13.798 8.65503 14.816C9.15206 15.5572 9.79854 16.1863 10.553 16.663C11.3074 17.1397 12.1532 17.4534 13.036 17.584C13.348 17.639 13.669 17.666 13.999 17.666C14.329 17.666 14.649 17.639 14.961 17.584C15.844 17.4535 16.69 17.1399 17.4446 16.6632C18.1993 16.1865 18.8459 15.5573 19.343 14.816C20.047 13.7603 20.4205 12.5189 20.416 11.25C20.4167 10.4071 20.2512 9.5724 19.9289 8.79355C19.6067 8.01471 19.134 7.30704 18.538 6.71104C17.942 6.11503 17.2343 5.64239 16.4555 5.32014C15.6766 4.99788 14.8419 4.83235 13.999 4.83301ZM16.804 11.048L16.044 11.808C15.9762 11.8827 15.9267 11.9723 15.8994 12.0695C15.8722 12.1667 15.8679 12.2689 15.887 12.368L16.107 13.312C16.281 14.055 15.887 14.348 15.227 13.954L14.311 13.413C14.2179 13.3634 14.114 13.3374 14.0085 13.3374C13.903 13.3374 13.7991 13.3634 13.706 13.413L12.789 13.953C12.129 14.339 11.735 14.055 11.909 13.313L12.129 12.368C12.1452 12.2689 12.1396 12.1675 12.1127 12.0708C12.0858 11.9741 12.0381 11.8845 11.973 11.808L11.193 11.048C10.745 10.598 10.891 10.15 11.515 10.048L12.495 9.88401C12.5852 9.86326 12.67 9.82402 12.7442 9.76876C12.8184 9.71351 12.8803 9.64344 12.926 9.56301L13.467 8.48101C13.761 7.89501 14.237 7.89501 14.531 8.48101L15.071 9.56301C15.1176 9.64439 15.1809 9.71499 15.2568 9.77014C15.3326 9.8253 15.4193 9.86377 15.511 9.88301L16.492 10.049C17.106 10.149 17.253 10.599 16.804 11.048Z" fill="#F07822"/>
</g>
</g>
<defs>
<clipPath id="clip0_415_1064">
<rect width="28" height="28" fill="white"/>
</clipPath>
<clipPath id="clip1_415_1064">
<rect width="28" height="28" fill="white"/>
</clipPath>
</defs>
</svg></div>
                )}
                {plan.name === "Premium" && (
                  // Add Premium SVG here
                  <div><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_415_1111)">
<g clip-path="url(#clip1_415_1111)">
<path d="M13.3135 19.7289H11.2505C10.7648 19.7305 10.2995 19.9241 9.95612 20.2675C9.61271 20.6109 9.41908 21.0763 9.4175 21.5619V21.7919H8.5005C8.31861 21.7932 8.14452 21.866 8.01581 21.9945C7.88709 22.123 7.81407 22.297 7.8125 22.4789C7.8125 22.8549 8.1245 23.1669 8.5005 23.1669H19.5005C19.6826 23.1659 19.857 23.093 19.9858 22.9642C20.1146 22.8354 20.1874 22.6611 20.1885 22.4789C20.1872 22.2968 20.1143 22.1226 19.9855 21.9939C19.8568 21.8651 19.6826 21.7922 19.5005 21.7909H18.5835V21.5619C18.5819 21.0763 18.3883 20.6109 18.0449 20.2675C17.7015 19.9241 17.2362 19.7305 16.7505 19.7289H14.6875V17.6289C14.4595 17.6552 14.23 17.6675 14.0005 17.6659C13.7705 17.6659 13.5425 17.6569 13.3125 17.6299L13.3135 19.7289Z" fill="#0E1226"/>
<path d="M19.9399 13.67C20.5256 13.4407 21.0564 13.0908 21.4979 12.643C22.3509 11.699 22.9099 10.571 22.9099 9.25101C22.913 8.94081 22.8542 8.63311 22.7369 8.34593C22.6195 8.05875 22.4461 7.79787 22.2267 7.57856C22.0073 7.35925 21.7463 7.18592 21.4591 7.06872C21.1719 6.95152 20.8642 6.8928 20.5539 6.89601H20.0409C19.7411 6.27827 19.2737 5.75728 18.6919 5.3925C18.1102 5.02772 17.4376 4.83384 16.7509 4.83301H11.2509C10.564 4.83347 9.89095 5.02717 9.30882 5.39197C8.72669 5.75677 8.25892 6.27797 7.95895 6.89601H7.44595C7.13583 6.8928 6.82819 6.95149 6.54103 7.06863C6.25387 7.18576 5.99296 7.35901 5.77357 7.57821C5.55418 7.79741 5.38072 8.05818 5.26333 8.34524C5.14595 8.6323 5.08701 8.93989 5.08995 9.25001C5.08995 10.57 5.64995 11.698 6.50195 12.642C6.92295 13.064 7.45495 13.439 8.05995 13.669C8.53894 14.8514 9.36035 15.8636 10.4187 16.5758C11.4771 17.288 12.7242 17.6677 13.9999 17.666C15.2755 17.6677 16.5226 17.2882 17.5809 16.5762C18.6393 15.8642 19.4608 14.8522 19.9399 13.67ZM16.6029 10.745L16.0349 11.442C15.9366 11.5673 15.8846 11.7228 15.8879 11.882L15.9429 12.781C15.9799 13.331 15.5859 13.615 15.0729 13.413L14.2379 13.083C14.0826 13.0373 13.9173 13.0373 13.7619 13.083L12.9279 13.413C12.4139 13.615 12.0199 13.331 12.0569 12.78L12.1119 11.882C12.1153 11.7228 12.0633 11.5673 11.9649 11.442L11.3969 10.745C11.0389 10.324 11.1949 9.85601 11.7269 9.71901L12.5969 9.49901C12.7503 9.44871 12.8826 9.34879 12.9729 9.21501L13.4589 8.46301C13.7619 7.99601 14.2389 7.99601 14.5409 8.46301L15.0269 9.21501C15.1173 9.34879 15.2496 9.44871 15.4029 9.49901L16.2729 9.71901C16.8049 9.85601 16.9609 10.324 16.6029 10.746V10.745Z" fill="#0E1226"/>
</g>
</g>
<defs>
<clipPath id="clip0_415_1111">
<rect width="28" height="28" fill="white"/>
</clipPath>
<clipPath id="clip1_415_1111">
<rect width="28" height="28" fill="white"/>
</clipPath>
</defs>
</svg></div>
                )}
              </div>
            </div>

            {/* Plan name and description */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold mb-2 ${
                isCardActive(plan.name)
                  ? "text-white" 
                  : "text-gray-900"
              }`}>{plan.name}</h3>
              <p className={`text-sm leading-relaxed ${
                isCardActive(plan.name)
                  ? "text-white" 
                  : "text-gray-600"
              }`}>{plan.description}</p>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline">
                <span className={`text-4xl font-semibold ${
                  isCardActive(plan.name)
                    ? "text-white" 
                    : "text-gray-900"
                }`}>{plan.price}</span>
                <span className={`text-sm ml-1 ${
                  isCardActive(plan.name)
                    ? "text-white" 
                    : "text-gray-500"
                }`}>{plan.period}</span>
              </div>
            </div>

            {/* Join button */}
            <div className="mb-8 flex justify-center">
              {isCardActive(plan.name) ? (
                <button className="w-56 py-2 px-8 rounded-xl font-medium text-sm transition-all duration-300 bg-white text-orange-500 border border-transparent">
                  {plan.buttonText}
                </button>
              ) : (
                <button className="w-56 py-2 px-8 rounded-xl font-medium text-sm transition-all duration-300 bg-orange-500 text-white border border-orange-500">
                  {plan.buttonText}
                </button>
              )}
            </div>

            {/* Features */}
            <div className="space-y-4">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start gap-3">
                  <div className={`w-8 h-8 border-2 rounded-full flex items-center justify-center ${
                    isCardActive(plan.name)
                      ? "border-white"
                      : "border-black"
                  }`}>
                    <Check className={`w-5 h-5 ${
                      isCardActive(plan.name)
                        ? "text-white"
                        : "text-black"
                    }`} />
                  </div>
                  <span className={`text-sm leading-relaxed ${
                    isCardActive(plan.name)
                      ? "text-white"
                      : "text-gray-600"
                  }`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;