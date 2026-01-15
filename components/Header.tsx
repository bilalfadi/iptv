'use client'

import { useState } from 'react'
import { Menu, X, Mail, Clock, Headphones } from 'lucide-react'
import { siteData } from '@/data/siteData'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from './LanguageProvider'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      {/* Top Bar with Gradient (Teal to Orange) */}
      <div className="bg-gradient-to-r from-teal-500 via-teal-400 to-orange-500 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Always Here To Assist You</span>
            </div>
            <a href={`mailto:${siteData.company.email}`} className="flex items-center gap-2 hover:underline transition">
              <Mail size={16} />
              <span>{siteData.company.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            {/* Social Media Icons */}
            <a href="https://wa.me/447845432224" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.98 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
            <a href="#" className="hover:scale-110 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="hover:scale-110 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                <path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/>
              </svg>
            </a>
            <a href="#" className="hover:scale-110 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4 bg-white">
        <div className="flex items-center justify-between">
          {/* Logo from WordPress */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="4K Xtream IPTV Logo"
              width={150}
              height={43}
              className="h-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`font-medium transition-colors text-[#ff9500]`}
            >
              {t.nav.home.toUpperCase()}
            </Link>
            <Link
              href="/iptv-trial"
              className="font-medium transition-colors text-gray-800 hover:text-[#ff9500]"
            >
              {t.nav.iptvTrial.toUpperCase()}
            </Link>
            <Link
              href="/installation-tutorial"
              className="font-medium transition-colors text-gray-800 hover:text-[#ff9500]"
            >
              {t.nav.installationTutorial.toUpperCase()}
            </Link>
            <Link
              href="/pricing"
              className="font-medium transition-colors text-gray-800 hover:text-[#ff9500]"
            >
              {t.nav.pricing.toUpperCase()}
            </Link>
          </div>

          {/* Help Line with Icon */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-full p-2 shadow-md">
                <Headphones className="text-[#ff9500]" size={20} />
              </div>
              <div>
                <div className="text-xs text-gray-600 font-medium">Help line</div>
                <a href={`tel:${siteData.company.phone}`} className="text-sm font-bold text-gray-800 hover:text-[#ff9500] transition">
                  {siteData.company.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} className="text-[#ff9500]" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              href="/"
              className="block font-medium transition-colors text-[#ff9500]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.home.toUpperCase()}
            </Link>
            <Link
              href="/iptv-trial"
              className="block font-medium transition-colors text-gray-800 hover:text-[#ff9500]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.iptvTrial.toUpperCase()}
            </Link>
            <Link
              href="/installation-tutorial"
              className="block font-medium transition-colors text-gray-800 hover:text-[#ff9500]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.installationTutorial.toUpperCase()}
            </Link>
            <Link
              href="/pricing"
              className="block font-medium transition-colors text-gray-800 hover:text-[#ff9500]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.pricing.toUpperCase()}
            </Link>
            <div className="bg-[#ff9500] text-white px-4 py-2 rounded-lg mt-4">
              <div className="text-xs font-semibold">Help line</div>
              <a href={`tel:${siteData.company.phone}`} className="text-sm font-bold">
                {siteData.company.phone}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

