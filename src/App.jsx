import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBanner from './components/Navbar/TopBanner';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutMassab from './components/AboutMassab/AboutMassab';
import WhyUs from './components/WhyUs/WhyUs';
import Curriculum from './components/Curriculum/Curriculum';
import Results from './components/Results/Results';
import Testimonials from './components/Testimonials/Testimonials';
import Pricing from './components/Pricing/Pricing';
import FAQ from './components/FAQ/FAQ';
import Community from './components/Community/Community';
import Articles from './components/Articles/Articles';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import ArticleDetail from './pages/ArticleDetail/ArticleDetail';
import AllArticles from './pages/AllArticles/AllArticles';
import ScrollAnimations from './components/ScrollAnimations/ScrollAnimations';

// Home page component
const HomePage = () => (
  <>
    <div className="grid-background"></div>
    <TopBanner />
    <Navbar />
    <main>
      <Hero />
      <AboutMassab />
      <WhyUs />
      <Curriculum />
      <Results />
      <Testimonials />
      <Articles />
      <Pricing />
      <FAQ />
      <Community />
    </main>
    <Footer />
    <WhatsAppButton phoneNumber="923311322505" message="Hello! I'm interested in the TradeWithMassab Masterclass. Can you tell me more?" />
    <ScrollAnimations />
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/articles" element={<AllArticles />} />
      <Route path="/articles/:slug" element={<ArticleDetail />} />
    </Routes>
  );
}

export default App;
