// components/OurApproach.tsx - Fully responsive across all devices
import React, { useState, useEffect } from 'react';
import { useTheme } from '../components/ThemeContext';
import { 
  Search, 
  PenTool, 
  Rocket, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  Target
} from 'lucide-react';

export const OurApproach: React.FC = () => {
  const { isDarkMode } = useTheme();
  const isDark = isDarkMode;
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
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

  const steps = [
    {
      number: '01',
      title: 'Analysis',
      subtitle: 'Deep Discovery',
      icon: Search,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      description: 'We dive deep into your business to understand every aspect.',
      details: [
        'Comprehensive business audit',
        'Market research & competitor analysis',
        'Stakeholder interviews',
        'Data collection & KPI baseline'
      ],
      outcome: 'Clear understanding of current state'
    },
    {
      number: '02',
      title: 'Strategy',
      subtitle: 'Blueprint Creation',
      icon: PenTool,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      description: 'We craft a tailored roadmap for your success.',
      details: [
        'Strategic roadmap development',
        'Goal setting & OKR planning',
        'Resource allocation strategy',
        'Risk mitigation planning'
      ],
      outcome: 'Actionable 12-month roadmap'
    },
    {
      number: '03',
      title: 'Execution',
      subtitle: 'Implementation',
      icon: Rocket,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      description: 'We bring strategies to life with precision.',
      details: [
        'Agile project management',
        'Cross-functional team coordination',
        'Technology implementation',
        'Performance tracking setup'
      ],
      outcome: 'Seamless strategy execution'
    },
    {
      number: '04',
      title: 'Growth',
      subtitle: 'Scaling Success',
      icon: TrendingUp,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      description: 'We optimize and scale what works.',
      details: [
        'Continuous optimization',
        'Growth hacking initiatives',
        'Team training & empowerment',
        'Long-term scaling strategy'
      ],
      outcome: 'Sustainable business growth'
    }
  ];

  const stats = [
    { value: '4', label: 'Proven Phases' },
    { value: '12', label: 'Weeks Avg Timeline' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '3.5x', label: 'Avg ROI Delivered' }
  ];

  const handleCardInteraction = (idx: number, isEnter: boolean) => {
    if (!isMobile && !isTablet) {
      setActiveStep(isEnter ? idx : null);
    }
  };

  const handleCardClick = (idx: number) => {
    if (isMobile || isTablet) {
      setExpandedStep(expandedStep === idx ? null : idx);
    }
  };

  const isStepExpanded = (idx: number) => {
    if (isMobile || isTablet) {
      return expandedStep === idx;
    }
    return activeStep === idx;
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
              Our Approach
            </span>
          </div>
          <h2 className={`
            text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4 px-2
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            How We Transform
            <br className="hidden xs:block" />
            <span className="xs:hidden"> </span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Businesses Like Yours
            </span>
          </h2>
          <p className={`
            max-w-2xl mx-auto text-xs xs:text-sm sm:text-base px-4
            ${isDark ? 'text-white/60' : 'text-gray-600'}
          `}>
            A proven methodology that delivers measurable results
          </p>
        </div>

        {/* Cards Grid - Responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 lg:gap-6 items-start">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`
                rounded-xl xs:rounded-2xl p-4 xs:p-5
                border transition-all duration-500 ease-out
                flex flex-col
                ${!isMobile && !isTablet ? 'cursor-pointer' : 'cursor-pointer active:scale-[0.99]'}
                ${isDark 
                  ? 'bg-black/40 border-white/10 md:hover:border-white/20' 
                  : 'bg-gray-50 border-gray-200 md:hover:border-gray-300'
                }
                ${!isMobile && !isTablet ? 'md:hover:scale-[1.02] md:hover:-translate-y-1' : ''}
                ${!isMobile && !isTablet ? 'md:hover:shadow-2xl' : ''}
                ${isStepExpanded(idx) ? 'shadow-xl' : ''}
              `}
              onMouseEnter={() => handleCardInteraction(idx, true)}
              onMouseLeave={() => handleCardInteraction(idx, false)}
              onClick={() => handleCardClick(idx)}
            >
              {/* Number */}
              <div className={`text-[10px] xs:text-xs font-bold ${step.color} mb-1.5 xs:mb-2`}>
                {step.number}
              </div>

              {/* Icon */}
              <div className={`
                inline-flex p-2 xs:p-2.5 rounded-lg xs:rounded-xl mb-2.5 xs:mb-3
                ${step.bgColor}
                transition-all duration-500
              `}>
                <step.icon className={`w-4 h-4 xs:w-5 xs:h-5 ${step.color}`} />
              </div>

              {/* Title */}
              <h3 className={`
                font-bold text-base xs:text-lg mb-0.5 xs:mb-1 
                ${isDark ? 'text-white' : 'text-gray-900'}
              `}>
                {step.title}
              </h3>
              
              {/* Subtitle */}
              <p className={`text-[10px] xs:text-xs mb-2 xs:mb-3 ${step.color}`}>
                {step.subtitle}
              </p>

              {/* Description */}
              <p className={`
                text-xs xs:text-sm mb-2 xs:mb-3 
                ${isDark ? 'text-white/70' : 'text-gray-600'}
              `}>
                {step.description}
              </p>

              {/* Details - Expand on hover/tap */}
              <div className={`
                overflow-hidden transition-all duration-500 ease-out
                ${isStepExpanded(idx) ? 'max-h-96 opacity-100 mt-1 xs:mt-2' : 'max-h-0 opacity-0'}
              `}>
                <div className={`pt-2 xs:pt-3 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                  <div className="space-y-1.5 xs:space-y-2">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-1.5 xs:gap-2">
                        <CheckCircle className={`w-2.5 h-2.5 xs:w-3 xs:h-3 mt-0.5 flex-shrink-0 ${step.color}`} />
                        <span className={`text-[10px] xs:text-xs ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 xs:mt-3 pt-1">
                    <div className="flex items-center gap-1.5 xs:gap-2">
                      <Target className={`w-2.5 h-2.5 xs:w-3 xs:h-3 flex-shrink-0 ${step.color}`} />
                      <span className={`text-[10px] xs:text-xs font-medium ${step.color}`}>
                        {step.outcome}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interaction hint */}
              {!isStepExpanded(idx) && (
                <div className="mt-2 xs:mt-3 pt-1.5 xs:pt-2">
                  <div className={`text-[8px] xs:text-[10px] ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
                    {isMobile || isTablet ? 'Tap to expand →' : 'Hover for details →'}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process Flow Arrows - Visible on desktop only */}
        <div className="hidden lg:flex justify-center gap-4 xl:gap-8 mt-6 xl:mt-8">
          {steps.slice(0, -1).map((_, idx) => (
            <div key={idx} className="w-10 xl:w-12 flex justify-center">
              <ArrowRight className={`w-4 h-4 xl:w-5 xl:h-5 ${isDark ? 'text-white/20' : 'text-gray-300'}`} />
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Flow Indicator */}
        <div className="lg:hidden flex justify-center mt-6 xs:mt-8">
          <div className={`
            inline-flex items-center gap-2 px-4 py-2 rounded-full
            ${isDark ? 'bg-white/5 border border-white/10' : 'bg-gray-100 border border-gray-200'}
          `}>
            <ArrowRight className={`w-3 h-3 ${isDark ? 'text-white/40' : 'text-gray-400'}`} />
            <span className={`text-[10px] xs:text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
              4-Step Process Flow
            </span>
            <ArrowRight className={`w-3 h-3 ${isDark ? 'text-white/40' : 'text-gray-400'}`} />
          </div>
        </div>

        {/* Bottom Stats - Responsive grid */}
        <div className={`
          mt-8 xs:mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 
          p-4 xs:p-5 sm:p-6 rounded-xl xs:rounded-2xl
          border ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'}
        `}>
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className={`
                text-lg xs:text-xl sm:text-2xl font-bold 
                ${isDark ? 'text-white' : 'text-gray-900'}
              `}>
                {stat.value}
              </div>
              <div className={`
                text-[8px] xs:text-[10px] sm:text-xs 
                ${isDark ? 'text-white/50' : 'text-gray-500'}
              `}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 xs:mt-10 sm:mt-12">
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