import React from 'react';
import './Challenge.css';

const Challenge = () => {
  return (
    <section className="challenge-section">
      <div className="container challenge-container">
        <div className="challenge-badge">
          <span className="badge-icon">📊</span> 2 steps
        </div>
        
        <h2 className="challenge-title">
          The classic path to<br />
          long-term success
        </h2>
        
        <p className="challenge-desc">
          The 2-Step Challenge is the most proven route for serious traders looking to showcase consistency and discipline. We offer <strong>one of the most affordable and balanced 2-Step programs in the industry</strong> - built for longevity and sustainable growth.
        </p>
        
        <button className="btn-neon challenge-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
          Start 2-step challenge
        </button>
      </div>
    </section>
  );
};

export default Challenge;
