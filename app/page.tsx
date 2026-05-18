"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services"
import { AboutSection } from "@/components/sections/about"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"

export default function HomePage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <Footer />
        <CookieConsent />
      </main>
    </LanguageProvider>
  )
}
