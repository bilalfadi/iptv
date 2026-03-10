'use client'

import Image from 'next/image'
import { useLanguage } from './LanguageProvider'

// Smart4k homepage style sports / channels strip (use all sports thumbs exactly like homepage)
const sportsBanners = [
  { title: 'Football & Champions League', src: '/smart4k-home/1-1.webp' },
  { title: 'European football', src: '/smart4k-home/2-1.webp' },
  { title: 'Sports channels mix', src: '/smart4k-home/2-65633d6e9e1ac.webp' },
  { title: 'Premier events', src: '/smart4k-home/3-1.webp' },
  { title: 'Big match nights', src: '/smart4k-home/4-1-1-1.webp' },
  { title: 'Derby days', src: '/smart4k-home/5-1.webp' },
  { title: 'Stadium atmosphere', src: '/smart4k-home/6-1.webp' },
  { title: 'Sports graphic', src: '/smart4k-home/6-2.png' },
  { title: 'Championship nights', src: '/smart4k-home/8_1.webp' },
  { title: 'Sports highlight 1', src: '/smart4k-home/9-1.webp' },
  { title: 'Sports highlight 2', src: '/smart4k-home/9-1-65633d5b41009.webp' },
  { title: 'Sports highlight 3', src: '/smart4k-home/12-2-65633daf333c4.webp' },
  { title: 'Big tournaments', src: '/smart4k-home/16-1-65633d5f08163.webp' },
  { title: 'Euro 2024', src: '/smart4k-home/Euro2024.webp' },
]

// Smart4k homepage second sports carousel – real match/event posters
const sportsEvents = [
  { title: 'Event highlight 1', src: '/smart4k-home/1a8f185cd4fb8b605c1383eb56d31afd-e1740275078475.jpg' },
  { title: 'Event highlight 2', src: '/smart4k-home/8c777a1ab1f93c1026288ec58aa3f6df-e1740273906877.jpg' },
  { title: 'Event highlight 3', src: '/smart4k-home/498b3b592393becc35101c46e69b3ae6-e1740275010931.jpg' },
  { title: 'Event highlight 4', src: '/smart4k-home/58599df149be96d8cf82bdd88ad8d0a4-e1740275089674.jpg' },
  { title: 'Event highlight 5', src: '/smart4k-home/92359dd3a9f2de27aa0f7c7bd001c441-e1740273685341.jpg' },
  { title: 'Event highlight 6', src: '/smart4k-home/b5d7a1ec76153a443572ec7f31a881d5-e1740273572133.jpg' },
  { title: 'Event highlight 7', src: '/smart4k-home/cd7543d17c9266a24e5fc720caac6a8a-e1740274331646.jpg' },
  { title: 'Event highlight 8', src: '/smart4k-home/d74a49ded912d9fa72476f1a5ac7d94b.jpg' },
  { title: 'Event highlight 9', src: '/smart4k-home/f08efb251bc41d0d476787989d9015ef.jpg' },
  { title: 'Event highlight 10', src: '/smart4k-home/f20807bdf9022b5b050491396b46f55b-e1740274102751.jpg' },
  { title: 'Event highlight 11', src: '/smart4k-home/ffe5e3900aa040ba76c93899bb05f9db-e1740275059710.jpg' },
]

export default function SportsShowcase() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-gradient-to-b from-[#050513] to-[#0a0a1a]">
      <div className="mx-auto w-full max-w-[1440px] px-3 md:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <p className="text-teal-400 text-sm font-semibold tracking-wide mb-2">
              {t.home.sports.badge}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {t.home.sports.title}
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              {t.home.sports.description}
            </p>
          </div>
          {/* Top: compact horizontal strip of logos/badges – Smart4k style (wide 16:9 thumbs) */}
          <div className="w-full overflow-hidden">
            <div className="flex gap-5 md:gap-6 animate-[sports-strip_28s_linear_infinite] hover:[animation-play-state:paused]">
              {[...sportsBanners, ...sportsBanners].map((item, idx) => (
                <div
                  key={`${item.title}-${idx}`}
                  className="flex-shrink-0 w-[180px] md:w-[220px] lg:w-[240px]"
                >
                  <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 170px, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main sports banner carousel – single prominent row like Smart4k (event posters) */}
        <div className="relative mt-8 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#050513] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#050513] to-transparent" />

          <div className="flex gap-5 md:gap-6 animate-[sports-main_30s_linear_infinite] hover:[animation-play-state:paused]">
            {[...sportsEvents, ...sportsEvents].map((item, idx) => (
              <div
                key={`${item.title}-event-${idx}`}
                className="flex-shrink-0 w-[180px] md:w-[220px] lg:w-[240px] group rounded-[30px] overflow-hidden bg-[#05091f] border border-white/10 shadow-lg shadow-black/40"
              >
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 230px, 60vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

