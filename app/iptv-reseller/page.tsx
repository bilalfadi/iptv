import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Image from 'next/image';
import { Users, DollarSign, Headphones, Server, Check, ArrowRight, Star, Zap } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'IPTV Reseller Program',
  description: 'Start your own IPTV business with 4K Xtream IPTV reseller program. Affordable entry from €250, powerful servers, 24/7 support, white-label solution, and unlimited potential.',
  keywords: ['IPTV reseller', 'IPTV business', 'IPTV reseller program', 'reseller IPTV', 'become IPTV reseller'],
  canonical: 'https://www.4kxtreamiptv.com/iptv-reseller',
  image: '/logo.png',
  type: 'website',
});

const benefits = [
  {
    icon: DollarSign,
    title: 'Affordable Entry',
    description: 'Start from just €250 with our reseller program. Low investment, high returns.'
  },
  {
    icon: Server,
    title: 'Powerful Servers',
    description: 'Advanced technology with best servers for unparalleled streaming quality.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated support team always ready to assist you and your customers.'
  },
  {
    icon: Users,
    title: 'Set Your Prices',
    description: 'Full control over your pricing. Earn 100%+ profit margins.'
  }
];

const resellerPlans = [
  {
    name: 'Professional',
    price: 250,
    credits: 120,
    popular: false,
    features: [
      '120 Credits*',
      'Access to all live channels',
      'Movies and TV shows included',
      'Get your own Reseller Panel',
      'Credits never expire',
      '24/7 Technical support'
    ]
  },
  {
    name: 'Business',
    price: 400,
    credits: 240,
    popular: true,
    features: [
      '240 Credits*',
      'Access to all live channels',
      'Movies and TV shows included',
      'Get your own Reseller Panel',
      'Credits never expire',
      'Priority 24/7 support',
      'Business consultation'
    ]
  }
];

const howItWorks = [
  {
    step: '01',
    title: 'Purchase Credits',
    description: 'Buy a reseller package with credits to get started'
  },
  {
    step: '02',
    title: 'Get Your Panel',
    description: 'Receive access to your own reseller control panel'
  },
  {
    step: '03',
    title: 'Create Accounts',
    description: 'Generate subscriptions for your customers using credits'
  },
  {
    step: '04',
    title: 'Earn Profits',
    description: 'Set your own prices and keep 100% of the profit'
  }
];

export default function IPTVResellerPage() {
  return (
    <main className="min-h-screen bg-[#0a0a1a]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 via-[#0a0a1a] to-orange-900/30" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-6 py-2 mb-8">
                <Star className="w-5 h-5 text-teal-400" />
                <span className="text-teal-300 font-medium">Business Opportunity</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Become an IPTV
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400"> Reseller</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Start your own IPTV business with 4K Xtream IPTV! Get your reseller panel, 
                set your own prices, and earn profits exceeding 100%.
              </p>
              
              <a 
                href="https://wa.me/447845432224?text=Hi,%20I'm%20interested%20in%20becoming%20an%20IPTV%20reseller"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-orange-500 text-white px-10 py-5 rounded-xl font-bold text-xl hover:from-teal-600 hover:to-orange-600 transition-all hover:scale-105 shadow-lg shadow-teal-500/30"
              >
                <Zap className="w-6 h-6" />
                Start Your Business Today
              </a>
            </div>
            
            {/* Image */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/images/wp-content/uploads/2024/12/tv_box.png"
                  alt="IPTV Reseller"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#0f0f23]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Become a Reseller?
            </h2>
            <p className="text-gray-400 text-lg">Lucrative opportunity with minimal investment</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16162a] border border-gray-800 rounded-2xl p-8 text-center hover:border-teal-500/50 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#0a0a1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-gray-400 text-lg">Simple steps to start earning</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative text-center">
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-teal-500 to-transparent" />
                )}
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-500/30">
                    <span className="text-3xl font-black text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-[#0f0f23]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Reseller Packages
            </h2>
            <p className="text-gray-400 text-lg">Choose the package that fits your business goals</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {resellerPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative rounded-3xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-teal-500 to-orange-500 shadow-2xl shadow-teal-500/30 scale-105' 
                    : 'bg-gradient-to-br from-[#1a1a2e] to-[#16162a] border border-gray-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                      RECOMMENDED
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-teal-300'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-5xl font-black ${plan.popular ? 'text-white' : 'text-white'}`}>
                      €{plan.price}
                    </span>
                  </div>
                  <p className={`mt-2 ${plan.popular ? 'text-white/80' : 'text-gray-400'}`}>
                    {plan.credits} Credits Included
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-teal-400'}`} />
                      <span className={plan.popular ? 'text-white/90' : 'text-gray-300'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="https://wa.me/447845432224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 rounded-xl font-bold text-center transition-all ${
                    plan.popular 
                      ? 'bg-white text-teal-600 hover:bg-gray-100' 
                      : 'bg-gradient-to-r from-teal-500 to-orange-500 text-white hover:from-teal-600 hover:to-orange-600'
                  }`}
                >
                  Contact Now
                </a>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-500 mt-8 text-sm">
            * 1 credit = 1 month subscription. Credits never expire.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Start Your IPTV Business?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join our successful network of resellers and start earning today!
          </p>
          <a 
            href="https://wa.me/447845432224"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-teal-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all"
          >
            Get Started Now
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
