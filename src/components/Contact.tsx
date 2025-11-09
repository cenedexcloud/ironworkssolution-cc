"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Upload } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    content: "323-470-2101",
    subtitle: "License #1141599"
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "info@ironworkssolution.net",
    subtitle: "24-Hour Response Time"
  },
  {
    icon: MapPin,
    title: "Service Area",
    content: "Southern California",
    subtitle: "Los Angeles, Orange County & Beyond"
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon-Fri: 8AM-5PM",
    subtitle: "Sat: 8AM-1PM | Sun: Closed"
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    projectType: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you! We\'ll contact you within 24 hours.' })
        setFormData({
          name: "",
          phone: "",
          email: "",
          city: "",
          projectType: "",
          message: ""
        })
      } else {
        setSubmitStatus({ type: 'error', message: result.message || 'Failed to submit. Please try again.' })
      }
    } catch (error) {
      console.error('Submit error:', error)
      setSubmitStatus({ type: 'error', message: 'Failed to submit. Please call us at 323-470-2101.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 bg-[#f8f6f3]" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Request a Free Quote
          </h2>
          <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-4" />
          <p className="text-lg text-[#3c3c3c] max-w-2xl mx-auto">
            Get started with a complimentary consultation and estimate for your project
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <Card key={index} className="p-6 text-center border-[#e5e5e5] hover:border-[#C41E3A] transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C41E3A] to-[#a01829] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#1a1a1a] mb-2">{info.title}</h3>
                <p className="text-[#1a1a1a] font-semibold mb-1">{info.content}</p>
                <p className="text-sm text-[#3c3c3c]">{info.subtitle}</p>
              </Card>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border-[#e5e5e5]">
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    placeholder="John Smith"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    placeholder="Los Angeles"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-type">Project Type *</Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => setFormData({...formData, projectType: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Fencing</SelectItem>
                      <SelectItem value="commercial">Commercial/HOA</SelectItem>
                      <SelectItem value="gates">Gates & Automation</SelectItem>
                      <SelectItem value="custom">Custom Fabrication</SelectItem>
                      <SelectItem value="repair">Repair & Restoration</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Details</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  className="min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label>Upload Photos (Optional)</Label>
                <div className="border-2 border-dashed border-[#e5e5e5] rounded-lg p-8 text-center hover:border-[#C41E3A] transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-[#3c3c3c] mx-auto mb-2" />
                  <p className="text-sm text-[#3c3c3c]">
                    Click to upload or drag and drop<br />
                    <span className="text-xs">PNG, JPG up to 10MB</span>
                  </p>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit My Request'}
              </Button>

              <p className="text-xs text-center text-[#3c3c3c]">
                By submitting this form, you agree to receive communications from Iron Works Solution
              </p>
            </form>
          </Card>

          {/* Map & Additional Info */}
          <div className="space-y-6">
            {/* Service Area Map */}
            <Card className="p-0 overflow-hidden border-[#e5e5e5] h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27403964234!2d-118.69192993343664!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service Area Map - Southern California"
              ></iframe>
            </Card>

            {/* Instant Callback Widget */}
            <Card className="p-6 bg-gradient-to-br from-[#C41E3A] to-[#A71930] text-white border-none">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">Need to Talk Now?</h3>
                  <p className="text-sm text-white/90">Request an instant callback</p>
                </div>
                <Button variant="secondary" size="sm">
                  Call Me
                </Button>
              </div>
            </Card>

            {/* Text Quote Hook */}
            <Card className="p-6 bg-[#1a1a1a] text-white border-none">
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2">Quick Quote via Text</h3>
                <p className="text-sm text-white/80 mb-4">
                  Text a photo of your property to get a quick estimate
                </p>
                <p className="text-2xl font-bold text-[#C41E3A]">323-470-2101</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
