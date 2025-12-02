"use client"

import { useState } from "react"
import { X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-[#C41E3A] via-[#E03A4F] to-[#C41E3A] text-white py-3 fixed top-0 left-0 right-0 z-50 shadow-xl border-b border-[#C41E3A]/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <Sparkles className="w-5 h-5 flex-shrink-0 animate-pulse" />
            <p className="text-sm md:text-base font-bold tracking-wide">
              <span className="hidden sm:inline">🔥 </span>
              <span className="hidden md:inline">Limited Time: </span>
              Fall Fence Tune-Up – 10% Off Repairs
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              size="sm"
              className="bg-white text-[#C41E3A] hover:bg-white/90 flex-shrink-0 font-bold shadow-lg h-9 px-5"
            >
              Claim Offer
            </Button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
              aria-label="Close banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
