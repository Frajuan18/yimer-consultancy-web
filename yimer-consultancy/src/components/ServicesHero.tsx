// components/ServicesHero.tsx
import React from 'react';
import { useTheme } from '../components/ThemeContext';
import { 
  ArrowRight, 
  Sparkles,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

export const ServicesHero: React.FC = () => {
  const { isDarkMode } = useTheme();
  const isDark = isDarkMode;

  const features = [
    { text: 'Strategic Planning', icon: TrendingUp },
    { text: 'Digital Transformation', icon: Zap },
    { text: 'Expert Guidance', icon: Shield },
  ];

  return (
    <section className={`relative pt-32 pb-20 poppins ${isDark ? 'bg-black' : 'bg-white'}`}>
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
        <div className="text-center">
          {/* Badge */}
          <div className="inline-block mb-4">
            <div className={`
              inline-flex items-center gap-1.5 px-3 py-1 rounded-full
              text-xs font-medium
              ${isDark 
                ? 'bg-white/10 text-white/80' 
                : 'bg-gray-100 text-gray-700'
              }
            `}>
              <Sparkles className="w-3 h-3" />
              Our Services
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            <span className={isDark ? 'text-white' : 'text-gray-900'}>
              Tailored Consulting
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              For Every Growth Stage
            </span>
          </h1>

          {/* Description */}
          <p className={`max-w-2xl mx-auto text-sm sm:text-base mb-6 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            From startups to enterprises, we provide customized solutions 
            that address your unique challenges.
          </p>

          {/* Feature Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`
                  flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs
                  transition-all duration-300 hover:scale-105
                  ${isDark 
                    ? 'bg-white/10 text-white/80 hover:bg-white/15' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                <feature.icon className="w-3 h-3" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="group relative px-6 py-2.5 rounded-lg overflow-hidden text-sm font-semibold transition-all duration-500 ease-out hover:scale-105 active:scale-95">
            <div className={`absolute inset-0 transition-all duration-500 ease-out ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
            <div className={`absolute inset-[1px] rounded-lg transition-all duration-500 ease-out ${isDark ? 'bg-black/5' : 'bg-white/10'}`} />
            <span className={`relative z-10 flex items-center gap-2 transition-all duration-500 ease-out font-semibold ${isDark ? 'text-gray-900' : 'text-white'}`}>
              Explore All Services
              <ArrowRight className="w-3.5 h-3.5 transition-all duration-500 ease-out group-hover:translate-x-1" />
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