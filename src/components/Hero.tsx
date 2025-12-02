"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, ArrowRight, X, Camera, CheckCircle2 } from "lucide-react"
import QuoteWizard from "@/components/QuoteWizard"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Hero() {
  const { t } = useLanguage()
  const [isPhotoUploadOpen, setIsPhotoUploadOpen] = useState(false)
  const [isQuoteWizardOpen, setIsQuoteWizardOpen] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [previewUrls, setPreviewUrls] = useState<string[]>([])
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' })
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return

    setSelectedFiles(prev => [...prev, ...files])

    // Create preview URLs
    const newPreviewUrls = files.map(file => URL.createObjectURL(file))
    setPreviewUrls(prev => [...prev, ...newPreviewUrls])
  }

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index))
    URL.revokeObjectURL(previewUrls[index])
    setPreviewUrls(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmitPhotos = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!userInfo.name || !userInfo.email || !userInfo.phone) {
      alert('Please fill in your contact information')
      return
    }

    // Create FormData to send actual photo files
    const formData = new FormData()
    formData.append('name', userInfo.name)
    formData.append('email', userInfo.email)
    formData.append('phone', userInfo.phone)

    // Attach all selected photos as files
    selectedFiles.forEach((file) => {
      formData.append('photos', file)
    })

    try {
      const response = await fetch('/api/photo-quote', {
        method: 'POST',
        body: formData, // Send FormData with actual files
      })

      const result = await response.json()

      if (result.success) {
        setUploadSuccess(true)
        setTimeout(() => {
          setIsPhotoUploadOpen(false)
          setUploadSuccess(false)
          setSelectedFiles([])
          setPreviewUrls([])
          setUserInfo({ name: '', email: '', phone: '' })
        }, 2000)
      } else {
        alert(result.message || 'Failed to submit. Please call us at 323-470-2101.')
      }
    } catch (error) {
      console.error('Photo upload error:', error)
      alert('Failed to submit. Please call us at 323-470-2101.')
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
      {/* Background YouTube Video */}
      <div className="absolute inset-0 z-0 bg-[#2a2a2a] overflow-hidden">
        <div
          className="absolute w-full h-full"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '100%',
            minHeight: '100%',
            width: '177.77777778vh', // 16:9 aspect ratio
            height: '56.25vw', // 16:9 aspect ratio
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/wPK5h_dlF1Q?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playlist=wPK5h_dlF1Q&playsinline=1&enablejsapi=1"
            className="w-full h-full pointer-events-none"
            style={{
              border: 'none',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            allow="autoplay; encrypted-media"
            title="Background Video"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/[0.125]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Tagline */}
          <h2 className="text-white text-xl md:text-2xl font-black tracking-[0.3em] uppercase mb-8" style={{textShadow: '3px 3px 8px rgba(0,0,0,0.95), 0 0 20px rgba(0,0,0,0.7)', WebkitTextStroke: '1px rgba(0,0,0,0.3)'}}>
            {t.hero.tagline}
          </h2>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-light max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-3xl mx-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg h-16 px-10 bg-[#C41E3A] hover:bg-[#A71930] text-white rounded-lg font-semibold"
              onClick={() => setIsQuoteWizardOpen(true)}
            >
              {t.hero.ctaEstimate}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg h-16 px-10 border-2 border-white text-white hover:bg-white hover:text-[#404040] rounded-lg font-semibold"
              onClick={() => setIsPhotoUploadOpen(true)}
            >
              <Upload className="w-5 h-5 mr-2" />
              {t.hero.ctaUpload}
            </Button>
          </div>
        </div>
      </div>

      {/* Photo Upload Dialog */}
      <Dialog open={isPhotoUploadOpen} onOpenChange={setIsPhotoUploadOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#1a1a1a]">
              <Camera className="w-6 h-6 inline-block mr-2 text-[#C41E3A]" />
              Upload Photos for Quick Quote
            </DialogTitle>
          </DialogHeader>

          {uploadSuccess ? (
            <div className="py-12 text-center">
              <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">Photos Submitted!</h3>
              <p className="text-[#3c3c3c]">We'll review your photos and send you a quote within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmitPhotos} className="space-y-6 py-4">
              {/* File Upload Area */}
              <div>
                <Label className="text-base font-semibold mb-3 block">Upload Photos (Optional)</Label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  capture="environment"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full border-2 border-dashed border-[#e5e5e5] hover:border-[#C41E3A] rounded-lg p-8 text-center transition-colors cursor-pointer"
                >
                  <Upload className="w-12 h-12 text-[#C41E3A] mx-auto mb-3" />
                  <p className="text-base font-semibold text-[#1a1a1a] mb-1">
                    Click to Upload Photos (Optional)
                  </p>
                  <p className="text-sm text-[#3c3c3c]">
                    Or use your camera to take photos • PNG, JPG up to 10MB each
                  </p>
                </button>
              </div>

              {/* Preview Grid */}
              {previewUrls.length > 0 && (
                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    Selected Photos ({previewUrls.length})
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {previewUrls.map((url, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={url}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg border-2 border-[#e5e5e5]"
                        />
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        <p className="text-xs text-[#3c3c3c] mt-1 truncate">
                          {selectedFiles[index]?.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Information */}
              <div className="border-t border-[#e5e5e5] pt-6">
                <Label className="text-base font-semibold mb-4 block">Your Contact Information</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="photo-name">Name *</Label>
                    <Input
                      id="photo-name"
                      value={userInfo.name}
                      onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                      required
                      placeholder="John Smith"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="photo-phone">Phone *</Label>
                    <Input
                      id="photo-phone"
                      type="tel"
                      value={userInfo.phone}
                      onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                      required
                      placeholder="(555) 123-4567"
                      className="mt-2"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <Label htmlFor="photo-email">Email *</Label>
                  <Input
                    id="photo-email"
                    type="email"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                    required
                    placeholder="john@example.com"
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="bg-[#f8f6f3] rounded-lg p-4">
                <p className="text-sm text-[#3c3c3c]">
                  <strong>Tip:</strong> Photos are optional but help us provide more accurate quotes. Take clear photos showing the area where you want fencing or gates installed. Include different angles and any existing structures.
                </p>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
              >
                {selectedFiles.length > 0 ? 'Submit Photos & Get Quote' : 'Request Quote'}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      <QuoteWizard isOpen={isQuoteWizardOpen} onClose={() => setIsQuoteWizardOpen(false)} />
    </section>
  )
}
