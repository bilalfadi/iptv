import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Free IPTV Trial - 24 Hours Free Trial',
  description: 'Get a free 24-hour IPTV trial with full access to 30,000+ TV channels, 200,000+ movies and series. No credit card required. Start streaming instantly!',
  keywords: ['IPTV trial', 'free IPTV trial', 'IPTV free trial', 'IPTV test', 'try IPTV'],
  canonical: 'https://4kxtreamiptv.com/iptv-trial/',
  image: '/logo.png',
  type: 'website',
});

export default function IPTVTrialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
