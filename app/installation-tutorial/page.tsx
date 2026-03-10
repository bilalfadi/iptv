'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import { useState } from 'react';
import {
  Tv,
  Smartphone,
  Apple,
  Monitor,
  Laptop,
  Download,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const IMG = (path: string) => `/tutorial-iptvusa4k/${path.replace(/\//g, '/')}`;

const TABS = [
  { id: 'firestick', label: 'Free TV Stick', icon: Tv },
  { id: 'android', label: 'Android', icon: Smartphone },
  { id: 'apple', label: 'Apple / IOS', icon: Apple },
  { id: 'smarttv', label: 'Smart TV', icon: Monitor },
  { id: 'windows', label: 'Windows', icon: Laptop },
  { id: 'mag', label: 'Mag Box', icon: Download },
] as const;

type TabId = (typeof TABS)[number]['id'];

function StepBlock({
  step,
  text,
  image,
}: {
  step: number;
  text: React.ReactNode;
  image?: string;
}) {
  return (
    <div className="mb-8">
      <div className="text-lg font-semibold text-white mb-2">
        {step}. {text}
      </div>
      {image && (
        <div className="relative w-full max-w-2xl aspect-video rounded-xl overflow-hidden border border-gray-700 bg-[#1a1a2e]">
          <Image
            src={image}
            alt={`Step ${step}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>
      )}
    </div>
  );
}

export default function InstallationTutorialPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabId>('firestick');

  return (
    <main className="min-h-screen bg-[#0a0a1a]">
      <Header />

      {/* Hero */}
      <section className="relative pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 via-[#0a0a1a] to-orange-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Setup guide
          </h1>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-6 bg-[#0f0f23] border-y border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                  activeTab === id
                    ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/30'
                    : 'bg-[#1a1a2e] text-gray-300 hover:bg-[#252540] hover:text-white border border-gray-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab content */}
      <section className="py-12 md:py-16 bg-[#0a0a1a]">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Free TV Stick */}
          {activeTab === 'firestick' && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Set up 4K Xtream IPTV on Fire TV Stick
              </h2>

              <StepBlock
                step={1}
                text="On the Fire TV home screen, move to the Find menu."
                image={IMG('2024/02/firestick1.webp')}
              />
              <StepBlock
                step={2}
                text="Select Search."
                image={IMG('2024/02/fire-2.png')}
              />
              <StepBlock
                step={3}
                text="In the search bar, look up Downloader and open it."
                image={IMG('2024/02/fire3.png')}
              />
              <StepBlock
                step={4}
                text="Pick the official Downloader app from the results."
                image={IMG('2024/02/fire4.png')}
              />
              <StepBlock step={5} text="Tap Download to install the app." image={IMG('2024/02/fre5.webp')} />
              <StepBlock
                step={6}
                text="When installation is done, tap Open."
                image={IMG('2024/02/fi7.webp')}
              />
              <StepBlock
                step={7}
                text="Go back to the home screen and open Settings."
                image={IMG('2024/02/fi8.webp')}
              />
              <StepBlock step={8} text="Select My Fire TV." image={IMG('2024/02/fire8.webp')} />
              <StepBlock
                step={9}
                text="Open Developer options."
                image={IMG('2024/02/fire9.webp')}
              />
              <StepBlock
                step={10}
                text="Select Install unknown apps."
                image={IMG('2024/02/10.webp')}
              />
              <StepBlock
                step={11}
                text="Find Downloader in the list and tap it."
                image={IMG('2024/02/11.webp')}
              />
              <StepBlock
                step={12}
                text="Switch Unknown Sources to On for Downloader so you can install apps from outside the store."
                image={IMG('2024/02/12.webp')}
              />
              <StepBlock step={13} text="Open the Downloader app." image={IMG('2024/02/13.webp')} />
              <StepBlock step={14} text="When asked for permission, tap Allow." image={IMG('2024/02/14.webp')} />
              <StepBlock step={15} text="Tap OK to continue." image={IMG('2024/02/155.webp')} />
              <StepBlock
                step={16}
                text={
                  <>
                    In the URL bar, paste the IPTV Smarters download link and tap Go:{' '}
                    <a
                      href="https://www.iptvsmarters.com/smarters.apk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 underline"
                    >
                      https://www.iptvsmarters.com/smarters.apk
                    </a>
                  </>
                }
                image={IMG('2024/02/16.webp')}
              />
              <StepBlock step={17} text="Let the APK file finish downloading." image={IMG('2024/02/17.webp')} />
              <StepBlock step={18} text="Tap Install to install IPTV Smarters." image={IMG('2024/02/18.webp')} />
              <StepBlock step={19} text="When done, tap Done." image={IMG('2024/02/19.webp')} />
              <StepBlock
                step={20}
                text="Open IPTV Smarters and choose Login with Xtream Codes API."
              />
              <StepBlock
                step={21}
                text="Enter the username, password and server URL we sent you on WhatsApp or by email."
              />

              <h2 className="text-2xl font-bold text-white mt-14 mb-6">
                Alternative: Set up with TiviMate on Fire TV Stick
              </h2>
              <StepBlock
                step={1}
                text={
                  <>
                    In Downloader, paste the TiviMate download link and tap Go:{' '}
                    <a
                      href="https://tivimates.com/tiviapk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 underline"
                    >
                      https://tivimates.com/tiviapk
                    </a>
                  </>
                }
                image={IMG('2024/02/TV1.webp')}
              />
              <StepBlock step={2} text="Wait for the file to finish downloading." image={IMG('2024/02/a.webp')} />
              <StepBlock
                step={3}
                text="Tap Install, then open the app when installation is complete."
              />
              <StepBlock
                step={4}
                text='Tap Add Playlist and select Xtream Codes.'
              />
              <StepBlock
                step={5}
                text="Enter the credentials we sent you via WhatsApp or email."
              />
            </div>
          )}

          {/* Android */}
          {activeTab === 'android' && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Set up 4K Xtream IPTV on Android with IPTV Smarters
              </h2>
              <StepBlock
                step={1}
                text={
                  <>
                    Install the IPTV Smarters app using this link:{' '}
                    <a
                      href="https://www.iptvsmarters.com/smarters.apk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 underline"
                    >
                      https://www.iptvsmarters.com/smarters.apk
                    </a>
                  </>
                }
              />
              <StepBlock
                step={2}
                text="Open the app and go to the login screen."
              />
              <StepBlock
                step={3}
                text="Enter the username, password and server URL we gave you with your subscription."
                image={IMG('2024/03/an1.webp')}
              />
              <StepBlock step={4} text="Tap Add User and wait for your playlist to load." image={IMG('2024/03/an2.webp')} />
              <StepBlock
                step={5}
                text="Pick the channel group you want and continue."
              />
              <StepBlock
                step={6}
                text="Select a channel, then double-tap the video to switch to full screen."
              />
              <StepBlock step={7} text="You’re all set—start watching your channels." />
            </div>
          )}

          {/* Apple / IOS */}
          {activeTab === 'apple' && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Set up 4K Xtream IPTV on iPhone & iPad with IPTV Smarters
              </h2>
              <StepBlock
                step={1}
                text={
                  <>
                    Install Smarters Player Lite from the App Store:{' '}
                    <a
                      href="https://apps.apple.com/in/app/smarters-player-lite/id1628995509"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 underline"
                    >
                      Smarters Player Lite
                    </a>{' '}
                    (or search for it in the App Store).
                  </>
                }
              />
              <StepBlock step={2} text="Open the app and tap Add User to continue." />
              <StepBlock
                step={3}
                text="Enter the username, password and server URL we sent with your subscription."
                image={IMG('2024/03/an1.webp')}
              />
              <StepBlock step={4} text="Wait a few seconds for your channels to load." image={IMG('2024/03/an2.webp')} />
              <StepBlock step={5} text="Pick the channel group you want to watch." />
              <StepBlock
                step={6}
                text="Tap a channel, then double-tap the video to view in full screen."
              />
              <StepBlock
                step={7}
                text='For the programme guide, tap Install EPG (no separate EPG URL needed).'
              />
              <StepBlock step={8} text="Setup complete—enjoy your channels." />
            </div>
          )}

          {/* Smart TV */}
          {activeTab === 'smarttv' && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Install 4K Xtream IPTV on Smart TV with IPTV Smarters Pro
              </h2>
              <p className="text-gray-300 mb-6">
                IPTV Smarters Pro lets you watch live TV, movies, series and catch-up on your Smart TV
                with a simple interface. It works on many compatible Samsung, LG and other Smart TV models.
              </p>
              <p className="text-gray-300 mb-8">
                <strong className="text-white">Compatibility:</strong> Supported on most popular Smart TV
                brands and Android TV boxes.
              </p>
              <h3 className="text-xl font-bold text-white mb-4">General steps</h3>
              <StepBlock
                step={1}
                text={
                  <>
                    Find IPTV Smarters Pro in your TV’s app store, or install via APK from:{' '}
                    <a
                      href="https://www.iptvsmarters.com/smarters.apk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 underline"
                    >
                      https://www.iptvsmarters.com/smarters.apk
                    </a>
                  </>
                }
              />
              <StepBlock
                step={2}
                text="Sign in with the username, password and portal URL we sent you."
              />
              <h3 className="text-xl font-bold text-white mt-10 mb-4">Samsung Smart TV</h3>
              <StepBlock step={1} text="Press the Smart Hub button on your remote." />
              <StepBlock step={2} text="Search for IPTV Smarters Pro in the store and install it." />
              <StepBlock step={3} text="Open the app and sign in with your 4K Xtream IPTV credentials." />
              <h3 className="text-xl font-bold text-white mt-10 mb-4">LG Smart TV</h3>
              <StepBlock step={1} text="Press Home on the remote and open LG Content Store." />
              <StepBlock step={2} text="Search for IPTV Smarters Pro and install it." />
              <StepBlock step={3} text="Open the app and sign in with your 4K Xtream IPTV credentials." />
            </div>
          )}

          {/* Windows */}
          {activeTab === 'windows' && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Set up 4K Xtream IPTV on Windows
              </h2>
              <StepBlock
                step={1}
                text={
                  <>
                    Get the IPTV Smarters desktop app for Windows here:{' '}
                    <a
                      href="https://www.iptvsmarters.com/download?download=windows"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 underline"
                    >
                      https://www.iptvsmarters.com/download?download=windows
                    </a>
                    . Install it, then open the app and enter the credentials we sent you.
                  </>
                }
              />
              <h2 className="text-2xl font-bold text-white mt-14 mb-6">Set up 4K Xtream IPTV on Mac</h2>
              <StepBlock
                step={1}
                text={
                  <>
                    Download IPTV Smarters for Mac from:{' '}
                    <a
                      href="https://www.iptvsmarters.com/download?download=mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 underline"
                    >
                      https://www.iptvsmarters.com/download?download=mac
                    </a>
                    . Install and open the app, then sign in with the details we sent you.
                  </>
                }
              />
            </div>
          )}

          {/* Mag Box */}
          {activeTab === 'mag' && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Set up 4K Xtream IPTV on MAG Box
              </h2>
              <p className="text-gray-300 mb-8">
                Follow these steps to connect your MAG (250, 254, 256, 322, etc.) to 4K Xtream IPTV.
                You’ll need the portal URL we send you after we activate your MAG using its MAC address.
              </p>
              <StepBlock
                step={1}
                text="From the main portal screen, open Settings and press SETUP/SET on the remote."
                image={IMG('2024/03/ma1.png')}
              />
              <StepBlock
                step={2}
                text="Go to System settings, then open Servers."
                image={IMG('2024/03/ma2.png')}
              />
              <StepBlock step={3} text="Select Servers." image={IMG('2024/03/ma3.png')} />
              <StepBlock step={4} text="Choose Portals." image={IMG('2024/03/ma4.png')} />
              <StepBlock
                step={5}
                text="In Portal 1 name type a label (e.g. 4K Xtream IPTV). In Portal 1 URL paste the portal link we sent you."
                image={IMG('2024/03/ma5.jpg')}
              />
              <p className="text-gray-300 mb-6">
                We need the <strong className="text-white">MAC address</strong> from the sticker on the
                back of your MAG box to activate your line. Once activated, we’ll send you the portal
                URL to enter in the step above.
              </p>
              <StepBlock step={6} text="Press OK to save your portal settings." />
              <StepBlock step={7} text="Press EXIT on the remote to leave the menu." />
              <StepBlock step={8} text="Reboot the box when asked so the new portal loads correctly." />
            </div>
          )}
        </div>
      </section>

      {/* Need Help */}
      <section className="py-16 bg-[#0f0f23]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-teal-500/10 to-orange-500/10 border border-teal-500/30 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="text-center md:text-left flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {t.pages.installation.helpTitle}
                </h2>
                <p className="text-gray-300 mb-6">
                  {t.pages.installation.helpDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href="https://wa.me/447845432224"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-xl font-bold hover:from-teal-600 hover:to-teal-700 transition-all"
                  >
                    {t.pages.installation.helpWhatsApp}
                  </a>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
                  >
                    {t.pages.installation.helpContact}
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-2 text-teal-400">
                <ArrowRight className="w-5 h-5" />
                <CheckCircle className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
