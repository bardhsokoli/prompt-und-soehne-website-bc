"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const { t } = useLanguage()
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = sectionRef.current.offsetHeight
      const scrolled = -rect.top
      const progress = Math.min(Math.max(scrolled / (sectionHeight * 0.5), 0), 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate video card scale (starts at 0.4, expands to 1)
  const videoScale = 0.4 + scrollProgress * 0.6
  // Calculate background opacity (starts at 1, fades to 0)
  const bgOpacity = 1 - scrollProgress

  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh]"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-100"
          style={{
            backgroundImage: "url('https://pub-7ab10ef61efd42148b5549910673d06a.r2.dev/oclub_crowd.jpg')",
            opacity: bgOpacity,
          }}
        >
          <div className="absolute inset-0 bg-background/60" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center">
          {/* Video Card */}
          <div
            className="relative w-full max-w-5xl mx-auto px-4 transition-transform duration-100"
            style={{
              transform: `scale(${videoScale})`,
            }}
          >
            <div className="relative aspect-video rounded-lg overflow-hidden bg-card shadow-2xl">
              <iframe
                src="https://player.vimeo.com/video/1179317883?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="PROMPT & SÖHNE Showreel"
              />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-300"
            style={{ opacity: 1 - scrollProgress * 2 }}
          >
            <span className="text-xs font-light tracking-wider uppercase text-foreground/60">
              {t("hero.scroll")}
            </span>
            <ChevronDown className="h-5 w-5 text-foreground/60 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
