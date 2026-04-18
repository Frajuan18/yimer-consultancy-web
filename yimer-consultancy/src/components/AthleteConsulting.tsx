// components/AthleteConsulting.tsx
import React, { useState } from 'react';
import { useTheme } from '../components/ThemeContext';
import { 
  ArrowRight, 
  Sparkles,
  Trophy,
  Star,
  Briefcase,
  Globe,
  TrendingUp,
  Award,
  CheckCircle,
  X
} from 'lucide-react';

export const AthleteConsulting: React.FC = () => {
  const { isDarkMode } = useTheme();
  const isDark = isDarkMode;
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

  const openModal = (id: number) => {
    setSelectedService(id);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const currentService = selectedService !== null ? services.find(s => s.id === selectedService) : null;

  return (
    <section className={`relative py-20 poppins ${isDark ? 'bg-black' : 'bg-white'}`}>
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
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <div className={`
              inline-flex items-center gap-1.5 px-3 py-1 rounded-full
              text-xs font-medium
              ${isDark 
                ? 'bg-white/10 text-white/80' 
                : 'bg-gray-100 text-gray-700'
              }
            `}>
              <Trophy className="w-3 h-3" />
              Athlete Consulting
            </div>
          </div>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Elevate Your Athletic Career
            <br />
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Beyond the Game
            </span>
          </h2>
          <p className={`max-w-2xl mx-auto text-sm sm:text-base ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            Comprehensive consulting for athletes ready to maximize their potential
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              className={`
                group relative rounded-xl p-5
                border-2 transition-all duration-500 ease-out
                cursor-pointer
                ${selectedService === service.id 
                  ? `${service.borderColor} shadow-xl ${service.color.replace('text', 'shadow')}/20 scale-[1.02]`
                  : (isDark ? 'border-white/10 hover:border-white/20' : 'border-gray-200 hover:border-gray-300')
                }
                hover:scale-[1.02] hover:-translate-y-1
                ${isDark ? 'bg-black/40' : 'bg-white'}
              `}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => openModal(service.id)}
            >
              {/* Icon */}
              <div className={`
                inline-flex p-2.5 rounded-xl mb-3
                ${service.bgColor}
                transition-all duration-500
                group-hover:scale-110
              `}>
                <service.icon className={`w-5 h-5 ${service.color}`} />
              </div>

              {/* Title */}
              <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className={`text-sm mb-3 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                {service.shortDesc}
              </p>

              {/* Divider */}
              <div className={`my-3 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`} />

              {/* Interactive Element - Shows on hover */}
              <div className={`
                overflow-hidden transition-all duration-500
                ${hoveredCard === service.id ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}
              `}>
                <p className={`text-xs leading-relaxed mb-2 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                  {service.fullDescription.substring(0, 80)}...
                </p>
                <div className={`text-xs font-medium ${service.color} flex items-center gap-1`}>
                  Click to learn more <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Static hint when not hovered */}
              <div className={`
                transition-opacity duration-300
                ${hoveredCard === service.id ? 'opacity-0' : 'opacity-100'}
              `}>
                <span className={`text-xs ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
                  Hover + Click
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className={`
          mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-xl
          border ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'}
        `}>
          <div className="text-center group cursor-pointer">
            <div className={`text-2xl font-bold group-hover:scale-110 transition-transform duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>150+</div>
            <div className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>Athletes Guided</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className={`text-2xl font-bold group-hover:scale-110 transition-transform duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>3x</div>
            <div className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>Brand Value Growth</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className={`text-2xl font-bold group-hover:scale-110 transition-transform duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>$50M+</div>
            <div className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>Sponsorship Deals</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className={`text-2xl font-bold group-hover:scale-110 transition-transform duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>98%</div>
            <div className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>Satisfaction Rate</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button className="group relative px-6 py-2.5 rounded-lg overflow-hidden text-sm font-semibold transition-all duration-500 ease-out hover:scale-105 active:scale-95">
            <div className={`absolute inset-0 transition-all duration-500 ease-out ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
            <div className={`absolute inset-[1px] rounded-lg transition-all duration-500 ease-out ${isDark ? 'bg-black/5' : 'bg-white/10'}`} />
            <span className={`relative z-10 flex items-center gap-2 transition-all duration-500 ease-out font-semibold ${isDark ? 'text-gray-900' : 'text-white'}`}>
              Start Your Journey
              <ArrowRight className="w-3.5 h-3.5 transition-all duration-500 ease-out group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>

      {/* Modal for Service Details */}
      {selectedService !== null && currentService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={closeModal}>
          <div 
            className={`
              relative max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-2xl
              border-2 ${currentService.borderColor}
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
                absolute top-4 right-4 z-10 p-2 rounded-full
                transition-all duration-300 hover:scale-110
                ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}
              `}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              <div className="text-center mb-6">
                <div className={`
                  inline-flex p-3 rounded-2xl mb-4
                  ${currentService.bgColor}
                `}>
                  <currentService.icon className={`w-8 h-8 ${currentService.color}`} />
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {currentService.title}
                </h3>
                <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                  {currentService.shortDesc}
                </p>
              </div>

              <div className={`p-5 rounded-xl mb-6 ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                  {currentService.fullDescription}
                </p>
              </div>

              <h4 className={`text-sm font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                What's Included:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {currentService.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className={`w-4 h-4 ${currentService.color}`} />
                    <span className={`text-sm ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className={`p-4 rounded-xl text-center ${currentService.bgColor}`}>
                <div className={`text-sm font-semibold mb-1 ${currentService.color}`}>
                  Expected Outcome
                </div>
                <div className={`text-base font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {currentService.outcome}
                </div>
                <div className={`text-xs mt-1 ${currentService.color}`}>
                  {currentService.successRate}
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full group relative px-6 py-3 rounded-lg overflow-hidden text-sm font-semibold transition-all duration-500 hover:scale-[1.02]">
                  <div className={`absolute inset-0 transition-all duration-500 ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
                  <div className={`absolute inset-[1px] rounded-lg transition-all duration-500 ${isDark ? 'bg-black/5' : 'bg-white/10'}`} />
                  <span className={`relative z-10 flex items-center justify-center gap-2 ${isDark ? 'text-gray-900' : 'text-white'}`}>
                    Get Started with {currentService.title}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
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
      `}</style>
    </section>
  );
};