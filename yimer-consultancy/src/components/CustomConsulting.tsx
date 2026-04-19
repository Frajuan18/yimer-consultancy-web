// components/CustomConsulting.tsx - Fully responsive across all devices
import React, { useState, useEffect } from 'react';
import { useTheme } from '../components/ThemeContext';
import { 
  ArrowRight, 
  CheckCircle, 
  Sparkles,
  Calendar,
  Briefcase,
  Target,
  Zap,
  Star,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';

export const CustomConsulting: React.FC = () => {
  const { isDarkMode } = useTheme();
  const isDark = isDarkMode;
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);
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

  const modules = [
    { id: 'strategy', name: 'Strategy & Planning', icon: Target, color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
    { id: 'digital', name: 'Digital Transformation', icon: Zap, color: 'text-cyan-500', bgColor: 'bg-cyan-500/10' },
    { id: 'marketing', name: 'Marketing & Branding', icon: TrendingUp, color: 'text-pink-500', bgColor: 'bg-pink-500/10' },
    { id: 'operations', name: 'Operations & Scaling', icon: Briefcase, color: 'text-purple-500', bgColor: 'bg-purple-500/10' },
    { id: 'team', name: 'Team & Culture', icon: Users, color: 'text-green-500', bgColor: 'bg-green-500/10' },
    { id: 'growth', name: 'Growth & Revenue', icon: Star, color: 'text-amber-500', bgColor: 'bg-amber-500/10' },
  ];

  const benefits = [
    'Tailored to your specific needs',
    'Pay only for what you need',
    'Flexible engagement terms',
    'Dedicated expert team',
    'Regular progress reviews',
    'Transparent pricing'
  ];

  const toggleModule = (moduleId: string) => {
    if (selectedModules.includes(moduleId)) {
      setSelectedModules(selectedModules.filter(id => id !== moduleId));
    } else {
      setSelectedModules([...selectedModules, moduleId]);
    }
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

      {/* Animated gradient orb - Hidden on mobile for performance */}
      {!isMobile && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[500px] lg:w-[600px] h-[400px] md:h-[500px] lg:h-[600px] rounded-full blur-3xl pointer-events-none">
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse-slow`} />
        </div>
      )}

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
        <div className="text-center mb-8 xs:mb-10">
          <div className="inline-block mb-2 xs:mb-3">
            <div className={`
              inline-flex items-center gap-1 xs:gap-1.5 px-2.5 xs:px-3 py-0.5 xs:py-1 rounded-full
              text-[10px] xs:text-xs font-medium
              ${isDark 
                ? 'bg-white/10 text-white/80' 
                : 'bg-gray-100 text-gray-700'
              }
            `}>
              <Sparkles className="w-2.5 h-2.5 xs:w-3 xs:h-3" />
              Custom Consulting
            </div>
          </div>
          <h2 className={`
            text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-2 xs:mb-3 px-2
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            Build Your Own Plan
            <br className="hidden xs:block" />
            <span className="xs:hidden"> </span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Tailored to Your Needs
            </span>
          </h2>
          <p className={`
            max-w-2xl mx-auto text-xs xs:text-sm sm:text-base px-4
            ${isDark ? 'text-white/60' : 'text-gray-600'}
          `}>
            Mix and match services to create the perfect consulting package for your business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 xs:gap-6 sm:gap-8">
          {/* Left Side - Module Selection */}
          <div className={`
            rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6
            border shadow-lg xs:shadow-xl grain-overlay
            ${isDark 
              ? 'bg-black/40 border-white/10' 
              : 'bg-white/80 border-gray-200'
            }
          `}>
            <h3 className={`
              text-base xs:text-lg font-semibold mb-3 xs:mb-4 
              flex items-center gap-1.5 xs:gap-2 
              ${isDark ? 'text-white' : 'text-gray-900'}
            `}>
              <Briefcase className="w-4 h-4 xs:w-5 xs:h-5 text-blue-500" />
              Select Your Modules
            </h3>
            <p className={`
              text-xs xs:text-sm mb-3 xs:mb-4 
              ${isDark ? 'text-white/60' : 'text-gray-600'}
            `}>
              Choose the services that matter most to your business
            </p>
            
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3 mb-4 xs:mb-5 sm:mb-6">
              {modules.map((module) => (
                <div
                  key={module.id}
                  onClick={() => toggleModule(module.id)}
                  onMouseEnter={() => !isMobile && !isTablet && setHoveredModule(module.id)}
                  onMouseLeave={() => !isMobile && !isTablet && setHoveredModule(null)}
                  className={`
                    flex items-center gap-2 xs:gap-3 p-2.5 xs:p-3 rounded-lg xs:rounded-xl
                    border-2 transition-all duration-300 cursor-pointer
                    ${selectedModules.includes(module.id)
                      ? `${module.bgColor} ${module.color} border-current`
                      : (isDark 
                        ? 'bg-white/5 border-white/10 md:hover:bg-white/10' 
                        : 'bg-gray-50 border-gray-200 md:hover:bg-gray-100')
                    }
                    ${(!isMobile && !isTablet) && hoveredModule === module.id ? 'scale-[1.02]' : 'scale-100'}
                    ${(isMobile || isTablet) ? 'active:scale-[0.99]' : ''}
                  `}
                >
                  <div className={`
                    p-1 xs:p-1.5 rounded-md xs:rounded-lg
                    ${selectedModules.includes(module.id) ? module.bgColor : (isDark ? 'bg-white/10' : 'bg-gray-200')}
                  `}>
                    <module.icon className={`
                      w-3.5 h-3.5 xs:w-4 xs:h-4 
                      ${selectedModules.includes(module.id) ? module.color : (isDark ? 'text-white/60' : 'text-gray-600')}
                    `} />
                  </div>
                  <span className={`
                    text-xs xs:text-sm font-medium flex-1 
                    ${selectedModules.includes(module.id) ? module.color : (isDark ? 'text-white/80' : 'text-gray-800')}
                  `}>
                    {module.name}
                  </span>
                  {selectedModules.includes(module.id) && (
                    <CheckCircle className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-green-500 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>

            <div className={`pt-3 xs:pt-4 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between mb-1.5 xs:mb-2">
                <span className={`text-xs xs:text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                  Selected modules:
                </span>
                <span className={`text-xs xs:text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {selectedModules.length} / {modules.length}
                </span>
              </div>
              <div className="flex flex-wrap gap-1 xs:gap-1.5">
                {selectedModules.length > 0 ? (
                  modules.filter(m => selectedModules.includes(m.id)).map(module => (
                    <span key={module.id} className={`
                      text-[9px] xs:text-xs px-2 py-0.5 rounded-full 
                      ${module.bgColor} ${module.color}
                    `}>
                      {isMobile ? module.name.split(' ')[0] : module.name.split(' ').slice(0, 2).join(' ')}
                    </span>
                  ))
                ) : (
                  <span className={`text-[10px] xs:text-xs ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                    No modules selected yet
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Benefits & CTA */}
          <div className="space-y-4 xs:space-y-5 sm:space-y-6">
            {/* Benefits */}
            <div className={`
              rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6
              border shadow-lg xs:shadow-xl grain-overlay
              ${isDark 
                ? 'bg-black/40 border-white/10' 
                : 'bg-white/80 border-gray-200'
              }
            `}>
              <h3 className={`
                text-base xs:text-lg font-semibold mb-3 xs:mb-4 
                flex items-center gap-1.5 xs:gap-2 
                ${isDark ? 'text-white' : 'text-gray-900'}
              `}>
                <Star className="w-4 h-4 xs:w-5 xs:h-5 text-amber-500" />
                Why Go Custom?
              </h3>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-1.5 xs:gap-2">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 xs:gap-2">
                    <CheckCircle className={`w-3 h-3 xs:w-3.5 xs:h-3.5 mt-0.5 flex-shrink-0 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                    <span className={`text-[10px] xs:text-xs ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* What Happens Next */}
            <div className={`
              rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6
              border shadow-lg xs:shadow-xl grain-overlay
              ${isDark 
                ? 'bg-black/40 border-white/10' 
                : 'bg-white/80 border-gray-200'
              }
            `}>
              <h3 className={`
                text-base xs:text-lg font-semibold mb-3 xs:mb-4 
                flex items-center gap-1.5 xs:gap-2 
                ${isDark ? 'text-white' : 'text-gray-900'}
              `}>
                <Clock className="w-4 h-4 xs:w-5 xs:h-5 text-purple-500" />
                What Happens Next?
              </h3>
              <div className="space-y-2.5 xs:space-y-3">
                <div className="flex items-start gap-2 xs:gap-3">
                  <div className={`
                    w-5 h-5 xs:w-6 xs:h-6 rounded-full flex items-center justify-center 
                    text-[10px] xs:text-xs font-bold flex-shrink-0
                    ${isDark ? 'bg-white/10 text-white' : 'bg-gray-200 text-gray-700'}
                  `}>1</div>
                  <div>
                    <h4 className={`text-xs xs:text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Discovery Call
                    </h4>
                    <p className={`text-[9px] xs:text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                      30-min consultation to understand your needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 xs:gap-3">
                  <div className={`
                    w-5 h-5 xs:w-6 xs:h-6 rounded-full flex items-center justify-center 
                    text-[10px] xs:text-xs font-bold flex-shrink-0
                    ${isDark ? 'bg-white/10 text-white' : 'bg-gray-200 text-gray-700'}
                  `}>2</div>
                  <div>
                    <h4 className={`text-xs xs:text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Custom Proposal
                    </h4>
                    <p className={`text-[9px] xs:text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                      We create a tailored plan with pricing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 xs:gap-3">
                  <div className={`
                    w-5 h-5 xs:w-6 xs:h-6 rounded-full flex items-center justify-center 
                    text-[10px] xs:text-xs font-bold flex-shrink-0
                    ${isDark ? 'bg-white/10 text-white' : 'bg-gray-200 text-gray-700'}
                  `}>3</div>
                  <div>
                    <h4 className={`text-xs xs:text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Kickoff & Execution
                    </h4>
                    <p className={`text-[9px] xs:text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                      Start your transformation journey
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className={`
              rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 text-center
              border-2 transition-all duration-500
              ${isDark 
                ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30' 
                : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200'
              }
            `}>
              <Calendar className={`w-8 h-8 xs:w-10 xs:h-10 mx-auto mb-2 xs:mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              <h3 className={`text-lg xs:text-xl font-bold mb-1.5 xs:mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Ready to Build Your Plan?
              </h3>
              <p className={`text-xs xs:text-sm mb-3 xs:mb-4 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                Book a free consultation and let's create something amazing together
              </p>
              <button className="group relative w-full sm:w-auto px-6 xs:px-8 py-2.5 xs:py-3 rounded-lg overflow-hidden text-xs xs:text-sm font-semibold transition-all duration-500 ease-out hover:scale-105 active:scale-95">
                <div className={`absolute inset-0 transition-all duration-500 ease-out ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
                <div className={`absolute inset-[1px] rounded-lg transition-all duration-500 ease-out ${isDark ? 'bg-black/5' : 'bg-white/10'}`} />
                <span className={`relative z-10 flex items-center justify-center gap-1.5 xs:gap-2 transition-all duration-500 ease-out font-semibold ${isDark ? 'text-gray-900' : 'text-white'}`}>
                  <Calendar className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                  Book a Session Now
                  <ArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 transition-all duration-500 ease-out group-hover:translate-x-1" />
                </span>
              </button>
              <p className={`text-[8px] xs:text-[10px] mt-2 xs:mt-3 ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
                Free 30-minute strategy call. No obligation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        .poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
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