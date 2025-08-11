import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Latest Insights - Pathmark Advisory',
  description: 'Stay informed with real-time industry news and insights from trusted sources across Energy, Technology, Construction, Finance, and more.',
  keywords: 'insights, news, industry, energy, technology, construction, finance, Nigeria, Africa',
  openGraph: {
    title: 'Latest Insights - Pathmark Advisory',
    description: 'Stay informed with real-time industry news and insights from trusted sources.',
    type: 'website',
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
