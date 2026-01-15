'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Language, translations } from '@/lib/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Check if language is already stored
    const storedLang = localStorage.getItem('iptv-language') as Language;
    if (storedLang && ['en', 'de', 'tr'].includes(storedLang)) {
      setLanguage(storedLang);
      return;
    }

    // Detect language from IP
    fetch('/api/detect-language')
      .then(res => res.json())
      .then(data => {
        if (data.language) {
          setLanguage(data.language);
          localStorage.setItem('iptv-language', data.language);
        }
      })
      .catch(err => {
        console.error('Error detecting language:', err);
      });
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('iptv-language', lang);
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
