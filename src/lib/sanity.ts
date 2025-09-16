import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ch79hnv9',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01', // Use today's date or your preferred version
  useCdn: process.env.NODE_ENV === 'production', // `false` if you want to ensure fresh data
  token: process.env.SANITY_API_TOKEN, // Only needed if you want to update content with the client
});

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// GROQ queries
export const insightsQuery = `
  *[_type == "post" && publishedAt <= now()] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    // Try both coverImage and mainImage fields
    coverImage,
    mainImage,
    // Optional for lists
    body,
    // Flatten author and categories for the current UI
    "author": author->name,
    "categories": categories[]->title
  }
`;

export const insightBySlugQuery = `
  *[_type == "post" && slug.current == $slug && publishedAt <= now()][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    // Keep full image for detail view
    coverImage,
    featured,
    body,
    "author": author->{
      name,
      image,
      bio,
      role
    },
    "categories": categories[]->{
      title,
      slug,
      color
    },
    tags
  }
`;

export const featuredInsightsQuery = `
  *[_type == "post" && featured == true && publishedAt <= now()] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    coverImage,
    "author": author->{
      name,
      image
    },
    "categories": categories[]->{
      title,
      color
    }
  }
`;

export const insightsByCategoryQuery = `
  *[_type == "post" && publishedAt <= now() && $category in categories[]->slug.current] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    coverImage,
    "author": author->{
      name,
      image
    },
    "categories": categories[]->{
      title,
      color
    }
  }
`;

export const categoriesQuery = `
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    color
  }
`;

export const authorsQuery = `
  *[_type == "author"] | order(name asc) {
    _id,
    name,
    image,
    bio,
    role,
    email
  }
`;
