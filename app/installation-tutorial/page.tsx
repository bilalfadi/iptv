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
                How to setup IPTV on Fire TV Stick
              </h2>

              <StepBlock
                step={1}
                text="From the home screen of your device, hover over the Find option."
                image={IMG('2024/02/firestick1.webp')}
              />
              <StepBlock
                step={2}
                text="Now click on Search."
                image={IMG('2024/02/fire-2.png')}
              />
              <StepBlock
                step={3}
                text="Search for and select Downloader."
                image={IMG('2024/02/fire3.png')}
              />
              <StepBlock
                step={4}
                text="Choose the Downloader app."
                image={IMG('2024/02/fire4.png')}
              />
              <StepBlock step={5} text="Click Download." image={IMG('2024/02/fre5.webp')} />
              <StepBlock
                step={6}
                text="Once the app finishes installing click Open."
                image={IMG('2024/02/fi7.webp')}
              />
              <StepBlock
                step={7}
                text="Return to the home screen and open Settings."
                image={IMG('2024/02/fi8.webp')}
              />
              <StepBlock step={8} text="Click My Fire TV." image={IMG('2024/02/fire8.webp')} />
              <StepBlock
                step={9}
                text="Choose Developer options."
                image={IMG('2024/02/fire9.webp')}
              />
              <StepBlock
                step={10}
                text="Click Install unknown apps."
                image={IMG('2024/02/10.webp')}
              />
              <StepBlock
                step={11}
                text="Find the Downloader app and click it."
                image={IMG('2024/02/11.webp')}
              />
              <StepBlock
                step={12}
                text="Turn Unknown Sources to On for the Downloader app. This enables side-loading on your device."
                image={IMG('2024/02/12.webp')}
              />
              <StepBlock step={13} text="Launch Downloader." image={IMG('2024/02/13.webp')} />
              <StepBlock step={14} text="Click Allow." image={IMG('2024/02/14.webp')} />
              <StepBlock step={15} text="Click OK." image={IMG('2024/02/155.webp')} />
              <StepBlock
                step={16}
                text={
                  <>
                    Type this URL in Downloader:{' '}
                    <a
                      href="https://www.iptvsmarters.com/smarters.apk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 underline"
                    >
                      https://www.iptvsmarters.com/smarters.apk
                    </a>{' '}
                    and click Go.
                  </>
                }
                image={IMG('2024/02/16.webp')}
              />
              <StepBlock step={17} text="Wait for file to download." image={IMG('2024/02/17.webp')} />
              <StepBlock step={18} text="Click Install." image={IMG('2024/02/18.webp')} />
              <StepBlock step={19} text="Click Done." image={IMG('2024/02/19.webp')} />
              <StepBlock
                step={20}
                text="Open IPTV Smarters then select Login with Xtream codes API."
              />
              <StepBlock
                step={21}
                text="Enter the login details that we sent you via WhatsApp or Email."
              />

              <h2 className="text-2xl font-bold text-white mt-14 mb-6">
                How to setup IPTV with TiviMate (Fire TV Stick)
              </h2>
              <StepBlock
                step={1}
                text={
                  <>
                    In Downloader, type:{' '}
                    <a
                      href="https://tivimates.com/tiviapk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 underline"
                    >
                      https://tivimates.com/tiviapk
                    </a>{' '}
                    and click Go.
                  </>
                }
                image={IMG('2024/02/TV1.webp')}
              />
              <StepBlock step={2} text="Wait for file to download." image={IMG('2024/02/a.webp')} />
              <StepBlock
                step={3}
                text="Click Install and once finished you can open the app."
              />
              <StepBlock
                step={4}
                text='Click "Add Playlist" then choose "Xtream codes".'
              />
              <StepBlock
                step={5}
                text="Enter the login details that we sent you via WhatsApp or Email."
              />
            </div>
          )}

          {/* Android */}
          {activeTab === 'android' && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                How to setup IPTV on Android with IPTV Smarters Player
              </h2>
              <StepBlock
                step={1}
                text={
                  <>
                    Download the IPTV Smarters app from:{' '}
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
                text="Open the app once downloaded and enter the login details."
              />
              <StepBlock
                step={3}
                text="Enter the username, password and server URL we provided after your subscription."
                image={IMG('2024/03/an1.webp')}
              />
              <StepBlock step={4} text="Click ADD USER and wait a few seconds." image={IMG('2024/03/an2.webp')} />
              <StepBlock
                step={5}
                text="Select the channel group you want to watch and proceed."
              />
              <StepBlock
                step={6}
                text="Click on a channel name, then double-tap the video to go full screen."
              />
              <StepBlock step={7} text="Done. You can start watching." />
            </div>
          )}

          {/* Apple / IOS */}
          {activeTab === 'apple' && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                How to setup IPTV on Apple / iOS with IPTV Smarters Player
              </h2>
              <StepBlock
                step={1}
                text={
                  <>
                    Download IPTV Smarters from the App Store:{' '}
                    <a
                      href="https://apps.apple.com/in/app/smarters-player-lite/id1628995509"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 underline"
                    >
                      Smarters Player Lite
                    </a>{' '}
                    or search for it in the App Store and install.
                  </>
                }
              />
              <StepBlock step={2} text="Open the app and click ADD USER to proceed." />
              <StepBlock
                step={3}
                text="Enter the login details we provided after your subscription."
                image={IMG('2024/03/an1.webp')}
              />
              <StepBlock step={4} text="Wait a few seconds for channels to load." image={IMG('2024/03/an2.webp')} />
              <StepBlock step={5} text="Select the channel group you want to watch." />
              <StepBlock
                step={6}
                text="Tap a channel, then double-tap the video for full screen."
              />
              <StepBlock
                step={7}
                text='To add EPG, just click "Install EPG" – no EPG URL needed.'
              />
              <StepBlock step={8} text="Done." />
            </div>
          )}

          {/* Smart TV */}
          {activeTab === 'smarttv' && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                How to Install IPTV Smarters Pro on Smart TV
              </h2>
              <p className="text-gray-300 mb-6">
                IPTV Smarters is a video streaming player for watching live TV, VOD, series and
                catch-up on your Smart TV. It is easy to use and works on compatible devices.
              </p>
              <p className="text-gray-300 mb-8">
                <strong className="text-white">Compatibility:</strong> Works on many Smart TV brands
                and set-top boxes.
              </p>
              <h3 className="text-xl font-bold text-white mb-4">How it works</h3>
              <StepBlock
                step={1}
                text={
                  <>
                    Search for IPTV Smarters Pro in your TV app store, or download the APK from:{' '}
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
                text="Log in with your subscription details: Username, Password and Portal URL."
              />
              <h3 className="text-xl font-bold text-white mt-10 mb-4">Samsung Smart TV</h3>
              <StepBlock step={1} text="Press the Smart Hub button on your remote." />
              <StepBlock step={2} text="Search for IPTV Smarters Pro and install it." />
              <StepBlock step={3} text="Log in with your Username, Password and Portal URL." />
              <h3 className="text-xl font-bold text-white mt-10 mb-4">LG Smart TV</h3>
              <StepBlock step={1} text="Press Home on the remote and go to LG Content Store." />
              <StepBlock step={2} text="Search for IPTV Smarters Pro and install it." />
              <StepBlock step={3} text="Log in with your Username, Password and Portal URL." />
            </div>
          )}

          {/* Windows */}
          {activeTab === 'windows' && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Windows Method
              </h2>
              <StepBlock
                step={1}
                text={
                  <>
                    Download IPTV Smarters for Windows:{' '}
                    <a
                      href="https://www.iptvsmarters.com/download?download=windows"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 underline"
                    >
                      https://www.iptvsmarters.com/download?download=windows
                    </a>
                  </>
                }
              />
              <h2 className="text-2xl font-bold text-white mt-14 mb-6">MAC Method</h2>
              <StepBlock
                step={1}
                text={
                  <>
                    Download IPTV Smarters for Mac:{' '}
                    <a
                      href="https://www.iptvsmarters.com/download?download=mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 underline"
                    >
                      https://www.iptvsmarters.com/download?download=mac
                    </a>
                  </>
                }
              />
            </div>
          )}

          {/* Mag Box */}
          {activeTab === 'mag' && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                How to setup IPTV on Mag Box
              </h2>
              <p className="text-gray-300 mb-8">
                This guide walks you through setting up your MAG (250, 254, 256, etc.) with our
                service.
              </p>
              <StepBlock
                step={1}
                text='When the box is loaded, open the main portal screen, then go to "Settings" and press SETUP/SET on the remote.'
                image={IMG('2024/03/ma1.png')}
              />
              <StepBlock
                step={2}
                text='Open "System settings" and click "Servers".'
                image={IMG('2024/03/ma2.png')}
              />
              <StepBlock step={3} text="Click on Servers." image={IMG('2024/03/ma3.png')} />
              <StepBlock step={4} text="Choose Portals." image={IMG('2024/03/ma4.png')} />
              <StepBlock
                step={5}
                text="In Portal 1 name enter a name (e.g. 4K Xtream IPTV). In Portal 1 URL enter the portal URL we sent you."
                image={IMG('2024/03/ma5.jpg')}
              />
              <p className="text-gray-300 mb-6">
                For activation we need the <strong className="text-white">MAC address</strong> from
                the label on the back of your MAG box. After activation we send you the portal URL
                to enter here.
              </p>
              <StepBlock step={6} text="Select OK to save the changes." />
              <StepBlock step={7} text="Press EXIT on the remote after settings are saved." />
              <StepBlock step={8} text="Reboot the box when prompted (OK) so the portal loads." />
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
