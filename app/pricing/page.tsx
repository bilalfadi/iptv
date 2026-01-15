import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Image from 'next/image';
import { Check, Star, Zap, Shield, Crown, Sparkles } from 'lucide-react';
import { generateSEO, generateStructuredData } from '@/lib/seo';
import Script from 'next/script';

export const metadata: Metadata = generateSEO({
  title: 'Pricing Plans - Best IPTV Subscription',
  description: 'Affordable IPTV subscription plans starting from $14/month. Get 30,000+ channels, 200,000+ movies, HD/4K quality, 24/7 support, instant activation, and free 24-hour trial.',
  keywords: ['IPTV pricing', 'IPTV plans', 'cheap IPTV', 'IPTV subscription cost', 'IPTV price'],
  canonical: 'https://4kxtreamiptv.com/pricing',
  image: '/logo.png',
  type: 'website',
});

const singleDevicePlans = [
  {
    duration: '1 Month',
    price: 14,
    popular: false,
    features: [
      '30,000+ TV Channels',
      '200,000+ Movies & Series',
      'HD/HEVC/4K Quality',
      'Subtitles Included',
      'Built-in VPN Security',
      'Catch-Up (Replay)',
      '99.9% Uptime',
      'All Devices Supported',
      'Instant Activation',
      'ALL PPV Events',
      'Adult Content (18+)'
    ]
  },
  {
    duration: '3 Months',
    price: 25,
    popular: true,
    features: [
      '30,000+ TV Channels',
      '200,000+ Movies & Series',
      'HD/HEVC/4K Quality',
      'Subtitles Included',
      'Built-in VPN Security',
      'Catch-Up (Replay)',
      '99.9% Uptime',
      'All Devices Supported',
      'Instant Activation',
      'ALL PPV Events',
      'Adult Content (18+)'
    ]
  },
  {
    duration: '6 Months',
    price: 40,
    popular: false,
    features: [
      '30,000+ TV Channels',
      '200,000+ Movies & Series',
      'HD/HEVC/4K Quality',
      'Subtitles Included',
      'Built-in VPN Security',
      'Catch-Up (Replay)',
      '99.9% Uptime',
      'All Devices Supported',
      'Instant Activation',
      'ALL PPV Events',
      'Adult Content (18+)'
    ]
  },
  {
    duration: '12 Months',
    price: 60,
    popular: false,
    features: [
      '30,000+ TV Channels',
      '200,000+ Movies & Series',
      'HD/HEVC/4K Quality',
      'Subtitles Included',
      'Built-in VPN Security',
      'Catch-Up (Replay)',
      '99.9% Uptime',
      'All Devices Supported',
      'Instant Activation',
      'ALL PPV Events',
      'Adult Content (18+)'
    ]
  }
];

const familyPlans = [
  { duration: '1 Month', price: 20, screens: 2 },
  { duration: '3 Months', price: 40, screens: 2 },
  { duration: '6 Months', price: 60, screens: 2 },
  { duration: '12 Months', price: 99, screens: 2, popular: true }
];

const guarantees = [
  { icon: Shield, title: '7-Day Money Back', description: 'Full refund if not satisfied' },
  { icon: Zap, title: 'Instant Activation', description: 'Start watching in minutes' },
  { icon: Star, title: '24/7 Support', description: 'Always here to help' }
];

