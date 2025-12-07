import React from "react";
import "./Login.css";
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className="login-container">

      <div className="login-top">
        <div className="login-icon">
          <i className="fa-solid fa-utensils"></i>
        </div>
        <h1>Welcome Back</h1>
        <p>Sign in to your account to continue</p>
      </div>

      <div className="login-card">

        <h2>Login</h2>
        <p className="subtitle">Enter your credentials to access your account</p>

        {/* Email */}
        <label>Email</label>
        <div className="input-box">
          <i className="fa-regular fa-envelope"></i>
          <input type="email" placeholder="Enter your email" />
        </div>

        {/* Password */}
        <label>Password</label>
        <div className="input-box">
          <i className="fa-solid fa-lock"></i>
          <input type="password" placeholder="Enter your password" />
          <i className="fa-regular fa-eye"></i>
        </div>

        <div className="forgot-text">Forgot Password?</div>

        {/* Login Button */}
        <button className="login-btn">Sign In</button>

        <div className="separator">or</div>

        {/* Google Login */}
        <button className="google-btn">
          <i className="fa-brands fa-google"></i> Continue with Google
        </button>

        <p className="signup-text">
          Don't have an account? <Link to='/home/register'><span>Sign up</span></Link>
        </p>
      </div>

      <footer>© 2025 Restaurant Management System. All rights reserved.</footer>

    </div>
  );
};

export default Login;
