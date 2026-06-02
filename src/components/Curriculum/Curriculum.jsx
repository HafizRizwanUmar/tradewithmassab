import React from 'react';
import './Curriculum.css';

const Curriculum = () => {
  const modules = [
    {
      number: "1",
      title: "Foundations & Market Structure",
      desc: "Learn the absolute basics of reading a chart, understanding candlesticks, and identifying true market trends."
    },
    {
      number: "2",
      title: "Advanced Price Action",
      desc: "Dive deep into institutional order flow, supply & demand zones, and liquidity sweeps."
    },
    {
      number: "3",
      title: "Risk Management Blueprint",
      desc: "The secret to longevity. Learn how to size positions, manage drawdowns, and protect capital."
    }
  ];

  return (
    <section className="curriculum-section" id="curriculum">
      <div className="container curriculum-layout">
        <div className="curriculum-sidebar">
          <h2 className="curriculum-title">Inside the Masterclass</h2>
        </div>
        
        <div className="curriculum-list">
          {modules.map((mod, index) => (
            <div key={index} className="curriculum-card">
              <div className="card-number">
                <span className="zero">0</span>{mod.number}
              </div>
              <div className="card-content">
                <h3 className="card-title">{mod.title}</h3>
                <p className="card-desc">{mod.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
