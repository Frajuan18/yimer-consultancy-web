// components/Team.tsx - Fully responsive across all devices
import React, { useState, useEffect } from 'react';
import { useTheme } from '../components/ThemeContext';
import { 
  Mail, 
  Briefcase,
  Clock,
  Star,
  Quote,
  Award,
  MapPin,
  GraduationCap,
  X
} from 'lucide-react';

export const Team: React.FC = () => {
  const { isDarkMode } = useTheme();
  const isDark = isDarkMode;
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    if (selectedMember !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMember]);

  const teamMembers = [
    {
      id: 0,
      name: 'Yimer Mekonnen',
      role: 'Founder & CEO',
      image: 'YM',
      color: 'from-blue-500 to-purple-500',
      textColor: 'text-blue-500',
      borderColor: 'border-blue-500/30',
      glowColor: 'shadow-blue-500/20',
      badge: 'Strategic Visionary',
      experience: '15+ years',
      projects: '200+',
      satisfaction: '98%',
      bio: 'Former McKinsey consultant with a passion for helping businesses unlock their full potential. Yimer founded the consultancy to bring enterprise-level strategy to growing companies.',
      expertise: ['Strategic Planning', 'Business Transformation', 'Leadership Development'],
      education: 'MBA, Harvard Business School',
      location: 'New York, NY',
      email: 'yimer@yimer.com'
    },
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Head of Strategy',
      image: 'SJ',
      color: 'from-green-500 to-emerald-500',
      textColor: 'text-green-500',
      borderColor: 'border-green-500/30',
      glowColor: 'shadow-green-500/20',
      badge: 'Strategy Expert',
      experience: '12+ years',
      projects: '150+',
      satisfaction: '95%',
      bio: 'Strategy specialist with a background in management consulting. Sarah helps businesses navigate complex challenges and identify growth opportunities.',
      expertise: ['Market Analysis', 'Competitive Strategy', 'Growth Planning'],
      education: 'MSc, London School of Economics',
      location: 'London, UK',
      email: 'sarah@yimer.com'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Digital Transformation Lead',
      image: 'MC',
      color: 'from-amber-500 to-orange-500',
      textColor: 'text-amber-500',
      borderColor: 'border-amber-500/30',
      glowColor: 'shadow-amber-500/20',
      badge: 'Tech Innovator',
      experience: '10+ years',
      projects: '120+',
      satisfaction: '100%',
      bio: 'Tech enthusiast and digital transformation expert. Michael leads our technology practice, helping businesses modernize and scale.',
      expertise: ['Digital Strategy', 'Cloud Migration', 'Process Automation'],
      education: 'MS, Stanford University',
      location: 'San Francisco, CA',
      email: 'michael@yimer.com'
    },
    {
      id: 3,
      name: 'David Williams',
      role: 'Head of Operations',
      image: 'DW',
      color: 'from-purple-500 to-pink-500',
      textColor: 'text-purple-500',
      borderColor: 'border-purple-500/30',
      glowColor: 'shadow-purple-500/20',
      badge: 'Operations Guru',
      experience: '18+ years',
      projects: '180+',
      satisfaction: '99%',
      bio: 'Operations expert with a track record of optimizing complex processes. David ensures our clients\' operations run smoothly and efficiently.',
      expertise: ['Process Optimization', 'Supply Chain', 'Quality Management'],
      education: 'MBA, INSEAD',
      location: 'Singapore',
      email: 'david@yimer.com'
    }
  ];

  const handleMemberClick = (idx: number) => {
    setSelectedMember(selectedMember === idx ? null : idx);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  const currentSelected = selectedMember !== null ? teamMembers[selectedMember] : null;

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
              Our Team
            </span>
          </div>
          <h2 className={`
            text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4 px-2
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            Meet the Experts
            <br className="hidden xs:block" />
            <span className="xs:hidden"> </span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Behind Your Success
            </span>
          </h2>
          <p className={`
            max-w-2xl mx-auto text-xs xs:text-sm sm:text-base px-4
            ${isDark ? 'text-white/60' : 'text-gray-600'}
          `}>
            A diverse team of passionate professionals dedicated to your growth
          </p>
        </div>

        {/* Team Profiles Grid - Responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 lg:gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`
                group relative rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6
                border transition-all duration-500 ease-out
                cursor-pointer
                ${selectedMember === member.id 
                  ? `${member.borderColor} shadow-xl ${member.glowColor} scale-[1.01] xs:scale-[1.02]`
                  : (isDark ? 'border-white/10 md:hover:border-white/20' : 'border-gray-200 md:hover:border-gray-300')
                }
                ${!isMobile && !isTablet ? 'md:hover:scale-[1.02] md:hover:-translate-y-1' : 'active:scale-[0.99]'}
                ${isDark ? 'bg-black/40' : 'bg-white'}
              `}
              onClick={() => handleMemberClick(member.id)}
            >
              {/* Avatar */}
              <div className={`
                w-16 h-16 xs:w-20 xs:h-20 rounded-full mx-auto mb-3 xs:mb-4
                bg-gradient-to-r ${member.color}
                flex items-center justify-center
                transition-all duration-500
                ${!isMobile && !isTablet ? 'md:group-hover:scale-110' : ''}
                shadow-lg
              `}>
                <span className="text-base xs:text-xl font-bold text-white">{member.image}</span>
              </div>

              {/* Name */}
              <h3 className={`
                text-center text-base xs:text-lg sm:text-xl font-bold mb-0.5 xs:mb-1 
                ${isDark ? 'text-white' : 'text-gray-900'}
              `}>
                {member.name}
              </h3>
              
              {/* Role */}
              <p className={`text-center text-xs xs:text-sm mb-2 xs:mb-3 font-medium ${member.textColor}`}>
                {member.role}
              </p>

              {/* Badge */}
              <div className={`
                text-center text-[10px] xs:text-xs px-2 xs:px-3 py-0.5 xs:py-1 rounded-full mx-auto w-fit mb-3 xs:mb-4
                ${member.textColor} ${member.textColor.replace('text', 'bg')}/10
              `}>
                {member.badge}
              </div>

              {/* Stats */}
              <div className="space-y-1.5 xs:space-y-2 pt-2 xs:pt-3 border-t border-gray-200 dark:border-white/10">
                <div className="flex items-center justify-between text-xs xs:text-sm">
                  <span className={`flex items-center gap-1 xs:gap-1.5 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                    <Clock className="w-3 h-3 xs:w-3.5 xs:h-3.5" />
                    Experience
                  </span>
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {member.experience}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs xs:text-sm">
                  <span className={`flex items-center gap-1 xs:gap-1.5 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                    <Briefcase className="w-3 h-3 xs:w-3.5 xs:h-3.5" />
                    Projects
                  </span>
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {member.projects}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs xs:text-sm">
                  <span className={`flex items-center gap-1 xs:gap-1.5 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                    <Star className="w-3 h-3 xs:w-3.5 xs:h-3.5" />
                    Satisfaction
                  </span>
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {member.satisfaction}
                  </span>
                </div>
              </div>

              {/* View Details Link */}
              <div className="mt-3 xs:mt-4 pt-1.5 xs:pt-2 text-center">
                <span className={`
                  text-[10px] xs:text-xs ${member.textColor} 
                  transition-opacity duration-300
                  ${!isMobile && !isTablet ? 'md:opacity-0 md:group-hover:opacity-100' : 'opacity-100'}
                `}>
                  {isMobile || isTablet ? 'Tap to view details →' : 'Click to view details →'}
                </span>
              </div>

              {/* Selected indicator */}
              {selectedMember === member.id && (
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-green-500" />
              )}
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="text-center mt-8 xs:mt-12 sm:mt-16 pt-2 xs:pt-4">
          <Quote className={`w-5 h-5 xs:w-6 xs:h-6 mx-auto mb-2 xs:mb-3 ${isDark ? 'text-white/20' : 'text-gray-300'}`} />
          <p className={`
            text-xs xs:text-sm italic max-w-2xl mx-auto px-4
            ${isDark ? 'text-white/40' : 'text-gray-400'}
          `}>
            "We're not just consultants. We're partners in your journey to success."
          </p>
        </div>
      </div>

      {/* Modal for Member Details - Fully responsive */}
      {selectedMember !== null && currentSelected && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 bg-black/80 backdrop-blur-sm animate-fade-in" 
          onClick={closeModal}
        >
          <div 
            className={`
              relative w-full max-w-4xl max-h-[90vh] xs:max-h-[85vh] overflow-y-auto 
              rounded-xl xs:rounded-2xl border-2 ${currentSelected.borderColor}
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
                absolute top-3 right-3 xs:top-4 xs:right-4 z-10 p-1.5 xs:p-2 rounded-full
                transition-all duration-300 hover:scale-110
                ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}
              `}
            >
              <X className="w-4 h-4 xs:w-5 xs:h-5" />
            </button>

            {/* Modal Content */}
            <div className="p-4 xs:p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row gap-5 xs:gap-6 lg:gap-8">
                {/* Left Column */}
                <div className="lg:w-1/3 text-center lg:text-left">
                  <div className={`
                    w-24 h-24 xs:w-32 xs:h-32 sm:w-36 sm:h-36 rounded-full mx-auto lg:mx-0 mb-4 xs:mb-5
                    bg-gradient-to-r ${currentSelected.color}
                    flex items-center justify-center
                    shadow-2xl
                  `}>
                    <span className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white">{currentSelected.image}</span>
                  </div>
                  <h3 className={`
                    text-xl xs:text-2xl font-bold mb-1 xs:mb-2 
                    ${isDark ? 'text-white' : 'text-gray-900'}
                  `}>
                    {currentSelected.name}
                  </h3>
                  <p className={`text-sm xs:text-base mb-2 xs:mb-3 font-medium ${currentSelected.textColor}`}>
                    {currentSelected.role}
                  </p>
                  <div className={`
                    inline-block text-xs xs:text-sm px-3 xs:px-4 py-1 xs:py-1.5 rounded-full mb-4 xs:mb-6
                    ${currentSelected.textColor} ${currentSelected.textColor.replace('text', 'bg')}/10
                  `}>
                    {currentSelected.badge}
                  </div>
                  
                  <a href={`mailto:${currentSelected.email}`} className={`
                    inline-flex items-center justify-center gap-2 w-full px-4 xs:px-6 py-2.5 xs:py-3 
                    rounded-lg text-xs xs:text-sm font-medium
                    transition-all duration-300 hover:scale-105 active:scale-95
                    ${isDark 
                      ? 'bg-white/10 hover:bg-white/20 text-white' 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                    }
                  `}>
                    <Mail className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                    Contact {currentSelected.name.split(' ')[0]}
                  </a>
                </div>

                {/* Right Column */}
                <div className="lg:w-2/3">
                  {/* Bio */}
                  <div className={`mb-4 xs:mb-5 sm:mb-6 p-3 xs:p-4 sm:p-5 rounded-lg xs:rounded-xl ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                    <div className={`
                      text-[10px] xs:text-xs font-semibold mb-2 xs:mb-3 
                      flex items-center gap-1.5 xs:gap-2 uppercase tracking-wider 
                      ${isDark ? 'text-white/50' : 'text-gray-500'}
                    `}>
                      <Quote className="w-2.5 h-2.5 xs:w-3 xs:h-3" />
                      About
                    </div>
                    <p className={`
                      text-xs xs:text-sm leading-relaxed 
                      ${isDark ? 'text-white/80' : 'text-gray-700'}
                    `}>
                      {currentSelected.bio}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-5">
                    {/* Education */}
                    <div className={`p-3 xs:p-4 sm:p-5 rounded-lg xs:rounded-xl ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                      <div className={`
                        text-[10px] xs:text-xs font-semibold mb-2 xs:mb-3 
                        flex items-center gap-1.5 xs:gap-2 uppercase tracking-wider 
                        ${isDark ? 'text-white/50' : 'text-gray-500'}
                      `}>
                        <GraduationCap className="w-2.5 h-2.5 xs:w-3 xs:h-3" />
                        Education
                      </div>
                      <p className={`text-xs xs:text-sm ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                        {currentSelected.education}
                      </p>
                    </div>

                    {/* Location */}
                    <div className={`p-3 xs:p-4 sm:p-5 rounded-lg xs:rounded-xl ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                      <div className={`
                        text-[10px] xs:text-xs font-semibold mb-2 xs:mb-3 
                        flex items-center gap-1.5 xs:gap-2 uppercase tracking-wider 
                        ${isDark ? 'text-white/50' : 'text-gray-500'}
                      `}>
                        <MapPin className="w-2.5 h-2.5 xs:w-3 xs:h-3" />
                        Location
                      </div>
                      <p className={`text-xs xs:text-sm ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                        {currentSelected.location}
                      </p>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-1.5 xs:gap-2 sm:gap-3 mt-3 xs:mt-4 sm:mt-5">
                    <div className={`p-2 xs:p-3 text-center rounded-lg xs:rounded-xl ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                      <Clock className={`w-3 h-3 xs:w-4 xs:h-4 mx-auto mb-0.5 xs:mb-1 ${currentSelected.textColor}`} />
                      <div className={`text-xs xs:text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {currentSelected.experience}
                      </div>
                      <div className={`text-[8px] xs:text-[10px] ${isDark ? 'text-white/40' : 'text-gray-400'}`}>Experience</div>
                    </div>
                    <div className={`p-2 xs:p-3 text-center rounded-lg xs:rounded-xl ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                      <Briefcase className={`w-3 h-3 xs:w-4 xs:h-4 mx-auto mb-0.5 xs:mb-1 ${currentSelected.textColor}`} />
                      <div className={`text-xs xs:text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {currentSelected.projects}
                      </div>
                      <div className={`text-[8px] xs:text-[10px] ${isDark ? 'text-white/40' : 'text-gray-400'}`}>Projects</div>
                    </div>
                    <div className={`p-2 xs:p-3 text-center rounded-lg xs:rounded-xl ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                      <Star className={`w-3 h-3 xs:w-4 xs:h-4 mx-auto mb-0.5 xs:mb-1 ${currentSelected.textColor}`} />
                      <div className={`text-xs xs:text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {currentSelected.satisfaction}
                      </div>
                      <div className={`text-[8px] xs:text-[10px] ${isDark ? 'text-white/40' : 'text-gray-400'}`}>Satisfaction</div>
                    </div>
                  </div>

                  {/* Expertise */}
                  <div className={`mt-3 xs:mt-4 sm:mt-5 p-3 xs:p-4 sm:p-5 rounded-lg xs:rounded-xl ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                    <div className={`
                      text-[10px] xs:text-xs font-semibold mb-2 xs:mb-3 
                      flex items-center gap-1.5 xs:gap-2 uppercase tracking-wider 
                      ${isDark ? 'text-white/50' : 'text-gray-500'}
                    `}>
                      <Award className="w-2.5 h-2.5 xs:w-3 xs:h-3" />
                      Core Expertise
                    </div>
                    <div className="flex flex-wrap gap-1.5 xs:gap-2">
                      {currentSelected.expertise.map((exp, i) => (
                        <span key={i} className={`
                          text-[10px] xs:text-xs sm:text-sm px-2.5 xs:px-3 py-1 xs:py-1.5 rounded-full 
                          ${isDark ? 'bg-white/10 text-white/80' : 'bg-gray-200 text-gray-700'}
                        `}>
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
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
            gap: 0.75rem;
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .grid {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};