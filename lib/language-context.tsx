"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Language = "en" | "de"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.work": "Work",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.menu": "Menu",

    // Hero
    "hero.scroll": "Scroll to explore",

    // Statement
    "statement.title": "WE EAT BRANDS FOR BREAKFAST.",

    // Work
    "work.title": "Our Work",
    "work.subtitle": "Selected projects showcasing our creative vision",
    "work.filter.all": "All",
    "work.filter.video": "Video",
    "work.filter.photography": "Photography",
    "work.filter.design": "Design",
    "work.filter.ai": "AI Art",
    "work.viewProject": "View Project",

    // Services
    "services.title": "Services",
    "services.video": "Video",
    "services.photography": "Photography",
    "services.graphicDesign": "Graphic Design",
    "services.marketing": "Marketing Solutions",
    "services.ai": "AI Content Production",
    "services.web": "Web Design",
    "services.brand": "Brand Identity Design",

    // About
    "about.title": "About Us",
    "about.description": "We are PROMPT & SÖHNE, a Vienna-based creative agency that transforms brands through bold visual storytelling. Our team combines traditional craftsmanship with cutting-edge AI technology to create unforgettable experiences.",
    "about.description2": "From cinematic video production to innovative AI-generated content, we push the boundaries of what's possible in creative communication. We don't just make content — we make statements.",

    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "Ready to transform your brand? Let&apos;s talk.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Message sent successfully!",
    "contact.error": "Failed to send message. Please try again.",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.impressum": "Impressum",
    "footer.privacy": "Privacy Policy",
    "footer.cookies": "Cookie Settings",

    // Cookie Banner
    "cookie.title": "Cookie Settings",
    "cookie.description": "We use cookies to enhance your browsing experience. Essential cookies are always active. You can choose to enable optional cookies for additional features.",
    "cookie.essential": "Essential Cookies",
    "cookie.essentialDesc": "Required for basic site functionality. Always enabled.",
    "cookie.optional": "Optional Cookies",
    "cookie.optionalDesc": "Enable features like reCAPTCHA and Google Maps.",
    "cookie.accept": "Accept All",
    "cookie.acceptSelected": "Accept Selected",
    "cookie.decline": "Essential Only",
  },
  de: {
    // Navigation
    "nav.work": "Arbeiten",
    "nav.services": "Leistungen",
    "nav.about": "Über uns",
    "nav.contact": "Kontakt",
    "nav.menu": "Menü",

    // Hero
    "hero.scroll": "Scrollen zum Entdecken",

    // Statement
    "statement.title": "WE EAT BRANDS FOR BREAKFAST.",

    // Work
    "work.title": "Unsere Arbeiten",
    "work.subtitle": "Ausgewählte Projekte, die unsere kreative Vision zeigen",
    "work.filter.all": "Alle",
    "work.filter.video": "Video",
    "work.filter.photography": "Fotografie",
    "work.filter.design": "Design",
    "work.filter.ai": "KI-Kunst",
    "work.viewProject": "Projekt ansehen",

    // Services
    "services.title": "Leistungen",
    "services.video": "Video",
    "services.photography": "Fotografie",
    "services.graphicDesign": "Grafikdesign",
    "services.marketing": "Marketing-Lösungen",
    "services.ai": "KI-Content-Produktion",
    "services.web": "Webdesign",
    "services.brand": "Markenidentität",

    // About
    "about.title": "Über Uns",
    "about.description": "Wir sind PROMPT & SÖHNE, eine Wiener Kreativagentur, die Marken durch mutiges visuelles Storytelling transformiert. Unser Team verbindet traditionelles Handwerk mit modernster KI-Technologie, um unvergessliche Erlebnisse zu schaffen.",
    "about.description2": "Von filmischer Videoproduktion bis hin zu innovativen KI-generierten Inhalten verschieben wir die Grenzen des Möglichen in der kreativen Kommunikation. Wir erstellen nicht nur Content — wir setzen Statements.",

    // Contact
    "contact.title": "Kontakt",
    "contact.subtitle": "Bereit, Ihre Marke zu transformieren? Lassen Sie uns sprechen.",
    "contact.name": "Name",
    "contact.email": "E-Mail",
    "contact.message": "Nachricht",
    "contact.send": "Nachricht senden",
    "contact.sending": "Wird gesendet...",
    "contact.success": "Nachricht erfolgreich gesendet!",
    "contact.error": "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",

    // Footer
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.impressum": "Impressum",
    "footer.privacy": "Datenschutz",
    "footer.cookies": "Cookie-Einstellungen",

    // Cookie Banner
    "cookie.title": "Cookie-Einstellungen",
    "cookie.description": "Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern. Essentielle Cookies sind immer aktiv. Sie können optionale Cookies für zusätzliche Funktionen aktivieren.",
    "cookie.essential": "Essentielle Cookies",
    "cookie.essentialDesc": "Erforderlich für grundlegende Website-Funktionen. Immer aktiviert.",
    "cookie.optional": "Optionale Cookies",
    "cookie.optionalDesc": "Aktivieren Sie Funktionen wie reCAPTCHA und Google Maps.",
    "cookie.accept": "Alle akzeptieren",
    "cookie.acceptSelected": "Auswahl akzeptieren",
    "cookie.decline": "Nur essentielle",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Check browser language
    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith("de")) {
      setLanguage("de")
    }

    // Check stored preference
    const stored = localStorage.getItem("language")
    if (stored === "de" || stored === "en") {
      setLanguage(stored)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
