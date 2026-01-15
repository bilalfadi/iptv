'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

const faqs = [
  {
    question: 'Do You Offer a Free Trial Period?',
    answer: 'Yes, we offer a 24-hour free trial period with no payment information required. Simply submit the trial request, and the login details will be sent to your email, allowing you to explore our services risk-free.'
  },
  {
    question: 'Available Payment Methods?',
    answer: 'We accept payments through credit and debit cards, PayPal, cryptocurrency, and bank transfers. All transactions are secured and encrypted for your safety.'
  },
  {
    question: 'What Devices Are Supported?',
    answer: 'Our IPTV service is compatible with Smart TVs (Samsung, LG, Sony, etc.), Amazon Firestick, Android TV boxes, smartphones and tablets (Android/iOS), Windows PC, Mac, MAG boxes, and more.'
  },
  {
    question: 'How Do I Set Up IPTV on My Device?',
    answer: 'After purchasing a subscription, you\'ll receive login credentials via email. Download an IPTV player app (like IPTV Smarters or TiviMate), enter your credentials, and start watching. We also provide detailed setup guides for each device.'
  },
  {
    question: 'What Internet Speed Do I Need?',
    answer: 'We recommend a minimum of 10 Mbps for HD streaming and 25 Mbps for 4K/UHD content. A stable connection ensures buffer-free viewing experience.'
  },
  {
    question: 'Can I Use Multiple Devices?',
    answer: 'Yes! We offer both single-device and multi-device plans. Our family package allows up to 2 simultaneous connections on different devices.'
  },
  {
    question: 'Is There a Money-Back Guarantee?',
    answer: 'Yes, we offer a 7-day money-back guarantee. If you\'re not satisfied with our service within the first 7 days, we\'ll provide a full refund.'
  },
  {
    question: 'What Channels Are Included?',
    answer: 'Our service includes 30,000+ live TV channels from around the world, covering sports, movies, news, entertainment, kids content, and more. Plus 200,000+ movies and TV series on demand.'
  },
  {
    question: 'Do You Have EPG (TV Guide)?',
    answer: 'Yes, our service includes a comprehensive Electronic Program Guide (EPG) for most channels, allowing you to see what\'s currently playing and upcoming programs.'
  },
  {
    question: 'What If I Experience Buffering?',
    answer: 'Buffering is usually related to your internet connection or VPN settings. Our support team can help you optimize your settings for smooth streaming. We also recommend using a VPN for the best experience.'
  }
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#0a0a1a]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 via-[#0a0a1a] to-orange-900/30" />
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-6 py-2 mb-8">
              <HelpCircle className="w-5 h-5 text-teal-400" />
              <span className="text-teal-300 font-medium">Help Center</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              {t.pages.faqs.title}
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t.pages.faqs.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0f0f23]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className={`rounded-2xl overflow-hidden transition-all ${
                    openIndex === index 
                      ? 'bg-gradient-to-br from-teal-500/10 to-orange-500/10 border border-teal-500/30' 
                      : 'bg-[#1a1a2e] border border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className={`text-lg font-semibold pr-4 ${
                      openIndex === index ? 'text-teal-300' : 'text-white'
                    }`}>
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-6 h-6 flex-shrink-0 transition-transform ${
                        openIndex === index ? 'rotate-180 text-teal-400' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}>
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compatible Devices */}
      <section className="py-16 bg-[#0a0a1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t.pages.faqs.devicesTitle}</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <Image src="/images/wp-content/uploads/2025/01/iptv-firestick-qx1f3peovpr9xz66946upl1xh75ycmjfm7hci7qhg0.webp" alt="Firestick" width={100} height={70} className="opacity-70 hover:opacity-100 transition-opacity" />
            <Image src="/images/wp-content/uploads/2025/01/Android-TV-Android-phones-Android-Box.webp" alt="Android" width={100} height={70} className="opacity-70 hover:opacity-100 transition-opacity" />
            <Image src="/images/wp-content/uploads/2025/01/iptv_ios-qx1e1gd4144cifu5yqfph38mlb68wzr8hszwr05wmw.webp" alt="iOS" width={100} height={70} className="opacity-70 hover:opacity-100 transition-opacity" />
            <Image src="/images/wp-content/uploads/2025/01/iptv-pc-qx1ef30vuy1vtoxp0z1nwaq9auitq1sjwcagya8qfk.webp" alt="PC" width={100} height={70} className="opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-[#0f0f23]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-teal-500/10 to-orange-500/10 border border-teal-500/30 rounded-3xl p-12">
              <HelpCircle className="w-16 h-16 text-teal-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">
                {t.pages.faqs.stillHaveQuestions}
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                {t.pages.faqs.stillHaveDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/447845432224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-xl font-bold hover:from-teal-600 hover:to-teal-700 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t.pages.faqs.chatWhatsApp}
                </a>
                <a 
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
                >
                  {t.pages.faqs.contactSupport}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
