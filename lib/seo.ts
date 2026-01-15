/**
 * SEO Utilities
 * Helper functions for generating comprehensive SEO metadata
 */

import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
}

const defaultImage = 'https://4kxtreamiptv.com/logo.png';
const siteUrl = 'https://4kxtreamiptv.com';
const siteName = '4K Xtream IPTV';
const defaultKeywords = [
  'IPTV',
  'IPTV service',
  'IPTV subscription',
  'IPTV streaming',
  '4K IPTV',
  'HD IPTV',
  'IPTV channels',
  'IPTV box',
  'IPTV player',
  'IPTV reseller',
  'best IPTV',
  'IPTV provider',
  'IPTV UK',
  'IPTV USA',
  'IPTV Europe',
  'IPTV trial',
  'IPTV free trial',
  'streaming TV',
  'live TV streaming',
  'on demand movies',
  'IPTV subscription cheap',
  'IPTV service provider',
  'IPTV premium',
  'IPTV subscription plans',
  'IPTV guide',
  'IPTV installation',
  'IPTV setup',
];

export function generateSEO(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    image = defaultImage,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    section,
    tags = [],
    noindex = false,
    nofollow = false,
  } = config;

  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const allKeywords = [...defaultKeywords, ...keywords].join(', ');
  // Remove trailing slash from canonical URL (except for homepage)
  const rawCanonical = canonical || siteUrl;
  const canonicalUrl = rawCanonical === siteUrl || rawCanonical === `${siteUrl}/` 
    ? siteUrl 
    : rawCanonical.replace(/\/$/, '');
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  const metadata: Metadata = {
    title: fullTitle,
    description: description.substring(0, 160),
    keywords: allKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: type,
      url: canonicalUrl,
      title: fullTitle,
      description: description.substring(0, 200),
      siteName: siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: description.substring(0, 200),
      images: [imageUrl],
      creator: '@4kxtreamiptv',
      site: '@4kxtreamiptv',
    },
    verification: {
      // Add verification codes here when available
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
      // bing: 'your-bing-verification-code',
    },
  };

  return metadata;
}

export function generateStructuredData(config: {
  type: 'WebSite' | 'Article' | 'Organization' | 'Product' | 'FAQPage';
  data: any;
}) {
  const { type, data } = config;

  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  switch (type) {
    case 'WebSite':
      return {
        ...baseStructuredData,
        name: data.name || siteName,
        url: data.url || siteUrl,
        description: data.description,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteUrl}/?s={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
        ...(data.publisher && { publisher: data.publisher }),
      };

    case 'Organization':
      return {
        ...baseStructuredData,
        name: data.name || siteName,
        url: data.url || siteUrl,
        logo: data.logo || `${siteUrl}/logo.png`,
        description: data.description,
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          ...(data.email && { email: data.email }),
          ...(data.phone && { telephone: data.phone }),
        },
        sameAs: data.sameAs || [],
      };

    case 'Article':
      return {
        ...baseStructuredData,
        headline: data.headline,
        description: data.description,
        image: data.image || defaultImage,
        datePublished: data.datePublished,
        dateModified: data.dateModified || data.datePublished,
        author: {
          '@type': 'Person',
          name: data.author || '4K Xtream IPTV',
        },
        publisher: {
          '@type': 'Organization',
          name: siteName,
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/logo.png`,
          },
        },
        ...(data.section && { articleSection: data.section }),
        ...(data.tags && { keywords: data.tags.join(', ') }),
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': data.url || siteUrl,
        },
      };

    case 'Product':
      return {
        ...baseStructuredData,
        name: data.name,
        description: data.description,
        image: data.image || defaultImage,
        brand: {
          '@type': 'Brand',
          name: siteName,
        },
        offers: {
          '@type': 'Offer',
          price: data.price,
          priceCurrency: data.currency || 'USD',
          availability: 'https://schema.org/InStock',
          url: data.url || siteUrl,
        },
        aggregateRating: data.rating ? {
          '@type': 'AggregateRating',
          ratingValue: data.rating.value,
          reviewCount: data.rating.count,
        } : undefined,
      };

    case 'FAQPage':
      return {
        ...baseStructuredData,
        mainEntity: (data.questions || []).map((q: any) => ({
          '@type': 'Question',
          name: q.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: q.answer,
          },
        })),
      };

    default:
      return baseStructuredData;
  }
}
