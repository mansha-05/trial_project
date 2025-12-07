import React, { useState } from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo-box">
          <i className="fa-solid fa-utensils"></i>
        </div>
        <span className="brand">Food Nova</span>
      </div>

      <div className="nav-center">
        <a href="#" className="nav-item">
            <i className="fa-solid fa-house"></i>
           Home
        </a>
        <a href="#" className="nav-item">
          🍽 Menu
        </a>
        <a href="#" className="nav-item">
            <i className="fa-regular fa-calendar"></i>
          Reserve
        </a>
        <a href="#" className="nav-item">
            <i className="fa-solid fa-box"></i>
          Orders
        </a>
      </div>

      <div className="nav-right">
        <span className="nav-icon">🛒</span>
        
        <span className="nav-icon"><Link className="text-secondary" to='/home/login'><i className="fa-regular fa-user"></i></Link></span>

        <button className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu">
          <a className="mobile-item">Home</a>
          <a className="mobile-item">Menu</a>
          <a className="mobile-item">Reserve</a>
          <a className="mobile-item">Orders</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
