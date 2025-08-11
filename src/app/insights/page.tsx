'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Search,
  BookOpen,
  ExternalLink,
  RefreshCw,
  Filter,
  Globe
} from 'lucide-react';
import { Article, InsightsResponse } from '@/types/insights';
import ArticleImage from '@/components/ArticleImage';
import ManualArticlesSection from '@/components/ManualArticlesSection';
import Banner from '@/components/Banner';

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [displayedCount, setDisplayedCount] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);

  const categories = [
    'All',
    'Energy',
    'Technology',
    'Construction',
    'Finance',
    'Public Sector',
    'Mining',
    'Investment Africa',
    'Nigerian News'
  ];

  const fetchInsights = async (category: string = 'All') => {
    setLoading(true);
    setError(null);
    
    try {
      const params = new URLSearchParams({
        category,
        limit: '50'
      });
      
      const response = await fetch(`/api/insights?${params}`);
      const data: InsightsResponse = await response.json();
      
      if (data.success) {
        setArticles(data.articles);
        setLastUpdated(new Date());
      } else {
        setError('Failed to fetch insights');
      }
    } catch (err) {
      setError('Network error occurred');
      console.error('Error fetching insights:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInsights(selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSearchTerm('');
    setDisplayedCount(6);
  };

  const handleRefresh = () => {
    setLoading(true);
    setError(null);
    setDisplayedCount(6);
    fetchInsights(selectedCategory);
  };

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setDisplayedCount(prev => prev + 6);
      setLoadingMore(false);
    }, 500);
  };

  const filteredArticles = articles.filter(article => {
    if (!searchTerm) return true;
    
    const searchLower = searchTerm.toLowerCase();
    return (
      article.title.toLowerCase().includes(searchLower) ||
      article.description.toLowerCase().includes(searchLower) ||
      article.source.toLowerCase().includes(searchLower) ||
      article.category.toLowerCase().includes(searchLower)
    );
  });

  const displayedArticles = filteredArticles.filter(article => !article.isManual).slice(0, displayedCount);
  const hasMoreArticles = filteredArticles.filter(article => !article.isManual).length > displayedCount;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return 'Yesterday';
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Energy': 'bg-yellow-100 text-yellow-800',
      'Technology': 'bg-blue-100 text-blue-800',
      'Construction': 'bg-orange-100 text-orange-800',
      'Finance': 'bg-green-100 text-green-800',
      'Public Sector': 'bg-purple-100 text-purple-800',
      'Mining': 'bg-gray-100 text-gray-800',
      'Investment Africa': 'bg-red-100 text-red-800',
      'Nigerian News': 'bg-primary-100 text-primary-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Banner
        title="Latest Insights Across Industries"
        subtitle="Stay informed with real-time industry news and insights from trusted sources across Energy, Technology, Construction, Finance, and more."
        imagePath="/images/insights-banner.jpg"
      >
        <div className="flex items-center justify-center space-x-4 text-sm">
          <Globe size={16} />
          <span>Automatically updated from multiple sources</span>
          {lastUpdated && (
            <>
              <span>•</span>
              <span>Last updated: {formatDate(lastUpdated.toISOString())}</span>
            </>
          )}
        </div>
      </Banner>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Refresh Button */}
            <button
              onClick={handleRefresh}
              disabled={loading}
              className="flex items-center space-x-2 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
              <span>Refresh</span>
            </button>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manual Articles Section */}
      {articles.some(article => article.isManual) && (
        <ManualArticlesSection 
          articles={articles.filter(article => article.isManual)} 
        />
      )}

      {/* RSS Articles Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                {selectedCategory === 'All' ? 'Industry News & Updates' : `${selectedCategory} News`}
              </h2>
              <div className="text-sm text-gray-600">
                {loading ? 'Loading...' : `Showing ${displayedArticles.length} of ${filteredArticles.filter(article => !article.isManual).length} articles`}
              </div>
            </div>

            {loading ? (
              <div className="text-center py-16">
                <RefreshCw size={64} className="text-gray-300 mx-auto mb-4 animate-spin" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Loading latest insights...</h3>
                <p className="text-gray-500">Fetching news from trusted sources</p>
              </div>
            ) : error ? (
              <div className="text-center py-16">
                <BookOpen size={64} className="text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Unable to load insights</h3>
                <p className="text-gray-500 mb-4">{error}</p>
                <button
                  onClick={handleRefresh}
                  className="btn-primary"
                >
                  Try Again
                </button>
              </div>
            ) : filteredArticles.length === 0 ? (
              <div className="text-center py-16">
                <BookOpen size={64} className="text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayedArticles.map((article, index) => (
                    <motion.article
                      key={article.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group"
                    >
                      {/* Article Image */}
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                        <ArticleImage
                          src={article.image}
                          alt={article.title}
                          category={article.category}
                          source={article.source}
                        />
                        
                        {/* Source badge */}
                        <div className="absolute top-3 right-3">
                          <div className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs font-medium">
                            {article.source}
                          </div>
                        </div>
                      </div>

                      {/* Article Content */}
                      <div className="p-6">
                        {/* Category and Date */}
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(article.category)}`}>
                            {article.category}
                          </span>
                          <div className="flex items-center space-x-1 text-xs text-gray-500">
                            <Calendar size={12} />
                            <span>{formatDate(article.pubDate)}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                          {article.description}
                        </p>

                        {/* Source and Author */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <Globe size={12} className="text-gray-400" />
                            <span className="text-xs text-gray-600 font-medium">{article.source}</span>
                          </div>
                          {article.author && (
                            <div className="flex items-center space-x-1">
                              <User size={12} className="text-gray-400" />
                              <span className="text-xs text-gray-600">{article.author}</span>
                            </div>
                          )}
                        </div>

                        {/* Read More Link */}
                        <a
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:text-accent transition-colors text-sm font-medium group/link"
                        >
                          <span>Read Article</span>
                          <ExternalLink size={14} className="ml-1 group-hover/link:translate-x-0.5 transition-transform" />
                        </a>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {/* Load More Button */}
                {hasMoreArticles && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                  >
                    <button
                      onClick={handleLoadMore}
                      disabled={loadingMore}
                      className="btn-primary flex items-center space-x-2 mx-auto"
                    >
                      {loadingMore ? (
                        <>
                          <RefreshCw size={16} className="animate-spin" />
                          <span>Loading...</span>
                        </>
                      ) : (
                        <>
                          <span>Load More Articles</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                    <p className="text-sm text-gray-500 mt-2">
                      {filteredArticles.filter(article => !article.isManual).length - displayedArticles.length} more articles available
                    </p>
                  </motion.div>
                )}
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Stay Updated with Industry Insights
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get curated industry insights, 
              trends, and analysis delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-accent focus:outline-none"
              />
              <button className="btn-secondary whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            <p className="text-sm text-primary-200 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}