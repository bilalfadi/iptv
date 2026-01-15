import { NextResponse } from 'next/server';
import { getPublishedPosts } from '@/lib/wordpress-data';

export async function GET() {
  try {
    const posts = getPublishedPosts();

    if (!posts || posts.length === 0) {
      return new NextResponse(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`, {
        headers: {
          'Content-Type': 'application/xml',
        },
      });
    }

    // Get unique posts - keep only the latest version of each slug
    const uniquePostsMap = new Map<string, any>();
    posts.forEach((post: any) => {
      const existing = uniquePostsMap.get(post.slug);
      if (!existing || new Date(post.modified || post.date) > new Date(existing.modified || existing.date)) {
        uniquePostsMap.set(post.slug, post);
      }
    });

    const uniquePosts = Array.from(uniquePostsMap.values());

    const baseUrl = 'https://4kxtreamiptv.com';
    const urlEntries = uniquePosts.map((post: any) => {
      const lastmod = post.modified ? new Date(post.modified).toISOString() : new Date(post.date).toISOString();
      const url = post.link || `${baseUrl}/${post.slug}/`;
      
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
    console.error('Error generating post sitemap:', error);
    return new NextResponse(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
}
