"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, X } from "lucide-react"

export default function FloatingPhoneButton() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      <Button
        onClick={() => window.location.href = "tel:323-470-2101"}
        size="lg"
        className="shadow-2xl bg-gradient-to-r from-[#228B22] to-[#1a6b1a] hover:from-[#1a6b1a] hover:to-[#228B22] text-white px-6 py-6 rounded-full group animate-bounce hover:animate-none"
      >
        <Phone className="w-5 h-5 mr-2" />
        <span className="font-bold">323-470-2101</span>
      </Button>
      <button
        onClick={() => setIsVisible(false)}
        className="text-xs text-[#3c3c3c] hover:text-[#C41E3A] underline"
      >
        Hide
      </button>
    </div>
  )
}
