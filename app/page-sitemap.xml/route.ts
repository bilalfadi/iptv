import { NextResponse } from 'next/server';
import { getPublishedPages } from '@/lib/wordpress-data';

export async function GET() {
  try {
    const pages = getPublishedPages();

    const excludedSlugs = ['my-account', 'checkout', 'cart', 'shop', 'home'];
    const filteredPages = pages.filter((page: any) => !excludedSlugs.includes(page.slug));

    if (!filteredPages || filteredPages.length === 0) {
      return new NextResponse(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`, {
        headers: {
          'Content-Type': 'application/xml',
        },
      });
    }

    // Get unique pages - keep only the latest version of each slug
    const uniquePagesMap = new Map<string, any>();
    filteredPages.forEach((page: any) => {
      const existing = uniquePagesMap.get(page.slug);
      if (!existing || new Date(page.modified || page.date) > new Date(existing.modified || existing.date)) {
        uniquePagesMap.set(page.slug, page);
      }
    });

    const uniquePages = Array.from(uniquePagesMap.values());

    const baseUrl = 'https://4kxtreamiptv.com';
    const urlEntries = uniquePages.map((page: any) => {
      const lastmod = page.modified ? new Date(page.modified).toISOString() : new Date(page.date).toISOString();
      const url = page.link || `${baseUrl}/${page.slug}/`;
      
      return `	<url>
		<loc>${url}</loc>
		<lastmod>${lastmod}</lastmod>
	</url>`;
    }).join('\n');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Error generating page sitemap:', error);
    return new NextResponse(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
}
