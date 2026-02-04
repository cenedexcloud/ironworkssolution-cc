'use client'

import { createContext, useContext, type ReactNode } from 'react'
import { translations, type TranslationKey } from '@/lib/translations'

export type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationKey
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always use English
  const language: Language = 'en'

  const setLanguage = (lang: Language) => {
    // No-op: language switching disabled
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations.en
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
