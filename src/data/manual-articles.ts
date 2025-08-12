import { Article } from '@/types/insights';

export const manualArticles: Article[] = [
  {
    id: 'pathmark-manual-1',
    title: 'Pathmark Advisory: Leading Nigeria\'s Infrastructure Development',
    link: '/insights/pathmark-advisory-leading-nigerias-infrastructure',
    description: 'Discover how Pathmark Advisory is at the forefront of Nigeria\'s infrastructure transformation, driving sustainable development across key sectors.',
    category: 'Investment Africa',
    source: 'Pathmark Advisory',
    pubDate: new Date().toISOString(),
    author: 'Pathmark Team',
    image: undefined, // Will use category placeholder
    isManual: true,
    featured: true
  },
  {
    id: 'pathmark-manual-2',
    title: 'The Future of Renewable Energy in West Africa: A Pathmark Perspective',
    link: '/insights/future-renewable-energy-west-africa',
    description: 'Our expert analysis on the growing renewable energy sector in West Africa and the investment opportunities it presents for forward-thinking businesses.',
    category: 'Energy',
    source: 'Pathmark Advisory',
    pubDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    author: 'Pathmark Energy Team',
    image: undefined,
    isManual: true,
    featured: true
  },
  {
    id: 'pathmark-manual-3',
    title: 'Digital Transformation in Nigerian Banking: Trends and Opportunities',
    link: '/insights/digital-transformation-nigerian-banking',
    description: 'Exploring the rapid digital evolution of Nigeria\'s banking sector and the strategic opportunities for investors and businesses.',
    category: 'Technology',
    source: 'Pathmark Advisory',
    pubDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
    author: 'Pathmark Tech Team',
    image: undefined,
    isManual: true,
    featured: false
  },
  {
    id: 'pathmark-manual-4',
    title: 'Sustainable Mining Practices: The Pathmark Approach',
    link: '/insights/sustainable-mining-practices-pathmark-approach',
    description: 'How Pathmark Advisory is helping mining companies adopt sustainable practices while maintaining profitability and growth.',
    category: 'Mining',
    source: 'Pathmark Advisory',
    pubDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
    author: 'Pathmark Mining Team',
    image: undefined,
    isManual: true,
    featured: false
  },
  {
    id: 'pathmark-manual-5',
    title: 'Public-Private Partnerships: Driving Infrastructure Development in Nigeria',
    link: '/insights/public-private-partnerships-nigeria',
    description: 'An in-depth look at successful PPP models in Nigeria and how they\'re accelerating infrastructure development across the country.',
    category: 'Public Sector',
    source: 'Pathmark Advisory',
    pubDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days ago
    author: 'Pathmark Public Sector Team',
    image: undefined,
    isManual: true,
    featured: false
  },
  {
    id: 'pathmark-manual-6',
    title: 'Construction Innovation: Modernizing Nigeria\'s Building Sector',
    link: '/insights/construction-innovation-nigeria',
    description: 'Exploring cutting-edge construction technologies and methodologies that are revolutionizing Nigeria\'s building and infrastructure sector.',
    category: 'Construction',
    source: 'Pathmark Advisory',
    pubDate: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(), // 12 days ago
    author: 'Pathmark Construction Team',
    image: undefined,
    isManual: true,
    featured: false
  }
];


