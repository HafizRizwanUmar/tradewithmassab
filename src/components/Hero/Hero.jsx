import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-badge',      { y: -24, opacity: 0, duration: 0.7 })
        .from('.hero-heading',    { y: 40,  opacity: 0, duration: 0.9 }, '-=0.4')
        .from('.hero-subheading', { y: 24,  opacity: 0, duration: 0.8 }, '-=0.5')
        .from('.hero-cta',        { y: 24,  opacity: 0, duration: 0.7 }, '-=0.4')
        .from('.hero-trust-row',  { y: 20,  opacity: 0, duration: 0.7 }, '-=0.4')
        .from('.hero-features-container', { y: 20, opacity: 0, duration: 0.7 }, '-=0.3');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="container hero-center">

        {/* Badge */}
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Live Enrolment Open
        </div>

        {/* Heading */}
        <h1 className="hero-heading">
          Master the <span className="hero-heading-accent">Markets,</span><br />
          Step by Step
        </h1>

        {/* Subheading */}
        <p className="hero-subheading">
          Join the ultimate trading masterclass. Learn institutional-grade strategies
          and build a <strong>consistent edge</strong> in the market.
        </p>

        {/* CTA */}
        <div className="hero-cta">
          <button className="btn-neon hero-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            Enroll in Masterclass
          </button>
          <button className="hero-btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
            </svg>
            Watch Free Preview
          </button>
        </div>

        {/* Trust row */}
        <div className="hero-trust-row">
          <div className="hero-avatars">
            {[10,11,12,13,14].map(i => (
              <img key={i} src={`https://i.pravatar.cc/40?img=${i}`} alt="student" className="hero-avatar" />
            ))}
          </div>
          <div className="hero-trust-text">
            <span className="hero-trust-stars">★★★★★</span>
            <span className="hero-trust-label">340+ students enrolled</span>
          </div>
        </div>

        {/* Marquee chips */}
        <div className="hero-features-container">
          <div className="hero-features">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="marquee-group">
                {[
                  { label: '50+ HD Videos',    path: <><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></> },
                  { label: 'Private Discord',   path: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/> },
                  { label: 'Weekly Live Q&A',   path: <><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></> },
                  { label: 'Risk Management',   path: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/> },
                  { label: 'Lifetime Access',   path: <><polyline points="23 4 23 10 17 10"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></> },
                  { label: 'XAU/USD & Forex',  path: <line x1="12" y1="1" x2="12" y2="23"/> },
                ].map((chip, ci) => (
                  <div key={ci} className="feature-chip">
                    <span className="chip-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{chip.path}</svg>
                    </span>
                    {chip.label}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
