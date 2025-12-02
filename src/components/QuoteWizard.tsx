"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, ChevronRight, ChevronLeft, Upload } from "lucide-react"

interface QuoteWizardProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuoteWizard({ isOpen, onClose }: QuoteWizardProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fenceType: "",
    length: "",
    finish: "",
    name: "",
    email: "",
    phone: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

  const nextStep = () => setStep(Math.min(step + 1, 4))
  const prevStep = () => setStep(Math.max(step - 1, 1))

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        alert('Thank you! We\'ll send your quote within 24 hours.')
        onClose()
        setStep(1)
        setFormData({
          fenceType: "",
          length: "",
          finish: "",
          name: "",
          email: "",
          phone: ""
        })
      } else {
        alert(result.message || 'Failed to submit. Please try again or call us at 323-470-2101.')
      }
    } catch (error) {
      console.error('Quote submission error:', error)
      alert('Failed to submit. Please call us at 323-470-2101.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const fenceTypes = [
    "Residential Fence",
    "Commercial Fence",
    "Custom Gate",
    "Automated Gate",
    "Railings",
    "Other"
  ]

  const finishes = [
    "Powder Coated Black",
    "Powder Coated Bronze",
    "Galvanized",
    "Custom Color",
    "Not Sure"
  ]

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <Card
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#e5e5e5] p-6 flex items-center justify-between z-10">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a1a]">Get Your Free Quote</h2>
            <p className="text-sm text-[#3c3c3c]">Step {step} of 4</p>
          </div>
          <button onClick={onClose} className="text-[#3c3c3c] hover:text-[#C41E3A]">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 pt-4">
          <div className="h-2 bg-[#e5e5e5] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#C41E3A] to-[#A71930] transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Steps */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">What type of project?</h3>
              <div className="grid grid-cols-2 gap-4">
                {fenceTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setFormData({ ...formData, fenceType: type })
                      nextStep()
                    }}
                    className="p-4 border-2 border-[#e5e5e5] rounded-lg hover:border-[#C41E3A] hover:bg-[#C41E3A]/5 transition-all text-left font-semibold"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Approximate length needed?</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="length">Linear Feet (approximate)</Label>
                  <Input
                    id="length"
                    type="number"
                    placeholder="e.g., 100"
                    value={formData.length}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, length: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <p className="text-sm text-[#3c3c3c]">
                  Don't know? That's okay! We'll help you measure during the consultation.
                </p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Preferred finish?</h3>
              <div className="grid grid-cols-1 gap-3">
                {finishes.map((finish) => (
                  <button
                    key={finish}
                    onClick={() => {
                      setFormData({ ...formData, finish })
                      nextStep()
                    }}
                    className="p-4 border-2 border-[#e5e5e5] rounded-lg hover:border-[#C41E3A] hover:bg-[#C41E3A]/5 transition-all text-left font-semibold"
                  >
                    {finish}
                  </button>
                ))}
              </div>

              <div className="mt-6 p-4 border-2 border-dashed border-[#e5e5e5] rounded-lg text-center">
                <Upload className="w-8 h-8 text-[#3c3c3c] mx-auto mb-2" />
                <p className="text-sm text-[#3c3c3c]">Upload a photo (optional)</p>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Where should we send your quote?</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div className="mt-6 p-6 bg-gradient-to-r from-[#1a1a1a] to-[#3c3c3c] rounded-lg text-white">
                  <h4 className="font-bold mb-2">Estimated Quote Range:</h4>
                  <p className="text-3xl font-bold text-[#C41E3A]">$3,500 - $6,500</p>
                  <p className="text-sm text-white/70 mt-2">
                    Final price determined after on-site consultation
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="sticky bottom-0 bg-white border-t border-[#e5e5e5] p-6 flex items-center justify-between">
          {step > 1 && step < 4 && (
            <Button variant="outline" onClick={prevStep}>
              <ChevronLeft className="w-4 h-4" />
              Back
            </Button>
          )}
          {step < 4 ? (
            <Button onClick={nextStep} className="ml-auto">
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              className="ml-auto w-full"
              size="lg"
              onClick={handleSubmit}
              disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
            >
              {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
            </Button>
          )}
        </div>
      </Card>
    </div>
  )
}
