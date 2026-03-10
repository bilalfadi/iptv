'use client'

import Image from 'next/image'
import { useLanguage } from './LanguageProvider'

// Smart4k + Kebit style movie posters grid
// Using all non‑WhatsApp movie posters from smart4k-home and Kebit “M” posters
const mainPosters = [
  { title: 'Blockbuster hits', src: '/smart4k-home/ccv.webp' },
  { title: 'Action & thrillers', src: '/smart4k-home/cdcsdsd.webp' },
  { title: 'Creed & boxing', src: '/smart4k-home/creed.webp' },
  { title: 'Drama & series', src: '/smart4k-home/csq.webp' },
  { title: 'Hollywood blockbusters', src: '/smart4k-home/cvfr.webp' },
  { title: 'Family & fun', src: '/smart4k-home/cvsss.webp' },
  { title: 'New releases', src: '/smart4k-home/re.webp' },
  { title: 'Shotgun Wedding', src: '/smart4k-home/shotgun-wedding.webp' },
  { title: 'Sci‑fi & dystopia', src: '/smart4k-home/silo-1.webp' },
  { title: 'Top rated movies', src: '/smart4k-home/tgfrde.webp' },
  { title: 'The Hunger Games', src: '/smart4k-home/the-hunger-games-the-ballad-of-songbirds-and-snakes-movie-poster-7011.webp' },
  { title: 'Thirteen Lives', src: '/smart4k-home/thirteen-lives-movie-poster-6992.webp' },
  { title: 'Featured highlight', src: '/smart4k-home/f08efb251bc41d0d476787989d9015ef.jpg' },
  // Kebit home “Popular Movies” big tiles (M1–M4, M6, k41–k44)
  { title: 'Popular M1', src: '/kebit-home/M1.jpg' },
  { title: 'Popular M2', src: '/kebit-home/M2.jpg' },
  { title: 'Popular M3', src: '/kebit-home/M3.jpg' },
  { title: 'Popular M4', src: '/kebit-home/M4.jpg' },
  { title: 'Popular M6', src: '/kebit-home/M6.webp' },
  { title: 'Popular K41', src: '/kebit-home/k41.webp' },
  { title: 'Popular K42', src: '/kebit-home/k42.webp' },
  { title: 'Popular K43', src: '/kebit-home/k43.webp' },
  { title: 'Popular K44', src: '/kebit-home/k44.webp' },
]

// Smart4k second row small 16:9 thumbs + OTT logos
const movieLogos = [
  { title: 'Preview 6', src: '/smart4k-home/6-300x169.webp' },
  { title: 'Preview 7', src: '/smart4k-home/7-300x169.webp' },
  { title: 'Preview 8', src: '/smart4k-home/8-300x169.webp' },
  { title: 'Preview 9', src: '/smart4k-home/9-300x169.webp' },
  { title: 'Preview 10', src: '/smart4k-home/10-300x169.webp' },
  { title: 'Preview 11', src: '/smart4k-home/11-300x169.webp' },
  { title: 'Preview 12', src: '/smart4k-home/12-300x169.webp' },
  { title: 'Prime Video', src: '/smart4k-home/24-245711_amazon-prime-instant-video-logo-png-amazon-prime-1-300x104.png' },
  { title: 'Brand 13', src: '/smart4k-home/brand_item13-150x46-1-1.webp' },
  { title: 'Brand 14', src: '/smart4k-home/brand_item14-150x46-1-1.webp' },
  { title: 'Brand 15', src: '/smart4k-home/brand_item15-150x46-1-1.webp' },
  { title: 'Brand 16', src: '/smart4k-home/brand_item16-150x46-1-1.webp' },
  { title: 'Brand 17', src: '/smart4k-home/brand_item17-150x46-1-1.webp' },
]

export default function MoviesShowcase() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-gradient-to-b from-[#050513] via-[#050513] to-[#080c24]">
      <div className="mx-auto w-full max-w-[1440px] px-3 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-teal-400 text-sm font-semibold tracking-wide mb-2">
              {t.home.movies.badge}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {t.home.movies.title}
            </h2>
            <p className="text-gray-300 max-w-2xl text-sm md:text-base">
              {t.home.movies.description}
            </p>
          </div>
        </div>

        {/* Horizontal modern carousel style, duplicating list for infinite scroll effect */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#050513] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#050513] to-transparent" />

          <div className="flex gap-6 md:gap-7 animate-[movies-scroll_35s_linear_infinite] hover:[animation-play-state:paused]">
            {[...mainPosters, ...mainPosters].map((item) => (
              <div
                key={`${item.title}-${item.src}`}
                className="flex-shrink-0 w-[180px] md:w-[220px] lg:w-[240px] group rounded-3xl overflow-hidden bg-gradient-to-b from-white/10 via-black to-black border border-white/15 shadow-xl shadow-black/40 hover:border-teal-400/80 hover:shadow-teal-500/40 transition-all duration-300"
              >
                <div className="relative w-full aspect-[2/3]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 210px, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="px-2 py-2">
                  <p className="text-[11px] md:text-xs font-semibold text-white line-clamp-2">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second row: small 16:9 thumbs and OTT logos like Smart4k */}
        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#050513] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#050513] to-transparent" />

          <div className="flex gap-4 md:gap-5 animate-[movies-scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
            {[...movieLogos, ...movieLogos].map((item, idx) => (
              <div
                key={`${item.title}-${idx}`}
                className="flex-shrink-0 w-[170px] md:w-[190px] lg:w-[210px] rounded-2xl overflow-hidden bg-white/5/80 border border-white/10 backdrop-blur-sm"
              >
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 160px, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

