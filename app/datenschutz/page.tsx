"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { LanguageProvider, useLanguage } from "@/lib/language-context"

function DatenschutzContent() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Privacy Policy",
      subtitle: "GDPR-compliant data protection declaration",
      lastUpdated: "Last updated: January 2024",
      sections: [
        {
          title: "1. Data Controller",
          content: `The data controller responsible for data processing on this website is:

Prompt Studio BPC GmbH
Vienna, Austria
Email: office@promptundsoehne.com

We take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.`,
        },
        {
          title: "2. Data Collection on Our Website",
          content: `When you visit our website, our web servers automatically collect the following data:
• Browser type and version
• Operating system
• Referrer URL
• Time of server request
• IP address (anonymized)

This data is used solely for statistical purposes and to ensure the security of our systems. This data is not combined with other data sources.`,
        },
        {
          title: "3. Cookies",
          content: `Our website uses cookies. Cookies are small text files that are stored on your device. We use:

Essential Cookies (Always Active)
These cookies are necessary for the website to function properly. They include cookies for:
• Session management
• Security features
• Language preferences

Optional Cookies (With Your Consent)
With your consent, we may use additional cookies for:
• Google reCAPTCHA (spam protection)
• Google Maps integration

You can manage your cookie preferences at any time through the cookie settings link in our footer.`,
        },
        {
          title: "4. Contact Form",
          content: `When you contact us via our contact form, we collect:
• Name
• Email address
• Your message content

This data is used solely to respond to your inquiry. The legal basis is Art. 6(1)(b) GDPR (contract initiation) or Art. 6(1)(f) GDPR (legitimate interest). Your data will be deleted after your request has been processed, unless we are legally required to retain it for a longer period.`,
        },
        {
          title: "5. Your Rights",
          content: `Under the GDPR, you have the following rights:

• Right of access (Art. 15 GDPR)
• Right to rectification (Art. 16 GDPR)
• Right to erasure (Art. 17 GDPR)
• Right to restriction of processing (Art. 18 GDPR)
• Right to data portability (Art. 20 GDPR)
• Right to object (Art. 21 GDPR)

To exercise these rights, please contact us at office@promptundsoehne.com.`,
        },
        {
          title: "6. Data Security",
          content: `We use SSL/TLS encryption to protect your data during transmission. Our website uses HTTPS to ensure that all data exchanged between your browser and our servers is encrypted and secure.`,
        },
        {
          title: "7. Third-Party Services",
          content: `We use the following third-party services:

Vimeo (Video Hosting)
Our videos are hosted on Vimeo. When you play a video, Vimeo may collect data. Please refer to Vimeo's privacy policy for more information.

Cloudflare (Hosting)
Our website is hosted on Cloudflare Pages. Cloudflare may process certain data to provide their services.`,
        },
        {
          title: "8. Changes to This Policy",
          content: `We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.`,
        },
        {
          title: "9. Supervisory Authority",
          content: `You have the right to lodge a complaint with a supervisory authority. The competent supervisory authority in Austria is:

Österreichische Datenschutzbehörde
Barichgasse 40-42
1030 Vienna, Austria
Email: dsb@dsb.gv.at`,
        },
      ],
    },
    de: {
      title: "Datenschutzerklärung",
      subtitle: "DSGVO-konforme Datenschutzerklärung",
      lastUpdated: "Letzte Aktualisierung: Jänner 2024",
      sections: [
        {
          title: "1. Verantwortlicher",
          content: `Der Verantwortliche für die Datenverarbeitung auf dieser Website ist:

Prompt Studio BPC GmbH
Wien, Österreich
E-Mail: office@promptundsoehne.com

Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.`,
        },
        {
          title: "2. Datenerfassung auf unserer Website",
          content: `Beim Besuch unserer Website erfassen unsere Webserver automatisch folgende Daten:
• Browsertyp und -version
• Betriebssystem
• Referrer-URL
• Zeitpunkt der Serveranfrage
• IP-Adresse (anonymisiert)

Diese Daten werden ausschließlich für statistische Zwecke und zur Gewährleistung der Systemsicherheit verwendet. Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.`,
        },
        {
          title: "3. Cookies",
          content: `Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden. Wir verwenden:

Essentielle Cookies (Immer aktiv)
Diese Cookies sind für das ordnungsgemäße Funktionieren der Website erforderlich. Sie umfassen Cookies für:
• Sitzungsverwaltung
• Sicherheitsfunktionen
• Spracheinstellungen

Optionale Cookies (Mit Ihrer Zustimmung)
Mit Ihrer Zustimmung können wir zusätzliche Cookies verwenden für:
• Google reCAPTCHA (Spam-Schutz)
• Google Maps Integration

Sie können Ihre Cookie-Einstellungen jederzeit über den Link zu den Cookie-Einstellungen in unserer Fußzeile verwalten.`,
        },
        {
          title: "4. Kontaktformular",
          content: `Wenn Sie uns über unser Kontaktformular kontaktieren, erfassen wir:
• Name
• E-Mail-Adresse
• Ihren Nachrichteninhalt

Diese Daten werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Ihre Daten werden nach Bearbeitung Ihrer Anfrage gelöscht, sofern wir nicht gesetzlich verpflichtet sind, diese länger aufzubewahren.`,
        },
        {
          title: "5. Ihre Rechte",
          content: `Nach der DSGVO haben Sie folgende Rechte:

• Auskunftsrecht (Art. 15 DSGVO)
• Recht auf Berichtigung (Art. 16 DSGVO)
• Recht auf Löschung (Art. 17 DSGVO)
• Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
• Recht auf Datenübertragbarkeit (Art. 20 DSGVO)
• Widerspruchsrecht (Art. 21 DSGVO)

Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter office@promptundsoehne.com.`,
        },
        {
          title: "6. Datensicherheit",
          content: `Wir verwenden SSL/TLS-Verschlüsselung zum Schutz Ihrer Daten während der Übertragung. Unsere Website verwendet HTTPS, um sicherzustellen, dass alle zwischen Ihrem Browser und unseren Servern ausgetauschten Daten verschlüsselt und sicher sind.`,
        },
        {
          title: "7. Drittanbieter-Dienste",
          content: `Wir nutzen folgende Drittanbieter-Dienste:

Vimeo (Video-Hosting)
Unsere Videos werden auf Vimeo gehostet. Wenn Sie ein Video abspielen, kann Vimeo Daten erfassen. Weitere Informationen finden Sie in der Datenschutzrichtlinie von Vimeo.

Cloudflare (Hosting)
Unsere Website wird auf Cloudflare Pages gehostet. Cloudflare kann bestimmte Daten verarbeiten, um seine Dienste bereitzustellen.`,
        },
        {
          title: "8. Änderungen dieser Richtlinie",
          content: `Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir werden Sie über Änderungen informieren, indem wir die neue Datenschutzerklärung auf dieser Seite veröffentlichen und das Datum der letzten Aktualisierung aktualisieren.`,
        },
        {
          title: "9. Aufsichtsbehörde",
          content: `Sie haben das Recht, eine Beschwerde bei einer Aufsichtsbehörde einzureichen. Die zuständige Aufsichtsbehörde in Österreich ist:

Österreichische Datenschutzbehörde
Barichgasse 40-42
1030 Wien, Österreich
E-Mail: dsb@dsb.gv.at`,
        },
      ],
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
            <span>{language === "de" ? "Zurück zur Startseite" : "Back to Home"}</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-light text-foreground mb-2">
            {c.title}
          </h1>
          <p className="text-muted-foreground font-light">{c.subtitle}</p>
          <p className="text-sm text-muted-foreground mt-2">{c.lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {c.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-medium text-foreground mb-4">
                {section.title}
              </h2>
              <div className="text-muted-foreground font-light leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}

export default function DatenschutzPage() {
  return (
    <LanguageProvider>
      <DatenschutzContent />
    </LanguageProvider>
  )
}
