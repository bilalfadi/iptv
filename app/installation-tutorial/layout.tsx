import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'IPTV Installation Tutorial - Setup Guide',
  description: 'Step-by-step IPTV installation guide for Firestick, Android, iOS, Smart TV, and PC. Learn how to set up and configure IPTV on all your devices.',
  keywords: ['IPTV installation', 'IPTV setup', 'IPTV tutorial', 'IPTV guide', 'how to install IPTV'],
  canonical: 'https://4kxtreamiptv.com/installation-tutorial',
  image: '/logo.png',
  type: 'website',
});

export default function InstallationTutorialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
