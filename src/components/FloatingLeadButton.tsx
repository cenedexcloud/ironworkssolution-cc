"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, X } from "lucide-react"

interface FloatingLeadButtonProps {
  onClick: () => void
}

export default function FloatingLeadButton({ onClick }: FloatingLeadButtonProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-2">
      <Button
        onClick={onClick}
        size="lg"
        className="shadow-2xl bg-gradient-to-r from-[#C41E3A] to-[#a01829] hover:from-[#a01829] hover:to-[#C41E3A] text-white px-6 py-6 rounded-full group animate-bounce hover:animate-none"
      >
        <Mail className="w-5 h-5 mr-2" />
        <span className="font-bold">Quick Quote</span>
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
