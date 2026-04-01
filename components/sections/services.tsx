"use client"

import { useLanguage } from "@/lib/language-context"

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    t("services.video"),
    t("services.photography"),
    t("services.graphicDesign"),
    t("services.marketing"),
    t("services.ai"),
    t("services.web"),
    t("services.brand"),
  ]

  return (
    <section id="services" className="relative bg-background py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            {t("services.title")}
          </h2>
        </div>

        {/* Services List - Horizontal on desktop */}
        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-4 md:gap-x-4">
          {services.map((service, index) => (
            <span key={service} className="flex items-center">
              <span className="text-lg md:text-xl lg:text-2xl font-light text-foreground tracking-wide">
                {service}
              </span>
              {index < services.length - 1 && (
                <span className="ml-3 md:ml-4 text-muted-foreground">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
