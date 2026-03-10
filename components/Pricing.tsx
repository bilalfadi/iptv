'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { siteData } from '@/data/siteData'
import { useLanguage } from './LanguageProvider'

type ConnectionsTab = '1' | '2' | '3' | 'all'

export default function Pricing() {
  const [activeConnections, setActiveConnections] = useState<ConnectionsTab>('1')
  const { t } = useLanguage()

  const basePlans = siteData.pricing.singleDevice

  const getPlansForConnections = (connections: ConnectionsTab) => {
    if (connections === '1' || connections === 'all') return basePlans

    const multiplier = connections === '2' ? 2 : 3
    const discount = connections === '2' ? 0.3 : 0.5

    return basePlans.map((plan: any) => {
      const newPrice = +(plan.price * multiplier * (1 - discount)).toFixed(2)
      const originalPrice =
        plan.originalPrice && typeof plan.originalPrice === 'number'
          ? +(plan.originalPrice * multiplier).toFixed(2)
          : null

      return {
        ...plan,
        price: newPrice,
        originalPrice,
      }
    })
  }

  const displayedPlans = getPlansForConnections(activeConnections)

  return (
    <section id="pricing" className="py-16 bg-[#050513]">
      <div className="mx-auto w-full max-w-[1440px] px-3 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t.pricing.description}
          </p>
        </div>

        {/* Connections buttons – Sonix-style (1 / 2 / 3 devices + Show All) */}
        <div className="flex justify-center mb-10">
          <div className="bg-white/10 p-1 rounded-lg inline-flex gap-1">
            <button
              onClick={() => setActiveConnections('1')}
              className={`px-5 py-2 rounded-md font-medium text-xs md:text-sm transition-colors ${
                activeConnections === '1'
                  ? 'bg-[#ff9500] text-white'
                  : 'text-gray-300 hover:text-[#ff9500]'
              }`}
            >
              1 Device
            </button>
            <button
              onClick={() => setActiveConnections('2')}
              className={`px-5 py-2 rounded-md font-medium text-xs md:text-sm transition-colors ${
                activeConnections === '2'
                  ? 'bg-[#ff9500] text-white'
                  : 'text-gray-300 hover:text-[#ff9500]'
              }`}
            >
              2 Devices – 30% OFF
            </button>
            <button
              onClick={() => setActiveConnections('3')}
              className={`px-5 py-2 rounded-md font-medium text-xs md:text-sm transition-colors ${
                activeConnections === '3'
                  ? 'bg-[#ff9500] text-white'
                  : 'text-gray-300 hover:text-[#ff9500]'
              }`}
            >
              3 Devices – 50% OFF
            </button>
            <button
              onClick={() => setActiveConnections('all')}
              className={`px-5 py-2 rounded-md font-medium text-xs md:text-sm transition-colors ${
                activeConnections === 'all'
                  ? 'bg-[#ff9500] text-white'
                  : 'text-gray-300 hover:text-[#ff9500]'
              }`}
            >
              Show All Plans
            </button>
          </div>
        </div>

        {/* Pricing Cards - Simple */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedPlans.map((plan: any, index: number) => (
            <div
              key={index}
              className={`bg-white/5 rounded-lg border-2 p-6 ${
                plan.popular 
                  ? 'border-[#ff9500]' 
                  : 'border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="bg-[#ff9500] text-white px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
                  {t.pricing.recommended}
                </div>
              )}
              
              <div className="text-center mb-6 pb-6 border-b border-white/20">
                <div className="text-sm text-gray-300 mb-2 font-medium">{plan.duration}</div>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold text-[#ff9500]">
                    ${plan.price}
                  </span>
                </div>
                {'originalPrice' in plan && plan.originalPrice && (
                  <div className="text-lg text-gray-400 line-through">
                    ${plan.originalPrice}
                  </div>
                )}
                {activeConnections !== '1' && (
                  <div className="mt-3 inline-block bg-[#ff9500]/10 text-[#ff9500] px-3 py-1 rounded-full text-sm font-semibold">
                    {activeConnections === '2'
                      ? '2 Connections – approx. 30% OFF'
                      : '3 Connections – approx. 50% OFF'}
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="text-green-400 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-200 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {'guarantee' in plan && plan.guarantee && (
                <div className="text-center text-xs text-gray-300 mb-4 bg-white/5 py  -2 px-3 rounded">
                  {t.pricing.guarantee}
                </div>
              )}

              <a 
                href={`https://wa.me/447845432224?text=Hi,%20I%20want%20to%20subscribe%20to%20the%20${plan.duration}%20plan%20($${plan.price})`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#ff9500] text-white py-3 rounded-lg font-semibold hover:bg-[#ff8533] transition-colors text-center"
              >
                {t.pricing.buyNow}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

