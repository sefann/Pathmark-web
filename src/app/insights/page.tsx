'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Filter, Search } from 'lucide-react';
import Link from 'next/link';
import { fetchPostsClient, SimplifiedPost } from '@/lib/wordpress';
import { fallbackBlogPosts, FallbackPost } from '@/data/fallback-blog-posts';
import { newsArticles } from '@/data/news-articles';
import { getNewsByCategory, searchNewsArticles, getNewsCategories, NewsArticle } from '@/lib/news';

// Types
interface WordPressPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  author?: string;
  categories: string[];
}

// Convert fallback posts to WordPress format
function convertFallbackToWordPress(fallbackPost: FallbackPost): WordPressPost {
  return {
    id: fallbackPost._id,
    title: fallbackPost.title,
    slug: fallbackPost.slug.current,
    date: fallbackPost.publishedAt,
    excerpt: fallbackPost.excerpt || '',
    content: fallbackPost.content || '',
    featuredImage: fallbackPost.image?.url,
    author: fallbackPost.author || 'Pathmark Advisory',
    categories: fallbackPost.categories || []
  };
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

// Image with fallback component
function ImageWithFallback({ 
  src, 
  alt, 
  className, 
  iconSize = "w-12 h-12", 
  textSize = "text-sm" 
}: { 
  src?: string; 
  alt: string; 
  className: string;
  iconSize?: string;
  textSize?: string;
}) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <NewsIcon className={className} iconSize={iconSize} textSize={textSize} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setImageError(true)}
    />
  );
}

// Hero Article Component
function HeroArticle({ post }: { post: WordPressPost }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
      <article className="relative overflow-hidden rounded-2xl shadow-2xl">
        {/* Hero Image - much smaller with dark overlay */}
        <div className="aspect-[4/1] bg-gradient-to-br from-gray-100 to-gray-200 relative">
        {post.featuredImage ? (
            <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
              <div className="text-gray-400 text-3xl">📄</div>
            </div>
          )}
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-transparent">
          <div className="absolute top-0 left-0 right-0 p-4 sm:p-8">
            {/* Badge */}
            <div className="inline-block bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Pathmark Insight
            </div>
            
            {/* Title */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight line-clamp-2">
            {post.title}
            </h1>
            
          {/* Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-white/90 mb-4">
              <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                <Calendar size={14} />
              <span className="text-sm">{formatDate(post.date)}</span>
              </div>
            {post.author && (
                <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                  <User size={14} />
                <span className="text-sm">{post.author}</span>
                </div>
              )}
            </div>
            
          {/* CTA */}
            <Link
            href={`/insights/${post.slug}`}
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold shadow-lg"
            >
              Read Full Article
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </article>
    );
}

// News Card Component
function NewsCard({ article }: { article: NewsArticle }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Energy': 'bg-yellow-100 text-yellow-800',
      'Mining': 'bg-orange-100 text-orange-800',
      'Construction': 'bg-gray-100 text-gray-800',
      'Technology': 'bg-blue-100 text-blue-800',
      'Finance': 'bg-green-100 text-green-800',
      'Government': 'bg-purple-100 text-purple-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

    return (
    <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Image - much smaller with dark overlay */}
      <div className="aspect-[4/1] bg-gray-200 overflow-hidden relative">
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-gray-400 text-2xl">📰</div>
          </div>
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(article.category)}`}>
            {article.category}
          </div>
          <div className="text-xs text-gray-500">{article.source}</div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {article.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {article.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-2">
                <Calendar size={14} />
            <span>{formatDate(article.pubDate)}</span>
              </div>
          {article.author && (
            <div className="flex items-center space-x-2">
                  <User size={14} />
              <span>{article.author}</span>
                </div>
              )}
            </div>
            
            <a
          href={article.link}
              target="_blank"
              rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:text-primary-700 font-medium transition-colors"
            >
          Read Full Story
          <ArrowRight size={16} className="ml-1" />
            </a>
        </div>
      </article>
    );
}

// Sidebar News Card Component (very compact version)
function SidebarNewsCard({ article }: { article: NewsArticle }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Energy': 'bg-yellow-100 text-yellow-800',
      'Mining': 'bg-orange-100 text-orange-800',
      'Construction': 'bg-gray-100 text-gray-800',
      'Technology': 'bg-blue-100 text-blue-800',
      'Finance': 'bg-green-100 text-green-800',
      'Government': 'bg-purple-100 text-purple-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

    return (
    <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      {/* Content only - no image */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <div className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${getCategoryColor(article.category)}`}>
            {article.category}
          </div>
          <div className="text-xs text-gray-500">{article.source}</div>
        </div>
        
        <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {article.title}
          </h3>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <div className="flex items-center space-x-1">
            <Calendar size={10} />
            <span>{formatDate(article.pubDate)}</span>
          </div>
        </div>

        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:text-primary-700 font-medium transition-colors text-xs"
        >
          Read Story
          <ArrowRight size={12} className="ml-1" />
        </a>
        </div>
      </article>
    );
}

