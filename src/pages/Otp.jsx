import React, { useState } from 'react';
import logo from "../assets/Dokota_newtoo.png";
import { useNavigate } from 'react-router-dom';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";

const Otp = () => {
  const [otp, setOtp] = useState(""); // Store OTP input
  const [error, setError] = useState(""); // Store validation error
  const navigate = useNavigate(); // Initialize useNavigate

  const correctOTP = "1234"; // Temporary correct OTP

  // Handle OTP input change
  const handleChange = (value) => {
    // Allow only numbers
    if (/^\d*$/.test(value)) {
      setOtp(value);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (otp === correctOTP) {
      setError("");
      navigate("/app/dashboard"); // Redirect to dashboard if OTP is correct
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="w-64 h-25 mb-6">
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>

        {/* OTP Box */}
        <div className="flex flex-col items-center border-2 border-gray-200 bg-white rounded-lg p-8 shadow-lg">
          <div className="mb-6 text-center">
            <span className="text-sm text-gray-600 font-medium">
              Enter your 6-Digit OTP sent to your mobile number
            </span>
          </div>

          {/* OTP Input Fields */}
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <InputOTP maxLength={4} value={otp} onChange={handleChange}>
              <InputOTPGroup className="flex gap-4"> 
                {[...Array(4)].map((_, index) => (
                  <InputOTPSlot 
                    key={index} 
                    index={index} 
                    className="w-12 h-12 text-xl text-center border-2 border-gray-300 rounded-md focus:ring-2 focus:outline focus:outline-sky-500 focus:ring-rose-700 outline-none transition-all"
                    onKeyDown={(e) => !/^\d$/.test(e.key) && e.preventDefault()} // Allow only numbers
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-64 bg-rose-700 text-white py-2 rounded-md hover:bg-rose-950 cursor-pointer mt-6 transition-all"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Otp;
