import { notFound } from 'next/navigation';
import { getPostBySlug, processContent, getAllPosts } from '@/lib/wordpress-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Calendar, ArrowLeft, Clock, Share2, BookOpen, ArrowRight, User } from 'lucide-react';
import { Metadata } from 'next';
import { generateSEO, generateStructuredData } from '@/lib/seo';
import Script from 'next/script';

export async function generateStaticParams() {
  const posts = getAllPosts();
  
  return posts
    .filter((post: any) => post.status === 'publish')
    .map((post: any) => ({
      slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  const excerptText = typeof post.excerpt === 'string' 
    ? post.excerpt 
    : post.excerpt?.rendered?.replace(/<[^>]*>/g, '') || '';

  // Use exact WordPress URL as canonical (remove trailing slash)
  const rawCanonical = post.link || `https://4kxtreamiptv.com/blog/${post.slug}`;
  const canonicalUrl = rawCanonical.replace(/\/$/, '');

  // Extract image from content if available
  const contentMatch = post.content?.match(/<img[^>]+src="([^"]+)"/i);
  const imageUrl = contentMatch ? contentMatch[1] : '/logo.png';

  return generateSEO({
    title: post.title,
    description: excerptText || `${post.title} - 4K Xtream IPTV Blog`,
    keywords: ['IPTV blog', 'IPTV guide', 'IPTV news', 'streaming tips'],
    canonical: canonicalUrl,
    image: imageUrl,
    type: 'article',
    publishedTime: post.date,
    modifiedTime: post.modified || post.date,
    author: '4K Xtream IPTV',
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const processedContent = processContent(post.content);
  
  // Get related posts (other published posts)
  const allPosts = getAllPosts().filter((p: any) => p.status === 'publish' && p.slug !== params.slug);
  const relatedPosts = allPosts.slice(0, 3);

  // Calculate reading time (roughly 200 words per minute)
  const contentText = post.content?.replace(/<[^>]*>/g, '') || '';
  const wordCount = contentText.split(/\s+/).length || 0;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  // Extract image from content if available
  const contentMatch = post.content?.match(/<img[^>]+src="([^"]+)"/i);
  const imageUrl = contentMatch ? contentMatch[1].startsWith('http') ? contentMatch[1] : `https://4kxtreamiptv.com${contentMatch[1]}` : 'https://4kxtreamiptv.com/logo.png';

  const canonicalUrl = post.link || `https://4kxtreamiptv.com/blog/${post.slug}/`;
  const excerptText = typeof post.excerpt === 'string' 
    ? post.excerpt 
    : post.excerpt?.rendered?.replace(/<[^>]*>/g, '') || '';

  const articleStructuredData = generateStructuredData({
    type: 'Article',
    data: {
      headline: post.title,
      description: excerptText,
      image: imageUrl,
      datePublished: post.date,
      dateModified: post.modified || post.date,
      author: '4K Xtream IPTV',
      url: canonicalUrl,
    },
  });

  return (
    <main className="min-h-screen bg-[#0a0a1a]">
      <Script
        id="article-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 via-[#0a0a1a] to-orange-900/30" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </Link>
            
            {/* Post Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-4 h-4 text-teal-400" />
                <span>{readingTime} min read</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <User className="w-4 h-4 text-teal-400" />
                <span>Admin</span>
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content - WHITE BACKGROUND */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-3xl">
              <div 
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />
            </article>

            {/* Share Section */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-gradient-to-r from-teal-50 to-orange-50 border border-gray-200 rounded-2xl">
              <div className="flex items-center gap-4">
                <Share2 className="w-6 h-6 text-teal-600" />
                <span className="text-gray-800 font-semibold">Share this article</span>
              </div>
              <div className="flex gap-3">
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://4kxtreamiptv.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-teal-600 hover:bg-teal-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-white font-bold">X</span>
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://4kxtreamiptv.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-white font-bold">f</span>
                </a>
                <a 
                  href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - https://4kxtreamiptv.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-white font-bold">W</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-[#0f0f23]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">
                Related <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400">Articles</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost: any) => (
                  <Link 
                    key={relatedPost.id} 
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-gradient-to-br from-[#1a1a2e] to-[#16162a] border border-gray-800 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all"
                  >
                    <div className="h-40 bg-gradient-to-br from-teal-500/20 to-orange-500/20 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-teal-400/50" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-teal-400 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center text-teal-400 font-medium text-sm group-hover:text-orange-400">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-6">
            Ready to Experience Premium IPTV?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Try our service free for 24 hours. No credit card required!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/iptv-trial"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
            >
              Get Free Trial
            </Link>
            <Link 
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all"
            >
              View Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
