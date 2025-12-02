"use client"

import { useState, useEffect } from "react"
import { X, Phone, Gift, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import popupCoordinator from "@/lib/popup-coordinator"

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes countdown

  useEffect(() => {
    let hasBeenOnPageLongEnough = false

    // User must be on page for at least 10 seconds before exit intent can trigger
    const minTimeTimer = setTimeout(() => {
      hasBeenOnPageLongEnough = true
    }, 10000) // 10 seconds minimum

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves the document from the top
      // This catches when user is moving to browser tabs, address bar, or close button
      if (e.clientY <= 0 && hasBeenOnPageLongEnough && popupCoordinator.canShow('exit-intent')) {
        setIsVisible(true)
        popupCoordinator.show('exit-intent')
        console.log('Exit intent popup triggered - user leaving page')
      }
    }

    // Additional exit detection: mouse moving to top of viewport
    let lastY = 0
    const handleMouseMove = (e: MouseEvent) => {
      const currentY = e.clientY

      // If mouse is in top 5px and moving upward
      if (currentY <= 5 && lastY > currentY && hasBeenOnPageLongEnough && popupCoordinator.canShow('exit-intent')) {
        setIsVisible(true)
        popupCoordinator.show('exit-intent')
        console.log('Exit intent popup triggered - mouse moving to exit')
      }

      lastY = currentY
    }

    // Keyboard shortcut to test popup (Ctrl + E or Cmd + E)
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault()
        setIsVisible(true)
        popupCoordinator.show('exit-intent')
        console.log('Exit popup triggered by keyboard shortcut (Ctrl/Cmd + E)')
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('keydown', handleKeyPress)

    // Make trigger available globally for testing
    if (typeof window !== 'undefined') {
      (window as Window & { showExitPopup?: () => void }).showExitPopup = () => {
        setIsVisible(true)
        popupCoordinator.show('exit-intent')
        console.log('Exit popup triggered manually')
      }
    }

    return () => {
      clearTimeout(minTimeTimer)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  // Countdown timer
  useEffect(() => {
    if (isVisible && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [isVisible, timeLeft])

  const handleClose = () => {
    setIsVisible(false)
    popupCoordinator.close('exit-intent')
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-[100] animate-in fade-in duration-200"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-2xl mx-4 animate-in zoom-in-95 duration-200">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            aria-label="Close popup"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Content */}
          <div className="p-8 md:p-12 text-center">
            {/* Special Offer Badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-gradient-to-r from-[#C41E3A] to-[#a01829] text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                <Gift className="w-4 h-4" />
                LIMITED TIME OFFER
              </div>
            </div>

            <div className="mb-6 mt-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#C41E3A] to-[#a01829] rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
                🔥 Wait! Special Offer Just for You!
              </h2>
              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 mb-4">
                <p className="text-2xl font-bold text-[#C41E3A] mb-2">
                  15% OFF Your First Project
                </p>
                <p className="text-sm text-[#3c3c3c]">
                  Schedule now and save up to $2,000
                </p>
              </div>
              <p className="text-lg text-[#3c3c3c] mb-2">
                Get a <span className="font-bold text-[#C41E3A]">FREE consultation</span> + <span className="font-bold text-[#C41E3A]">15% discount</span>
              </p>
              <div className="flex items-center justify-center gap-2 text-orange-600 font-semibold">
                <Clock className="w-5 h-5" />
                <span>Offer expires in: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
              </div>
            </div>

            <div className="space-y-3 max-w-md mx-auto mb-6">
              <Button
                size="lg"
                className="w-full text-lg h-14 bg-gradient-to-r from-[#C41E3A] to-[#a01829] hover:from-[#a01829] hover:to-[#C41E3A]"
                onClick={handleClose}
              >
                <Phone className="w-5 h-5 mr-2" />
                Claim My 15% Discount Now!
              </Button>

              <button
                onClick={handleClose}
                className="w-full text-[#3c3c3c] hover:text-[#C41E3A] transition-colors text-sm font-medium"
              >
                No thanks, I'll pay full price
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mb-1" />
                  <div className="text-xs text-[#3c3c3c]">20+ Years</div>
                </div>
                <div className="flex flex-col items-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mb-1" />
                  <div className="text-xs text-[#3c3c3c]">500+ Projects</div>
                </div>
                <div className="flex flex-col items-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mb-1" />
                  <div className="text-xs text-[#3c3c3c]">100% Satisfaction</div>
                </div>
                <div className="flex flex-col items-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mb-1" />
                  <div className="text-xs text-[#3c3c3c]">Licensed & Insured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
