import React, { useState, useEffect, useRef } from 'react';
import './WhyUs.css';

const skills = [
  { label: 'Price Action & SMC', value: 98, color: '#00ff41' },
  { label: 'Risk Management', value: 95, color: '#00ff41' },
  { label: 'Trading Psychology', value: 92, color: '#00ff41' },
  { label: 'Forex & Gold Markets', value: 97, color: '#00ff41' },
  { label: 'Live Trade Execution', value: 90, color: '#00ff41' },
];

const comparisons = [
  { topic: 'Strategy Clarity', us: 'Crystal-clear, rule-based systems', them: 'Vague, indicator overload' },
  { topic: 'Mentorship', us: 'Live weekly calls + direct DM access', them: 'Recorded videos, no support' },
  { topic: 'Community', us: 'Private Discord, active & moderated', them: 'Public groups full of noise' },
  { topic: 'Risk Management', us: 'Dedicated module with real examples', them: 'Mentioned briefly or skipped' },
  { topic: 'Results Verified', us: 'Live account screenshots & tracking', them: 'Demo account "proofs"' },
  { topic: 'Price', us: 'One-time, lifetime access', them: 'Monthly subscriptions' },
];

/* SVG icons for the journey steps */
const JourneyIcons = {
  foundations: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20"/><path d="M4 20V10l8-6 8 6v10"/>
      <path d="M10 20v-6h4v6"/>
    </svg>
  ),
  smc: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
  risk: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  live: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  consistency: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  ),
};

const journey = [
  { step: '01', icon: JourneyIcons.foundations, title: 'Foundations', desc: 'Master market structure, candlesticks, and how price really moves.' },
  { step: '02', icon: JourneyIcons.smc, title: 'SMC Strategy', desc: 'Learn Smart Money Concepts — order blocks, liquidity, FVG entries.' },
  { step: '03', icon: JourneyIcons.risk, title: 'Risk System', desc: 'Build an unshakeable risk framework. Never blow an account again.' },
  { step: '04', icon: JourneyIcons.live, title: 'Live Trading', desc: 'Execute real trades with mentorship. Build your live track record.' },
  { step: '05', icon: JourneyIcons.consistency, title: 'Consistency', desc: 'Operate like a professional. Systemised, emotionless, profitable.' },
];

/* SVG icons for the bottom pills */
const pills = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
    text: '50+ HD Video Modules',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    text: 'Private Discord Access',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
        <line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
      </svg>
    ),
    text: 'Weekly Live Sessions',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    text: 'Learn on Any Device',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
      </svg>
    ),
    text: 'Lifetime Updates',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    text: 'Certificate of Completion',
  },
];

/* Check / Cross SVG icons */
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00ff41" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const CrossIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

/* Label icon */
const LabelIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

/* Card header icon */
const ChartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);

const SkillBar = ({ label, value, color, animate }) => (
  <div className="skill-item">
    <div className="skill-header">
      <span className="skill-label">{label}</span>
      <span className="skill-value" style={{ color }}>{value}%</span>
    </div>
    <div className="skill-track">
      <div
        className="skill-fill"
        style={{
          width: animate ? `${value}%` : '0%',
          background: `linear-gradient(90deg, ${color}88, ${color})`,
          boxShadow: `0 0 12px ${color}55`,
        }}
      />
    </div>
  </div>
);

const WhyUs = () => {
  const [animate, setAnimate] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="whyus-section" id="features" ref={sectionRef}>
      <div className="container">

        {/* Header */}
        <div className="whyus-header">
          <div className="whyus-label">
            <LabelIcon />
            Why TradeWithMassab
          </div>
          <h2 className="section-title">
            Everything You Need.{' '}
            <span className="whyus-accent">Nothing You Don't.</span>
          </h2>
          <p className="whyus-subtitle">
            We built what we wished existed when we started. A complete, battle-tested system to go from zero to consistent profitability.
          </p>
        </div>

        {/* Main Grid */}
        <div className="whyus-main-grid">

          {/* LEFT — Skills */}
          <div className="whyus-left">
            <div className="whyus-card whyus-skills-card">
              <div className="whyus-card-header">
                <span className="whyus-card-icon">
                  <ChartIcon />
                </span>
                <div>
                  <h3 className="whyus-card-title">Our Teaching Depth</h3>
                  <p className="whyus-card-sub">Coverage across every critical area</p>
                </div>
              </div>
              <div className="skills-list">
                {skills.map((s, i) => (
                  <SkillBar key={i} {...s} animate={animate} />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Tabs */}
          <div className="whyus-right">
            {/* Tab switcher */}
            <div className="whyus-tabs">
              <button
                className={`whyus-tab ${activeTab === 0 ? 'active' : ''}`}
                onClick={() => setActiveTab(0)}
                id="tab-comparison"
              >
                Us vs Others
              </button>
              <button
                className={`whyus-tab ${activeTab === 1 ? 'active' : ''}`}
                onClick={() => setActiveTab(1)}
                id="tab-journey"
              >
                Your Journey
              </button>
            </div>

            {/* Tab Content: Comparison */}
            {activeTab === 0 && (
              <div className="whyus-card whyus-compare-card">
                <div className="compare-head">
                  <span></span>
                  <span className="compare-col-label us-label">
                    <span className="compare-badge">
                      <CheckIcon />
                      TradeWithMassab
                    </span>
                  </span>
                  <span className="compare-col-label them-label">Others</span>
                </div>
                {comparisons.map((row, i) => (
                  <div key={i} className="compare-row" style={{ animationDelay: `${i * 0.06}s` }}>
                    <span className="compare-topic">{row.topic}</span>
                    <span className="compare-us">
                      <CheckIcon />
                      {row.us}
                    </span>
                    <span className="compare-them">
                      <CrossIcon />
                      {row.them}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Tab Content: Journey */}
            {activeTab === 1 && (
              <div className="whyus-card whyus-journey-card">
                {journey.map((step, i) => (
                  <div key={i} className="journey-step" style={{ animationDelay: `${i * 0.08}s` }}>
                    <div className="journey-left">
                      <div className="journey-icon-wrap">
                        {step.icon}
                      </div>
                      {i < journey.length - 1 && <div className="journey-line" />}
                    </div>
                    <div className="journey-body">
                      <div className="journey-step-num">{step.step}</div>
                      <h4 className="journey-title">{step.title}</h4>
                      <p className="journey-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Feature Pills */}
        <div className="whyus-pills-row">
          {pills.map((pill, i) => (
            <div key={i} className="whyus-pill">
              <span className="pill-icon">{pill.icon}</span>
              <span>{pill.text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
