import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { articles } from '../../data/articles';
import './ArticleDetail.css';

const categoryColors = {
  Strategy: '#00ff41',
  'Risk Management': '#f59e0b',
  Beginner: '#60a5fa',
  'Technical Analysis': '#a78bfa',
  Psychology: '#f87171',
  Commodities: '#fbbf24',
};

const categoryIcons = {
  Strategy: '📊',
  'Risk Management': '🛡️',
  Beginner: '🌱',
  'Technical Analysis': '📈',
  Psychology: '🧠',
  Commodities: '🥇',
};

// Simple markdown-like renderer
const renderContent = (content) => {
  const lines = content.trim().split('\n');
  const elements = [];
  let i = 0;
  let tableBuffer = [];
  let inTable = false;

  while (i < lines.length) {
    const line = lines[i];

    // Tables
    if (line.trim().startsWith('|')) {
      inTable = true;
      tableBuffer.push(line);
      i++;
      continue;
    }
    if (inTable && !line.trim().startsWith('|')) {
      elements.push(renderTable(tableBuffer, elements.length));
      tableBuffer = [];
      inTable = false;
    }

    // H2
    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="article-content-h2">{line.replace('## ', '')}</h2>);
    }
    // H3
    else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="article-content-h3">{line.replace('### ', '')}</h3>);
    }
    // H4
    else if (line.startsWith('#### ')) {
      elements.push(<h4 key={i} className="article-content-h4">{line.replace('#### ', '')}</h4>);
    }
    // HR
    else if (line.trim() === '---') {
      elements.push(<hr key={i} className="article-divider" />);
    }
    // Blockquote
    else if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={i} className="article-blockquote">
          {line.replace('> ', '')}
        </blockquote>
      );
    }
    // Code block start
    else if (line.startsWith('```')) {
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <pre key={i} className="article-code-block">
          <code>{codeLines.join('\n')}</code>
        </pre>
      );
    }
    // Bullet list
    else if (line.startsWith('- ')) {
      const listItems = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(lines[i].replace('- ', ''));
        i++;
      }
      elements.push(
        <ul key={i} className="article-list">
          {listItems.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    }
    // Numbered list
    else if (/^\d+\. /.test(line)) {
      const listItems = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        listItems.push(lines[i].replace(/^\d+\. /, ''));
        i++;
      }
      elements.push(
        <ol key={i} className="article-ordered-list">
          {listItems.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    }
    // Paragraph
    else if (line.trim() !== '') {
      elements.push(<p key={i} className="article-paragraph">{renderInline(line)}</p>);
    }

    i++;
  }

  // Flush table if at end
  if (inTable && tableBuffer.length > 0) {
    elements.push(renderTable(tableBuffer, elements.length));
  }

  return elements;
};

const renderTable = (lines, key) => {
  const rows = lines.filter((l) => !l.includes('---'));
  const headers = rows[0]?.split('|').filter((c) => c.trim() !== '').map((c) => c.trim()) || [];
  const bodyRows = rows.slice(1);

  return (
    <div key={`table-${key}`} className="article-table-wrapper">
      <table className="article-table">
        <thead>
          <tr>
            {headers.map((h, i) => <th key={i}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {bodyRows.map((row, rIdx) => {
            const cells = row.split('|').filter((c) => c.trim() !== '').map((c) => c.trim());
            return (
              <tr key={rIdx}>
                {cells.map((cell, cIdx) => <td key={cIdx}>{cell}</td>)}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const renderInline = (text) => {
  // Bold **text**
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} className="article-inline-code">{part.slice(1, -1)}</code>;
    }
    return part;
  });
};

const ArticleDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const article = articles.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="article-not-found">
        <div className="container">
          <h2>Article not found</h2>
          <button className="btn-neon" onClick={() => navigate('/')}>← Back to Home</button>
        </div>
      </div>
    );
  }

  const color = categoryColors[article.category] || '#00ff41';
  const icon = categoryIcons[article.category] || '📰';

  const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div className="article-detail-page">
      {/* Navbar */}
      <nav className="article-navbar">
        <div className="container article-nav-container">
          <Link to="/" className="nav-logo">
            <span className="logo-text" style={{ color: 'white' }}>TradeWith</span>
            <span className="logo-dot">.</span>
            <span className="logo-club">MASSAB</span>
          </Link>
          <button className="btn-neon article-nav-enroll" onClick={() => navigate('/#pricing')}>
            Enroll Now
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="article-hero">
        <div className="container">
          <button className="article-back-btn" id="article-back-btn" onClick={() => navigate('/')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>

          <div className="article-hero-category" style={{ color, borderColor: color + '44' }}>
            <span>{icon}</span>
            {article.category}
          </div>

          <h1 className="article-hero-title">{article.title}</h1>
          <p className="article-hero-excerpt">{article.excerpt}</p>

          <div className="article-hero-meta">
            <div className="article-hero-meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              {article.date}
            </div>
            <span className="article-hero-meta-dot">·</span>
            <div className="article-hero-meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {article.readTime}
            </div>
          </div>

          <div className="article-hero-tags">
            {article.tags.map((tag) => (
              <span key={tag} className="article-tag-hero" style={{ borderColor: color + '55', color }}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Divider */}
      <div className="article-icon-banner">
        <div className="container">
          <div className="article-icon-circle" style={{ boxShadow: `0 0 60px ${color}33` }}>
            <span>{icon}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="article-main">
        <div className="container">
          <div className="article-content-layout">
            <div className="article-body">
              {renderContent(article.content)}
            </div>

            {/* Sidebar */}
            <aside className="article-sidebar">
              <div className="article-sidebar-card">
                <h4 className="sidebar-title">🚀 Start Your Journey</h4>
                <p className="sidebar-desc">Join thousands of traders mastering the markets with TradeWithMassab.</p>
                <button className="btn-neon sidebar-cta" style={{ width: '100%', justifyContent: 'center' }} onClick={() => navigate('/')}>
                  Enroll in Masterclass
                </button>
              </div>

              <div className="article-sidebar-card">
                <h4 className="sidebar-title">📚 More Articles</h4>
                <div className="sidebar-article-list">
                  {otherArticles.map((a) => (
                    <Link key={a.id} to={`/articles/${a.slug}`} className="sidebar-article-item">
                      <span className="sidebar-article-icon">{categoryIcons[a.category]}</span>
                      <div>
                        <p className="sidebar-article-title">{a.title}</p>
                        <span className="sidebar-article-read">{a.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* More Articles Section */}
      <section className="article-more-section">
        <div className="container">
          <h2 className="article-more-title">Continue Reading</h2>
          <div className="article-more-grid">
            {otherArticles.map((a) => {
              const aColor = categoryColors[a.category] || '#00ff41';
              return (
                <Link to={`/articles/${a.slug}`} key={a.id} className="article-more-card">
                  <span className="article-more-card-icon">{categoryIcons[a.category]}</span>
                  <div className="article-more-card-category" style={{ color: aColor }}>{a.category}</div>
                  <h3 className="article-more-card-title">{a.title}</h3>
                  <span className="article-more-card-read">{a.readTime}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="article-footer">
        <div className="container">
          <div className="nav-logo">
            <span className="logo-text" style={{ color: 'white' }}>TradeWith</span>
            <span className="logo-dot">.</span>
            <span className="logo-club">MASSAB</span>
          </div>
          <p className="article-footer-copy">© {new Date().getFullYear()} TradeWithMassab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ArticleDetail;
