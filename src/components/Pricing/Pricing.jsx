import React from 'react';
import './Pricing.css';

const WHATSAPP_BASIC = 'https://wa.me/923311322505?text=Hi!%20I%27m%20interested%20in%20the%20Core%20Masterclass%20($97).%20Can%20you%20tell%20me%20more%3F';
const WHATSAPP_ELITE = 'https://wa.me/923311322505?text=Hi!%20I%27m%20interested%20in%20the%20Lifetime%20Mentorship%20($197).%20Can%20you%20tell%20me%20more%3F';

const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <span className="badge-icon" style={{display: 'inline-flex', marginBottom: '1rem'}}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-neon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          </span>
          <h2 className="section-title">Invest in Your Future</h2>
          <p className="pricing-desc">
            Affordable one-time investment. Lifetime access. No monthly fees, no hidden charges.
          </p>
        </div>
        
        <div className="pricing-grid">
          
          {/* Tier 1 */}
          <div className="pricing-card">
            <h3 className="tier-name">Core Masterclass</h3>
            <div className="price">
              <span className="price-original">$497</span>
              <div className="price-current">
                <span className="currency">$</span>97
              </div>
              <span className="price-period">one-time · lifetime access</span>
            </div>
            <p className="tier-desc">Everything you need to build a profitable foundation in Forex & Gold trading.</p>
            
            <ul className="tier-features">
              <li><span className="check">✓</span> 50+ HD Video Lessons</li>
              <li><span className="check">✓</span> Trade Journal Template</li>
              <li><span className="check">✓</span> Price Action & SMC Strategies</li>
              <li><span className="check">✓</span> Risk Management Module</li>
              <li><span className="check">✓</span> Lifetime Course Updates</li>
              <li className="disabled"><span className="cross">✕</span> Private Community Access</li>
              <li className="disabled"><span className="cross">✕</span> Weekly Live Q&A</li>
              <li className="disabled"><span className="cross">✕</span> 1-on-1 Trade Reviews</li>
            </ul>
            
            <a href={WHATSAPP_BASIC} target="_blank" rel="noopener noreferrer" className="btn-dark w-100 pricing-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Get Started on WhatsApp
            </a>
          </div>
          
          {/* Tier 2 */}
          <div className="pricing-card premium-tier">
            <div className="most-popular">Most Popular</div>
            <h3 className="tier-name">Lifetime Mentorship</h3>
            <div className="price">
              <span className="price-original">$997</span>
              <div className="price-current">
                <span className="currency">$</span>197
              </div>
              <span className="price-period">one-time · lifetime access</span>
            </div>
            <p className="tier-desc">The complete package for serious traders who want direct guidance and community support.</p>
            
            <ul className="tier-features">
              <li><span className="check" style={{color: 'var(--accent-neon)'}}>✓</span> Everything in Core Masterclass</li>
              <li><span className="check" style={{color: 'var(--accent-neon)'}}>✓</span> Advanced Smart Money Concepts</li>
              <li><span className="check" style={{color: 'var(--accent-neon)'}}>✓</span> Lifetime Private Community</li>
              <li><span className="check" style={{color: 'var(--accent-neon)'}}>✓</span> Weekly Live Trading & Q&A</li>
              <li><span className="check" style={{color: 'var(--accent-neon)'}}>✓</span> 1-on-1 Trade Review Sessions</li>
              <li><span className="check" style={{color: 'var(--accent-neon)'}}>✓</span> VIP Signal Alerts</li>
              <li><span className="check" style={{color: 'var(--accent-neon)'}}>✓</span> Gold (XAU/USD) Specialist Module</li>
            </ul>
            
            <a href={WHATSAPP_ELITE} target="_blank" rel="noopener noreferrer" className="btn-neon w-100 pricing-btn" style={{marginTop: 'auto'}}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Join the Elite on WhatsApp
            </a>
          </div>
          
        </div>

        <p className="pricing-disclaimer">
          ⚠️ Risk Disclaimer: Trading involves substantial risk of loss and is not suitable for everyone. Results shown are not guaranteed. Only invest what you can afford to lose.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
