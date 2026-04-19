// Footer.tsx - Fully responsive across all devices
import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles,
  ChevronRight,
  Check
} from 'lucide-react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();
  const isDark = isDarkMode;
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const services = [
    { name: 'Strategy Consulting', href: '#' },
    { name: 'Digital Transformation', href: '#' },
    { name: 'Brand & Marketing', href: '#' },
    { name: 'Business Scaling', href: '#' },
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: '#0077B5' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: '#1DA1F2' },
    { icon: FaFacebook, href: '#', label: 'Facebook', color: '#1877F2' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: '#E4405F' },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className={`relative poppins ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Grain overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.12'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '180px',
        }} />
      </div>

      {/* Main Footer */}
      <div className="relative z-10 max-w-6xl xl:max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 pt-8 xs:pt-12 sm:pt-16 pb-4 xs:pb-6 sm:pb-8">
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8 mb-8 xs:mb-10 sm:mb-12">
          
          {/* Brand Column */}
          <div className="text-center sm:text-left">
            <div className="flex items-baseline justify-center sm:justify-start gap-1 mb-3 xs:mb-4">
              <span className={`
                font-extrabold tracking-tight 
                text-lg xs:text-xl
                ${isDark ? 'text-white' : 'text-gray-900'}
              `}>
                Yimer
              </span>
              <span className="font-light text-base xs:text-lg tracking-wide text-gray-400">|</span>
              <span className="font-medium text-base xs:text-lg tracking-wide bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Consultancy
              </span>
            </div>
            <p className={`
              text-xs xs:text-sm mb-3 xs:mb-4 leading-relaxed px-4 sm:px-0
              ${isDark ? 'text-white/60' : 'text-gray-600'}
            `}>
              Strategic consulting solutions that drive growth, innovation, and sustainable success.
            </p>
            <div className="flex gap-2 xs:gap-3 justify-center sm:justify-start">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`
                    p-2 xs:p-2.5 rounded-lg transition-all duration-300
                    ${isDark 
                      ? 'bg-white/10 hover:bg-white/20 text-white/70 hover:text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                    }
                    ${!isMobile ? 'hover:scale-110 hover:-translate-y-0.5' : 'active:scale-95'}
                  `}
                  aria-label={social.label}
                >
                  <social.icon className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className={`
              text-base xs:text-lg font-semibold mb-3 xs:mb-4 
              ${isDark ? 'text-white' : 'text-gray-900'}
            `}>
              Quick Links
            </h3>
            <ul className="space-y-1.5 xs:space-y-2 inline-block sm:block">
              {quickLinks.map((link, idx) => (
                <li key={idx} className="text-left">
                  <a
                    href={link.href}
                    className={`
                      inline-flex items-center gap-1 text-xs xs:text-sm
                      transition-all duration-300
                      ${isDark 
                        ? 'text-white/60 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                      }
                      ${!isMobile ? 'hover:gap-2' : 'active:gap-2'}
                    `}
                  >
                    <ChevronRight className="w-3 h-3" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className={`
              text-base xs:text-lg font-semibold mb-3 xs:mb-4 
              ${isDark ? 'text-white' : 'text-gray-900'}
            `}>
              Our Services
            </h3>
            <ul className="space-y-1.5 xs:space-y-2 inline-block sm:block">
              {services.map((service, idx) => (
                <li key={idx} className="text-left">
                  <a
                    href={service.href}
                    className={`
                      inline-flex items-center gap-1 text-xs xs:text-sm
                      transition-all duration-300
                      ${isDark 
                        ? 'text-white/60 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                      }
                      ${!isMobile ? 'hover:gap-2' : 'active:gap-2'}
                    `}
                  >
                    <ChevronRight className="w-3 h-3" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className={`
              text-base xs:text-lg font-semibold mb-3 xs:mb-4 
              ${isDark ? 'text-white' : 'text-gray-900'}
            `}>
              Contact Us
            </h3>
            <ul className="space-y-2 xs:space-y-3 inline-block sm:block">
              <li className="text-left">
                <a
                  href="mailto:hello@yimer.com"
                  className={`
                    flex items-center gap-2 xs:gap-3 text-xs xs:text-sm
                    transition-all duration-300
                    ${isDark 
                      ? 'text-white/60 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                    }
                    ${!isMobile ? 'hover:gap-4' : 'active:gap-4'}
                  `}
                >
                  <Mail className="w-3.5 h-3.5 xs:w-4 xs:h-4 flex-shrink-0" />
                  hello@yimer.com
                </a>
              </li>
              <li className="text-left">
                <a
                  href="tel:+15551234567"
                  className={`
                    flex items-center gap-2 xs:gap-3 text-xs xs:text-sm
                    transition-all duration-300
                    ${isDark 
                      ? 'text-white/60 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                    }
                    ${!isMobile ? 'hover:gap-4' : 'active:gap-4'}
                  `}
                >
                  <Phone className="w-3.5 h-3.5 xs:w-4 xs:h-4 flex-shrink-0" />
                  +1 (555) 123-4567
                </a>
              </li>
              <li className={`
                flex items-start gap-2 xs:gap-3 text-xs xs:text-sm text-left
                ${isDark ? 'text-white/60' : 'text-gray-600'}
              `}>
                <MapPin className="w-3.5 h-3.5 xs:w-4 xs:h-4 flex-shrink-0 mt-0.5" />
                <span>
                  123 Business Ave, Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className={`
          py-4 xs:py-5 sm:py-6 px-4 xs:px-5 sm:px-6 rounded-xl xs:rounded-2xl mb-6 xs:mb-8
          border transition-all duration-300
          ${isDark 
            ? 'bg-white/5 border-white/10' 
            : 'bg-gray-50 border-gray-200'
          }
        `}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3 xs:gap-4">
            <div className="flex items-center gap-2 xs:gap-3 text-center lg:text-left">
              <Sparkles className={`w-4 h-4 xs:w-5 xs:h-5 flex-shrink-0 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              <div>
                <h4 className={`
                  font-semibold text-sm xs:text-base
                  ${isDark ? 'text-white' : 'text-gray-900'}
                `}>
                  Subscribe to our newsletter
                </h4>
                <p className={`
                  text-[10px] xs:text-xs 
                  ${isDark ? 'text-white/50' : 'text-gray-500'}
                `}>
                  Get the latest insights and updates
                </p>
              </div>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full lg:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`
                  flex-1 lg:w-56 xl:w-64 px-3 xs:px-4 py-2 xs:py-2.5 rounded-lg text-xs xs:text-sm
                  border transition-all duration-300
                  ${isDark 
                    ? 'bg-black/50 border-white/20 text-white placeholder:text-white/30 focus:border-blue-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-500'
                  }
                  focus:outline-none focus:ring-1 focus:ring-blue-500
                `}
                required
              />
              <button 
                type="submit"
                className="group relative px-4 xs:px-5 py-2 xs:py-2.5 rounded-lg overflow-hidden text-xs xs:text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div className={`absolute inset-0 transition-all duration-300 ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
                <div className={`absolute inset-[1px] rounded-lg transition-all duration-300 ${isDark ? 'bg-black/5' : 'bg-white/10'}`} />
                <span className={`relative z-10 flex items-center gap-1 transition-all duration-300 ${isDark ? 'text-gray-900' : 'text-white'}`}>
                  {subscribed ? (
                    <>
                      <Check className="w-3 h-3 xs:w-3.5 xs:h-3.5" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`
          pt-4 xs:pt-5 sm:pt-6 border-t text-center
          ${isDark ? 'border-white/10' : 'border-gray-200'}
        `}>
          <div className="flex flex-col xs:flex-row items-center justify-center xs:justify-between gap-2 xs:gap-4">
            <p className={`
              text-[10px] xs:text-xs 
              ${isDark ? 'text-white/40' : 'text-gray-500'}
            `}>
              © {currentYear} Yimer Consultancy. All rights reserved.
            </p>
            <div className="flex gap-3 xs:gap-4">
              <a 
                href="#" 
                className={`
                  text-[10px] xs:text-xs transition-colors
                  ${isDark ? 'text-white/40 hover:text-white/60' : 'text-gray-500 hover:text-gray-700'}
                `}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className={`
                  text-[10px] xs:text-xs transition-colors
                  ${isDark ? 'text-white/40 hover:text-white/60' : 'text-gray-500 hover:text-gray-700'}
                `}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        .poppins {
          font-family: 'Poppins', sans-serif;
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .hover\\:scale-110:active {
            transform: scale(1.1);
          }
          .hover\\:-translate-y-0\\.5:active {
            transform: translateY(-0.125rem);
          }
        }

        /* Smooth transitions */
        .transition-all {
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        /* Responsive grid optimizations */
        @media (max-width: 639px) {
          .grid {
            gap: 1.5rem;
          }
        }

        /* Center align text on mobile */
        @media (max-width: 639px) {
          .text-center-mobile {
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};