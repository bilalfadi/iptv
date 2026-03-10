'use client'

import Image from 'next/image'
import { useLanguage } from './LanguageProvider'

const previews = [
  // Kebit “Stream from Anywhere” style device/app photos
  { title: 'Stream from phone & tablet', src: '/kebit-home/1.jpg' },
  { title: 'Watch on Smart TV', src: '/kebit-home/2.jpg' },
  { title: 'Laptop & desktop view', src: '/kebit-home/3.jpg' },
  { title: 'Multi‑device setup', src: '/kebit-home/4.jpg' },
]

export default function LivePreview() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-[#050513]">
      <div className="mx-auto w-full max-w-[1440px] px-3 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <p className="text-teal-400 text-sm font-semibold tracking-wide mb-2">
              {t.home.livePreview.badge}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {t.home.livePreview.title}
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              {t.home.livePreview.description}
            </p>
          </div>
        </div>

        {/* Carousel style row to show all Kebit device screenshots */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#050513] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#050513] to-transparent" />

          <div className="flex gap-5 md:gap-6 lg:gap-7 animate-[preview-strip_30s_linear_infinite] hover:[animation-play-state:paused]">
            {[...previews, ...previews].map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="flex-shrink-0 w-[220px] md:w-[260px] lg:w-[300px] group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-teal-400/70 transition-all"
              >
                {/* Bigger/taller card so full screenshots are clearly visible */}
                <div className="relative w-full h-60 md:h-80 lg:h-96">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 360px, 90vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <p className="absolute bottom-3 left-3 right-3 text-xs md:text-sm font-semibold text-white drop-shadow">
                    {item.title}
                  </p>
                  {index === 0 && (
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/60 text-[10px] font-medium text-emerald-200">
                      4K Ready
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

