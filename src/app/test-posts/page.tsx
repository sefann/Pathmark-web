'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface TestPost {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
}

export default function TestPostsPage() {
  const [posts, setPosts] = useState<TestPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading test posts
    const testPosts: TestPost[] = [
      {
        id: '1',
        title: 'Test Post 1: Understanding Business Strategy',
        excerpt: 'This is a test post to demonstrate the insights system functionality.',
        publishedAt: new Date().toISOString(),
        author: 'Test Author',
        category: 'Business',
        readTime: '5 min read',
        image: '/images/insights-banner.png',
        slug: 'test-post-1'
      },
      {
        id: '2',
        title: 'Test Post 2: Market Analysis Insights',
        excerpt: 'Another test post showcasing the insights system capabilities.',
        publishedAt: new Date().toISOString(),
        author: 'Test Author',
        category: 'Finance',
        readTime: '3 min read',
        image: '/images/insights-banner.png',
        slug: 'test-post-2'
      }
    ];

    setTimeout(() => {
      setPosts(testPosts);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading test posts...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Test Posts
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This page demonstrates the insights system functionality with test posts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-primary-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <User size={16} />
                    <span>{post.author}</span>
                    <Calendar size={16} />
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                  
                  <Link
                    href={`/insights/${post.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary-600 transition-colors duration-200"
                  >
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No test posts available.</p>
          </div>
        )}
      </div>
    </div>
  );
}