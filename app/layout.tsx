import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/components/LanguageProvider'
import { generateSEO, generateStructuredData } from '@/lib/seo'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = generateSEO({
  title: '4K Xtream IPTV - Premium IPTV Streaming Service',
  description: 'Buy Best IPTV Subscriptions at cheap price - Premium Streaming Made Affordable. Enjoy 30,000+ TV channels and 200,000+ Movies and Series. HD/4K Quality, Instant Activation, 24/7 Support. Free 24-Hour Trial Available.',
  keywords: [
    'best IPTV',
    'cheap IPTV',
    'IPTV subscription',
    '4K streaming',
    'IPTV service',
    'IPTV UK',
    'IPTV USA',
    'IPTV Europe',
    'IPTV trial',
    'IPTV streaming',
    'live TV streaming',
    'IPTV channels',
    'IPTV box',
    'IPTV player',
    'IPTV reseller',
    'IPTV provider',
    'IPTV subscription cheap',
    'IPTV service provider',
    'IPTV premium',
    'IPTV subscription plans',
  ],
  canonical: 'https://4kxtreamiptv.com/',
  image: '/logo.png',
  type: 'website',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const websiteStructuredData = generateStructuredData({
    type: 'WebSite',
    data: {
      name: '4K Xtream IPTV',
      url: 'https://4kxtreamiptv.com',
      description: 'Premium IPTV Streaming Service with 30,000+ TV channels and 200,000+ Movies and Series',
    },
  });

  const organizationStructuredData = generateStructuredData({
    type: 'Organization',
    data: {
      name: '4K Xtream IPTV',
      url: 'https://4kxtreamiptv.com',
      logo: 'https://4kxtreamiptv.com/logo.png',
      description: 'Premium IPTV Streaming Service',
    },
  });

  return (
    <html lang="en">
      <head>
        <Script
          id="website-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <Script
          id="organization-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

