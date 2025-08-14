import { client } from '../../../sanity/lib/client';
import { urlFor } from '../../../sanity/lib/image';
import { Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import ShareButton from '@/components/ShareButton';

// Types
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  image: any;
  body: any[];
}

// Fetch data
async function getPost(slug: string): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    "image": mainImage,
    body
  }`;
  return client.fetch(query, { slug });
}

// Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found.'
    };
  }

  return {
    title: `${post.title} | Pathmark Advisory`,
    description: post.title,
    openGraph: {
      title: post.title,
      description: post.title,
      images: post.image ? [urlFor(post.image).url()] : [],
    },
  };
}

// Main Page Component
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
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
                  src={urlFor(post.image).width(800).height(400).url()}
                  alt={post.title}
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



              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                {post.body && post.body.length > 0 ? (
                  <PortableText 
                    value={post.body}
                    components={{
                      block: {
                        h1: ({children}) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
                        h2: ({children}) => <h2 className="text-2xl font-bold mb-3">{children}</h2>,
                        h3: ({children}) => <h3 className="text-xl font-bold mb-2">{children}</h3>,
                        p: ({children}) => <p className="mb-4 leading-relaxed">{children}</p>,
                      }
                    }}
                  />
                ) : (
                  <div className="text-center py-12">
                    <div className="text-gray-400 text-4xl mb-4">📄</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Article Content</h3>
                    <p className="text-gray-600">
                      This article contains detailed content that will be displayed here.
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Add content to this post in the Sanity Studio to see it here.
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
