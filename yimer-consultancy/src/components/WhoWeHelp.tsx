// WhoWeHelp.tsx
import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import { Trophy, Rocket, Building2, CheckCircle, ArrowRight } from 'lucide-react';

export const WhoWeHelp: React.FC = () => {
  const { isDarkMode } = useTheme();
  const isDark = isDarkMode;
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
              Who We Help
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Empowering Success Across
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Every Sector
            </span>
          </h2>
          <p className={`max-w-2xl mx-auto text-base sm:text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            We tailor our expertise to meet the unique challenges of each industry
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className="transition-all duration-500 ease-out"
            >
              {/* Card */}
              <div className={`
                relative rounded-2xl p-6 md:p-8
                border shadow-lg
                transition-all duration-500 ease-out
                grain-overlay
                ${hoveredCard === idx 
                  ? 'scale-[1.02] -translate-y-1' 
                  : 'scale-100 translate-y-0'
                }
                ${isDark 
                  ? 'bg-black/60 border-white/8 hover:bg-black/70' 
                  : 'bg-white/80 border-gray-200 hover:bg-white hover:shadow-xl'
                }
              `}>
                {/* Icon */}
                <div className={`
                  inline-flex p-3 rounded-xl mb-5
                  ${category.bgIcon}
                  transition-all duration-500 ease-out
                  ${hoveredCard === idx ? 'scale-110' : 'scale-100'}
                `}>
                  <category.icon className={`w-7 h-7 ${category.color} transition-all duration-500 ease-out`} />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-2 transition-all duration-500 ease-out ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {category.title}
                </h3>
                
                {/* Description */}
                <p className={`text-sm mb-4 transition-all duration-500 ease-out ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                  {category.description}
                </p>

                {/* Services List - Smooth Extend on hover */}
                <div className={`
                  overflow-hidden transition-all duration-500 ease-out
                  ${hoveredCard === idx ? 'max-h-64 opacity-100 mb-5' : 'max-h-0 opacity-0'}
                `}>
                  <div className={`pt-3 border-t transition-all duration-500 ease-out ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
                    <div className="space-y-2.5">
                      {category.services.map((service, i) => (
                        <div 
                          key={i} 
                          className="flex items-center gap-2.5 transition-all duration-300 ease-out"
                          style={{ transitionDelay: hoveredCard === idx ? `${i * 50}ms` : '0ms' }}
                        >
                          <CheckCircle className={`w-3.5 h-3.5 ${category.color} transition-all duration-300 ease-out ${hoveredCard === idx ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} />
                          <span className={`text-xs transition-all duration-300 ease-out ${isDark ? 'text-white/70' : 'text-gray-700'} ${hoveredCard === idx ? 'translate-x-0 opacity-100' : '-translate-x-1 opacity-0'}`}>
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats Section */}
                <div className={`
                  flex items-center justify-between pt-4
                  border-t transition-all duration-500 ease-out
                  ${isDark ? 'border-white/10' : 'border-gray-100'}
                `}>
                  <div className="transition-all duration-500 ease-out">
                    <div className={`text-xs transition-all duration-500 ease-out ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                      {category.stats}
                    </div>
                    <div className={`text-sm font-semibold transition-all duration-500 ease-out ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {category.metric}
                    </div>
                  </div>
                  <div className={`
                    flex items-center gap-1 text-sm font-medium
                    transition-all duration-500 ease-out
                    ${hoveredCard === idx ? 'translate-x-1' : 'translate-x-0'}
                    ${category.color}
                  `}>
                    Learn more
                    <ArrowRight className={`w-3.5 h-3.5 transition-all duration-500 ease-out ${hoveredCard === idx ? 'translate-x-1' : 'translate-x-0'}`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-3 rounded-lg overflow-hidden text-sm font-semibold transition-all duration-500 ease-out hover:scale-105 active:scale-95">
            <div className={`absolute inset-0 transition-all duration-500 ease-out ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
            <div className={`absolute inset-[1px] rounded-lg transition-all duration-500 ease-out ${isDark ? 'bg-black/5' : 'bg-white/10'}`} />
            <span className={`relative z-10 flex items-center gap-2 transition-all duration-500 ease-out font-semibold ${isDark ? 'text-gray-900' : 'text-white'}`}>
              View All Success Stories
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