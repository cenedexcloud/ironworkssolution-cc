"use client"

import { useState } from "react"
import { Rocket } from "lucide-react"

export default function ExitPopupTester() {
  const [isHovered, setIsHovered] = useState(false)

  const triggerPopup = () => {
    // Clear sessionStorage to allow popup to show again
    sessionStorage.removeItem('exitPopupShown')

    // Trigger the global function
    const win = window as Window & { showExitPopup?: () => void }
    if (typeof window !== 'undefined' && win.showExitPopup) {
      win.showExitPopup()
    }
  }

  return (
    <button
      onClick={triggerPopup}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-24 left-6 z-50 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 group"
      style={{
        padding: isHovered ? '12px 20px' : '12px',
        width: isHovered ? 'auto' : '48px',
      }}
    >
      <Rocket className="w-6 h-6 flex-shrink-0" />
      {isHovered && (
        <span className="font-semibold whitespace-nowrap text-sm">
          Test Exit Popup
        </span>
      )}
    </button>
  )
}
