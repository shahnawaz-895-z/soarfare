import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState,useEffect } from "react";


const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Subscription", href: "/subscription" },
    { label: "Search Flights", href: "/searchflights" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ's", href: "/faq" },
    { label: "Support", href: "/support" },
  ];

  const [pathname, setPathname] = useState<string>("");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-6 bg-transparent relative z-10 h-20 sm:h-22 lg:h-30">
        <div className="flex items-center gap-2">
          <img
            src="/4e8c6399e9117e16c30d8a0a2b25aa785d965b63.png"
            alt="SoarFare Logo"
            className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-base font-poppins font-medium transition-colors ${
                pathname === item.href
                  ? "text-orange-500"
                  : "text-white hover:text-primary-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="outline" asChild className="bg-transparent border-transparent text-white hover:bg-white font-poppins hover:text-primary px-6 py-2">
            <a href="/register">Register</a>
          </Button>
          <Button asChild className="bg-orange-500 font-poppins hover:bg-orange-500 px-6 py-2">
            <a href="/login">Login</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button variant="ghost" size="sm" onClick={toggleMobileMenu} className="text-white hover:bg-white/10 p-2">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#081C3A]/95 backdrop-blur-sm z-[9999]">


          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10">
              <img src="/4e8c6399e9117e16c30d8a0a2b25aa785d965b63.png" alt="SoarFare Logo" className="h-12 w-auto object-contain" />
              <Button variant="ghost" size="sm" onClick={toggleMobileMenu} className="text-white hover:bg-white/10 p-2 z-50">

                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Nav Items */}
            <div className="flex-1 px-4 sm:px-6 py-8">
              <div className="space-y-6">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`block text-lg font-medium py-2 border-b border-white/10 transition-colors ${
                      pathname === item.href
                        ? "text-orange-500"
                        : "text-white hover:text-orange-500"
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="px-4 sm:px-6 py-6 border-t border-white/10 space-y-3">
              <Button variant="outline" asChild className="w-full bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <a href="/register" onClick={toggleMobileMenu}>Register</a>
              </Button>
              <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                <a href="/login" onClick={toggleMobileMenu}>Login</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;