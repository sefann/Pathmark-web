#!/usr/bin/env node

/**
 * Build-time News Generator
 * This script fetches news from RSS feeds and generates static news data
 * Run this before building: npm run generate-news
 */

const fs = require('fs');
const path = require('path');

// Import the news utility
const { getNewsArticles } = require('./src/lib/news.ts');

async function generateNewsData() {
  console.log('🔄 Generating news data at build time...');
  
  try {
    // Fetch news articles
    const articles = await getNewsArticles();
    
    console.log(`✅ Fetched ${articles.length} news articles`);
    
    // Generate the news data file
    const newsDataContent = `/**
 * Generated News Data - Updated at build time
 * Last updated: ${new Date().toISOString()}
 */

import { NewsArticle } from './news';

export const newsArticles: NewsArticle[] = ${JSON.stringify(articles, null, 2)};
`;
    
    // Write to the news articles file
    const outputPath = path.join(__dirname, 'src/data/news-articles.ts');
    fs.writeFileSync(outputPath, newsDataContent);
    
    console.log(`✅ News data written to ${outputPath}`);
    console.log(`📰 Generated ${articles.length} news articles for static export`);
    
  } catch (error) {
    console.error('❌ Error generating news data:', error);
    console.log('📝 Using fallback news data');
  }
}

// Run if called directly
if (require.main === module) {
  generateNewsData();
}

module.exports = { generateNewsData };
