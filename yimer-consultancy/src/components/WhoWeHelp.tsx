// WhoWeHelp.tsx - Perfectly responsive across all devices
import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { Trophy, Rocket, Building2, CheckCircle, ArrowRight } from 'lucide-react';

export const WhoWeHelp: React.FC = () => {
  const { isDarkMode } = useTheme();
  const isDark = isDarkMode;
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const categories = [
    {
      title: 'Athletes',
      icon: Trophy,
      description: 'Elite performance & career management',
      color: 'text-amber-500',
      bgIcon: 'bg-amber-500/10',
      services: [
        'Performance optimization',
        'Personal branding',
        'Career management',
        'Sponsorship deals'
      ],
      stats: '150+ athletes guided',
      metric: '3x brand value'
    },
    {
      title: 'Startups',
      icon: Rocket,
      description: 'From idea to market leadership',
      color: 'text-blue-500',
      bgIcon: 'bg-blue-500/10',
      services: [
        'Strategic planning',
        'Fundraising support',
        'Product scaling',
        'Market entry'
      ],
      stats: '$500M+ raised',
      metric: '95% success rate'
    },
    {
      title: 'Businesses',
      icon: Building2,
      description: 'Digital transformation & growth',
      color: 'text-purple-500',
      bgIcon: 'bg-purple-500/10',
      services: [
        'Digital transformation',
        'Operations optimization',
        'Growth strategy',
        'Change management'
      ],
      stats: '200+ enterprises',
      metric: '156% avg. ROI'
    }
  ];

  const handleCardInteraction = (idx: number) => {
    if (isMobile || isTablet) {
      setExpandedCard(expandedCard === idx ? null : idx);
    } else {
      setHoveredCard(idx);
    }
  };

  const handleCardLeave = () => {
    if (!isMobile && !isTablet) {
      setHoveredCard(null);
    }
  };

  const isCardExpanded = (idx: number) => {
    if (isMobile || isTablet) {
      return expandedCard === idx;
    }
    return hoveredCard === idx;
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
              Who We Help
            </span>
          </div>
          <h2 className={`
            text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4 px-2
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            Empowering Success Across
            <br className="hidden xs:block" />
            <span className="xs:hidden"> </span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Every Sector
            </span>
          </h2>
          <p className={`
            max-w-2xl mx-auto text-xs xs:text-sm sm:text-base lg:text-lg px-4
            ${isDark ? 'text-white/60' : 'text-gray-600'}
          `}>
            We tailor our expertise to meet the unique challenges of each industry
          </p>
        </div>

        {/* Cards Grid - Responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
          {categories.map((category, idx) => (
            <div
              key={idx}
              onMouseEnter={() => !isMobile && !isTablet && setHoveredCard(idx)}
              onMouseLeave={handleCardLeave}
              onClick={() => handleCardInteraction(idx)}
              className={`
                transition-all duration-500 ease-out
                ${!isMobile && !isTablet ? 'cursor-pointer' : 'cursor-pointer active:scale-[0.99]'}
              `}
            >
              {/* Card */}
              <div className={`
                relative rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8
                border shadow-lg
                transition-all duration-500 ease-out
                grain-overlay
                ${isCardExpanded(idx) 
                  ? `scale-[1.01] sm:scale-[1.02] -translate-y-0.5 sm:-translate-y-1 shadow-xl sm:shadow-2xl` 
                  : 'scale-100 translate-y-0'
                }
                ${isDark 
                  ? `bg-black/60 border-white/8 ${!isMobile && !isTablet ? 'md:hover:bg-black/70' : ''}` 
                  : `bg-white/80 border-gray-200 ${!isMobile && !isTablet ? 'md:hover:bg-white md:hover:shadow-xl' : ''}`
                }
                ${isCardExpanded(idx) 
                  ? (isDark ? 'bg-black/70 border-white/20' : 'bg-white border-gray-300') 
                  : ''
                }
              `}>
                {/* Icon */}
                <div className={`
                  inline-flex p-2.5 xs:p-3 rounded-lg xs:rounded-xl mb-3 xs:mb-4 sm:mb-5
                  ${category.bgIcon}
                  transition-all duration-500 ease-out
                  ${isCardExpanded(idx) ? 'scale-110' : 'scale-100'}
                `}>
                  <category.icon className={`
                    w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 
                    ${category.color} transition-all duration-500 ease-out
                  `} />
                </div>

                {/* Title */}
                <h3 className={`
                  text-base xs:text-lg sm:text-xl font-bold mb-1.5 xs:mb-2 
                  transition-all duration-500 ease-out 
                  ${isDark ? 'text-white' : 'text-gray-900'}
                `}>
                  {category.title}
                </h3>
                
                {/* Description */}
                <p className={`
                  text-xs xs:text-sm mb-3 xs:mb-4 
                  transition-all duration-500 ease-out 
                  ${isDark ? 'text-white/60' : 'text-gray-600'}
                `}>
                  {category.description}
                </p>

                {/* Services List - Smooth Expand/Collapse */}
                <div className={`
                  overflow-hidden transition-all duration-500 ease-out
                  ${isCardExpanded(idx) ? 'max-h-96 opacity-100 mb-4 xs:mb-5' : 'max-h-0 opacity-0'}
                `}>
                  <div className={`
                    pt-3 border-t transition-all duration-500 ease-out 
                    ${isDark ? 'border-white/10' : 'border-gray-100'}
                  `}>
                    <div className="space-y-2 xs:space-y-2.5">
                      {category.services.map((service, i) => (
                        <div 
                          key={i} 
                          className="flex items-center gap-2 xs:gap-2.5 transition-all duration-300 ease-out"
                          style={{ 
                            transitionDelay: isCardExpanded(idx) ? `${i * 40}ms` : '0ms'
                          }}
                        >
                          <CheckCircle className={`
                            w-3 h-3 xs:w-3.5 xs:h-3.5 ${category.color} 
                            transition-all duration-300 ease-out
                            ${isCardExpanded(idx) ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
                          `} />
                          <span className={`
                            text-[10px] xs:text-xs transition-all duration-300 ease-out 
                            ${isDark ? 'text-white/70' : 'text-gray-700'} 
                            ${isCardExpanded(idx) ? 'translate-x-0 opacity-100' : '-translate-x-1 opacity-0'}
                          `}>
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats Section */}
                <div className={`
                  flex flex-col xs:flex-row items-start xs:items-center 
                  justify-between gap-3 xs:gap-4 pt-3 xs:pt-4
                  border-t transition-all duration-500 ease-out
                  ${isDark ? 'border-white/10' : 'border-gray-100'}
                  ${isCardExpanded(idx) 
                    ? (isDark ? 'border-white/20' : 'border-gray-200') 
                    : ''
                  }
                `}>
                  <div className="transition-all duration-500 ease-out">
                    <div className={`
                      text-[9px] xs:text-xs transition-all duration-500 ease-out 
                      ${isDark ? 'text-white/50' : 'text-gray-500'}
                    `}>
                      {category.stats}
                    </div>
                    <div className={`
                      text-xs xs:text-sm font-semibold transition-all duration-500 ease-out 
                      ${isDark ? 'text-white' : 'text-gray-900'}
                    `}>
                      {category.metric}
                    </div>
                  </div>
                  <div className={`
                    flex items-center gap-1 text-xs xs:text-sm font-medium
                    transition-all duration-500 ease-out w-full xs:w-auto
                    justify-center xs:justify-start
                    ${isCardExpanded(idx) ? 'translate-x-1' : 'translate-x-0'}
                    ${category.color}
                  `}>
                    Learn more
                    <ArrowRight className={`
                      w-3 h-3 xs:w-3.5 xs:h-3.5 transition-all duration-500 ease-out 
                      ${isCardExpanded(idx) ? 'translate-x-1' : 'translate-x-0'}
                    `} />
                  </div>
                </div>
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
              View All Success Stories
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

        /* Hardware acceleration for smooth animations */
        .transition-all {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
          will-change: transform, opacity;
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

        /* Smooth max-height transitions */
        .max-h-0 {
          max-height: 0;
        }
        
        .max-h-96 {
          max-height: 24rem;
        }

        /* Prevent content layout shift */
        .grain-overlay * {
          transform: translateZ(0);
        }
      `}</style>
    </section>
  );
};