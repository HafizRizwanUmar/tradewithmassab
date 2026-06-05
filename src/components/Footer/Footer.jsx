import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const WHATSAPP_URL = 'https://wa.me/923311322505?text=Hello!%20I%27m%20interested%20in%20the%20TradeWithMassab%20Masterclass.%20Can%20you%20tell%20me%20more%3F';

const WaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer-neon">

      {/* Top CTA Strip */}
      <div className="footer-cta-strip">
        <div className="container footer-cta-inner">
          <div className="footer-cta-text">
            <h3 className="footer-cta-heading">Ready to Start Trading Professionally?</h3>
            <p className="footer-cta-sub">Join 340+ traders learning institutional strategies. Message us on WhatsApp — we reply fast.</p>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-neon footer-cta-btn">
            <WaIcon />
            Message on WhatsApp
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container">
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <div className="nav-logo" style={{ marginBottom: '1rem' }}>
              <span className="logo-text" style={{color: 'white'}}>TradeWith</span>
              <span className="logo-dot">.</span>
              <span className="logo-club">MASSAB</span>
            </div>
            <p className="footer-tagline">
              Teaching everyday people to trade Forex and Gold like professional institutional traders — with real strategies, real results, and real mentorship.
            </p>
            <div className="footer-trust-badges">
              <div className="footer-badge">
                <span className="footer-badge-num">340+</span>
                <span className="footer-badge-label">Students</span>
              </div>
              <div className="footer-badge-div" />
              <div className="footer-badge">
                <span className="footer-badge-num">73%</span>
                <span className="footer-badge-label">Win Rate</span>
              </div>
              <div className="footer-badge-div" />
              <div className="footer-badge">
                <span className="footer-badge-num">2+</span>
                <span className="footer-badge-label">Yrs Teaching</span>
              </div>
            </div>
            {/* Social Icons */}
            <div className="footer-socials">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="footer-social-btn footer-social-wa" aria-label="WhatsApp">
                <WaIcon />
              </a>
              <a href="https://t.me/tradewithmassab" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Telegram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
              <a href="https://www.youtube.com/@tradewithmassab" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
              </a>
              <a href="https://www.instagram.com/tradewithmassab" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-links-grid">
            {/* Learn Column */}
            <div className="footer-col">
              <h4>Free Education</h4>
              <ul>
                <li><Link to="/articles">All Case Studies</Link></li>
                <li><Link to="/articles?cat=Strategy">SMC & Strategy</Link></li>
                <li><Link to="/articles?cat=Risk+Management">Risk Management</Link></li>
                <li><Link to="/articles?cat=Beginner">Beginner Guides</Link></li>
                <li><Link to="/articles?cat=Technical+Analysis">Technical Analysis</Link></li>
                <li><Link to="/articles?cat=Psychology">Trading Psychology</Link></li>
              </ul>
            </div>

            {/* Programs Column */}
            <div className="footer-col">
              <h4>Programs</h4>
              <ul>
                <li><a href="#pricing">Core Masterclass — $97</a></li>
                <li><a href="#pricing">Lifetime Mentorship — $197</a></li>
                <li><a href="#community">Private Community</a></li>
                <li><a href="#pricing">VIP Signal Alerts</a></li>
                <li><a href="#results">Live Results</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="footer-col">
              <h4>Get in Touch</h4>
              <p className="footer-contact-note">The only way to reach us is through WhatsApp. We reply within a few hours.</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="footer-whatsapp-cta">
                <WaIcon />
                Chat on WhatsApp
              </a>
              <div className="footer-hours">
                <span className="footer-hours-dot" />
                <span>Available: Mon – Sat, 10am – 8pm PKT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} TradeWithMassab. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#pricing">Terms of Use</a>
            <a href="#pricing">Privacy Policy</a>
            <a href="#pricing">Refund Policy</a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="footer-disclaimer">
          <strong>Risk Disclaimer:</strong> Trading Forex and Gold (XAU/USD) involves substantial risk of loss and is not suitable for all investors. Past performance is not indicative of future results. Never trade with money you cannot afford to lose. The content on this website is for educational purposes only and does not constitute financial advice.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
