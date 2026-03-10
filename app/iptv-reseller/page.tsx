import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { Users, DollarSign, Headphones, Server, Check, ArrowRight } from 'lucide-react'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'IPTV Reseller Program',
  description:
    'Become a 4K Xtream IPTV reseller. Get your own reseller panel, credits that never expire, 24/7 support and start your IPTV business today.',
  keywords: ['IPTV reseller', 'IPTV business', 'IPTV reseller program', 'reseller IPTV', 'become IPTV reseller'],
  canonical: 'https://www.4kxtreamiptv.com/iptv-reseller',
  image: '/logo.png',
  type: 'website',
})

const resellerPlans = [
  {
    name: 'Starter Reseller',
    credits: 120,
    price: 300,
    currency: 'USD',
    badge: 'Best for New Sellers',
    features: [
      '120 credits included',
      'All live TV + VOD',
      'Credits never expire',
      'Create unlimited trial accounts',
      'Full access to reseller panel',
      '24/7 technical support',
    ],
  },
  {
    name: 'Growth Reseller',
    credits: 240,
    price: 520,
    currency: 'USD',
    badge: 'Most Popular',
    popular: true,
    features: [
      '240 credits included',
      'All live TV + VOD',
      'No credit expiration',
      'Create unlimited trial accounts',
      'Sub‑reseller creation available',
      'Priority 24/7 support',
    ],
  },
  {
    name: 'Agency Reseller',
    credits: 480,
    price: 930,
    currency: 'USD',
    badge: 'For Agencies & Panels',
    features: [
      '480 credits included',
      'White‑label ready',
      'No credit expiration',
      'Create sub‑resellers',
      'Business consultation',
      'Dedicated account manager',
    ],
  },
]

const benefits = [
  {
    icon: DollarSign,
    title: 'High profit margins',
    description: 'Buy credits once, sell subscriptions at your own price and keep 100% of the profit.',
  },
  {
    icon: Server,
    title: 'Stable servers',
    description: 'Top‑tier IPTV infrastructure with high uptime and smooth 4K/HD streaming worldwide.',
  },
  {
    icon: Headphones,
    title: '24/7 support',
    description: 'We support you and your customers around the clock via WhatsApp and email.',
  },
  {
    icon: Users,
    title: 'Full control',
    description: 'Create, renew and manage accounts yourself with our easy reseller control panel.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Choose your reseller package',
    description: 'Pick the credits bundle that matches how many customers you want to manage.',
  },
  {
    step: '02',
    title: 'Get your reseller panel',
    description: 'Within minutes we activate your panel and deliver your login details.',
  },
  {
    step: '03',
    title: 'Create accounts & trials',
    description: 'Use your credits to create full subscriptions and free trials for your clients.',
  },
  {
    step: '04',
    title: 'Grow your monthly income',
    description: 'Set your own prices and build a stable recurring IPTV business.',
  },
]

export default function IPTVResellerPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero / Intro like Smart4k/Kebit */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="inline-block rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-sm font-semibold text-emerald-300 mb-4">
            IPTV Reseller Program
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Launch your own{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-orange-400">
              4K Xtream IPTV Reseller Business
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-200 max-w-3xl mx-auto mb-6">
            Get your own reseller panel, buy credits at wholesale price and resell IPTV subscriptions under your
            brand. No technical experience required – we handle the servers, you handle the clients.
          </p>
          <p className="text-sm md:text-base text-emerald-200 mb-8">
            Stable servers • Credits never expire • 24/7 support • 4K / Full HD channels & VOD
          </p>
          <a
            href="https://wa.me/447845432224?text=Hi,%20I%20want%20to%20start%20as%20an%20IPTV%20reseller"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm md:text-base font-semibold text-emerald-700 shadow-lg shadow-emerald-500/30 hover:bg-slate-100 transition"
          >
            Talk to us on WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Benefits row like their intro blocks */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reseller plans – 3 cards, same style idea as Smart4k/Kebit/Xtream */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Choose your reseller package</h2>
            <p className="text-sm md:text-base text-slate-600">
              Credits never expire. Use them for monthly, 3‑month, 6‑month or 12‑month subscriptions.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {resellerPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative flex h-full flex-col rounded-3xl border p-6 md:p-7 ${
                  plan.popular
                    ? 'border-emerald-500/70 shadow-xl shadow-emerald-500/20 bg-gradient-to-b from-emerald-50 to-white scale-[1.02]'
                    : 'border-slate-200 bg-white shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-4 py-1 text-xs font-semibold text-white shadow">
                    Most Popular
                  </div>
                )}
                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">{plan.badge}</p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">{plan.name}</h3>
                </div>
                <div className="mb-5 flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-black text-slate-900">
                    ${plan.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-500 uppercase font-semibold">/ one time</span>
                </div>
                <p className="mb-4 text-sm font-medium text-emerald-600">{plan.credits} credits included</p>
                <ul className="mb-6 space-y-2 text-sm text-slate-700">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <a
                    href="https://wa.me/447845432224?text=Hi,%20I%20want%20to%20order%20an%20IPTV%20reseller%20package"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition ${
                      plan.popular
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    Order this package
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">
            1 credit = 1 month subscription. Example: 12 months = 1 credit, 6 months = 0.5 credit, 3 months = 0.25
            credit, 1 month = 0.1 credit. Credits never expire.
          </p>
        </div>
      </section>

      {/* How it works – simple 4 steps line like Xtream text section */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">How our reseller system works</h2>
            <p className="text-sm md:text-base text-slate-300">
              Same simple process as other top IPTV providers – just with 4K Xtream quality and support.
            </p>
          </div>
          <div className="grid gap-7 md:grid-cols-4">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/40">
                  <span className="text-sm font-bold">{item.step}</span>
                </div>
                <h3 className="mb-2 text-sm font-semibold text-white">{item.title}</h3>
                <p className="text-xs text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA strip like they have at bottom */}
      <section className="py-14 bg-gradient-to-r from-emerald-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
            Ready to start your IPTV reseller business?
          </h2>
          <p className="text-sm md:text-base text-white/90 mb-6 max-w-2xl mx-auto">
            Message us now and we will set up your reseller panel, explain how credits work and help you close your
            first clients.
          </p>
          <a
            href="https://wa.me/447845432224?text=Hi,%20I%20want%20to%20start%20your%20IPTV%20reseller%20program"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm md:text-base font-semibold text-emerald-700 shadow-lg hover:bg-slate-100 transition"
          >
            Start now on WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
