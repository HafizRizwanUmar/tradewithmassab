import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { articles } from '../../data/articles';
import './Articles.css';

const categoryColors = {
  Strategy: '#00ff41',
  'Risk Management': '#f59e0b',
  Beginner: '#60a5fa',
  'Technical Analysis': '#a78bfa',
  Psychology: '#f87171',
  Commodities: '#fbbf24',
};

// Show only the first 3 as "featured" on the home page
const featuredArticles = articles.slice(0, 3);

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();
  const color = categoryColors[article.category] || '#00ff41';

  return (
    <article className="article-card" onClick={() => navigate(`/articles/${article.slug}`)} id={`article-card-${article.slug}`}>
      <div className="article-card-image-wrapper">
        <div className="article-card-image">
          <img src={article.image} alt={article.title} className="article-card-img" />
          <div className="article-card-img-overlay" style={{ background: `linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)` }} />
        </div>
        <div className="article-card-category-badge" style={{ background: color, color: '#000' }}>
          {article.category}
        </div>
      </div>

      <div className="article-card-body">
        <div className="article-card-meta">
          <span className="article-meta-date">{article.date}</span>
          <span className="article-meta-dot">·</span>
          <span className="article-meta-read">{article.readTime}</span>
        </div>

        <h3 className="article-card-title">{article.title}</h3>
        <p className="article-card-excerpt">{article.excerpt}</p>

        <div className="article-card-tags">
          {article.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="article-tag" style={{ borderColor: color + '44', color }}>
              {tag}
            </span>
          ))}
        </div>

        <div className="article-card-footer">
          <span className="article-read-more">
            Read Article
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
};

const Articles = () => {
  return (
    <section className="articles-section" id="articles">
      <div className="container">
        <div className="articles-header">
          <div className="articles-label">
            <span className="label-dot"></span>
            Free Trading Education
          </div>
          <h2 className="section-title">
            Learn from the{' '}
            <span className="articles-highlight">Best in the Game</span>
          </h2>
          <p className="articles-subtitle">
            Deep-dive articles on strategy, risk management, psychology, and everything you need to trade like a professional. All completely free.
          </p>
        </div>

        <div className="articles-grid">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="articles-view-all">
          <Link to="/articles" className="articles-view-all-btn" id="view-all-articles">
            <span>View All {articles.length} Free Articles</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="articles-view-all-note">Forex · Gold · SMC · Risk Management · Psychology</p>
        </div>
      </div>
    </section>
  );
};

export default Articles;
