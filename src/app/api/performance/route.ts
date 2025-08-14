import { NextRequest, NextResponse } from 'next/server';
import { performanceMonitor, getMemoryUsage } from '@/lib/performance';
import { rssCache } from '@/lib/cache';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const includeMetrics = searchParams.get('metrics') === 'true';
    
    const performanceData = {
      cache: {
        size: rssCache.size(),
        hitRate: performanceMonitor.getCacheHitRate(),
      },
      performance: {
        averageFetchTime: performanceMonitor.getAverageFetchTime(),
        averageArticles: performanceMonitor.getAverageArticles(),
      },
      memory: getMemoryUsage(),
      timestamp: new Date().toISOString(),
    };

    if (includeMetrics) {
      performanceData.metrics = performanceMonitor.getMetrics();
    }

    return NextResponse.json({
      success: true,
      data: performanceData,
    }, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error) {
    console.error('Error fetching performance data:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch performance data' 
      },
      { status: 500 }
    );
  }
}

// Clear performance data (for maintenance)
export async function DELETE(request: NextRequest) {
  try {
    performanceMonitor.clear();
    rssCache.clear();
    
    return NextResponse.json({
      success: true,
      message: 'Performance data cleared successfully',
    });
  } catch (error) {
    console.error('Error clearing performance data:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to clear performance data' 
      },
      { status: 500 }
    );
  }
}





