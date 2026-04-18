import { useEffect, useMemo, useState } from 'react'
import { translations } from '../data/translations'
import { LanguageContext } from './LanguageContext'

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'es'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const value = useMemo(() => {
    return {
      language,
      setLanguage,
      t: translations[language],
    }
  }, [language])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}