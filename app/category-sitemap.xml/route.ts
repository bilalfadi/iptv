import { NextResponse } from 'next/server';
import { getCategories } from '@/lib/wordpress-data';

export async function GET() {
  try {
    const categories = getCategories();

    if (!categories || categories.length === 0) {
      return new NextResponse(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`, {
        headers: {
          'Content-Type': 'application/xml',
        },
      });
    }

    const baseUrl = 'https://www.4kxtreamiptv.com';
    const lastmod = new Date().toISOString();
    const urlEntries = categories.map((category: any) => {
      const url = category.link || `${baseUrl}/category/${category.slug}/`;
      
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
    console.error('Error generating category sitemap:', error);
    return new NextResponse(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
}
