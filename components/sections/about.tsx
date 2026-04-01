"use client"

import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="relative bg-background py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            {t("about.title")}
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-6 text-center">
          <p className="text-lg md:text-xl font-light text-muted-foreground leading-relaxed">
            {t("about.description")}
          </p>
          <p className="text-lg md:text-xl font-light text-muted-foreground leading-relaxed">
            {t("about.description2")}
          </p>
        </div>

        {/* Location Badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border">
            <span className="w-2 h-2 rounded-full bg-foreground" />
            <span className="text-sm font-light text-muted-foreground tracking-wider uppercase">
              Vienna, Austria
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
