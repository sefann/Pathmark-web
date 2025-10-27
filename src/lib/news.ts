/**
 * News Fetching Utility for Static Generation
 * 
 * This utility fetches news from RSS feeds and APIs at build time
 * All news is pre-generated and included in static export
 */

export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source: string;
  category: string;
  image?: string;
  author?: string;
}

export interface NewsSource {
  name: string;
  url: string;
  category: string;
  enabled: boolean;
}

// News sources for Nigerian and African business news
const NEWS_SOURCES: NewsSource[] = [
  // Nigerian Business News
  {
    name: 'BusinessDay Nigeria',
    url: 'https://businessday.ng/feed/',
    category: 'Finance',
    enabled: true
  },
  {
    name: 'Nairametrics',
    url: 'https://nairametrics.com/feed/',
    category: 'Finance',
    enabled: true
  },
  {
    name: 'Premium Times Business',
    url: 'https://www.premiumtimesng.com/business/feed/',
    category: 'Finance',
    enabled: true
  },
  // Energy & Mining News
  {
    name: 'Energy Mix Report',
    url: 'https://energymixreport.com/feed/',
    category: 'Energy',
    enabled: true
  },
  {
    name: 'Mining Weekly',
    url: 'https://www.miningweekly.com/rss/rss.php',
    category: 'Mining',
    enabled: true
  },
  // Construction & Infrastructure
  {
    name: 'Construction Review Africa',
    url: 'https://constructionreviewonline.com/feed/',
    category: 'Construction',
    enabled: true
  },
  // Technology News
  {
    name: 'TechCabal',
    url: 'https://techcabal.com/feed/',
    category: 'Technology',
    enabled: true
  },
  {
    name: 'Techpoint Africa',
    url: 'https://techpoint.africa/feed/',
    category: 'Technology',
    enabled: true
  },
  // Government & Policy
  {
    name: 'Vanguard News',
    url: 'https://www.vanguardngr.com/feed/',
    category: 'Government',
    enabled: true
  },
  {
    name: 'This Day Live',
    url: 'https://www.thisdaylive.com/feed/',
    category: 'Government',
    enabled: true
  }
];

// Fallback news articles for when RSS feeds are unavailable
const FALLBACK_NEWS: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Nigeria\'s Renewable Energy Sector Sees Major Investment Boost',
    description: 'The Nigerian government announces new incentives for renewable energy projects, with over $2 billion in investments expected this year.',
    link: '#',
    pubDate: new Date().toISOString(),
    source: 'Energy Mix Report',
    category: 'Energy',
    image: '/images/Energy-banner.png',
    author: 'Energy Reporter'
  },
  {
    id: 'news-2',
    title: 'Mining Sector Growth Drives Economic Diversification',
    description: 'Nigeria\'s mining industry reports 15% growth, contributing significantly to the country\'s economic diversification efforts.',
    link: '#',
    pubDate: new Date(Date.now() - 86400000).toISOString(),
    source: 'Mining Weekly',
    category: 'Mining',
    image: '/images/mining-banner.png',
    author: 'Mining Correspondent'
  },
  {
    id: 'news-3',
    title: 'Infrastructure Development Projects Accelerate Across Nigeria',
    description: 'Major infrastructure projects worth $5 billion are underway, focusing on roads, bridges, and transportation networks.',
    link: '#',
    pubDate: new Date(Date.now() - 86400000 * 2).toISOString(),
    source: 'Construction Review Africa',
    category: 'Construction',
    image: '/images/construction-banner.png',
    author: 'Infrastructure Reporter'
  },
  {
    id: 'news-4',
    title: 'Fintech Innovation Transforms Nigerian Banking Sector',
    description: 'Digital banking solutions are revolutionizing financial services, with mobile payments growing by 40% year-over-year.',
    link: '#',
    pubDate: new Date(Date.now() - 86400000 * 3).toISOString(),
    source: 'TechCabal',
    category: 'Technology',
    image: '/images/technology-banner.png',
    author: 'Tech Reporter'
  },
  {
    id: 'news-5',
    title: 'Government Announces New Investment Incentives',
    description: 'The Federal Government introduces tax incentives and streamlined processes to attract foreign direct investment.',
    link: '#',
    pubDate: new Date(Date.now() - 86400000 * 4).toISOString(),
    source: 'This Day Live',
    category: 'Government',
    image: '/images/government-banner.png',
    author: 'Policy Reporter'
  },
  {
    id: 'news-6',
    title: 'Nigerian Stock Exchange Records Strong Performance',
    description: 'The NSE All-Share Index gains 8% this quarter, driven by strong performance in banking and industrial sectors.',
    link: '#',
    pubDate: new Date(Date.now() - 86400000 * 5).toISOString(),
    source: 'BusinessDay Nigeria',
    category: 'Finance',
    image: '/images/finance-banner.png',
    author: 'Financial Reporter'
  }
];

