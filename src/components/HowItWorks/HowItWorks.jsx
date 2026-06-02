import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how">
      <div className="container">
        <h2 className="section-title text-center">How it works</h2>
        
        <div className="steps-grid">
          {/* Step 1 */}
          <div className="step-card">
            <span className="step-label">Step 1</span>
            <h3>Choose your desire<br/>funding program</h3>
            
            <div className="step-graphic step1-graphic">
               <div className="mock-dropdown">1 step challenge</div>
               <div className="mock-dropdown active">
                 2 step challenge
                 <div className="cursor-mock">
                    <span style={{color: 'var(--accent-neon)', fontSize: '1.2rem'}}>↗</span>
                 </div>
               </div>
               <div className="mock-dropdown">Instant funding</div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="step-card">
            <span className="step-label">Step 2</span>
            <h3>Complete the<br/>challenge</h3>
            
            <div className="step-graphic step2-graphic">
               <div className="progress-widget">
                 <strong>Challenge progress</strong>
                 <p>You're getting closer to funding.</p>
                 <div className="progress-bar-container">
                    <div className="progress-bar-fill" style={{width: '70%'}}></div>
                 </div>
                 <div className="progress-labels">
                   <span>Progress</span>
                   <span>70%</span>
                 </div>
               </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="step-card">
            <span className="step-label">Step 3</span>
            <h3>Get funded and keep<br/>up to 95% of the profits</h3>
            
            <div className="step-graphic step3-graphic">
               <div className="arc-step">
                 <div className="arc-text-step">
                   <span className="text-xl">95%</span><br/>profit
                 </div>
               </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-lg">
          <button className="btn-neon challenge-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
