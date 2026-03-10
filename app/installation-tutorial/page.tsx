'use client'

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Monitor, Smartphone, Tv, Laptop, Play, Download, Settings, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

export default function InstallationTutorialPage() {
  const { t } = useLanguage();

  const devices = [
    {
      name: 'Amazon Firestick',
      icon: '/images/wp-content/uploads/2025/01/iptv-firestick-qx1f3peovpr9xz66946upl1xh75ycmjfm7hci7qhg0.webp',
      description: 'Fire TV Stick, Fire TV Cube, Fire TV',
      anchorId: 'firestick-guide',
    },
    {
      name: 'Android TV & Box',
      icon: '/images/wp-content/uploads/2025/01/Android-TV-Android-phones-Android-Box.webp',
      description: 'Android TV, Nvidia Shield, Mi Box',
      anchorId: 'android-tv-guide',
    },
    {
      name: 'Smart TV',
      icon: '/images/wp-content/uploads/2024/12/tv_box.png',
      description: 'Samsung, LG, Sony, TCL, Hisense',
      anchorId: 'smart-tv-guide',
    },
    {
      name: 'iOS Devices',
      icon: '/images/wp-content/uploads/2025/01/iptv_ios-qx1e1gd4144cifu5yqfph38mlb68wzr8hszwr05wmw.webp',
      description: 'iPhone, iPad, Apple TV',
      anchorId: 'ios-guide',
    },
    {
      name: 'Windows PC',
      icon: '/images/wp-content/uploads/2025/01/iptv-pc-qx1ef30vuy1vtoxp0z1nwaq9auitq1sjwcagya8qfk.webp',
      description: 'Windows 10, Windows 11',
      anchorId: 'windows-guide',
    },
    {
      name: 'MAG Box',
      icon: '/images/wp-content/uploads/2024/12/tv_box.png',
      description: 'MAG 250, 254, 322, 324, 420, 424',
      anchorId: 'mag-box-guide',
    },
  ];

  const apps = [
    {
      name: 'IPTV Smarters Pro',
      image: '/images/wp-content/uploads/2025/01/iptvsmarters.webp',
      description: 'Most popular IPTV player with easy setup',
      features: ['User-friendly interface', 'EPG Support', 'Multi-screen']
    },
    {
      name: 'TiviMate',
      image: '/images/wp-content/uploads/2025/01/tivimate.webp',
      description: 'Advanced IPTV player for Android TV',
      features: ['Modern UI', 'Catch-up TV', 'Recording']
    },
    {
      name: 'VU Player Pro',
      image: '/images/wp-content/uploads/2025/01/vuplayerpro-300x264-1.png',
      description: 'Lightweight and fast IPTV player',
      features: ['Fast loading', 'Simple setup', 'Stable']
    }
  ];

  const steps = [
    {
      icon: Download,
      title: t.pages.installation.step1.title,
      description: t.pages.installation.step1.description
    },
    {
      icon: Settings,
      title: t.pages.installation.step2.title,
      description: t.pages.installation.step2.description
    },
    {
      icon: Play,
      title: t.pages.installation.step3.title,
      description: t.pages.installation.step3.description
    },
    {
      icon: CheckCircle,
      title: t.pages.installation.step4.title,
      description: t.pages.installation.step4.description
    }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a1a]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 via-[#0a0a1a] to-orange-900/30" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-6 py-2 mb-8">
              <Settings className="w-5 h-5 text-teal-400" />
              <span className="text-teal-300 font-medium">{t.pages.installation.subtitle}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              {t.pages.installation.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t.pages.installation.description}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Steps */}
      <section className="py-16 bg-[#0f0f23]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-center">
                <div className="flex-1 bg-[#1a1a2e] border border-gray-800 rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block w-6 h-6 text-teal-500 mx-2 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Devices */}
      <section className="py-20 bg-[#0a0a1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              {t.pages.installation.devicesTitle}
            </h2>
            <p className="text-gray-400 text-lg">{t.pages.installation.devicesSubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devices.map((device, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-[#1a1a2e] to-[#16162a] border border-gray-800 rounded-2xl p-6 hover:border-teal-500/50 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500/20 to-orange-500/20 rounded-xl flex items-center justify-center p-3 group-hover:scale-110 transition-transform">
                    <Image 
                      src={device.icon} 
                      alt={device.name}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{device.name}</h3>
                    <p className="text-gray-400 text-sm">{device.description}</p>
                  </div>
                </div>
                {device.anchorId && (
                  <a
                    href={`#${device.anchorId}`}
                    className="flex items-center text-teal-400 font-medium group-hover:text-orange-400"
                  >
                    <span>View Guide</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Apps */}
      <section className="py-20 bg-[#0f0f23]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              {t.pages.installation.appsTitle}
            </h2>
            <p className="text-gray-400 text-lg">{t.pages.installation.appsSubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {apps.map((app, index) => (
              <div 
                key={index}
                className="bg-[#1a1a2e] border border-gray-800 rounded-3xl p-8 text-center hover:border-teal-500/30 transition-all"
              >
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <Image 
                    src={app.image} 
                    alt={app.name}
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{app.name}</h3>
                <p className="text-gray-400 mb-6">{app.description}</p>
                <div className="space-y-2">
                  {app.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-teal-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed device guides */}
      <section className="py-20 bg-[#0a0a1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Step-by-step installation guides</h2>
            <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto">
              Follow these simple steps for your device. After you receive your IPTV line from us, just enter the
              username, password and server URL exactly as we send them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 text-gray-300 text-sm md:text-base">
            <div id="firestick-guide">
              <h3 className="text-xl font-semibold text-white mb-3">Amazon Firestick / Fire TV – IPTV Smarters Pro</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>From the Firestick home go to <strong>Find → Search</strong> and type “IPTV Smarters Pro”.</li>
                <li>Install the app and open it, then choose <strong>Login with Xtream Codes API</strong>.</li>
                <li>Enter the <strong>username, password and server URL</strong> that we send you.</li>
                <li>Click <strong>Add User</strong>, wait for channels to load and start watching.</li>
              </ol>
            </div>

            <div id="android-tv-guide">
              <h3 className="text-xl font-semibold text-white mb-3">Android TV / Android Box – TiviMate</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Open the <strong>Google Play Store</strong> on your Android TV / box.</li>
                <li>Search and install <strong>TiviMate IPTV Player</strong>.</li>
                <li>Open TiviMate → <strong>Add playlist</strong> → choose M3U or Xtream Codes.</li>
                <li>Paste the M3U link or Xtream details we provide and save.</li>
              </ol>
            </div>

            <div id="smart-tv-guide">
              <h3 className="text-xl font-semibold text-white mb-3">Samsung / LG / other Smart TV</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Open your TV&apos;s <strong>App Store</strong> (Samsung / LG Content Store).</li>
                <li>Install any IPTV player you like (Smart IPTV, Flix IPTV, DuplexPlay, etc.).</li>
                <li>Open the app and note the <strong>MAC address or Device ID</strong>.</li>
                <li>Send us that MAC / ID on WhatsApp so we can link your subscription.</li>
              </ol>
            </div>

            <div id="ios-guide">
              <h3 className="text-xl font-semibold text-white mb-3">iPhone / iPad / Apple TV</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Open the <strong>App Store</strong> and install an IPTV player (IPTV Smarters, GSE IPTV, etc.).</li>
                <li>Inside the app choose <strong>Add new playlist / Xtream Codes</strong>.</li>
                <li>Enter the IPTV username, password and server URL we send you and save.</li>
              </ol>
            </div>

            <div id="windows-guide">
              <h3 className="text-xl font-semibold text-white mb-3">Windows PC / Laptop</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Install <strong>VLC Media Player</strong> or any Windows IPTV app.</li>
                <li>In VLC go to <strong>Media → Open Network Stream</strong>.</li>
                <li>Paste your M3U URL and click <strong>Play</strong> to start streaming.</li>
              </ol>
            </div>

            <div id="mag-box-guide">
              <h3 className="text-xl font-semibold text-white mb-3">MAG Box (Portal URL)</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  On MAG go to <strong>Settings → System settings → Servers → Portals</strong> and open{' '}
                  <strong>Portal 1</strong>.
                </li>
                <li>Paste the <strong>portal URL</strong> we send you and give it any name (e.g. 4K Xtream IPTV).</li>
                <li>Save and reboot the box – the portal will load your channels and VOD.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Need Help */}
      <section className="py-20 bg-[#0a0a1a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-teal-500/10 to-orange-500/10 border border-teal-500/30 rounded-3xl p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 relative flex-shrink-0">
                <Image
                  src="/images/wp-content/uploads/2024/12/confident-caucasian-it-support-call-center-female-worker-in-headset-watching.jpg"
                  alt="Support"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {t.pages.installation.helpTitle}
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  {t.pages.installation.helpDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a 
                    href="https://wa.me/447845432224"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-teal-600 hover:to-teal-700 transition-all"
                  >
                    {t.pages.installation.helpWhatsApp}
                  </a>
                  <Link 
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
                  >
                    {t.pages.installation.helpContact}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
