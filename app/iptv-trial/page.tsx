'use client'

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Clock, CheckCircle, Tv, Zap, Shield, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

export default function IPTVTrialPage() {
  const { t } = useLanguage();
  
  const trialFeatures = [
    {
      icon: Tv,
      title: t.pages.iptvTrial.feature1.title,
      description: t.pages.iptvTrial.feature1.description
    },
    {
      icon: Zap,
      title: t.pages.iptvTrial.feature2.title,
      description: t.pages.iptvTrial.feature2.description
    },
    {
      icon: Clock,
      title: t.pages.iptvTrial.feature3.title,
      description: t.pages.iptvTrial.feature3.description
    },
    {
      icon: Shield,
      title: t.pages.iptvTrial.feature4.title,
      description: t.pages.iptvTrial.feature4.description
    }
  ];

  const steps = [
    {
      number: '01',
      title: t.pages.iptvTrial.step1.title,
      description: t.pages.iptvTrial.step1.description
    },
    {
      number: '02',
      title: t.pages.iptvTrial.step2.title,
      description: t.pages.iptvTrial.step2.description
    },
    {
      number: '03',
      title: t.pages.iptvTrial.step3.title,
      description: t.pages.iptvTrial.step3.description
    },
    {
      number: '04',
      title: t.pages.iptvTrial.step4.title,
      description: t.pages.iptvTrial.step4.description
    }
  ];

  const notes = [
    t.pages.iptvTrial.note1,
    t.pages.iptvTrial.note2,
    t.pages.iptvTrial.note3,
    t.pages.iptvTrial.note4,
    t.pages.iptvTrial.note5,
  ];

  return (
    <main className="min-h-screen bg-[#0a0a1a]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 via-[#0a0a1a] to-orange-900/30" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-6 py-2 mb-8">
                <Clock className="w-5 h-5 text-teal-400" />
                <span className="text-teal-300 font-medium">{t.pages.iptvTrial.subtitle}</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                {t.pages.iptvTrial.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                {t.pages.iptvTrial.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/447845432224?text=Hi,%20I%20want%20to%20request%20a%20free%20IPTV%20trial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-teal-500/30"
                >
                  <MessageCircle className="w-6 h-6" />
                  {t.pages.iptvTrial.requestWhatsApp}
                </a>
                <a 
                  href="mailto:admin@4kxtreamiptv.com?subject=Free%20IPTV%20Trial%20Request"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
                >
                  <Mail className="w-6 h-6" />
                  {t.pages.iptvTrial.requestEmail}
                </a>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/images/wp-content/uploads/2024/12/tv_box.png"
                  alt="IPTV Trial"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clear 3-step strip – same idea as Sonix “How it works” but focused only on free trial */}
      <section className="py-12 bg-[#0f0f23] border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              How to get your 24‑hour free IPTV trial
            </h2>
            <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
              No payment and no contract. Just send us your details, we activate your line, and you start watching.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-[#111126] border border-white/10 rounded-2xl p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 text-lg font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Send us a message</h3>
              <p className="text-sm text-gray-300">
                Click the WhatsApp button above and send: your name, email, device (TV/Box/Phone), app you use and your
                country.
              </p>
            </div>

            <div className="bg-[#111126] border border-white/10 rounded-2xl p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 text-lg font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">We create your trial line</h3>
              <p className="text-sm text-gray-300">
                Our team activates your 24‑hour IPTV trial and sends you login details (M3U / Xtream Codes) with simple
                setup instructions.
              </p>
            </div>

            <div className="bg-[#111126] border border-white/10 rounded-2xl p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 text-lg font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Login & start watching</h3>
              <p className="text-sm text-gray-300">
                Enter the details in your IPTV app and enjoy all live channels, movies and series during the free
                trial. If you like it, upgrade to a paid plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trial Features */}
      <section className="py-20 bg-[#0f0f23]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              {t.pages.iptvTrial.featuresTitle}
            </h2>
            <p className="text-gray-400 text-lg">{t.pages.iptvTrial.featuresSubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trialFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16162a] border border-gray-800 rounded-2xl p-8 text-center hover:border-teal-500/50 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
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
              {t.pages.iptvTrial.howItWorksTitle}
            </h2>
            <p className="text-gray-400 text-lg">{t.pages.iptvTrial.howItWorksSubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-teal-500 to-transparent" />
                )}
                <div className="relative bg-[#1a1a2e] border border-gray-800 rounded-2xl p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-500/30">
                    <span className="text-3xl font-black text-white">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Devices */}
      <section className="py-20 bg-[#0f0f23]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t.pages.iptvTrial.devicesTitle}</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <Image src="/images/wp-content/uploads/2025/01/iptv-firestick-qx1f3peovpr9xz66946upl1xh75ycmjfm7hci7qhg0.webp" alt="Firestick" width={120} height={80} className="opacity-80 hover:opacity-100 transition-opacity" />
            <Image src="/images/wp-content/uploads/2025/01/Android-TV-Android-phones-Android-Box.webp" alt="Android" width={120} height={80} className="opacity-80 hover:opacity-100 transition-opacity" />
            <Image src="/images/wp-content/uploads/2025/01/iptv_ios-qx1e1gd4144cifu5yqfph38mlb68wzr8hszwr05wmw.webp" alt="iOS" width={120} height={80} className="opacity-80 hover:opacity-100 transition-opacity" />
            <Image src="/images/wp-content/uploads/2025/01/iptv-pc-qx1ef30vuy1vtoxp0z1nwaq9auitq1sjwcagya8qfk.webp" alt="PC" width={120} height={80} className="opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-[#0a0a1a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-teal-500/10 to-orange-500/10 border border-teal-500/30 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                📋 {t.pages.iptvTrial.notesTitle}
              </h2>
              
              <div className="space-y-4">
                {notes.map((note, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-lg">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {t.pages.iptvTrial.ctaTitle}
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            {t.pages.iptvTrial.ctaDescription}
          </p>
          <a 
            href="https://wa.me/447845432224?text=Hi,%20I%20want%20to%20request%20a%20free%20IPTV%20trial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-teal-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
          >
            <MessageCircle className="w-7 h-7" />
            {t.pages.iptvTrial.ctaButton}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
