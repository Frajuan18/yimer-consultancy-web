// components/BusinessConsulting.tsx - Fully responsive across all devices
import React, { useState, useEffect } from 'react';
import { useTheme } from '../components/ThemeContext';
import { 
  ArrowRight, 
  Building2, 
  Settings, 
  TrendingUp, 
  Megaphone, 
  CheckCircle,
  Users,
  BarChart,
  Award,
  Zap,
  Globe
} from 'lucide-react';

export const BusinessConsulting: React.FC = () => {
  const { isDarkMode } = useTheme();
  const isDark = isDarkMode;
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [expandedService, setExpandedService] = useState<number | null>(null);
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

  const services = [
    {
      title: 'Digital Transformation',
      icon: Zap,
      description: 'Modernize your business for the digital age',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      features: [
        'Legacy system modernization',
        'Cloud migration strategy',
        'AI & automation integration',
        'Digital workforce training'
      ],
      outcome: 'Future-proof operations',
      metric: '40% efficiency increase'
    },
    {
      title: 'Operations Optimization',
      icon: Settings,
      description: 'Streamline processes for maximum efficiency',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      features: [
        'Process mapping & redesign',
        'Supply chain optimization',
        'Quality management systems',
        'Cost reduction strategies'
      ],
      outcome: 'Leaner operations',
      metric: '30% cost reduction'
    },
    {
      title: 'Growth Strategy',
      icon: TrendingUp,
      description: 'Scale your business sustainably',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      features: [
        'Market expansion planning',
        'Revenue diversification',
        'M&A strategy',
        'Strategic partnerships'
      ],
      outcome: 'Accelerated growth',
      metric: '3.5x revenue growth'
    },
    {
      title: 'Marketing Systems',
      icon: Megaphone,
      description: 'Build scalable marketing engines',
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      features: [
        'Marketing automation',
        'CRM implementation',
        'Lead generation systems',
        'Performance analytics'
      ],
      outcome: 'Predictable revenue',
      metric: '200% ROI on marketing'
    }
  ];

  const stats = [
    { value: '200+', label: 'Businesses Transformed', icon: Building2 },
    { value: '$2B+', label: 'Client Revenue Generated', icon: BarChart },
    { value: '94%', label: 'Client Retention', icon: Users },
    { value: '156%', label: 'Avg. ROI', icon: TrendingUp },
  ];

  const industries = [
    'Retail & E-commerce',
    'Manufacturing',
    'Financial Services',
    'Healthcare',
    'Technology',
    'Professional Services'
  ];

  const handleCardInteraction = (idx: number, isEnter: boolean) => {
    if (!isMobile && !isTablet) {
      setHoveredService(isEnter ? idx : null);
    }
  };

  const handleCardClick = (idx: number) => {
    if (isMobile || isTablet) {
      setExpandedService(expandedService === idx ? null : idx);
    }
  };

  const isServiceExpanded = (idx: number) => {
    if (isMobile || isTablet) {
      return expandedService === idx;
    }
    return hoveredService === idx;
  };

  return (
    <section className={`relative py-12 xs:py-16 sm:py-20 poppins ${isDark ? 'bg-black' : 'bg-white'}`}>
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
        <div className="text-center mb-8 xs:mb-10 sm:mb-12">
          <div className="inline-block mb-2 xs:mb-3">
            <div className={`
              inline-flex items-center gap-1 xs:gap-1.5 px-2.5 xs:px-3 py-0.5 xs:py-1 rounded-full
              text-[10px] xs:text-xs font-medium
              ${isDark 
                ? 'bg-white/10 text-white/80' 
                : 'bg-gray-100 text-gray-700'
              }
            `}>
              <Building2 className="w-2.5 h-2.5 xs:w-3 xs:h-3" />
              Business Consulting
            </div>
          </div>
          <h2 className={`
            text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-2 xs:mb-3 px-2
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            Transform Your Enterprise
            <br className="hidden xs:block" />
            <span className="xs:hidden"> </span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              For the Modern Era
            </span>
          </h2>
          <p className={`
            max-w-2xl mx-auto text-xs xs:text-sm sm:text-base px-4
            ${isDark ? 'text-white/60' : 'text-gray-600'}
          `}>
            End-to-end consulting solutions for established businesses ready to evolve
          </p>
        </div>

        {/* Services Grid - Responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 mb-8 xs:mb-10 sm:mb-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`
                group relative rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-5
                border transition-all duration-500 ease-out
                ${!isMobile && !isTablet ? 'cursor-pointer' : 'cursor-pointer active:scale-[0.99]'}
                ${isDark 
                  ? 'bg-black/40 border-white/10 md:hover:border-white/20' 
                  : 'bg-gray-50 border-gray-200 md:hover:border-gray-300'
                }
                ${!isMobile && !isTablet ? 'md:hover:scale-[1.02] md:hover:-translate-y-1' : ''}
                ${!isMobile && !isTablet ? 'md:hover:shadow-xl' : ''}
                ${isServiceExpanded(idx) ? 'shadow-lg' : ''}
              `}
              onMouseEnter={() => handleCardInteraction(idx, true)}
              onMouseLeave={() => handleCardInteraction(idx, false)}
              onClick={() => handleCardClick(idx)}
            >
              {/* Icon */}
              <div className={`
                inline-flex p-2 xs:p-2.5 rounded-lg xs:rounded-xl mb-2 xs:mb-3
                ${service.bgColor}
                transition-all duration-500
                ${!isMobile && !isTablet ? 'md:group-hover:scale-110' : ''}
              `}>
                <service.icon className={`w-4 h-4 xs:w-5 xs:h-5 ${service.color}`} />
              </div>

              {/* Title */}
              <h3 className={`
                text-sm xs:text-base font-bold mb-0.5 xs:mb-1 
                ${isDark ? 'text-white' : 'text-gray-900'}
              `}>
                {service.title}
              </h3>

              {/* Description */}
              <p className={`
                text-[10px] xs:text-xs mb-2 xs:mb-3 
                ${isDark ? 'text-white/70' : 'text-gray-600'}
              `}>
                {service.description}
              </p>

              {/* Features - Expand on hover/tap */}
              <div className={`
                overflow-hidden transition-all duration-500 ease-out
                ${isServiceExpanded(idx) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
              `}>
                <div className={`pt-2 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                  <div className="space-y-1 xs:space-y-1.5 mt-1.5 xs:mt-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-1 xs:gap-1.5">
                        <CheckCircle className={`w-2.5 h-2.5 xs:w-3 xs:h-3 mt-0.5 flex-shrink-0 ${service.color}`} />
                        <span className={`text-[9px] xs:text-[11px] ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-1.5 xs:mt-2 pt-0.5 xs:pt-1">
                    <div className="flex items-center gap-1 xs:gap-1.5">
                      <Award className={`w-2.5 h-2.5 xs:w-3 xs:h-3 flex-shrink-0 ${service.color}`} />
                      <span className={`text-[9px] xs:text-[11px] font-medium ${service.color}`}>
                        {service.metric}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hint */}
              {!isServiceExpanded(idx) && (
                <div className="mt-1.5 xs:mt-2">
                  <span className={`text-[8px] xs:text-[10px] ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
                    {isMobile || isTablet ? 'Tap to expand →' : 'Hover for details →'}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Row - Responsive grid */}
        <div className={`
          grid grid-cols-2 sm:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 p-3 xs:p-4 sm:p-5 
          rounded-lg xs:rounded-xl mb-8 xs:mb-10
          border ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'}
        `}>
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group cursor-pointer">
              <div className={`
                w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 rounded-full 
                flex items-center justify-center mx-auto mb-1.5 xs:mb-2
                ${isDark ? 'bg-white/10' : 'bg-gray-200'}
                transition-transform duration-300
                ${!isMobile ? 'group-hover:scale-110' : 'active:scale-95'}
              `}>
                <stat.icon className={`w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <div className={`
                text-base xs:text-lg sm:text-xl font-bold 
                transition-transform duration-300
                ${!isMobile ? 'group-hover:scale-105' : ''}
                ${isDark ? 'text-white' : 'text-gray-900'}
              `}>
                {stat.value}
              </div>
              <div className={`text-[8px] xs:text-[10px] ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Industries We Serve */}
        <div className={`
          rounded-lg xs:rounded-xl p-4 xs:p-5 mb-8 xs:mb-10
          border ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'}
        `}>
          <div className="flex items-center justify-center gap-1.5 xs:gap-2 mb-2 xs:mb-3">
            <Globe className={`w-3.5 h-3.5 xs:w-4 xs:h-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            <h3 className={`text-xs xs:text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Industries We Serve
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-1.5 xs:gap-2">
            {industries.map((industry, idx) => (
              <span
                key={idx}
                className={`
                  text-[10px] xs:text-xs px-2.5 xs:px-3 py-1 xs:py-1.5 rounded-full
                  ${isDark 
                    ? 'bg-white/10 text-white/80 md:hover:bg-white/20' 
                    : 'bg-gray-200 text-gray-700 md:hover:bg-gray-300'
                  }
                  transition-all duration-300 cursor-pointer
                  ${!isMobile ? 'hover:scale-105' : 'active:scale-95'}
                `}
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Success Story */}
        <div className={`
          relative rounded-lg xs:rounded-xl p-4 xs:p-5 text-center
          border ${isDark ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-white/10' : 'bg-gradient-to-r from-blue-50 to-purple-50 border-gray-200'}
        `}>
          <TrendingUp className={`w-5 h-5 xs:w-6 xs:h-6 mx-auto mb-1.5 xs:mb-2 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
          <p className={`
            text-xs xs:text-sm italic max-w-2xl mx-auto px-2
            ${isDark ? 'text-white/70' : 'text-gray-700'}
          `}>
            "They transformed our operations, resulting in 40% cost reduction and 156% revenue growth within 18 months."
          </p>
          <div className="mt-1.5 xs:mt-2">
            <span className={`text-[10px] xs:text-xs font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              — Global Manufacturing CEO
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 xs:mt-10">
          <button className="group relative px-5 xs:px-6 py-2 xs:py-2.5 rounded-lg overflow-hidden text-xs xs:text-sm font-semibold transition-all duration-500 ease-out hover:scale-105 active:scale-95">
            <div className={`absolute inset-0 transition-all duration-500 ease-out ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
            <div className={`absolute inset-[1px] rounded-lg transition-all duration-500 ease-out ${isDark ? 'bg-black/5' : 'bg-white/10'}`} />
            <span className={`relative z-10 flex items-center gap-1.5 xs:gap-2 transition-all duration-500 ease-out font-semibold ${isDark ? 'text-gray-900' : 'text-white'}`}>
              Transform Your Business
              <ArrowRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 transition-all duration-500 ease-out group-hover:translate-x-1" />
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