"use client"

import { useEffect, useRef, useState } from "react"

// Scroll-driven hero section with expanding video

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 })

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = sectionRef.current.offsetHeight
      const viewportHeight = window.innerHeight
      
      const scrolled = -rect.top
      const scrollableDistance = sectionHeight - viewportHeight
      const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1)
      
      setScrollProgress(progress)
    }

    updateWindowSize()
    window.addEventListener("resize", updateWindowSize)
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    
    return () => {
      window.removeEventListener("resize", updateWindowSize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const lerp = (start: number, end: number, t: number) => start + (end - start) * t

  const mediaWidth = lerp(320, windowSize.width, scrollProgress)
  const mediaHeight = lerp(480, windowSize.height, scrollProgress)
  const mediaBorderRadius = lerp(20, 0, scrollProgress)
  const mediaScale = lerp(1, 1.02, scrollProgress)

  const headlineTopX = lerp(0, -120, scrollProgress)
  const headlineBottomX = lerp(0, 120, scrollProgress)

  const subTopX = lerp(0, -80, scrollProgress)
  const subBottomX = lerp(0, 80, scrollProgress)

  const overlayOpacity = lerp(0.25, 0.1, scrollProgress)

  return (
    <section ref={sectionRef} className="relative h-[220vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Video container - now positioned as the main visual */}
        <div
          style={{
            width: `${mediaWidth}px`,
            height: `${mediaHeight}px`,
            borderRadius: `${mediaBorderRadius}px`,
            transform: `translate(-50%, -50%) scale(${mediaScale})`,
          }}
          className="absolute left-1/2 top-1/2 z-10 overflow-hidden shadow-2xl will-change-transform"
        >
          {/* Vimeo embed */}
          <iframe
            src="https://player.vimeo.com/video/1179317883?background=1&autoplay=1&loop=1&muted=1&controls=0"
            className="absolute inset-0 h-full w-full"
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              pointerEvents: 'none',
            }}
            allow="autoplay; fullscreen"
            frameBorder="0"
          />
          {/* Light overlay for text readability */}
          <div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-black pointer-events-none"
          />
        </div>

        {/* Text content - positioned over the video */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4 pointer-events-none">
          <div className="flex flex-col items-center justify-center text-center text-white">
            {/* Main headline - smaller and more elegant */}
            <div className="space-y-1 leading-tight">
              <h1
                style={{ transform: `translateX(${headlineTopX}px)` }}
                className="text-3xl font-light tracking-tight transition-transform duration-75 sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Built To Be Seen
              </h1>

              <h1
                style={{ transform: `translateX(${headlineBottomX}px)` }}
                className="text-3xl font-light tracking-tight transition-transform duration-75 sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Made To Be Felt
              </h1>
            </div>

            {/* Supporting text */}
            <div className="mt-8 space-y-1 text-center text-xs uppercase tracking-[0.3em] text-white/70 sm:mt-10 sm:text-sm">
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
                Built For Attention.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-center text-xs uppercase tracking-[0.3em] text-white/40 sm:text-sm">
          Scroll
        </div>
      </div>
    </section>
  )
}
