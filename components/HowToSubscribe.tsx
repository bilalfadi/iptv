'use client'

import { Mail, Settings, Monitor } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

export default function HowToSubscribe() {
  const { t } = useLanguage()
  // Icons for each step - matching image
  const stepIcons = [Mail, Settings, Monitor]

  const steps = [
    {
      number: '1',
      title: t.howToSubscribe.step1.title,
      description: t.howToSubscribe.step1.description,
    },
    {
      number: '2',
      title: t.howToSubscribe.step2.title,
      description: t.howToSubscribe.step2.description,
    },
    {
      number: '3',
      title: t.howToSubscribe.step3.title,
      description: t.howToSubscribe.step3.description,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#281a4e] via-[#2d1f5a] to-[#3d2a6b] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header - Centered */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t.howToSubscribe.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.howToSubscribe.subtitle}
          </p>
        </div>

        {/* Three Columns - Matching Image Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = stepIcons[index] || Mail
            
            return (
              <div
                key={index}
                className="text-center flex flex-col items-center"
              >
                {/* Orange Circular Icon */}
                <div className="mb-6">
                  <div className="w-24 h-24 bg-[#ff9500] rounded-full flex items-center justify-center shadow-xl">
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                {/* Step Number and Title in same line */}
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white inline-flex items-center gap-2">
                    <span className="text-2xl md:text-3xl font-bold text-white">{step.number}.</span>
                    {step.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-200 leading-relaxed text-base max-w-sm">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
