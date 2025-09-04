# Pathmark Insights - Automated News System

## Overview

The Pathmark Insights page automatically displays the latest industry news from multiple trusted sources, organized into categories, and updates daily without manual intervention.

## Features

### ✅ Automated News Fetching
- Pulls content via RSS feeds from multiple trusted sources
- Merges and displays articles from all sources
- Sorts articles by newest first
- Automatic fallback to sample data if RSS feeds are unavailable

### ✅ Industry Categories
- **Energy**: IEA, OilPrice, Renewable Energy World, Nigerian Tribune Energy
- **Technology**: MIT Tech Review, Wired, TechCrunch, TechCabal, Nigerian Tech
- **Construction**: ENR, Construction Dive, Construction News
- **Finance**: Financial Times, World Bank Blogs, Bloomberg, BusinessDay Nigeria, Nairametrics, The Guardian Nigeria Business
- **Public Sector**: Gov.uk, UN News, OECD, Premium Times Nigeria, Vanguard Nigeria, ThisDay Nigeria
- **Mining**: Mining Weekly, Mining.com, Mining Journal
- **Investment Africa**: Africa Business Insider, African Business Magazine, NIPC Nigeria, Punch Nigeria Business, Leadership Nigeria
- **Nigerian News**: Premium Times, Vanguard, ThisDay, The Guardian, Punch, Leadership, Daily Trust, Nigerian Tribune

### ✅ Advanced Filtering
- Default view: All categories
- Filter by specific category (client-side)
- Real-time search across titles, descriptions, and sources
- No page reload when switching categories

### ✅ Responsive Design
- **Desktop**: 3 columns
- **Tablet**: 2 columns  
- **Mobile**: 1 column
- Professional corporate styling with Pathmark brand colors

### ✅ Performance Features
- **Incremental Static Regeneration (ISR)**: 1-hour revalidation cycle
- **Advanced Caching**: In-memory cache with ETag/Last-Modified support
- **Conditional Requests**: 304 Not Modified responses to reduce bandwidth
- **Image Optimization**: Next.js Image component with WebP/AVIF formats
- **Performance Monitoring**: Real-time metrics and resource usage tracking
- **Bundle Optimization**: Tree shaking and code splitting
- **CDN-Ready**: Proper cache headers for CDN distribution

## Technical Implementation

### File Structure
```
src/
├── app/
│   ├── api/
│   │   ├── insights/
│   │   │   └── route.ts      # RSS feed API endpoint
│   │   └── performance/
│   │       └── route.ts      # Performance monitoring API
│   └── insights/
│       ├── layout.tsx        # Insights page layout
│       └── page.tsx          # Main insights page
├── components/
│   └── ArticleImage.tsx      # Optimized image component
├── config/
│   └── rss-sources.ts        # RSS source configuration
├── data/
│   └── fallback-articles.ts  # Fallback article data
├── lib/
│   ├── cache.ts              # Caching system
│   └── performance.ts        # Performance monitoring
├── types/
│   └── insights.ts           # TypeScript type definitions
└── utils/
    └── image-utils.ts        # Image handling utilities
```

### Key Components

#### 1. API Route (`/api/insights`)
- Fetches RSS feeds from multiple sources with caching
- Handles errors gracefully with fallback data
- Supports category filtering and pagination
- Returns structured JSON response with ETags
- Implements conditional requests (304 Not Modified)
- Performance monitoring and metrics collection

#### 2. Insights Page (`/insights/page.tsx`)
- Real-time data fetching with loading states
- Category filtering and search functionality
- Responsive grid layout
- Professional UI with animations

#### 3. RSS Configuration (`rss-sources.ts`)
- Centralized management of RSS sources
- Easy to add/remove sources
- Categorized by industry

#### 4. Caching System (`lib/cache.ts`)
- In-memory cache with TTL (1 hour)
- ETag and Last-Modified support
- Conditional request handling
- Automatic cache cleanup

#### 5. Performance Monitoring (`lib/performance.ts`)
- Real-time performance metrics
- Cache hit rate tracking
- Memory usage monitoring
- Performance budget checking

#### 6. Image Optimization (`components/ArticleImage.tsx`)
- Next.js Image component integration
- WebP/AVIF format support
- Lazy loading and error handling
- Responsive image sizing

#### 7. Fallback System
- Sample articles for each category
- Ensures page always displays content
- Graceful degradation when RSS feeds fail

## Usage

### For Users
1. Visit `/insights` to see all latest articles
2. Use category filters to focus on specific industries
3. Search for specific topics or sources
4. Click "Read Article" to open full article in new tab
5. Use "Refresh" button to get latest updates

### For Developers

