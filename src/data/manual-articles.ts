import { Article } from '@/types/insights';

export const manualArticles: Article[] = [
  {
    id: 'manual-1',
    title: 'Pathmark Advisory Launches New Energy Division',
    link: '/insights/pathmark-energy-division',
    description: 'Pathmark Advisory is excited to announce the launch of our new Energy Division, focusing on renewable energy projects and sustainable development across Nigeria.',
    category: 'Energy',
    source: 'Pathmark Advisory',
    pubDate: new Date().toISOString(),
    author: 'Pathmark Team'
  },
  {
    id: 'manual-2',
    title: 'Digital Transformation in Nigerian Banking Sector',
    link: '/insights/digital-transformation-banking',
    description: 'Our latest analysis on how Nigerian banks are embracing digital transformation and the opportunities this presents for fintech companies.',
    category: 'Technology',
    source: 'Pathmark Advisory',
    pubDate: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    author: 'Sulaimon Ajishafe'
  },
  {
    id: 'manual-3',
    title: 'Infrastructure Development: Key to Nigeria\'s Economic Growth',
    link: '/insights/infrastructure-development-nigeria',
    description: 'An in-depth look at how infrastructure development projects are driving economic growth and creating investment opportunities in Nigeria.',
    category: 'Construction',
    source: 'Pathmark Advisory',
    pubDate: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    author: 'Chinedu Okwu'
  }
];

