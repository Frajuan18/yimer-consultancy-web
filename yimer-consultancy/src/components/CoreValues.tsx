// components/CoreValues.tsx
import React from 'react';
import { useTheme } from '../components/ThemeContext';
import { 
  Eye, 
  TrendingUp, 
  Lightbulb, 
  Rocket, 
  ArrowRight,
  CheckCircle,
  Shield,
  Target,
  Zap,
  Heart
} from 'lucide-react';

export const CoreValues: React.FC = () => {
  const { isDarkMode } = useTheme();
  const isDark = isDarkMode;

  const values = [
    {
      title: 'Clarity',
      subtitle: 'Crystal Clear Vision',
      icon: Eye,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      description: 'We bring transparency and clear direction to every engagement.',
      principles: [
        'Transparent communication',
        'Clear strategic direction',
        'Defined measurable goals',
        'Open feedback culture'
      ]
    },
    {
      title: 'Performance',
      subtitle: 'Results That Matter',
      icon: TrendingUp,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      description: 'We are obsessed with delivering measurable, tangible outcomes.',
      principles: [
        'Data-driven decisions',
        'KPI-focused approach',
        'Continuous improvement',
        'ROI accountability'
      ]
    },
    {
      title: 'Innovation',
      subtitle: 'Future-First Thinking',
      icon: Lightbulb,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
      description: 'We challenge conventions and embrace cutting-edge solutions.',
      principles: [
        'Creative problem solving',
        'Emerging technologies',
        'Agile methodologies',
        'Continuous learning'
      ]
    },
    {
      title: 'Execution',
      subtitle: 'From Ideas to Impact',
      icon: Rocket,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      description: 'We turn strategies into reality with precision and speed.',
      principles: [
        'Action-oriented approach',
        'Accountability at every step',
        'Rapid implementation',
        'Quality assurance'
      ]
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='${isDark ? '0.12' : '0.06'}'/%3E%3C/svg%3E")`,
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
              Core Values
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            What Drives Everything
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              We Do
            </span>
          </h2>
          <p className={`max-w-2xl mx-auto text-base sm:text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            Our guiding principles that shape every decision, strategy, and action
          </p>
        </div>

        {/* Values Cards - 4 column grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <div
              key={idx}
              className={`
                group relative rounded-2xl p-6
                border-2 transition-all duration-500 ease-out
                ${isDark 
                  ? 'bg-black/40 border-white/10 hover:border-white/20' 
                  : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                }
                hover:scale-[1.02] hover:-translate-y-1
                hover:shadow-2xl
              `}
            >
              {/* Icon Circle */}
              <div className={`
                inline-flex p-3 rounded-xl mb-4
                ${value.bgColor}
                transition-all duration-500
                group-hover:scale-110
              `}>
                <value.icon className={`w-6 h-6 ${value.color}`} />
              </div>

              {/* Title */}
              <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {value.title}
              </h3>
              
              {/* Subtitle */}
              <p className={`text-sm mb-3 ${value.color}`}>
                {value.subtitle}
              </p>

              {/* Description */}
              <p className={`text-sm mb-4 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                {value.description}
              </p>

              {/* Principles List */}
              <div className={`pt-3 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                <div className="space-y-2">
                  {value.principles.map((principle, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className={`w-3.5 h-3.5 ${value.color}`} />
                      <span className={`text-xs ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                        {principle}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative element */}
              <div className={`
                absolute bottom-3 right-3 w-12 h-12 rounded-full
                bg-gradient-to-r ${value.color.replace('text', 'from')}/5 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
              `} />
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className={`
          mt-16 text-center py-8 px-6 rounded-2xl
          border ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'}
        `}>
          <Heart className={`w-6 h-6 mx-auto mb-3 ${isDark ? 'text-white/40' : 'text-gray-400'}`} />
          <p className={`text-base italic max-w-2xl mx-auto ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            "These aren't just words on a wall. They're the compass that guides every decision, 
            every strategy, and every relationship we build."
          </p>
          <div className={`text-xs font-medium mt-3 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
            — Our Promise to You
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="group relative px-8 py-3 rounded-lg overflow-hidden text-sm font-semibold transition-all duration-500 ease-out hover:scale-105 active:scale-95">
            <div className={`absolute inset-0 transition-all duration-500 ease-out ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
            <div className={`absolute inset-[1px] rounded-lg transition-all duration-500 ease-out ${isDark ? 'bg-black/5' : 'bg-white/10'}`} />
            <span className={`relative z-10 flex items-center gap-2 transition-all duration-500 ease-out font-semibold ${isDark ? 'text-gray-900' : 'text-white'}`}>
              Work With Us
              <ArrowRight className="w-4 h-4 transition-all duration-500 ease-out group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>

      <style>{`
        .poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </section>
  );
};