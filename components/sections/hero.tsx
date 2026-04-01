"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const mediaWidth = useTransform(scrollYProgress, [0, 1], ["280px", "100vw"])
  const mediaHeight = useTransform(scrollYProgress, [0, 1], ["420px", "100vh"])
  const mediaBorderRadius = useTransform(scrollYProgress, [0, 1], ["24px", "0px"])
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  const headlineTopX = useTransform(scrollYProgress, [0, 1], ["0px", "-180px"])
  const headlineBottomX = useTransform(scrollYProgress, [0, 1], ["0px", "180px"])

  const subTopX = useTransform(scrollYProgress, [0, 1], ["0px", "-120px"])
  const subBottomX = useTransform(scrollYProgress, [0, 1], ["0px", "120px"])

  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.15])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.75, 0.55])

  return (
    <section ref={sectionRef} className="relative h-[220vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://promptundsoehne.com/oclub_crowd.jpg"
            alt="Prompt & Söhne background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </motion.div>

        <div className="relative z-20 flex h-full items-center justify-center px-4">
          <motion.div
            style={{
              width: mediaWidth,
              height: mediaHeight,
              borderRadius: mediaBorderRadius,
              scale: mediaScale,
            }}
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-2xl will-change-transform"
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
            <motion.div
              style={{ opacity: overlayOpacity }}
              className="absolute inset-0 bg-black"
            />
          </motion.div>

          <div className="relative z-30 flex max-w-6xl flex-col items-center justify-center text-center text-white">
            <div className="pointer-events-none space-y-0 leading-none">
              <motion.h1
                style={{ x: headlineTopX }}
                className="text-5xl font-semibold tracking-tight sm:text-7xl md:text-8xl lg:text-[9rem]"
              >
                Prompt &
              </motion.h1>

              <motion.h1
                style={{ x: headlineBottomX }}
                className="text-5xl font-semibold tracking-tight sm:text-7xl md:text-8xl lg:text-[9rem]"
              >
                Söhne
              </motion.h1>
            </div>

            <div className="mt-8 space-y-1 text-center text-sm uppercase tracking-[0.28em] text-white/75 sm:mt-10 sm:text-base">
              <motion.p style={{ x: subTopX }}>Design. Motion. AI.</motion.p>
              <motion.p style={{ x: subBottomX }}>Built for attention.</motion.p>
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
