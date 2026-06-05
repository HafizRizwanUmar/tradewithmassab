import React, { useState, useEffect } from 'react';
import './FAQ.css';

const WHATSAPP_URL =
  'https://wa.me/923311322505?text=Hi!%20I%20have%20a%20question%20about%20the%20TradeWithMassab%20course.';

const faqs = [
  {
    id: 1,
    question: 'Is this course suitable for complete beginners?',
    answer:
      'Absolutely. Module 1 starts from absolute zero — we cover what a pip is, how the market works, what a broker does, and how to read a chart before anything else. You do not need any prior trading knowledge, financial background, or expensive software. Thousands of our students joined with zero experience and went on to trade consistently. If you can follow a step-by-step lesson, you can complete this course.',
  },
  {
    id: 2,
    question: 'How is this different from free YouTube videos?',
    answer:
      'YouTube gives you scattered, disconnected information with no structure, no progression, and no accountability. Our forex trading course is a curated, step-by-step curriculum built on one proven system — you learn each concept in the right order so it actually sticks. On top of that, you get live Q&A sessions, direct mentor access, and a private trading community. Free videos teach you concepts; this course builds your trading edge.',
  },
  {
    id: 3,
    question: 'How long does it take to see results?',
    answer:
      'Most students start identifying consistent, high-probability setups within 4–6 weeks of focused study. Trading is a skill — it compounds with practice. We provide a structured 90-day roadmap so you always know exactly where to focus. The students who see the fastest progress are those who combine the video lessons with our live session reviews and submit their chart analyses for feedback in the community.',
  },
  {
    id: 4,
    question: 'What markets does the course cover?',
    answer:
      'The curriculum primarily focuses on Forex majors — EUR/USD, GBP/USD, and USD/JPY — and Gold (XAU/USD), which is the most liquid and volatile instrument available to retail traders. All strategies are taught on these pairs because they offer the tightest spreads, highest volume, and the most reliable institutional price action. The concepts, however, are transferable to any liquid market including indices and crypto.',
  },
  {
    id: 5,
    question: 'Do I need a lot of money to start trading?',
    answer:
      'No. We strongly recommend starting with a $100–$500 demo account to practise the strategies risk-free for at least 90 days. The goal first is to build skill and consistency — not to make money quickly. Once you have a proven track record on demo, you can transition to a small live account. Many brokers allow live accounts with as little as $50. Capital size matters far less than having a reliable strategy and disciplined risk management.',
  },
  {
    id: 6,
    question: 'Is there a money-back guarantee?',
    answer:
      'We offer a 7-day review period after enrolment. If you complete less than 20% of the course content and feel the material is not what you expected, contact us directly on WhatsApp and we will process a full refund — no questions asked. We are confident in the quality of our trading education, which is why we back it with a clear, no-hassle policy. Students who fully engage with the material are our best testimonials.',
  },
  {
    id: 7,
    question: 'How do I access the course after purchasing?',
    answer:
      'All access is handled through WhatsApp. After your enrolment is confirmed, you are added to our private WhatsApp group where you receive a structured content drip, weekly live session links, and direct access to the mentor team. There is no complex portal to log into — everything is delivered straight to your phone. Your content access begins within a few hours of payment confirmation.',
  },
  {
    id: 8,
    question: 'Are the live sessions recorded?',
    answer:
      'Yes, every weekly live session is recorded and uploaded within 24 hours to the group for those who cannot attend in real time. Live sessions cover real-time market analysis, student chart reviews, trade walkthroughs, and open Q&A. Attending live is highly recommended for the interactive experience, but you will never miss critical content due to time zones or scheduling conflicts.',
  },
  {
    id: 9,
    question:
      'What is the difference between Core Masterclass and Lifetime Mentorship?',
    answer:
      'The Core Masterclass gives you the complete video content library — all strategy modules, risk management frameworks, and the trade playbook — so you can learn the system at your own pace. The Lifetime Mentorship tier adds everything on top: direct one-on-one mentorship access, weekly live trading sessions, the private student community, and VIP institutional signals. If you are serious about learning trading as a long-term skill with ongoing support, Lifetime Mentorship is the clear choice.',
  },
  {
    id: 10,
    question: 'How do I enroll?',
    answer:
      'Simply click the WhatsApp button on this page and send us a message. Our team will confirm your spot and walk you through the payment options within a few hours — usually much sooner. Enrolment is kept intentionally limited each month to protect the quality of mentorship and community interaction. If you are seeing this page, spots are still available, but we encourage you to reach out today to secure your place.',
  },
];

const ChevronIcon = ({ isOpen }) => (
  <svg
    className={`faq-chevron ${isOpen ? 'faq-chevron--open' : ''}`}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.527 5.855L0 24l6.335-1.505A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 0 1-5.003-1.376l-.359-.214-3.721.884.939-3.62-.234-.372A9.795 9.795 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
  </svg>
);

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  /* ── JSON-LD FAQ Schema for SEO ── */
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('faq-schema');
      if (existing) document.head.removeChild(existing);
    };
  }, []);

  return (
    <section className="faq-section" id="faq" aria-label="Frequently Asked Questions">
      <div className="container">

        {/* ── Header ── */}
        <div className="faq-header">
          <span className="section-label">FAQ</span>
          <h2 className="faq-title">
            Common Questions,{' '}
            <span className="faq-title-accent">Honest Answers</span>
          </h2>
          <p className="faq-subtitle">
            Everything you need to know about our{' '}
            <strong>forex trading course</strong> before you enrol.
            We built this{' '}
            <strong>trading education</strong> to be fully transparent — so
            you can{' '}
            <strong>learn trading</strong> with complete confidence from day
            one.
          </p>
        </div>

        {/* ── Accordion ── */}
        <div className="faq-accordion" role="list">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                role="listitem"
              >
                <button
                  className="faq-question"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="faq-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="faq-question-text">{faq.question}</span>
                  <ChevronIcon isOpen={isOpen} />
                </button>

                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${faq.id}`}
                  className="faq-answer-wrapper"
                  style={{ maxHeight: isOpen ? '600px' : '0px' }}
                >
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom CTA Strip ── */}
        <div className="faq-cta-strip">
          <div className="faq-cta-text">
            <h3 className="faq-cta-heading">Still have questions?</h3>
            <p className="faq-cta-desc">
              Our team typically replies within a few hours. Drop us a message
              and we'll get back to you personally.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon faq-cta-btn"
            aria-label="Chat with us on WhatsApp"
          >
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
