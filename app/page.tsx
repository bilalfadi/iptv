import Header from '@/components/Header'
import Hero from '@/components/Hero'
import DevicesStrip from '@/components/DevicesStrip'
import MoviesShowcase from '@/components/MoviesShowcase'
import SportsShowcase from '@/components/SportsShowcase'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import LivePreview from '@/components/LivePreview'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Script from 'next/script'
import Image from 'next/image'

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

  // Kebit homepage small sports strip (1,2,3,42,43,44) – between sports & live preview
  const kebitSportsStripImages = [
    '/kebit-home/1.webp',
    '/kebit-home/2.webp',
    '/kebit-home/3.webp',
    '/kebit-home/42.webp',
    '/kebit-home/43.webp',
    '/kebit-home/44.webp',
  ]

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
        <DevicesStrip />

        {/* Kebit small horizontal sports strip (1,2,3,42,43,44) – placed directly under DevicesStrip */}
        <section className="py-10 bg-[#050513]">
          <div className="mx-auto w-full max-w-[1440px] px-3 md:px-6">
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#050513] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#050513] to-transparent" />

              <div className="flex gap-6 md:gap-7 animate-[movies-scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
                {[...kebitSportsStripImages, ...kebitSportsStripImages].map((src, index) => (
                  <div
                    key={`${src}-${index}`}
                    className="flex-shrink-0 w-[170px] md:w-[185px] lg:w-[200px] rounded-3xl overflow-hidden bg-[#05091f] border border-white/10 shadow-lg shadow-black/40"
                  >
                    {/* Extra height + object-contain so full Kebit banners are visible without cropping */}
                    <div className="relative w-full h-48 md:h-64 lg:h-72">
                      <Image
                        src={src}
                        alt="Kebit sports strip"
                        fill
                        sizes="(min-width: 1024px) 234px, 60vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <MoviesShowcase />
        <SportsShowcase />
        <LivePreview />
        <Features />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    </main>
  )
}
