"use client"

import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const tickingRef = useRef(false)

  const [progress, setProgress] = useState(0)
  const [viewport, setViewport] = useState({ width: 1440, height: 900 })

  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    const updateScrollProgress = () => {
      if (!sectionRef.current) {
        tickingRef.current = false
        return
      }

      const rect = sectionRef.current.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const current = Math.min(Math.max(-rect.top, 0), total)
      const next = total > 0 ? current / total : 0

      setProgress(next)
      tickingRef.current = false
    }

    const onScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(updateScrollProgress)
        tickingRef.current = true
      }
    }

    updateViewport()
    updateScrollProgress()

    window.addEventListener("resize", updateViewport)
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("resize", updateViewport)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const isMobile = viewport.width < 768

  const lerp = (start: number, end: number, t: number) => {
    return start + (end - start) * t
  }

  const eased = 1 - Math.pow(1 - progress, 3)

  const mediaWidth = isMobile
    ? lerp(280, viewport.width, eased)
    : lerp(320, viewport.width, eased)

  const mediaHeight = isMobile
    ? lerp(420, viewport.height, eased)
    : lerp(500, viewport.height, eased)

  const mediaRadius = lerp(24, 0, eased)

  const titleMove = isMobile
    ? lerp(0, viewport.width * 0.38, eased)
    : lerp(0, viewport.width * 0.46, eased)

  const subMove = isMobile
    ? lerp(0, viewport.width * 0.2, eased)
    : lerp(0, viewport.width * 0.24, eased)

  const backgroundOpacity = lerp(0.82, 0.5, eased)
  const mediaOverlayOpacity = lerp(0.1, 0.03, eased)

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
              transform: `scale(${lerp(1, 1.04, eased)})`,
            }}
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06),rgba(0,0,0,0.45))]" />
        </div>

        <div className="relative z-20 flex h-full items-center justify-center px-4">
          <div
            className="absolute left-1/2 top-1/2 z-10 overflow-hidden shadow-2xl"
            style={{
              width: `${mediaWidth}px`,
              height: `${mediaHeight}px`,
              borderRadius: `${mediaRadius}px`,
              transform: "translate(-50%, -50%)",
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
              style={{ opacity: mediaOverlayOpacity }}
            />
          </div>

          <div className="relative z-30 flex max-w-6xl flex-col items-center justify-center text-center text-white">
            <div className="pointer-events-none leading-[0.92] tracking-tight">
              <div
                className="font-semibold"
                style={{
                  transform: `translateX(-${titleMove}px)`,
                  fontSize: isMobile
                    ? "clamp(2.2rem, 7.5vw, 3.5rem)"
                    : "clamp(2.8rem, 4.8vw, 5.2rem)",
                }}
              >
                Built To Be Seen
              </div>

              <div
                className="font-semibold"
                style={{
                  transform: `translateX(${titleMove}px)`,
                  fontSize: isMobile
                    ? "clamp(2.2rem, 7.5vw, 3.5rem)"
                    : "clamp(2.8rem, 4.8vw, 5.2rem)",
                }}
              >
                Made To Be Felt
              </div>
            </div>

            <div className="mt-7 space-y-1 text-center uppercase text-white/80 sm:mt-9">
              <p
                style={{
                  transform: `translateX(-${subMove}px)`,
                  fontSize: isMobile ? "0.7rem" : "0.82rem",
                  letterSpacing: isMobile ? "0.24em" : "0.34em",
                }}
              >
                Design. Motion. AI.
              </p>
              <p
                style={{
                  transform: `translateX(${subMove}px)`,
                  fontSize: isMobile ? "0.7rem" : "0.82rem",
                  letterSpacing: isMobile ? "0.24em" : "0.34em",
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