import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image glass-panel animate-fade-in-up">
            <img src="/trader_portrait.png" alt="Massab - Professional Trader" />
          </div>
          
          <div className="about-content animate-fade-in-up">
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Meet <span className="text-gradient">Massab</span>
            </h2>
            <p className="about-description">
              With over a decade of experience navigating volatile markets, Massab has developed a proprietary approach to trading that focuses on high-probability setups and stringent risk management.
            </p>
            <p className="about-description">
              Our mission is to empower retail traders with institutional-level strategies, cutting through the noise to deliver consistent, actionable insights that drive real results.
            </p>
            
            <ul className="about-highlights">
              <li>
                <span className="highlight-icon">✓</span>
                Proprietary Price Action Strategies
              </li>
              <li>
                <span className="highlight-icon">✓</span>
                Advanced Risk Management Frameworks
              </li>
              <li>
                <span className="highlight-icon">✓</span>
                Live Market Analysis & Execution
              </li>
            </ul>
            
            <a href="#services" className="btn-primary mt-4">Discover My Strategies</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
