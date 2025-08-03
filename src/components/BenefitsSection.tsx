"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/assets/Container.png";

const BenefitsSection = () => {
  

  return (
    <div className="w-full">
     


      {/* Why Choose SoarFare */}
      <section className="bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-12  sm:ml-36">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-4 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <p className="text-[#85C1E9] font-poppins font-medium mb-2">
              Why Choose SoarFare
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold text-[#474747] mb-4 leading-tight px-2 sm:px-0">
              We Recommend Beautiful Destinations
            </h2>
            <p className="text-[#474747] font-barlow mb-4 sm:mb-6 leading-relaxed text-sm max-w-lg mx-auto lg:mx-0">
              Experiencing the world doesn’t have to wait for the perfect
              moment—or the perfect budget. SoarFare helps real people plan real
              trips: with flexible subscriptions, rewards, and support every
              step of the way! Join a community of travelers who are getting
              there, together.
            </p>

            <div className="space-y-3 text-left max-w-md mx-auto lg:mx-0">
              {/* Point 1 */}
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="bg-white rounded-full p-1 mt-1 flex-shrink-0 border border-black">
                  <svg
                    className="w-3 h-3 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold font-poppins text-[#474747] mb-1 text-sm">
                    Travel on Your Terms
                  </h4>
                  <p className="text-[#474747] font-barlow text-xs leading-relaxed">
                    Whether you're planning a quick weekend getaway or a long
                    adventure.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="bg-white rounded-full p-1 mt-1 flex-shrink-0 border border-black">
                  <svg
                    className="w-3 h-3 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold font-poppins text-[#474747] mb-1 text-sm">
                    Flexible Solutions
                  </h4>
                  <p className="text-[#474747] font-barlow text-xs leading-relaxed">
                    Sign up in minutes, track your progress.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Card */}
          <div className="relative order-first lg:order-last">
  <div
  className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-[4/3] sm:aspect-[3/2] lg:aspect-[1/1] bg-cover bg-center bg-no-repeat flex flex-col rounded-2xl overflow-hidden mx-auto"
  style={{ backgroundImage: `url(${Container})` }}
>
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>
        </div>
    </div>
      </section>
    </div>
  );
};

export default BenefitsSection;
