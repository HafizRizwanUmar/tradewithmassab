import React from 'react';
import './BentoFeatures.css';

const BentoFeatures = () => {
  return (
    <section className="bento-section" id="features">
      <div className="container">
        
        <div className="bento-grid-top">
          
          {/* Card 1 */}
          <div className="bento-card card-start-small">
            <div className="bento-graphic chart-graphic">
              <svg viewBox="0 0 100 50" className="chart-svg">
                <path d="M0,40 Q10,20 20,35 T40,25 T60,30 T80,10" fill="none" stroke="var(--accent-neon)" strokeWidth="2" />
                <circle cx="80" cy="10" r="3" fill="var(--accent-neon)" />
              </svg>
            </div>
            <div className="bento-content">
              <h3>Comprehensive Curriculum</h3>
              <p>From beginner basics to advanced price action concepts, built to scale your trading.</p>
              <button className="btn-dark btn-sm">View modules</button>
            </div>
          </div>
          
          {/* Middle Column */}
          <div className="bento-col-middle">
            {/* Card 2 */}
            <div className="bento-card">
              <div className="bento-content-row">
                <div>
                  <h3>Instant Access</h3>
                  <p>Start learning immediately upon enrollment on any device.</p>
                  <button className="btn-dark btn-sm mt-3">Start learning</button>
                </div>
                <div className="bento-icon">
                  <span style={{color: 'var(--accent-neon)', display: 'flex'}}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                  </span>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bento-card card-rules">
               <div className="bento-graphic rules-graphic">
                  <div className="rule-box rule-bg">Module 02</div>
                  <div className="rule-box rule-fg">
                    <span className="lock-icon" style={{color: 'var(--accent-neon)', display: 'flex', marginRight: '8px'}}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
                    </span>
                    <div>
                      <strong>Master Psychology</strong>
                      <div style={{fontSize: '0.65rem', color: 'var(--text-secondary)'}}>Control emotions.</div>
                    </div>
                  </div>
               </div>
               <div className="bento-content">
                 <h3>Strategies you'll actually understand</h3>
                 <p>Simple, clear, rule-based systems. No guesswork.</p>
                 <button className="btn-dark btn-sm">Learn more</button>
               </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="bento-col-right">
            {/* Card 4 */}
            <div className="bento-card">
              <div className="bento-graphic circular-graphic">
                 <div className="arc">
                   <div className="arc-text">
                     <span className="text-xl">95%</span><br/>success
                   </div>
                 </div>
              </div>
              <div className="bento-content">
                <h3>95% Student Satisfaction.</h3>
                <p>Join thousands of students who have transformed their trading.</p>
                <button className="btn-dark btn-sm">Read reviews</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Second Row Grid */}
        <div className="bento-grid-mid">
           {/* Card 5 */}
           <div className="bento-card bento-card-horizontal">
              <div className="bento-content">
                 <h3>Risk Management Mastery</h3>
                 <p>Learn exactly how to protect your capital and manage drawdowns.</p>
                 <button className="btn-dark btn-sm mt-3">Protect capital</button>
              </div>
              <div className="bento-icon-corner">
                <span style={{color: 'var(--accent-neon)', display: 'flex'}}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </span>
              </div>
           </div>
           
           {/* Card 6 */}
           <div className="bento-card bento-card-horizontal" style={{gridColumn: '2 / 4'}}>
              <div className="bento-content">
                 <h3>Exclusive Proprietary Tools</h3>
                 <p>Get access to our custom Notion journals and risk calculators.</p>
                 <button className="btn-dark btn-sm mt-3">View tools</button>
              </div>
              <div className="bento-icon-corner">
                <span style={{color: 'var(--accent-neon)', display: 'flex'}}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </span>
              </div>
           </div>
        </div>
        
        {/* Bottom Row Grid */}
        <div className="bento-grid-bottom mt-2">
           {/* Card 7 */}
           <div className="bento-card bento-card-row">
              <div className="crypto-icons">
                 {['ETH','FX','T','LTC','BNB','SOL','DASH','DOGE','ALGO'].map((icon, i) => (
                   <div key={i} className="crypto-icon-box">{icon}</div>
                 ))}
              </div>
              <div className="bento-content">
                <h3>Trade any market</h3>
                <p>FX, Crypto, Stocks, Indices - our strategies work universally.</p>
                <button className="btn-dark btn-sm mt-3">See examples</button>
              </div>
           </div>
           
           {/* Card 8 */}
           <div className="bento-card bento-card-row">
              <div className="human-graphic">
                 <div className="semi-circle"></div>
              </div>
              <div className="bento-content">
                <h3>Direct Mentorship</h3>
                <p>Weekly live calls and direct access to senior coaches.</p>
                <button className="btn-dark btn-sm mt-3">Meet the team</button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default BentoFeatures;
