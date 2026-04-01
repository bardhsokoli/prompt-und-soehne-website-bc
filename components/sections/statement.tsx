"use client"

import { useLanguage } from "@/lib/language-context"

export function StatementSection() {
  const { t } = useLanguage()

  return (
    <section className="relative bg-background py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center text-foreground tracking-tight text-balance">
          {t("statement.title")}
        </h2>
      </div>
    </section>
  )
}
