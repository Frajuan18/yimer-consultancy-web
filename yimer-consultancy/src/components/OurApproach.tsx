// components/OurApproach.tsx
import React, { useState } from 'react';
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
              Our Approach
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            How We Transform
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Businesses Like Yours
            </span>
          </h2>
          <p className={`max-w-2xl mx-auto text-base sm:text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            A proven methodology that delivers measurable results
          </p>
        </div>

        {/* Cards Grid - using items-start to prevent grid row stretching */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`
                rounded-2xl p-5
                border-2 transition-all duration-500 ease-out
                cursor-pointer
                flex flex-col
                ${isDark 
                  ? 'bg-black/40 border-white/10 hover:border-white/20' 
                  : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                }
                hover:scale-[1.02] hover:-translate-y-1
                hover:shadow-2xl
              `}
              onMouseEnter={() => setActiveStep(idx)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Number */}
              <div className={`text-xs font-bold ${step.color} mb-2`}>
                {step.number}
              </div>

              {/* Icon */}
              <div className={`
                inline-flex p-2.5 rounded-xl mb-3
                ${step.bgColor}
                transition-all duration-500
              `}>
                <step.icon className={`w-5 h-5 ${step.color}`} />
              </div>

              {/* Title */}
              <h3 className={`font-bold text-lg mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {step.title}
              </h3>
              
              {/* Subtitle */}
              <p className={`text-xs mb-3 ${step.color}`}>
                {step.subtitle}
              </p>

              {/* Description */}
              <p className={`text-sm mb-3 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                {step.description}
              </p>

              {/* Details - Expand naturally */}
              <div className={`
                overflow-hidden transition-all duration-500 ease-out
                ${activeStep === idx ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}
              `}>
                <div className={`pt-3 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                  <div className="space-y-2">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className={`w-3 h-3 mt-0.5 ${step.color}`} />
                        <span className={`text-xs ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-1">
                    <div className="flex items-center gap-2">
                      <Target className={`w-3 h-3 ${step.color}`} />
                      <span className={`text-xs font-medium ${step.color}`}>
                        {step.outcome}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover hint - visible only when not expanded */}
              {activeStep !== idx && (
                <div className="mt-3 pt-2">
                  <div className={`text-[10px] ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
                    Hover for details →
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process Flow Arrows - Desktop */}
        <div className="hidden lg:flex justify-center gap-8 mt-8">
          {steps.slice(0, -1).map((_, idx) => (
            <div key={idx} className="w-12 flex justify-center">
              <ArrowRight className={`w-5 h-5 ${isDark ? 'text-white/20' : 'text-gray-300'}`} />
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className={`
          mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl
          border ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'}
        `}>
          <div className="text-center">
            <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>4</div>
            <div className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>Proven Phases</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>12</div>
            <div className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>Weeks Avg Timeline</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>100%</div>
            <div className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>3.5x</div>
            <div className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>Avg ROI Delivered</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
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
        .poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </section>
  );
};