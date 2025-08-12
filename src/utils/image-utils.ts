// Utility functions for handling article images

export const getCategoryImage = (category: string): string => {
  const categoryImages = {
    'Energy': 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'Technology': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'Construction': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'Finance': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'Public Sector': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'Mining': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'Investment Africa': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'Nigerian News': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  };
  
  return categoryImages[category as keyof typeof categoryImages] || 
         'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
};

export const getSourceLogo = (source: string): string => {
  const sourceLogos: Record<string, string> = {
    // Nigerian Sources
    'Premium Times Nigeria': 'https://www.premiumtimesng.com/wp-content/themes/premiumtimes/images/logo.png',
    'Vanguard Nigeria': 'https://www.vanguardngr.com/wp-content/themes/vanguard/images/logo.png',
    'ThisDay Nigeria': 'https://www.thisdaylive.com/wp-content/themes/thisday/images/logo.png',
    'The Guardian Nigeria': 'https://guardian.ng/wp-content/themes/guardian/images/logo.png',
    'Punch Nigeria': 'https://punchng.com/wp-content/themes/punch/images/logo.png',
    'Leadership Nigeria': 'https://leadership.ng/wp-content/themes/leadership/images/logo.png',
    'Daily Trust Nigeria': 'https://dailytrust.com/wp-content/themes/dailytrust/images/logo.png',
    'Nigerian Tribune': 'https://tribuneonlineng.com/wp-content/themes/tribune/images/logo.png',
    'BusinessDay Nigeria': 'https://businessday.ng/wp-content/themes/businessday/images/logo.png',
    'Nairametrics': 'https://nairametrics.com/wp-content/themes/nairametrics/images/logo.png',
    'TechCabal': 'https://techcabal.com/wp-content/themes/techcabal/images/logo.png',
    'Nigerian Tech': 'https://nigeriantech.com/wp-content/themes/nigeriantech/images/logo.png',
    
    // International Sources
    'IEA': 'https://www.iea.org/assets/images/iea-logo.png',
    'OilPrice': 'https://oilprice.com/images/logo.png',
    'MIT Technology Review': 'https://www.technologyreview.com/images/logo.png',
    'Wired': 'https://www.wired.com/images/logo.png',
    'TechCrunch': 'https://techcrunch.com/images/logo.png',
    'Financial Times': 'https://www.ft.com/images/logo.png',
    'Bloomberg': 'https://www.bloomberg.com/images/logo.png',
    'World Bank': 'https://www.worldbank.org/images/logo.png',
    'UN News': 'https://news.un.org/images/logo.png',
    'OECD': 'https://www.oecd.org/images/logo.png',
    'Mining Weekly': 'https://www.miningweekly.com/images/logo.png',
    'Mining.com': 'https://www.mining.com/images/logo.png',
    'Africa Business Insider': 'https://africabusinessinsider.com/images/logo.png',
    'African Business Magazine': 'https://africanbusinessmagazine.com/images/logo.png'
  };
  
  return sourceLogos[source] || '';
};

export const validateImageUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok && response.headers.get('content-type')?.startsWith('image/');
  } catch {
    return false;
  }
};

export const getArticleImage = async (article: {
  image?: string;
  category: string;
  source: string;
}): Promise<string> => {
  // First, try the article's own image
  if (article.image) {
    const isValid = await validateImageUrl(article.image);
    if (isValid) {
      return article.image;
    }
  }
  
  // Then try source logo
  const sourceLogo = getSourceLogo(article.source);
  if (sourceLogo) {
    const isValid = await validateImageUrl(sourceLogo);
    if (isValid) {
      return sourceLogo;
    }
  }
  
  // Finally, fall back to category image
  return getCategoryImage(article.category);
};


