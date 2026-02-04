"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { X, Mail, Phone, User, ArrowRight } from "lucide-react"

interface QuickLeadCaptureProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuickLeadCapture({ isOpen, onClose }: QuickLeadCaptureProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/quick-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you! We\'ll contact you soon.' })
        setFormData({
          name: "",
          email: "",
          phone: ""
        })
        // Close modal after 2 seconds
        setTimeout(() => {
          onClose()
        }, 2000)
      } else {
        setSubmitStatus({ type: 'error', message: result.message || 'Failed to submit. Please try again.' })
      }
    } catch (error) {
      console.error('Submit error:', error)
      setSubmitStatus({ type: 'error', message: 'Failed to submit. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <Card
        className="relative max-w-md w-full p-8 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#3c3c3c] hover:text-[#C41E3A] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#C41E3A] to-[#a01829] rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-2">
            Get Your Free Quote
          </h2>
          <p className="text-[#3c3c3c]">
            Leave your details and we'll contact you within 1 hour
          </p>
        </div>

        {submitStatus && (
          <div className={`mb-4 p-4 rounded-lg ${
            submitStatus.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="quick-name" className="text-[#1a1a1a] font-semibold mb-2 flex items-center gap-2">
              <User className="w-4 h-4 text-[#C41E3A]" />
              Your Name *
            </Label>
            <Input
              id="quick-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Smith"
              className="border-[#e5e5e5] focus:border-[#C41E3A] text-lg py-6"
            />
          </div>

          <div>
            <Label htmlFor="quick-email" className="text-[#1a1a1a] font-semibold mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#C41E3A]" />
              Email Address *
            </Label>
            <Input
              id="quick-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
              className="border-[#e5e5e5] focus:border-[#C41E3A] text-lg py-6"
            />
          </div>

          <div>
            <Label htmlFor="quick-phone" className="text-[#1a1a1a] font-semibold mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#C41E3A]" />
              Phone Number *
            </Label>
            <Input
              id="quick-phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(555) 123-4567"
              className="border-[#e5e5e5] focus:border-[#C41E3A] text-lg py-6"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-6 text-lg bg-gradient-to-r from-[#C41E3A] to-[#a01829] hover:from-[#a01829] hover:to-[#C41E3A]"
          >
            {isSubmitting ? 'Sending...' : 'Get Free Quote'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </form>

        <p className="text-xs text-center text-[#3c3c3c] mt-4">
          We respect your privacy. Your information is secure and will not be shared.{" "}
          <Link href="/privacy-policy" className="text-[#C41E3A] hover:underline">
            Privacy Policy
          </Link>
        </p>
      </Card>
    </div>
  )
}
