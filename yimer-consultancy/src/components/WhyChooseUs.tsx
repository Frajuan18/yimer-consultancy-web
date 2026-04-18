// WhyChooseUs.tsx - Without the hover line
import React from 'react';
import { useTheme } from './ThemeContext';
import { 
  Award, 
  TrendingUp, 
  Globe, 
  Users, 
  CheckCircle,
  Star,
  Clock,
  Headphones,
  ArrowRight
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { isDarkMode } = useTheme();
  const isDark = isDarkMode;

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
              Why Choose Us
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            The Partner You Can
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Trust for Success
            </span>
          </h2>
          <p className={`max-w-2xl mx-auto text-base sm:text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            What sets us apart and makes us the right choice for your business
          </p>
        </div>

        {/* Stats Bar */}
        <div className={`
          grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 p-6 rounded-2xl
          border ${isDark ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'}
        `}>
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '500+', label: 'Projects Completed' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '20+', label: 'Countries Served' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {stat.value}
              </div>
              <div className={`text-xs md:text-sm ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
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
                bg-gradient-to-br ${reason.color.replace('text-', 'from-')}/5 to-transparent
                pointer-events-none
              `} />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`
                  inline-flex p-3 rounded-xl mb-4
                  ${reason.bgIcon}
                  transition-all duration-500 ease-out
                  group-hover:scale-110 group-hover:rotate-3
                `}>
                  <reason.icon className={`w-6 h-6 ${reason.color}`} />
                </div>

                {/* Title */}
                <h3 className={`text-lg font-bold mb-2 transition-all duration-500 ease-out ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {reason.title}
                </h3>

                {/* Description */}
                <p className={`text-sm mb-3 transition-all duration-500 ease-out ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                  {reason.description}
                </p>

                {/* Details - appears on hover */}
                <div className={`
                  overflow-hidden transition-all duration-500 ease-out
                  max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100
                `}>
                  <p className={`text-xs pt-3 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                    {reason.details}
                  </p>
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
              Start Your Journey
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