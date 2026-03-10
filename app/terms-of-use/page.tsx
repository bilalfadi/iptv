import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { FileText, CheckCircle, AlertTriangle, Shield, CreditCard, Ban, Scale, Mail } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Terms of Use',
  description: 'Read the terms and conditions for using 4K Xtream IPTV services. Understand your rights and responsibilities when subscribing to our IPTV service.',
  keywords: ['terms of service', 'terms and conditions', 'user agreement', 'legal', 'IPTV terms'],
  canonical: 'https://www.4kxtreamiptv.com/terms-of-use',
  image: '/logo.png',
  type: 'website',
});

const sections = [
  {
    icon: CheckCircle,
    title: '1. Acceptance of Terms',
    content: 'By using our website or subscribing to our IPTV services, you confirm that you have read, understood, and agree to these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.'
  },
  {
    icon: FileText,
    title: '2. Service Description',
    content: 'IPTV-TV provides internet-based television streaming services, offering access to live TV channels, video-on-demand (VOD), and other multimedia content. Our services are available through subscription plans, and the content may vary depending on your location and subscription package.'
  },
  {
    icon: Shield,
    title: '3. Eligibility',
    content: 'To use our services, you must be at least 18 years old or have the consent of a legal guardian, have the legal capacity to enter into a binding agreement, and reside in a region where our services are legally available.'
  },
  {
    icon: CreditCard,
    title: '4. Subscription and Payment',
    items: [
      'We offer various subscription plans with different durations (monthly, yearly)',
      'Payment is required in advance for the selected subscription period',
      'We accept credit/debit cards, PayPal, and other payment methods',
      'Subscriptions may automatically renew unless canceled before the renewal date',
      'Refunds are available under specific circumstances as outlined in our Refund Policy'
    ]
  },
  {
    icon: AlertTriangle,
    title: '5. User Responsibilities',
    items: [
      'Use our services only for personal, non-commercial purposes',
      'Do not share your account credentials or allow unauthorized access',
      'Ensure your internet connection meets minimum requirements for streaming',
      'Do not distribute copyrighted content without permission',
      'Do not attempt to bypass our security measures'
    ]
  },
  {
    icon: Ban,
    title: '6. Prohibited Activities',
    items: [
      'Reverse engineering, decompiling, or disassembling any part of our service',
      'Using our service to distribute malware or harmful software',
      'Engaging in any activity that violates local, national, or international laws'
    ]
  },
  {
    icon: Scale,
    title: '7. Limitation of Liability',
    content: 'Our services are provided "as is" and "as available." We do not guarantee uninterrupted or error-free service. We are not responsible for any damages arising from your use of our services, including loss of data, revenue, or profits.'
  }
];

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-[#0a0a1a]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 via-[#0a0a1a] to-orange-900/30" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-6 py-2 mb-8">
              <FileText className="w-5 h-5 text-teal-400" />
              <span className="text-teal-300 font-medium">Legal Information</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Terms of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400"> Use</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Welcome to IPTV-TV. Please read these terms and conditions carefully before using our website or services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-20 bg-[#0f0f23]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16162a] border border-gray-800 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                
                {section.content && (
                  <p className="text-gray-300 leading-relaxed ml-16">{section.content}</p>
                )}
                
                {section.items && (
                  <ul className="space-y-3 ml-16 mt-4">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#0a0a1a]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-teal-500/10 to-orange-500/10 border border-teal-500/30 rounded-3xl p-12">
              <Mail className="w-16 h-16 text-teal-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Questions About Our Terms?
              </h2>
              <p className="text-gray-300 text-lg mb-4">
                If you have any questions or concerns about these Terms and Conditions, please contact us at:
              </p>
              <a 
                href="mailto:Admin@4kxtreamiptv.com" 
                className="text-xl text-teal-400 hover:text-teal-300 font-semibold"
              >
                Admin@4kxtreamiptv.com
              </a>
              <p className="text-gray-400 mt-8">
                By using <strong className="text-white">IPTV-TV</strong>, you acknowledge that you have read, 
                understood, and agreed to these Terms and Conditions.
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
