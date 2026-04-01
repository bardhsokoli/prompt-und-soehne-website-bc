"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#work", label: t("nav.work") },
    { href: "#services", label: t("nav.services") },
    { href: "#about", label: t("nav.about") },
    { href: "#contact", label: t("nav.contact") },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Language Switcher - Far Left */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setLanguage("de")}
              className={`px-2 py-1 text-sm font-light transition-opacity ${
                language === "de" ? "opacity-100" : "opacity-50 hover:opacity-75"
              }`}
            >
              DE
            </button>
            <span className="text-muted-foreground">/</span>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 text-sm font-light transition-opacity ${
                language === "en" ? "opacity-100" : "opacity-50 hover:opacity-75"
              }`}
            >
              EN
            </button>
          </div>

          {/* Logo - Centered */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-lg font-light tracking-[0.3em] uppercase"
          >
            PROMPT & SÖHNE
          </Link>

          {/* Desktop Nav Links - Far Right */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-light tracking-wider uppercase text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu - Far Right */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">{t("nav.menu")}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 bg-background border-border">
                <div className="flex flex-col gap-8 mt-12">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-light tracking-wider uppercase text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
