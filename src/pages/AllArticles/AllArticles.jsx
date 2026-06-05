import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { articles } from '../../data/articles';
import './AllArticles.css';

const categoryColors = {
  Strategy: '#00ff41',
  'Risk Management': '#f59e0b',
  Beginner: '#60a5fa',
  'Technical Analysis': '#a78bfa',
  Psychology: '#f87171',
  Commodities: '#fbbf24',
};

const WHATSAPP_URL = 'https://wa.me/923311322505?text=Hello!%20I%27m%20interested%20in%20the%20TradeWithMassab%20Masterclass.%20Can%20you%20tell%20me%20more%3F';

const categories = ['All', ...Array.from(new Set(articles.map((a) => a.category)))];

const AllArticles = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    document.title = 'Free Trading Education — Forex, Gold & SMC Articles | TradeWithMassab';
    const setMeta = (name, content, prop = false) => {
      const attr = prop ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };
    setMeta('description', 'Free trading education articles covering Forex, Gold (XAU/USD), Smart Money Concepts, Risk Management, and Trading Psychology. Learn from a professional trader.');
    setMeta('og:title', 'Free Trading Education Articles | TradeWithMassab', true);
    setMeta('og:description', 'Deep-dive articles on Forex, Gold, SMC, Risk Management and Psychology — all free from TradeWithMassab.', true);
    window.scrollTo(0, 0);
    return () => {
      document.title = 'TradeWithMassab | Professional Trading Mentorship & Signals';
    };
  }, []);

  const filtered = articles.filter((a) => {
    const matchCat = activeCategory === 'All' || a.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch = !q || a.title.toLowerCase().includes(q) || a.tags.some((t) => t.toLowerCase().includes(q)) || a.category.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <div className="all-articles-page">
      {/* Navbar */}
      <nav className="aa-navbar">
        <div className="container aa-nav-inner">
          <Link to="/" className="nav-logo">
            <span className="logo-text" style={{ color: 'white' }}>TradeWith</span>
            <span className="logo-dot">.</span>
            <span className="logo-club">MASSAB</span>
          </Link>
          <div className="aa-nav-links">
            <Link to="/" className="aa-nav-link">Home</Link>
            <Link to="/#pricing" className="aa-nav-link">Programs</Link>
            <Link to="/#results" className="aa-nav-link">Results</Link>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-neon aa-nav-cta">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat on WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="aa-hero">
        <div className="aa-hero-glow" />
        <div className="container">
          <div className="aa-hero-badge">
            <span className="aa-badge-dot" />
            Free Trading Education
          </div>
          <h1 className="aa-hero-title">
            Learn to Trade Like a{' '}
            <span className="aa-hero-accent">Professional</span>
          </h1>
          <p className="aa-hero-subtitle">
            Deep-dive articles on Forex, Gold, Smart Money Concepts, Risk Management, and Psychology — all completely free. Written by a full-time professional trader.
          </p>
          <div className="aa-hero-stats">
            <div className="aa-hero-stat">
              <span className="aa-stat-num">{articles.length}</span>
              <span className="aa-stat-label">Free Articles</span>
            </div>
            <div className="aa-hero-stat-div" />
            <div className="aa-hero-stat">
              <span className="aa-stat-num">6</span>
              <span className="aa-stat-label">Categories</span>
            </div>
            <div className="aa-hero-stat-div" />
            <div className="aa-hero-stat">
              <span className="aa-stat-num">100%</span>
              <span className="aa-stat-label">Free Access</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container aa-main">
        <div className="aa-layout">

          {/* Left: Articles */}
          <div className="aa-content">

            {/* Search + Filters */}
            <div className="aa-controls">
              <div className="aa-search-wrap">
                <svg className="aa-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <input
                  id="article-search"
                  className="aa-search"
                  placeholder="Search articles, topics, or tags..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {search && (
                  <button className="aa-search-clear" onClick={() => setSearch('')} aria-label="Clear search">×</button>
                )}
              </div>

              <div className="aa-filters">
                {categories.map((cat) => {
                  const color = categoryColors[cat];
                  return (
                    <button
                      key={cat}
                      id={`filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                      className={`aa-filter-pill ${activeCategory === cat ? 'active' : ''}`}
                      style={activeCategory === cat && color ? { background: color, color: '#000', borderColor: color } : {}}
                      onClick={() => setActiveCategory(cat)}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Results count */}
            <div className="aa-results-count">
              {filtered.length === 0
                ? 'No articles found — try a different search'
                : `Showing ${filtered.length} article${filtered.length !== 1 ? 's' : ''}${activeCategory !== 'All' ? ` in "${activeCategory}"` : ''}`}
            </div>

            {/* Articles Grid */}
            {filtered.length > 0 ? (
              <div className="aa-grid">
                {filtered.map((article) => {
                  const color = categoryColors[article.category] || '#00ff41';
                  return (
                    <article
                      key={article.id}
                      className="aa-card"
                      onClick={() => navigate(`/articles/${article.slug}`)}
                      id={`article-${article.slug}`}
                    >
                      <div className="aa-card-img-wrap">
                        <img src={article.image} alt={article.title} className="aa-card-img" />
                        <div className="aa-card-img-overlay" />
                        <span className="aa-card-badge" style={{ background: color, color: '#000' }}>
                          {article.category}
                        </span>
                      </div>
                      <div className="aa-card-body">
                        <div className="aa-card-meta">
                          <span>{article.date}</span>
                          <span className="aa-meta-dot">·</span>
                          <span>{article.readTime}</span>
                        </div>
                        <h2 className="aa-card-title">{article.title}</h2>
                        <p className="aa-card-excerpt">{article.excerpt}</p>
                        <div className="aa-card-tags">
                          {article.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="aa-tag" style={{ borderColor: color + '44', color }}>
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <div className="aa-card-footer">
                          <span className="aa-read-more" style={{ color }}>
                            Read Article
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                          </span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="aa-empty">
                <div className="aa-empty-icon">📚</div>
                <h3>No articles found</h3>
                <p>Try searching for a different topic or clearing your filters.</p>
                <button className="btn-neon" onClick={() => { setSearch(''); setActiveCategory('All'); }}>
                  Show All Articles
                </button>
              </div>
            )}
          </div>

          {/* Right: Sidebar */}
          <aside className="aa-sidebar">
            {/* CTA Card */}
            <div className="aa-sidebar-cta">
              <div className="aa-cta-glow" />
              <div className="aa-cta-badge">Limited Spots Open</div>
              <h3 className="aa-cta-heading">Ready to Trade for Real?</h3>
              <p className="aa-cta-body">
                These articles are just a glimpse. Join the full Masterclass and get step-by-step video training, live weekly sessions, and direct mentorship from Massab.
              </p>
              <ul className="aa-cta-list">
                <li><span className="aa-cta-check">✓</span> 50+ HD Video Lessons</li>
                <li><span className="aa-cta-check">✓</span> Live Weekly Q&A Sessions</li>
                <li><span className="aa-cta-check">✓</span> Private Community Access</li>
                <li><span className="aa-cta-check">✓</span> 1-on-1 Trade Reviews</li>
              </ul>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-neon aa-cta-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Enroll on WhatsApp
              </a>
              <p className="aa-cta-note">Starting from just $97 · Lifetime access</p>
            </div>

            {/* Categories */}
            <div className="aa-sidebar-cats">
              <h4 className="aa-sidebar-title">Browse by Category</h4>
              <div className="aa-cat-list">
                {categories.filter(c => c !== 'All').map((cat) => {
                  const color = categoryColors[cat] || '#00ff41';
                  const count = articles.filter(a => a.category === cat).length;
                  return (
                    <button
                      key={cat}
                      className={`aa-cat-item ${activeCategory === cat ? 'active' : ''}`}
                      onClick={() => { setActiveCategory(cat); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      style={activeCategory === cat ? { borderColor: color, color } : {}}
                    >
                      <span className="aa-cat-dot" style={{ background: color }} />
                      {cat}
                      <span className="aa-cat-count">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="aa-footer">
        <div className="container">
          <div className="nav-logo" style={{ marginBottom: '0.5rem' }}>
            <span className="logo-text" style={{ color: 'white' }}>TradeWith</span>
            <span className="logo-dot">.</span>
            <span className="logo-club">MASSAB</span>
          </div>
          <p className="aa-footer-copy">© {new Date().getFullYear()} TradeWithMassab. All rights reserved.</p>
          <p className="aa-footer-disclaimer">
            Risk Disclaimer: Trading involves substantial risk of loss. Past performance is not indicative of future results. Never trade with money you cannot afford to lose.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AllArticles;
