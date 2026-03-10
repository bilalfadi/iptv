import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllPosts } from '@/lib/wordpress-data';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Blog - IPTV News & Updates',
  description: 'Stay updated with the latest IPTV news, tips, guides, tutorials, and updates from 4K Xtream IPTV. Learn about IPTV setup, best practices, and streaming tips.',
  keywords: ['IPTV blog', 'IPTV news', 'IPTV tips', 'IPTV guides', 'streaming tutorials'],
  canonical: 'https://www.4kxtreamiptv.com/blog',
  image: '/logo.png',
  type: 'website',
});

export default function BlogPage() {
  const posts = getAllPosts().filter((post: any) => post.status === 'publish');

  return (
    <main className="min-h-screen bg-[#0a0a1a]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 via-[#0a0a1a] to-orange-900/30" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-6 py-2 mb-8">
              <BookOpen className="w-5 h-5 text-teal-400" />
              <span className="text-teal-300 font-medium">Our Blog</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Latest News &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400"> Updates</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay informed with the latest IPTV tips, guides, and updates from our team
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-[#0f0f23]">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16162a] border border-gray-800 rounded-3xl p-12">
                <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-white mb-4">No Posts Yet</h2>
                <p className="text-gray-400 mb-8">
                  We're working on some great content. Check back soon for IPTV tips, guides, and updates!
                </p>
                <Link 
                  href="/"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:from-teal-600 hover:to-orange-600 transition-all"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {posts.map((post: any) => {
                // Extract plain text from excerpt
                const excerptText = typeof post.excerpt === 'string' 
                  ? post.excerpt 
                  : post.excerpt?.rendered?.replace(/<[^>]*>/g, '') || '';
                
                return (
                  <Link 
                    key={post.id} 
                    href={`/blog/${post.slug}`}
                    className="group bg-gradient-to-br from-[#1a1a2e] to-[#16162a] border border-gray-800 rounded-3xl overflow-hidden hover:border-teal-500/50 transition-all hover:scale-[1.02]"
                  >
                    {/* Post Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-teal-500/20 to-orange-500/20 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-teal-400/50" />
                    </div>
                    
                    <div className="p-6">
                      {/* Date */}
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      
                      {/* Title */}
                      <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-teal-400 transition-colors">
                        {post.title}
                      </h2>
                      
                      {/* Excerpt */}
                      {excerptText && (
                        <p className="text-gray-400 line-clamp-3 mb-4">
                          {excerptText.substring(0, 150)}...
                        </p>
                      )}
                      
                      {/* Read More */}
                      <div className="flex items-center text-teal-400 font-medium group-hover:text-orange-400">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Compatible Devices */}
      <section className="py-16 bg-[#0a0a1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Works on All Devices</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <Image src="/images/wp-content/uploads/2025/01/iptv-firestick-qx1f3peovpr9xz66946upl1xh75ycmjfm7hci7qhg0.webp" alt="Firestick" width={100} height={70} className="opacity-70 hover:opacity-100 transition-opacity" />
            <Image src="/images/wp-content/uploads/2025/01/Android-TV-Android-phones-Android-Box.webp" alt="Android" width={100} height={70} className="opacity-70 hover:opacity-100 transition-opacity" />
            <Image src="/images/wp-content/uploads/2025/01/iptv_ios-qx1e1gd4144cifu5yqfph38mlb68wzr8hszwr05wmw.webp" alt="iOS" width={100} height={70} className="opacity-70 hover:opacity-100 transition-opacity" />
            <Image src="/images/wp-content/uploads/2025/01/iptv-pc-qx1ef30vuy1vtoxp0z1nwaq9auitq1sjwcagya8qfk.webp" alt="PC" width={100} height={70} className="opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-6">
            Ready to Start Streaming?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto">
            Try our service free for 24 hours and experience premium IPTV
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
