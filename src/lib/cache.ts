// RSS Feed Caching System
interface CacheEntry {
  data: any;
  timestamp: number;
  etag?: string;
  lastModified?: string;
}

class RSSCache {
  private cache: Map<string, CacheEntry> = new Map();
  private readonly TTL = 3600000; // 1 hour in milliseconds
  private readonly MAX_CACHE_SIZE = 100; // Maximum number of cached entries

  set(key: string, data: any, etag?: string, lastModified?: string): void {
    // Remove oldest entries if cache is full
    if (this.cache.size >= this.MAX_CACHE_SIZE) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }

    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      etag,
      lastModified
    });
  }

  get(key: string): any | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    // Check if entry has expired
    if (Date.now() - entry.timestamp > this.TTL) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  getEtag(key: string): string | undefined {
    return this.cache.get(key)?.etag;
  }

  getLastModified(key: string): string | undefined {
    return this.cache.get(key)?.lastModified;
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }

  // Clean up expired entries
  cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > this.TTL) {
        this.cache.delete(key);
      }
    }
  }
}

// Global cache instance
export const rssCache = new RSSCache();

// Cache key generator
export const generateCacheKey = (url: string, category?: string): string => {
  return category ? `${category}:${url}` : url;
};

// Cache headers helper
export const getCacheHeaders = (maxAge: number = 3600) => {
  return {
    'Cache-Control': `public, max-age=${maxAge}, s-maxage=${maxAge}, stale-while-revalidate=86400`,
    'Vary': 'Accept-Encoding'
  };
};

// ETag generator
export const generateETag = (data: any): string => {
  const str = JSON.stringify(data);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return `"${hash.toString(16)}"`;
};


