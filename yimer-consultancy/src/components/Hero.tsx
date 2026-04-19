import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { ArrowRight, ChevronRight, Shield, Zap, TrendingUp, Target, LineChart, Headphones, Briefcase, BarChart, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  const { isDarkMode } = useTheme();
  const isDark = isDarkMode;
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stats = [
    { value: '500+', label: 'Clients Worldwide' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '10+', label: 'Years Experience' },
  ];

  const features = [
    {
      title: 'Strategic Planning',
      icon: Shield,
      description: 'Comprehensive market analysis and strategic roadmapping',
      details: 'Includes competitor analysis, market positioning, and 5-year growth strategy',
      metric: '89% avg. growth increase'
    },
    {
      title: 'Data Analytics',
      icon: TrendingUp,
      description: 'Actionable insights from your business data',
      details: 'Real-time dashboards, predictive modeling, and performance tracking',
      metric: '3.5x ROI improvement'
    },
    {
      title: '24/7 Support',
      icon: Zap,
      description: 'Round-the-clock expert assistance',
      details: 'Dedicated account manager with 15min response time SLA',
      metric: '99.9% uptime guaranteed'
    },
  ];

  const coreServices = [
    { title: 'Strategy Consulting', desc: 'Market analysis & strategic planning', icon: Target },
    { title: 'Business Analytics', desc: 'Data-driven decision making', icon: LineChart },
    { title: 'Operations', desc: 'Process optimization & efficiency', icon: TrendingUp },
    { title: '24/7 Support', desc: 'Round-the-clock assistance', icon: Headphones },
  ];

  return (
    <section className={`relative min-h-[100dvh] flex items-center poppins pt-16 pb-12 overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Background & Grain Overlay - Kept exactly as your UI */}
      <div className="absolute inset-0 -z-10 transition-colors duration-500">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-gray-950 via-black to-gray-950' : 'bg-white'}`} />
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' ... /%3E")`, // Your SVG logic here
          backgroundRepeat: 'repeat',
          backgroundSize: '180px',
        }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 xs:px-6 lg:px-8">
        {/* The "Cool" Grid Structure from v1 applied to your UI elements */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT SIDE - Content (Col 7) */}
          <div className="lg:col-span-7 w-full">
            <div className="inline-block mb-3 xs:mb-4">
              <span className={`text-[10px] xs:text-xs sm:text-sm font-medium px-2 xs:px-3 py-0.5 xs:py-1 rounded-full transition-all duration-200 ${
                isDark ? 'bg-white/10 text-white/80' : 'bg-gray-100 text-gray-700'
              }`}>
                Trusted by 500+ businesses
              </span>
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-3 xs:mb-4 tracking-tight leading-tight">
              <span className={isDark ? 'text-white' : 'text-gray-900'}>Transform Your</span>
              <br className="hidden sm:block" />
              <span className={isDark ? 'text-blue-400' : 'text-blue-600'}> Business Future</span>
            </h1>

            <p className={`text-xs xs:text-sm sm:text-base mb-6 max-w-lg leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
              Strategic consulting solutions that drive growth, innovation, and sustainable success.
            </p>

            {/* Features List - Preserved your hover/click UI */}
            <div className="space-y-2 mb-8 max-w-lg">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => !isMobile && setHoveredFeature(idx)}
                  onMouseLeave={() => !isMobile && setHoveredFeature(null)}
                  onClick={() => isMobile && setHoveredFeature(hoveredFeature === idx ? null : idx)}
                >
                  <div className={`relative p-2 xs:p-3 rounded-lg xs:rounded-xl transition-all duration-300 ${
                    hoveredFeature === idx 
                      ? (isDark ? 'bg-white/20' : 'bg-gray-100')
                      : (isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100')
                  }`}>
                    <div className="flex items-start gap-2">
                      <feature.icon className={`w-3.5 h-3.5 xs:w-4 xs:h-4 mt-0.5 flex-shrink-0 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className={`text-xs xs:text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
                          <ChevronRight className={`w-3 h-3 transition-transform ${hoveredFeature === idx ? 'translate-x-1' : ''} ${isDark ? 'text-white/40' : 'text-gray-400'}`} />
                        </div>
                        <p className={`text-[10px] xs:text-xs mt-0.5 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>{feature.description}</p>
                        
                        {hoveredFeature === idx && (
                          <div className={`mt-2 pt-2 border-t animate-fade-in ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                            <p className={`text-[10px] xs:text-xs mb-1 ${isDark ? 'text-white/70' : 'text-gray-700'}`}>{feature.details}</p>
                            <div className="inline-flex items-center gap-1.5">
                              <BarChart className={`w-2.5 h-2.5 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                              <span className={`text-[9px] xs:text-[10px] font-medium ${isDark ? 'text-green-400' : 'text-green-600'}`}>{feature.metric}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Preserved your interactive UI principles */}
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 mb-8">
              <button className="group relative w-full xs:w-auto px-6 py-2.5 rounded-lg overflow-hidden transition-all duration-200 hover:scale-105 active:scale-95">
                <div className={`absolute inset-0 ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
                <span className={`relative z-10 flex items-center justify-center gap-2 text-xs xs:text-sm font-semibold ${isDark ? 'text-gray-900' : 'text-white'}`}>
                  Get Started <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className={`w-full xs:w-auto px-6 py-2.5 rounded-lg text-xs xs:text-sm font-semibold transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 ${
                isDark ? 'bg-white/15 hover:bg-white/25 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              }`}>
                View Services <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-current/5 pt-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-left">
                  <div className={`text-base xs:text-lg sm:text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{stat.value}</div>
                  <div className={`text-[8px] xs:text-[10px] sm:text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Your Core Services Card (Col 5) */}
          <div className="lg:col-span-5 w-full mt-10 lg:mt-0 relative">
            <div className={`relative rounded-xl xs:rounded-2xl p-5 md:p-6 border shadow-2xl grain-overlay transition-all ${
              isDark ? 'glass-rough-dark bg-black/60 border-white/8' : 'glass-rough-light bg-white/60 border-gray-200/50'
            }`}>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`p-1.5 rounded-lg ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}>
                    <Briefcase className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                  <span className={`text-[10px] xs:text-xs font-medium ${isDark ? 'text-white/80' : 'text-gray-700'}`}>Core Services</span>
                </div>

                <h3 className={`text-base xs:text-lg font-bold mb-1.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>What We Offer</h3>
                <p className={`text-[10px] xs:text-xs mb-4 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>Tailored consulting for your unique business needs.</p>

                <div className="space-y-2 mb-4">
                  {coreServices.map((service, idx) => (
                    <div key={idx} className={`p-2.5 rounded-lg border transition-all hover:translate-x-1 ${
                      isDark ? 'bg-white/5 hover:bg-white/10 border-white/5' : 'bg-gray-50 hover:bg-gray-100 border-gray-100'
                    }`}>
                      <div className="flex items-start gap-2">
                        <service.icon className={`w-3.5 h-3.5 mt-0.5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                        <div>
                          <h4 className={`text-[10px] xs:text-xs font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{service.title}</h4>
                          <p className={`text-[8px] xs:text-[10px] ${isDark ? 'text-white/50' : 'text-gray-500'}`}>{service.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`pt-3 mt-1 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                  <div className="flex items-center gap-2">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}>
                      <Award className={`w-3.5 h-3.5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                    </div>
                    <div>
                      <p className={`text-[9px] xs:text-[10px] font-medium ${isDark ? 'text-white/80' : 'text-gray-800'}`}>Award-winning consultancy</p>
                      <p className={`text-[8px] xs:text-[9px] ${isDark ? 'text-white/50' : 'text-gray-500'}`}>Recognized for excellence in 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Available Badge - Exactly as you had it */}
            <div className={`absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[8px] xs:text-[9px] font-medium border shadow-lg flex items-center gap-1 ${
              isDark ? 'bg-black/80 border-white/15 text-white' : 'bg-white border-gray-200 text-gray-900'
            }`}>
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
              Available
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        .poppins { font-family: 'Poppins', sans-serif; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.2s ease-out; }
        .grain-overlay::before {
          content: ''; position: absolute; inset: 0; pointer-events: none; border-radius: inherit; z-index: 1;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.12'/%3E%3C/svg%3E");
          background-repeat: repeat; background-size: 180px;
        }
        .glass-rough-light { backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); }
        .glass-rough-dark { backdrop-filter: blur(14px) brightness(0.7) contrast(1.1); -webkit-backdrop-filter: blur(14px) brightness(0.7) contrast(1.1); }
      `}</style>
    </section>
  );
};