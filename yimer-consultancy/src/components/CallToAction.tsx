// CallToAction.tsx - Hover-triggered circle animations
import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import { ArrowRight, ChevronRight, Mail, Phone, Check } from 'lucide-react';

export const CallToAction: React.FC = () => {
  const { isDarkMode } = useTheme();
  const isDark = isDarkMode;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [hoverEmail, setHoverEmail] = useState(false);
  const [hoverPhone, setHoverPhone] = useState(false);

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

  return (
    <section className={`relative py-24 poppins ${isDark ? 'bg-black' : 'bg-white'}`}>
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='${isDark ? '0.12' : '0.06'}'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '180px',
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className={`
              text-sm font-medium px-4 py-1.5 rounded-full
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
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Let's Build Your
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Next Level
            </span>
          </h2>

          {/* Description */}
          <p className={`max-w-2xl mx-auto text-base sm:text-lg mb-10 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            Stop waiting. Start growing. Let's create something exceptional together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="group relative px-8 py-3.5 rounded-lg overflow-hidden text-sm font-semibold transition-all duration-500 ease-out hover:scale-105 active:scale-95">
              <div className={`absolute inset-0 transition-all duration-500 ease-out ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
              <div className={`absolute inset-[1px] rounded-lg transition-all duration-500 ease-out ${isDark ? 'bg-black/5' : 'bg-white/10'}`} />
              <span className={`relative z-10 flex items-center gap-2 transition-all duration-500 ease-out font-semibold ${isDark ? 'text-gray-900' : 'text-white'}`}>
                Start Now
                <ArrowRight className="w-4 h-4 transition-all duration-500 ease-out group-hover:translate-x-1" />
              </span>
            </button>

            <button className={`
              group px-8 py-3.5 rounded-lg text-sm font-semibold
              transition-all duration-500 ease-out hover:scale-105 active:scale-95
              flex items-center gap-2
              ${isDark 
                ? 'bg-white/15 hover:bg-white/25 text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              }
            `}>
              Contact Us
              <ChevronRight className="w-4 h-4 transition-all duration-500 ease-out group-hover:translate-x-1" />
            </button>
          </div>

          {/* Contact options - with hover circle animations */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* Email Circle */}
            <div 
              onMouseEnter={() => setHoverEmail(true)}
              onMouseLeave={() => setHoverEmail(false)}
              onClick={handleCopyEmail}
              className="relative cursor-pointer group"
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
                w-48 px-4 py-3 rounded-full
                transition-all duration-300 ease-out
                ${hoverEmail 
                  ? (isDark ? 'bg-blue-500 text-white' : 'bg-blue-500 text-white')
                  : (isDark ? 'bg-white/10 text-white/70 hover:bg-white/20' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')
                }
                ${hoverEmail ? 'scale-105' : 'scale-100'}
              `}>
                <Mail className={`w-4 h-4 transition-all duration-300 ${hoverEmail ? 'text-white' : ''}`} />
                <span className="text-sm font-medium">
                  hello@yimer.com
                </span>
              </div>

              {/* Copy tooltip */}
              <div className={`
                absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs whitespace-nowrap
                transition-all duration-300 pointer-events-none
                ${copiedEmail ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-900 text-white'}
              `}>
                {copiedEmail ? (
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Copied!
                  </span>
                ) : (
                  'Click to copy'
                )}
              </div>
            </div>

            {/* Phone Circle */}
            <div 
              onMouseEnter={() => setHoverPhone(true)}
              onMouseLeave={() => setHoverPhone(false)}
              onClick={handleCopyPhone}
              className="relative cursor-pointer group"
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
                w-48 px-4 py-3 rounded-full
                transition-all duration-300 ease-out
                ${hoverPhone 
                  ? 'bg-green-500 text-white'
                  : (isDark ? 'bg-white/10 text-white/70 hover:bg-white/20' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')
                }
                ${hoverPhone ? 'scale-105' : 'scale-100'}
              `}>
                <Phone className={`w-4 h-4 transition-all duration-300 ${hoverPhone ? 'text-white' : ''}`} />
                <span className="text-sm font-medium">
                  +1 (555) 123-4567
                </span>
              </div>

              {/* Copy tooltip */}
              <div className={`
                absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs whitespace-nowrap
                transition-all duration-300 pointer-events-none
                ${copiedPhone ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-900 text-white'}
              `}>
                {copiedPhone ? (
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Copied!
                  </span>
                ) : (
                  'Click to copy'
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        @keyframes circle-expand {
          0% {
            transform: scale(0.9);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.1);
            opacity: 0;
          }
        }
        
        @keyframes circle-ripple {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
        
        .animate-circle-expand {
          animation: circle-expand 0.4s ease-out forwards;
        }
        
        .animate-circle-ripple {
          animation: circle-ripple 0.4s ease-out 0.15s forwards;
        }
      `}</style>
    </section>
  );
};