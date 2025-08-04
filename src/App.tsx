import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchFlights from "./pages/searchFlights";
import Subscriptions from "./pages/Subscriptions";
import FaqPage from "./pages/FaqPage";
import Support from "./pages/Support";
import BlogMainPage from "./pages/BlogMainPage";
import Footer from "./components/footer";
import Footer2 from "./components/footer2";
import ForgotPassword from "./pages/forgotpassword";

const queryClient = new QueryClient();

const FooterSwitcher = () => {
  const location = useLocation();
  const path = location.pathname;

  return path === "/faq" ? <Footer2 /> : <Footer />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/searchflights" element={<SearchFlights />} />
          <Route path="/subscription" element={<Subscriptions />} />
          <Route path="/blog" element={<BlogMainPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>

        {/* Conditionally render footer */}
        <FooterSwitcher />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
