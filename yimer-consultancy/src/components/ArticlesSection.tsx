// pages/ArticlesSection.tsx - Fully responsive across all devices
import React, { useState, useEffect } from 'react';
import { useTheme } from '../components/ThemeContext';
import { 
  ArrowRight, 
  Calendar, 
  TrendingUp,
  Trophy,
  Rocket,
  Building2,
  BookOpen,
  Heart,
  Zap,
  Target,
  Users,
  Globe,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Sparkles,
  Star,
  Crown,
  Shield,
  LineChart,
  ChevronDown,
  Filter,
  Check
} from 'lucide-react';

export const ArticlesSection: React.FC = () => {
  const { isDarkMode } = useTheme();
  const isDark = isDarkMode;
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [likedArticles, setLikedArticles] = useState<number[]>([]);
  const [bookmarkedArticles, setBookmarkedArticles] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const articlesPerPage = 9;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const categories = [
    { id: 'all', name: 'All', icon: BookOpen, color: 'text-blue-500' },
    { id: 'sports', name: 'Sports', icon: Trophy, color: 'text-amber-500' },
    { id: 'startup', name: 'Startups', icon: Rocket, color: 'text-green-500' },
    { id: 'business', name: 'Business', icon: Building2, color: 'text-purple-500' },
  ];

  const articles = [
    {
      id: 1,
      category: 'sports',
      title: 'Building Your Personal Brand as an Elite Athlete',
      excerpt: 'Strategic approaches to developing a powerful personal brand that attracts sponsors and builds a lasting legacy beyond your athletic career.',
      icon: Crown,
      iconColor: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      author: 'Sarah Johnson',
      authorRole: 'Head of Athlete Relations',
      authorImage: 'SJ',
      date: 'Mar 15, 2024',
      readTime: '6 min read',
      views: 2400,
      likes: 342,
      featured: true,
      tags: ['Personal Branding', 'Sponsorship']
    },
    {
      id: 2,
      category: 'sports',
      title: 'Maximizing NIL Opportunities in College Athletics',
      excerpt: 'How student-athletes can leverage Name, Image, and Likeness deals for long-term financial success.',
      icon: Shield,
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      author: 'Marcus Thompson',
      authorRole: 'Sports Marketing Director',
      authorImage: 'MT',
      date: 'Mar 12, 2024',
      readTime: '5 min read',
      views: 1800,
      likes: 256,
      featured: false,
      tags: ['NIL', 'College Sports']
    },
    {
      id: 3,
      category: 'startup',
      title: 'From MVP to Unicorn: Scaling Your Startup',
      excerpt: 'Key strategies for sustainable growth from seed stage to market leadership without breaking what works.',
      icon: Rocket,
      iconColor: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      author: 'David Chen',
      authorRole: 'Startup Growth Advisor',
      authorImage: 'DC',
      date: 'Mar 14, 2024',
      readTime: '8 min read',
      views: 3500,
      likes: 521,
      featured: true,
      tags: ['Scaling', 'Growth']
    },
    {
      id: 4,
      category: 'startup',
      title: 'Pitch Deck Essentials: What Investors Want',
      excerpt: 'Insider tips on creating compelling pitch decks that capture investor attention and secure funding.',
      icon: Target,
      iconColor: 'text-green-500',
      bgColor: 'bg-green-500/10',
      author: 'Jennifer Park',
      authorRole: 'Investment Strategist',
      authorImage: 'JP',
      date: 'Mar 10, 2024',
      readTime: '6 min read',
      views: 4200,
      likes: 678,
      featured: false,
      tags: ['Fundraising', 'Pitch Deck']
    },
    {
      id: 5,
      category: 'business',
      title: 'Digital Transformation Blueprint for Enterprises',
      excerpt: 'Comprehensive guide to modernizing legacy systems and embracing digital innovation for competitive advantage.',
      icon: Zap,
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      author: 'Michael Okonkwo',
      authorRole: 'Digital Transformation Expert',
      authorImage: 'MO',
      date: 'Mar 13, 2024',
      readTime: '9 min read',
      views: 3800,
      likes: 567,
      featured: true,
      tags: ['Digital', 'Enterprise']
    },
    {
      id: 6,
      category: 'business',
      title: 'AI Integration Strategies for Traditional Businesses',
      excerpt: 'Practical approaches to implementing AI solutions without disrupting existing operations.',
      icon: TrendingUp,
      iconColor: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10',
      author: 'Dr. Rachel Kim',
      authorRole: 'AI Strategy Consultant',
      authorImage: 'RK',
      date: 'Mar 9, 2024',
      readTime: '8 min read',
      views: 5100,
      likes: 734,
      featured: false,
      tags: ['AI', 'Automation']
    },
    {
      id: 7,
      category: 'sports',
      title: 'Digital Presence for Professional Athletes',
      excerpt: 'Master social media and digital platforms to build authentic connections with your fanbase.',
      icon: Globe,
      iconColor: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      author: 'Elena Rodriguez',
      authorRole: 'Digital Strategy Lead',
      authorImage: 'ER',
      date: 'Mar 8, 2024',
      readTime: '7 min read',
      views: 3100,
      likes: 489,
      featured: false,
      tags: ['Social Media', 'Engagement']
    },
    {
      id: 8,
      category: 'startup',
      title: 'Building High-Performance Startup Culture',
      excerpt: 'How to create and maintain a strong company culture that drives innovation during rapid growth.',
      icon: Users,
      iconColor: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
      author: 'Alex Rivera',
      authorRole: 'Culture & People Lead',
      authorImage: 'AR',
      date: 'Mar 5, 2024',
      readTime: '7 min read',
      views: 2900,
      likes: 445,
      featured: false,
      tags: ['Culture', 'Leadership']
    },
    {
      id: 9,
      category: 'business',
      title: 'Sustainable Scaling: Balancing Growth with Excellence',
      excerpt: 'How to scale your business while maintaining quality, culture, and profitability.',
      icon: LineChart,
      iconColor: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      author: 'Thomas Wright',
      authorRole: 'Operations Strategist',
      authorImage: 'TW',
      date: 'Mar 3, 2024',
      readTime: '7 min read',
      views: 2700,
      likes: 398,
      featured: false,
      tags: ['Operations', 'Scaling']
    }
  ];

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);
  
  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);
  
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = regularArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(regularArticles.length / articlesPerPage);

  const handleLike = (articleId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (likedArticles.includes(articleId)) {
      setLikedArticles(likedArticles.filter(id => id !== articleId));
    } else {
      setLikedArticles([...likedArticles, articleId]);
    }
  };

  const handleBookmark = (articleId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (bookmarkedArticles.includes(articleId)) {
      setBookmarkedArticles(bookmarkedArticles.filter(id => id !== articleId));
    } else {
      setBookmarkedArticles([...bookmarkedArticles, articleId]);
    }
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return (views / 1000).toFixed(1) + 'K';
    }
    return views.toString();
  };

  const currentCategory = categories.find(c => c.id === activeCategory);

  return (
    <main className={`min-h-screen pt-16 xs:pt-20 sm:pt-24 poppins ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`relative py-8 xs:py-12 sm:py-16 overflow-hidden`}>
        <div className="absolute inset-0 -z-10">
          <div className={`absolute inset-0 bg-gradient-to-br ${isDark ? 'from-blue-950/40 via-purple-950/40 to-pink-950/40' : 'from-blue-50 via-purple-50 to-pink-50'}`} />
        </div>
        
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-500 text-[10px] xs:text-xs font-medium mb-3 xs:mb-4">
            <Sparkles className="w-2.5 h-2.5 xs:w-3 xs:h-3" />
            Latest Insights
          </div>
          <h1 className={`
            text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 xs:mb-4 px-2
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            Stories & Insights
            <br className="hidden xs:block" />
            <span className="xs:hidden"> </span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              From Our Experts
            </span>
          </h1>
          <p className={`
            max-w-2xl mx-auto text-xs xs:text-sm sm:text-base px-4
            ${isDark ? 'text-white/60' : 'text-gray-600'}
          `}>
            Actionable strategies, expert perspectives, and real-world success stories
          </p>
        </div>
      </section>

      <div className="max-w-6xl xl:max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-6 xs:py-8">
        {/* Category Navigation - Desktop Tabs */}
        <div className="hidden sm:flex justify-center gap-1.5 xs:gap-2 mb-8 xs:mb-10 sm:mb-12">
          {categories.map((category) => {
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setCurrentPage(1);
                }}
                className={`
                  px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-medium transition-all duration-300
                  ${activeCategory === category.id
                    ? `${category.color} ${isDark ? 'bg-white/15' : 'bg-gray-200'}`
                    : (isDark 
                        ? 'text-white/60 hover:text-white hover:bg-white/10' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100')
                  }
                `}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Mobile Category Dropdown */}
        <div className="sm:hidden mb-6 xs:mb-8">
          <div className="relative">
            <button
              onClick={() => setShowMobileDropdown(!showMobileDropdown)}
              className={`
                w-full flex items-center justify-between gap-2 px-4 py-2.5 xs:py-3 rounded-lg text-sm font-medium
                ${isDark 
                  ? 'bg-white/10 text-white/80' 
                  : 'bg-gray-100 text-gray-700'
                }
              `}
            >
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                <span>{currentCategory?.name || 'All'}</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform ${showMobileDropdown ? 'rotate-180' : ''}`} />
            </button>

            {showMobileDropdown && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setShowMobileDropdown(false)}
                />
                <div className={`
                  absolute top-full left-0 right-0 mt-2 rounded-lg shadow-xl z-50
                  border ${isDark ? 'bg-black/95 border-white/10' : 'bg-white border-gray-200'}
                  overflow-hidden
                `}>
                  {categories.map((category) => {
                    return (
                      <button
                        key={category.id}
                        onClick={() => {
                          setActiveCategory(category.id);
                          setCurrentPage(1);
                          setShowMobileDropdown(false);
                        }}
                        className={`
                          w-full flex items-center justify-between px-4 py-3 text-sm
                          transition-colors
                          ${activeCategory === category.id
                            ? `${category.color} ${isDark ? 'bg-white/10' : 'bg-gray-100'}`
                            : (isDark ? 'text-white/80 hover:bg-white/5' : 'text-gray-700 hover:bg-gray-50')
                          }
                        `}
                      >
                        <span>{category.name}</span>
                        {activeCategory === category.id && (
                          <Check className="w-4 h-4" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Featured Article - Hero Layout */}
        {activeCategory === 'all' && featuredArticles[0] && (
          <div className="mb-8 xs:mb-10 sm:mb-12">
            <div className={`
              relative rounded-xl xs:rounded-2xl overflow-hidden
              border ${isDark ? 'border-white/10' : 'border-gray-200'}
              ${isDark ? 'bg-black/40' : 'bg-white'}
            `}>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-4 xs:p-5 sm:p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-2 mb-2 xs:mb-3">
                    <span className={`text-[10px] xs:text-xs font-medium px-2 py-0.5 rounded-full ${featuredArticles[0].bgColor} ${featuredArticles[0].iconColor}`}>
                      Featured
                    </span>
                    <span className={`text-[10px] xs:text-xs ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                      {featuredArticles[0].readTime}
                    </span>
                  </div>
                  <h2 className={`
                    text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-2 xs:mb-3 
                    ${isDark ? 'text-white' : 'text-gray-900'}
                  `}>
                    {featuredArticles[0].title}
                  </h2>
                  <p className={`
                    text-xs xs:text-sm mb-3 xs:mb-4 
                    ${isDark ? 'text-white/60' : 'text-gray-600'}
                  `}>
                    {featuredArticles[0].excerpt}
                  </p>
                  <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 xs:w-8 xs:h-8 rounded-full flex items-center justify-center text-xs font-bold ${featuredArticles[0].bgColor} ${featuredArticles[0].iconColor}`}>
                        {featuredArticles[0].authorImage}
                      </div>
                      <div>
                        <div className={`text-xs xs:text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {featuredArticles[0].author}
                        </div>
                        <div className={`text-[10px] xs:text-xs ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                          {featuredArticles[0].authorRole}
                        </div>
                      </div>
                    </div>
                    <button className={`text-xs xs:text-sm font-medium flex items-center gap-1 ${featuredArticles[0].iconColor} hover:gap-2 transition-all`}>
                      Read More
                      <ArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                    </button>
                  </div>
                </div>
                
                <div className={`flex items-center justify-center p-6 xs:p-8 ${featuredArticles[0].bgColor}`}>
                  {(() => {
                    const Icon = featuredArticles[0].icon;
                    return <Icon className={`w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 ${featuredArticles[0].iconColor}`} />;
                  })()}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 lg:gap-6">
          {currentArticles.map((article) => {
            const Icon = article.icon;
            return (
              <div
                key={article.id}
                className={`
                  group relative rounded-lg xs:rounded-xl overflow-hidden
                  border transition-all duration-500 ease-out
                  ${isDark 
                    ? 'bg-black/40 border-white/10 md:hover:border-white/20' 
                    : 'bg-white/80 border-gray-200 md:hover:border-gray-300'
                  }
                  ${!isMobile ? 'md:hover:scale-[1.02] md:hover:-translate-y-1' : 'active:scale-[0.99]'}
                  ${!isMobile ? 'md:hover:shadow-xl' : ''}
                `}
              >
                <div className={`h-24 xs:h-28 sm:h-32 flex items-center justify-center ${article.bgColor} transition-all duration-500 ${!isMobile ? 'md:group-hover:scale-105' : ''}`}>
                  <Icon className={`w-10 h-10 xs:w-12 xs:h-12 ${article.iconColor}`} />
                </div>
                
                <div className="p-3 xs:p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-2 xs:mb-3">
                    <span className={`text-[9px] xs:text-xs font-medium px-1.5 xs:px-2 py-0.5 rounded-full ${article.bgColor} ${article.iconColor}`}>
                      {categories.find(c => c.id === article.category)?.name}
                    </span>
                    <div className="hidden xs:flex items-center gap-1.5 text-[10px] xs:text-xs text-gray-400">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </div>
                  </div>

                  <h3 className={`
                    text-sm xs:text-base sm:text-lg font-bold mb-1.5 xs:mb-2 line-clamp-2 
                    ${isDark ? 'text-white' : 'text-gray-900'}
                  `}>
                    {article.title}
                  </h3>

                  <p className={`
                    text-[10px] xs:text-xs sm:text-sm mb-2 xs:mb-3 line-clamp-2 
                    ${isDark ? 'text-white/60' : 'text-gray-600'}
                  `}>
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-2 xs:mb-3">
                    {article.tags.slice(0, isMobile ? 1 : 2).map((tag, i) => (
                      <span key={i} className={`text-[8px] xs:text-[10px] px-1.5 py-0.5 rounded ${isDark ? 'bg-white/5 text-white/50' : 'bg-gray-100 text-gray-500'}`}>
                        #{tag}
                      </span>
                    ))}
                    {article.tags.length > (isMobile ? 1 : 2) && (
                      <span className={`text-[8px] xs:text-[10px] ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
                        +{article.tags.length - (isMobile ? 1 : 2)}
                      </span>
                    )}
                  </div>

                  <div className={`flex items-center justify-between pt-2 xs:pt-3 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                    <div className="flex items-center gap-1.5 xs:gap-2">
                      <div className={`w-5 h-5 xs:w-6 xs:h-6 rounded-full flex items-center justify-center text-[8px] xs:text-[10px] font-bold ${article.bgColor} ${article.iconColor}`}>
                        {article.authorImage}
                      </div>
                      <span className={`text-[9px] xs:text-xs ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                        {article.author.split(' ')[0]}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 xs:gap-3">
                      <button 
                        onClick={(e) => handleLike(article.id, e)}
                        className={`
                          flex items-center gap-1 text-[9px] xs:text-xs transition-colors
                          p-1 xs:p-1.5 rounded min-h-[32px] min-w-[32px]
                          ${likedArticles.includes(article.id) 
                            ? 'text-red-500' 
                            : (isDark ? 'text-white/40 hover:text-white' : 'text-gray-400 hover:text-gray-600')
                          }
                        `}
                        aria-label="Like article"
                      >
                        <Heart className={`w-3 h-3 ${likedArticles.includes(article.id) ? 'fill-current' : ''}`} />
                        <span className="hidden xs:inline">{article.likes + (likedArticles.includes(article.id) ? 1 : 0)}</span>
                      </button>
                      <button 
                        onClick={(e) => handleBookmark(article.id, e)}
                        className={`
                          flex items-center gap-1 text-[9px] xs:text-xs transition-colors
                          p-1 xs:p-1.5 rounded min-h-[32px] min-w-[32px]
                          ${bookmarkedArticles.includes(article.id) 
                            ? (isDark ? 'text-yellow-500' : 'text-yellow-600') 
                            : (isDark ? 'text-white/40 hover:text-white' : 'text-gray-400 hover:text-gray-600')
                          }
                        `}
                        aria-label="Bookmark article"
                      >
                        <Bookmark className={`w-3 h-3 ${bookmarkedArticles.includes(article.id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {currentArticles.length === 0 && (
          <div className="text-center py-8 xs:py-10 sm:py-12">
            <BookOpen className={`w-10 h-10 xs:w-12 xs:h-12 mx-auto mb-3 ${isDark ? 'text-white/20' : 'text-gray-300'}`} />
            <p className={`text-xs xs:text-sm ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
              No articles found in this category.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-1 xs:gap-2 mt-8 xs:mt-10">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`
                p-2 xs:p-2.5 rounded-lg transition-all duration-300 min-h-[40px] min-w-[40px]
                ${currentPage === 1 
                  ? 'opacity-30 cursor-not-allowed' 
                  : (isDark ? 'hover:bg-white/10 active:bg-white/20' : 'hover:bg-gray-100 active:bg-gray-200')
                }
              `}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {Array.from({ length: Math.min(totalPages, isMobile ? 3 : 5) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              
              if (pageNum > 0 && pageNum <= totalPages) {
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`
                      w-8 h-8 xs:w-9 xs:h-9 rounded-lg text-xs xs:text-sm font-medium transition-all duration-300
                      min-h-[40px] min-w-[40px]
                      ${currentPage === pageNum
                        ? (isDark ? 'bg-white text-black' : 'bg-gray-900 text-white')
                        : (isDark ? 'hover:bg-white/10 active:bg-white/20' : 'hover:bg-gray-100 active:bg-gray-200')
                      }
                    `}
                  >
                    {pageNum}
                  </button>
                );
              }
              return null;
            })}
            
            {totalPages > 5 && currentPage < totalPages - 2 && (
              <span className={`px-1 text-xs ${isDark ? 'text-white/40' : 'text-gray-400'}`}>...</span>
            )}
            
            {totalPages > 5 && currentPage < totalPages - 2 && (
              <button
                onClick={() => setCurrentPage(totalPages)}
                className={`
                  w-8 h-8 xs:w-9 xs:h-9 rounded-lg text-xs xs:text-sm font-medium transition-all duration-300
                  min-h-[40px] min-w-[40px]
                  ${isDark ? 'hover:bg-white/10 active:bg-white/20' : 'hover:bg-gray-100 active:bg-gray-200'}
                `}
              >
                {totalPages}
              </button>
            )}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`
                p-2 xs:p-2.5 rounded-lg transition-all duration-300 min-h-[40px] min-w-[40px]
                ${currentPage === totalPages 
                  ? 'opacity-30 cursor-not-allowed' 
                  : (isDark ? 'hover:bg-white/10 active:bg-white/20' : 'hover:bg-gray-100 active:bg-gray-200')
                }
              `}
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className={`
          mt-8 xs:mt-10 sm:mt-12 p-5 xs:p-6 sm:p-8 rounded-xl xs:rounded-2xl text-center
          border-2 transition-all duration-500
          ${isDark 
            ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30' 
            : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200'
          }
        `}>
          <Star className={`w-8 h-8 xs:w-10 xs:h-10 mx-auto mb-2 xs:mb-3 ${isDark ? 'text-yellow-500' : 'text-yellow-600'}`} />
          <h3 className={`text-lg xs:text-xl font-bold mb-1.5 xs:mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Never Miss an Insight
          </h3>
          <p className={`text-xs xs:text-sm mb-3 xs:mb-4 px-2 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            Subscribe to get the latest articles delivered straight to your inbox
          </p>
          <div className="flex flex-col xs:flex-row max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className={`
                flex-1 px-4 py-2.5 xs:py-2 rounded-lg border text-sm
                ${isDark 
                  ? 'bg-white/5 border-white/10 text-white placeholder:text-white/30' 
                  : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400'
                }
                focus:outline-none focus:ring-1 focus:ring-blue-500
              `}
            />
            <button className="group relative px-6 py-2.5 xs:py-2 rounded-lg overflow-hidden text-sm font-semibold transition-all duration-500 hover:scale-105 active:scale-95">
              <div className={`absolute inset-0 transition-all duration-500 ${isDark ? 'bg-white' : 'bg-gray-900'}`} />
              <div className={`absolute inset-[1px] rounded-lg transition-all duration-500 ${isDark ? 'bg-black/5' : 'bg-white/10'}`} />
              <span className={`relative z-10 flex items-center justify-center gap-2 ${isDark ? 'text-gray-900' : 'text-white'}`}>
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        .poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
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