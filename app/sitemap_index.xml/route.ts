import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://4kxtreamiptv.com';
  const currentDate = new Date().toISOString();

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<sitemap>
		<loc>${baseUrl}/post-sitemap.xml</loc>
		<lastmod>${currentDate}</lastmod>
	</sitemap>
	<sitemap>
		<loc>${baseUrl}/page-sitemap.xml</loc>
		<lastmod>${currentDate}</lastmod>
	</sitemap>
	<sitemap>
		<loc>${baseUrl}/category-sitemap.xml</loc>
		<lastmod>${currentDate}</lastmod>
	</sitemap>
	<sitemap>
		<loc>${baseUrl}/author-sitemap.xml</loc>
		<lastmod>${currentDate}</lastmod>
	</sitemap>
</sitemapindex>`;

  return new NextResponse(sitemapIndex, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
