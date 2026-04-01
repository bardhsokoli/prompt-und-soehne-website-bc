"use client"

import { useLanguage } from "@/lib/language-context"
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <ScrollExpandMedia
      mediaType="vimeo"
      mediaSrc="https://player.vimeo.com/video/1179317883?badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&loop=1&muted=1"
      bgImageSrc="https://pub-7ab10ef61efd42148b5549910673d06a.r2.dev/oclub_crowd.jpg"
      scrollToExpand={t("hero.scroll")}
    />
  )
}
