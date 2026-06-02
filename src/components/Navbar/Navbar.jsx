import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        
        <div className="nav-logo">
          <span className="logo-text" style={{color: 'white'}}>TradeWith</span><span className="logo-dot">.</span><span className="logo-club">MASSAB</span>
        </div>
        
        <div className="nav-links-center">
          <a href="#curriculum">Curriculum</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#community">Community</a>
        </div>
        
        <div className="nav-actions">
          <button className="btn-dark">Student Login</button>
          <button className="btn-neon">Enroll Now</button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
