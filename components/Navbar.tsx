import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#' },
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Cities', href: '#' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Community Guidelines', href: '#' },
  ];

  const quizLink = "https://form.typeform.com/to/dECpvX3S";

  return (
    <header 
      className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-in-out pointer-events-none ${
        isScrolled ? 'top-2' : 'top-6'
      }`}
    >
      <div 
        className={`nav-pill pointer-events-auto relative w-[92%] md:w-auto max-w-7xl mx-auto transition-all duration-500 ease-in-out flex items-center justify-between px-5 md:px-8 ${
            isScrolled ? 'py-2.5' : 'py-4'
        }`}
        style={{ minWidth: 'min(92%, 1000px)', outline: 'none' }}
      >
        {/* Logo */}
          <a href="/">
            <img src="/assets/meetable-logo.png" alt="Meetable logo" className="h-8 md:h-9" />
          </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-600 hover:text-meetable-primary transition-colors relative group hover:scale-105 hover:shadow-meetable-glow transform transition-transform focus:outline-none"
            >
              {link.name}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-meetable-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button - Only Quiz */}
        <div className="hidden lg:flex items-center">
            <a 
                href={quizLink}
                className="bg-gradient-to-r from-meetable-primary to-[#4fd1e3] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg hover:shadow-meetable-primary/20 transform hover:-translate-y-0.5 hover:brightness-105 focus:outline-none"
            >
                Take the quiz
            </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
            className="lg:hidden text-meetable-dark p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
        >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Dropdown - Floating Card */}
        {mobileMenuOpen && (
            <div className="absolute top-[calc(100%+0.75rem)] right-0 left-0 mx-auto w-full bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 flex flex-col gap-3 animate-in slide-in-from-top-5 fade-in duration-200 overflow-hidden">
                {navLinks.map((link) => (
                    <a 
                        key={link.name} 
                        href={link.href} 
                        className="text-lg font-medium text-gray-700 hover:text-meetable-primary px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
                <div className="h-px bg-gray-100 my-2"></div>
                <a 
                    href={quizLink} 
                    className="bg-gradient-to-r from-meetable-primary to-[#4fd1e3] text-white w-full py-3 rounded-xl font-bold text-lg shadow-lg hover:brightness-105 text-center block"
                >
                    Take the quiz
                </a>
            </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;