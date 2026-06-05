import React, { useEffect, useRef, useState } from 'react';
import './Results.css';

const stats = [
  { value: 340, suffix: '+', label: 'Students Enrolled', icon: '👨‍🎓' },
  { value: 73, suffix: '%', label: 'Student Win Rate', icon: '🎯' },
  { value: 24, suffix: '', label: 'Avg. Risk:Reward (1:2.4)', icon: '📈' },
  { value: 180, suffix: 'K+', label: 'Pips Documented Live', icon: '💹' },
];

const trades = [
  { pair: 'XAU/USD', type: 'BUY', entry: '2,312.50', exit: '2,389.80', pips: '+772', rr: '1:4.2', date: 'May 28', positive: true },
  { pair: 'GBP/USD', type: 'BUY', entry: '1.2640', exit: '1.2810', pips: '+170', rr: '1:3.4', date: 'May 24', positive: true },
  { pair: 'EUR/USD', type: 'SELL', entry: '1.0890', exit: '1.0740', pips: '+150', rr: '1:3.0', date: 'May 20', positive: true },
  { pair: 'XAU/USD', type: 'SELL', entry: '2,405.00', exit: '2,340.00', pips: '+650', rr: '1:5.1', date: 'May 15', positive: true },
  { pair: 'USD/JPY', type: 'BUY', entry: '154.20', exit: '155.90', pips: '+170', rr: '1:3.4', date: 'May 10', positive: true },
  { pair: 'GBP/JPY', type: 'SELL', entry: '197.40', exit: '195.10', pips: '+230', rr: '1:2.9', date: 'May 5', positive: true },
];

const useCountUp = (target, duration = 2000, started) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);

  return count;
};

const StatCard = ({ stat, started }) => {
  const count = useCountUp(stat.value, 2200, started);
  return (
    <div className="result-stat-card">
      <div className="result-stat-icon">{stat.icon}</div>
      <div className="result-stat-value">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="result-stat-label">{stat.label}</div>
    </div>
  );
};

const Results = () => {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="results-section" id="results" ref={sectionRef}>
      <div className="container">

        {/* Header */}
        <div className="results-header">
          <div className="results-label">
            <span className="results-live-dot"></span>
            Live Trading Results
          </div>
          <h2 className="section-title">
            Real Trades.{' '}
            <span className="results-green">Real Profits.</span>
          </h2>
          <p className="results-subtitle">
            No fake screenshots. No demo accounts. These are verified live trades from our community — documented in real time.
          </p>
        </div>

        {/* Stats Row */}
        <div className="results-stats-grid">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} started={started} />
          ))}
        </div>

        {/* Trade Log */}
        <div className="results-trades-wrapper">
          <div className="results-trades-header">
            <div className="results-trades-title">
              <span className="results-pulse-dot"></span>
              Recent Verified Trades
            </div>
            <span className="results-disclaimer">All trades executed on live accounts</span>
          </div>

          <div className="results-trades-table">
            <div className="trades-table-head">
              <span>Pair</span>
              <span>Direction</span>
              <span>Entry</span>
              <span>Exit</span>
              <span>Pips</span>
              <span>R:R</span>
              <span>Date</span>
            </div>
            <div className="trades-table-body">
              {trades.map((trade, i) => (
                <div key={i} className={`trade-row ${trade.positive ? 'trade-win' : 'trade-loss'}`} style={{ animationDelay: `${i * 0.08}s` }}>
                  <span className="trade-pair">{trade.pair}</span>
                  <span className={`trade-type trade-type-${trade.type.toLowerCase()}`}>{trade.type}</span>
                  <span className="trade-entry">{trade.entry}</span>
                  <span className="trade-exit">{trade.exit}</span>
                  <span className="trade-pips">{trade.pips}</span>
                  <span className="trade-rr">{trade.rr}</span>
                  <span className="trade-date">{trade.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="results-cta-banner">
          <div className="results-cta-left">
            <div className="results-cta-chart">
              {[40, 55, 45, 70, 62, 80, 75, 92, 88, 100].map((h, i) => (
                <div key={i} className="cta-bar" style={{ height: `${h}%`, animationDelay: `${i * 0.07}s` }}></div>
              ))}
            </div>
            <div>
              <h3 className="results-cta-heading">Join 340+ Traders Learning to Win</h3>
              <p className="results-cta-sub">Real strategies. Real mentorship. Start your journey today.</p>
            </div>
          </div>
          <button className="btn-neon results-cta-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Enroll Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default Results;
