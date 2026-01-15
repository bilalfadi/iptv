'use client'

import { Phone, Mail } from 'lucide-react'
import { siteData } from '@/data/siteData'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from './LanguageProvider'

export default function Footer() {
  const { language, setLanguage, t } = useLanguage()
  
  const languageMap: { [key: string]: 'en' | 'de' | 'tr' } = {
    'English': 'en',
    'Deutsch (German)': 'de',
    'Türkçe (Turkish)': 'tr',
  }
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.footer.aboutUs}</h3>
            <p className="text-gray-400 leading-relaxed">
              {siteData.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {siteData.footer.quickLinks.map((link, index) => {
                const linkMap: { [key: string]: string } = {
                  'Installation Tutorial': '/installation-tutorial',
                  'Pricing': '/pricing',
                  'FAQs': '/faqs',
                  'Contact Us': '/contact-us'
                }
                const href = linkMap[link] || `#${link.toLowerCase().replace(/\s+/g, '-')}`
                return (
                  <li key={index}>
                    <Link
                      href={href}
                      className="text-gray-400 hover:text-[#ff9500] transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.footer.information}</h3>
            <ul className="space-y-2">
              {siteData.footer.information.map((info, index) => {
                const linkMap: { [key: string]: string } = {
                  'IPTV Trial': '/iptv-trial',
                  'IPTV Reseller': '/iptv-reseller',
                  'Our Blog': '/blog',
                  'Refund Policy': '/refund-policy',
                  'Privacy Policy': '/privacy-policy',
                  'Terms of Use': '/terms-of-use',
                  'DMCA Policy': '/dmca-policy-for-iptv-tv'
                }
                const href = linkMap[info] || `#${info.toLowerCase().replace(/\s+/g, '-')}`
                return (
                  <li key={index}>
                    <Link
                      href={href}
                      className="text-gray-400 hover:text-[#ff9500] transition-colors"
                    >
                      {info}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold mb-2">{t.footer.technicalSupport}</h4>
              <div className="flex flex-col md:flex-row gap-4 text-gray-400">
                <a
                  href={`tel:${siteData.company.phone}`}
                  className="flex items-center gap-2 hover:text-[#ff9500] transition"
                >
                  <Phone size={16} />
                  <span>{siteData.company.phone}</span>
                </a>
                <a
                  href={`mailto:${siteData.company.supportEmail}`}
                  className="flex items-center gap-2 hover:text-[#ff9500] transition"
                >
                  <Mail size={16} />
                  <span>{siteData.company.supportEmail}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>{siteData.footer.copyright}</p>
        </div>

        {/* Languages */}
        <div className="border-t border-gray-800 pt-4 mt-4">
          <div className="flex justify-center gap-4">
            {siteData.footer.languages.map((lang, index) => {
              const langCode = languageMap[lang] || 'en'
              const isActive = language === langCode
              
              return (
                <button
                  key={index}
                  onClick={() => setLanguage(langCode)}
                  className={`flex items-center gap-2 transition-colors ${
                    isActive 
                      ? 'text-[#ff9500] font-semibold' 
                      : 'text-gray-400 hover:text-[#ff9500]'
                  }`}
                >
                  <span className="text-lg">
                    {langCode === 'en' ? '🇬🇧' : langCode === 'de' ? '🇩🇪' : '🇹🇷'}
                  </span>
                  <span>{lang}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
