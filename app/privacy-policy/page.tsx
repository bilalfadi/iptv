import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { Shield, Lock, Eye, Cookie, Mail, Database } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Privacy Policy',
  description: 'Learn how 4K Xtream IPTV collects, uses, and protects your personal information. Our comprehensive privacy policy outlines data collection, usage, and security practices.',
  keywords: ['privacy policy', 'data protection', 'GDPR', 'privacy', 'data security'],
  canonical: 'https://4kxtreamiptv.com/privacy-policy',
  image: '/logo.png',
  type: 'website',
});

const privacyPoints = [
  {
    icon: Database,
    title: 'What Information Do We Collect?',
    description: 'When you sign up or use our services, we may ask for your name, email, and payment details. This helps us give you the best experience!'
  },
  {
    icon: Eye,
    title: 'How Do We Use Your Information?',
    items: [
      'Make sure you can watch your favorite shows',
      'Send you important updates about your subscription',
      'Keep our website running smoothly'
    ]
  },
  {
    icon: Lock,
    title: 'Do We Share Your Information?',
    description: "Nope! We don't sell or share your personal details with anyone else. Your information stays safe with us."
  },
  {
    icon: Cookie,
    title: 'Cookies',
    description: "Cookies are tiny bits of data that help our website remember you. They make using our site easier and faster. If you don't want cookies, you can turn them off in your browser."
  },
  {
    icon: Shield,
    title: 'Keeping Your Information Safe',
    description: 'We use special tools to protect your information. Your safety is super important to us!'
  }
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a1a]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 via-[#0a0a1a] to-orange-900/30" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-6 py-2 mb-8">
              <Shield className="w-5 h-5 text-teal-400" />
              <span className="text-teal-300 font-medium">Your Privacy Matters</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Privacy
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400"> Policy</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hi there! We care about your privacy, so here's how we keep your information safe and what we do with it.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Points */}
      <section className="py-20 bg-[#0f0f23]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {privacyPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16162a] border border-gray-800 rounded-3xl p-8 hover:border-teal-500/30 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{point.title}</h3>
                    {point.description && (
                      <p className="text-gray-300 text-lg leading-relaxed">{point.description}</p>
                    )}
                    {point.items && (
                      <ul className="space-y-2 mt-2">
                        {point.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-300">
                            <span className="w-2 h-2 bg-teal-400 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="py-20 bg-[#0a0a1a]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-teal-500/10 to-orange-500/10 border border-teal-500/30 rounded-3xl p-12">
              <Mail className="w-16 h-16 text-teal-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Questions?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                If you have any questions or need help, email us at{' '}
                <a href="mailto:contact@4kxtreamiptv.com" className="text-teal-400 hover:text-teal-300 font-semibold">
                  contact@4kxtreamiptv.com
                </a>
                . We're always happy to help!
              </p>
              <p className="text-xl text-white/80">
                We're here to make sure your experience is fun, safe, and simple! 😊
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-12 bg-[#0f0f23]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">
            Last updated: January 2025
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
