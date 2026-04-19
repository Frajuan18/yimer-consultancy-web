// WhatWeDo.tsx - Perfectly responsive with smooth card hover effects
import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { 
  Target, 
  Cloud, 
  Megaphone, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle,
  Rocket
} from 'lucide-react';

export const WhatWeDo: React.FC = () => {
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

  const services = [
    {
      title: 'Strategy Consulting',
      icon: Target,
      description: 'Data-driven strategies for sustainable growth',
      color: 'text-blue-500',
      bgIcon: 'bg-blue-500/10',
      hoverBorder: 'group-hover:border-blue-500/30',
      features: [
        'Market analysis & positioning',
        'Competitive intelligence',
        'Strategic roadmapping',
        'M&A advisory'
      ],
      outcome: '3.5x faster growth'
    },
    {
      title: 'Digital Transformation',
      icon: Cloud,
      description: 'Future-proof your business with modern solutions',
      color: 'text-cyan-500',
      bgIcon: 'bg-cyan-500/10',
      hoverBorder: 'group-hover:border-cyan-500/30',
      features: [
        'Cloud migration',
        'Process automation',
        'Tech stack optimization',
        'Digital workforce training'
      ],
      outcome: '40% efficiency gain'
    },
    {
      title: 'Brand & Marketing',
      icon: Megaphone,
      description: 'Build a brand that stands out and converts',
      color: 'text-pink-500',
      bgIcon: 'bg-pink-500/10',
      hoverBorder: 'group-hover:border-pink-500/30',
      features: [
        'Brand identity development',
        'Digital marketing strategy',
        'Content marketing',
        'Social media management'
      ],
      outcome: '200% brand awareness'
    },
    {
      title: 'Business Scaling',
      icon: TrendingUp,
      description: 'Scale operations without breaking what works',
      color: 'text-purple-500',
      bgIcon: 'bg-purple-500/10',
      hoverBorder: 'group-hover:border-purple-500/30',
      features: [
        'Operational scaling',
        'Team expansion',
        'New market entry',
        'Revenue optimization'
      ],
      outcome: '156% revenue growth'
    }
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
              What We Do
            </span>
          </div>
          <h2 className={`
            text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4 px-2
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            Comprehensive Solutions for
            <br className="hidden xs:block" />
            <span className="xs:hidden"> </span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Modern Business Challenges
            </span>
          </h2>
          <p className={`
            max-w-2xl mx-auto text-xs xs:text-sm sm:text-base lg:text-lg px-4
            ${isDark ? 'text-white/60' : 'text-gray-600'}
          `}>
            End-to-end consulting services designed to drive real results
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
          {services.map((service, idx) => (
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
                ${expandedCard === idx ? 'shadow-xl' : ''}
              `}
            >
              {/* Decorative gradient on hover */}
              <div className={`
                absolute inset-0 rounded-xl xs:rounded-2xl opacity-0 
                ${!isMobile ? 'md:group-hover:opacity-100' : ''}
                ${expandedCard === idx ? 'opacity-100' : ''}
                transition-opacity duration-500 ease-out
                bg-gradient-to-br ${service.color.replace('text-', 'from-')}/5 to-transparent
                pointer-events-none
              `} />

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start gap-3 xs:gap-4 mb-4 xs:mb-5">
                  <div className={`
                    p-2 xs:p-2.5 rounded-lg xs:rounded-xl transition-all duration-500 ease-out
                    ${service.bgIcon}
                    ${!isMobile ? 'md:group-hover:scale-110 md:group-hover:rotate-3' : ''}
                    ${expandedCard === idx ? 'scale-110 rotate-3' : ''}
                  `}>
                    <service.icon className={`
                      w-5 h-5 xs:w-6 xs:h-6 ${service.color} 
                      transition-all duration-500 ease-out
                    `} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`
                      text-base xs:text-lg sm:text-xl font-bold mb-1 
                      transition-all duration-500 ease-out 
                      ${isDark ? 'text-white' : 'text-gray-900'}
                    `}>
                      {service.title}
                    </h3>
                    <p className={`
                      text-xs xs:text-sm transition-all duration-500 ease-out
                      ${isDark ? 'text-white/60' : 'text-gray-600'}
                    `}>
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 xs:space-y-2.5 mb-5 xs:mb-6">
                  {service.features.map((feature, i) => (
                    <div 
                      key={i} 
                      className={`
                        flex items-center gap-2 xs:gap-2.5 
                        transition-all duration-300 ease-out
                        ${!isMobile ? 'md:group-hover:translate-x-1' : ''}
                        ${expandedCard === idx ? 'translate-x-1' : ''}
                      `}
                      style={{ transitionDelay: `${i * 30}ms` }}
                    >
                      <CheckCircle className={`
                        w-3 h-3 xs:w-3.5 xs:h-3.5 ${service.color} 
                        transition-all duration-300 ease-out
                      `} />
                      <span className={`
                        text-xs xs:text-sm transition-all duration-300 ease-out
                        ${isDark ? 'text-white/70' : 'text-gray-700'}
                      `}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Outcome & CTA */}
                <div className={`
                  flex flex-col xs:flex-row items-start xs:items-center 
                  justify-between gap-3 xs:gap-4 pt-3 xs:pt-4
                  border-t transition-all duration-500 ease-out
                  ${isDark 
                    ? 'border-white/10 md:group-hover:border-white/20' 
                    : 'border-gray-100 md:group-hover:border-gray-200'
                  }
                  ${expandedCard === idx 
                    ? (isDark ? 'border-white/20' : 'border-gray-200') 
                    : ''
                  }
                `}>
                  <div className="flex items-center gap-2">
                    <Rocket className={`
                      w-3.5 h-3.5 xs:w-4 xs:h-4 ${service.color} 
                      transition-all duration-500 ease-out
                      ${!isMobile ? 'md:group-hover:scale-110' : ''}
                      ${expandedCard === idx ? 'scale-110' : ''}
                    `} />
                    <div>
                      <div className={`
                        text-[10px] xs:text-xs transition-all duration-500 ease-out
                        ${isDark ? 'text-white/50' : 'text-gray-500'}
                      `}>
                        Expected outcome
                      </div>
                      <div className={`
                        text-xs xs:text-sm font-semibold transition-all duration-500 ease-out
                        ${isDark ? 'text-white' : 'text-gray-900'}
                      `}>
                        {service.outcome}
                      </div>
                    </div>
                  </div>
                  <button className={`
                    flex items-center gap-1 text-xs xs:text-sm font-medium
                    transition-all duration-500 ease-out w-full xs:w-auto
                    justify-center xs:justify-start
                    ${service.color}
                    ${!isMobile ? 'md:group-hover:gap-2 md:group-hover:translate-x-1' : ''}
                    ${expandedCard === idx ? 'gap-2 translate-x-1' : ''}
                  `}>
                    Learn more
                    <ArrowRight className={`
                      w-3 h-3 xs:w-3.5 xs:h-3.5 
                      transition-all duration-500 ease-out
                      ${!isMobile ? 'md:group-hover:translate-x-1' : ''}
                      ${expandedCard === idx ? 'translate-x-1' : ''}
                    `} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 xs:mt-10 sm:mt-12">
          <button className="group relative px-6 xs:px-8 py-2.5 xs:py-3 rounded-lg overflow-hidden text-xs xs:text-sm font-semibold transition-all duration-500 ease-out hover:scale-105 active:scale-95">
            <div className={`absolute inset-0 transition-all duration-500 ease-out ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
            <div className={`absolute inset-[1px] rounded-lg transition-all duration-500 ease-out ${isDark ? 'bg-black/5' : 'bg-white/10'}`} />
            <span className={`relative z-10 flex items-center gap-2 transition-all duration-500 ease-out font-semibold ${isDark ? 'text-gray-900' : 'text-white'}`}>
              Explore All Services
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
          .md\\:hover\\:scale-\\[1\\.02\\],
          .md\\:hover\\:-translate-y-1 {
            transform: none;
          }
        }

        /* Smooth card transitions */
        .group {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }

        /* Prevent content shift on hover */
        .group * {
          transform: translateZ(0);
        }

        /* Mobile tap highlight removal */
        .cursor-pointer {
          -webkit-tap-highlight-color: transparent;
        }

        /* Responsive card grid optimizations */
        @media (max-width: 767px) {
          .grid {
            gap: 0.75rem;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .grid {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};