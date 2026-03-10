'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Language, translations } from '@/lib/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const deriveLangFromPath = (): Language => {
    if (!pathname) return 'en';
    if (pathname.startsWith('/de')) return 'de';
    if (pathname.startsWith('/tr')) return 'tr';
    return 'en';
  };

  const [language, setLanguage] = useState<Language>(deriveLangFromPath);

  useEffect(() => {
    // Always derive language from URL prefix.
    // If no /de or /tr prefix, force English so that / routes are always English.
    const pathLang = deriveLangFromPath();
    setLanguage(pathLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('iptv-language', pathLang);
    }
  }, [pathname]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('iptv-language', lang);
    }
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage: handleSetLanguage,
        t: translations[language] 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
