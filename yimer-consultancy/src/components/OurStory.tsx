// components/OurStory.tsx
import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../components/ThemeContext';
import { 
  Quote, Sparkles, ArrowRight, Calendar, Users, Globe, Award, 
  Target, Rocket, Zap, Heart, Star, Play, Pause, ChevronLeft, 
  ChevronRight, Clock, Briefcase, TrendingUp, Shield, Lightbulb,
  CheckCircle, RotateCcw
} from 'lucide-react';

export const OurStory: React.FC = () => {
  const { isDarkMode } = useTheme();
  const isDark = isDarkMode;
  const [activeChapter, setActiveChapter] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const chapters = [
    {
      year: '2014',
      title: 'The Beginning',
      subtitle: 'A Bold Vision',
      icon: Lightbulb,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      fullStory: `It started with a simple belief: businesses deserved more than generic advice. In a small office with just two chairs, a laptop, and an unwavering vision, Yimer Consultancy was born. We weren't just another consulting firm - we were on a mission to become genuine partners in our clients' success.

Those first months were challenging. We worked late nights, turned down projects that didn't align with our values, and built relationships one coffee meeting at a time. But by the end of 2014, we had helped our first 5 clients achieve remarkable results. Word spread. People noticed. We were just getting started.`,
      achievement: 'First 5 clients acquired',
      metric: '100% client satisfaction'
    },
    {
      year: '2016',
      title: 'Building Momentum',
      subtitle: 'Team & Trust',
      icon: Users,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      fullStory: `By 2016, our small team had grown into a family of 10 passionate experts. We moved into a bigger space - walls covered in strategy maps, whiteboards filled with ideas, and the constant hum of collaboration.

This was when our reputation truly took off. Clients weren't just satisfied; they were becoming raving fans. Our referral network exploded, and we found ourselves turning away projects because we refused to compromise on quality. We learned a crucial lesson: growth is meaningless without excellence.

That year, we also launched our first mentorship program, investing in the next generation of consultants. Because building a great company isn't just about profits - it's about people.`,
      achievement: 'Team grew to 10+ experts',
      metric: '200% revenue growth'
    },
    {
      year: '2018',
      title: 'Going Global',
      subtitle: 'International Expansion',
      icon: Globe,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      fullStory: `2018 was the year we spread our wings. When a European tech company reached out for help scaling their operations, we didn't hesitate. We assembled a team, flew across the Atlantic, and delivered results that exceeded every expectation.

That single project opened floodgates. Suddenly, we were working with clients across three continents. We embraced remote collaboration, built international teams, and developed a global mindset that became central to our approach.

The challenges of cross-cultural consulting taught us invaluable lessons about adaptability, communication, and the universal principles of business success. We weren't just a local consultancy anymore - we were a global force.`,
      achievement: 'First international client',
      metric: '3 continents served'
    },
    {
      year: '2020',
      title: 'The Digital Pivot',
      subtitle: 'Adapting & Thriving',
      icon: Zap,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
      fullStory: `When the world changed overnight in 2020, we didn't retreat - we reinvented. While others paused, we accelerated. We launched our Digital Transformation practice, helping businesses not just survive but thrive in the new normal.

We developed frameworks for remote strategy sessions, virtual workshops, and digital execution. Our team became experts in guiding companies through uncertainty, turning crisis into opportunity.

The result? We helped over 100 businesses pivot successfully. Many of our clients emerged stronger than before, and we discovered that our greatest value wasn't in the advice we gave - it was in the confidence we inspired.`,
      achievement: '100+ businesses pivoted',
      metric: 'Digital Transformation launched'
    },
    {
      year: '2022',
      title: 'Peak Performance',
      subtitle: '500 & Beyond',
      icon: Award,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      fullStory: `By 2022, we had crossed a milestone that once seemed impossible: 500 successful clients. But more than the number, what mattered was the impact. Our clients had achieved over $500M in collective growth, created thousands of jobs, and transformed their industries.

We were recognized as a top consultancy firm, featured in industry publications, and invited to speak at global conferences. But our greatest reward remained the same: seeing a client's face when they achieve something they once thought impossible.

That year, we also launched our proprietary strategy framework, codifying everything we'd learned into a methodology that guarantees results. We weren't just consultants anymore - we were architects of success.`,
      achievement: '500+ clients served',
      metric: '$500M+ client growth'
    },
    {
      year: '2024',
      title: 'Today & Tomorrow',
      subtitle: 'The Future Unfolds',
      icon: Star,
      color: 'text-rose-500',
      bgColor: 'bg-rose-500/10',
      borderColor: 'border-rose-500/30',
      fullStory: `Today, Yimer Consultancy stands as a beacon of excellence in the consulting world. With a team of 50+ experts, offices across three continents, and a portfolio of 500+ successful clients, we've proven that our approach works.

But we're not resting. We're investing in AI-driven analytics, expanding our sustainability practice, and building the next generation of consulting tools. Our mission remains unchanged: to empower businesses with strategic clarity and execution excellence.

The future holds endless possibilities. New markets to enter, new challenges to solve, new success stories to write. And we want you to be part of it. Our journey continues - and the best chapters are yet to come.`,
      achievement: 'Global recognition',
      metric: 'Ready for your success'
    }
  ];

  // Auto-play timer for changing chapters
  useEffect(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveChapter((prev) => {
          if (prev + 1 >= chapters.length) {
            setIsAutoPlaying(false);
            setTimeRemaining(60);
            return prev;
          }
          setTimeRemaining(60);
          return prev + 1;
        });
      }, 60000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, chapters.length]);

  // Countdown timer
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    if (isAutoPlaying) {
      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            return 60;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setTimeRemaining(60);
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isAutoPlaying, activeChapter]);

  const nextChapter = () => {
    if (activeChapter + 1 < chapters.length) {
      setActiveChapter((prev) => prev + 1);
      setIsAutoPlaying(false);
      setTimeRemaining(60);
    }
  };

  const prevChapter = () => {
    if (activeChapter - 1 >= 0) {
      setActiveChapter((prev) => prev - 1);
      setIsAutoPlaying(false);
      setTimeRemaining(60);
    }
  };

  const goToChapter = (index: number) => {
    setActiveChapter(index);
    setIsAutoPlaying(false);
    setTimeRemaining(60);
  };

  const restartAutoPlay = () => {
    setActiveChapter(0);
    setIsAutoPlaying(true);
    setTimeRemaining(60);
  };

  const currentChapter = chapters[activeChapter];
  const isFirstChapter = activeChapter === 0;
  const isLastChapter = activeChapter === chapters.length - 1;

  // Calculate circular progress
  const radius = 14;
  const circumference = 2 * Math.PI * radius;
  const progress = ((60 - timeRemaining) / 60) * circumference;
  const strokeDashoffset = circumference - progress;

  return (
    <section className={`relative py-24 poppins pt-32 lg:pt-40 ${isDark ? 'bg-black' : 'bg-white'}`}>
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
          <div className="inline-block mb-4">
            <span className={`
              text-sm font-medium px-4 py-1.5 rounded-full
              transition-all duration-200
              ${isDark 
                ? 'bg-white/10 text-white/80' 
                : 'bg-gray-100 text-gray-700'
              }
            `}>
              Our Story
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            A Journey of
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Excellence & Impact
            </span>
          </h2>
          <p className={`max-w-2xl mx-auto text-base sm:text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            Explore our evolution from a bold idea to a global consultancy
          </p>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-8">
          {chapters.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToChapter(idx)}
              className={`
                h-1 rounded-full transition-all duration-300
                ${activeChapter === idx 
                  ? `w-8 ${isDark ? 'bg-white' : 'bg-gray-900'}`
                  : `w-4 ${isDark ? 'bg-white/20 hover:bg-white/30' : 'bg-gray-300 hover:bg-gray-400'}`
                }
              `}
            />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Chapter Navigation */}
          <div className="order-2 lg:order-1">
            <div className={`
              rounded-2xl p-6 border
              ${isDark 
                ? 'bg-black/40 border-white/10' 
                : 'bg-gray-50 border-gray-200'
              }
            `}>
              <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <Clock className="w-5 h-5" />
                Timeline Explorer
              </h3>
              
              <div className="space-y-2">
                {chapters.map((chapter, idx) => (
                  <div
                    key={idx}
                    className={`
                      group relative cursor-pointer rounded-xl p-3
                      transition-all duration-300
                      ${activeChapter === idx 
                        ? (isDark ? 'bg-white/10' : 'bg-white shadow-sm')
                        : (isDark ? 'hover:bg-white/5' : 'hover:bg-white/50')
                      }
                    `}
                    onClick={() => goToChapter(idx)}
                    onMouseEnter={() => setHoveredMilestone(idx)}
                    onMouseLeave={() => setHoveredMilestone(null)}
                  >
                    <div className="flex items-center gap-3">
                      {/* Circular progress indicator for active chapter */}
                      <div className="relative w-10 h-10">
                        {isAutoPlaying && activeChapter === idx && (
                          <svg className="absolute inset-0 w-full h-full -rotate-90">
                            <circle
                              cx="20"
                              cy="20"
                              r={radius}
                              fill="none"
                              stroke={isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}
                              strokeWidth="2"
                            />
                            <circle
                              cx="20"
                              cy="20"
                              r={radius}
                              fill="none"
                              stroke={chapter.color.replace('text', '').trim()}
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeDasharray={circumference}
                              strokeDashoffset={strokeDashoffset}
                              className="transition-all duration-1000"
                            />
                          </svg>
                        )}
                        <div className={`
                          absolute inset-0 rounded-full flex items-center justify-center
                          transition-all duration-300
                          ${activeChapter === idx 
                            ? chapter.bgColor
                            : (isDark ? 'bg-white/5' : 'bg-gray-100')
                          }
                          ${hoveredMilestone === idx ? 'scale-105' : 'scale-100'}
                        `}>
                          <chapter.icon className={`w-4 h-4 ${chapter.color}`} />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2">
                          <span className={`text-sm font-bold ${chapter.color}`}>
                            {chapter.year}
                          </span>
                          <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {chapter.title}
                          </span>
                        </div>
                        <p className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                          {chapter.subtitle}
                        </p>
                      </div>
                      {activeChapter === idx && !isAutoPlaying && (
                        <CheckCircle className={`w-4 h-4 ${chapter.color}`} />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Auto-play controls */}
              <div className={`mt-4 pt-3 border-t flex items-center justify-between ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className={`
                      flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-lg
                      transition-all duration-300
                      ${isDark 
                        ? 'bg-white/10 hover:bg-white/20 text-white/80' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }
                    `}
                  >
                    {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    {isAutoPlaying ? 'Auto-playing' : 'Auto-play off'}
                  </button>
                  
                  <button
                    onClick={restartAutoPlay}
                    className={`
                      flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-lg
                      transition-all duration-300
                      ${isDark 
                        ? 'bg-white/10 hover:bg-white/20 text-white/80' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }
                    `}
                  >
                    <RotateCcw className="w-3 h-3" />
                    Restart
                  </button>
                </div>
                
                <div className="flex gap-1">
                  <button 
                    onClick={prevChapter} 
                    disabled={isFirstChapter}
                    className={`
                      p-1 rounded transition-all hover:scale-110
                      ${isFirstChapter ? 'opacity-30 cursor-not-allowed' : ''}
                      ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-200'}
                    `}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={nextChapter} 
                    disabled={isLastChapter}
                    className={`
                      p-1 rounded transition-all hover:scale-110
                      ${isLastChapter ? 'opacity-30 cursor-not-allowed' : ''}
                      ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-200'}
                    `}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className={`
              mt-4 rounded-2xl p-6 border
              ${isDark 
                ? 'bg-black/40 border-white/10' 
                : 'bg-gray-50 border-gray-200'
              }
            `}>
              <Quote className={`w-8 h-8 mb-3 ${isDark ? 'text-white/40' : 'text-gray-400'}`} />
              <p className={`text-sm italic mb-3 ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                "Every challenge we faced became an opportunity. Every client we served became family. 
                This isn't just our story - it's the story of everyone who believed in us."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">YM</span>
                </div>
                <div>
                  <div className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Yimer Mekonnen
                  </div>
                  <div className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                    Founder & CEO
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Active Chapter Display */}
          <div className="order-1 lg:order-2">
            <div className={`
              relative rounded-2xl p-8 border
              transition-all duration-500 ease-out
              animate-fade-in
              ${isDark 
                ? 'bg-black/60 border-white/10' 
                : 'bg-white/80 border-gray-200'
              }
            `}>
              {/* Year badge */}
              <div className="inline-flex mb-6">
                <span className={`
                  text-2xl font-bold px-3 py-1.5 rounded-lg
                  ${currentChapter.color}
                  ${isDark ? 'bg-white/5' : 'bg-gray-100'}
                `}>
                  {currentChapter.year}
                </span>
              </div>

              {/* Title */}
              <h3 className={`text-2xl sm:text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {currentChapter.title}
              </h3>
              <p className={`text-sm mb-4 ${currentChapter.color}`}>
                {currentChapter.subtitle}
              </p>

              {/* Full story */}
              <div className={`space-y-3 mb-6 max-h-96 overflow-y-auto pr-2 custom-scrollbar`}>
                {currentChapter.fullStory.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className={`text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Achievement & Metric */}
              <div className={`
                flex flex-col sm:flex-row gap-3 pt-4 border-t
                ${isDark ? 'border-white/10' : 'border-gray-200'}
              `}>
                <div className="flex-1 flex items-center gap-2">
                  <Award className={`w-4 h-4 ${currentChapter.color}`} />
                  <div>
                    <div className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                      Key Achievement
                    </div>
                    <div className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {currentChapter.achievement}
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex items-center gap-2">
                  <TrendingUp className={`w-4 h-4 ${currentChapter.color}`} />
                  <div>
                    <div className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                      Impact Metric
                    </div>
                    <div className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {currentChapter.metric}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation hint */}
        <div className="text-center mt-8">
          <p className={`text-xs ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
            {isFirstChapter ? 'Start of journey' : isLastChapter ? 'End of journey - Be part of our future' : `Chapter ${activeChapter + 1} of ${chapters.length}`}
          </p>
        </div>
      </div>

      <style>{`
        .poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'};
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'};
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: ${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'};
        }
      `}</style>
    </section>
  );
};