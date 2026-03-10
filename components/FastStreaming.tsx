'use client'

import { useState } from 'react'
import { Zap } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

export default function FastStreaming() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<'upgrade' | 'iptv' | 'benefits' | 'guide'>('upgrade')

  const tabs = [
    { id: 'upgrade', label: t.fastStreaming.tabs.upgrade },
    { id: 'iptv', label: t.fastStreaming.tabs.iptv },
    { id: 'benefits', label: t.fastStreaming.tabs.benefits },
    { id: 'guide', label: t.fastStreaming.tabs.guide },
  ]

  const tabContent = {
    upgrade: {
      title: t.fastStreaming.content.upgrade.title,
      description: t.fastStreaming.content.upgrade.description
    },
    iptv: {
      title: t.fastStreaming.content.iptv.title,
      description: t.fastStreaming.content.iptv.description
    },
    benefits: {
      title: t.fastStreaming.content.benefits.title,
      description: t.fastStreaming.content.benefits.description
    },
    guide: {
      title: t.fastStreaming.content.guide.title,
      description: t.fastStreaming.content.guide.description
    }
  }

  return (
    <section className="py-16 bg-[#050513]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Zap size={40} className="text-[#ff9500]" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t.fastStreaming.title}
            </h2>
          </div>
          <p className="text-lg text-gray-300">
            {t.fastStreaming.subtitle}
          </p>
        </div>

        {/* Simple Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 p-1 rounded-lg inline-flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-2 rounded-md font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#ff9500] text-white'
                    : 'text-gray-300 hover:text-[#ff9500]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Simple Content Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 p-8 rounded-lg border border-white/15">
            <h3 className="text-2xl font-bold text-white mb-4">
              {tabContent[activeTab].title}
            </h3>
            <p className="text-gray-200 leading-relaxed">
              {tabContent[activeTab].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
