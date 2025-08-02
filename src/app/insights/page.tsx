'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Search,
  BookOpen
} from 'lucide-react';

export default function InsightsPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All',
    'Energy',
    'Construction',
    'Technology',
    'Finance',
    'Government Relations',
    'Industry Trends',
    'Company News'
  ];

  const insights = [
    {
      id: 1,
      title: 'The Future of Renewable Energy in Nigeria: Opportunities and Challenges',
      excerpt: 'Nigeria is positioned to become a leader in renewable energy across West Africa. We explore the key opportunities and challenges facing the sector.',
      category: 'Energy',
      author: 'Aisha A. Adamu',
      date: '2024-01-15',
      readTime: '8 min read',
      image: '/api/placeholder/600/400',
      featured: true,
      tags: ['Renewable Energy', 'Nigeria', 'Solar Power', 'Policy']
    },
    {
      id: 2,
      title: 'Digital Transformation in African Financial Services',
      excerpt: 'How fintech innovations are reshaping the financial landscape across Africa and what it means for traditional banking.',
      category: 'Finance',
      author: 'Sulaimon A. Ajishafe',
      date: '2024-01-10',
      readTime: '6 min read',
      image: '/api/placeholder/600/400',
      featured: true,
      tags: ['Fintech', 'Digital Banking', 'Africa', 'Innovation']
    },
    {
      id: 3,
      title: 'Infrastructure Development: Key to Nigeria\'s Economic Growth',
      excerpt: 'Analyzing the critical role of infrastructure investment in driving sustainable economic development across Nigeria.',
      category: 'Construction',
      author: 'Pathmark Team',
      date: '2024-01-05',
      readTime: '10 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['Infrastructure', 'Economic Growth', 'Construction', 'Development']
    },
    {
      id: 4,
      title: 'Navigating Government Relations in West Africa',
      excerpt: 'Best practices for building effective relationships with government stakeholders in the West African business environment.',
      category: 'Government Relations',
      author: 'Aisha A. Adamu',
      date: '2023-12-28',
      readTime: '7 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['Government Relations', 'West Africa', 'Policy', 'Stakeholder Management']
    },
    {
      id: 5,
      title: 'Technology Adoption in Traditional Industries',
      excerpt: 'How traditional sectors in Nigeria are leveraging technology to improve efficiency and competitiveness.',
      category: 'Technology',
      author: 'Sulaimon A. Ajishafe',
      date: '2023-12-20',
      readTime: '5 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['Digital Transformation', 'Traditional Industries', 'Efficiency', 'Innovation']
    },
    {
      id: 6,
      title: 'Pathmark Advisory Expands Operations to Ghana',
      excerpt: 'We are excited to announce our expansion into the Ghanaian market, bringing our expertise to more clients across West Africa.',
      category: 'Company News',
      author: 'Pathmark Team',
      date: '2023-12-15',
      readTime: '3 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['Company News', 'Expansion', 'Ghana', 'West Africa']
    },
    {
      id: 7,
      title: '2024 Industry Outlook: Trends Shaping Business in Africa',
      excerpt: 'Our comprehensive analysis of the key trends and opportunities that will define the African business landscape in 2024.',
      category: 'Industry Trends',
      author: 'Pathmark Team',
      date: '2023-12-10',
      readTime: '12 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['Industry Trends', '2024 Outlook', 'Africa', 'Business Strategy']
    },
    {
      id: 8,
      title: 'Sustainable Construction Practices in Nigeria',
      excerpt: 'Exploring eco-friendly construction methods and materials that are gaining traction in the Nigerian construction industry.',
      category: 'Construction',
      author: 'Pathmark Team',
      date: '2023-12-05',
      readTime: '9 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['Sustainable Construction', 'Green Building', 'Nigeria', 'Environment']
    }
  ];

  const filteredInsights = insights.filter(insight => {
    const matchesCategory = selectedCategory === 'All' || insight.category === selectedCategory;
    const matchesSearch = insight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         insight.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         insight.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredInsights = insights.filter(insight => insight.featured);
  const regularInsights = filteredInsights.filter(insight => !insight.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative section-padding text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-800 opacity-90"></div>
        <div className="relative z-10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Insights & Thought Leadership
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay informed with our latest insights on industry trends, best practices, 
              and strategic perspectives from across Africa&apos;s business landscape.
            </p>
          </motion.div>
        </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search insights..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
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

      {/* Featured Insights */}
      {featuredInsights.length > 0 && selectedCategory === 'All' && !searchTerm && (
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Featured Insights</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredInsights.map((insight, index) => (
                  <motion.article
                    key={insight.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen size={48} className="text-primary opacity-50" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span className="bg-primary-100 text-primary px-2 py-1 rounded text-xs font-medium">
                          {insight.category}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{new Date(insight.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{insight.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {insight.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {insight.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-600">{insight.author}</span>
                        </div>
                        <Link 
                          href={`/insights/${insight.id}`}
                          className="text-primary hover:text-accent transition-colors flex items-center space-x-1"
                        >
                          <span>Read More</span>
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Insights */}
      <section className="section-padding bg-gray-50">
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
                {selectedCategory === 'All' ? 'Latest Insights' : `${selectedCategory} Insights`}
              </h2>
              <div className="text-sm text-gray-600">
                {filteredInsights.length} article{filteredInsights.length !== 1 ? 's' : ''} found
              </div>
            </div>

            {filteredInsights.length === 0 ? (
              <div className="text-center py-16">
                <BookOpen size={64} className="text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No insights found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(selectedCategory === 'All' && !searchTerm ? regularInsights : filteredInsights).map((insight, index) => (
                  <motion.article
                    key={insight.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen size={32} className="text-gray-400" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span className="bg-primary-100 text-primary px-2 py-1 rounded text-xs font-medium">
                          {insight.category}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{new Date(insight.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {insight.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                        {insight.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {insight.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                        {insight.tags.length > 2 && (
                          <span className="text-gray-400 text-xs">+{insight.tags.length - 2} more</span>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User size={14} className="text-gray-400" />
                          <span className="text-xs text-gray-600">{insight.author}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Clock size={14} />
                          <span>{insight.readTime}</span>
                        </div>
                      </div>
                      <Link 
                        href={`/insights/${insight.id}`}
                        className="mt-4 inline-flex items-center text-primary hover:text-accent transition-colors text-sm font-medium"
                      >
                        <span>Read Article</span>
                        <ArrowRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
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
              Stay Updated with Our Insights
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest industry insights, 
              trends, and thought leadership delivered to your inbox.
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