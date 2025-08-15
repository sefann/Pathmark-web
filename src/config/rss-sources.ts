import { RSSSource } from '@/types/insights';

export const RSS_SOURCES: Record<string, RSSSource[]> = {
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
      name: 'African Development Bank',
      url: 'https://www.afdb.org/en/news-and-events/rss',
      category: 'Investment Africa'
    },
    {
      name: 'World Bank Africa',
      url: 'https://www.worldbank.org/en/region/afr/rss',
      category: 'Investment Africa'
    },
    {
      name: 'IMF Africa',
      url: 'https://www.imf.org/en/News/RSS',
      category: 'Investment Africa'
    }
  ],
  'Nigerian Investment': [
    {
      name: 'BusinessDay Nigeria',
      url: 'https://businessday.ng/category/business/feed/',
      category: 'Nigerian Investment'
    },
    {
      name: 'Nairametrics',
      url: 'https://nairametrics.com/feed/',
      category: 'Nigerian Investment'
    },
    {
      name: 'The Guardian Nigeria - Business',
      url: 'https://guardian.ng/category/business-economy/feed/',
      category: 'Nigerian Investment'
    },
    {
      name: 'Punch Nigeria - Business',
      url: 'https://punchng.com/category/business/feed/',
      category: 'Nigerian Investment'
    },
    {
      name: 'Leadership Nigeria - Business',
      url: 'https://leadership.ng/category/business/feed/',
      category: 'Nigerian Investment'
    },
    {
      name: 'ThisDay Nigeria - Business',
      url: 'https://www.thisdaylive.com/category/business/feed/',
      category: 'Nigerian Investment'
    }
  ],
  'Country Matters': [
    {
      name: 'Premium Times Nigeria',
      url: 'https://www.premiumtimesng.com/category/news/feed/',
      category: 'Country Matters'
    },
    {
      name: 'Vanguard Nigeria',
      url: 'https://www.vanguardngr.com/category/news/feed/',
      category: 'Country Matters'
    },
    {
      name: 'The Guardian Nigeria',
      url: 'https://guardian.ng/feed/',
      category: 'Country Matters'
    },
    {
      name: 'Punch Nigeria',
      url: 'https://punchng.com/feed/',
      category: 'Country Matters'
    },
    {
      name: 'Leadership Nigeria',
      url: 'https://leadership.ng/feed/',
      category: 'Country Matters'
    },
    {
      name: 'Daily Trust Nigeria',
      url: 'https://dailytrust.com/feed/',
      category: 'Country Matters'
    },
    {
      name: 'Nigerian Tribune',
      url: 'https://tribuneonlineng.com/feed/',
      category: 'Country Matters'
    }
  ],
  'Security': [
    {
      name: 'Premium Times - Security',
      url: 'https://www.premiumtimesng.com/category/security/feed/',
      category: 'Security'
    },
    {
      name: 'Vanguard - Security',
      url: 'https://www.vanguardngr.com/category/security/feed/',
      category: 'Security'
    },
    {
      name: 'The Guardian - Security',
      url: 'https://guardian.ng/category/security/feed/',
      category: 'Security'
    },
    {
      name: 'Punch - Security',
      url: 'https://punchng.com/category/security/feed/',
      category: 'Security'
    },
    {
      name: 'Leadership - Security',
      url: 'https://leadership.ng/category/security/feed/',
      category: 'Security'
    }
  ],
  'Finance': [
    {
      name: 'Financial Times Markets',
      url: 'https://www.ft.com/rss/markets',
      category: 'Finance'
    },
    {
      name: 'Bloomberg Markets',
      url: 'https://feeds.bloomberg.com/markets/news.rss',
      category: 'Finance'
    },
    {
      name: 'Reuters Business',
      url: 'https://feeds.reuters.com/reuters/businessNews',
      category: 'Finance'
    },
    {
      name: 'CNBC Africa',
      url: 'https://www.cnbcafrica.com/feed/',
      category: 'Finance'
    },
    {
      name: 'BusinessDay Nigeria',
      url: 'https://businessday.ng/category/finance/feed/',
      category: 'Finance'
    },
    {
      name: 'Nairametrics',
      url: 'https://nairametrics.com/category/finance/feed/',
      category: 'Finance'
    }
  ],
  'Education': [
    {
      name: 'Premium Times - Education',
      url: 'https://www.premiumtimesng.com/category/education/feed/',
      category: 'Education'
    },
    {
      name: 'Vanguard - Education',
      url: 'https://www.vanguardngr.com/category/education/feed/',
      category: 'Education'
    },
    {
      name: 'The Guardian - Education',
      url: 'https://guardian.ng/category/education/feed/',
      category: 'Education'
    },
    {
      name: 'Punch - Education',
      url: 'https://punchng.com/category/education/feed/',
      category: 'Education'
    },
    {
      name: 'Leadership - Education',
      url: 'https://leadership.ng/category/education/feed/',
      category: 'Education'
    },
    {
      name: 'Daily Trust - Education',
      url: 'https://dailytrust.com/category/education/feed/',
      category: 'Education'
    }
  ],
  'Health': [
    {
      name: 'Premium Times - Health',
      url: 'https://www.premiumtimesng.com/category/health/feed/',
      category: 'Health'
    },
    {
      name: 'Vanguard - Health',
      url: 'https://www.vanguardngr.com/category/health/feed/',
      category: 'Health'
    },
    {
      name: 'The Guardian - Health',
      url: 'https://guardian.ng/category/health/feed/',
      category: 'Health'
    },
    {
      name: 'Punch - Health',
      url: 'https://punchng.com/category/health/feed/',
      category: 'Health'
    },
    {
      name: 'Leadership - Health',
      url: 'https://leadership.ng/category/health/feed/',
      category: 'Health'
    },
    {
      name: 'Daily Trust - Health',
      url: 'https://dailytrust.com/category/health/feed/',
      category: 'Health'
    },
    {
      name: 'WHO Africa',
      url: 'https://www.afro.who.int/news/rss',
      category: 'Health'
    }
  ],
  'Mining': [
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
    },
    {
      name: 'African Mining',
      url: 'https://www.africanmining.co.za/feed/',
      category: 'Mining'
    },
    {
      name: 'Mining Review Africa',
      url: 'https://www.miningreview.com/feed/',
      category: 'Mining'
    },
    {
      name: 'BusinessDay - Mining',
      url: 'https://businessday.ng/category/mining/feed/',
      category: 'Mining'
    },
    {
      name: 'Nairametrics - Mining',
      url: 'https://nairametrics.com/category/mining/feed/',
      category: 'Mining'
    }
  ],
  'Energy': [
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
    },
    {
      name: 'BusinessDay - Energy',
      url: 'https://businessday.ng/category/energy/feed/',
      category: 'Energy'
    },
    {
      name: 'Nairametrics - Energy',
      url: 'https://nairametrics.com/category/energy/feed/',
      category: 'Energy'
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
