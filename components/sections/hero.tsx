"use client"

import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = sectionRef.current.offsetHeight
      const viewportHeight = window.innerHeight
      
      // Calculate progress: 0 when section starts at top, 1 when section ends
      const scrolled = -rect.top
      const scrollableDistance = sectionHeight - viewportHeight
      const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1)
      
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Interpolate values based on scroll progress
  const lerp = (start: number, end: number, t: number) => start + (end - start) * t

  const mediaWidth = lerp(280, window.innerWidth || 1920, scrollProgress)
  const mediaHeight = lerp(420, window.innerHeight || 1080, scrollProgress)
  const mediaBorderRadius = lerp(24, 0, scrollProgress)
  const mediaScale = lerp(1, 1.08, scrollProgress)

  const headlineTopX = lerp(0, -180, scrollProgress)
  const headlineBottomX = lerp(0, 180, scrollProgress)

  const subTopX = lerp(0, -120, scrollProgress)
  const subBottomX = lerp(0, 120, scrollProgress)

  const overlayOpacity = lerp(0.35, 0.15, scrollProgress)
  
  // Background opacity: 1 -> 0.75 at 60% -> 0.55 at 100%
  const bgOpacity = scrollProgress <= 0.6 
    ? lerp(1, 0.75, scrollProgress / 0.6)
    : lerp(0.75, 0.55, (scrollProgress - 0.6) / 0.4)

  return (
    <section ref={sectionRef} className="relative h-[220vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background image */}
        <div
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 z-0 transition-opacity duration-75"
        >
          <img
            src="https://promptundsoehne.com/oclub_crowd.jpg"
            alt="Prompt & Söhne background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-20 flex h-full items-center justify-center px-4">
          {/* Video container */}
          <div
            style={{
              width: `${mediaWidth}px`,
              height: `${mediaHeight}px`,
              borderRadius: `${mediaBorderRadius}px`,
              transform: `translate(-50%, -50%) scale(${mediaScale})`,
            }}
            className="absolute left-1/2 top-1/2 z-10 overflow-hidden shadow-2xl will-change-transform"
          >
            <video
              src="https://promptundsoehne.com/header-video.mp4"
              poster="https://promptundsoehne.com/oclub_crowd.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
            />
            <div
              style={{ opacity: overlayOpacity }}
              className="absolute inset-0 bg-black transition-opacity duration-75"
            />
          </div>

          {/* Text content */}
          <div className="relative z-30 flex max-w-6xl flex-col items-center justify-center text-center text-white">
            <div className="pointer-events-none space-y-0 leading-none">
              <h1
                style={{ transform: `translateX(${headlineTopX}px)` }}
                className="text-5xl font-semibold tracking-tight transition-transform duration-75 sm:text-7xl md:text-8xl lg:text-[9rem]"
              >
                Prompt &
              </h1>

              <h1
                style={{ transform: `translateX(${headlineBottomX}px)` }}
                className="text-5xl font-semibold tracking-tight transition-transform duration-75 sm:text-7xl md:text-8xl lg:text-[9rem]"
              >
                Söhne
              </h1>
            </div>

            <div className="mt-8 space-y-1 text-center text-sm uppercase tracking-[0.28em] text-white/75 sm:mt-10 sm:text-base">
              <p 
                style={{ transform: `translateX(${subTopX}px)` }}
                className="transition-transform duration-75"
              >
                Design. Motion. AI.
              </p>
              <p 
                style={{ transform: `translateX(${subBottomX}px)` }}
                className="transition-transform duration-75"
              >
                Built for attention.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-center text-xs uppercase tracking-[0.28em] text-white/45 sm:text-sm">
          Scroll
        </div>
      </div>
    </section>
  )
}