export default function PricingPage() {
  const productStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: singleDevicePlans.map((plan, index) => ({
      '@type': 'Product',
      position: index + 1,
      name: `IPTV Subscription - ${plan.duration}`,
      description: `Premium IPTV service with 30,000+ channels, 200,000+ movies and series, HD/4K quality, instant activation, and 24/7 support.`,
      image: 'https://4kxtreamiptv.com/logo.png',
      brand: {
        '@type': 'Brand',
        name: '4K Xtream IPTV',
      },
      offers: {
        '@type': 'Offer',
        price: plan.price,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://4kxtreamiptv.com/pricing/',
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[#0a0a1a]">
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData),
        }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 via-[#0a0a1a] to-orange-900/30" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-6 py-2 mb-8">
              <Crown className="w-5 h-5 text-teal-400" />
              <span className="text-teal-300 font-medium">Premium IPTV Plans</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Simple, Transparent
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400"> Pricing</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Experience the most reliable, secure, and advanced IPTV service. 
              Choose the plan that fits your needs.
            </p>

            {/* Guarantees */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {guarantees.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-3">
                  <item.icon className="w-5 h-5 text-teal-400" />
                  <span className="text-white font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Single Device Plans */}
      <section className="py-20 bg-[#0f0f23]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">1 Device - 1 Screen</h2>
            <p className="text-gray-400">Perfect for individual use</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {singleDevicePlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative rounded-3xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-teal-500 to-orange-500 shadow-2xl shadow-teal-500/30 scale-105 z-10' 
                    : 'bg-gradient-to-br from-[#1a1a2e] to-[#16162a] border border-gray-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Sparkles className="w-4 h-4" />
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-300'}`}>
                    {plan.duration}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-5xl font-black ${plan.popular ? 'text-white' : 'text-white'}`}>
                      ${plan.price}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.slice(0, 6).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-teal-400'}`} />
                      <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-gray-300'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={`https://wa.me/447845432224?text=Hi,%20I%20want%20to%20subscribe%20to%20the%20${plan.duration}%20plan`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 rounded-xl font-bold text-center transition-all ${
                    plan.popular 
                      ? 'bg-white text-teal-600 hover:bg-gray-100' 
                      : 'bg-gradient-to-r from-teal-500 to-orange-500 text-white hover:from-teal-600 hover:to-orange-600'
                  }`}
                >
                  Order Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Plans */}
      <section className="py-20 bg-[#0a0a1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Family Package - 2 Screens</h2>
            <p className="text-gray-400">Share with your family on 2 devices simultaneously</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {familyPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative rounded-2xl p-6 text-center ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-teal-600 to-orange-600 shadow-xl shadow-teal-500/30' 
                    : 'bg-[#1a1a2e] border border-gray-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    BEST VALUE
                  </div>
                )}
                <h3 className="text-lg font-bold text-white mb-1">{plan.duration}</h3>
                <div className="text-4xl font-black text-white mb-2">${plan.price}</div>
                <p className="text-gray-300 text-sm mb-4">{plan.screens} Screens - {plan.screens} Connections</p>
                <a 
                  href="https://wa.me/447845432224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 rounded-xl font-bold transition-all ${
                    plan.popular 
                      ? 'bg-white text-teal-600 hover:bg-gray-100' 
                      : 'bg-teal-600/20 border border-teal-500/30 text-teal-300 hover:bg-teal-600/30'
                  }`}
                >
                  Contact Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Devices */}
      <section className="py-16 bg-[#0f0f23]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Works on All Your Devices</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <Image src="/images/wp-content/uploads/2025/01/iptv-firestick-qx1f3peovpr9xz66946upl1xh75ycmjfm7hci7qhg0.webp" alt="Firestick" width={100} height={70} className="opacity-70 hover:opacity-100 transition-opacity" />
            <Image src="/images/wp-content/uploads/2025/01/Android-TV-Android-phones-Android-Box.webp" alt="Android" width={100} height={70} className="opacity-70 hover:opacity-100 transition-opacity" />
            <Image src="/images/wp-content/uploads/2025/01/iptv_ios-qx1e1gd4144cifu5yqfph38mlb68wzr8hszwr05wmw.webp" alt="iOS" width={100} height={70} className="opacity-70 hover:opacity-100 transition-opacity" />
            <Image src="/images/wp-content/uploads/2025/01/iptv-pc-qx1ef30vuy1vtoxp0z1nwaq9auitq1sjwcagya8qfk.webp" alt="PC" width={100} height={70} className="opacity-70 hover:opacity-100 transition-opacity" />
            <Image src="/images/wp-content/uploads/2024/12/tv_box.png" alt="TV Box" width={100} height={70} className="opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-[#0a0a1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">All Plans Include</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {singleDevicePlans[0].features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-[#1a1a2e] border border-gray-800 rounded-xl p-4">
                <Check className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-6">
            Not Sure Which Plan to Choose?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto">
            Try our free 24-hour trial first and experience the quality yourself!
          </p>
          <a 
            href="/iptv-trial"
            className="inline-flex items-center gap-2 bg-white text-teal-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all"
          >
            Get Free Trial
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
