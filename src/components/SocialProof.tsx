"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"

const proofItems = [
  "★★★★★ John in Malibu just booked a Custom Gate",
  "★★★★★ Sarah in Beverly Hills requested a Free Quote",
  "★★★★★ Michael in Pasadena scheduled a Consultation",
  "★★★★★ Jennifer in Calabasas hired us for HOA Fencing",
  "★★★★★ David in Santa Monica just downloaded the Design Guide"
]

export default function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % proofItems.length)
        setIsVisible(true)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm hidden lg:block">
      <div
        className={`bg-white border border-gray-200 rounded-lg p-3 shadow-lg transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="flex items-start gap-2">
          <div className="flex-1">
            <p className="text-xs text-[#1a1a1a]">
              {proofItems[currentIndex]}
            </p>
            <p className="text-[10px] text-gray-500 mt-1">Just now</p>
          </div>
        </div>
      </div>
    </div>
  )
}
