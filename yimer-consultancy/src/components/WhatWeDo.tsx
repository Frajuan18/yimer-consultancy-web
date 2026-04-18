// WhatWeDo.tsx - With smooth card hover effects
import React from 'react';
import { useTheme } from './ThemeContext';
import { 
  Target, 
  Cloud, 
  Megaphone, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle,
  Rocket,
  Sparkles
} from 'lucide-react';

export const WhatWeDo: React.FC = () => {
  const { isDarkMode } = useTheme();
  const isDark = isDarkMode;

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
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.12'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '180px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className={`
              text-sm font-medium px-4 py-1.5 rounded-full
              transition-all duration-200
              ${isDark 
                ? 'bg-white/10 text-white/80' 
                : 'bg-gray-100 text-gray-700'
              }
            `}>
              What We Do
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Comprehensive Solutions for
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Modern Business Challenges
            </span>
          </h2>
          <p className={`max-w-2xl mx-auto text-base sm:text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            End-to-end consulting services designed to drive real results
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`
                group relative rounded-2xl p-6
                border-2 transition-all duration-500 ease-out
                grain-overlay cursor-pointer
                ${isDark 
                  ? 'bg-black/60 border-white/8 hover:bg-black/70 hover:border-white/20' 
                  : 'bg-white/80 border-gray-200 hover:bg-white hover:border-gray-300'
                }
                hover:scale-[1.02] hover:-translate-y-1
                hover:shadow-2xl
              `}
            >
              {/* Decorative gradient on hover */}
              <div className={`
                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out
                bg-gradient-to-br ${service.color.replace('text-', 'from-')}/5 to-transparent
                pointer-events-none
              `} />

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className={`
                    p-2.5 rounded-xl transition-all duration-500 ease-out
                    ${service.bgIcon}
                    group-hover:scale-110 group-hover:rotate-3
                  `}>
                    <service.icon className={`w-6 h-6 ${service.color} transition-all duration-500 ease-out`} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-1 transition-all duration-500 ease-out ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm transition-all duration-500 ease-out ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 mb-6">
                  {service.features.map((feature, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-2.5 transition-all duration-300 ease-out group-hover:translate-x-1"
                      style={{ transitionDelay: `${i * 30}ms` }}
                    >
                      <CheckCircle className={`w-3.5 h-3.5 ${service.color} transition-all duration-300 ease-out`} />
                      <span className={`text-sm transition-all duration-300 ease-out ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Outcome & CTA */}
                <div className={`
                  flex items-center justify-between pt-4
                  border-t transition-all duration-500 ease-out
                  ${isDark ? 'border-white/10 group-hover:border-white/20' : 'border-gray-100 group-hover:border-gray-200'}
                `}>
                  <div className="flex items-center gap-2">
                    <Rocket className={`w-4 h-4 ${service.color} transition-all duration-500 ease-out group-hover:scale-110`} />
                    <div>
                      <div className={`text-xs transition-all duration-500 ease-out ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                        Expected outcome
                      </div>
                      <div className={`text-sm font-semibold transition-all duration-500 ease-out ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {service.outcome}
                      </div>
                    </div>
                  </div>
                  <button className={`
                    flex items-center gap-1 text-sm font-medium
                    transition-all duration-500 ease-out
                    ${service.color}
                    group-hover:gap-2 group-hover:translate-x-1
                  `}>
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 transition-all duration-500 ease-out group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="group relative px-8 py-3 rounded-lg overflow-hidden text-sm font-semibold transition-all duration-500 ease-out hover:scale-105 active:scale-95">
            <div className={`absolute inset-0 transition-all duration-500 ease-out ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
            <div className={`absolute inset-[1px] rounded-lg transition-all duration-500 ease-out ${isDark ? 'bg-black/5' : 'bg-white/10'}`} />
            <span className={`relative z-10 flex items-center gap-2 transition-all duration-500 ease-out font-semibold ${isDark ? 'text-gray-900' : 'text-white'}`}>
              Explore All Services
              <ArrowRight className="w-4 h-4 transition-all duration-500 ease-out group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>

      <style>{`
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
        
        .poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </section>
  );
};