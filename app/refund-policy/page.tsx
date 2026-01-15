import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { AlertCircle, CheckCircle, Clock, MessageCircle, Shield, HelpCircle } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Refund Policy',
  description: 'Learn about our 7-day money-back guarantee and refund process at 4K Xtream IPTV. Full refund policy details and how to request a refund.',
  keywords: ['refund policy', 'money back guarantee', 'IPTV refund', 'refund process'],
  canonical: 'https://4kxtreamiptv.com/refund-policy',
  image: '/logo.png',
  type: 'website',
});

const refundSteps = [
  {
    icon: MessageCircle,
    title: 'Contact Support',
    description: 'Reach out to us via WhatsApp or email within the refund period'
  },
  {
    icon: HelpCircle,
    title: 'Explain Issue',
    description: 'Tell us why you\'re requesting a refund - we may be able to help'
  },
  {
    icon: CheckCircle,
    title: 'Get Refund',
    description: 'If eligible, refund processed within 24 hours to 3 days'
  }
];

const beforeRefund = [
  {
    title: 'Experiencing Technical Problems?',
    description: 'Many technical issues can be resolved quickly. Our support team can help troubleshoot connection problems, buffering, or setup issues.',
    icon: '🔧'
  },
  {
    title: 'Looking for More Content?',
    description: 'Our service focuses on English content for seamless browsing. If you need specific channels from other regions, contact us and we\'ll try to accommodate.',
    icon: '📺'
  },
  {
    title: 'Stream Freezing?',
    description: 'Buffering is often tied to VPN or DNS settings. We can guide you to resolve these issues for smooth streaming.',
    icon: '❄️'
  }
];

export default function RefundPolicyPage() {
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
              <Shield className="w-5 h-5 text-teal-400" />
              <span className="text-teal-300 font-medium">Money-Back Guarantee</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Refund
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400"> Policy</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We want you to be completely satisfied with our service. 
              Please read our refund policy before submitting a request.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-[#0f0f23]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/30 rounded-3xl p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="w-8 h-8 text-orange-400 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Please Read Before Requesting a Refund
                  </h2>
                  <p className="text-gray-300">
                    We understand things don't always work out as expected. Before you proceed with a refund request, 
                    please take a moment to see how we might be able to help resolve your issue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before Requesting Refund */}
      <section className="py-16 bg-[#0a0a1a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Before Requesting a Refund
            </h2>
            
            <div className="space-y-6">
              {beforeRefund.map((item, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-[#1a1a2e] to-[#16162a] border border-gray-800 rounded-2xl p-6 hover:border-teal-500/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{item.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-teal-400 mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Refund Policy Details */}
      <section className="py-16 bg-[#0f0f23]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#1a1a2e] border border-gray-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Refund Policy Details
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-teal-500/10 border border-teal-500/30 rounded-xl">
                  <Clock className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Refund Period</h3>
                    <p className="text-gray-300">
                      You have a <strong className="text-teal-400">4-day refund period</strong> starting from the date of purchase.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-teal-500/10 border border-teal-500/30 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Eligible for Refund</h3>
                    <p className="text-gray-300">
                      If after trying our solutions you still feel our service isn't the right fit, 
                      you're eligible for a full refund within the refund period.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-teal-500/10 border border-teal-500/30 rounded-xl">
                  <Shield className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Processing Time</h3>
                    <p className="text-gray-300">
                      Refunds are typically processed within <strong className="text-teal-400">24 hours to 3 business days</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Request */}
      <section className="py-16 bg-[#0a0a1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              How to Request a Refund
            </h2>
            <p className="text-gray-400">Simple 3-step process</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {refundSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-500/30">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Refund */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need to Request a Refund?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto">
            Contact our support team and provide your purchase details
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/447845432224?text=Hi,%20I%20would%20like%20to%20request%20a%20refund"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Support
            </a>
            <a 
              href="mailto:admin@4kxtreamiptv.com?subject=Refund%20Request"
              className="inline-flex items-center justify-center gap-2 bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all"
            >
              Email Support
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
