// components/Team.tsx - Perfect UI for all members
import React, { useState } from 'react';
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
              Our Team
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Meet the Experts
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Behind Your Success
            </span>
          </h2>
          <p className={`max-w-2xl mx-auto text-base sm:text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            A diverse team of passionate professionals dedicated to your growth
          </p>
        </div>

        {/* Team Profiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`
                group relative rounded-2xl p-6
                border-2 transition-all duration-500 ease-out
                cursor-pointer
                ${selectedMember === member.id 
                  ? `${member.borderColor} shadow-xl ${member.glowColor} scale-[1.02]`
                  : (isDark ? 'border-white/10 hover:border-white/20' : 'border-gray-200 hover:border-gray-300')
                }
                hover:scale-[1.02] hover:-translate-y-1
                ${isDark ? 'bg-black/40' : 'bg-white'}
              `}
              onClick={() => handleMemberClick(member.id)}
            >
              {/* Avatar */}
              <div className={`
                w-20 h-20 rounded-full mx-auto mb-4
                bg-gradient-to-r ${member.color}
                flex items-center justify-center
                transition-all duration-500
                group-hover:scale-110
                shadow-lg
              `}>
                <span className="text-xl font-bold text-white">{member.image}</span>
              </div>

              {/* Name */}
              <h3 className={`text-center text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {member.name}
              </h3>
              
              {/* Role with colored text */}
              <p className={`text-center text-sm mb-3 font-medium ${member.textColor}`}>
                {member.role}
              </p>

              {/* Badge */}
              <div className={`
                text-center text-xs px-3 py-1 rounded-full mx-auto w-fit mb-4
                ${member.textColor} ${member.textColor.replace('text', 'bg')}/10
              `}>
                {member.badge}
              </div>

              {/* Stats */}
              <div className="space-y-2 pt-3 border-t border-gray-200 dark:border-white/10">
                <div className="flex items-center justify-between text-sm">
                  <span className={`flex items-center gap-1.5 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                    <Clock className="w-3.5 h-3.5" />
                    Experience
                  </span>
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {member.experience}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className={`flex items-center gap-1.5 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                    <Briefcase className="w-3.5 h-3.5" />
                    Projects
                  </span>
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {member.projects}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className={`flex items-center gap-1.5 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                    <Star className="w-3.5 h-3.5" />
                    Satisfaction
                  </span>
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {member.satisfaction}
                  </span>
                </div>
              </div>

              {/* View Details Link */}
              <div className="mt-4 pt-2 text-center">
                <span className={`text-xs ${member.textColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  Click to view details →
                </span>
              </div>

              {/* Selected indicator */}
              {selectedMember === member.id && (
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-green-500" />
              )}
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="text-center mt-16 pt-4">
          <Quote className={`w-6 h-6 mx-auto mb-3 ${isDark ? 'text-white/20' : 'text-gray-300'}`} />
          <p className={`text-sm italic max-w-2xl mx-auto ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
            "We're not just consultants. We're partners in your journey to success."
          </p>
        </div>
      </div>

      {/* Modal for Member Details */}
      {selectedMember !== null && currentSelected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={closeModal}>
          <div 
            className={`
              relative max-w-4xl w-full max-h-[85vh] overflow-y-auto rounded-2xl
              border-2 ${currentSelected.borderColor}
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
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column */}
                <div className="lg:w-1/3 text-center lg:text-left">
                  <div className={`
                    w-36 h-36 rounded-full mx-auto lg:mx-0 mb-5
                    bg-gradient-to-r ${currentSelected.color}
                    flex items-center justify-center
                    shadow-2xl
                  `}>
                    <span className="text-4xl font-bold text-white">{currentSelected.image}</span>
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {currentSelected.name}
                  </h3>
                  <p className={`text-base mb-3 font-medium ${currentSelected.textColor}`}>
                    {currentSelected.role}
                  </p>
                  <div className={`
                    inline-block text-sm px-4 py-1.5 rounded-full mb-6
                    ${currentSelected.textColor} ${currentSelected.textColor.replace('text', 'bg')}/10
                  `}>
                    {currentSelected.badge}
                  </div>
                  
                  <a href={`mailto:${currentSelected.email}`} className={`
                    inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg text-sm font-medium
                    transition-all duration-300 hover:scale-105
                    ${isDark 
                      ? 'bg-white/10 hover:bg-white/20 text-white' 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                    }
                  `}>
                    <Mail className="w-4 h-4" />
                    Contact {currentSelected.name.split(' ')[0]}
                  </a>
                </div>

                {/* Right Column */}
                <div className="lg:w-2/3">
                  {/* Bio */}
                  <div className={`mb-6 p-5 rounded-xl ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                    <div className={`text-xs font-semibold mb-3 flex items-center gap-2 uppercase tracking-wider ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                      <Quote className="w-3 h-3" />
                      About
                    </div>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                      {currentSelected.bio}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Education */}
                    <div className={`p-5 rounded-xl ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                      <div className={`text-xs font-semibold mb-3 flex items-center gap-2 uppercase tracking-wider ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                        <GraduationCap className="w-3 h-3" />
                        Education
                      </div>
                      <p className={`text-sm ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                        {currentSelected.education}
                      </p>
                    </div>

                    {/* Location */}
                    <div className={`p-5 rounded-xl ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                      <div className={`text-xs font-semibold mb-3 flex items-center gap-2 uppercase tracking-wider ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                        <MapPin className="w-3 h-3" />
                        Location
                      </div>
                      <p className={`text-sm ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                        {currentSelected.location}
                      </p>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3 mt-5">
                    <div className={`p-3 text-center rounded-xl ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                      <Clock className={`w-4 h-4 mx-auto mb-1 ${currentSelected.textColor}`} />
                      <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {currentSelected.experience}
                      </div>
                      <div className={`text-[10px] ${isDark ? 'text-white/40' : 'text-gray-400'}`}>Experience</div>
                    </div>
                    <div className={`p-3 text-center rounded-xl ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                      <Briefcase className={`w-4 h-4 mx-auto mb-1 ${currentSelected.textColor}`} />
                      <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {currentSelected.projects}
                      </div>
                      <div className={`text-[10px] ${isDark ? 'text-white/40' : 'text-gray-400'}`}>Projects</div>
                    </div>
                    <div className={`p-3 text-center rounded-xl ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                      <Star className={`w-4 h-4 mx-auto mb-1 ${currentSelected.textColor}`} />
                      <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {currentSelected.satisfaction}
                      </div>
                      <div className={`text-[10px] ${isDark ? 'text-white/40' : 'text-gray-400'}`}>Satisfaction</div>
                    </div>
                  </div>

                  {/* Expertise */}
                  <div className={`mt-5 p-5 rounded-xl ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                    <div className={`text-xs font-semibold mb-3 flex items-center gap-2 uppercase tracking-wider ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                      <Award className="w-3 h-3" />
                      Core Expertise
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentSelected.expertise.map((exp, i) => (
                        <span key={i} className={`text-sm px-3 py-1.5 rounded-full ${isDark ? 'bg-white/10 text-white/80' : 'bg-gray-200 text-gray-700'}`}>
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