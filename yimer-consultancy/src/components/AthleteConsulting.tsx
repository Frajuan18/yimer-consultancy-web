// components/AthleteConsulting.tsx - Fully responsive across all devices
import React, { useState, useEffect } from 'react';
import { useTheme } from '../components/ThemeContext';
import { 
  ArrowRight,
  Trophy,
  Star,
  Briefcase,
  Globe,
  CheckCircle,
  X
} from 'lucide-react';

export const AthleteConsulting: React.FC = () => {
  const { isDarkMode } = useTheme();
  const isDark = isDarkMode;
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    if (selectedService !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  const services = [
    {
      id: 0,
      title: 'Personal Branding',
      shortDesc: 'Build a powerful brand that sets you apart',
      icon: Star,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
      gradient: 'from-amber-500/20 to-orange-500/20',
      fullDescription: 'Your brand is your legacy. We help athletes craft a compelling narrative that resonates with fans, sponsors, and the media.',
      features: [
        'Brand identity development',
        'Storytelling & messaging',
        'Media training',
        'Crisis communication'
      ],
      outcome: 'Stronger personal brand value',
      successRate: '3.5x brand growth'
    },
    {
      id: 1,
      title: 'Career Strategy',
      shortDesc: 'Plan your path to long-term success',
      icon: Briefcase,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      fullDescription: 'Strategic career planning that maximizes your potential on and off the field. From contract negotiations to post-career transition.',
      features: [
        'Contract negotiations',
        'Career transition planning',
        'Financial strategy',
        'Post-sport preparation'
      ],
      outcome: 'Extended career longevity',
      successRate: '5+ years avg career span'
    },
    {
      id: 2,
      title: 'Sponsorship Guidance',
      shortDesc: 'Secure and maximize brand partnerships',
      icon: Trophy,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      gradient: 'from-purple-500/20 to-pink-500/20',
      fullDescription: 'Connect with the right brands that align with your values and maximize your earning potential through strategic partnerships.',
      features: [
        'Sponsor identification',
        'Deal negotiation',
        'Partnership management',
        'Brand alignment strategy'
      ],
      outcome: 'Increased sponsorship revenue',
      successRate: '$50M+ deals secured'
    },
    {
      id: 3,
      title: 'Digital Presence',
      shortDesc: 'Dominate social media and online platforms',
      icon: Globe,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      fullDescription: 'Build a powerful digital footprint that engages fans, attracts sponsors, and grows your influence across all platforms.',
      features: [
        'Content strategy',
        'Social media management',
        'Audience engagement',
        'Platform optimization'
      ],
      outcome: 'Expanded digital reach',
      successRate: '200% engagement growth'
    }
  ];

  const stats = [
    { value: '150+', label: 'Athletes Guided' },
    { value: '3x', label: 'Brand Value Growth' },
    { value: '$50M+', label: 'Sponsorship Deals' },
    { value: '98%', label: 'Satisfaction Rate' }
  ];

  const handleCardInteraction = (id: number, isEnter: boolean) => {
    if (!isMobile && !isTablet) {
      setHoveredCard(isEnter ? id : null);
    }
  };

  const handleCardClick = (id: number) => {
    if (isMobile || isTablet) {
      setExpandedCard(expandedCard === id ? null : id);
    } else {
      openModal(id);
    }
  };

  const openModal = (id: number) => {
    setSelectedService(id);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const isCardExpanded = (id: number) => {
    if (isMobile || isTablet) {
      return expandedCard === id;
    }
    return hoveredCard === id;
  };

  const currentService = selectedService !== null ? services.find(s => s.id === selectedService) : null;

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
              <Trophy className="w-2.5 h-2.5 xs:w-3 xs:h-3" />
              Athlete Consulting
            </div>
          </div>
          <h2 className={`
            text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-2 xs:mb-3 px-2
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            Elevate Your Athletic Career
            <br className="hidden xs:block" />
            <span className="xs:hidden"> </span>
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Beyond the Game
            </span>
          </h2>
          <p className={`
            max-w-2xl mx-auto text-xs xs:text-sm sm:text-base px-4
            ${isDark ? 'text-white/60' : 'text-gray-600'}
          `}>
            Comprehensive consulting for athletes ready to maximize their potential
          </p>
        </div>

        {/* Services Grid - Responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              className={`
                group relative rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-5
                border transition-all duration-500 ease-out
                ${!isMobile && !isTablet ? 'cursor-pointer' : 'cursor-pointer active:scale-[0.99]'}
                ${selectedService === service.id 
                  ? `${service.borderColor} shadow-xl scale-[1.01] xs:scale-[1.02]` 
                  : (isDark ? 'border-white/10 md:hover:border-white/20' : 'border-gray-200 md:hover:border-gray-300')
                }
                ${!isMobile && !isTablet ? 'md:hover:scale-[1.02] md:hover:-translate-y-1' : ''}
                ${isDark ? 'bg-black/40' : 'bg-white'}
              `}
              onMouseEnter={() => handleCardInteraction(service.id, true)}
              onMouseLeave={() => handleCardInteraction(service.id, false)}
              onClick={() => handleCardClick(service.id)}
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
                text-base xs:text-lg font-bold mb-0.5 xs:mb-1 
                ${isDark ? 'text-white' : 'text-gray-900'}
              `}>
                {service.title}
              </h3>

              {/* Description */}
              <p className={`
                text-xs xs:text-sm mb-2 xs:mb-3 
                ${isDark ? 'text-white/70' : 'text-gray-600'}
              `}>
                {service.shortDesc}
              </p>

              {/* Divider */}
              <div className={`my-2 xs:my-3 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`} />

              {/* Interactive Element - Shows on hover/expand */}
              <div className={`
                overflow-hidden transition-all duration-500
                ${isCardExpanded(service.id) ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}
              `}>
                <p className={`
                  text-[10px] xs:text-xs leading-relaxed mb-1.5 xs:mb-2 
                  ${isDark ? 'text-white/50' : 'text-gray-500'}
                `}>
                  {service.fullDescription.substring(0, isMobile ? 60 : 80)}...
                </p>
                <div className={`text-[10px] xs:text-xs font-medium ${service.color} flex items-center gap-1`}>
                  {isMobile || isTablet ? 'Tap to open details' : 'Click to learn more'} 
                  <ArrowRight className="w-2.5 h-2.5 xs:w-3 xs:h-3" />
                </div>
              </div>

              {/* Static hint when not hovered/expanded */}
              <div className={`
                transition-opacity duration-300
                ${isCardExpanded(service.id) ? 'opacity-0' : 'opacity-100'}
              `}>
                <span className={`text-[9px] xs:text-xs ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
                  {isMobile || isTablet ? 'Tap to expand' : 'Hover + Click'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row - Responsive grid */}
        <div className={`
          mt-6 xs:mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 
          p-3 xs:p-4 sm:p-5 rounded-lg xs:rounded-xl
          border ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'}
        `}>
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group cursor-pointer">
              <div className={`
                text-lg xs:text-xl sm:text-2xl font-bold 
                transition-transform duration-300
                ${!isMobile ? 'group-hover:scale-110' : 'active:scale-95'}
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
        <div className="text-center mt-6 xs:mt-8 sm:mt-10">
          <button className="group relative px-5 xs:px-6 py-2 xs:py-2.5 rounded-lg overflow-hidden text-xs xs:text-sm font-semibold transition-all duration-500 ease-out hover:scale-105 active:scale-95">
            <div className={`absolute inset-0 transition-all duration-500 ease-out ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
            <div className={`absolute inset-[1px] rounded-lg transition-all duration-500 ease-out ${isDark ? 'bg-black/5' : 'bg-white/10'}`} />
            <span className={`relative z-10 flex items-center gap-1.5 xs:gap-2 transition-all duration-500 ease-out font-semibold ${isDark ? 'text-gray-900' : 'text-white'}`}>
              Start Your Journey
              <ArrowRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 transition-all duration-500 ease-out group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>

      {/* Modal for Service Details - Fully responsive */}
      {selectedService !== null && currentService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={closeModal}>
          <div 
            className={`
              relative w-full max-w-2xl max-h-[90vh] xs:max-h-[85vh] overflow-y-auto 
              rounded-xl xs:rounded-2xl border-2 ${currentService.borderColor}
              ${isDark ? 'bg-black/95' : 'bg-white'}
              shadow-2xl
              animate-scale-in
            `}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className={`
                absolute top-3 right-3 xs:top-4 xs:right-4 z-10 p-1.5 xs:p-2 rounded-full
                transition-all duration-300 hover:scale-110
                ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}
              `}
            >
              <X className="w-4 h-4 xs:w-5 xs:h-5" />
            </button>

            {/* Modal Content */}
            <div className="p-4 xs:p-6 sm:p-8">
              <div className="text-center mb-4 xs:mb-5 sm:mb-6">
                <div className={`
                  inline-flex p-2.5 xs:p-3 rounded-xl xs:rounded-2xl mb-3 xs:mb-4
                  ${currentService.bgColor}
                `}>
                  <currentService.icon className={`w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 ${currentService.color}`} />
                </div>
                <h3 className={`
                  text-xl xs:text-2xl font-bold mb-1.5 xs:mb-2 
                  ${isDark ? 'text-white' : 'text-gray-900'}
                `}>
                  {currentService.title}
                </h3>
                <p className={`text-xs xs:text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                  {currentService.shortDesc}
                </p>
              </div>

              <div className={`p-3 xs:p-4 sm:p-5 rounded-lg xs:rounded-xl mb-4 xs:mb-5 sm:mb-6 ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                <p className={`text-xs xs:text-sm leading-relaxed ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                  {currentService.fullDescription}
                </p>
              </div>

              <h4 className={`text-xs xs:text-sm font-semibold mb-2 xs:mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                What's Included:
              </h4>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3 mb-4 xs:mb-5 sm:mb-6">
                {currentService.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-1.5 xs:gap-2">
                    <CheckCircle className={`w-3.5 h-3.5 xs:w-4 xs:h-4 mt-0.5 flex-shrink-0 ${currentService.color}`} />
                    <span className={`text-xs xs:text-sm ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className={`p-3 xs:p-4 rounded-lg xs:rounded-xl text-center ${currentService.bgColor}`}>
                <div className={`text-xs xs:text-sm font-semibold mb-0.5 xs:mb-1 ${currentService.color}`}>
                  Expected Outcome
                </div>
                <div className={`text-sm xs:text-base font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {currentService.outcome}
                </div>
                <div className={`text-[10px] xs:text-xs mt-0.5 xs:mt-1 ${currentService.color}`}>
                  {currentService.successRate}
                </div>
              </div>

              <div className="mt-4 xs:mt-5 sm:mt-6">
                <button className="w-full group relative px-5 xs:px-6 py-2.5 xs:py-3 rounded-lg overflow-hidden text-xs xs:text-sm font-semibold transition-all duration-500 hover:scale-[1.02] active:scale-95">
                  <div className={`absolute inset-0 transition-all duration-500 ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
                  <div className={`absolute inset-[1px] rounded-lg transition-all duration-500 ${isDark ? 'bg-black/5' : 'bg-white/10'}`} />
                  <span className={`relative z-10 flex items-center justify-center gap-1.5 xs:gap-2 ${isDark ? 'text-gray-900' : 'text-white'}`}>
                    Get Started with {currentService.title}
                    <ArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        .poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out;
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