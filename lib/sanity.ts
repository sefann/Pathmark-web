import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01', // Use today's date or your preferred version
  useCdn: process.env.NODE_ENV === 'production', // `false` if you want to ensure fresh data
  token: process.env.SANITY_API_TOKEN, // Only needed if you want to update content with the client
});

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: unknown) {
  return builder.image(source);
}

// GROQ queries
export const insightsQuery = `
  *[_type == "insight" && status == "published" && publishedAt <= now() && (scheduledFor == null || scheduledFor <= now())] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    coverImage,
    featured,
    "author": author->{
      name,
      image,
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

export const insightBySlugQuery = `
  *[_type == "insight" && slug.current == $slug && status == "published" && publishedAt <= now() && (scheduledFor == null || scheduledFor <= now())][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
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
  *[_type == "insight" && featured == true && status == "published" && publishedAt <= now() && (scheduledFor == null || scheduledFor <= now())] | order(publishedAt desc)[0...3] {
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
  *[_type == "insight" && status == "published" && publishedAt <= now() && (scheduledFor == null || scheduledFor <= now()) && $category in categories[]->slug.current] | order(publishedAt desc) {
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
