// Footer.tsx - Using react-icons for social icons
import React from 'react';
import { useTheme } from './ThemeContext';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();
  const isDark = isDarkMode;
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className={`relative poppins ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Grain overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='${isDark ? '0.12' : '0.06'}'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '180px',
        }} />
      </div>

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-baseline gap-1 mb-4">
              <span className={`font-extrabold text-xl tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Yimer
              </span>
              <span className="font-light text-lg tracking-wide text-gray-400">|</span>
              <span className="font-medium text-lg tracking-wide bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Consultancy
              </span>
            </div>
            <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
              Strategic consulting solutions that drive growth, innovation, and sustainable success.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`
                    p-2 rounded-lg transition-all duration-300
                    ${isDark 
                      ? 'bg-white/10 hover:bg-white/20 text-white/70 hover:text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                    }
                    hover:scale-110 hover:-translate-y-0.5
                  `}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className={`
                      inline-flex items-center gap-1 text-sm
                      transition-all duration-300
                      ${isDark 
                        ? 'text-white/60 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                      }
                      hover:gap-2
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
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href={service.href}
                    className={`
                      inline-flex items-center gap-1 text-sm
                      transition-all duration-300
                      ${isDark 
                        ? 'text-white/60 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                      }
                      hover:gap-2
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
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@yimer.com"
                  className={`
                    flex items-center gap-3 text-sm
                    transition-all duration-300
                    ${isDark 
                      ? 'text-white/60 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                    }
                    hover:gap-4
                  `}
                >
                  <Mail className="w-4 h-4" />
                  hello@yimer.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className={`
                    flex items-center gap-3 text-sm
                    transition-all duration-300
                    ${isDark 
                      ? 'text-white/60 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                    }
                    hover:gap-4
                  `}
                >
                  <Phone className="w-4 h-4" />
                  +1 (555) 123-4567
                </a>
              </li>
              <li className={`flex items-center gap-3 text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                <MapPin className="w-4 h-4 flex-shrink-0" />
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
          py-6 px-6 rounded-2xl mb-8
          border transition-all duration-300
          ${isDark 
            ? 'bg-white/5 border-white/10' 
            : 'bg-gray-50 border-gray-200'
          }
        `}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              <div>
                <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Subscribe to our newsletter
                </h4>
                <p className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                  Get the latest insights and updates
                </p>
              </div>
            </div>
            <div className="flex w-full sm:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className={`
                  flex-1 sm:w-64 px-4 py-2 rounded-lg text-sm
                  border transition-all duration-300
                  ${isDark 
                    ? 'bg-black/50 border-white/20 text-white placeholder:text-white/30 focus:border-blue-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-500'
                  }
                  focus:outline-none focus:ring-1 focus:ring-blue-500
                `}
              />
              <button className="group relative px-4 py-2 rounded-lg overflow-hidden text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95">
                <div className={`absolute inset-0 transition-all duration-300 ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
                <div className={`absolute inset-[1px] rounded-lg transition-all duration-300 ${isDark ? 'bg-black/5' : 'bg-white/10'}`} />
                <span className={`relative z-10 flex items-center gap-1 transition-all duration-300 text-xs ${isDark ? 'text-gray-900' : 'text-white'}`}>
                  Subscribe
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`
          pt-6 border-t text-center
          ${isDark ? 'border-white/10' : 'border-gray-200'}
        `}>
          <p className={`text-xs ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
            © {currentYear} Yimer Consultancy. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        .poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </footer>
  );
};