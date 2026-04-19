// pages/Contact.tsx - Fully responsive across all devices
import React, { useState, useEffect } from 'react';
import { useTheme } from '../components/ThemeContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  CheckCircle,
  Calendar,
  User,
  Briefcase,
  MessageSquare,
  Send,
  Star,
  Award,
  Zap,
  Shield,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { isDarkMode } = useTheme();
  const isDark = isDarkMode;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const categories = [
    { id: 'athlete', name: 'Athlete', icon: Award, color: 'text-amber-500' },
    { id: 'startup', name: 'Startup', icon: Zap, color: 'text-green-500' },
    { id: 'business', name: 'Business', icon: Briefcase, color: 'text-purple-500' },
  ];

  const faqs = [
    {
      question: 'How quickly can I expect a response?',
      answer: 'We typically respond within 24 hours on business days. For urgent inquiries, we recommend calling us directly.',
      icon: Clock
    },
    {
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing based on your needs: project-based, hourly consulting, or retainer packages. Contact us for a custom quote tailored to your specific requirements.',
      icon: Star
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Yes! We offer a free 30-minute discovery call to understand your needs and see if we\'re the right fit for each other.',
      icon: CheckCircle
    },
    {
      question: 'Can you work with international clients?',
      answer: 'Absolutely! We work with clients globally and have experience across multiple time zones. Our team is remote-friendly and equipped for international collaboration.',
      icon: Shield
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We specialize in sports & athletics, startups, and business transformation. Our expertise spans across tech, finance, retail, manufacturing, and professional sports.',
      icon: Briefcase
    },
    {
      question: 'How do you measure success?',
      answer: 'We use data-driven KPIs tailored to your goals: revenue growth, operational efficiency, brand awareness, funding secured, or specific performance metrics.',
      icon: Award
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', category: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className={`min-h-screen pt-16 xs:pt-20 sm:pt-24 poppins ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`relative py-8 xs:py-12 sm:py-16 border-b ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
        <div className="absolute inset-0 -z-10">
          <div className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-blue-950/30 to-purple-950/30' : 'from-blue-50 to-purple-50'}`} />
        </div>
        
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-3 xs:mb-4">
            <div className={`
              inline-flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 py-1 rounded-full 
              text-[10px] xs:text-xs font-medium
              ${isDark ? 'bg-white/10 text-white/80' : 'bg-gray-100 text-gray-700'}
            `}>
              <Mail className="w-2.5 h-2.5 xs:w-3 xs:h-3" />
              Get in Touch
            </div>
          </div>
          <h1 className={`
            text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 xs:mb-4 px-2
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            Start Your
            <br className="hidden xs:block" />
            <span className="xs:hidden"> </span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Transformation Today
            </span>
          </h1>
          <p className={`
            max-w-2xl mx-auto text-xs xs:text-sm sm:text-base px-4
            ${isDark ? 'text-white/60' : 'text-gray-600'}
          `}>
            Let's discuss how we can help you achieve your goals. Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <div className="max-w-6xl xl:max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-6 xs:py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-5 xs:gap-6 sm:gap-8">
          {/* Left Side - Contact Form */}
          <div>
            <div className={`
              rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8
              border shadow-lg xs:shadow-xl grain-overlay
              ${isDark 
                ? 'bg-black/40 border-white/10' 
                : 'bg-white/80 border-gray-200'
              }
            `}>
              <h2 className={`text-lg xs:text-xl font-bold mb-1.5 xs:mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Book a Consultation
              </h2>
              <p className={`text-xs xs:text-sm mb-4 xs:mb-5 sm:mb-6 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                Fill out the form and we'll get back to you within 24 hours
              </p>

              {isSubmitted && (
                <div className={`mb-4 xs:mb-5 sm:mb-6 p-3 xs:p-4 rounded-lg xs:rounded-xl flex items-center gap-2 xs:gap-3 ${isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-50 text-green-700'}`}>
                  <CheckCircle className="w-4 h-4 xs:w-5 xs:h-5 flex-shrink-0" />
                  <span className="text-xs xs:text-sm">Thank you! We'll contact you shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-5">
                {/* Name */}
                <div>
                  <label className={`block text-xs xs:text-sm font-medium mb-1.5 xs:mb-2 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 xs:w-4 xs:h-4 ${isDark ? 'text-white/40' : 'text-gray-400'}`} />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`
                        w-full pl-9 xs:pl-10 pr-3 xs:pr-4 py-2.5 xs:py-3 rounded-lg border text-sm
                        transition-all duration-300
                        ${isDark 
                          ? 'bg-white/5 border-white/10 text-white focus:border-blue-500' 
                          : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500'
                        }
                        focus:outline-none focus:ring-1 focus:ring-blue-500
                      `}
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className={`block text-xs xs:text-sm font-medium mb-1.5 xs:mb-2 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 xs:w-4 xs:h-4 ${isDark ? 'text-white/40' : 'text-gray-400'}`} />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`
                        w-full pl-9 xs:pl-10 pr-3 xs:pr-4 py-2.5 xs:py-3 rounded-lg border text-sm
                        transition-all duration-300
                        ${isDark 
                          ? 'bg-white/5 border-white/10 text-white focus:border-blue-500' 
                          : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500'
                        }
                        focus:outline-none focus:ring-1 focus:ring-blue-500
                      `}
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className={`block text-xs xs:text-sm font-medium mb-1.5 xs:mb-2 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                    I am a... *
                  </label>
                  <div className="grid grid-cols-3 gap-2 xs:gap-3">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, category: cat.id })}
                        className={`
                          flex flex-col items-center gap-1 p-2 xs:p-3 rounded-lg border-2
                          transition-all duration-300
                          ${!isMobile ? 'hover:scale-105' : 'active:scale-95'}
                          min-h-[64px] xs:min-h-[72px]
                          ${formData.category === cat.id
                            ? `${cat.color} ${isDark ? 'bg-white/15 border-current' : 'bg-gray-100 border-current'}`
                            : (isDark 
                              ? 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10' 
                              : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100')
                          }
                        `}
                      >
                        <cat.icon className="w-4 h-4 xs:w-5 xs:h-5" />
                        <span className="text-[10px] xs:text-xs font-medium">{cat.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={`block text-xs xs:text-sm font-medium mb-1.5 xs:mb-2 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className={`absolute left-3 top-3 w-3.5 h-3.5 xs:w-4 xs:h-4 ${isDark ? 'text-white/40' : 'text-gray-400'}`} />
                    <textarea
                      name="message"
                      required
                      rows={isMobile ? 3 : 4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`
                        w-full pl-9 xs:pl-10 pr-3 xs:pr-4 py-2.5 xs:py-3 rounded-lg border text-sm
                        transition-all duration-300 resize-none
                        ${isDark 
                          ? 'bg-white/5 border-white/10 text-white focus:border-blue-500' 
                          : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500'
                        }
                        focus:outline-none focus:ring-1 focus:ring-blue-500
                      `}
                      placeholder="Tell us about your goals and challenges..."
                    />
                  </div>
                </div>

                {/* Calendar Note */}
                <div className={`flex items-center gap-1.5 xs:gap-2 text-[10px] xs:text-xs ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                  <Calendar className="w-3 h-3" />
                  <span>Optional: We'll send a calendar link after receiving your request</span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    group relative w-full py-2.5 xs:py-3 rounded-lg overflow-hidden
                    text-xs xs:text-sm font-semibold transition-all duration-500
                    hover:scale-105 active:scale-95 min-h-[44px]
                    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
                  `}
                >
                  <div className={`absolute inset-0 transition-all duration-500 ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
                  <div className={`absolute inset-[1px] rounded-lg transition-all duration-500 ${isDark ? 'bg-black/5' : 'bg-white/10'}`} />
                  <span className={`relative z-10 flex items-center justify-center gap-1.5 xs:gap-2 font-semibold ${isDark ? 'text-gray-900' : 'text-white'}`}>
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-3.5 h-3.5 xs:w-4 xs:h-4 transition-transform duration-500 group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Contact Info & FAQ */}
          <div className="space-y-4 xs:space-y-5 sm:space-y-6">
            {/* Contact Info Cards */}
            <div className={`
              rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6
              border shadow-lg xs:shadow-xl grain-overlay
              ${isDark 
                ? 'bg-black/40 border-white/10' 
                : 'bg-white/80 border-gray-200'
              }
            `}>
              <h3 className={`text-base xs:text-lg font-bold mb-3 xs:mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h3>
              <div className="space-y-3 xs:space-y-4">
                <div className="flex items-start gap-2.5 xs:gap-3">
                  <div className={`p-1.5 xs:p-2 rounded-lg ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}>
                    <Mail className={`w-3.5 h-3.5 xs:w-4 xs:h-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                  <div>
                    <div className={`text-xs xs:text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Email</div>
                    <a href="mailto:hello@yimer.com" className={`text-xs xs:text-sm ${isDark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                      hello@yimer.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 xs:gap-3">
                  <div className={`p-1.5 xs:p-2 rounded-lg ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}>
                    <Phone className={`w-3.5 h-3.5 xs:w-4 xs:h-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                  <div>
                    <div className={`text-xs xs:text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Phone</div>
                    <a href="tel:+15551234567" className={`text-xs xs:text-sm ${isDark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 xs:gap-3">
                  <div className={`p-1.5 xs:p-2 rounded-lg ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}>
                    <MapPin className={`w-3.5 h-3.5 xs:w-4 xs:h-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                  <div>
                    <div className={`text-xs xs:text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Office</div>
                    <div className={`text-xs xs:text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                      123 Business Avenue, Suite 100<br />
                      New York, NY 10001
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 xs:gap-3">
                  <div className={`p-1.5 xs:p-2 rounded-lg ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}>
                    <Clock className={`w-3.5 h-3.5 xs:w-4 xs:h-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                  <div>
                    <div className={`text-xs xs:text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Business Hours</div>
                    <div className={`text-xs xs:text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday - Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className={`
              rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 text-center
              border-2 transition-all duration-500
              ${isDark 
                ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30' 
                : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200'
              }
            `}>
              <Zap className={`w-6 h-6 xs:w-8 xs:h-8 mx-auto mb-1.5 xs:mb-2 ${isDark ? 'text-yellow-500' : 'text-yellow-600'}`} />
              <h3 className={`text-base xs:text-lg font-bold mb-0.5 xs:mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Fast Response Guarantee
              </h3>
              <p className={`text-xs xs:text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                We respond to all inquiries within 24 hours
              </p>
            </div>

            {/* FAQ Section */}
            <div className={`
              rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6
              border shadow-lg xs:shadow-xl grain-overlay
              ${isDark 
                ? 'bg-black/40 border-white/10' 
                : 'bg-white/80 border-gray-200'
              }
            `}>
              <h3 className={`text-base xs:text-lg font-bold mb-3 xs:mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Frequently Asked Questions
              </h3>
              <div className="space-y-2 xs:space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className={`border-b ${isDark ? 'border-white/10' : 'border-gray-200'} last:border-0`}>
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full py-2.5 xs:py-3 flex items-center justify-between text-left min-h-[44px]"
                    >
                      <div className="flex items-center gap-2 pr-2">
                        <faq.icon className={`w-3.5 h-3.5 xs:w-4 xs:h-4 flex-shrink-0 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                        <span className={`text-xs xs:text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {faq.question}
                        </span>
                      </div>
                      {openFaq === index ? (
                        <ChevronUp className={`w-4 h-4 flex-shrink-0 ${isDark ? 'text-white/40' : 'text-gray-400'}`} />
                      ) : (
                        <ChevronDown className={`w-4 h-4 flex-shrink-0 ${isDark ? 'text-white/40' : 'text-gray-400'}`} />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="pb-2.5 xs:pb-3 animate-slide-down">
                        <p className={`text-[10px] xs:text-xs sm:text-sm pl-6 xs:pl-7 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        .poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
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

        @media (hover: none) and (pointer: coarse) {
          .cursor-pointer {
            -webkit-tap-highlight-color: transparent;
          }
        }

        .transition-all {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        
        button {
          touch-action: manipulation;
        }
      `}</style>
    </main>
  );
};