import { fallbackBlogPosts } from '@/data/fallback-blog-posts';
import PostPageClient from './PostPageClient';

// Generate static params for all fallback posts
// This is required for static export with dynamic routes
export function generateStaticParams() {
  // Return all fallback post slugs for static generation
  return fallbackBlogPosts.map((post) => ({
    slug: post.slug.current,
  }));
}

// Server Component wrapper
export default function PostPage() {
  return <PostPageClient />;
}
