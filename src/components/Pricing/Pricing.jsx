import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <span className="badge-icon" style={{display: 'inline-flex', marginBottom: '1rem'}}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-neon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          </span>
          <h2 className="section-title">Invest in your future</h2>
          <p className="pricing-desc">
            Choose the tier that fits your goals. One-time payment, lifetime access.
          </p>
        </div>
        
        <div className="pricing-grid">
          
          {/* Tier 1 */}
          <div className="pricing-card">
            <h3 className="tier-name">Core Masterclass</h3>
            <div className="price">
              <span className="currency">$</span>497
            </div>
            <p className="tier-desc">Everything you need to build a profitable foundation.</p>
            
            <ul className="tier-features">
              <li><span className="check">✓</span> 50+ HD Video Lessons</li>
              <li><span className="check">✓</span> Trade Notion Journal</li>
              <li><span className="check">✓</span> Basic Price Action Strategies</li>
              <li><span className="check">✓</span> Lifetime Course Updates</li>
              <li className="disabled"><span className="cross">✕</span> Private Discord Access</li>
              <li className="disabled"><span className="cross">✕</span> Weekly Live Q&A</li>
            </ul>
            
            <button className="btn-dark w-100">Enroll Basic</button>
          </div>
          
          {/* Tier 2 */}
          <div className="pricing-card premium-tier">
            <div className="most-popular">Most Popular</div>
            <h3 className="tier-name">Lifetime Mentorship</h3>
            <div className="price">
              <span className="currency">$</span>997
            </div>
            <p className="tier-desc">The ultimate package for serious traders wanting direct guidance.</p>
            
            <ul className="tier-features">
              <li><span className="check" style={{color: 'var(--accent-neon)'}}>✓</span> Everything in Core Masterclass</li>
              <li><span className="check" style={{color: 'var(--accent-neon)'}}>✓</span> Advanced Smart Money Concepts</li>
              <li><span className="check" style={{color: 'var(--accent-neon)'}}>✓</span> Lifetime VIP Discord Access</li>
              <li><span className="check" style={{color: 'var(--accent-neon)'}}>✓</span> Weekly Live Trading & Q&A</li>
              <li><span className="check" style={{color: 'var(--accent-neon)'}}>✓</span> 1-on-1 Portfolio Review</li>
            </ul>
            
            <button className="btn-neon w-100" style={{marginTop: 'auto'}}>Join the Elite</button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Pricing;
