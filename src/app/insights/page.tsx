import { client } from '../../sanity/lib/client';
import { urlFor } from '../../sanity/lib/image';
import { Calendar, User, ArrowRight, Filter, Search } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';

// Types
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  image: any;
  body: any[];
  author?: any;
  categories?: any[];
}

// Fetch data
async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post" && publishedAt <= now()] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    "image": mainImage,
    body
  }`;
  
  return client.fetch(query);
}

// Components
function PostCard({ post }: { post: Post }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Cover Image */}
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        {post.image ? (
          <img
            src={urlFor(post.image).width(600).height(400).url()}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-gray-400 text-4xl">📄</div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {post.title}
        </h3>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Calendar size={14} />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
          </div>
        </div>

        {/* Read More Link */}
        <Link
          href={`/insights/${post.slug.current}`}
          className="inline-flex items-center text-primary hover:text-primary-700 font-medium transition-colors"
        >
          Read More
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </article>
  );
}

function PostsGrid({ posts }: { posts: Post[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}

// Main Page Component
export default async function InsightsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = parseInt(params.page || '1');
  const pageSize = 9;
  const skip = (page - 1) * pageSize;

  // Fetch data
  const posts = await getPosts();

  // Pagination
  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / pageSize);
  const paginatedPosts = posts.slice(skip, skip + pageSize);

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Insights & Analysis
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Expert insights, market analysis, and strategic perspectives from Pathmark Advisory
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Filter size={20} />
              <span className="text-primary-100">
                {totalPosts} articles published
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Search and Results Info */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Search size={20} className="text-gray-400" />
            <span className="text-gray-600">
              Showing {paginatedPosts.length} of {totalPosts} posts
            </span>
          </div>
        </div>

        {/* Posts Grid */}
        <Suspense fallback={<div>Loading posts...</div>}>
          {paginatedPosts.length > 0 ? (
            <PostsGrid posts={paginatedPosts} />
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">📄</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No posts found
              </h3>
              <p className="text-gray-600">
                No posts have been published yet. Create your first post in the Studio!
              </p>
            </div>
          )}
        </Suspense>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center space-x-2">
            {page > 1 && (
              <Link
                href={`/insights?page=${page - 1}`}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Previous
              </Link>
            )}
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <Link
                key={pageNum}
                href={`/insights?page=${pageNum}`}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  pageNum === page
                    ? 'bg-primary text-white'
                    : 'bg-white border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {pageNum}
              </Link>
            ))}
            
            {page < totalPages && (
              <Link
                href={`/insights?page=${page + 1}`}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Next
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}