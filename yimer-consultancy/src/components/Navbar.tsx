// components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../components/ThemeContext';

export const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const isDark = isDarkMode;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-1rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
        
        .grain-overlay {
          position: relative;
        }
        
        .grain-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.12'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 180px;
          pointer-events: none;
          border-radius: inherit;
          z-index: 1;
        }
        
        .glass-rough-light {
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }
        
        .glass-rough-dark {
          backdrop-filter: blur(14px) brightness(0.7) contrast(1.1);
          -webkit-backdrop-filter: blur(14px) brightness(0.7) contrast(1.1);
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        .poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 poppins">
        <div className="max-w-6xl mx-auto">
          <div className={`
            relative overflow-hidden
            flex items-center justify-between px-4 py-2 rounded-2xl
            border shadow-2xl grain-overlay
            transition-all duration-300
            ${isDark 
              ? 'glass-rough-dark bg-black/80 border-white/8 shadow-black/60' 
              : 'glass-rough-light bg-white/70 border-black/8 shadow-gray-200/50'
            }
          `}>
            {/* Logo - Smaller font on mobile */}
            <Link to="/" className="relative z-10" onClick={() => setIsMenuOpen(false)}>
              <div className="flex items-baseline gap-1">
                <span className={`font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'} text-base sm:text-xl`}>
                  Yimer
                </span>
                <span className={`font-light tracking-wide text-gray-400 text-sm sm:text-lg`}>|</span>
                <span className={`font-medium tracking-wide bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-sm sm:text-lg`}>
                  Consultancy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 relative z-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`
                    text-sm font-medium
                    transition-all duration-200
                    relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px]
                    after:bg-gradient-to-r after:from-blue-500 after:to-purple-500
                    after:transition-all after:duration-300 hover:after:w-full
                    ${location.pathname === link.href 
                      ? (isDark ? 'text-white' : 'text-gray-900')
                      : (isDark ? 'text-white/65 hover:text-white' : 'text-gray-600 hover:text-gray-900')
                    }
                  `}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA & Theme Toggle */}
            <div className="hidden md:flex items-center gap-3 relative z-10">
              <button
                onClick={toggleTheme}
                className={`
                  p-2 rounded-lg transition-all duration-200
                  hover:scale-105 active:scale-95
                  ${isDark 
                    ? 'bg-white/15 hover:bg-white/25 text-amber-400' 
                    : 'bg-black/5 hover:bg-black/10 text-gray-700'
                  }
                `}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <Link to="/contact">
                <button className="group relative px-4 py-1.5 rounded-lg overflow-hidden text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95">
                  <div className={`absolute inset-0 transition-all duration-300 ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
                  <div className={`absolute inset-[1px] rounded-lg transition-all duration-300 ${isDark ? 'bg-black/5' : 'bg-white/10'}`} />
                  <span className={`relative z-10 transition-all duration-300 font-semibold ${isDark ? 'text-gray-900' : 'text-white'}`}>
                    Get Started
                  </span>
                </button>
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-2 relative z-10">
              <button
                onClick={toggleTheme}
                className={`
                  p-2 rounded-lg transition-all duration-200
                  hover:scale-105 active:scale-95
                  ${isDark 
                    ? 'bg-white/15 hover:bg-white/25 text-amber-400' 
                    : 'bg-black/5 hover:bg-black/10 text-gray-700'
                  }
                `}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                onClick={toggleMenu}
                className={`
                  p-2 rounded-lg transition-all duration-200
                  hover:scale-105 active:scale-95
                  ${isDark 
                    ? 'bg-white/15 hover:bg-white/25' 
                    : 'bg-black/5 hover:bg-black/10'
                  }
                `}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-900'}`} />
                ) : (
                  <Menu className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-900'}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Always accessible */}
      {isMenuOpen && (
        <>
          <div 
            className={`fixed inset-0 z-40 md:hidden transition-all duration-300 backdrop-blur-sm ${isDark ? 'bg-black/70' : 'bg-white/60'}`}
            onClick={toggleMenu}
          />
          
          <div className={`
            fixed top-[72px] left-4 right-4 z-40 md:hidden
            rounded-2xl p-6
            border shadow-2xl
            animate-slide-in grain-overlay
            overflow-hidden
            ${isDark 
              ? 'bg-black/90 border-white/8' 
              : 'bg-white/95 border-black/8'
            }
          `}>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`
                    text-base font-medium
                    px-4 py-3 rounded-xl
                    transition-all duration-200
                    ${location.pathname === link.href
                      ? (isDark ? 'bg-white/15 text-white' : 'bg-black/10 text-gray-900')
                      : (isDark ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-gray-700 hover:text-gray-900 hover:bg-black/5')
                    }
                  `}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2">
                <Link to="/contact" onClick={toggleMenu}>
                  <button className="w-full px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95 relative overflow-hidden">
                    <div className={`absolute inset-0 transition-all duration-300 ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
                    <div className={`absolute inset-[1px] rounded-xl transition-all duration-300 ${isDark ? 'bg-black/5' : 'bg-white/10'}`} />
                    <span className={`relative z-10 transition-all duration-300 font-semibold ${isDark ? 'text-gray-900' : 'text-white'}`}>
                      Get Started
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};