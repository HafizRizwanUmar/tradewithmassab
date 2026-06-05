import React, { useState } from 'react';
import './Curriculum.css';

// ─── SVG Icons ───────────────────────────────────────────────────────────────
const VideoIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 8.5l6 3.5-6 3.5V8.5z" fill="currentColor" />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={`curriculum-chevron${open ? ' curriculum-chevron--open' : ''}`}
  >
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ModuleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 12h8M8 8h5M8 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CertIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8.5 13.5L7 21l5-2 5 2-1.5-7.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const LessonsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 6h16M4 10h16M4 14h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const WHATSAPP_URL =
  'https://wa.me/923311322505?text=Hi!%20I\'m%20interested%20in%20the%20TradeWithMassab%20Masterclass.';

const coreMasterclassModules = [
  {
    id: 1,
    title: 'Foundations of Trading',
    lessons: [
      'How Markets Really Work',
      'Reading Candlestick Charts',
      'Market Sessions & Timing',
      'Setting Up Your Trading Platform',
    ],
  },
  {
    id: 2,
    title: 'Price Action Mastery',
    lessons: [
      'Market Structure (HH, HL, LH, LL)',
      'Support & Resistance Zones',
      'Trend Lines & Channels',
      'Breakouts vs Fakeouts',
      'Multi-Timeframe Analysis',
    ],
  },
  {
    id: 3,
    title: 'Smart Money Concepts',
    lessons: [
      'What is Smart Money?',
      'Order Blocks Explained',
      'Fair Value Gaps (FVG)',
      'Liquidity Pools & Stop Hunts',
      'Change of Character (CHoCH)',
      'Full SMC Trade Setup',
    ],
  },
  {
    id: 4,
    title: 'Risk Management',
    lessons: [
      'The 1% Rule',
      'Position Sizing Calculator',
      'Stop Loss Placement',
      'Drawdown Recovery Protocol',
    ],
  },
  {
    id: 5,
    title: 'Trading Psychology',
    lessons: [
      'Controlling Fear & Greed',
      'Building a Trading Routine',
      'Journaling Your Trades',
    ],
  },
  {
    id: 6,
    title: 'Live Trade Examples',
    lessons: [
      'Gold (XAU/USD) Setup Walkthroughs',
      'EUR/USD & GBP/USD Examples',
      'Reading the Economic Calendar',
      'Your First Live Trade Checklist',
    ],
  },
];

const mentorshipModules = [
  {
    id: 7,
    title: 'Advanced SMC',
    lessons: [
      'Institutional Order Flow',
      'Premium & Discount Arrays',
      'Optimal Trade Entry (OTE)',
      'Silver Bullet Strategy',
      'ICT Concepts Integration',
    ],
  },
  {
    id: 8,
    title: 'Gold Specialist',
    lessons: [
      "Gold's Personality & Behavior",
      'London Session Gold Setups',
      'News Trading Gold Safely',
      'Building a Gold-Only System',
    ],
  },
  {
    id: 9,
    title: 'Live Mentorship',
    tag: 'Ongoing',
    lessons: [
      'Weekly Live Trading Sessions',
      'Personal Chart Reviews',
      'Private Community Q&A',
      'Direct WhatsApp Support',
    ],
  },
];

const coreStats = {
  lessons: coreMasterclassModules.reduce((acc, m) => acc + m.lessons.length, 0),
  hours: '12+',
};

const mentorshipStats = {
  lessons:
    coreMasterclassModules.reduce((acc, m) => acc + m.lessons.length, 0) +
    mentorshipModules.reduce((acc, m) => acc + m.lessons.length, 0),
  hours: '20+',
};

