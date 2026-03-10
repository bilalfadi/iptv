import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FastStreaming from '@/components/FastStreaming'
import TrustedSection from '@/components/TrustedSection'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import Benefits from '@/components/Benefits'
import HowToSubscribe from '@/components/HowToSubscribe'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Script from 'next/script'

export default function Home() {
  // Service Schema for homepage
  const serviceStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'IPTV Streaming Service',
    provider: {
      '@type': 'Organization',
      name: '4K Xtream IPTV',
      url: 'https://www.4kxtreamiptv.com',
      logo: 'https://www.4kxtreamiptv.com/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        telephone: '+44-7845-432224',
        email: 'admin@4kxtreamiptv.com',
        availableLanguage: ['English', 'German', 'Turkish'],
      },
    },
    areaServed: 'Worldwide',
    description: 'Premium IPTV streaming service with 30,000+ TV channels, 200,000+ movies and series in HD/4K quality. Instant activation, 24/7 support, and works on all devices.',
    offers: {
      '@type': 'Offer',
      price: '14.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://www.4kxtreamiptv.com/pricing/',
      priceValidUntil: '2025-12-31',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1000',
      bestRating: '5',
      worstRating: '1',
    },
    featureList: [
      '30,000+ Live TV Channels',
      '200,000+ Movies & Series',
      'HD/4K Quality Streaming',
      '99.9% Uptime',
      '24/7 Customer Support',
      'Works on All Devices',
      'Instant Activation',
      'Free 24-Hour Trial',
      'No Credit Card Required for Trial',
    ],
  };

  // Breadcrumb Schema
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.4kxtreamiptv.com/',
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#0a0a1a] relative overflow-hidden">
      <Script
        id="service-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <Pricing />
        <FastStreaming />
        <TrustedSection />
        <Benefits />
        <HowToSubscribe />
        <FAQ />
        <Footer />
      </div>
    </main>
  )
}
