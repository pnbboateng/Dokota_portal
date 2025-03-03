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

  const correctOTP = "123456"; // Temporary correct OTP

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
      navigate("/dashboard"); // Redirect to dashboard if OTP is correct
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center">
        <div className="w-64 h-25">
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>

        <div className="flex flex-col items-center border-2 border-gray-100 rounded-lg p-8">
          <div className="mb-6">
            <span className="text-sm">Enter your 6-Digit OTP sent to your mobile number</span>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <InputOTP maxLength={6} value={otp} onChange={handleChange}>
              <InputOTPGroup>
                {[...Array(6)].map((_, index) => (
                  <InputOTPSlot 
                    key={index} 
                    index={index} 
                    className="border-rose-950 focus:ring-rose-950"
                    onKeyDown={(e) => !/^\d$/.test(e.key) && e.preventDefault()} // Allow only numbers
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <button 
              type="submit" 
              className="w-64 bg-rose-700 text-white py-2 rounded-md hover:bg-rose-950 cursor-pointer mt-4"
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