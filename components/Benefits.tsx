'use client'

import { siteData } from '@/data/siteData'
import { DollarSign, Users, Lock, Mail, MessageCircle, Film, Radio, Palette, Smartphone, Rocket, Tv, Globe, LifeBuoy, Sparkles, Star } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

export default function Benefits() {
  const { t } = useLanguage()
  // Map benefits to real icons - same pattern as Features
  const iconMap: { [key: string]: any } = {
    '💰': DollarSign,
    '👥': Users,
    '🔒': Lock,
    '📧': Mail,
    '💬': MessageCircle,
    '🎥': Film,
    '💵': DollarSign,
    '📡': Radio,
    '🎨': Palette,
    '📲': Smartphone,
    '🚀': Rocket,
    '📺': Tv,
    '🌐': Globe,
    '🛟': LifeBuoy,
    '✨': Sparkles,
  }

  // Color schemes matching image - dark, light purple, white, green, etc.
  const cardConfigs = [
    { bg: 'bg-gray-900', text: 'text-white', starColor: 'text-purple-400' },
    { bg: 'bg-purple-100', text: 'text-gray-900', starColor: 'text-white' },
    { bg: 'bg-white', text: 'text-gray-900', starColor: 'text-purple-500' },
    { bg: 'bg-green-100', text: 'text-gray-900', starColor: 'text-gray-900' },
    { bg: 'bg-gray-50', text: 'text-gray-900', starColor: 'text-purple-500' },
    { bg: 'bg-white', text: 'text-gray-900', starColor: 'text-purple-500' },
    { bg: 'bg-orange-50', text: 'text-gray-900', starColor: 'text-orange-500' },
    { bg: 'bg-blue-50', text: 'text-gray-900', starColor: 'text-blue-500' },
    { bg: 'bg-pink-50', text: 'text-gray-900', starColor: 'text-pink-500' },
    { bg: 'bg-yellow-50', text: 'text-gray-900', starColor: 'text-yellow-600' },
    { bg: 'bg-cyan-50', text: 'text-gray-900', starColor: 'text-cyan-500' },
    { bg: 'bg-indigo-50', text: 'text-gray-900', starColor: 'text-indigo-500' },
    { bg: 'bg-teal-50', text: 'text-gray-900', starColor: 'text-teal-500' },
    { bg: 'bg-violet-50', text: 'text-gray-900', starColor: 'text-violet-500' },
    { bg: 'bg-rose-50', text: 'text-gray-900', starColor: 'text-rose-500' },
  ]

  return (
    <section className="py-20 bg-[#050513]">
      <div className="container mx-auto px-4">
        {/* Header - Centered */}
        <div className="text-center mb-16">
          <p className="text-teal-300 text-lg mb-2">{t.benefits.subtitle}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.benefits.title}
          </h2>
        </div>

        {/* Overlapping Cards Container */}
        <div className="relative max-w-6xl mx-auto flex items-center justify-center" style={{ minHeight: '800px' }}>
          <div className="relative w-full" style={{ height: '800px' }}>
            {t.benefits.items.map((benefit, index) => {
              // Map benefit index to icon (using original siteData for icons)
              const originalBenefit = siteData.benefits[index]
              const IconComponent = originalBenefit ? iconMap[originalBenefit.icon] || Tv : Tv
              const config = cardConfigs[index % cardConfigs.length]
              
              // Generate positions for all cards - scattered overlapping layout
              const generatePosition = (idx: number) => {
                const row = Math.floor(idx / 5)
                const col = idx % 5
                const topBase = 5 + (row * 30)
                const leftBase = 5 + (col * 20)
                const rotate = (idx % 7 - 3) * 2 // Vary rotation between -6 to 6 degrees
                
                return {
                  top: `${topBase + (idx % 3) * 5}%`,
                  left: `${leftBase + (idx % 2) * 3}%`,
                  rotate: `${rotate}deg`
                }
              }
              
              const pos = generatePosition(index)
              
              return (
            <div
              key={index}
                  className={`absolute ${config.bg} ${config.text} rounded-xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                  style={{ 
                    top: pos.top,
                    left: pos.left,
                    transform: `rotate(${pos.rotate})`,
                    transformOrigin: 'center',
                    width: '280px',
                    maxWidth: '90%',
                    zIndex: index + 10
                  }}
                >
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${config.starColor} fill-current`} />
                    ))}
                </div>
                  
                  {/* Icon */}
                  <div className="mb-3">
                    <IconComponent className="w-6 h-6" />
              </div>
              
              {/* Content */}
                  <h3 className="text-lg font-bold mb-2">
                {benefit.title}
              </h3>
                  <p className="text-sm leading-relaxed opacity-90 line-clamp-3">
                {benefit.description}
              </p>
            </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

