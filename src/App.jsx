import React from 'react';
import TopBanner from './components/Navbar/TopBanner';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import BentoFeatures from './components/BentoFeatures/BentoFeatures';
import Curriculum from './components/Curriculum/Curriculum';
import Pricing from './components/Pricing/Pricing';
import Community from './components/Community/Community';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <div className="grid-background"></div>
      <TopBanner />
      <Navbar />
      <main>
        <Hero />
        <BentoFeatures />
        <Curriculum />
        <Pricing />
        <Community />
      </main>
      <Footer />
    </>
  );
}

export default App;
