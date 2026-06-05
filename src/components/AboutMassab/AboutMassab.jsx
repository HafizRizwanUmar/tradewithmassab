import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutMassab.css';

gsap.registerPlugin(ScrollTrigger);

const credentials = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    value: '7+ Years',
    label: 'Live Trading Experience',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    value: '2,400+',
    label: 'Students Mentored',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    value: '87%',
    label: 'Student Win Rate',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    value: '$2M+',
    label: 'Profits Generated',
  },
];

const highlights = [
  'Specialist in Smart Money Concepts (SMC) & ICT methodology',
  'Traded XAU/USD, Forex majors & crypto at institutional level',
  'Built a community of 2,400+ active traders across 30+ countries',
  'Weekly live sessions with transparent trade tracking',
  'Taught from zero to profitability — no fluff, no fake signals',
];

const AboutMassab = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Portrait slides from left
      gsap.from('.about-portrait-col', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        x: -60, opacity: 0, duration: 1.1, ease: 'power3.out',
      });
      // Content slides from right
      gsap.from('.about-content-col', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        x: 60, opacity: 0, duration: 1.1, ease: 'power3.out',
      });
      // Credentials stagger
      gsap.from('.about-cred-card', {
        scrollTrigger: { trigger: '.about-credentials', start: 'top 85%', toggleActions: 'play none none none' },
        y: 30, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out', delay: 0.3,
      });
      // Highlights stagger
      gsap.from('.about-highlight', {
        scrollTrigger: { trigger: '.about-highlights', start: 'top 85%', toggleActions: 'play none none none' },
        x: -20, opacity: 0, duration: 0.5, stagger: 0.09, ease: 'power2.out', delay: 0.4,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="container about-grid">

        {/* ── LEFT: Portrait ── */}
        <div className="about-portrait-col">
          {/* Glow orb */}
          <div className="about-glow-orb" />

          {/* Image rendered as background-image to handle white bg */}
          <div className="about-portrait-img" />

          {/* Floating name card */}
          <div className="about-name-card">
            <div className="about-name-card-avatar" />
            <div>
              <div className="about-name-card-name">Massab Khan</div>
              <div className="about-name-card-title">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00ff41" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Verified Professional Trader
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <div className="about-content-col">
          {/* Label */}
          <div className="about-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
            </svg>
            Meet Your Mentor
          </div>

          <h2 className="about-heading">
            Who is <span className="about-heading-accent">Massab Khan?</span>
          </h2>

          <p className="about-bio">
            Massab Khan is a professional forex and commodities trader with over
            <strong> 7 years of live market experience</strong>. Starting with zero capital
            and zero guidance, he built his trading career from the ground up — learning
            the hard way through years of trial, loss, and relentless refinement.
          </p>
          <p className="about-bio">
            Today, he teaches the exact system that transformed his trading:
            <strong> Smart Money Concepts</strong>, institutional order flow, and a
            bulletproof risk framework — all packaged into TradeWithMassab's masterclass.
          </p>

          {/* Highlights */}
          <ul className="about-highlights">
            {highlights.map((item, i) => (
              <li key={i} className="about-highlight">
                <span className="about-highlight-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00ff41" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* Credential cards */}
          <div className="about-credentials">
            {credentials.map((c, i) => (
              <div key={i} className="about-cred-card">
                <div className="about-cred-icon">{c.icon}</div>
                <div className="about-cred-value">{c.value}</div>
                <div className="about-cred-label">{c.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a href="#pricing" className="btn-neon about-cta-btn" style={{textDecoration: 'none'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            Learn With Massab
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutMassab;
