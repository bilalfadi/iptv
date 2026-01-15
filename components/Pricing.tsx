'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { siteData } from '@/data/siteData'
import { useLanguage } from './LanguageProvider'

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<'single' | 'family'>('single')
  const { t } = useLanguage()

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.pricing.description}
          </p>
        </div>

        {/* Tab Switcher - Simple */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex gap-1">
            <button
              onClick={() => setActiveTab('single')}
              className={`px-6 py-2 rounded-md font-medium text-sm transition-colors ${
                activeTab === 'single'
                  ? 'bg-[#ff9500] text-white'
                  : 'text-gray-700 hover:text-[#ff9500]'
              }`}
            >
              {t.pricing.singleDevice}
            </button>
            <button
              onClick={() => setActiveTab('family')}
              className={`px-6 py-2 rounded-md font-medium text-sm transition-colors ${
                activeTab === 'family'
                  ? 'bg-[#ff9500] text-white'
                  : 'text-gray-700 hover:text-[#ff9500]'
              }`}
            >
              {t.pricing.familyPackage}
            </button>
          </div>
        </div>

        {/* Pricing Cards - Simple */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(activeTab === 'single' ? siteData.pricing.singleDevice : siteData.pricing.familyPackage).map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg border-2 p-6 ${
                plan.popular 
                  ? 'border-[#ff9500]' 
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="bg-[#ff9500] text-white px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
                  {t.pricing.recommended}
                </div>
              )}
              
              <div className="text-center mb-6 pb-6 border-b border-gray-200">
                <div className="text-sm text-gray-500 mb-2 font-medium">{plan.duration}</div>
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
                {'screens' in plan && plan.screens && (
                  <div className="mt-3 inline-block bg-[#ff9500]/10 text-[#ff9500] px-3 py-1 rounded-full text-sm font-semibold">
                    Duo ({plan.screens} {t.pricing.screens})
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {'guarantee' in plan && plan.guarantee && (
                <div className="text-center text-xs text-gray-500 mb-4 bg-gray-50 py-2 px-3 rounded">
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

