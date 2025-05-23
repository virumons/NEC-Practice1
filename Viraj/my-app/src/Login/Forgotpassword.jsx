import React, { useState, useEffect } from "react";
import { Mail, Timer, KeyRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Forgotpassword = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(120);
  const [otpSent, setOtpSent] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    let interval;
    if (step === 2 && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const handleSendOtp = () => {
    // TODO: Replace with actual API call
    console.log("Send OTP to", email);
    setOtpSent(true);
    setTimer(120);
    setStep(2);
  };

  const handleVerifyOtp = () => {
    // TODO: Replace with actual OTP verification
    if (otp === "123456") {
      setStep(3);
    } else {
      alert("Invalid OTP");
    }
  };

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // TODO: API call to reset password
    console.log("Password changed for", email);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md space-y-6">
        {step === 1 && (
          <>
            <h1 className="text-2xl font-bold text-center mb-4">Forgot Password</h1>
            <label className="block mb-2 font-medium">Enter your email</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Mail className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              onClick={handleSendOtp}
              className="w-full mt-4 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h1 className="text-xl font-semibold text-center mb-4">Enter OTP sent to <span className="text-blue-600">{email}</span></h1>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <KeyRound className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="text"
                maxLength={6}
                placeholder="6-digit OTP"
                className="w-full outline-none"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
              <div className="flex items-center">
                <Timer className="w-4 h-4 mr-1" />
                {timer > 0 ? (
                  <span>{Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")} remaining</span>
                ) : (
                  <span className="text-red-600">OTP expired</span>
                )}
              </div>
              <button
                disabled={timer > 0}
                onClick={handleSendOtp}
                className={`text-blue-600 hover:underline ${timer > 0 ? "cursor-not-allowed opacity-50" : ""}`}
              >
                Resend OTP
              </button>
            </div>
            <button
              onClick={handleVerifyOtp}
              className="w-full mt-4 bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
            >
              Verify OTP
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h1 className="text-xl font-bold text-center text-blue-600 mb-2">{email}</h1>
            <label className="block font-medium mb-1">New Password</label>
            <input
              type="password"
              className="w-full border rounded-lg px-3 py-2 mb-3 outline-none"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
            />
            <label className="block font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              className="w-full border rounded-lg px-3 py-2 outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter new password"
            />
            <button
              onClick={handleResetPassword}
              className="w-full mt-4 bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition"
            >
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Forgotpassword;
