"use client"

import { useLanguage } from "@/lib/language-context"
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <ScrollExpandMedia
      mediaType="vimeo"
      mediaSrc="https://player.vimeo.com/video/1179317883"
      bgImageSrc="https://pub-7ab10ef61efd42148b5549910673d06a.r2.dev/oclub_crowd.jpg"
      scrollToExpand={t("hero.scroll")}
    />
  )
}
