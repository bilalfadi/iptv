'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { siteData } from '@/data/siteData'
import { useLanguage } from './LanguageProvider'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { t } = useLanguage()

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 bg-[#050513]">
      <div className="mx-auto w-full max-w-[1440px] px-3 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.faq.title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {t.faq.items.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/15 rounded-lg overflow-hidden"
              >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-white pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180 text-[#ff9500]' : 'text-gray-600'
                  }`}
                  size={20}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-white/5 border-t border-white/10">
                  <p className="text-gray-200 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-lg text-gray-300 mb-4">{t.faq.contactText}</p>
          <a
            href={`tel:${siteData.company.phone}`}
            className="inline-block bg-[#ff9500] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#ff8533] transition-colors"
          >
            {t.faq.contactButton}
          </a>
        </div>
      </div>
    </section>
  )
}

