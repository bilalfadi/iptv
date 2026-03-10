import { NextResponse } from 'next/server';
import { getUsers } from '@/lib/wordpress-data';

export async function GET() {
  try {
    const users = getUsers();

    if (!users || users.length === 0) {
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
    const urlEntries = users.map((user: any) => {
      const url = user.url || `${baseUrl}/author/${user.slug}/`;
      
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
    console.error('Error generating author sitemap:', error);
    return new NextResponse(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
}
