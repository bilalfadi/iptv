'use client'

import { ArrowRight, MessageCircle, Play, Tv, Film, Star, Check, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from './LanguageProvider'

export default function Hero() {
  const { t } = useLanguage()
  const features = [
    { icon: Tv, text: '30,000+ Channels' },
    { icon: Film, text: '200,000+ Movies' },
    { icon: Star, text: '4K Quality' },
  ]

  return (
    <section id="home" className="pt-28 md:pt-32 pb-20 min-h-screen relative overflow-hidden flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 bg-[#0a0a1a]">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-teal-500/30 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-orange-500/25 rounded-full blur-[120px] translate-x-1/3" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxNDE0MjgiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSIjMWYxZjM4IiBmaWxsLW9wYWNpdHk9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-40" />
      </div>
      
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-3 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/20 to-orange-500/20 border border-teal-500/30 rounded-full px-5 py-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Zap className="w-4 h-4 text-teal-400" />
              <span className="text-teal-300 text-sm font-medium">{t.hero.badge}</span>
            </motion.div>
            
            {/* Main Title */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t.hero.title}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400">
                {t.hero.titleHighlight}
              </span>{' '}
              {t.hero.titleEnd}
            </motion.h1>
            
            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.hero.description}
            </motion.p>
            
            {/* Features */}
            <motion.div
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
                >
                  <feature.icon className="w-5 h-5 text-teal-400" />
                  <span className="text-white text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/iptv-trial"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-teal-600 hover:to-teal-700 hover:shadow-2xl hover:shadow-teal-500/30 transition-all hover:scale-105"
              >
                <Play className="w-5 h-5" />
                {t.hero.startTrial}
              </Link>
              <Link
                href="/pricing"
                className="group inline-flex items-center justify-center gap-3 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all"
              >
                {t.hero.viewPlans}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

          </div>
          
          {/* Right Content - Mixed collage using 3 main posters */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative max-w-[720px] mx-auto">
              {/* Glow behind collage */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/40 to-orange-500/40 rounded-3xl blur-3xl scale-95" />

              {/* Collage built from the 3 main posters we downloaded */}
              <div className="relative grid grid-cols-2 gap-3 rounded-3xl shadow-2xl border border-gray-700/50 bg-black/60 p-3">
                {/* Top: big sports banner spanning both columns */}
                <div className="relative rounded-2xl overflow-hidden col-span-2">
                  <div className="relative aspect-video">
                    <Image
                      src="/images/sports/hero-sports.webp"
                      alt="Live sports in 4K"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Bottom left: movies & series poster wall */}
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src="/images/app-preview/poster-grid.webp"
                      alt="Movies & series poster wall"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Bottom right: Arabic & international poster */}
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src="/images/movies/arabic-iptv.webp"
                      alt="Arabic & international IPTV channels"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-4 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <Tv className="w-6 h-6 text-white" />
                  <div>
                    <p className="text-white font-bold text-lg">30,000+</p>
                    <p className="text-white/80 text-xs">Live Channels</p>
                  </div>
                </div>
              </motion.div>
              
              
              <motion.div 
                className="absolute -top-4 -left-4 bg-white rounded-xl p-3 shadow-xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-sm">4K Ultra HD</p>
                    <p className="text-gray-500 text-xs">Crystal Clear</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/447845432224"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all"
        aria-label="WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageCircle size={28} fill="currentColor" />
      </motion.a>
    </section>
  )
}
