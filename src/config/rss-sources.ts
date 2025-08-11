import { RSSSource } from '@/types/insights';

export const RSS_SOURCES: Record<string, RSSSource[]> = {
  Energy: [
    {
      name: 'IEA',
      url: 'https://www.iea.org/news-and-events/news/rss',
      category: 'Energy'
    },
    {
      name: 'OilPrice',
      url: 'https://oilprice.com/rss/main',
      category: 'Energy'
    },
    {
      name: 'Renewable Energy World',
      url: 'https://www.renewableenergyworld.com/feed/',
      category: 'Energy'
    },
    {
      name: 'Nigerian Tribune - Energy',
      url: 'https://tribuneonlineng.com/category/business/energy/feed/',
      category: 'Energy'
    }
  ],
  Technology: [
    {
      name: 'MIT Technology Review',
      url: 'https://www.technologyreview.com/feed/',
      category: 'Technology'
    },
    {
      name: 'Wired',
      url: 'https://www.wired.com/feed/rss',
      category: 'Technology'
    },
    {
      name: 'TechCrunch',
      url: 'https://techcrunch.com/feed/',
      category: 'Technology'
    },
    {
      name: 'TechCabal',
      url: 'https://techcabal.com/feed/',
      category: 'Technology'
    },
    {
      name: 'Nigerian Tech',
      url: 'https://nigeriantech.com/feed/',
      category: 'Technology'
    }
  ],
  Construction: [
    {
      name: 'ENR',
      url: 'https://www.enr.com/rss',
      category: 'Construction'
    },
    {
      name: 'Construction Dive',
      url: 'https://www.constructiondive.com/rss/',
      category: 'Construction'
    },
    {
      name: 'Construction News',
      url: 'https://www.constructionnews.co.uk/rss',
      category: 'Construction'
    }
  ],
  Finance: [
    {
      name: 'Financial Times Markets',
      url: 'https://www.ft.com/rss/markets',
      category: 'Finance'
    },
    {
      name: 'World Bank Blogs',
      url: 'https://blogs.worldbank.org/feed',
      category: 'Finance'
    },
    {
      name: 'Bloomberg Markets',
      url: 'https://feeds.bloomberg.com/markets/news.rss',
      category: 'Finance'
    },
    {
      name: 'BusinessDay Nigeria',
      url: 'https://businessday.ng/category/business/feed/',
      category: 'Finance'
    },
    {
      name: 'Nairametrics',
      url: 'https://nairametrics.com/feed/',
      category: 'Finance'
    },
    {
      name: 'The Guardian Nigeria - Business',
      url: 'https://guardian.ng/category/business-economy/feed/',
      category: 'Finance'
    }
  ],
  'Public Sector': [
    {
      name: 'Gov.uk',
      url: 'https://www.gov.uk/search/news-and-communications.atom',
      category: 'Public Sector'
    },
    {
      name: 'UN News',
      url: 'https://news.un.org/feed/',
      category: 'Public Sector'
    },
    {
      name: 'OECD',
      url: 'https://www.oecd.org/newsroom/rss.xml',
      category: 'Public Sector'
    },
    {
      name: 'Premium Times Nigeria',
      url: 'https://www.premiumtimesng.com/category/news/feed/',
      category: 'Public Sector'
    },
    {
      name: 'Vanguard Nigeria',
      url: 'https://www.vanguardngr.com/category/news/feed/',
      category: 'Public Sector'
    },
    {
      name: 'ThisDay Nigeria',
      url: 'https://www.thisdaylive.com/category/news/feed/',
      category: 'Public Sector'
    }
  ],
  Mining: [
    {
      name: 'Mining Weekly',
      url: 'https://www.miningweekly.com/rss/rss.php',
      category: 'Mining'
    },
    {
      name: 'Mining.com',
      url: 'https://www.mining.com/feed/',
      category: 'Mining'
    },
    {
      name: 'Mining Journal',
      url: 'https://www.mining-journal.com/rss/',
      category: 'Mining'
    }
  ],
  'Investment Africa': [
    {
      name: 'Africa Business Insider',
      url: 'https://africabusinessinsider.com/feed/',
      category: 'Investment Africa'
    },
    {
      name: 'African Business Magazine',
      url: 'https://africanbusinessmagazine.com/feed/',
      category: 'Investment Africa'
    },
    {
      name: 'NIPC Nigeria',
      url: 'https://nipc.gov.ng/feed/',
      category: 'Investment Africa'
    },
    {
      name: 'Punch Nigeria - Business',
      url: 'https://punchng.com/category/business/feed/',
      category: 'Investment Africa'
    },
    {
      name: 'Leadership Nigeria',
      url: 'https://leadership.ng/category/business/feed/',
      category: 'Investment Africa'
    }
  ],
  'Nigerian News': [
    {
      name: 'Premium Times Nigeria',
      url: 'https://www.premiumtimesng.com/feed/',
      category: 'Nigerian News'
    },
    {
      name: 'Vanguard Nigeria',
      url: 'https://www.vanguardngr.com/feed/',
      category: 'Nigerian News'
    },
    {
      name: 'ThisDay Nigeria',
      url: 'https://www.thisdaylive.com/feed/',
      category: 'Nigerian News'
    },
    {
      name: 'The Guardian Nigeria',
      url: 'https://guardian.ng/feed/',
      category: 'Nigerian News'
    },
    {
      name: 'Punch Nigeria',
      url: 'https://punchng.com/feed/',
      category: 'Nigerian News'
    },
    {
      name: 'Leadership Nigeria',
      url: 'https://leadership.ng/feed/',
      category: 'Nigerian News'
    },
    {
      name: 'Daily Trust Nigeria',
      url: 'https://dailytrust.com/feed/',
      category: 'Nigerian News'
    },
    {
      name: 'Nigerian Tribune',
      url: 'https://tribuneonlineng.com/feed/',
      category: 'Nigerian News'
    }
  ]
};

// Helper function to get all sources as a flat array
export const getAllRSSSources = (): RSSSource[] => {
  return Object.values(RSS_SOURCES).flat();
};

// Helper function to get sources for a specific category
export const getRSSSourcesForCategory = (category: string): RSSSource[] => {
  return RSS_SOURCES[category] || [];
};
