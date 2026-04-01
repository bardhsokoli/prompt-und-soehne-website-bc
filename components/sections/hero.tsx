"use client"

import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [progress, setProgress] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(1440)

  useEffect(() => {
    const updateViewport = () => {
      setViewportWidth(window.innerWidth)
    }

    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const current = Math.min(Math.max(-rect.top, 0), total)
      const nextProgress = total > 0 ? current / total : 0

      setProgress(nextProgress)
    }

    updateViewport()
    handleScroll()

    window.addEventListener("resize", updateViewport)
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("resize", updateViewport)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const isMobile = viewportWidth < 768

  const lerp = (start: number, end: number, t: number) => {
    return start + (end - start) * t
  }

  const eased = 1 - Math.pow(1 - progress, 3)

  const mediaWidth = isMobile
    ? lerp(280, viewportWidth, eased)
    : lerp(320, viewportWidth, eased)

  const mediaHeight = isMobile
    ? lerp(420, window.innerHeight || 900, eased)
    : lerp(500, window.innerHeight || 900, eased)

  const mediaRadius = lerp(24, 0, eased)
  const mediaScale = lerp(1, 1.04, eased)

  const titleMove = isMobile
    ? lerp(0, viewportWidth * 0.34, eased)
    : lerp(0, viewportWidth * 0.42, eased)

  const subMove = isMobile
    ? lerp(0, viewportWidth * 0.2, eased)
    : lerp(0, viewportWidth * 0.24, eased)

  const backgroundOpacity = lerp(0.95, 0.58, eased)
  const backgroundScale = lerp(1, 1.06, eased)
  const mediaOverlayOpacity = lerp(0.18, 0.08, eased)

  return (
    <section ref={sectionRef} className="relative h-[200vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="https://promptundsoehne.com/oclub_crowd.jpg"
            alt="Prompt & Söhne background"
            className="h-full w-full object-cover"
            style={{
              opacity: backgroundOpacity,
              transform: `scale(${backgroundScale})`,
              transition: "transform 60ms linear, opacity 60ms linear",
            }}
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),rgba(0,0,0,0.55))]" />
        </div>

        <div className="relative z-20 flex h-full items-center justify-center px-4">
          <div
            className="absolute left-1/2 top-1/2 z-10 overflow-hidden shadow-2xl"
            style={{
              width: `${mediaWidth}px`,
              height: `${mediaHeight}px`,
              borderRadius: `${mediaRadius}px`,
              transform: `translate(-50%, -50%) scale(${mediaScale})`,
              transition:
                "width 60ms linear, height 60ms linear, transform 60ms linear, border-radius 60ms linear",
            }}
          >
            <video
              src="https://pub-7ab10ef61efd42148b5549910673d06a.r2.dev/header-video.mp4"
              poster="https://promptundsoehne.com/oclub_crowd.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-black"
              style={{
                opacity: mediaOverlayOpacity,
                transition: "opacity 60ms linear",
              }}
            />
          </div>

          <div className="relative z-30 flex max-w-6xl flex-col items-center justify-center text-center text-white">
            <div className="pointer-events-none leading-[0.92] tracking-tight">
              <div
                className="font-semibold"
                style={{
                  transform: `translateX(-${titleMove}px)`,
                  transition: "transform 60ms linear",
                  fontSize: isMobile
                    ? "clamp(2.6rem, 9vw, 4.4rem)"
                    : "clamp(4rem, 7vw, 7rem)",
                }}
              >
                Built To Be Seen
              </div>

              <div
                className="font-semibold"
                style={{
                  transform: `translateX(${titleMove}px)`,
                  transition: "transform 60ms linear",
                  fontSize: isMobile
                    ? "clamp(2.6rem, 9vw, 4.4rem)"
                    : "clamp(4rem, 7vw, 7rem)",
                }}
              >
                Made To Be Felt
              </div>
            </div>

            <div className="mt-7 space-y-1 text-center uppercase text-white/78 sm:mt-9">
              <p
                style={{
                  transform: `translateX(-${subMove}px)`,
                  transition: "transform 60ms linear",
                  fontSize: isMobile ? "0.72rem" : "0.9rem",
                  letterSpacing: isMobile ? "0.28em" : "0.38em",
                }}
              >
                Design. Motion. AI.
              </p>
              <p
                style={{
                  transform: `translateX(${subMove}px)`,
                  transition: "transform 60ms linear",
                  fontSize: isMobile ? "0.72rem" : "0.9rem",
                  letterSpacing: isMobile ? "0.28em" : "0.38em",
                }}
              >
                Built For Attention.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-center text-[10px] uppercase tracking-[0.35em] text-white/45 sm:text-xs">
          Scroll
        </div>
      </div>
    </section>
  )
}