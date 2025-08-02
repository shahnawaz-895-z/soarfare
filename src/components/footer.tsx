import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="relative text-primary-foreground overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-2] bg-[url('/footerimage.jpg')] bg-cover bg-center" />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[-1] bg-[#0B2444F2]" />

      {/* Content Wrapper */}
      <div className="relative z-0">
        {/* Newsletter Section */}
        <div className="border-b border-muted/20 backdrop-brightness-90">
          <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-6 sm:py-8 lg:py-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6 lg:gap-8">
              <div className="text-center lg:text-left">
                <p className="text-orange-500 font-semibold text-xs sm:text-sm mb-2 tracking-wide uppercase">NEWSLETTER</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal text-primary-foreground leading-tight">
                  Get your weekly travel guide
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:min-w-fit lg:w-auto max-w-md lg:max-w-none mx-auto lg:mx-0">
                <Input 
                  placeholder="Your email here..." 
                  className="bg-primary-foreground text-gray-900 placeholder:text-gray-500 border-0 w-full sm:min-w-[200px] md:min-w-[280px] h-10 sm:h-12 text-sm sm:text-base"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 whitespace-nowrap w-full sm:w-auto h-10 sm:h-12 text-sm sm:text-base font-medium">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-10 lg:py-12 xl:py-16 backdrop-brightness-95">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-1 xl:col-span-1 text-center sm:text-left mb-6 sm:mb-0 -mt-16">
              <div className="mb-4 sm:mb-6">
                <img 
                  src="/footer logo.png" 
                  alt="Footer Logo" 
                  className="h-24 w-auto sm:h-32 md:h-36 lg:h-40 xl:h-44 object-contain mx-auto sm:mx-0 mb-3 sm:-mb-12 sm:right-3 sm:-ml-6"

                />
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg mx-auto sm:mx-0">
                  We create flexible travel solutions that help people plan ahead, save better, and connect meaningfully with the world.
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
                {/* Facebook */}
                <div
  className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-md"
  onClick={() => window.open("https://www.facebook.com/SoarFareOfficial")}
>
  <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.00390625" width="45.9263" height="45.9263" rx="22.9631" fill="white"/>
<rect x="0.641771" y="0.637865" width="44.6505" height="44.6505" rx="22.3253" stroke="#111827" stroke-opacity="0.12" stroke-width="1.27573"/>
<path d="M24.5521 24.9558H26.8112L27.7148 21.3412H24.5521V19.5339C24.5521 19.1243 24.5701 18.8291 24.6063 18.6483C24.6786 18.3592 24.8352 18.1363 25.0762 17.9796C25.3653 17.811 25.7931 17.7266 26.3593 17.7266H27.7148V14.6904C27.51 14.6663 27.1847 14.6422 26.7389 14.6181C26.1846 14.582 25.6485 14.5639 25.1304 14.5639C24.299 14.5639 23.5671 14.7295 22.9345 15.0609C22.302 15.3922 21.817 15.8651 21.4797 16.4796C21.1182 17.1423 20.9375 17.9194 20.9375 18.811V21.3412H18.2266V24.9558H20.9375V32.6367H24.5521V24.9558Z" fill="#F27709"/>
</svg>

</div>


                {/* X (Twitter) */}
                 <div
  className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-md"
  onClick={() => window.open("https://www.facebook.com/SoarFareOfficial")}
>                  <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#F27709"/>
                  </svg>
                </div>

                {/* Instagram */}
                 <div
  className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-md"
  onClick={() => window.open("https://www.instagram.com/SoarFare/")}
>                  <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#F27709"/>
                  </svg>
                </div>

                {/* TikTok */}
                 <div
  className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-md"
  onClick={() => window.open("https://www.tiktok.com/@soarfare?_t=ZS-8yP0RdBDm4d&_r=1")}
>                  <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#F27709"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h4 className="font-semibold text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 lg:mb-6 text-primary-foreground">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="/" className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm sm:text-base lg:text-lg hover:underline">Home</a></li>
                <li><a href="/about" className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm sm:text-base lg:text-lg hover:underline">About Us</a></li>
                <li><a href="/subscription" className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm sm:text-base lg:text-lg hover:underline">Subscriptions</a></li>
                <li><a href="/faq" className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm sm:text-base lg:text-lg hover:underline">FAQs</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm sm:text-base lg:text-lg hover:underline">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Info */}
            <div className="text-center sm:text-left">
              <h4 className="font-semibold text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 lg:mb-6 text-primary-foreground">Info</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm sm:text-base lg:text-lg hover:underline">France Experience</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm sm:text-base lg:text-lg hover:underline">Ancient Rome Discover</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm sm:text-base lg:text-lg hover:underline">Get Into Naxos Island</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm sm:text-base lg:text-lg hover:underline">Vietnam Island Experience</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors text-sm sm:text-base lg:text-lg hover:underline">Travel City</a></li>
              </ul>
            </div>

            {/* Official Info */}
            <div className="sm:col-span-2 lg:col-span-1 xl:col-span-1">
              <h4 className="font-semibold text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 lg:mb-6 text-center sm:text-left text-primary-foreground">Official Info</h4>
              <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                
                {/* Location */}
                <div className="flex items-start gap-3 justify-center sm:justify-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg width="18" height="18" className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.3603 14.3018L10.9513 19.7109L5.54216 14.3018C4.5556 13.3266 3.89222 12.17 3.55202 10.8319C3.21183 9.53912 3.21183 8.24638 3.55202 6.95364C3.89222 5.61554 4.55276 4.45604 5.53365 3.47515C6.51455 2.49426 7.67405 1.82804 9.01214 1.47651C10.3049 1.14765 11.5976 1.14765 12.8904 1.47651C14.2285 1.82804 15.388 2.49426 16.3689 3.47515C17.3497 4.45604 18.0103 5.61554 18.3505 6.95364C18.6907 8.24638 18.6907 9.53912 18.3505 10.8319C18.0103 12.17 17.3469 13.3266 16.3603 14.3018ZM10.9513 10.5937C11.2574 10.5937 11.5409 10.5172 11.8017 10.3641C12.0626 10.211 12.2695 10.0041 12.4226 9.74323C12.5757 9.48242 12.6522 9.19892 12.6522 8.89275C12.6522 8.58657 12.5757 8.30308 12.4226 8.04226C12.2695 7.78145 12.0626 7.57449 11.8017 7.42141C11.5409 7.26832 11.2574 7.19178 10.9513 7.19178C10.6451 7.19178 10.3616 7.26832 10.1008 7.42141C9.83995 7.57449 9.633 7.78145 9.47991 8.04226C9.32682 8.30308 9.25028 8.58657 9.25028 8.89275C9.25028 9.19892 9.32682 9.48242 9.47991 9.74323C9.633 10.0041 9.83995 10.211 10.1008 10.3641C10.3616 10.5172 10.6451 10.5937 10.9513 10.5937Z" fill="#F27709"/>
                    </svg>
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="font-medium text-sm sm:text-base lg:text-lg text-primary-foreground">Location:</p>
                    <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">Riverton, Utah, USA</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 justify-center sm:justify-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg width="18" height="18" className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.2958 2.70687H18.6046C18.8427 2.70687 19.044 2.78908 19.2084 2.95351C19.3728 3.11794 19.455 3.31922 19.455 3.55735V17.1651C19.455 17.4033 19.3728 17.6046 19.2084 17.769C19.044 17.9334 18.8427 18.0156 18.6046 18.0156H3.2958C3.05766 18.0156 2.85638 17.9334 2.69195 17.769C2.52753 17.6046 2.44531 17.4033 2.44531 17.1651V3.55735C2.44531 3.31922 2.52753 3.11794 2.69195 2.95351C2.85638 2.78908 3.05766 2.70687 3.2958 2.70687ZM11.0012 10.0891L5.54108 5.46244L4.45246 6.75518L11.0182 12.3344L17.4649 6.75518L16.3423 5.46244L11.0012 10.0891Z" fill="#F27709"/>
                    </svg>
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="font-medium text-sm sm:text-base lg:text-lg text-primary-foreground">Email:</p>
                    <p className="text-muted-foreground text-xs sm:text-sm lg:text-base break-all">hello@example.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 justify-center sm:justify-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg width="18" height="18" className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.6056 14.3704V17.3811C18.6056 17.5966 18.5291 17.7865 18.376 17.9509C18.2229 18.1154 18.0386 18.2089 17.8232 18.2316C17.449 18.2543 17.1428 18.2656 16.9047 18.2656C15.0563 18.2656 13.2929 17.9084 11.6146 17.194C9.9817 16.5023 8.53871 15.5299 7.28566 14.2768C6.03261 13.0238 5.06022 11.5808 4.36849 9.94787C3.65408 8.26957 3.29688 6.50623 3.29688 4.65784C3.29688 4.4197 3.30821 4.11353 3.33089 3.73931C3.35357 3.52386 3.44713 3.33959 3.61156 3.1865C3.77598 3.03341 3.96592 2.95687 4.18138 2.95687H7.1921C7.3055 2.95687 7.40189 2.99372 7.48127 3.06743C7.56065 3.14114 7.60601 3.22902 7.61735 3.33108L7.66838 3.80735C7.83847 4.99803 8.17867 6.13202 8.68896 7.2093C8.73432 7.30002 8.74566 7.39074 8.72298 7.48145C8.7003 7.57217 8.64927 7.64588 8.56989 7.70258L6.73284 9.01233C7.28849 10.3164 8.07094 11.4731 9.08018 12.4823C10.0894 13.4916 11.2461 14.274 12.5502 14.8297L13.8599 12.9926C13.9166 12.9132 13.9903 12.8622 14.081 12.8395C14.1718 12.8168 14.2625 12.8282 14.3532 12.8735C15.4305 13.3838 16.5645 13.724 17.7551 13.8941L18.2314 13.9452C18.3335 13.9565 18.4214 14.0019 18.4951 14.0812C18.5688 14.1606 18.6056 14.257 18.6056 14.3704Z" fill="#F27709"/>
                    </svg>
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="font-medium text-sm sm:text-base lg:text-lg text-primary-foreground">Phone:</p>
                    <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">(+01) 1234567985</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-muted/20 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
                © 2024 Travel Company. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
                <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors text-xs sm:text-sm">Terms of Service</a>
                <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors text-xs sm:text-sm">Privacy Policy</a>
                <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors text-xs sm:text-sm">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;