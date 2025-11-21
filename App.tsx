import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ValueProps from './components/ValueProps';
import Testimonials from './components/Testimonials';
import CityCTA from './components/CityCTA';
import FAQTeaser from './components/FAQTeaser';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-slate-800 antialiased bg-white selection:bg-meetable-primary selection:text-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <ValueProps />
      <Testimonials />
      <CityCTA />
      <FAQTeaser />
      <Footer />
    </div>
  );
};

export default App;