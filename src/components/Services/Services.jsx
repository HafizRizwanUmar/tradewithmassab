import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "VIP Signals",
      description: "Receive exact entry, stop-loss, and take-profit levels in real-time. High-probability setups curated by Massab.",
      icon: "🎯",
      highlight: false
    },
    {
      title: "1-on-1 Mentorship",
      description: "Personalized coaching tailored to your trading style. Master risk management and emotional discipline.",
      icon: "💎",
      highlight: true
    },
    {
      title: "Trading Courses",
      description: "From beginner concepts to advanced price action strategies, get access to our comprehensive video library.",
      icon: "📚",
      highlight: false
    }
  ];

  return (
    <section className="services section-padding" id="services">
      <div className="container">
        <h2 className="section-title">
          Elite <span className="text-gradient-blue">Services</span>
        </h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card glass-panel animate-fade-in-up ${service.highlight ? 'highlight-card' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className={`btn-${service.highlight ? 'primary' : 'secondary'} service-btn`}>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
