import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock,EyeOff,Eye } from 'lucide-react';

const ForgotPasswordForm = () => {
  const [digits, setDigits] = useState(['', '', '', '']);
  
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState(1); // 1 for verification code, 2 for password reset
  const inputRefs = useRef([]);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const handleChange = (index, value) => {
    if (value && !/^\d$/.test(value)) return;

    const newDigits = [...digits];
    newDigits[index] = value;
    setDigits(newDigits);

    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain').slice(0, 3);
    const newDigits = [...digits];
    
    for (let i = 0; i < pasteData.length && i < 4; i++) {
      if (/^\d$/.test(pasteData[i])) {
        newDigits[i] = pasteData[i];
        if (i < 2) {
          inputRefs.current[i + 1].focus();
        }
      }
    }
    
    setDigits(newDigits);
  };

  const handleVerify = () => {
    // Here you would typically verify the code with your backend
    // For demo purposes, we'll just check if all digits are filled
    if (digits.every(digit => digit !== '')) {
      setStep(2);
    }
  };

  const handleResetPassword = () => {
    // Handle password reset logic here
    console.log("Password reset submitted");
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-transparent">
      <div className="w-full max-w-md p-6 sm:p-8 bg-gradient-to-b from-sky-200 via-white to-white rounded-2xl shadow-2xl">
        

        {step === 1 ? (
          <>
            {/* Verification Code Step */}
            {/* Logo Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-2 bg-white rounded-xl shadow-lg">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-login-orange rounded-xl flex items-center justify-center">
              <svg width="75" height="40" viewBox="0 0 75 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M64.8641 3.66699H10.4641C6.70853 3.66699 3.66406 6.1543 3.66406 9.22255V31.4448C3.66406 34.513 6.70853 37.0003 10.4641 37.0003H64.8641C68.6196 37.0003 71.6641 34.513 71.6641 31.4448V9.22255C71.6641 6.1543 68.6196 3.66699 64.8641 3.66699Z" stroke="#F27709" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.1846 14.6875C19.4596 14.6875 20.4361 15.8223 20.2461 17.083L20.2402 17.124C20.2346 17.1617 20.2411 17.1777 20.2451 17.1855C20.2518 17.1985 20.2675 17.2171 20.2939 17.2324C20.3204 17.2477 20.3457 17.2527 20.3633 17.252C20.3753 17.2514 20.3954 17.2488 20.4268 17.2246C21.4177 16.4578 22.8683 16.7414 23.4873 17.8418L23.5117 17.8838C24.1198 18.9648 23.6183 20.3337 22.4561 20.7666C22.4393 20.7729 22.4315 20.7788 22.4297 20.7803C22.4279 20.7817 22.4268 20.7827 22.4258 20.7842C22.423 20.7885 22.417 20.8021 22.417 20.8232C22.4171 20.8442 22.4228 20.8578 22.4258 20.8623C22.4269 20.864 22.4286 20.8655 22.4307 20.8672C22.433 20.869 22.4404 20.874 22.4561 20.8799C23.6173 21.3122 24.1201 22.6793 23.5137 23.7607L23.4668 23.8447C22.8467 24.9502 21.3855 25.2394 20.3906 24.4541C20.3636 24.4328 20.3499 24.4337 20.3457 24.4336C20.3351 24.4333 20.3138 24.4359 20.2881 24.4512C20.2619 24.4668 20.2442 24.4876 20.2354 24.5049C20.2291 24.5173 20.2221 24.5366 20.2275 24.5742C20.407 25.8144 19.4497 26.9589 18.1729 26.959C16.9081 26.959 15.9494 25.8363 16.1113 24.6006C16.1165 24.5609 16.1085 24.5404 16.1016 24.5273C16.0921 24.5094 16.0734 24.4885 16.0459 24.4727C16.0187 24.457 15.9955 24.4535 15.9824 24.4541C15.9756 24.4544 15.9595 24.4552 15.9307 24.4785C14.9345 25.2823 13.4556 24.9993 12.8262 23.8848L12.7314 23.7188C12.1224 22.6399 12.6356 21.2834 13.7793 20.8545C13.7933 20.8492 13.7987 20.8446 13.7998 20.8438C13.8009 20.8429 13.802 20.8428 13.8027 20.8418C13.805 20.8384 13.8105 20.8267 13.8105 20.8086C13.8106 20.7965 13.8069 20.7893 13.8057 20.7861C13.803 20.7848 13.799 20.7824 13.793 20.7803C12.6325 20.3621 12.125 19.0016 12.7285 17.9258L12.7793 17.8359C13.4058 16.7195 14.875 16.4422 15.873 17.21C15.908 17.2368 15.933 17.2415 15.9512 17.2422C15.975 17.243 16.008 17.2365 16.042 17.2168C16.076 17.1971 16.0979 17.171 16.1094 17.1494C16.1181 17.1328 16.127 17.1084 16.1211 17.0645C15.9511 15.8237 16.9098 14.6877 18.1846 14.6875Z" fill="#F27709" stroke="#F27709" stroke-width="1.95907"/>
<path d="M31.6533 14.6875C32.9283 14.6875 33.9048 15.8223 33.7148 17.083L33.709 17.124C33.7033 17.1617 33.7098 17.1777 33.7139 17.1855C33.7205 17.1985 33.7363 17.2171 33.7627 17.2324C33.7891 17.2477 33.8144 17.2527 33.832 17.252C33.8441 17.2514 33.8642 17.2488 33.8955 17.2246C34.8865 16.4578 36.3371 16.7414 36.9561 17.8418L36.9805 17.8838C37.5885 18.9648 37.087 20.3337 35.9248 20.7666C35.908 20.7729 35.9002 20.7788 35.8984 20.7803C35.8967 20.7817 35.8955 20.7827 35.8945 20.7842C35.8917 20.7885 35.8857 20.8021 35.8857 20.8232C35.8858 20.8442 35.8916 20.8578 35.8945 20.8623C35.8956 20.864 35.8973 20.8655 35.8994 20.8672C35.9018 20.869 35.9091 20.874 35.9248 20.8799C37.0861 21.3122 37.5889 22.6793 36.9824 23.7607L36.9355 23.8447C36.3154 24.9502 34.8543 25.2394 33.8594 24.4541C33.8324 24.4328 33.8187 24.4337 33.8145 24.4336C33.8038 24.4333 33.7826 24.4359 33.7568 24.4512C33.7306 24.4668 33.7129 24.4876 33.7041 24.5049C33.6978 24.5173 33.6908 24.5366 33.6963 24.5742C33.8758 25.8144 32.9185 26.9589 31.6416 26.959C30.3769 26.959 29.4182 25.8363 29.5801 24.6006C29.5852 24.5609 29.5772 24.5404 29.5703 24.5273C29.5608 24.5094 29.5422 24.4885 29.5146 24.4727C29.4874 24.457 29.4642 24.4535 29.4512 24.4541C29.4443 24.4544 29.4283 24.4552 29.3994 24.4785C28.4033 25.2823 26.9243 24.9993 26.2949 23.8848L26.2002 23.7188C25.5911 22.6399 26.1043 21.2834 27.248 20.8545C27.2621 20.8492 27.2675 20.8446 27.2686 20.8438C27.2696 20.8429 27.2708 20.8428 27.2715 20.8418C27.2737 20.8384 27.2792 20.8267 27.2793 20.8086C27.2793 20.7965 27.2757 20.7893 27.2744 20.7861C27.2718 20.7848 27.2677 20.7824 27.2617 20.7803C26.1013 20.3621 25.5938 19.0016 26.1973 17.9258L26.248 17.8359C26.8745 16.7195 28.3437 16.4422 29.3418 17.21C29.3768 17.2368 29.4018 17.2415 29.4199 17.2422C29.4438 17.243 29.4767 17.2365 29.5107 17.2168C29.5447 17.1971 29.5667 17.171 29.5781 17.1494C29.5868 17.1328 29.5958 17.1084 29.5898 17.0645C29.4199 15.8237 30.3785 14.6877 31.6533 14.6875Z" fill="#F27709" stroke="#F27709" stroke-width="1.95907"/>
<path d="M45.1221 14.6875C46.3971 14.6875 47.3736 15.8223 47.1836 17.083L47.1777 17.124C47.1721 17.1617 47.1786 17.1777 47.1826 17.1855C47.1893 17.1985 47.205 17.2171 47.2314 17.2324C47.2579 17.2477 47.2832 17.2527 47.3008 17.252C47.3128 17.2514 47.3329 17.2488 47.3643 17.2246C48.3552 16.4578 49.8058 16.7414 50.4248 17.8418L50.4492 17.8838C51.0573 18.9648 50.5558 20.3337 49.3936 20.7666C49.3768 20.7729 49.369 20.7788 49.3672 20.7803C49.3654 20.7817 49.3643 20.7827 49.3633 20.7842C49.3605 20.7885 49.3545 20.8021 49.3545 20.8232C49.3546 20.8442 49.3603 20.8578 49.3633 20.8623C49.3644 20.864 49.3661 20.8655 49.3682 20.8672C49.3705 20.869 49.3779 20.874 49.3936 20.8799C50.5548 21.3122 51.0576 22.6793 50.4512 23.7607L50.4043 23.8447C49.7842 24.9502 48.323 25.2394 47.3281 24.4541C47.3011 24.4328 47.2874 24.4337 47.2832 24.4336C47.2726 24.4333 47.2513 24.4359 47.2256 24.4512C47.1994 24.4668 47.1817 24.4876 47.1729 24.5049C47.1666 24.5173 47.1596 24.5366 47.165 24.5742C47.3445 25.8144 46.3872 26.9589 45.1104 26.959C43.8456 26.959 42.8869 25.8363 43.0488 24.6006C43.054 24.5609 43.046 24.5404 43.0391 24.5273C43.0296 24.5094 43.0109 24.4885 42.9834 24.4727C42.9562 24.457 42.933 24.4535 42.9199 24.4541C42.9131 24.4544 42.897 24.4552 42.8682 24.4785C41.872 25.2823 40.3931 24.9993 39.7637 23.8848L39.6689 23.7188C39.0599 22.6399 39.5731 21.2834 40.7168 20.8545C40.7308 20.8492 40.7362 20.8446 40.7373 20.8438C40.7384 20.8429 40.7395 20.8428 40.7402 20.8418C40.7425 20.8384 40.748 20.8267 40.748 20.8086C40.7481 20.7965 40.7444 20.7893 40.7432 20.7861C40.7405 20.7848 40.7365 20.7824 40.7305 20.7803C39.57 20.3621 39.0625 19.0016 39.666 17.9258L39.7168 17.8359C40.3433 16.7195 41.8125 16.4422 42.8105 17.21C42.8455 17.2368 42.8705 17.2415 42.8887 17.2422C42.9125 17.243 42.9455 17.2365 42.9795 17.2168C43.0135 17.1971 43.0354 17.171 43.0469 17.1494C43.0556 17.1328 43.0645 17.1084 43.0586 17.0645C42.8886 15.8237 43.8473 14.6877 45.1221 14.6875Z" fill="#F27709" stroke="#F27709" stroke-width="1.95907"/>
<path d="M58.5947 14.6875C59.8697 14.6875 60.8462 15.8223 60.6562 17.083L60.6504 17.124C60.6447 17.1617 60.6513 17.1777 60.6553 17.1855C60.6619 17.1985 60.6777 17.2171 60.7041 17.2324C60.7305 17.2477 60.7558 17.2527 60.7734 17.252C60.7855 17.2514 60.8056 17.2488 60.8369 17.2246C61.8279 16.4578 63.2785 16.7414 63.8975 17.8418L63.9219 17.8838C64.5299 18.9648 64.0284 20.3337 62.8662 20.7666C62.8494 20.7729 62.8417 20.7788 62.8398 20.7803C62.8381 20.7817 62.8369 20.7827 62.8359 20.7842C62.8331 20.7885 62.8271 20.8021 62.8271 20.8232C62.8272 20.8442 62.833 20.8578 62.8359 20.8623C62.837 20.864 62.8388 20.8655 62.8408 20.8672C62.8432 20.869 62.8505 20.874 62.8662 20.8799C64.0275 21.3122 64.5303 22.6793 63.9238 23.7607L63.877 23.8447C63.2568 24.9502 61.7957 25.2394 60.8008 24.4541C60.7738 24.4328 60.7601 24.4337 60.7559 24.4336C60.7452 24.4333 60.724 24.4359 60.6982 24.4512C60.6721 24.4668 60.6543 24.4876 60.6455 24.5049C60.6392 24.5173 60.6323 24.5366 60.6377 24.5742C60.8172 25.8144 59.8599 26.9589 58.583 26.959C57.3183 26.959 56.3596 25.8363 56.5215 24.6006C56.5267 24.5609 56.5186 24.5404 56.5117 24.5273C56.5022 24.5094 56.4836 24.4885 56.4561 24.4727C56.4288 24.457 56.4056 24.4535 56.3926 24.4541C56.3857 24.4544 56.3697 24.4552 56.3408 24.4785C55.3447 25.2823 53.8657 24.9993 53.2363 23.8848L53.1416 23.7188C52.5325 22.6399 53.0457 21.2834 54.1895 20.8545C54.2035 20.8492 54.2089 20.8446 54.21 20.8438C54.211 20.8429 54.2122 20.8428 54.2129 20.8418C54.2151 20.8384 54.2206 20.8267 54.2207 20.8086C54.2207 20.7965 54.2171 20.7893 54.2158 20.7861C54.2132 20.7848 54.2091 20.7824 54.2031 20.7803C53.0427 20.3621 52.5352 19.0016 53.1387 17.9258L53.1895 17.8359C53.8159 16.7195 55.2851 16.4422 56.2832 17.21C56.3182 17.2368 56.3432 17.2415 56.3613 17.2422C56.3852 17.243 56.4182 17.2365 56.4521 17.2168C56.4861 17.1971 56.5081 17.171 56.5195 17.1494C56.5282 17.1328 56.5372 17.1084 56.5312 17.0645C56.3613 15.8237 57.3199 14.6877 58.5947 14.6875Z" fill="#F27709" stroke="#F27709" stroke-width="1.95907"/>
</svg>

            </div>
          </div>
        </div>
            <div className="text-center mb-6">
              <h1 className="text-2xl font-semibold font-poppins text-[#12223B] mb-2">
                Forgot Password
              </h1>
              <p className="text-[#4D4D4D] font-barlow text-sm">
                Enter the verification code we just sent on your email address.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-center gap-2">
                {[0, 1, 2, 3].map((index) => (
                  <Input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength={1}
                    value={digits[index]}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className={`w-12 h-12 text-center border-0 rounded-xl text-2xl font-medium ${
                      digits[index] ? 'border border-orange-500 bg-white text-orange-500' : 'bg-[#EEF3F5]'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={handleVerify}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base mt-4"
              >
                Verify
              </Button>

              <div className="text-center pt-3">
                <span className="text-login-text-muted text-xs sm:text-sm">
                  Don't receive any code?{" "}
                  <a href="#" className="text-orange-500 hover:underline font-medium">
                    Resend
                  </a>
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Password Reset Step */}
            {/* Logo Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-2 bg-white rounded-xl shadow-lg">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-login-orange rounded-xl flex items-center justify-center">
              <svg width="55" height="46" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.6645 39.3891C28.9225 39.3891 29.9423 38.3693 29.9423 37.1113C29.9423 35.8533 28.9225 34.8335 27.6645 34.8335C26.4065 34.8335 25.3867 35.8533 25.3867 37.1113C25.3867 38.3693 26.4065 39.3891 27.6645 39.3891Z" stroke="#F27709" stroke-width="4.55556" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M43.6085 23.4443H11.7196C9.20365 23.4443 7.16406 25.4839 7.16406 27.9999V46.2221C7.16406 48.7381 9.20365 50.7777 11.7196 50.7777H43.6085C46.1245 50.7777 48.1641 48.7381 48.1641 46.2221V27.9999C48.1641 25.4839 46.1245 23.4443 43.6085 23.4443Z" stroke="#F27709" stroke-width="4.55556" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.2773 23.4444V16.611C16.2775 14.1041 17.1048 11.6671 18.631 9.67825C20.1572 7.68935 22.297 6.2596 24.7185 5.61074C27.1401 4.96187 29.7081 5.13015 32.0243 6.08947C34.3405 7.04879 36.2754 8.74555 37.529 10.9166" stroke="#F27709" stroke-width="4.55556" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


            </div>
          </div>
        </div>
            <div className="text-center mb-6">
              <h1 className="text-2xl font-semibold font-poppins text-[#12223B] mb-2">
                Reset Password
              </h1>
              <p className="text-[#4D4D4D] font-barlow text-sm">
                Set a new password to regain access to your account.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-full p-6 space-y-4">

     

      

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

      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
          <Lock className="w-5 h-5" />
        </div>
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
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

      
          

          
    </div>

              <Button
                onClick={handleResetPassword}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base mt-4"
              >
                Reset Password
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordForm;