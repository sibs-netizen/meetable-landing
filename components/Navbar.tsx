import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'About', href: '#' },
  { name: 'How it works', href: '#how-it-works' },
  { name: 'Cities', href: '/cities', isRoute: true },
  { name: 'FAQ', href: '#faq' },
  { name: 'Community Guidelines', href: '#' },
];

const getInitialActiveLink = () => {
  if (typeof window === 'undefined') {
    return NAV_LINKS[0].name;
  }

  const pathname = window.location.pathname;
  const routeMatch = NAV_LINKS.find((link) => link.isRoute && link.href === pathname);
  if (routeMatch) {
    return routeMatch.name;
  }

  const currentHash = window.location.hash;
  if (currentHash && currentHash !== '#') {
    const match = NAV_LINKS.find((link) => link.href === currentHash);
    if (match) {
      return match.name;
    }
  }

  return NAV_LINKS[0].name;
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>(() => getInitialActiveLink());
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const syncActiveLinkWithHash = () => {
      const currentHash = window.location.hash;
      if (!currentHash || currentHash === '#') {
        return;
      }

      const match = NAV_LINKS.find((link) => link.href === currentHash);
      if (match) {
        setActiveLink(match.name);
      }
    };

    window.addEventListener('hashchange', syncActiveLinkWithHash);
    return () => window.removeEventListener('hashchange', syncActiveLinkWithHash);
  }, []);

  useEffect(() => {
    const routeMatch = NAV_LINKS.find(
      (link) => link.isRoute && link.href === location.pathname
    );

    if (routeMatch) {
      setActiveLink(routeMatch.name);
      return;
    }

    if (!window.location.hash || window.location.hash === '#') {
      setActiveLink(NAV_LINKS[0].name);
    }
  }, [location.pathname, location.hash]);

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
          <Link to="/" className="flex items-center" onClick={() => setActiveLink(NAV_LINKS[0].name)}>
            <picture>
              <source type="image/webp" srcSet="/assets/meetable-logo-512.webp" />
              <img
                src="/assets/meetable-logo.png"
                alt="Meetable logo"
                width={2534}
                height={542}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-8 md:h-9 w-auto"
              />
            </picture>
          </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link) => {
            if (link.isRoute) {
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className="nav-link text-sm font-medium text-gray-600 focus:outline-none"
                  data-active={activeLink === link.name ? 'true' : undefined}
                  aria-current={activeLink === link.name ? 'page' : undefined}
                  onClick={() => setActiveLink(link.name)}
                >
                  {link.name}
                </Link>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-sm font-medium text-gray-600 focus:outline-none"
                data-active={activeLink === link.name ? 'true' : undefined}
                aria-current={activeLink === link.name ? 'page' : undefined}
                onClick={() => setActiveLink(link.name)}
              >
                {link.name}
              </a>
            );
          })}
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
                {NAV_LINKS.map((link) => {
                  const linkClasses = "text-lg font-medium text-gray-700 hover:text-meetable-primary px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors";

                  if (link.isRoute) {
                    return (
                      <Link
                        key={link.name}
                        to={link.href}
                        className={linkClasses}
                        onClick={() => {
                          setActiveLink(link.name);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {link.name}
                      </Link>
                    );
                  }

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className={linkClasses}
                      onClick={() => {
                        setActiveLink(link.name);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {link.name}
                    </a>
                  );
                })}
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
