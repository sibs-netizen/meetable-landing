import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ValueProps from './components/ValueProps';
import Testimonials from './components/Testimonials';
import CityCTA from './components/CityCTA';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import CitiesPage from './components/pages/CitiesPage';

const HomePage: React.FC = () => (
  <>
    <Hero />
    <HowItWorks />
    <ValueProps />
    <Testimonials />
    <CityCTA />
    <FAQSection />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans text-slate-800 antialiased bg-white selection:bg-meetable-primary selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cities" element={<CitiesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