// ─── Accordion Item ───────────────────────────────────────────────────────────
function AccordionItem({ module, isOpen, onToggle }) {
  return (
    <div className={`curriculum-accordion-item${isOpen ? ' curriculum-accordion-item--open' : ''}`}>
      <button
        className="curriculum-accordion-header"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="curriculum-accordion-header-left">
          <span className="curriculum-module-num">
            <ModuleIcon />
            Module {module.id < 10 ? `0${module.id}` : module.id}
          </span>
          <span className="curriculum-module-title">{module.title}</span>
          {module.tag && <span className="curriculum-module-tag">{module.tag}</span>}
        </div>
        <div className="curriculum-accordion-header-right">
          <span className="curriculum-lesson-badge">
            {module.lessons.length} {module.lessons.length === 1 ? 'Lesson' : 'Lessons'}
          </span>
          <ChevronIcon open={isOpen} />
        </div>
      </button>
      <div className="curriculum-accordion-body" aria-hidden={!isOpen}>
        <ul className="curriculum-lesson-list">
          {module.lessons.map((lesson, i) => (
            <li key={i} className="curriculum-lesson-item">
              <span className="curriculum-lesson-icon">
                <VideoIcon />
              </span>
              <span className="curriculum-lesson-name">{lesson}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Sticky Summary Card ──────────────────────────────────────────────────────
function SummaryCard({ activeTab }) {
  const stats = activeTab === 'core' ? coreStats : mentorshipStats;

  return (
    <aside className="curriculum-summary-card">
      <div className="curriculum-summary-glow" />
      <h3 className="curriculum-summary-title">
        {activeTab === 'core' ? 'Core Masterclass' : 'Lifetime Mentorship'}
      </h3>
      <p className="curriculum-summary-subtitle">
        {activeTab === 'core'
          ? 'Everything you need to start trading profitably.'
          : 'Full access + lifelong coaching & community.'}
      </p>

      <div className="curriculum-summary-divider" />

      <ul className="curriculum-summary-stats">
        <li>
          <span className="curriculum-stat-icon"><LessonsIcon /></span>
          <div>
            <span className="curriculum-stat-value">{stats.lessons}</span>
            <span className="curriculum-stat-label">Video Lessons</span>
          </div>
        </li>
        <li>
          <span className="curriculum-stat-icon"><ClockIcon /></span>
          <div>
            <span className="curriculum-stat-value">{stats.hours} hrs</span>
            <span className="curriculum-stat-label">Of Video Content</span>
          </div>
        </li>
        <li>
          <span className="curriculum-stat-icon"><CertIcon /></span>
          <div>
            <span className="curriculum-stat-value">Certificate</span>
            <span className="curriculum-stat-label">Of Completion</span>
          </div>
        </li>
      </ul>

      <div className="curriculum-summary-divider" />

      <ul className="curriculum-summary-features">
        {[
          'Lifetime access to all recordings',
          'Mobile-friendly course platform',
          'New content added regularly',
          ...(activeTab === 'mentorship'
            ? ['Weekly live sessions', 'Personal chart reviews', 'Direct mentor access']
            : []),
        ].map((feat, i) => (
          <li key={i}>
            <span className="curriculum-feat-check"><CheckIcon /></span>
            {feat}
          </li>
        ))}
      </ul>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="curriculum-enroll-btn"
      >
        <WhatsAppIcon />
        Enroll on WhatsApp
      </a>
      <p className="curriculum-enroll-note">Free consultation · No commitment required</p>
    </aside>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Curriculum() {
  const [activeTab, setActiveTab] = useState('core');
  const [openModules, setOpenModules] = useState({ core: new Set([1]), mentorship: new Set([7]) });

  const toggleModule = (id) => {
    setOpenModules((prev) => {
      const next = new Set(prev[activeTab]);
      next.has(id) ? next.delete(id) : next.add(id);
      return { ...prev, [activeTab]: next };
    });
  };

  const currentModules =
    activeTab === 'core' ? coreMasterclassModules : mentorshipModules;

  return (
    <section id="curriculum" className="curriculum-section">
      {/* Ambient background blobs */}
      <div className="curriculum-blob curriculum-blob--1" aria-hidden="true" />
      <div className="curriculum-blob curriculum-blob--2" aria-hidden="true" />

      <div className="curriculum-container">
        {/* ── Header ── */}
        <div className="curriculum-header">
          <span className="curriculum-label">What You'll Learn</span>
          <h2 className="curriculum-heading">
            Complete Trading <span className="curriculum-heading-accent">Curriculum</span>
          </h2>
          <p className="curriculum-subtitle">
            A structured, battle-tested curriculum designed to take you from zero to
            consistently profitable — at your own pace, on any device.
          </p>

          {/* Tabs */}
          <div className="curriculum-tabs" role="tablist">
            <button
              role="tab"
              aria-selected={activeTab === 'core'}
              className={`curriculum-tab${activeTab === 'core' ? ' curriculum-tab--active' : ''}`}
              onClick={() => setActiveTab('core')}
            >
              Core Masterclass
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'mentorship'}
              className={`curriculum-tab${activeTab === 'mentorship' ? ' curriculum-tab--active' : ''}`}
              onClick={() => setActiveTab('mentorship')}
            >
              Lifetime Mentorship
            </button>
          </div>
        </div>

        {/* ── Body: Accordion + Sidebar ── */}
        <div className="curriculum-body">
          {/* Left: Accordion */}
          <div className="curriculum-accordion-col">
            {/* Mentorship includes core banner */}
            {activeTab === 'mentorship' && (
              <div className="curriculum-includes-banner">
                <span className="curriculum-includes-check"><CheckIcon /></span>
                <div>
                  <strong>Includes Everything in Core Masterclass</strong>
                  <p>All {coreStats.lessons} lessons from the Core Masterclass are included, plus exclusive advanced modules below.</p>
                </div>
              </div>
            )}

            {/* Module count bar */}
            <div className="curriculum-modules-meta">
              <span>
                {activeTab === 'core'
                  ? `${coreMasterclassModules.length} Modules · ${coreStats.lessons} Lessons`
                  : `${coreMasterclassModules.length + mentorshipModules.length} Total Modules · ${mentorshipStats.lessons} Lessons`}
              </span>
              <button
                className="curriculum-expand-all"
                onClick={() => {
                  const allIds = currentModules.map((m) => m.id);
                  setOpenModules((prev) => ({
                    ...prev,
                    [activeTab]:
                      prev[activeTab].size === allIds.length
                        ? new Set()
                        : new Set(allIds),
                  }));
                }}
              >
                {openModules[activeTab].size === currentModules.length
                  ? 'Collapse All'
                  : 'Expand All'}
              </button>
            </div>

            {/* Accordion items */}
            <div className="curriculum-accordion" role="list">
              {currentModules.map((module) => (
                <AccordionItem
                  key={module.id}
                  module={module}
                  isOpen={openModules[activeTab].has(module.id)}
                  onToggle={() => toggleModule(module.id)}
                />
              ))}
            </div>
          </div>

          {/* Right: Sticky Summary Card */}
          <SummaryCard activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
}
