import { NextRequest, NextResponse } from 'next/server';
import Parser from 'rss-parser';
import axios from 'axios';
import { fallbackArticles } from '@/data/fallback-articles';
import { manualArticles } from '@/data/manual-articles';
import { Article, InsightsResponse } from '@/types/insights';
import { getAllRSSSources } from '@/config/rss-sources';
import { rssCache, generateCacheKey, getCacheHeaders, generateETag } from '@/lib/cache';
import { performanceMonitor, withTiming } from '@/lib/performance';

const parser = new Parser({
  customFields: {
    item: [
      ['media:content', 'media'],
      ['media:thumbnail', 'thumbnail'],
      ['media:group', 'mediaGroup'],
      ['enclosure', 'enclosure'],
      ['dc:creator', 'author'],
      ['category', 'category'],
      ['image', 'image'],
    ],
  },
});

async function fetchRSSFeed(url: string, category: string, sourceName: string): Promise<Article[]> {
  try {
    // Check cache first
    const cacheKey = generateCacheKey(url, category);
    const cachedData = rssCache.get(cacheKey);
    const cachedEtag = rssCache.getEtag(cacheKey);
    const cachedLastModified = rssCache.getLastModified(cacheKey);

    // Prepare headers for conditional requests
    const headers: Record<string, string> = {
      'User-Agent': 'Mozilla/5.0 (compatible; PathmarkInsights/1.0)',
    };

    if (cachedEtag) {
      headers['If-None-Match'] = cachedEtag;
    }

    if (cachedLastModified) {
      headers['If-Modified-Since'] = cachedLastModified;
    }

    const response = await axios.get(url, {
      timeout: 5000, // Reduced timeout for faster loading
      headers,
      validateStatus: (status) => status < 400, // Accept 304 Not Modified
    });

    // If 304 Not Modified, return cached data
    if (response.status === 304 && cachedData) {
      return cachedData;
    }

    const feed = await parser.parseString(response.data);
    
    const articles = feed.items.slice(0, 15).map((item, index) => { // Increased to 15 articles per feed
      // Extract image from various RSS feed formats
      let imageUrl = undefined;
      
      // Only use images that are likely to be relevant (not generic logos or ads)
      if (item.media?.$?.url && !item.media.$.url.includes('logo') && !item.media.$.url.includes('ad')) {
        imageUrl = item.media.$.url;
      } else if (item.thumbnail?.$?.url && !item.thumbnail.$.url.includes('logo') && !item.thumbnail.$.url.includes('ad')) {
        imageUrl = item.thumbnail.$.url;
      } else if (item.enclosure?.$?.url && item.enclosure.$.type?.startsWith('image/') && 
                 !item.enclosure.$.url.includes('logo') && !item.enclosure.$.url.includes('ad')) {
        imageUrl = item.enclosure.$.url;
      } else if (item.mediaGroup?.media?.[0]?.$?.url && 
                 !item.mediaGroup.media[0].$.url.includes('logo') && !item.mediaGroup.media[0].$.url.includes('ad')) {
        imageUrl = item.mediaGroup.media[0].$.url;
      } else if (item.image && !item.image.includes('logo') && !item.image.includes('ad')) {
        imageUrl = item.image;
      }
      
      return {
        id: `${category}-${sourceName}-${index}`,
        title: item.title || 'Untitled',
        link: item.link || '#',
        description: item.contentSnippet || item.content || item.summary || 'No description available',
        category,
        source: sourceName,
        pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
        image: imageUrl,
        author: item.creator || item.author || undefined,
      };
    });

    // Cache the results with ETag and Last-Modified
    const etag = response.headers.etag;
    const lastModified = response.headers['last-modified'];
    rssCache.set(cacheKey, articles, etag, lastModified);

    return articles;
  } catch (error) {
    console.error(`Error fetching RSS feed from ${url}:`, error);
    return [];
  }
}

async function fetchAllFeeds(): Promise<Article[]> {
  const allArticles: Article[] = [];
  const sources = getAllRSSSources();
  
  // Limit to first 15 sources for more content
  const limitedSources = sources.slice(0, 15);
  
  // Use Promise.allSettled for parallel fetching with better error handling
  const promises = limitedSources.map(source => 
    fetchRSSFeed(source.url, source.category, source.name)
  );
  
  const results = await Promise.allSettled(promises);
  
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      allArticles.push(...result.value);
    } else {
      console.error(`Failed to fetch from ${limitedSources[index].name}:`, result.reason);
    }
  });
  
  // Sort by publication date (newest first)
  return allArticles.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const startTime = Date.now();
  
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '100');
    
    let allArticles: Article[] = [];
    let cacheHit = false;
    
    // For now, use fallback and manual articles to ensure the insights page works
    // TODO: Re-enable RSS feeds when network issues are resolved
    console.log('Using fallback and manual articles for insights');
    allArticles = [...fallbackArticles, ...manualArticles];
    cacheHit = true;
    
    // Filter articles by category if specified
    const filteredArticles = category && category !== 'All' 
      ? allArticles.filter(article => article.category === category)
      : allArticles;
    
    // Apply limit
    const limitedArticles = filteredArticles.slice(0, limit);
    
    const response: InsightsResponse = {
      success: true,
      articles: limitedArticles,
      total: filteredArticles.length,
      category: category || 'All',
    };
    
    // Generate ETag for response
    const etag = generateETag(response);
    
    // Check if client has the same version
    const ifNoneMatch = request.headers.get('if-none-match');
    if (ifNoneMatch === etag) {
      return new NextResponse(null, { status: 304 });
    }
    
    // Record performance metrics
    const fetchTime = Date.now() - startTime;
    performanceMonitor.recordFetch(fetchTime, cacheHit, response.articles.length);
    
    // Return response with caching headers
    const nextResponse = NextResponse.json(response);
    Object.entries(getCacheHeaders(1800)).forEach(([key, value]) => { // Reduced cache time to 30 minutes
      nextResponse.headers.set(key, value);
    });
    nextResponse.headers.set('ETag', etag);
    
    return nextResponse;
  } catch (error) {
    console.error('Error fetching insights:', error);
    
    // Return fallback data even if everything else fails
    const fallbackResponse: InsightsResponse = {
      success: false,
      articles: fallbackArticles.slice(0, 12),
      total: fallbackArticles.length,
      category: 'All',
      error: 'Using fallback data due to service issues',
    };
    
    const nextResponse = NextResponse.json(fallbackResponse, { status: 200 });
    Object.entries(getCacheHeaders(300)).forEach(([key, value]) => {
      nextResponse.headers.set(key, value);
    });
    
    return nextResponse;
  }
}
