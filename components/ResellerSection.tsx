'use client'

import { ArrowRight, Users, Server, CreditCard } from 'lucide-react'
import Link from 'next/link'

export default function ResellerSection() {
  return (
    <section className="py-16 bg-[#050513] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-teal-400 text-sm font-semibold tracking-wide mb-2">
              Reseller program
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start your own IPTV business with 4K Xtream
            </h2>
            <p className="text-gray-300 mb-6 text-sm md:text-base">
              Get a dedicated reseller panel, instant activation, flexible credits and
              stable 4K servers. Create, manage and renew your clients in seconds with
              our easy‑to‑use dashboard.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <Users className="w-6 h-6 text-teal-400 mb-2" />
                <p className="text-sm font-semibold text-white mb-1">Full client control</p>
                <p className="text-xs text-gray-300">
                  Create, pause and renew accounts from one panel.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <Server className="w-6 h-6 text-teal-400 mb-2" />
                <p className="text-sm font-semibold text-white mb-1">Stable infrastructure</p>
                <p className="text-xs text-gray-300">
                  Fast, global servers with 99.9% uptime for your users.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <CreditCard className="w-6 h-6 text-teal-400 mb-2" />
                <p className="text-sm font-semibold text-white mb-1">Flexible credits</p>
                <p className="text-xs text-gray-300">
                  Buy credits in bulk and sell packages with your own pricing.
                </p>
              </div>
            </div>

            <Link
              href="/iptv-reseller"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg text-sm md:text-base transition-colors"
            >
              Become a reseller
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-tr from-teal-500/20 via-purple-500/10 to-orange-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-[#0f0f23] border border-white/10 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Reseller dashboard
                  </p>
                  <p className="text-lg font-semibold text-white">4K Xtream Panel</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium">
                  Live
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-gray-400 text-xs mb-1">Active clients</p>
                  <p className="text-2xl font-bold text-white">540</p>
                  <p className="text-[11px] text-emerald-300 mt-1">+32 today</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-gray-400 text-xs mb-1">Online streams</p>
                  <p className="text-2xl font-bold text-white">1,280</p>
                  <p className="text-[11px] text-gray-300 mt-1">Peak: 2,340</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-gray-400 text-xs mb-1">Server uptime</p>
                  <p className="text-2xl font-bold text-white">99.9%</p>
                  <p className="text-[11px] text-gray-300 mt-1">Last 30 days</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-gray-400 text-xs mb-1">Available credits</p>
                  <p className="text-2xl font-bold text-white">320</p>
                  <p className="text-[11px] text-gray-300 mt-1">Ready to sell</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs text-gray-400">
                <p>Instant activation • Xtream Codes compatible</p>
                <p>Multi‑language support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

