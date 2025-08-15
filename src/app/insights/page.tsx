'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ArrowRight, Filter, Search, Globe, FileText, ChevronDown, Clock, Tag } from 'lucide-react';
import Link from 'next/link';
import { urlFor } from '../../sanity/lib/image';

// Types
interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  image: {
    asset: {
      _ref: string;
    };
  } | null;
  body: unknown[];
  author?: string;
  categories?: string[];
}

interface RSSArticle {
  id: string;
  title: string;
  link: string;
  description: string;
  category: string;
  source: string;
  pubDate: string;
  image?: string;
  author?: string;
}

interface InsightsResponse {
  success: boolean;
  articles: RSSArticle[];
  total: number;
  category: string;
}

// Components
function HeroArticle({ post, type }: { post: SanityPost | RSSArticle, type: 'sanity' | 'rss' }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Energy': 'bg-yellow-100 text-yellow-800',
      'Technology': 'bg-blue-100 text-blue-800',
      'Construction': 'bg-gray-100 text-gray-800',
      'Finance': 'bg-green-100 text-green-800',
      'Public Sector': 'bg-purple-100 text-purple-800',
      'Mining': 'bg-orange-100 text-orange-800',
      'Investment Africa': 'bg-indigo-100 text-indigo-800',
      'Nigerian News': 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  if (type === 'sanity') {
    const sanityPost = post as SanityPost;
  return (
      <article className="relative overflow-hidden rounded-2xl shadow-2xl">
        {/* Hero Image */}
        <div className="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200">
          {sanityPost.image && sanityPost.image.asset ? (
            <img
              src={urlFor(sanityPost.image).width(800).height(450).url()}
              alt={sanityPost.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
              <div className="text-gray-400 text-6xl">📄</div>
            </div>
          )}
        </div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-transparent">
          <div className="absolute top-0 left-0 right-0 p-8">
            {/* Badge */}
            <div className="inline-block bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
              {sanityPost.categories && sanityPost.categories.length > 0 ? sanityPost.categories[0] : 'Pathmark Insight'}
            </div>
            
            {/* Title */}
            <h1 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight line-clamp-2">
              {sanityPost.title}
            </h1>
            
            {/* Meta */}
            <div className="flex items-center space-x-4 text-white/90 mb-4">
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{formatDate(sanityPost.publishedAt)}</span>
              </div>
              {sanityPost.author && (
                <div className="flex items-center space-x-2">
                  <User size={16} />
                  <span>{sanityPost.author}</span>
                </div>
              )}
            </div>
            
            {/* CTA */}
            <Link
              href={`/insights/${sanityPost.slug.current}`}
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
            >
              Read Full Article
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </article>
    );
  } else {
    const rssArticle = post as RSSArticle;
    return (
      <article className="relative overflow-hidden rounded-2xl shadow-2xl">
        {/* Hero Image */}
        <div className="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200">
          {rssArticle.image ? (
            <img
              src={rssArticle.image}
              alt={rssArticle.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-gray-400 text-6xl">📰</div>
            </div>
          )}
        </div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-transparent">
          <div className="absolute top-0 left-0 right-0 p-8">
            {/* Badges */}
            <div className="flex items-center space-x-3 mb-3">
              <div className={`inline-block text-sm font-semibold px-3 py-1 rounded-full ${getCategoryColor(rssArticle.category)}`}>
                {rssArticle.category}
              </div>
              <div className="text-white/90 text-sm">
                {rssArticle.source}
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight line-clamp-2">
              {rssArticle.title}
            </h1>
            
            {/* Description */}
            <p className="text-white/90 text-base mb-4 leading-relaxed line-clamp-2">
              {rssArticle.description}
            </p>
            
            {/* Meta */}
            <div className="flex items-center space-x-4 text-white/90 mb-4">
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{formatDate(rssArticle.pubDate)}</span>
              </div>
              {rssArticle.author && (
                <div className="flex items-center space-x-2">
                  <User size={16} />
                  <span>{rssArticle.author}</span>
                </div>
              )}
            </div>
            
            {/* CTA */}
            <a
              href={rssArticle.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
            >
              Read Full Article
              <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </article>
    );
  }
}

function SidebarArticle({ post, type }: { post: SanityPost | RSSArticle, type: 'sanity' | 'rss' }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Energy': 'bg-yellow-100 text-yellow-800',
      'Technology': 'bg-blue-100 text-blue-800',
      'Construction': 'bg-gray-100 text-gray-800',
      'Finance': 'bg-green-100 text-green-800',
      'Public Sector': 'bg-purple-100 text-purple-800',
      'Mining': 'bg-orange-100 text-orange-800',
      'Investment Africa': 'bg-indigo-100 text-indigo-800',
      'Nigerian News': 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  if (type === 'sanity') {
    const sanityPost = post as SanityPost;
    return (
      <article className="flex space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
        {/* Thumbnail */}
        <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
          {sanityPost.image && sanityPost.image.asset ? (
            <img
              src={urlFor(sanityPost.image).width(80).height(80).url()}
              alt={sanityPost.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-gray-400 text-lg">📄</div>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full mb-2">
            Pathmark
          </div>
          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 text-sm">
            {sanityPost.title}
          </h3>
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <Calendar size={12} />
            <span>{formatDate(sanityPost.publishedAt)}</span>
          </div>
        </div>
      </article>
    );
  } else {
    const rssArticle = post as RSSArticle;
    return (
      <article className="flex space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
        {/* Thumbnail */}
        <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
          {rssArticle.image ? (
            <img
              src={rssArticle.image}
              alt={rssArticle.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-gray-400 text-lg">📰</div>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className={`inline-block text-xs font-semibold px-2 py-1 rounded-full mb-2 ${getCategoryColor(rssArticle.category)}`}>
            {rssArticle.category}
          </div>
          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 text-sm">
            {rssArticle.title}
          </h3>
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <Calendar size={12} />
            <span>{formatDate(rssArticle.pubDate)}</span>
          </div>
        </div>
      </article>
    );
  }
}

function ArticleCard({ post, type }: { post: SanityPost | RSSArticle, type: 'sanity' | 'rss' }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Energy': 'bg-yellow-100 text-yellow-800',
      'Technology': 'bg-blue-100 text-blue-800',
      'Construction': 'bg-gray-100 text-gray-800',
      'Finance': 'bg-green-100 text-green-800',
      'Public Sector': 'bg-purple-100 text-purple-800',
      'Mining': 'bg-orange-100 text-orange-800',
      'Investment Africa': 'bg-indigo-100 text-indigo-800',
      'Nigerian News': 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  if (type === 'sanity') {
    const sanityPost = post as SanityPost;
    return (
      <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        {/* Image */}
        <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
          {sanityPost.image && sanityPost.image.asset ? (
            <img
              src={urlFor(sanityPost.image).width(400).height(300).url()}
              alt={sanityPost.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-gray-400 text-3xl">📄</div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
          <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
            {sanityPost.categories && sanityPost.categories.length > 0 ? sanityPost.categories[0] : 'Pathmark Insights'}
          </div>
          
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
            {sanityPost.title}
        </h3>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-2">
              <Calendar size={14} />
              <span>{formatDate(sanityPost.publishedAt)}</span>
          </div>
        </div>

        <Link
            href={`/insights/${sanityPost.slug.current}`}
          className="inline-flex items-center text-primary hover:text-primary-700 font-medium transition-colors"
        >
          Read More
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </article>
  );
     } else {
     const rssArticle = post as RSSArticle;
     return (
       <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
         {/* Image */}
         <div className="aspect-[3/2] bg-gray-200 overflow-hidden">
           {rssArticle.image ? (
             <img
               src={rssArticle.image}
               alt={rssArticle.title}
               className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
             />
           ) : (
             <div className="w-full h-full flex items-center justify-center">
               <div className="text-gray-400 text-2xl">📰</div>
             </div>
           )}
         </div>
         
         {/* Content */}
         <div className="p-4">
           <div className="flex items-center justify-between mb-2">
             <div className={`inline-block text-xs font-semibold px-2 py-1 rounded-full ${getCategoryColor(rssArticle.category)}`}>
               {rssArticle.category}
             </div>
             <div className="text-xs text-gray-500">
               {rssArticle.source}
             </div>
           </div>
           
           <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
             {rssArticle.title}
           </h3>
           
           <p className="text-gray-600 text-sm mb-3 line-clamp-2">
             {rssArticle.description}
           </p>
           
           <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
             <div className="flex items-center space-x-1">
               <Calendar size={12} />
               <span>{formatDate(rssArticle.pubDate)}</span>
             </div>
             {rssArticle.author && (
               <div className="flex items-center space-x-1">
                 <User size={12} />
                 <span className="truncate max-w-16">{rssArticle.author}</span>
               </div>
             )}
           </div>
           
           <a
             href={rssArticle.link}
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center text-primary hover:text-primary-700 font-medium text-sm transition-colors"
           >
             Read Full Article
             <ArrowRight size={14} className="ml-1" />
           </a>
    </div>
       </article>
  );
   }
}

// Main Page Component
export default function InsightsPage() {
  const [sanityPosts, setSanityPosts] = useState<SanityPost[]>([]);
  const [rssArticles, setRssArticles] = useState<RSSArticle[]>([]);
  const [sanityLoading, setSanityLoading] = useState(true);
  const [rssLoading, setRssLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSanitySlide, setCurrentSanitySlide] = useState(0);
  const [currentRssSlide, setCurrentRssSlide] = useState(0);
  const [showMoreRss, setShowMoreRss] = useState(false);

  const categories = [
    'All', 'Energy', 'Technology', 'Construction', 'Finance', 
    'Public Sector', 'Mining', 'Investment Africa', 'Nigerian News'
  ];

  // Load Sanity posts immediately and independently
  useEffect(() => {
    const fetchSanityPosts = async () => {
      try {
        const response = await fetch('/api/sanity/posts');
        if (response.ok) {
          const data = await response.json();
          setSanityPosts(data.posts || []);
        } else {
          console.error('Failed to fetch Sanity posts');
        }
      } catch (error) {
        console.error('Error fetching Sanity posts:', error);
      } finally {
        setSanityLoading(false);
      }
    };

    fetchSanityPosts();
  }, []);

  // Load RSS articles separately with a slight delay
  useEffect(() => {
    const fetchRssArticles = async () => {
      try {
        const response = await fetch('/api/insights?limit=100');
        if (response.ok) {
          const data: InsightsResponse = await response.json();
          setRssArticles(data.articles || []);
        } else {
          console.error('Failed to fetch RSS articles');
        }
      } catch (error) {
        console.error('Error fetching RSS articles:', error);
      } finally {
        setRssLoading(false);
      }
    };

    // Small delay to prioritize Sanity content
    const timer = setTimeout(fetchRssArticles, 100);
    return () => clearTimeout(timer);
  }, []);

  // Function to check if content contains inappropriate material
  const containsInappropriateContent = (text: string) => {
    const inappropriateKeywords = [
      'sex', 'sexual', 'porn', 'pornography', 'adult', 'nude', 'naked', 'intimate',
      'erotic', 'explicit', 'obscene', 'lewd', 'vulgar', 'inappropriate'
    ];
    
    const lowerText = text.toLowerCase();
    return inappropriateKeywords.some(keyword => lowerText.includes(keyword));
  };

  const filteredRssArticles = rssArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.source.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter out articles with inappropriate content
    const hasInappropriateContent = containsInappropriateContent(article.title) || 
                                   containsInappropriateContent(article.description);
    
    return matchesCategory && matchesSearch && !hasInappropriateContent;
  });

  const filteredSanityPosts = sanityPosts.filter(post => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Auto-slide for Sanity posts
  useEffect(() => {
    if (filteredSanityPosts.length > 0) {
      const interval = setInterval(() => {
        setCurrentSanitySlide((prev) => (prev + 1) % Math.min(5, filteredSanityPosts.length));
      }, 4000); // Change slide every 4 seconds
      return () => clearInterval(interval);
    }
  }, [filteredSanityPosts]);

  // Auto-slide for RSS articles
  useEffect(() => {
    if (filteredRssArticles.length > 0) {
      const interval = setInterval(() => {
        setCurrentRssSlide((prev) => (prev + 1) % Math.min(5, filteredRssArticles.length));
      }, 4000); // Change slide every 4 seconds
      return () => clearInterval(interval);
    }
  }, [filteredRssArticles]);

  // Get featured articles for hero and sidebar
  const featuredSanityPost = filteredSanityPosts[0];
  const featuredRssArticle = filteredRssArticles[0];
  const sidebarSanityPosts = filteredSanityPosts.slice(1, 4);
  const sidebarRssArticles = filteredRssArticles.slice(1, 50); // Load more articles for scrolling
  const remainingSanityPosts = filteredSanityPosts.slice(4, 10);
  const initialRssArticles = filteredRssArticles.slice(20, 26); // Show only 6 cards initially
  const remainingRssArticles = showMoreRss ? filteredRssArticles.slice(20, 50) : initialRssArticles;

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Video Banner Section */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/insights-banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Insights & Analysis
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8">
              Expert insights from Pathmark Advisory and curated industry news from trusted sources
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-8 space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-4">
            <Search size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <Filter size={20} className="text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-16">
          {/* Section 1: Pathmark Insights */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <FileText size={24} className="text-primary" />
                <h2 className="text-3xl font-bold text-gray-900">Pathmark Insights</h2>
              </div>
              <span className="text-gray-600">
                {filteredSanityPosts.length} posts
              </span>
            </div>

            {sanityLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-gray-600">Loading Pathmark insights...</p>
              </div>
            ) : filteredSanityPosts.length > 0 ? (
              <div className="space-y-8">
                {/* Hero Article with Improved Sliding Effect */}
                <div className="relative overflow-hidden h-[500px] rounded-2xl">
                  <motion.div
                    className="h-full flex"
                    animate={{
                      x: `${-currentSanitySlide * 100}%`,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  >
                    {filteredSanityPosts.slice(0, 5).map((post, index) => (
                      <div
                        key={post._id}
                        className="w-full h-full flex-shrink-0"
                      >
                        <HeroArticle post={post} type="sanity" />
                      </div>
                    ))}
                  </motion.div>
                  
                  {/* Slide Indicators */}
                  {filteredSanityPosts.slice(0, 5).length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {filteredSanityPosts.slice(0, 5).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSanitySlide(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentSanitySlide ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Sidebar Layout for Recent Posts */}
                {sidebarSanityPosts.length > 0 && (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Insights</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {remainingSanityPosts.slice(0, 4).map((post) => (
                          <ArticleCard key={post._id} post={post} type="sanity" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Reads</h3>
                      <div className="space-y-4">
                        {sidebarSanityPosts.map((post) => (
                          <Link key={post._id} href={`/insights/${post.slug.current}`}>
                            <SidebarArticle post={post} type="sanity" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 text-4xl mb-4">📄</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No Pathmark insights found
              </h3>
              <p className="text-gray-600">
                  {searchQuery ? 'Try adjusting your search terms.' : 'No insights have been published yet. Create your first post in the Studio!'}
              </p>
            </div>
          )}
          </section>

          {/* Section 2: Industry News */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <Globe size={24} className="text-primary" />
                <h2 className="text-3xl font-bold text-gray-900">Industry News</h2>
              </div>
              <span className="text-gray-600">
                {filteredRssArticles.length} articles
              </span>
            </div>

            {rssLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-gray-600">Loading industry news...</p>
              </div>
            ) : filteredRssArticles.length > 0 ? (
              <div className="space-y-8">
                {/* Hero Article with Improved Sliding Effect */}
                <div className="relative overflow-hidden h-[500px] rounded-2xl">
                  <motion.div
                    className="h-full flex"
                    animate={{
                      x: `${-currentRssSlide * 100}%`,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  >
                    {filteredRssArticles.slice(0, 5).map((article, index) => (
                      <div
                        key={article.id}
                        className="w-full h-full flex-shrink-0"
                      >
                        <HeroArticle post={article} type="rss" />
                      </div>
                    ))}
                  </motion.div>
                  
                  {/* Slide Indicators */}
                  {filteredRssArticles.slice(0, 5).length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {filteredRssArticles.slice(0, 5).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentRssSlide(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentRssSlide ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Sidebar Layout for Recent Articles */}
                {sidebarRssArticles.length > 0 && (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                         <div className="lg:col-span-2">
                       <h3 className="text-xl font-semibold text-gray-900 mb-4">Latest News</h3>
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                         {remainingRssArticles.map((article) => (
                           <ArticleCard key={article.id} post={article} type="rss" />
                         ))}
                       </div>
                       {filteredRssArticles.length > 26 && (
                         <div className="text-center mt-8">
                           {!showMoreRss ? (
                             <button
                               onClick={() => setShowMoreRss(true)}
                               className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
                             >
                               Explore More Articles
                               <ArrowRight size={20} className="ml-2" />
                             </button>
                           ) : (
                             <button
                               onClick={() => setShowMoreRss(false)}
                               className="inline-flex items-center bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                             >
                               Show Less
                               <ArrowRight size={20} className="ml-2 rotate-180" />
                             </button>
                           )}
                         </div>
                       )}
                     </div>
                    
                                         <div className="lg:col-span-1">
                       <h3 className="text-xl font-semibold text-gray-900 mb-4">Trending</h3>
                       <div className="relative overflow-hidden h-[800px]">
                         <motion.div
                           className="space-y-4"
                           animate={{
                             y: [0, -2800],
                           }}
                           transition={{
                             duration: 40,
                             repeat: Infinity,
                             ease: "linear",
                           }}
                         >
                           {sidebarRssArticles.map((article) => (
                             <a key={article.id} href={article.link} target="_blank" rel="noopener noreferrer">
                               <SidebarArticle post={article} type="rss" />
                             </a>
                           ))}
                           {/* Duplicate articles for seamless loop */}
                           {sidebarRssArticles.map((article) => (
                             <a key={`${article.id}-duplicate`} href={article.link} target="_blank" rel="noopener noreferrer">
                               <SidebarArticle post={article} type="rss" />
                             </a>
                           ))}
                         </motion.div>
                       </div>
                     </div>
                  </div>
                )}
                

              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 text-4xl mb-4">📰</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No industry articles found
                </h3>
                <p className="text-gray-600">
                  {searchQuery || selectedCategory !== 'All' 
                    ? 'Try adjusting your search terms or category filter.' 
                    : 'Unable to fetch industry news at the moment. Please try again later.'
                  }
                </p>
              </div>
            )}
          </section>
          </div>
      </div>
    </div>
  );
}