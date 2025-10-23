'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Filter, Search, Globe, FileText } from 'lucide-react';
import Link from 'next/link';
import { fetchPostsClient, SimplifiedPost } from '@/lib/wordpress';
import { fallbackBlogPosts } from '@/data/fallback-blog-posts';

// Types - Renamed to match WordPress structure
interface SanityPost extends SimplifiedPost {
  // Keep interface for backward compatibility
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

// Colorful news icon component for fallbacks
function NewsIcon({ className, iconSize = "w-12 h-12", textSize = "text-sm" }: { 
  className: string, 
  iconSize?: string,
  textSize?: string 
}) {
  return (
    <div className={`flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 ${className}`}>
      <div className="text-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-3">
          <svg className={`${iconSize} text-white mx-auto`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </div>
        <span className={`text-white ${textSize} font-bold tracking-wide`}>NEWS</span>
      </div>
    </div>
  );
}

// Image component with fallback to news icon
function ImageWithFallback({ src, alt, className, iconSize, textSize }: { 
  src?: string, 
  alt: string, 
  className: string,
  iconSize?: string,
  textSize?: string
}) {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(undefined);
    }
  };

  // If no src or error occurred, show news icon
  if (!imgSrc || hasError) {
    return <NewsIcon className={className} iconSize={iconSize} textSize={textSize} />;
  }

