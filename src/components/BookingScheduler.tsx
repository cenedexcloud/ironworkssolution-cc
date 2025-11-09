"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, User, Mail, Phone } from "lucide-react"

interface BookingSchedulerProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingScheduler({ isOpen, onClose }: BookingSchedulerProps) {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: ""
  })

  // Available time slots
  const timeSlots = [
    "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ]

  // Next 14 days
  const availableDates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() + i + 1)
    return date.toISOString().split('T')[0]
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const booking = {
      ...formData,
      date: selectedDate,
      time: selectedTime,
    }

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking),
      })

      const result = await response.json()

      if (result.success) {
        alert(`Consultation scheduled for ${selectedDate} at ${selectedTime}. We'll send you a confirmation email shortly!`)
        onClose()
        setStep(1)
        setSelectedDate("")
        setSelectedTime("")
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: ""
        })
      } else {
        alert(result.message || 'Failed to book. Please try again or call us at 323-470-2101.')
      }
    } catch (error) {
      console.error('Booking submission error:', error)
      alert('Failed to book consultation. Please call us at 323-470-2101.')
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#1a1a1a]">
            Schedule Your Free Consultation
          </DialogTitle>
        </DialogHeader>

        <div className="py-6">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className={`flex items-center ${step >= 1 ? 'text-[#C41E3A]' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-[#C41E3A]' : 'bg-gray-300'} text-white font-bold`}>
                1
              </div>
              <span className="ml-2 text-sm font-medium">Date & Time</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300 mx-4" />
            <div className={`flex items-center ${step >= 2 ? 'text-[#C41E3A]' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-[#C41E3A]' : 'bg-gray-300'} text-white font-bold`}>
                2
              </div>
              <span className="ml-2 text-sm font-medium">Your Details</span>
            </div>
          </div>

          {/* Step 1: Date & Time Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <Label className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-[#C41E3A]" />
                  Select a Date
                </Label>
                <div className="grid grid-cols-7 gap-2">
                  {availableDates.map((date) => {
                    const dateObj = new Date(date)
                    const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' })
                    const dayNum = dateObj.getDate()

                    return (
                      <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`p-3 rounded-lg border-2 text-center transition-all ${
                          selectedDate === date
                            ? 'border-[#C41E3A] bg-[#C41E3A] text-white'
                            : 'border-gray-200 hover:border-[#C41E3A]'
                        }`}
                      >
                        <div className="text-xs">{dayName}</div>
                        <div className="text-lg font-bold">{dayNum}</div>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <Label className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-[#C41E3A]" />
                  Select a Time
                </Label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-lg border-2 text-center transition-all ${
                        selectedTime === time
                          ? 'border-[#C41E3A] bg-[#C41E3A] text-white'
                          : 'border-gray-200 hover:border-[#C41E3A]'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                onClick={() => setStep(2)}
                disabled={!selectedDate || !selectedTime}
                className="w-full"
                size="lg"
              >
                Continue to Your Details
              </Button>
            </div>
          )}

          {/* Step 2: Contact Information */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-[#f8f6f3] p-4 rounded-lg mb-6">
                <p className="text-sm text-[#3c3c3c]">
                  <strong>Selected:</strong> {new Date(selectedDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })} at {selectedTime}
                </p>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-[#C41E3A] text-sm hover:underline mt-2"
                >
                  Change date/time
                </button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="book-name" className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#C41E3A]" />
                  Full Name *
                </Label>
                <Input
                  id="book-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="John Smith"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="book-email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#C41E3A]" />
                  Email *
                </Label>
                <Input
                  id="book-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="book-phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C41E3A]" />
                  Phone *
                </Label>
                <Input
                  id="book-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="book-project">Project Type (Optional)</Label>
                <Input
                  id="book-project"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  placeholder="e.g., Residential fence, Commercial gate"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button type="submit" className="flex-1" size="lg">
                  Confirm Booking
                </Button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
