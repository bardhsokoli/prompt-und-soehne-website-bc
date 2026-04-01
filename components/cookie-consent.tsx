"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { X } from "lucide-react"

interface CookiePreferences {
  essential: boolean
  optional: boolean
}

export function CookieConsent() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    optional: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      setIsVisible(true)
    } else {
      setPreferences(JSON.parse(consent))
    }

    // Listen for settings open event
    const handleOpenSettings = () => {
      setIsSettingsOpen(true)
      setIsVisible(true)
    }
    window.addEventListener("openCookieSettings", handleOpenSettings)
    return () => window.removeEventListener("openCookieSettings", handleOpenSettings)
  }, [])

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookieConsent", JSON.stringify(prefs))
    setPreferences(prefs)
    setIsVisible(false)
    setIsSettingsOpen(false)
  }

  const handleAcceptAll = () => {
    savePreferences({ essential: true, optional: true })
  }

  const handleAcceptSelected = () => {
    savePreferences(preferences)
  }

  const handleDecline = () => {
    savePreferences({ essential: true, optional: false })
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-card border border-border rounded-lg shadow-xl overflow-hidden">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-lg font-medium text-card-foreground">
              {t("cookie.title")}
            </h2>
            {isSettingsOpen && (
              <button
                onClick={() => {
                  setIsVisible(false)
                  setIsSettingsOpen(false)
                }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            {t("cookie.description")}
          </p>

          <div className="space-y-4 mb-6">
            {/* Essential Cookies */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-card-foreground">
                  {t("cookie.essential")}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t("cookie.essentialDesc")}
                </p>
              </div>
              <Switch checked={true} disabled />
            </div>

            {/* Optional Cookies */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-card-foreground">
                  {t("cookie.optional")}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t("cookie.optionalDesc")}
                </p>
              </div>
              <Switch
                checked={preferences.optional}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, optional: checked }))
                }
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleAcceptAll}
              className="flex-1 bg-foreground text-background hover:bg-foreground/90"
            >
              {t("cookie.accept")}
            </Button>
            <Button
              onClick={handleAcceptSelected}
              variant="outline"
              className="flex-1 border-border text-foreground hover:bg-accent"
            >
              {t("cookie.acceptSelected")}
            </Button>
            <Button
              onClick={handleDecline}
              variant="ghost"
              className="flex-1 text-muted-foreground hover:text-foreground"
            >
              {t("cookie.decline")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
