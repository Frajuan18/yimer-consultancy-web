// WhyChooseUs.tsx - Fully responsive across all devices
import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { 
  Award, 
  TrendingUp, 
  Globe, 
  Users, 
  Star,
  Headphones,
  ArrowRight
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { isDarkMode } = useTheme();
  const isDark = isDarkMode;
  const [isMobile, setIsMobile] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const reasons = [
    {
      title: 'Industry Experience',
      icon: Award,
      description: '10+ years of proven expertise',
      color: 'text-amber-500',
      bgIcon: 'bg-amber-500/10',
      details: 'Deep domain knowledge across multiple industries with a track record of excellence'
    },
    {
      title: 'Measurable Results',
      icon: TrendingUp,
      description: 'Data-driven outcomes',
      color: 'text-green-500',
      bgIcon: 'bg-green-500/10',
      details: 'We focus on delivering tangible ROI and measurable business impact'
    },
    {
      title: 'Global Mindset',
      icon: Globe,
      description: 'International perspective',
      color: 'text-blue-500',
      bgIcon: 'bg-blue-500/10',
      details: 'Cross-cultural expertise with a network spanning 20+ countries'
    },
    {
      title: 'Tailored Solutions',
      icon: Users,
      description: 'Custom approach for every client',
      color: 'text-purple-500',
      bgIcon: 'bg-purple-500/10',
      details: 'No one-size-fits-all. We build strategies specific to your unique needs'
    },
    {
      title: '24/7 Support',
      icon: Headphones,
      description: 'Round-the-clock assistance',
      color: 'text-cyan-500',
      bgIcon: 'bg-cyan-500/10',
      details: 'Dedicated team available whenever you need us'
    },
    {
      title: 'Proven Track Record',
      icon: Star,
      description: '500+ successful projects',
      color: 'text-pink-500',
      bgIcon: 'bg-pink-500/10',
      details: 'Trusted by industry leaders with a 98% client satisfaction rate'
    }
  ];

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '500+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '20+', label: 'Countries Served' },
  ];

  const handleCardClick = (idx: number) => {
    if (isMobile) {
      setExpandedCard(expandedCard === idx ? null : idx);
    }
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

      <div className="relative z-10 max-w-6xl xl:max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          <div className="inline-block mb-3 xs:mb-4">
            <span className={`
              text-[10px] xs:text-xs sm:text-sm font-medium 
              px-3 xs:px-4 py-1 xs:py-1.5 rounded-full
              transition-all duration-200
              ${isDark 
                ? 'bg-white/10 text-white/80' 
                : 'bg-gray-100 text-gray-700'
              }
            `}>
              Why Choose Us
            </span>
          </div>
          <h2 className={`
            text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4 px-2
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            The Partner You Can
            <br className="hidden xs:block" />
            <span className="xs:hidden"> </span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Trust for Success
            </span>
          </h2>
          <p className={`
            max-w-2xl mx-auto text-xs xs:text-sm sm:text-base lg:text-lg px-4
            ${isDark ? 'text-white/60' : 'text-gray-600'}
          `}>
            What sets us apart and makes us the right choice for your business
          </p>
        </div>

        {/* Stats Bar - Fully responsive */}
        <div className={`
          grid grid-cols-2 sm:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 mb-8 xs:mb-12 sm:mb-16 
          p-3 xs:p-4 sm:p-6 rounded-xl xs:rounded-2xl
          border ${isDark ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'}
        `}>
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className={`
                text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold 
                ${isDark ? 'text-white' : 'text-gray-900'}
              `}>
                {stat.value}
              </div>
              <div className={`
                text-[8px] xs:text-[10px] sm:text-xs md:text-sm 
                ${isDark ? 'text-white/50' : 'text-gray-500'}
              `}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid - Responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 lg:gap-6">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              onClick={() => handleCardClick(idx)}
              className={`
                group relative rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6
                border transition-all duration-500 ease-out
                grain-overlay
                ${!isMobile ? 'cursor-pointer' : 'cursor-pointer active:scale-[0.99]'}
                ${isDark 
                  ? 'bg-black/60 border-white/8 md:hover:bg-black/70 md:hover:border-white/20' 
                  : 'bg-white/80 border-gray-200 md:hover:bg-white md:hover:border-gray-300'
                }
                ${!isMobile ? 'md:hover:scale-[1.02] md:hover:-translate-y-1' : ''}
                ${!isMobile ? 'md:hover:shadow-2xl' : ''}
                ${expandedCard === idx ? 'shadow-xl scale-[1.01]' : ''}
              `}
            >
              {/* Decorative gradient on hover/expand */}
              <div className={`
                absolute inset-0 rounded-xl xs:rounded-2xl opacity-0 transition-opacity duration-500 ease-out
                bg-gradient-to-br ${reason.color.replace('text-', 'from-')}/5 to-transparent
                pointer-events-none
                ${!isMobile ? 'md:group-hover:opacity-100' : ''}
                ${expandedCard === idx ? 'opacity-100' : ''}
              `} />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`
                  inline-flex p-2.5 xs:p-3 rounded-lg xs:rounded-xl mb-3 xs:mb-4
                  ${reason.bgIcon}
                  transition-all duration-500 ease-out
                  ${!isMobile ? 'md:group-hover:scale-110 md:group-hover:rotate-3' : ''}
                  ${expandedCard === idx ? 'scale-110 rotate-3' : ''}
                `}>
                  <reason.icon className={`w-5 h-5 xs:w-6 xs:h-6 ${reason.color}`} />
                </div>

                {/* Title */}
                <h3 className={`
                  text-base xs:text-lg font-bold mb-1.5 xs:mb-2 
                  transition-all duration-500 ease-out 
                  ${isDark ? 'text-white' : 'text-gray-900'}
                `}>
                  {reason.title}
                </h3>

                {/* Description */}
                <p className={`
                  text-xs xs:text-sm mb-2 xs:mb-3 
                  transition-all duration-500 ease-out 
                  ${isDark ? 'text-white/60' : 'text-gray-600'}
                `}>
                  {reason.description}
                </p>

                {/* Details - appears on hover/expand */}
                <div className={`
                  overflow-hidden transition-all duration-500 ease-out
                  ${!isMobile 
                    ? 'max-h-0 opacity-0 md:group-hover:max-h-24 md:group-hover:opacity-100' 
                    : expandedCard === idx 
                      ? 'max-h-24 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }
                `}>
                  <p className={`
                    text-[10px] xs:text-xs pt-2 xs:pt-3 
                    ${isDark ? 'text-white/50' : 'text-gray-500'}
                  `}>
                    {reason.details}
                  </p>
                </div>

                {/* Mobile expand indicator */}
                {isMobile && (
                  <div className={`
                    mt-3 pt-2 border-t transition-all duration-300
                    ${isDark ? 'border-white/10' : 'border-gray-200'}
                    ${expandedCard === idx ? 'opacity-100' : 'opacity-0'}
                  `}>
                    <p className={`text-[9px] ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                      Tap to collapse
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 xs:mt-12 sm:mt-16">
          <button className="group relative px-6 xs:px-8 py-2.5 xs:py-3 rounded-lg overflow-hidden text-xs xs:text-sm font-semibold transition-all duration-500 ease-out hover:scale-105 active:scale-95">
            <div className={`absolute inset-0 transition-all duration-500 ease-out ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
            <div className={`absolute inset-[1px] rounded-lg transition-all duration-500 ease-out ${isDark ? 'bg-black/5' : 'bg-white/10'}`} />
            <span className={`relative z-10 flex items-center gap-2 transition-all duration-500 ease-out font-semibold ${isDark ? 'text-gray-900' : 'text-white'}`}>
              Start Your Journey
              <ArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 transition-all duration-500 ease-out group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        .poppins {
          font-family: 'Poppins', sans-serif;
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

        /* Responsive grid optimizations */
        @media (max-width: 639px) {
          .grid {
            gap: 0.75rem;
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .grid {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};