// Article Card Component
function ArticleCard({ post }: { post: WordPressPost }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

    return (
      <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Image - much smaller with dark overlay */}
      <div className="aspect-[4/1] bg-gray-200 overflow-hidden relative">
        {post.featuredImage ? (
          <img
            src={post.featuredImage}
            alt={post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-gray-400 text-2xl">📄</div>
          </div>
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="p-6">
          <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Pathmark
          </div>
          
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {post.title}
        </h3>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-2">
              <Calendar size={14} />
            <span>{formatDate(post.date)}</span>
          </div>
        </div>

        <Link
          href={`/insights/${post.slug}`}
          className="inline-flex items-center text-primary hover:text-primary-700 font-medium transition-colors"
        >
          Read More
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </article>
  );
}

// Sidebar Article Card Component (very compact version)
function SidebarArticleCard({ post }: { post: WordPressPost }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      {/* Content only - no image */}
      <div className="p-3">
        <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {post.title}
           </h3>
           
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
             <div className="flex items-center space-x-1">
            <Calendar size={10} />
            <span>{formatDate(post.date)}</span>
               </div>
           </div>
           
        <Link
          href={`/insights/${post.slug}`}
          className="inline-flex items-center text-primary hover:text-primary-700 font-medium transition-colors text-xs"
        >
          Read More
          <ArrowRight size={12} className="ml-1" />
        </Link>
    </div>
       </article>
  );
}

// Main Page Component
export default function InsightsPage() {
  const [wordpressPosts, setWordpressPosts] = useState<WordPressPost[]>([]);
  const [news, setNews] = useState<NewsArticle[]>(newsArticles);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'insights' | 'news'>('insights');

  const newsCategories = getNewsCategories();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const posts = await fetchPostsClient();
        
        if (posts.length > 0) {
          // Convert WordPress posts to our format
          const wordpressPosts = posts.map(post => ({
            id: post._id,
            title: post.title,
            slug: post.slug.current,
            date: post.publishedAt,
            excerpt: post.excerpt || '',
            content: post.content || '',
            featuredImage: post.image?.url,
            author: post.author || 'Pathmark Advisory',
            categories: post.categories || []
          }));
          setWordpressPosts(wordpressPosts);
        } else {
          // Use fallback posts if WordPress fails
          const convertedPosts = fallbackBlogPosts.map(convertFallbackToWordPress);
          setWordpressPosts(convertedPosts);
        }
      } catch (error) {
        console.error('Error loading posts:', error);
        // Use fallback posts if WordPress fails
        const convertedPosts = fallbackBlogPosts.map(convertFallbackToWordPress);
        setWordpressPosts(convertedPosts);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  // Filter posts based on search and category
  const filteredPosts = wordpressPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  // Filter news based on search and category
  const filteredNews = searchNewsArticles(
    getNewsByCategory(news, selectedCategory),
    searchQuery
  );

  const heroPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-red-50"></div>
        <div className="absolute inset-0 bg-[url('/images/insights-banner.png')] bg-cover bg-center opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
              Insights & News
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest insights, industry news, and expert analysis 
              from Pathmark Advisory and trusted sources across Nigeria and Africa.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-1 shadow-lg">
                <button
                  onClick={() => setActiveTab('insights')}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                    activeTab === 'insights'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  Our Insights
                </button>
                <button
                  onClick={() => setActiveTab('news')}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                    activeTab === 'news'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  Latest News
                </button>
              </div>
        </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
                  placeholder={`Search ${activeTab === 'insights' ? 'insights' : 'news'}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
            >
                  {newsCategories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
          </div>
              </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-gray-600">Loading content...</p>
            </div>
          ) : activeTab === 'insights' ? (
            // Insights Content
            filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📰</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No insights found</h3>
                <p className="text-gray-600">Try adjusting your search terms or check back later for new content.</p>
              </div>
            ) : (
              <>
                {/* Hero Article */}
                {heroPost && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                  >
                    <HeroArticle post={heroPost} />
                  </motion.div>
                )}

                {/* Other Articles Grid */}
                {otherPosts.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">More Insights</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Main Articles - 2 cards */}
                      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {otherPosts.slice(0, 2).map((post) => (
                          <ArticleCard key={post.id} post={post} />
                        ))}
                      </div>
                      
                      {/* Sidebar - 3 compact cards in fixed height container */}
                      <div className="lg:col-span-1">
                        <div className="space-y-3">
                          {otherPosts.slice(2, 5).map((post) => (
                            <SidebarArticleCard key={post.id} post={post} />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Mobile: Show remaining posts in a grid */}
                    {otherPosts.length > 5 && (
                      <div className="mt-8 lg:hidden">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">More Articles</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {otherPosts.slice(5).map((post) => (
                            <ArticleCard key={post.id} post={post} />
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </>
            )
          ) : (
            // News Content
            filteredNews.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📰</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No news found</h3>
                <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Latest News {selectedCategory !== 'All' && `- ${selectedCategory}`}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main News - 2 cards */}
                  <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredNews.slice(0, 2).map((article) => (
                      <NewsCard key={article.id} article={article} />
                    ))}
                  </div>
                  
                  {/* Sidebar - 3 compact news cards */}
                  <div className="lg:col-span-1">
                    <div className="space-y-3">
                      {filteredNews.slice(2, 5).map((article) => (
                        <SidebarNewsCard key={article.id} article={article} />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Mobile: Show remaining news in a grid */}
                {filteredNews.length > 5 && (
                  <div className="mt-8 lg:hidden">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">More News</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredNews.slice(5).map((article) => (
                        <NewsCard key={article.id} article={article} />
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )
          )}
              </div>
          </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Stay Updated with Our Insights
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get the latest industry insights, investment opportunities, and expert analysis 
              delivered directly to your inbox.
            </p>
            <div className="flex justify-center">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Get In Touch
                <ArrowRight className="ml-2" size={20} />
              </Link>
          </div>
          </motion.div>
      </div>
      </section>
    </div>
  );
}