import { useState } from "react";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer";
import travelImage from "../assets/image 26.png";
import LoginForm from "@/components/loginform";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 via-white to-white">
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-[#081C3A]">
        <Navigation />
      </div>

      {/* Main Content */}
<div className="flex min-h-screen items-center justify-center pt-20">
  {/* Left Side - Login Form */}
  <div className="w-3/4 flex items-center justify-center p-8">
    <LoginForm />
  </div>
</div>


      
    </div>
  );
};

export default Login;
