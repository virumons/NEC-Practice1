import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    fullName: "",
    email: "",
    enteredCode: "",
    password: "",
    confirmPassword: "",
    category: "",
  });

  const [emailVerified, setEmailVerified] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simulate sending verification code
  const sendVerificationCode = () => {
    if (formData.email) {
      const code = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit code
      setGeneratedCode(code.toString());
      setCodeSent(true);
      alert(`Verification code sent to ${formData.email}: ${code}`);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  // Validate verification code
  const verifyCode = () => {
    if (formData.enteredCode === generatedCode) {
      setEmailVerified(true);
      alert("Email successfully verified!");
    } else {
      alert("Invalid verification code. Please try again.");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailVerified) {
      alert("Please verify your email before registering.");
      return;
    }
    console.log("Registration Data:", formData);
  };

  return (
    <div className="register-page">
      <div className="register-container">
        {/* Left Section - Form */}
        <div className="form-section">
          <h1>Create Account</h1>
          <p>Clarity gives you the blocks and components you need to create a truly professional website.</p>
          <form onSubmit={handleSubmit} className="formsec">
            <input
              type="text"
              name="businessName"
              placeholder="Business name"
              value={formData.businessName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="fullName"
              placeholder="Full-name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={emailVerified}
            />
            {!emailVerified && (
              <p className="verify-link" onClick={sendVerificationCode}>
                <a href="#">Verify Email</a>
              </p>
            )}

            {/* Verification Code Input */}
            {codeSent && !emailVerified && (
              <>
                <input
                  type="text"
                  name="enteredCode"
                  placeholder="Enter verification code"
                  value={formData.enteredCode}
                  onChange={handleChange}
                  required
                />
              </>
            )}

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            
            <button type="submit"><a href="/login">Sign-up</a></button>
          </form>
        </div>

        {/* Right Section - Info */}
        <div className="info-section">
          <h2 className="hi">Hello Friend!</h2>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>Buy with your price tag, bargain with sellers like on road.</p>
            <div>
              <button className="button1 button3"><a href="/login">Sign-in</a></button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Register;