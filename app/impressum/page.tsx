"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { LanguageProvider, useLanguage } from "@/lib/language-context"

function ImpressumContent() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Impressum",
      subtitle: "Legal Notice according to § 5 ECG (Austrian E-Commerce Act)",
      sections: [
        {
          title: "Company Information",
          items: [
            { label: "Company Name", value: "Prompt Studio BPC GmbH" },
            { label: "Legal Form", value: "GmbH (Limited Liability Company)" },
            { label: "Registered Office", value: "Vienna, Austria" },
            { label: "EUID", value: "ATBRA.675636-000" },
            { label: "VAT ID", value: "To be assigned" },
          ],
        },
        {
          title: "Contact",
          items: [
            { label: "Email", value: "office@promptundsoehne.com" },
            { label: "Website", value: "www.promptundsoehne.com" },
          ],
        },
        {
          title: "Business Activities",
          items: [
            { label: "Industry", value: "Creative Agency / Media Production" },
            { label: "Services", value: "Video Production, Photography, Graphic Design, Marketing Solutions, AI Content Production, Web Design, Brand Identity Design" },
          ],
        },
        {
          title: "Regulatory Authority",
          items: [
            { label: "Trade Authority", value: "Magistrat der Stadt Wien" },
            { label: "Applicable Law", value: "Austrian Law" },
          ],
        },
      ],
      disclaimer: {
        title: "Disclaimer",
        content: "Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content. All information on this website has been carefully checked. However, no guarantee can be given for the correctness, completeness, and topicality of the information provided.",
      },
      copyright: {
        title: "Copyright",
        content: "The content and works created by the site operators on these pages are subject to Austrian copyright law. The reproduction, editing, distribution, and any kind of use outside the limits of copyright law require the written consent of the respective author or creator.",
      },
    },
    de: {
      title: "Impressum",
      subtitle: "Offenlegung gemäß § 5 ECG",
      sections: [
        {
          title: "Unternehmensinformationen",
          items: [
            { label: "Firmenname", value: "Prompt Studio BPC GmbH" },
            { label: "Rechtsform", value: "GmbH (Gesellschaft mit beschränkter Haftung)" },
            { label: "Sitz", value: "Wien, Österreich" },
            { label: "EUID", value: "ATBRA.675636-000" },
            { label: "UID-Nummer", value: "Wird zugewiesen" },
          ],
        },
        {
          title: "Kontakt",
          items: [
            { label: "E-Mail", value: "office@promptundsoehne.com" },
            { label: "Website", value: "www.promptundsoehne.com" },
          ],
        },
        {
          title: "Geschäftstätigkeit",
          items: [
            { label: "Branche", value: "Kreativagentur / Medienproduktion" },
            { label: "Leistungen", value: "Videoproduktion, Fotografie, Grafikdesign, Marketing-Lösungen, KI-Content-Produktion, Webdesign, Markenidentität" },
          ],
        },
        {
          title: "Aufsichtsbehörde",
          items: [
            { label: "Gewerbebehörde", value: "Magistrat der Stadt Wien" },
            { label: "Anwendbares Recht", value: "Österreichisches Recht" },
          ],
        },
      ],
      disclaimer: {
        title: "Haftungsausschluss",
        content: "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Alle Angaben auf dieser Website wurden sorgfältig geprüft. Es kann jedoch keine Garantie für die Richtigkeit, Vollständigkeit und Aktualität der Angaben übernommen werden.",
      },
      copyright: {
        title: "Urheberrecht",
        content: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
      },
    },
  }

  const c = content[language]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-light text-foreground mb-2">
            {c.title}
          </h1>
          <p className="text-muted-foreground font-light">{c.subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {c.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-medium text-foreground mb-6 pb-2 border-b border-border">
                {section.title}
              </h2>
              <dl className="space-y-4">
                {section.items.map((item) => (
                  <div key={item.label} className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <dt className="text-muted-foreground font-light">{item.label}</dt>
                    <dd className="text-foreground sm:col-span-2">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}

          <section>
            <h2 className="text-xl font-medium text-foreground mb-6 pb-2 border-b border-border">
              {c.disclaimer.title}
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              {c.disclaimer.content}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-6 pb-2 border-b border-border">
              {c.copyright.title}
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              {c.copyright.content}
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

export default function ImpressumPage() {
  return (
    <LanguageProvider>
      <ImpressumContent />
    </LanguageProvider>
  )
}
