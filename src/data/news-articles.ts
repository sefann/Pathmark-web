/**
 * Generated News Data
 * This file is updated at build time with latest news articles
 */

import { NewsArticle } from '../lib/news';

// This will be populated at build time with real news data
export const newsArticles: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Nigeria\'s Renewable Energy Sector Sees Major Investment Boost',
    description: 'The Nigerian government announces new incentives for renewable energy projects, with over $2 billion in investments expected this year.',
    link: 'https://www.premiumtimesng.com/category/news/energy/',
    pubDate: new Date().toISOString(),
    source: 'Premium Times',
    category: 'Energy',
    image: '/images/Energy-banner.png',
    author: 'Energy Reporter'
  },
  {
    id: 'news-2',
    title: 'Mining Sector Growth Drives Economic Diversification',
    description: 'Nigeria\'s mining industry reports 15% growth, contributing significantly to the country\'s economic diversification efforts.',
    link: 'https://www.businessday.ng/category/mining/',
    pubDate: new Date(Date.now() - 86400000).toISOString(),
    source: 'BusinessDay Nigeria',
    category: 'Mining',
    image: '/images/mining-banner.png',
    author: 'Mining Correspondent'
  },
  {
    id: 'news-3',
    title: 'Infrastructure Development Projects Accelerate Across Nigeria',
    description: 'Major infrastructure projects worth $5 billion are underway, focusing on roads, bridges, and transportation networks.',
    link: 'https://www.vanguardngr.com/category/business/',
    pubDate: new Date(Date.now() - 86400000 * 2).toISOString(),
    source: 'Vanguard News',
    category: 'Construction',
    image: '/images/construction-banner.png',
    author: 'Infrastructure Reporter'
  },
  {
    id: 'news-4',
    title: 'Fintech Innovation Transforms Nigerian Banking Sector',
    description: 'Digital banking solutions are revolutionizing financial services, with mobile payments growing by 40% year-over-year.',
    link: 'https://techcabal.com/',
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
    link: 'https://www.thisdaylive.com/category/politics/',
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
    link: 'https://www.businessday.ng/category/markets/',
    pubDate: new Date(Date.now() - 86400000 * 5).toISOString(),
    source: 'BusinessDay Nigeria',
    category: 'Finance',
    image: '/images/finance-banner.png',
    author: 'Financial Reporter'
  },
  {
    id: 'news-7',
    title: 'Solar Power Projects Gain Momentum in Northern Nigeria',
    description: 'Multiple solar farm projects are breaking ground, bringing clean energy to rural communities and reducing dependence on fossil fuels.',
    link: 'https://www.premiumtimesng.com/category/news/energy/',
    pubDate: new Date(Date.now() - 86400000 * 6).toISOString(),
    source: 'Premium Times',
    category: 'Energy',
    image: '/images/Energy-banner.png',
    author: 'Renewable Energy Reporter'
  },
  {
    id: 'news-8',
    title: 'Gold Mining Operations Expand in Zamfara State',
    description: 'New gold mining licenses issued as the government seeks to formalize artisanal mining and increase revenue from mineral resources.',
    link: 'https://www.businessday.ng/category/mining/',
    pubDate: new Date(Date.now() - 86400000 * 7).toISOString(),
    source: 'BusinessDay Nigeria',
    category: 'Mining',
    image: '/images/mining-banner.png',
    author: 'Mining Reporter'
  },
  {
    id: 'news-9',
    title: 'Lagos-Ibadan Expressway Completion Boosts Trade',
    description: 'The completed Lagos-Ibadan expressway is expected to reduce travel time by 50% and significantly improve trade between Nigeria\'s commercial centers.',
    link: 'https://www.vanguardngr.com/category/business/',
    pubDate: new Date(Date.now() - 86400000 * 8).toISOString(),
    source: 'Vanguard News',
    category: 'Construction',
    image: '/images/construction-banner.png',
    author: 'Infrastructure Reporter'
  },
  {
    id: 'news-10',
    title: 'Digital Banking Adoption Reaches 60% in Urban Areas',
    description: 'Mobile banking and digital payment solutions are transforming financial inclusion, with urban adoption rates reaching new highs.',
    link: 'https://techpoint.africa/',
    pubDate: new Date(Date.now() - 86400000 * 9).toISOString(),
    source: 'Techpoint Africa',
    category: 'Technology',
    image: '/images/technology-banner.png',
    author: 'Fintech Reporter'
  }
];