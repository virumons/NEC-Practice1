import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      {/* Left Section */}
      <div className="left">
        <h1>Welcome to our <span className="highlight">community!</span></h1>
        <div className="stars">⭐⭐⭐⭐⭐</div>
        <blockquote>
          "Good platform support bargain system and available with all kinds of products."
        </blockquote>
        <div>
        <button className="button1 button3"><a href='./Register' className="hi">Sign Up</a></button>          
        </div> 
      </div>

      {/* Right Section */}
      <div className="right">
        <h1 className="H2">Sign in</h1>
        <p>Clarity gives you the blocks and components you need to create a truly professional website.</p>
        <div className="login-box">
          <div className="inputtag"> 
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
          </div>
          
          <div className="remember">
            <label><input type="checkbox"/>Remember me</label>
          </div>
          <a href="#" className="forgotpass">Forgot password?</a>

          <div className="button2">
            <button className="hi"><a href="./home">Sign in</a></button>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default Login;