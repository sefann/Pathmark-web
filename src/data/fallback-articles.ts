import { Article } from '@/types/insights';
import { getCategoryImage } from '@/utils/image-utils';

export const fallbackArticles: Article[] = [
  {
    id: 'energy-1',
    title: 'Nigeria\'s Renewable Energy Revolution: Solar Power Leading the Charge',
    link: 'https://example.com/energy-article-1',
    description: 'Nigeria is experiencing a significant shift towards renewable energy, with solar power projects leading the transformation across the country.',
    category: 'Energy',
    source: 'Energy News Africa',
    pubDate: new Date().toISOString(),
    author: 'Energy Analyst',
    image: getCategoryImage('Energy')
  },
  {
    id: 'tech-1',
    title: 'Digital Transformation Accelerates in West African Banking Sector',
    link: 'https://example.com/tech-article-1',
    description: 'Major banks across West Africa are rapidly adopting digital technologies to improve customer experience and operational efficiency.',
    category: 'Technology',
    source: 'Tech Africa',
    pubDate: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    author: 'Digital Innovation Team',
    image: getCategoryImage('Technology')
  },
  {
    id: 'construction-1',
    title: 'Infrastructure Development Projects Worth $50B Announced for Nigeria',
    link: 'https://example.com/construction-article-1',
    description: 'The Nigerian government has announced major infrastructure projects including roads, bridges, and public transportation systems.',
    category: 'Construction',
    source: 'Construction Weekly',
    pubDate: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    author: 'Infrastructure Reporter',
    image: getCategoryImage('Construction')
  },
  {
    id: 'finance-1',
    title: 'African Investment Climate Shows Strong Recovery in Q1 2024',
    link: 'https://example.com/finance-article-1',
    description: 'Investment flows into Africa have shown remarkable recovery, with fintech and renewable energy sectors leading the growth.',
    category: 'Finance',
    source: 'African Business Review',
    pubDate: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    author: 'Financial Analyst',
    image: getCategoryImage('Finance')
  },
  {
    id: 'public-sector-1',
    title: 'New Policy Framework for Digital Government Services in West Africa',
    link: 'https://example.com/public-sector-article-1',
    description: 'West African governments are implementing comprehensive digital transformation strategies to improve public service delivery.',
    category: 'Public Sector',
    source: 'Government News',
    pubDate: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    author: 'Policy Analyst',
    image: getCategoryImage('Public Sector')
  },
  {
    id: 'mining-1',
    title: 'Sustainable Mining Practices Gain Traction in African Mining Sector',
    link: 'https://example.com/mining-article-1',
    description: 'Mining companies across Africa are adopting sustainable practices and green technologies to reduce environmental impact.',
    category: 'Mining',
    source: 'Mining Today',
    pubDate: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
    author: 'Mining Expert',
    image: getCategoryImage('Mining')
  },
  {
    id: 'investment-africa-1',
    title: 'Nigeria Attracts Record Foreign Direct Investment in Technology Sector',
    link: 'https://example.com/investment-africa-article-1',
    description: 'Nigeria\'s technology sector has attracted unprecedented foreign investment, signaling growing confidence in the African tech ecosystem.',
    category: 'Investment Africa',
    source: 'African Investment News',
    pubDate: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    author: 'Investment Specialist',
    image: getCategoryImage('Investment Africa')
  },
  {
    id: 'energy-2',
    title: 'Offshore Wind Energy Projects Planned for West African Coast',
    link: 'https://example.com/energy-article-2',
    description: 'Major offshore wind energy projects are being planned along the West African coast, promising significant renewable energy capacity.',
    category: 'Energy',
    source: 'Renewable Energy Focus',
    pubDate: new Date(Date.now() - 14 * 60 * 60 * 1000).toISOString(),
    author: 'Renewable Energy Expert',
    image: getCategoryImage('Energy')
  },
  {
    id: 'tech-2',
    title: 'AI and Machine Learning Adoption Accelerates in African Businesses',
    link: 'https://example.com/tech-article-2',
    description: 'African businesses are increasingly adopting AI and machine learning technologies to improve efficiency and customer service.',
    category: 'Technology',
    source: 'AI Africa',
    pubDate: new Date(Date.now() - 16 * 60 * 60 * 1000).toISOString(),
    author: 'AI Specialist',
    image: getCategoryImage('Technology')
  },
  {
    id: 'nigerian-news-1',
    title: 'Nigeria\'s Economic Recovery Plan Shows Positive Results in Q1 2024',
    link: 'https://example.com/nigerian-news-1',
    description: 'The Nigerian government\'s economic recovery initiatives are yielding positive results with improved GDP growth and reduced inflation rates.',
    category: 'Nigerian News',
    source: 'Premium Times Nigeria',
    pubDate: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
    author: 'Economic Reporter',
    image: getCategoryImage('Nigerian News')
  },
  {
    id: 'nigerian-news-2',
    title: 'Lagos State Announces Major Infrastructure Development Projects',
    link: 'https://example.com/nigerian-news-2',
    description: 'Lagos State government has unveiled ambitious infrastructure projects including new roads, bridges, and public transportation systems.',
    category: 'Nigerian News',
    source: 'Vanguard Nigeria',
    pubDate: new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString(),
    author: 'Infrastructure Correspondent',
    image: getCategoryImage('Nigerian News')
  },
  {
    id: 'nigerian-news-3',
    title: 'Nigerian Tech Startups Attract Record Investment in 2024',
    link: 'https://example.com/nigerian-news-3',
    description: 'Nigerian technology startups have secured unprecedented funding, positioning the country as a leading tech hub in Africa.',
    category: 'Nigerian News',
    source: 'TechCabal',
    pubDate: new Date(Date.now() - 22 * 60 * 60 * 1000).toISOString(),
    author: 'Tech Analyst',
    image: getCategoryImage('Nigerian News')
  }
];
