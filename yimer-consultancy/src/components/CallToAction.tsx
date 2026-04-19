// CallToAction.tsx - Fully responsive with enhanced hover animations
import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { ArrowRight, ChevronRight, Mail, Phone, Check } from 'lucide-react';

export const CallToAction: React.FC = () => {
  const { isDarkMode } = useTheme();
  const isDark = isDarkMode;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [hoverEmail, setHoverEmail] = useState(false);
  const [hoverPhone, setHoverPhone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@yimer.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+1 (555) 123-4567');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleEmailInteraction = (hover: boolean) => {
    if (!isMobile) {
      setHoverEmail(hover);
    }
  };

  const handlePhoneInteraction = (hover: boolean) => {
    if (!isMobile) {
      setHoverPhone(hover);
    }
  };

  const handleEmailClick = () => {
    if (isMobile) {
      setHoverEmail(true);
      setTimeout(() => setHoverEmail(false), 400);
    }
    handleCopyEmail();
  };

  const handlePhoneClick = () => {
    if (isMobile) {
      setHoverPhone(true);
      setTimeout(() => setHoverPhone(false), 400);
    }
    handleCopyPhone();
  };

  return (
    <section className={`relative py-12 xs:py-16 sm:py-20 lg:py-24 poppins ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Background */}
      <div className="absolute inset-0 -z-10 transition-colors duration-500">
        <div className={`absolute inset-0 transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
          {isDark && (
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />
          )}
        </div>
      </div>

      {/* Grain overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.12'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '180px',
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-block mb-4 xs:mb-5 sm:mb-6">
            <span className={`
              text-[10px] xs:text-xs sm:text-sm font-medium 
              px-3 xs:px-4 py-1 xs:py-1.5 rounded-full
              transition-all duration-200
              ${isDark 
                ? 'bg-white/10 text-white/80' 
                : 'bg-gray-100 text-gray-700'
              }
            `}>
              Ready to grow?
            </span>
          </div>

          {/* Main heading */}
          <h2 className={`
            text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 xs:mb-5 sm:mb-6 px-2
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            Let's Build Your
            <br className="hidden xs:block" />
            <span className="xs:hidden"> </span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Next Level
            </span>
          </h2>

          {/* Description */}
          <p className={`
            max-w-2xl mx-auto text-xs xs:text-sm sm:text-base lg:text-lg mb-6 xs:mb-8 sm:mb-10 px-4
            ${isDark ? 'text-white/60' : 'text-gray-600'}
          `}>
            Stop waiting. Start growing. Let's create something exceptional together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-2 xs:gap-3 sm:gap-4 mb-8 xs:mb-10 sm:mb-12 px-4">
            <button className="group relative w-full xs:w-auto px-6 xs:px-8 py-3 xs:py-3.5 rounded-lg overflow-hidden text-xs xs:text-sm font-semibold transition-all duration-500 ease-out hover:scale-105 active:scale-95">
              <div className={`absolute inset-0 transition-all duration-500 ease-out ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
              <div className={`absolute inset-[1px] rounded-lg transition-all duration-500 ease-out ${isDark ? 'bg-black/5' : 'bg-white/10'}`} />
              <span className={`relative z-10 flex items-center justify-center gap-2 transition-all duration-500 ease-out font-semibold ${isDark ? 'text-gray-900' : 'text-white'}`}>
                Start Now
                <ArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 transition-all duration-500 ease-out group-hover:translate-x-1" />
              </span>
            </button>

            <button className={`
              w-full xs:w-auto px-6 xs:px-8 py-3 xs:py-3.5 rounded-lg text-xs xs:text-sm font-semibold
              transition-all duration-500 ease-out hover:scale-105 active:scale-95
              flex items-center justify-center gap-2
              ${isDark 
                ? 'bg-white/15 hover:bg-white/25 text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              }
            `}>
              Contact Us
              <ChevronRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 transition-all duration-500 ease-out group-hover:translate-x-1" />
            </button>
          </div>

          {/* Contact options - Responsive with hover animations */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 xs:gap-4 sm:gap-6 lg:gap-8 px-2">
            {/* Email Circle */}
            <div 
              onMouseEnter={() => handleEmailInteraction(true)}
              onMouseLeave={() => handleEmailInteraction(false)}
              onClick={handleEmailClick}
              className="relative cursor-pointer group w-full xs:w-auto"
            >
              {/* Animated circle background - only on hover */}
              {hoverEmail && (
                <>
                  <div className={`
                    absolute inset-0 rounded-full
                    animate-circle-expand
                    ${isDark ? 'bg-blue-500' : 'bg-blue-400'}
                  `} />
                  <div className={`
                    absolute inset-0 rounded-full
                    animate-circle-ripple
                    ${isDark ? 'bg-blue-500' : 'bg-blue-400'}
                  `} />
                </>
              )}
              
              {/* Main circle */}
              <div className={`
                relative flex items-center justify-center gap-2
                w-full sm:w-52 md:w-56 px-4 py-2.5 xs:py-3 rounded-full
                transition-all duration-300 ease-out
                ${hoverEmail 
                  ? (isDark ? 'bg-blue-500 text-white' : 'bg-blue-500 text-white')
                  : (isDark ? 'bg-white/10 text-white/70 hover:bg-white/20' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')
                }
                ${hoverEmail ? 'scale-105' : 'scale-100'}
                ${!isMobile ? '' : 'active:scale-[0.98]'}
              `}>
                <Mail className={`w-3.5 h-3.5 xs:w-4 xs:h-4 transition-all duration-300 ${hoverEmail ? 'text-white' : ''}`} />
                <span className="text-xs xs:text-sm font-medium">
                  hello@yimer.com
                </span>
              </div>

              {/* Copy tooltip */}
              <div className={`
                absolute -top-8 xs:-top-10 left-1/2 -translate-x-1/2 
                px-2 xs:px-3 py-1 xs:py-1.5 rounded text-[10px] xs:text-xs whitespace-nowrap
                transition-all duration-300 pointer-events-none
                ${copiedEmail ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-900 text-white'}
              `}>
                {copiedEmail ? (
                  <span className="flex items-center gap-1">
                    <Check className="w-2.5 h-2.5 xs:w-3 xs:h-3" />
                    Copied!
                  </span>
                ) : (
                  'Click to copy'
                )}
              </div>
            </div>

            {/* Phone Circle */}
            <div 
              onMouseEnter={() => handlePhoneInteraction(true)}
              onMouseLeave={() => handlePhoneInteraction(false)}
              onClick={handlePhoneClick}
              className="relative cursor-pointer group w-full xs:w-auto"
            >
              {/* Animated circle background - only on hover */}
              {hoverPhone && (
                <>
                  <div className={`
                    absolute inset-0 rounded-full
                    animate-circle-expand
                    ${isDark ? 'bg-green-500' : 'bg-green-500'}
                  `} />
                  <div className={`
                    absolute inset-0 rounded-full
                    animate-circle-ripple
                    ${isDark ? 'bg-green-500' : 'bg-green-500'}
                  `} />
                </>
              )}
              
              {/* Main circle */}
              <div className={`
                relative flex items-center justify-center gap-2
                w-full sm:w-52 md:w-56 px-4 py-2.5 xs:py-3 rounded-full
                transition-all duration-300 ease-out
                ${hoverPhone 
                  ? 'bg-green-500 text-white'
                  : (isDark ? 'bg-white/10 text-white/70 hover:bg-white/20' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')
                }
                ${hoverPhone ? 'scale-105' : 'scale-100'}
                ${!isMobile ? '' : 'active:scale-[0.98]'}
              `}>
                <Phone className={`w-3.5 h-3.5 xs:w-4 xs:h-4 transition-all duration-300 ${hoverPhone ? 'text-white' : ''}`} />
                <span className="text-xs xs:text-sm font-medium">
                  +1 (555) 123-4567
                </span>
              </div>

              {/* Copy tooltip */}
              <div className={`
                absolute -top-8 xs:-top-10 left-1/2 -translate-x-1/2 
                px-2 xs:px-3 py-1 xs:py-1.5 rounded text-[10px] xs:text-xs whitespace-nowrap
                transition-all duration-300 pointer-events-none
                ${copiedPhone ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-900 text-white'}
              `}>
                {copiedPhone ? (
                  <span className="flex items-center gap-1">
                    <Check className="w-2.5 h-2.5 xs:w-3 xs:h-3" />
                    Copied!
                  </span>
                ) : (
                  'Click to copy'
                )}
              </div>
            </div>
          </div>

          {/* Trust indicator */}
          <div className="mt-8 xs:mt-10 sm:mt-12">
            <p className={`text-[9px] xs:text-[10px] sm:text-xs ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
              ✓ Free consultation • No commitment • Cancel anytime
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        .poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        @keyframes circle-expand {
          0% {
            transform: scale(0.9);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.15);
            opacity: 0;
          }
        }
        
        @keyframes circle-ripple {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
        
        .animate-circle-expand {
          animation: circle-expand 0.5s ease-out forwards;
        }
        
        .animate-circle-ripple {
          animation: circle-ripple 0.5s ease-out 0.15s forwards;
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .cursor-pointer {
            -webkit-tap-highlight-color: transparent;
          }
        }

        /* Smooth transitions */
        .transition-all {
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        /* Responsive contact circles */
        @media (max-width: 639px) {
          .w-full {
            max-width: 280px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
};