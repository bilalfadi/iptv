'use client'

import { siteData } from '@/data/siteData'
import { Tv, Film, Sparkles, Globe, Smartphone, Zap } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

export default function Features() {
  const { t } = useLanguage()
  // Map features to real icons
  const iconMap: { [key: string]: any } = {
    '📺': Tv,
    '🎬': Film,
    '✨': Sparkles,
    '🌍': Globe,
    '📱': Smartphone,
    '⚡': Zap,
  }

  return (
    <section className="py-20 bg-[#050513] relative overflow-hidden">

      <div className="mx-auto w-full max-w-[1440px] px-3 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Content - Left Heading/Illustration + Right Text Blocks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side - Heading at Top, Ribbons Below */}
            <div className="flex flex-col">
              {/* Heading - Top Left */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
            {t.features.title}
          </h2>
              </div>
              
              {/* Modern Floating Icons Illustration - Below Heading */}
              <div className="flex items-center justify-center lg:justify-start mt-8">
                <div className="relative w-full max-w-md h-96">
                  {/* Floating Gradient Circles with Icons */}
                  <div className="relative w-full h-full">
                    {/* Circle 1 - Blue */}
                    <div className="absolute top-0 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Tv className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Circle 2 - Green */}
                    <div className="absolute top-16 right-0 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Film className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    
                    {/* Circle 3 - Purple */}
                    <div className="absolute top-32 left-0 w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Circle 4 - Pink */}
                    <div className="absolute bottom-20 right-1/4 w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Globe className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    
                    {/* Circle 5 - Orange (Featured) */}
                    <div className="absolute bottom-8 left-1/3 w-28 h-28 bg-gradient-to-br from-[#ff9500] to-orange-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300 ring-4 ring-orange-200">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Smartphone className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Circle 6 - Teal */}
                    <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
        </div>

                    {/* Connecting Lines (Optional decorative element) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                      <line x1="25%" y1="12%" x2="75%" y2="20%" stroke="#281a4e" strokeWidth="2" />
                      <line x1="12%" y1="35%" x2="30%" y2="85%" stroke="#281a4e" strokeWidth="2" />
                      <line x1="80%" y1="25%" x2="40%" y2="70%" stroke="#281a4e" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                  </div>
                </div>
                
            {/* Right Side - 2 Column Text Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.features.items.map((feature, index) => {
                return (
                  <div
                    key={index}
                    className="group"
                  >
                    {/* Heading */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#ff9500] transition-colors">
                  {feature.title}
                </h3>
                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            )
          })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

