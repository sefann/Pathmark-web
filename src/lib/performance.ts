// Performance monitoring utilities

export interface PerformanceMetrics {
  fetchTime: number;
  cacheHitRate: number;
  totalArticles: number;
  timestamp: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics[] = [];
  private readonly MAX_METRICS = 100;

  recordFetch(fetchTime: number, cacheHit: boolean, totalArticles: number): void {
    const metric: PerformanceMetrics = {
      fetchTime,
      cacheHitRate: cacheHit ? 1 : 0,
      totalArticles,
      timestamp: Date.now(),
    };

    this.metrics.push(metric);

    // Keep only the last MAX_METRICS entries
    if (this.metrics.length > this.MAX_METRICS) {
      this.metrics = this.metrics.slice(-this.MAX_METRICS);
    }
  }

  getAverageFetchTime(): number {
    if (this.metrics.length === 0) return 0;
    const total = this.metrics.reduce((sum, metric) => sum + metric.fetchTime, 0);
    return total / this.metrics.length;
  }

  getCacheHitRate(): number {
    if (this.metrics.length === 0) return 0;
    const hits = this.metrics.reduce((sum, metric) => sum + metric.cacheHitRate, 0);
    return hits / this.metrics.length;
  }

  getAverageArticles(): number {
    if (this.metrics.length === 0) return 0;
    const total = this.metrics.reduce((sum, metric) => sum + metric.totalArticles, 0);
    return total / this.metrics.length;
  }

  getMetrics(): PerformanceMetrics[] {
    return [...this.metrics];
  }

  clear(): void {
    this.metrics = [];
  }
}

export const performanceMonitor = new PerformanceMonitor();

// Performance timing utility
export const withTiming = async <T>(
  name: string,
  fn: () => Promise<T>
): Promise<T> => {
  const start = performance.now();
  try {
    const result = await fn();
    const end = performance.now();
    const duration = end - start;
    
    // Log performance data in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`⏱️ ${name}: ${duration.toFixed(2)}ms`);
    }
    
    return result;
  } catch (error) {
    const end = performance.now();
    const duration = end - start;
    
    if (process.env.NODE_ENV === 'development') {
      console.error(`❌ ${name} failed after ${duration.toFixed(2)}ms:`, error);
    }
    
    throw error;
  }
};

// Resource usage monitoring
export const getMemoryUsage = () => {
  if (typeof process !== 'undefined' && process.memoryUsage) {
    const usage = process.memoryUsage();
    return {
      rss: Math.round(usage.rss / 1024 / 1024), // MB
      heapUsed: Math.round(usage.heapUsed / 1024 / 1024), // MB
      heapTotal: Math.round(usage.heapTotal / 1024 / 1024), // MB
    };
  }
  return null;
};

// Performance budget checking
export const checkPerformanceBudget = (fetchTime: number, budget: number = 5000): boolean => {
  return fetchTime <= budget;
};
