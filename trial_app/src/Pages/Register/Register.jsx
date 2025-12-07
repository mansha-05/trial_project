import React from "react";
import "./Register.css";
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div className="register-container">

      {/* Top Icon */}
      <div className="top-icon">
        <i className="fa-solid fa-utensils"></i>
      </div>

      <h1 className="title">Create Account</h1>
      <p className="subtitle">Join us for an amazing dining experience</p>

      <div className="register-card">

        <h2 className="form-title">Sign Up</h2>
        <p className="form-subtitle">Fill in your details to create a new account</p>

        <form>

          <div className="row">
            <div className="form-group">
              <label>First Name</label>
              <div className="input-box">
                <i className="fa-regular fa-user"></i>
                <input type="text" placeholder="John" />
              </div>
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <div className="input-box">
                <i className="fa-regular fa-user"></i>
                <input type="text" placeholder="Doe" />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <div className="input-box">
              <i className="fa-regular fa-envelope"></i>
              <input type="email" placeholder="john.doe@example.com" />
            </div>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <div className="input-box">
              <i className="fa-solid fa-phone"></i>
              <input type="text" placeholder="123-456-7890" />
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <label>Password</label>
              <div className="input-box">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="Enter password" />
                <i className="fa-regular fa-eye"></i>
              </div>
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <div className="input-box">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="Confirm password" />
                <i className="fa-regular fa-eye"></i>
              </div>
            </div>
          </div>

          <div className="terms">
            <input type="checkbox" />
            <span>I agree to the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a></span>
          </div>

          <button className="btn-create">Create Account</button>

          <div className="divider">
            <span>or</span>
          </div>

          <button className="btn-google">
            <i className="fa-brands fa-google"></i> Continue with Google
          </button>

          <p className="login-link">
            Already have an account? <Link to='/home/login'><span>Sign in</span></Link>
          </p>

        </form>

      </div>
    </div>
  );
};

export default Register;
