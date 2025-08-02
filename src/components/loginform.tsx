import React, { useState } from "react";
import { Eye, EyeOff, LogIn,User,Mail,Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import travelImage from "../assets/dde17cfab99d455d9c7d79999fe81c9435521f36.png"; // Ensure correct path

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto rounded-none lg:rounded-2xl shadow-none lg:shadow-2xl overflow-hidden bg-white min-h-screen lg:min-h-0">
      {/* Left Column - Login Form */}
      <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-sky-200 via-white to-white flex flex-col justify-center">
        {/* Logo Icon */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="p-2 bg-white rounded-xl shadow-lg">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-login-orange rounded-xl flex items-center justify-center">
              <LogIn className="w-5 h-5 sm:w-7 sm:h-7 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-semibold font-poppins text-[#12223B] mb-2">
            Sign in with email
          </h1>
          <p className="text-[#4D4D4D] font-barlow text-sm px-4 sm:px-0">
            Sign in to stay connected and get the most out of our services.
          </p>
        </div>

        {/* Form */}
        <div className="w-full p-6 space-y-4">

      {/* Email Field */}
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
          <Mail className="w-5 h-5" />
        </div>
        <Input
          type="email"
          placeholder="Email"
          className="pl-12 bg-[#EEF3F5] border-0 rounded-xl h-12 text-base placeholder:text-muted-foreground"
        />
      </div>

      

      {/* Password Field */}
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
          <Lock className="w-5 h-5" />
        </div>
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="pl-12 pr-12 bg-[#EEF3F5] border-0 rounded-xl h-12 text-base placeholder:text-muted-foreground"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
        >
          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      </div>

      
          {/* Forgot Password */}
          <div className="text-right">
            <a href="/forgotpassword" className="text-login-text-muted text-xs sm:text-sm hover:text-login-orange">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-500-hover text-white py-2.5 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base mt-4 sm:mt-6"
          >
            Get Started
          </Button>

          {/* Register Link */}
          <div className="text-center pt-3 sm:pt-4">
            <span className="text-login-text-muted text-xs sm:text-sm">
              Don't have any account?{" "}
              <a href="/register" className="text-orange-500 hover:underline font-medium">
                Register
              </a>
            </span>
          </div>
    </div>

      </div>

      {/* Right Column - Image */}
      <div className="w-full lg:w-1/2 relative min-h-64 lg:min-h-0">
        <img
          src={travelImage}
          alt="Login Visual"
          className="w-full h-full object-cover"
        />
        {/* Optional text overlay can go here if needed */}
      </div>
    </div>
  );
};

export default LoginForm;