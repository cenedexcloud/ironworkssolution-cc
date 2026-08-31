"use client"

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react"

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""
const SCRIPT_ID = "cf-turnstile-script"
const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"

/** Without a site key the widget is skipped and forms submit unchallenged. */
export const turnstileEnabled = SITE_KEY.length > 0

type TurnstileApi = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string
  reset: (id: string) => void
  remove: (id: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

let scriptPromise: Promise<void> | null = null

function loadScript() {
  if (scriptPromise) return scriptPromise

  scriptPromise = new Promise<void>((resolve, reject) => {
    if (window.turnstile) {
      resolve()
      return
    }

    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null
    const script = existing ?? document.createElement("script")
    script.addEventListener("load", () => resolve())
    script.addEventListener("error", () => reject(new Error("Turnstile failed to load.")))

    if (!existing) {
      script.id = SCRIPT_ID
      script.src = SCRIPT_SRC
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }
  })

  return scriptPromise
}

export type TurnstileHandle = { reset: () => void }

type Props = {
  /** Fires with a fresh token, or "" when the token expires or errors. */
  onToken: (token: string) => void
  theme?: "light" | "dark"
  className?: string
}

export const Turnstile = forwardRef<TurnstileHandle, Props>(function Turnstile(
  { onToken, theme = "light", className },
  ref
) {
  const hostRef = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | null>(null)
  const onTokenRef = useRef(onToken)
  onTokenRef.current = onToken

  useImperativeHandle(ref, () => ({
    reset() {
      if (widgetId.current) {
        window.turnstile?.reset(widgetId.current)
        onTokenRef.current("")
      }
    },
  }))

  useEffect(() => {
    if (!turnstileEnabled) return
    let cancelled = false

    loadScript()
      .then(() => {
        if (cancelled || !hostRef.current || !window.turnstile) return
        widgetId.current = window.turnstile.render(hostRef.current, {
          sitekey: SITE_KEY,
          theme,
          callback: (token: string) => onTokenRef.current(token),
          "expired-callback": () => onTokenRef.current(""),
          "error-callback": () => onTokenRef.current(""),
        })
      })
      .catch(() => onTokenRef.current(""))

    return () => {
      cancelled = true
      if (widgetId.current) window.turnstile?.remove(widgetId.current)
      widgetId.current = null
    }
  }, [theme])

  if (!turnstileEnabled) return null

  return <div ref={hostRef} className={className} />
})
