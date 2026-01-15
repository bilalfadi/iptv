import { notFound } from 'next/navigation';
import { getPageBySlug, getAllPages, processContent } from '@/lib/wordpress-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

// Generate static params for all published pages
export async function generateStaticParams() {
  const pages = getAllPages();
  
  return pages
    .filter((page: any) => page.status === 'publish')
    .map((page: any) => ({
      slug: page.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = getPageBySlug(params.slug);
  
  if (!page) {
    return { title: 'Page Not Found' };
  }

  const excerptText = typeof page.excerpt === 'string' 
    ? page.excerpt 
    : page.excerpt?.rendered?.replace(/<[^>]*>/g, '') || '';

  // Use exact WordPress URL as canonical (remove trailing slash)
  const rawCanonical = page.link || `https://4kxtreamiptv.com/${page.slug}`;
  const canonicalUrl = rawCanonical.replace(/\/$/, '');

  // Extract image from content if available
  const pageContent = typeof page.content === 'string' ? page.content : (page.content?.rendered || '');
  const contentMatch = pageContent.match(/<img[^>]+src="([^"]+)"/i);
  const imageUrl = contentMatch ? contentMatch[1] : '/logo.png';

  return generateSEO({
    title: page.title,
    description: excerptText || `${page.title} - Premium IPTV Streaming Service by 4K Xtream IPTV`,
    keywords: ['IPTV', 'streaming', 'TV channels', 'movies', 'series'],
    canonical: canonicalUrl,
    image: imageUrl,
    type: 'website',
  });
}

export default function DynamicPage({ params }: { params: { slug: string } }) {
  const page = getPageBySlug(params.slug);

  if (!page) {
    notFound();
  }

  // Handle content that might be object or string
  const pageContent = typeof page.content === 'string' 
    ? page.content 
    : (typeof page.content === 'object' && page.content?.rendered 
      ? page.content.rendered 
      : '');
  
  const processedContent = processContent(pageContent);

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#281a4e] via-[#2d1f5a] to-[#ff9500] relative overflow-hidden">
      <div className="relative z-10">
        <Header />
        <article className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {page.title}
              </h1>
              
              {page.excerpt && typeof page.excerpt === 'object' && page.excerpt.rendered && (
                <div 
                  className="text-xl text-gray-600 mb-8"
                  dangerouslySetInnerHTML={{ __html: processContent(page.excerpt.rendered) }}
                />
              )}

              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </main>
  );
}
