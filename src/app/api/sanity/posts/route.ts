import { NextResponse } from 'next/server';
import { client } from '../../../../sanity/lib/client';

export async function GET() {
  try {
    const query = `*[_type == "post" && publishedAt <= now()] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      "image": mainImage,
      body,
      "author": author->name,
      "categories": categories[]->title
    }`;
    
    const posts = await client.fetch(query);
    
    return NextResponse.json({
      success: true,
      posts: posts || [],
      total: posts?.length || 0
    });
  } catch (error) {
    console.error('Error fetching Sanity posts:', error);
    
    return NextResponse.json({
      success: false,
      posts: [],
      total: 0,
      error: 'Failed to fetch posts'
    }, { status: 500 });
  }
}
