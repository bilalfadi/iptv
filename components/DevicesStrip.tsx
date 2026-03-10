'use client'

import Image from 'next/image'
import { useLanguage } from './LanguageProvider'

const devices = [
  // Smart4k-style clean device icons (SVG logos)
  { name: 'Android', src: '/smart4k-home/Android-1.svg' },
  { name: 'Android TV', src: '/smart4k-home/AndroidTV.svg' },
  { name: 'Apple', src: '/smart4k-home/Apple.svg' },
  { name: 'Smart TV', src: '/smart4k-home/Samsung.svg' },
  { name: 'Streaming Box', src: '/smart4k-home/Boitier-IPTV.svg' },
  { name: 'Chromecast', src: '/smart4k-home/Chromecast.svg' },
  { name: 'MAG / Decoder', src: '/smart4k-home/Decoder-IPTV.svg' },
  { name: 'LG TV', src: '/smart4k-home/LG.svg' },
  { name: 'Mac & PC', src: '/smart4k-home/MAC-PC.svg' },
  { name: 'Roku', src: '/smart4k-home/Roku.svg' },
  { name: 'Xbox', src: '/smart4k-home/xBox.svg' },
]

export default function DevicesStrip() {
  const { t } = useLanguage()

  return (
    <section id="devices" className="py-16 bg-[#050513] border-t border-white/5">
      <div className="mx-auto w-full max-w-[1440px] px-3 md:px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-4">
          {t.home.devices.title}
        </h2>
        <p className="text-center text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-10">
          {t.home.devices.subtitle}
        </p>

        {/* Static grid – show all devices at once, no slider */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
          {devices.map((device) => (
            <div
              key={device.name}
              className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
            >
              <div className="relative w-12 h-10 md:w-14 md:h-12">
                <Image
                  src={device.src}
                  alt={device.name}
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
              <p className="text-[11px] md:text-xs text-gray-200 text-center">{device.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
