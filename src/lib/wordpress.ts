/**
 * WordPress REST API Integration
 * 
 * This file provides utilities to fetch blog posts from WordPress
 * Replace NEXT_PUBLIC_WORDPRESS_API_URL with your actual WordPress site URL
 */

export interface WordPressPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    author?: Array<{
      name: string;
    }>;
    'wp:term'?: Array<Array<{
      name: string;
    }>>;
  };
}

export interface SimplifiedPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  image?: {
    url: string;
    alt: string;
  } | null;
  body?: string;
  content?: string;
  excerpt?: string;
  author?: string;
  categories?: string[];
}

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || '';

// Check if WordPress is configured
export const isWordPressConfigured = () => {
  return WORDPRESS_API_URL && WORDPRESS_API_URL !== 'https://example.com/wp-json/wp/v2';
};

/**
 * Fetch all posts from WordPress
 */
export async function getAllPosts(limit: number = 100): Promise<SimplifiedPost[]> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?per_page=${limit}&_embed`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch WordPress posts:', response.statusText);
      return [];
    }

    const posts: WordPressPost[] = await response.json();

    return posts.map(transformWordPressPost);
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return [];
  }
}

/**
 * Fetch a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<SimplifiedPost | null> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch WordPress post:', response.statusText);
      return null;
    }

    const posts: WordPressPost[] = await response.json();

    if (posts.length === 0) {
      return null;
    }

    return transformWordPressPost(posts[0]);
  } catch (error) {
    console.error('Error fetching WordPress post:', error);
    return null;
  }
}

/**
 * Transform WordPress post to simplified format
 */
function transformWordPressPost(post: WordPressPost): SimplifiedPost {
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
  const author = post._embedded?.author?.[0];
  const categories = post._embedded?.['wp:term']?.[0];

  return {
    _id: post.id.toString(),
    title: post.title.rendered,
    slug: { current: post.slug },
    publishedAt: post.date,
    image: featuredImage ? {
      url: featuredImage.source_url,
      alt: featuredImage.alt_text || post.title.rendered,
    } : null,
    body: post.content.rendered,
    content: post.content.rendered,
    excerpt: post.excerpt.rendered,
    author: author?.name || 'Pathmark Advisory',
    categories: categories?.map(cat => cat.name) || [],
  };
}

/**
 * Client-side fetch for posts (for client components)
 */
export async function fetchPostsClient(limit: number = 100): Promise<SimplifiedPost[]> {
  // Check if WordPress is configured
  if (!WORDPRESS_API_URL || WORDPRESS_API_URL === 'https://example.com/wp-json/wp/v2') {
    console.warn('WordPress API URL not configured. Please set NEXT_PUBLIC_WORDPRESS_API_URL in .env.local');
    return [];
  }

  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?per_page=${limit}&_embed`,
      {
        // Add timeout and better error handling
        signal: AbortSignal.timeout(10000), // 10 second timeout
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch WordPress posts:', response.statusText);
      return [];
    }

    const posts: WordPressPost[] = await response.json();
    return posts.map(transformWordPressPost);
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        console.error('WordPress API request timed out');
      } else {
        console.error('Error fetching WordPress posts:', error.message);
      }
    }
    return [];
  }
}

/**
 * Client-side fetch for single post (for client components)
 */
export async function fetchPostBySlugClient(slug: string): Promise<SimplifiedPost | null> {
  // Check if WordPress is configured
  if (!WORDPRESS_API_URL || WORDPRESS_API_URL === 'https://example.com/wp-json/wp/v2') {
    console.warn('WordPress API URL not configured. Please set NEXT_PUBLIC_WORDPRESS_API_URL in .env.local');
    return null;
  }

  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`,
      {
        signal: AbortSignal.timeout(10000), // 10 second timeout
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch WordPress post:', response.statusText);
      return null;
    }

    const posts: WordPressPost[] = await response.json();

    if (posts.length === 0) {
      return null;
    }

    return transformWordPressPost(posts[0]);
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        console.error('WordPress API request timed out');
      } else {
        console.error('Error fetching WordPress post:', error.message);
      }
    }
    return null;
  }
}

