import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import travelImage from "../assets/register.png"; // Ensure correct path
import { Mail, User, Lock, Eye, EyeOff } from "lucide-react";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto rounded-none lg:rounded-2xl shadow-none lg:shadow-2xl overflow-hidden bg-white min-h-screen lg:min-h-0">
      {/* Left Column - Register Form */}
      <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-sky-200 via-white to-white flex flex-col justify-center">
        {/* Logo Icon */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="p-2 bg-white rounded-xl shadow-lg">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-login-orange rounded-xl flex items-center justify-center">
              <svg width="45" height="46" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.3342 30.2778C33.6241 30.2778 38.7231 25.1788 38.7231 18.8889C38.7231 12.599 33.6241 7.5 27.3342 7.5C21.0443 7.5 15.9453 12.599 15.9453 18.8889C15.9453 25.1788 21.0443 30.2778 27.3342 30.2778Z" stroke="#F27709" stroke-width="4.55556" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M45.5538 48.5005C45.5538 43.6677 43.634 39.0328 40.2167 35.6155C36.7993 32.1982 32.1644 30.2783 27.3316 30.2783C22.4988 30.2783 17.8639 32.1982 14.4465 35.6155C11.0292 39.0328 9.10938 43.6677 9.10938 48.5005" stroke="#F27709" stroke-width="4.55556" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-semibold font-poppin text-login-text mb-2">
            Register
          </h1>
          <p className="text-login-text-muted font-barlow text-sm px-4 sm:px-0">
            Join us Today and enjoy a seamless<br className="hidden sm:block" /> experience with your new account.
          </p>
        </div>

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

      {/* Full Name Field */}
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
          <User className="w-5 h-5" />
        </div>
        <Input
          type="text"
          placeholder="Full Name"
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

      {/* Confirm Password Field */}
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
          <Lock className="w-5 h-5" />
        </div>
        <Input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm Password"
          className="pl-12 pr-12 bg-[#EEF3F5] border-0 rounded-xl rounded-xl h-12 text-base placeholder:text-muted-foreground"
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
        >
          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      </div>
    </div>









          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-500-hover text-white py-2.5 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base mt-4 sm:mt-6"
          >
            Get Started
          </Button>

          {/* Sign In Link */}
          <div className="text-center pt-3 sm:pt-4">
            <span className="text-login-text-muted text-xs sm:text-sm">
              Already have an Account?{" "}
              <a href="/login" className="text-orange-500 hover:underline font-medium">
                Sign In
              </a>
            </span>
          </div>
        </div>
      

      {/* Right Column - Image */}
     <div className="w-full lg:w-1/2 relative min-h-64 lg:min-h-0">
  <img
    src={travelImage}
    alt="Register Visual"
    className="w-full h-full object-cover"
  />
  
  {/* Bottom-left aligned text overlay */}
  <div className="absolute bottom-4 left-4 text-white text-left">
    <h2 className="text-5xl font-poppin font-light">Adventure Awaits<br/> Let’s Get You<br/> Started</h2>
    
  </div>
</div>

    </div>
  );
};

export default RegisterForm;