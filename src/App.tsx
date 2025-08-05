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
import BlogDetailPage from "./pages/BlogDetailPage";
import ForgotPassword from "./pages/forgotpassword";
import Footer from "./components/footer";
import Footer2 from "./components/footer2";
import Dashboard from "./pages/Dashboard"; // ✅ New import

const queryClient = new QueryClient();

const FooterSwitcher = () => {
  const location = useLocation();
  const path = location.pathname;

  // ❌ No footer for /dashboard
  if (path === "/dashboard") return null;

  // ✅ Use Footer2 for /faq, Footer otherwise
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
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ New route */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Conditionally render footer */}
        <FooterSwitcher />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
