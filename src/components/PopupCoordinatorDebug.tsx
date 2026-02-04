"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import popupCoordinator from "@/lib/popup-coordinator"
import { RotateCcw, TestTube2 } from "lucide-react"

export default function PopupCoordinatorDebug() {
  const [isVisible, setIsVisible] = useState(false)
  const [status, setStatus] = useState<string>("")

  // Show debug panel when Ctrl/Cmd + Shift + P is pressed
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'P') {
        e.preventDefault()
        setIsVisible(prev => !prev)
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [])

  const handleReset = () => {
    popupCoordinator.reset()
    setStatus("All popup states reset! Refresh the page to test again.")
    setTimeout(() => setStatus(""), 3000)
  }

  const testExitPopup = () => {
    if (typeof window !== 'undefined') {
      const trigger = (window as Window & { showExitPopup?: () => void }).showExitPopup
      if (trigger) {
        trigger()
        setStatus("Exit popup triggered!")
      } else {
        setStatus("Exit popup trigger not found")
      }
      setTimeout(() => setStatus(""), 3000)
    }
  }

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-[200]">
        <Button
          onClick={() => setIsVisible(true)}
          size="sm"
          variant="outline"
          className="bg-white/90 backdrop-blur text-xs"
        >
          <TestTube2 className="w-3 h-3 mr-1" />
          Popup Debug
        </Button>
      </div>
    )
  }

  return (
    <Card className="fixed bottom-4 right-4 z-[200] p-4 bg-white shadow-2xl max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-sm flex items-center gap-2">
          <TestTube2 className="w-4 h-4" />
          Popup Coordinator Debug
        </h3>
        <Button
          onClick={() => setIsVisible(false)}
          size="sm"
          variant="ghost"
          className="h-6 w-6 p-0"
        >
          ×
        </Button>
      </div>

      {status && (
        <div className="mb-3 p-2 bg-blue-50 border border-blue-200 rounded text-xs text-blue-800">
          {status}
        </div>
      )}

      <div className="space-y-2">
        <Button
          onClick={handleReset}
          size="sm"
          variant="outline"
          className="w-full text-xs"
        >
          <RotateCcw className="w-3 h-3 mr-1" />
          Reset All Popups
        </Button>

        <Button
          onClick={testExitPopup}
          size="sm"
          variant="outline"
          className="w-full text-xs"
        >
          Test Exit Popup (Ctrl+E)
        </Button>

        <div className="pt-2 border-t text-xs text-gray-600">
          <p className="font-semibold mb-1">Keyboard Shortcuts:</p>
          <ul className="space-y-1 text-xs">
            <li>• Ctrl/Cmd + E: Exit Popup</li>
            <li>• Ctrl/Cmd + Shift + P: Toggle Debug</li>
          </ul>
        </div>

        <div className="pt-2 border-t text-xs text-gray-600">
          <p className="font-semibold mb-1">Popup Timing:</p>
          <ul className="space-y-1 text-xs">
            <li>• Quick Lead: 3 min, then every 5 min</li>
            <li>• Exit Intent: When user leaves page (10s min)</li>
            <li>• Min gap between popups: 30s</li>
          </ul>
        </div>
      </div>
    </Card>
  )
}
