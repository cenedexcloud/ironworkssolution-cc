"use client"

import { useState } from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage, type Language } from "@/contexts/LanguageContext"

const languages = [
  { code: 'en' as Language, name: 'English (US)', flag: '🇺🇸' },
  { code: 'es' as Language, name: 'Español (MX)', flag: '🇲🇽' }
]

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >
        <Globe className="w-4 h-4" />
        <span>{languages.find(l => l.code === language)?.flag}</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-3 ${
                language === lang.code ? 'bg-[#f8f6f3]' : ''
              }`}
            >
              <span className="text-2xl">{lang.flag}</span>
              <span className="text-[#1a1a1a]">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