#### Adding New RSS Sources
1. Edit `src/config/rss-sources.ts`
2. Add new source to appropriate category
3. Test the feed URL
4. Deploy changes

#### Modifying Categories
1. Update `src/types/insights.ts` Category type
2. Update `src/config/rss-sources.ts` categories
3. Update `src/app/insights/page.tsx` categories array

#### Customizing Styling
- Colors: Update `tailwind.config.ts` primary/accent colors
- Layout: Modify grid classes in insights page
- Animations: Adjust Framer Motion settings

## RSS Feed Sources

### Energy
- **IEA**: International Energy Agency news
- **OilPrice**: Oil and energy market updates
- **Renewable Energy World**: Clean energy developments
- **Nigerian Tribune Energy**: Nigerian energy sector news

### Technology  
- **MIT Technology Review**: Tech innovation and trends
- **Wired**: Technology culture and business
- **TechCrunch**: Startup and tech industry news
- **TechCabal**: African technology news and analysis
- **Nigerian Tech**: Nigerian technology industry news

### Construction
- **ENR**: Engineering News-Record
- **Construction Dive**: Construction industry insights
- **Construction News**: UK construction updates

### Finance
- **Financial Times Markets**: Global financial markets
- **World Bank Blogs**: Development finance
- **Bloomberg Markets**: Financial market data
- **BusinessDay Nigeria**: Nigerian business and financial news
- **Nairametrics**: Nigerian financial analysis and market data
- **The Guardian Nigeria Business**: Nigerian business and economy news

### Public Sector
- **Gov.uk**: UK government announcements
- **UN News**: United Nations updates
- **OECD**: Economic development news
- **Premium Times Nigeria**: Nigerian government and policy news
- **Vanguard Nigeria**: Nigerian political and government news
- **ThisDay Nigeria**: Nigerian political and policy analysis

### Mining
- **Mining Weekly**: Mining industry news
- **Mining.com**: Mining market updates
- **Mining Journal**: Mining sector insights

### Investment Africa
- **Africa Business Insider**: African business news
- **African Business Magazine**: Pan-African business
- **NIPC Nigeria**: Nigerian investment opportunities
- **Punch Nigeria Business**: Nigerian business and investment news
- **Leadership Nigeria**: Nigerian business and economic analysis

### Nigerian News
- **Premium Times Nigeria**: Investigative journalism and news
- **Vanguard Nigeria**: General news and current affairs
- **ThisDay Nigeria**: Business and political news
- **The Guardian Nigeria**: News and analysis
- **Punch Nigeria**: General news and features
- **Leadership Nigeria**: News and political analysis
- **Daily Trust Nigeria**: News and current affairs
- **Nigerian Tribune**: News and editorial content

## Performance Optimization

### Caching Strategy
- **In-Memory Cache**: 1-hour TTL with automatic cleanup
- **ETag Support**: Conditional requests to reduce bandwidth
- **Last-Modified**: Respects RSS feed caching headers
- **CDN Headers**: Proper cache control for CDN distribution

### Image Optimization
- **Next.js Image**: Automatic WebP/AVIF conversion
- **Responsive Sizing**: Device-specific image sizes
- **Lazy Loading**: Images load as they enter viewport
- **Error Handling**: Graceful fallbacks for broken images

### Bundle Optimization
- **Tree Shaking**: Removes unused code
- **Code Splitting**: Loads only necessary components
- **Package Optimization**: Optimized imports for large libraries
- **Compression**: Gzip compression enabled

### Monitoring & Analytics
- **Performance API**: `/api/performance` endpoint for metrics
- **Cache Hit Rate**: Track cache effectiveness
- **Memory Usage**: Monitor resource consumption
- **Fetch Times**: Average response time tracking

## Future Enhancements

### Planned Features
- [ ] Manual Pathmark-authored articles alongside automated feeds
- [ ] Article bookmarking and favorites
- [ ] Email newsletter integration
- [ ] Social media sharing
- [ ] Advanced analytics and trending topics
- [ ] Multi-language support

### Technical Improvements
- [ ] Redis caching for distributed deployments
- [ ] WebSocket updates for real-time content
- [ ] Advanced content filtering and AI-powered recommendations
- [ ] Mobile app integration
- [ ] Service Worker for offline support

## Troubleshooting

### Common Issues

#### RSS Feeds Not Loading
- Check network connectivity
- Verify RSS feed URLs are accessible
- Review browser console for CORS errors
- Fallback data will display automatically

#### Performance Issues
- Reduce number of RSS sources
- Implement caching
- Optimize image loading
- Check server resources

#### Styling Issues
- Verify Tailwind CSS is properly configured
- Check for CSS conflicts
- Ensure responsive breakpoints are correct

## Support

For technical issues or questions about the insights system, contact the development team or refer to the project documentation.
