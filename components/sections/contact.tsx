"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      // In production, this would send to office@promptundsoehne.com
      // For now, we simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Form data:", data)
      setSubmitStatus("success")
      e.currentTarget.reset()
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative bg-background py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            {t("contact.subtitle")}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-light text-foreground">
              {t("contact.name")}
            </Label>
            <Input
              id="name"
              name="name"
              required
              className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-foreground"
              placeholder="John Doe"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-light text-foreground">
              {t("contact.email")}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-foreground"
              placeholder="john@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-light text-foreground">
              {t("contact.message")}
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={6}
              className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-foreground resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-foreground text-background hover:bg-foreground/90 font-light tracking-wider uppercase"
          >
            {isSubmitting ? t("contact.sending") : t("contact.send")}
          </Button>

          {submitStatus === "success" && (
            <p className="text-center text-sm text-green-500 font-light">
              {t("contact.success")}
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-center text-sm text-destructive font-light">
              {t("contact.error")}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
