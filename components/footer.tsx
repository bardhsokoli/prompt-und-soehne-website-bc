"use client"

import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { href: "#work", label: t("nav.work") },
    { href: "#services", label: t("nav.services") },
    { href: "#about", label: t("nav.about") },
    { href: "#contact", label: t("nav.contact") },
  ]

  const legalLinks = [
    { href: "/impressum", label: t("footer.impressum") },
    { href: "/datenschutz", label: t("footer.privacy") },
  ]

  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-light tracking-[0.3em] uppercase text-foreground"
          >
            PROMPT & SÖHNE
          </Link>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-light tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/promptundsoehne"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/company/prompt-soehne"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-light text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                // Trigger cookie settings modal
                window.dispatchEvent(new CustomEvent("openCookieSettings"))
              }}
              className="text-xs font-light text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("footer.cookies")}
            </button>
          </div>

          {/* Copyright */}
          <p className="text-xs font-light text-muted-foreground">
            © {currentYear} Prompt Studio BPC GmbH. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
