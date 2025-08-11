export interface Article {
  id: string;
  title: string;
  link: string;
  description: string;
  category: string;
  source: string;
  pubDate: string;
  image?: string;
  author?: string;
  isManual?: boolean;
  featured?: boolean;
}

export interface InsightsResponse {
  success: boolean;
  articles: Article[];
  total: number;
  category: string;
  error?: string;
}

export interface RSSSource {
  name: string;
  url: string;
  category: string;
}

export type Category = 
  | 'All'
  | 'Energy'
  | 'Technology'
  | 'Construction'
  | 'Finance'
  | 'Public Sector'
  | 'Mining'
  | 'Investment Africa'
  | 'Nigerian News';
