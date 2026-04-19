// SuccessHighlights.tsx - Fully responsive across all devices
import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { 
  Users, 
  TrendingUp, 
  Award, 
  Globe, 
  Star, 
  Quote,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const SuccessHighlights: React.FC = () => {
  const { isDarkMode } = useTheme();
  const isDark = isDarkMode;
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stats = [
    {
      value: '500+',
      label: 'Clients Helped',
      icon: Users,
      color: 'text-blue-500',
      bgIcon: 'bg-blue-500/10',
      description: 'Businesses transformed'
    },
    {
      value: '312%',
      label: 'Average Growth',
      icon: TrendingUp,
      color: 'text-green-500',
      bgIcon: 'bg-green-500/10',
      description: 'Revenue increase for clients'
    },
    {
      value: '98%',
      label: 'Client Retention',
      icon: Award,
      color: 'text-amber-500',
      bgIcon: 'bg-amber-500/10',
      description: 'Long-term partnerships'
    },
    {
      value: '20+',
      label: 'Countries',
      icon: Globe,
      color: 'text-purple-500',
      bgIcon: 'bg-purple-500/10',
      description: 'Global reach'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Solutions',
      content: 'Yimer Consultancy transformed our entire business model. Within 6 months, we saw a 200% increase in revenue and our operations became 3x more efficient. Their strategic guidance was invaluable.',
      rating: 5,
      image: 'SJ',
      company: 'TechStart Solutions'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, GrowthLabs',
      content: 'The team at Yimer helped us scale from a startup to a market leader. Their expertise in digital transformation and strategic planning gave us the competitive edge we needed.',
      rating: 5,
      image: 'MC',
      company: 'GrowthLabs'
    },
    {
      name: 'David Williams',
      role: 'COO, Global Innovations',
      content: 'Working with Yimer was a game-changer. Their data-driven approach and hands-on support helped us optimize operations and increase profitability by 156% in just one year.',
      rating: 5,
      image: 'DW',
      company: 'Global Innovations'
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextTestimonial();
    }
    if (isRightSwipe) {
      prevTestimonial();
    }
  };

  return (
    <section className={`relative py-12 xs:py-16 sm:py-20 lg:py-24 poppins ${isDark ? 'bg-black' : 'bg-white'}`}>
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
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          <div className="inline-block mb-3 xs:mb-4">
            <span className={`
              text-[10px] xs:text-xs sm:text-sm font-medium 
              px-3 xs:px-4 py-1 xs:py-1.5 rounded-full
              transition-all duration-200
              ${isDark 
                ? 'bg-white/10 text-white/80' 
                : 'bg-gray-100 text-gray-700'
              }
            `}>
              Success Highlights
            </span>
          </div>
          <h2 className={`
            text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4 px-2
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            Real Results That
            <br className="hidden xs:block" />
            <span className="xs:hidden"> </span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Speak for Themselves
            </span>
          </h2>
          <p className={`
            max-w-2xl mx-auto text-xs xs:text-sm sm:text-base lg:text-lg px-4
            ${isDark ? 'text-white/60' : 'text-gray-600'}
          `}>
            Measurable outcomes and genuine client satisfaction
          </p>
        </div>

        {/* Stats Grid - Fully responsive */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 lg:gap-6 mb-12 xs:mb-16 sm:mb-20">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`
                group relative rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6 text-center
                border transition-all duration-500 ease-out
                grain-overlay cursor-pointer
                ${isDark 
                  ? 'bg-black/60 border-white/8 md:hover:bg-black/70 md:hover:border-white/20' 
                  : 'bg-white/80 border-gray-200 md:hover:bg-white md:hover:border-gray-300'
                }
                ${!isMobile ? 'md:hover:scale-[1.02] md:hover:-translate-y-1' : ''}
                ${!isMobile ? 'md:hover:shadow-2xl' : 'active:scale-[0.99]'}
              `}
            >
              <div className={`
                inline-flex p-2 xs:p-2.5 sm:p-3 rounded-lg xs:rounded-xl mb-2 xs:mb-3
                ${stat.bgIcon}
                transition-all duration-500 ease-out
                ${!isMobile ? 'md:group-hover:scale-110' : ''}
              `}>
                <stat.icon className={`w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 ${stat.color}`} />
              </div>
              <div className={`
                text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 xs:mb-1 
                ${isDark ? 'text-white' : 'text-gray-900'}
              `}>
                {stat.value}
              </div>
              <div className={`
                text-[10px] xs:text-xs sm:text-sm font-medium mb-0.5 xs:mb-1 
                ${isDark ? 'text-white/70' : 'text-gray-700'}
              `}>
                {stat.label}
              </div>
              <div className={`
                text-[8px] xs:text-[10px] sm:text-xs 
                ${isDark ? 'text-white/40' : 'text-gray-500'}
              `}>
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-6 xs:mb-8">
          <div className="inline-flex items-center gap-1.5 xs:gap-2 mb-3 xs:mb-4">
            <Star className="w-4 h-4 xs:w-5 xs:h-5 text-yellow-500 fill-yellow-500" />
            <span className={`text-xs xs:text-sm font-medium ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
              Client Testimonials
            </span>
            <Star className="w-4 h-4 xs:w-5 xs:h-5 text-yellow-500 fill-yellow-500" />
          </div>
          <h3 className={`
            text-xl xs:text-2xl md:text-3xl font-bold mb-1.5 xs:mb-2 
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            What Our Clients Say
          </h3>
          <p className={`
            text-[10px] xs:text-xs sm:text-sm 
            ${isDark ? 'text-white/50' : 'text-gray-500'}
          `}>
            Trusted by industry leaders worldwide
          </p>
        </div>

        {/* Testimonial Carousel - With touch swipe */}
        <div className="max-w-4xl mx-auto">
          <div 
            className={`
              relative rounded-xl xs:rounded-2xl p-5 xs:p-6 sm:p-8 md:p-10
              border transition-all duration-500 ease-out
              grain-overlay
              ${isDark 
                ? 'bg-black/60 border-white/8' 
                : 'bg-white/80 border-gray-200'
              }
            `}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Quote Icon */}
            <div className="absolute top-4 right-4 xs:top-6 xs:right-6 opacity-20">
              <Quote className={`w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 ${isDark ? 'text-white' : 'text-gray-400'}`} />
            </div>

            {/* Rating Stars */}
            <div className="flex gap-0.5 xs:gap-1 mb-4 xs:mb-6">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>

            {/* Testimonial Content */}
            <p className={`
              text-sm xs:text-base md:text-lg leading-relaxed mb-4 xs:mb-6 relative z-10
              ${isDark ? 'text-white/80' : 'text-gray-700'}
            `}>
              "{testimonials[activeTestimonial].content}"
            </p>

            {/* Client Info */}
            <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-4">
              <div className="flex items-center gap-3 xs:gap-4">
                <div className={`
                  w-10 h-10 xs:w-12 xs:h-12 rounded-full flex items-center justify-center
                  ${isDark ? 'bg-white/10' : 'bg-gray-200'}
                `}>
                  <span className={`text-xs xs:text-sm font-bold ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    {testimonials[activeTestimonial].image}
                  </span>
                </div>
                <div>
                  <div className={`
                    font-semibold text-sm xs:text-base
                    ${isDark ? 'text-white' : 'text-gray-900'}
                  `}>
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className={`
                    text-[10px] xs:text-xs 
                    ${isDark ? 'text-white/50' : 'text-gray-500'}
                  `}>
                    {testimonials[activeTestimonial].role}
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <div className="flex gap-1.5 xs:gap-2 w-full xs:w-auto justify-end">
                <button
                  onClick={prevTestimonial}
                  className={`
                    p-2 xs:p-2.5 rounded-lg transition-all duration-300
                    hover:scale-105 active:scale-95
                    ${isDark 
                      ? 'bg-white/10 hover:bg-white/20 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }
                  `}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className={`
                    p-2 xs:p-2.5 rounded-lg transition-all duration-300
                    hover:scale-105 active:scale-95
                    ${isDark 
                      ? 'bg-white/10 hover:bg-white/20 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }
                  `}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                </button>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-1.5 xs:gap-2 mt-5 xs:mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`
                    transition-all duration-300 rounded-full
                    ${activeTestimonial === idx 
                      ? `w-4 xs:w-6 h-1.5 xs:h-2 ${isDark ? 'bg-white' : 'bg-gray-900'}` 
                      : `w-1.5 xs:w-2 h-1.5 xs:h-2 ${isDark ? 'bg-white/30' : 'bg-gray-300'}`
                    }
                  `}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 xs:mt-10 sm:mt-12">
          <button className="group relative px-6 xs:px-8 py-2.5 xs:py-3 rounded-lg overflow-hidden text-xs xs:text-sm font-semibold transition-all duration-500 ease-out hover:scale-105 active:scale-95">
            <div className={`absolute inset-0 transition-all duration-500 ease-out ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
            <div className={`absolute inset-[1px] rounded-lg transition-all duration-500 ease-out ${isDark ? 'bg-black/5' : 'bg-white/10'}`} />
            <span className={`relative z-10 flex items-center gap-2 transition-all duration-500 ease-out font-semibold ${isDark ? 'text-gray-900' : 'text-white'}`}>
              Read More Success Stories
              <ArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 transition-all duration-500 ease-out group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        .poppins {
          font-family: 'Poppins', sans-serif;
        }
        
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
            gap: 0.5rem;
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .grid {
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};