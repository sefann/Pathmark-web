'use client';

import { useState, useEffect } from 'react';
import { Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import ShareButton from '@/components/ShareButton';
import { fetchPostBySlugClient, SimplifiedPost } from '@/lib/wordpress';
import { fallbackBlogPosts } from '@/data/fallback-blog-posts';

// Client Component for the post page
export default function PostPageClient() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const [post, setPost] = useState<SimplifiedPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;
      
      try {
        // First try to fetch from WordPress
        const fetchedPost = await fetchPostBySlugClient(slug);
        
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          // If not found in WordPress, check fallback posts
          const fallbackPost = fallbackBlogPosts.find(
            post => post.slug.current === slug
          );
          
          if (fallbackPost) {
            setPost(fallbackPost);
          } else {
            setError(true);
          }
        }
      } catch (err) {
        console.error('Error loading post:', err);
        
        // On error, try fallback posts
        const fallbackPost = fallbackBlogPosts.find(
          post => post.slug.current === slug
        );
        
        if (fallbackPost) {
          setPost(fallbackPost);
        } else {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The requested post could not be found.</p>
          <Link href="/insights" className="text-primary hover:text-primary-700">
            Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="container-custom py-4">
          <Link 
            href="/insights" 
            className="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Insights
          </Link>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <article className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            {/* Cover Image */}
            {post.image && (
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src={post.image.url}
                  alt={post.image.alt || post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Article Content */}
            <div className="p-8">
              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                </div>
                
                {/* Share Button */}
                <ShareButton title={post.title} />
              </div>

              {/* Article Body - WordPress HTML Content */}
              <div className="article-content">
                {post.content || post.body ? (
                  <div 
                    className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6 prose-li:mb-2 prose-li:text-gray-700"
                    dangerouslySetInnerHTML={{ __html: post.content || post.body || '' }}
                  />
                ) : (
                  <div className="text-center py-12">
                    <div className="text-gray-400 text-4xl mb-4">📄</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Article Content</h3>
                    <p className="text-gray-600">
                      This article contains detailed content that will be displayed here.
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Add content to this post in WordPress to see it here.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}


