'use client'

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Mail, Phone, MessageCircle, Clock, Send } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

export default function ContactUsPage() {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: MessageCircle,
      title: t.pages.contact.whatsApp.title,
      subtitle: t.pages.contact.whatsApp.subtitle,
      value: '+44 7845 432224',
      link: 'https://wa.me/447845432224',
      description: t.pages.contact.whatsApp.description
    },
    {
      icon: Mail,
      title: t.pages.contact.email.title,
      subtitle: t.pages.contact.email.subtitle,
      value: 'admin@4kxtreamiptv.com',
      link: 'mailto:admin@4kxtreamiptv.com',
      description: t.pages.contact.email.description
    },
    {
      icon: Phone,
      title: t.pages.contact.phone.title,
      subtitle: t.pages.contact.phone.subtitle,
      value: '+44 7845 432224',
      link: 'tel:+447845432224',
      description: t.pages.contact.phone.description
    }
  ];

  const supportHours = [
    { day: 'Monday - Friday', hours: '24/7' },
    { day: 'Saturday', hours: '24/7' },
    { day: 'Sunday', hours: '24/7' }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a1a]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 via-[#0a0a1a] to-orange-900/30" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-6 py-2 mb-8">
              <Send className="w-5 h-5 text-teal-400" />
              <span className="text-teal-300 font-medium">{t.pages.contact.subtitle}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              {t.pages.contact.title}
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t.pages.contact.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-[#0f0f23]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <a 
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-gradient-to-br from-[#1a1a2e] to-[#16162a] border border-gray-800 rounded-3xl p-8 text-center hover:border-teal-500/50 transition-all hover:scale-105"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <method.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{method.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{method.subtitle}</p>
                <p className="text-lg text-teal-400 font-semibold mb-2">{method.value}</p>
                <p className="text-gray-500 text-sm">{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Support Hours & Image */}
      <section className="py-20 bg-[#0a0a1a]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <div className="relative h-[400px] rounded-3xl overflow-hidden">
              <Image
                src="/images/wp-content/uploads/2024/12/confident-caucasian-it-support-call-center-female-worker-in-headset-watching.jpg"
                alt="24/7 Support"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-2xl font-bold">24/7 Customer Support</p>
                <p className="text-gray-300">{t.pages.contact.supportAlways}</p>
              </div>
            </div>

            <div className="bg-[#1a1a2e] border border-gray-800 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{t.pages.contact.supportHours}</h3>
                  <p className="text-gray-400">{t.pages.contact.supportAlways}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {supportHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-4 border-b border-gray-700/50 last:border-0">
                    <span className="text-gray-300 font-medium">{schedule.day}</span>
                    <span className="bg-teal-500/20 text-teal-400 px-4 py-1 rounded-full font-bold">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-teal-500/10 to-orange-500/10 border border-teal-500/30 rounded-xl">
                <p className="text-teal-300 text-center font-medium">
                  ✨ {t.pages.contact.support24}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-6">
            {t.pages.contact.ctaTitle}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto">
            {t.pages.contact.ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/iptv-trial"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
            >
              {t.pages.contact.ctaTrial}
            </a>
            <a 
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all"
            >
              {t.pages.contact.ctaPricing}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
