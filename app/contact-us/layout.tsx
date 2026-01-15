import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Contact Us - Get in Touch',
  description: 'Contact 4K Xtream IPTV for support, sales inquiries, or technical assistance. We\'re available 24/7 to help you with your IPTV needs.',
  keywords: ['contact IPTV', 'IPTV support', 'IPTV contact', 'IPTV help', 'IPTV customer service'],
  canonical: 'https://4kxtreamiptv.com/contact-us',
  image: '/logo.png',
  type: 'website',
});

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
