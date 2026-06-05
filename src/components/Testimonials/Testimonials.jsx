import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Ahmed K.',
    username: '@ahmed_trades',
    initials: 'AK',
    avatarGradient: 'linear-gradient(135deg, #00ff41 0%, #00cc34 100%)',
    avatarColor: '#000',
    rating: 5,
    course: 'Lifetime Mentorship',
    quote:
      "I was losing money for 2 years before joining. After just 6 weeks of Massab's SMC course, I had my first consistently profitable month. The order block strategy alone changed everything.",
  },
  {
    id: 2,
    name: 'Sarah M.',
    username: '@sarahforex',
    initials: 'SM',
    avatarGradient: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
    avatarColor: '#fff',
    rating: 5,
    course: 'Core Masterclass',
    quote:
      'The risk management module is worth 10x the price alone. I used to risk 5–10% per trade. Now I never risk more than 1% and my account has grown 34% in just 3 months.',
  },
  {
    id: 3,
    name: 'Usman R.',
    username: '@usman_fx',
    initials: 'UR',
    avatarGradient: 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)',
    avatarColor: '#fff',
    rating: 5,
    course: 'Lifetime Mentorship',
    quote:
      'The live sessions are incredible. Watching Massab trade gold in real time and explain his thought process has been more educational than years of YouTube videos combined.',
  },
  {
    id: 4,
    name: 'Layla T.',
    username: '@laylatrades',
    initials: 'LT',
    avatarGradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
    avatarColor: '#000',
    rating: 5,
    course: 'Core Masterclass',
    quote:
      'As a complete beginner, I was scared of losing money. This course took me from knowing nothing to understanding market structure, liquidity, and making my first live trade profitably.',
  },
  {
    id: 5,
    name: 'Daniel O.',
    username: '@danielgoldtrader',
    initials: 'DO',
    avatarGradient: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
    avatarColor: '#fff',
    rating: 5,
    course: 'Lifetime Mentorship',
    quote:
      "The XAU/USD strategy module is elite. I traded gold blindly before. Now I understand how to read the London–NY overlap, find liquidity sweeps, and enter on FVGs. Up 18% this month.",
  },
  {
    id: 6,
    name: 'Farrukh N.',
    username: '@farrukh_pips',
    initials: 'FN',
    avatarGradient: 'linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)',
    avatarColor: '#000',
    rating: 5,
    course: 'Core Masterclass',
    quote:
      "The community alone is worth joining for. Everyone shares setups, Massab reviews our charts personally. I've improved more in 2 months here than in 3 years of trading alone.",
  },
];

const SLIDE_INTERVAL = 5000;

const Stars = ({ count }) => (
  <div className="t-stars" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="t-star" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);
  const total = testimonials.length;

  const goTo = useCallback(
    (index) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setActiveIndex((index + total) % total);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating, total]
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [goTo, activeIndex]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [goTo, activeIndex]);

  // Auto-slide
  useEffect(() => {
    if (isHovered) {
      clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(goNext, SLIDE_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [isHovered, goNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  // Compute offset so active card is centred
  const getOffset = (i) => {
    let diff = i - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section className="testimonials-section" id="testimonials">
      {/* Ambient glow */}
      <div className="t-glow t-glow--left" aria-hidden="true" />
      <div className="t-glow t-glow--right" aria-hidden="true" />

      <div className="container">
        {/* Section header */}
        <div className="t-header">
          <span className="t-label">
            <span className="t-label-dot" aria-hidden="true" />
            Student Success Stories
          </span>
          <h2 className="t-title">
            Real Results from <span className="t-title-accent">Real Traders</span>
          </h2>
          <p className="t-subtitle">
            Join thousands of traders who transformed their trading journey with
            Massab's proven strategies and live mentorship.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="t-carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="t-track" role="list">
            {testimonials.map((t, i) => {
              const offset = getOffset(i);
              const isActive = offset === 0;
              const isAdjacent = Math.abs(offset) === 1;
              const isVisible = Math.abs(offset) <= 2;

              return (
                <article
                  key={t.id}
                  role="listitem"
                  aria-hidden={!isActive}
                  className={`t-card ${isActive ? 't-card--active' : ''} ${
                    isAdjacent ? 't-card--adjacent' : ''
                  } ${!isVisible ? 't-card--hidden' : ''}`}
                  style={{
                    '--offset': offset,
                  }}
                  onClick={() => !isActive && goTo(i)}
                >
                  {/* Quote mark */}
                  <span className="t-card-quote-mark" aria-hidden="true">"</span>

                  {/* Stars */}
                  <Stars count={t.rating} />

                  {/* Quote */}
                  <blockquote className="t-card-text">"{t.quote}"</blockquote>

                  {/* Footer */}
                  <footer className="t-card-footer">
                    <div className="t-card-divider" />
                    <div className="t-card-author">
                      {/* Avatar */}
                      <div
                        className="t-avatar"
                        style={{
                          background: t.avatarGradient,
                          color: t.avatarColor,
                        }}
                        aria-hidden="true"
                      >
                        {t.initials}
                      </div>
                      {/* Info */}
                      <div className="t-author-info">
                        <span className="t-author-name">{t.name}</span>
                        <span className="t-author-handle">{t.username}</span>
                      </div>
                      {/* Course badge */}
                      <div className="t-course-badge">
                        <span className="t-course-badge-icon" aria-hidden="true">🎓</span>
                        {t.course}
                      </div>
                    </div>
                    {/* Verified */}
                    <div className="t-verified">
                      <svg className="t-verified-icon" viewBox="0 0 20 20" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Verified Student
                    </div>
                  </footer>
                </article>
              );
            })}
          </div>

          {/* Prev / Next */}
          <button
            className="t-arrow t-arrow--prev"
            onClick={goPrev}
            aria-label="Previous testimonial"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="t-arrow t-arrow--next"
            onClick={goNext}
            aria-label="Next testimonial"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="t-dots" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to testimonial ${i + 1} — ${t.name}`}
              className={`t-dot ${i === activeIndex ? 't-dot--active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="t-progress-bar" aria-hidden="true">
          <div
            key={activeIndex}
            className={`t-progress-fill ${!isHovered ? 't-progress-fill--running' : ''}`}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
