import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-neon">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="nav-logo">
              <span className="logo-text" style={{color: 'white'}}>TradeWith</span><span className="logo-dot">.</span><span className="logo-club">MASSAB</span>
            </div>
            <p className="footer-tagline">
              Master the markets with our comprehensive trading masterclass and community.
            </p>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Programs</h4>
              <ul>
                <li><a href="#pricing">Core Masterclass</a></li>
                <li><a href="#pricing">Lifetime Mentorship</a></li>
                <li><a href="#community">Private Discord</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Massab</a></li>
                <li><a href="#">Contact Support</a></li>
                <li><a href="#">Success Stories</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="#articles">Trading Articles</a></li>
                <li><a href="#">Free Training</a></li>
                <li><a href="#">YouTube Channel</a></li>
                <li><a href="#">Student Login</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} TradeWithMassab. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
