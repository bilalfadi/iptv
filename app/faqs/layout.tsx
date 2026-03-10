import { Metadata } from 'next';
import { generateSEO, generateStructuredData } from '@/lib/seo';
import Script from 'next/script';

export const metadata: Metadata = generateSEO({
  title: 'FAQs - Frequently Asked Questions',
  description: 'Find answers to frequently asked questions about IPTV service, subscription, installation, compatibility, and support. Get help with common IPTV issues.',
  keywords: ['IPTV FAQ', 'IPTV questions', 'IPTV help', 'IPTV support', 'IPTV guide'],
  canonical: 'https://www.4kxtreamiptv.com/faqs',
  image: '/logo.png',
  type: 'website',
});

const faqQuestions = [
  {
    question: 'Do You Offer a Free Trial Period?',
    answer: 'Yes, we offer a 24-hour free trial period with no payment information required. Simply submit the trial request, and the login details will be sent to your email, allowing you to explore our services risk-free.'
  },
  {
    question: 'Available Payment Methods?',
    answer: 'We accept payments through credit and debit cards, PayPal, cryptocurrency, and bank transfers. All transactions are secured and encrypted for your safety.'
  },
  {
    question: 'What Devices Are Supported?',
    answer: 'Our IPTV service is compatible with Smart TVs (Samsung, LG, Sony, etc.), Amazon Firestick, Android TV boxes, smartphones and tablets (Android/iOS), Windows PC, Mac, MAG boxes, and more.'
  },
  {
    question: 'How Do I Set Up IPTV on My Device?',
    answer: 'After purchasing a subscription, you\'ll receive login credentials via email. Download an IPTV player app (like IPTV Smarters or TiviMate), enter your credentials, and start watching. We also provide detailed setup guides for each device.'
  },
  {
    question: 'What Internet Speed Do I Need?',
    answer: 'We recommend a minimum of 10 Mbps for HD streaming and 25 Mbps for 4K/UHD content. A stable connection ensures buffer-free viewing experience.'
  },
  {
    question: 'Can I Use Multiple Devices?',
    answer: 'Yes! We offer both single-device and multi-device plans. Our family package allows up to 2 simultaneous connections on different devices.'
  },
  {
    question: 'Is There a Money-Back Guarantee?',
    answer: 'Yes, we offer a 7-day money-back guarantee. If you\'re not satisfied with our service within the first 7 days, we\'ll provide a full refund.'
  },
  {
    question: 'What Channels Are Included?',
    answer: 'Our service includes 30,000+ live TV channels from around the world, covering sports, movies, news, entertainment, kids content, and more. Plus 200,000+ movies and TV series on demand.'
  },
  {
    question: 'Do You Have EPG (TV Guide)?',
    answer: 'Yes, our service includes a comprehensive Electronic Program Guide (EPG) for most channels, allowing you to see what\'s currently playing and upcoming programs.'
  },
  {
    question: 'What If I Experience Buffering?',
    answer: 'Buffering is usually related to your internet connection or VPN settings. Our support team can help you optimize your settings for smooth streaming. We also recommend using a VPN for the best experience.'
  }
];

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqStructuredData = generateStructuredData({
    type: 'FAQPage',
    data: {
      questions: faqQuestions,
    },
  });

  return (
    <>
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      {children}
    </>
  );
}
