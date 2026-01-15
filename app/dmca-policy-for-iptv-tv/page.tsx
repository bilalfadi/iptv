import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { Shield, FileWarning, Mail, AlertTriangle, CheckCircle } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'DMCA Policy',
  description: 'Digital Millennium Copyright Act (DMCA) policy for 4K Xtream IPTV. Learn how to submit copyright notices and takedown requests.',
  keywords: ['DMCA policy', 'copyright policy', 'DMCA notice', 'copyright protection'],
  canonical: 'https://4kxtreamiptv.com/dmca-policy-for-iptv-tv/',
  image: '/logo.png',
  type: 'website',
});

const dmcaNoticeRequirements = [
  {
    title: 'Your Contact Information',
    items: ['Your name', 'Your address', 'Your email address', 'Your phone number']
  },
  {
    title: 'Identification of the Copyrighted Work',
    description: 'Clearly describe the copyrighted material that you believe has been infringed.'
  },
  {
    title: 'Location of the Infringing Material',
    description: 'Provide the specific URL(s) on our website where the infringing material is located.'
  },
  {
    title: 'Your Statement of Good Faith',
    description: 'A statement that you have a good faith belief that the use of the material in question is not authorized by the copyright owner, its agent, or the law.'
  },
  {
    title: 'Your Statement of Accuracy',
    description: 'A statement that the information in your notice is accurate and that you are the copyright owner or authorized to act on their behalf.'
  },
  {
    title: 'Your Signature',
    description: 'Your physical or electronic signature.'
  }
];

const counterNoticeRequirements = [
  {
    title: 'Your Contact Information',
    items: ['Your name', 'Your address', 'Your email address', 'Your phone number']
  },
  {
    title: 'Identification of the Removed Material',
    description: 'Describe the material that was removed and its location before it was removed.'
  },
  {
    title: 'Your Statement of Good Faith',
    description: 'A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of a mistake or misidentification.'
  },
  {
    title: 'Your Consent to Jurisdiction',
    description: 'A statement that you consent to the jurisdiction of the federal court in your district or, if outside the United States, to the jurisdiction of any judicial district in which we may be found.'
  },
  {
    title: 'Your Signature',
    description: 'Your physical or electronic signature.'
  }
];

export default function DMCAPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a1a]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 via-[#0a0a1a] to-orange-900/30" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-6 py-2 mb-8">
              <Shield className="w-5 h-5 text-teal-400" />
              <span className="text-teal-300 font-medium">Copyright Protection</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              DMCA
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400"> Policy</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              At IPTV TV, we respect the intellectual property rights of others and expect our users to do the same.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-[#0f0f23]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16162a] border border-gray-800 rounded-3xl p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-orange-400 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                  <p className="text-gray-300 leading-relaxed">
                    If you believe your copyrighted material has been used on our website in a way that violates your rights, 
                    you can notify us under the Digital Millennium Copyright Act (DMCA). We take copyright infringement 
                    seriously and will respond to valid DMCA notices promptly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Submit DMCA Notice */}
      <section className="py-16 bg-[#0a0a1a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                How to Submit a DMCA Notice
              </h2>
              <p className="text-gray-400">
                If you are a copyright owner or authorized to act on behalf of one, please send a written notice with the following:
              </p>
            </div>
            
            <div className="space-y-4">
              {dmcaNoticeRequirements.map((req, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-[#1a1a2e] to-[#16162a] border border-gray-800 rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{req.title}</h3>
                      {req.description && (
                        <p className="text-gray-300">{req.description}</p>
                      )}
                      {req.items && (
                        <ul className="space-y-1 mt-2">
                          {req.items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-300">
                              <CheckCircle className="w-4 h-4 text-teal-400" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-teal-500/10 to-orange-500/10 border border-teal-500/30 rounded-2xl">
              <div className="flex items-center gap-4">
                <Mail className="w-8 h-8 text-teal-400" />
                <div>
                  <p className="text-white font-medium">Send your DMCA notice to our designated copyright agent at:</p>
                  <a href="mailto:contact@4kxtreamiptv.com" className="text-teal-400 hover:text-teal-300 font-bold text-lg">
                    contact@4kxtreamiptv.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counter-Notification */}
      <section className="py-16 bg-[#0f0f23]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Counter-Notification
              </h2>
              <p className="text-gray-400">
                If you believe material you uploaded was removed by mistake or misidentification, you may send a counter-notification including:
              </p>
            </div>
            
            <div className="space-y-4">
              {counterNoticeRequirements.map((req, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-[#1a1a2e] to-[#16162a] border border-gray-800 rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{req.title}</h3>
                      {req.description && (
                        <p className="text-gray-300">{req.description}</p>
                      )}
                      {req.items && (
                        <ul className="space-y-1 mt-2">
                          {req.items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-300">
                              <CheckCircle className="w-4 h-4 text-teal-400" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Repeat Infringers */}
      <section className="py-16 bg-[#0a0a1a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/30 rounded-3xl p-8">
              <div className="flex items-start gap-4">
                <FileWarning className="w-8 h-8 text-orange-400 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Repeat Infringers</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We reserve the right to terminate user accounts or access for individuals who repeatedly violate copyrights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Questions About Our DMCA Policy?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us at{' '}
            <a href="mailto:contact@4kxtreamiptv.com" className="font-bold underline">
              contact@4kxtreamiptv.com
            </a>
          </p>
          <p className="text-white/80">
            Thank you for respecting intellectual property rights!
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
