import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: "Alex T.",
      role: "Funded Trader",
      content: "Massab's mentorship completely changed my perspective on the markets. I went from blowing accounts to consistent profitability in 3 months.",
      rating: 5
    },
    {
      name: "Sarah M.",
      role: "Retail Trader",
      content: "The VIP signals are incredibly accurate. What I love most is the detailed breakdown of WHY we are taking a trade, not just the entry levels.",
      rating: 5
    },
    {
      name: "David K.",
      role: "Prop Firm Trader",
      content: "The risk management strategies taught here are institutional grade. Passed my $100k prop firm challenge using these exact methods.",
      rating: 5
    }
  ];

  return (
    <section className="testimonials section-padding" id="results">
      <div className="container">
        <h2 className="section-title">
          Proven <span className="text-gradient">Results</span>
        </h2>
        
        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="testimonial-card glass-panel animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-content">"{review.content}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="author-name">{review.name}</h4>
                  <span className="author-role">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
