import React from "react";
import "./RoleSelection.css";
import { FaUsers, FaUserShield } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function RoleSelection() {
    const navigate = useNavigate()
  return (
    <div className="role-wrapper">
      <div className="logo-box">
        <GiChefToque size={60} color="white" />
      </div>

      <h1 className="title">Welcome to FoodNova</h1>
      <p className="subtitle">Select your role to continue</p>

      <div className="role-container">

        {/* Customer */}
        <div className="role-card">
          <div className="icon-circle blue">
            <FaUsers size={40} />
          </div>
          <h2>Customer</h2>
          <p>Browse menu, order food, and make reservations</p>
          <button className="btn2 blue-btn" onClick={()=> navigate('/home')}>Continue as Customer</button>
        </div>

        {/* Manager */}
        <div className="role-card">
          <div className="icon-circle purple">
            <GiChefToque size={40} />
          </div>
          <h2>Manager</h2>
          <p>Manage orders, reservations, menu, and tables</p>
          <button className="btn2 purple-btn">Continue as Manager</button>
        </div>

        {/* Admin */}
        <div className="role-card">
          <div className="icon-circle red">
            <FaUserShield size={40} />
          </div>
          <h2>Admin</h2>
          <p>Manage staff, users, categories, and analytics</p>
          <button className="btn2 red-btn">Continue as Admin</button>
        </div>

      </div>
    </div>
  );
}

export default RoleSelection;
