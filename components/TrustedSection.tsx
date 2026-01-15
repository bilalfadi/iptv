'use client'

import { Star } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from './LanguageProvider'

export default function TrustedSection() {
  const { t } = useLanguage()
  const reviews = [
    { name: "John D.", review: "Best IPTV service I've ever used! Crystal clear quality." },
    { name: "Sarah M.", review: "Amazing channel selection and no buffering issues." },
    { name: "Mike T.", review: "Great value for money. Highly recommended!" },
  ]

  return (
    <section className="py-20 bg-[#0f0f23]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Simple Header */}
          <div className="text-center mb-14">
            <p className="text-teal-400 font-medium mb-3">{t.trusted.subtitle}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t.trusted.title}
            </h2>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {reviews.map((item, index) => (
              <div
                key={index}
                className="bg-[#1a1a2e] rounded-xl p-6 border border-gray-800"
              >
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{item.review}"</p>
                <p className="text-white font-medium">— {item.name}</p>
              </div>
            ))}
          </div>

          {/* Simple CTA */}
          <div className="text-center">
            <p className="text-gray-400 mb-4">Starting from just <span className="text-white font-bold">$13.99/mo</span></p>
            <Link
              href="/iptv-trial"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-3 rounded-lg transition-colors"
            >
              {t.hero.startTrial}
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