/**
 * Parse RSS feed XML
 */
function parseRSSFeed(xmlText: string, source: NewsSource): NewsArticle[] {
  try {
    const articles: NewsArticle[] = [];
    
    // Simple XML parsing for RSS feeds
    const itemMatches = xmlText.match(/<item>[\s\S]*?<\/item>/g);
    
    if (!itemMatches) return articles;
    
    itemMatches.slice(0, 10).forEach((item, index) => {
      const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/);
      const descriptionMatch = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>|<description>(.*?)<\/description>/);
      const linkMatch = item.match(/<link>(.*?)<\/link>/);
      const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
      const imageMatch = item.match(/<enclosure[^>]*url="([^"]*)"[^>]*type="image\/[^"]*"[^>]*\/>/);
      
      if (titleMatch) {
        const title = titleMatch[1] || titleMatch[2] || '';
        const description = descriptionMatch ? (descriptionMatch[1] || descriptionMatch[2] || '') : '';
        const link = linkMatch ? linkMatch[1] : '#';
        const pubDate = pubDateMatch ? pubDateMatch[1] : new Date().toISOString();
        const image = imageMatch ? imageMatch[1] : undefined;
        
        // Clean up HTML tags from title and description
        const cleanTitle = title.replace(/<[^>]*>/g, '').trim();
        const cleanDescription = description.replace(/<[^>]*>/g, '').trim().substring(0, 200);
        
        if (cleanTitle && cleanDescription) {
          articles.push({
            id: `${source.name.toLowerCase().replace(/\s+/g, '-')}-${index}`,
            title: cleanTitle,
            description: cleanDescription,
            link,
            pubDate: new Date(pubDate).toISOString(),
            source: source.name,
            category: source.category,
            image,
            author: `${source.category} Reporter`
          });
        }
      }
    });
    
    return articles;
  } catch (error) {
    console.error(`Error parsing RSS feed for ${source.name}:`, error);
    return [];
  }
}

/**
 * Fetch news from RSS feeds (for build time)
 */
export async function fetchNewsFromRSS(): Promise<NewsArticle[]> {
  const allArticles: NewsArticle[] = [];
  
  for (const source of NEWS_SOURCES.filter(s => s.enabled)) {
    try {
      console.log(`Fetching news from ${source.name}...`);
      
      const response = await fetch(source.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; PathmarkAdvisory/1.0)',
        },
        // Add timeout for build time
        signal: AbortSignal.timeout(10000), // 10 seconds
      });
      
      if (!response.ok) {
        console.warn(`Failed to fetch ${source.name}: ${response.status}`);
        continue;
      }
      
      const xmlText = await response.text();
      const articles = parseRSSFeed(xmlText, source);
      
      console.log(`Fetched ${articles.length} articles from ${source.name}`);
      allArticles.push(...articles);
      
    } catch (error) {
      console.warn(`Error fetching from ${source.name}:`, error);
      continue;
    }
  }
  
  // Sort by date (newest first)
  allArticles.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
  
  // Return top 20 articles
  return allArticles.slice(0, 20);
}

/**
 * Get news articles (build time function)
 */
export async function getNewsArticles(): Promise<NewsArticle[]> {
  try {
    // Try to fetch from RSS feeds
    const rssArticles = await fetchNewsFromRSS();
    
    if (rssArticles.length > 0) {
      console.log(`Successfully fetched ${rssArticles.length} news articles`);
      return rssArticles;
    } else {
      console.log('No RSS articles found, using fallback news');
      return FALLBACK_NEWS;
    }
  } catch (error) {
    console.error('Error fetching news articles:', error);
    console.log('Using fallback news articles');
    return FALLBACK_NEWS;
  }
}

/**
 * Get news by category
 */
export function getNewsByCategory(articles: NewsArticle[], category: string): NewsArticle[] {
  if (category === 'All') return articles;
  return articles.filter(article => article.category === category);
}

/**
 * Search news articles
 */
export function searchNewsArticles(articles: NewsArticle[], query: string): NewsArticle[] {
  if (!query.trim()) return articles;
  
  const lowercaseQuery = query.toLowerCase();
  return articles.filter(article => 
    article.title.toLowerCase().includes(lowercaseQuery) ||
    article.description.toLowerCase().includes(lowercaseQuery) ||
    article.source.toLowerCase().includes(lowercaseQuery)
  );
}

/**
 * Get available news categories
 */
export function getNewsCategories(): string[] {
  return ['All', 'Energy', 'Mining', 'Construction', 'Technology', 'Finance', 'Government'];
}