  // Show actual image
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
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
          {sanityPost.image ? (
            <img
              src={sanityPost.image.url}
              alt={sanityPost.image.alt || sanityPost.title}
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
          <div className="absolute top-0 left-0 right-0 p-4 sm:p-8">
            {/* Badge */}
            <div className="inline-block bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
              {sanityPost.categories && sanityPost.categories.length > 0 ? sanityPost.categories[0] : 'Pathmark Insight'}
            </div>
            
            {/* Title */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight line-clamp-2">
              {sanityPost.title}
            </h1>
            
            {/* Meta - Better positioned and styled */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-white/90 mb-4">
              <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                <Calendar size={14} />
                <span className="text-sm">{formatDate(sanityPost.publishedAt)}</span>
              </div>
              {sanityPost.author && (
                <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                  <User size={14} />
                  <span className="text-sm">{sanityPost.author}</span>
                </div>
              )}
            </div>
            
            {/* CTA - More prominent */}
            <Link
              href={`/insights/${sanityPost.slug.current}`}
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold shadow-lg"
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
          <ImageWithFallback
            src={rssArticle.image}
            alt={rssArticle.title}
            className="w-full h-full object-cover"
            iconSize="w-16 h-16"
            textSize="text-base"
          />
        </div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-transparent">
          <div className="absolute top-0 left-0 right-0 p-4 sm:p-8">
            {/* Badges */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-3">
              <div className={`inline-block text-sm font-semibold px-3 py-1 rounded-full ${getCategoryColor(rssArticle.category)}`}>
                {rssArticle.category}
              </div>
              <div className="text-white/90 text-sm bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                {rssArticle.source}
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight line-clamp-2">
              {rssArticle.title}
            </h1>
            
            {/* Description */}
            <p className="text-white/90 text-sm sm:text-base mb-4 leading-relaxed line-clamp-2">
              {rssArticle.description}
            </p>
            
            {/* Meta - Better positioned and styled */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-white/90 mb-4">
              <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                <Calendar size={14} />
                <span className="text-sm">{formatDate(rssArticle.pubDate)}</span>
              </div>
              {rssArticle.author && (
                <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                  <User size={14} />
                  <span className="text-sm">{rssArticle.author}</span>
                </div>
              )}
            </div>
            
            {/* CTA - More prominent */}
            <a
              href={rssArticle.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold shadow-lg"
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
          {sanityPost.image ? (
            <img
              src={sanityPost.image.url}
              alt={sanityPost.image.alt || sanityPost.title}
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
            {sanityPost.categories && sanityPost.categories.length > 0 ? sanityPost.categories[0] : 'Pathmark'}
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
          <ImageWithFallback
            src={rssArticle.image}
            alt={rssArticle.title}
            className="w-full h-full object-cover"
            iconSize="w-6 h-6"
            textSize="text-xs"
          />
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
          {sanityPost.image ? (
            <img
              src={sanityPost.image.url}
              alt={sanityPost.image.alt || sanityPost.title}
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
            {sanityPost.categories && sanityPost.categories.length > 0 ? sanityPost.categories[0] : 'Pathmark'}
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
           <ImageWithFallback
             src={rssArticle.image}
             alt={rssArticle.title}
             className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
             iconSize="w-12 h-12"
             textSize="text-sm"
           />
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

  // Load WordPress posts (previously Sanity)
  useEffect(() => {
    const fetchWordPressPosts = async () => {
      try {
        const posts = await fetchPostsClient(50); // Fetch up to 50 posts
        
        // If WordPress returns no posts, use fallback posts
        if (posts.length === 0) {
          console.log('No WordPress posts found, using fallback content');
          setSanityPosts(fallbackBlogPosts);
        } else {
          setSanityPosts(posts);
        }
      } catch (error) {
        console.error('Error fetching WordPress posts:', error);
        // Use fallback posts on error
        setSanityPosts(fallbackBlogPosts);
      } finally {
        setSanityLoading(false);
      }
    };

    fetchWordPressPosts();
  }, []);

  // RSS articles removed - not compatible with static export
  // If you need industry news, consider using a third-party widget or embed
  useEffect(() => {
    setRssArticles([]);
    setRssLoading(false);
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

  // Function to check if image should be blocked (unwanted placeholder images)
  const shouldBlockImage = (imageUrl: string) => {
    if (!imageUrl) return false;
    
    const lowerUrl = imageUrl.toLowerCase();
    
    // Block common unwanted image patterns
    const blockedPatterns = [
      'placeholder',
      'default',
      'no-image',
      'missing',
      'broken',
      'error',
      // Block specific unwanted image URLs that contain the man's photo
      'headshot',
      'profile',
      'author',
      'reporter',
      'journalist',
      'staff',
      // Block common image hosting services that often have placeholder images
      'via.placeholder.com',
      'picsum.photos',
      'lorempixel.com'
    ];
    
    return blockedPatterns.some(pattern => lowerUrl.includes(pattern));
  };

  // Function to clean article data and block unwanted images
  const cleanArticleData = (articles: RSSArticle[]) => {
    return articles.map(article => ({
      ...article,
      // Temporarily block ALL RSS images to force news icons
      // Change this back to: shouldBlockImage(article.image || '') ? undefined : article.image
      // when you want to allow real images again
      image: undefined
    }));
  };

  const filteredRssArticles = cleanArticleData(
    rssArticles.filter(article => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.source.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filter out articles with inappropriate content
      const hasInappropriateContent = containsInappropriateContent(article.title) || 
                                     containsInappropriateContent(article.description);
      
      return matchesCategory && matchesSearch && !hasInappropriateContent;
    })
  );

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
  // const featuredSanityPost = filteredSanityPosts[0]; // Unused for now
  // const featuredRssArticle = filteredRssArticles[0]; // Unused for now
  const sidebarSanityPosts = filteredSanityPosts.slice(1, 4);
  const sidebarRssArticles = filteredRssArticles.slice(1, 50); // Load more articles for scrolling
  const remainingSanityPosts = filteredSanityPosts.slice(4, 10);
  const initialRssArticles = filteredRssArticles.slice(6, 12); // Show 6 cards initially (after hero + sidebar)
  const remainingRssArticles = showMoreRss ? filteredRssArticles.slice(6, 50) : initialRssArticles;

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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80"></div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Insights & Expertise
              </h1>
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed">
                Stay informed with expert insights on energy, mining, construction, technology, and investment opportunities across Nigeria and beyond.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm lg:text-base">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  ⚡ Energy & Mining
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  🏗️ Infrastructure
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  💡 Technology
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  💼 Investment
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="bg-white py-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Welcome to Pathmark Insights
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our Insights page is your gateway to understanding the dynamic landscape of Nigerian business and investment. 
              We share expert analysis, industry trends, and practical insights across the sectors we serve—from renewable 
              energy and mining operations to infrastructure development and digital transformation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're an investor exploring opportunities, a business leader seeking strategic guidance, or simply 
              interested in Nigeria's economic development, you'll find valuable perspectives to inform your decisions. 
              Our content reflects our commitment to excellence and deep understanding of both local markets and international best practices.
            </p>
          </motion.div>
        </div>
      </section>

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
                <h2 className="text-3xl font-bold text-gray-900">Pathmark Blog</h2>
              </div>
              <span className="text-gray-600">
                {filteredSanityPosts.length} posts
              </span>
            </div>

            {sanityLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-gray-600">Loading blog posts from WordPress...</p>
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
                    {filteredSanityPosts.slice(0, 5).map((post) => (
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
                  No articles match your search
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search terms or browse our featured content below.
                </p>
              </div>
            )}
          </section>

          {/* Note: Industry News RSS section removed for static export compatibility */}
          {/* You can add external news widgets or embeds here if needed */}
          </div>
      </div>
    </div>
  );
}