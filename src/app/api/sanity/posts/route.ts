import { NextResponse } from 'next/server';
import { client, insightsQuery } from '@/lib/sanity';

export async function GET() {
  try {
    const posts = await client.fetch(insightsQuery);
    
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
