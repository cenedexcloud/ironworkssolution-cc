"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Malibu, CA",
    rating: 5,
    text: "Their attention to detail is unmatched. The custom iron gate they designed for our estate exceeded all expectations. Beautiful craftsmanship and professional service from start to finish.",
    project: "Custom Estate Gate"
  },
  {
    id: 2,
    name: "David R.",
    location: "Pasadena, CA",
    rating: 5,
    text: "The gate looks amazing and works flawlessly. The automated system is incredibly smooth, and the design perfectly complements our home's architecture. Highly recommend!",
    project: "Automated Swing Gate"
  },
  {
    id: 3,
    name: "Jennifer K.",
    location: "Calabasas, CA",
    rating: 5,
    text: "Professional, on-time, and built to last. We hired Iron Works Solution for our entire HOA community perimeter fencing. Every detail was handled with care, and the results speak for themselves.",
    project: "HOA Perimeter Fencing",
    role: "HOA President"
  },
  {
    id: 4,
    name: "Michael T.",
    location: "Beverly Hills, CA",
    rating: 5,
    text: "From design consultation to final installation, everything was perfect. They transformed our outdoor space with custom railings and a stunning iron pergola. True artisans!",
    project: "Custom Railings & Pergola"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-24 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#f8f6f3] mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-[#C41E3A] mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-[#f8f6f3] border-none relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-[#C41E3A] opacity-20">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#C41E3A] text-[#C41E3A]" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-xl md:text-2xl text-[#1a1a1a] text-center mb-8 leading-relaxed italic">
              "{current.text}"
            </p>

            {/* Author Info */}
            <div className="text-center">
              <p className="font-bold text-[#1a1a1a] text-lg">{current.name}</p>
              <p className="text-[#3c3c3c]">{current.location}</p>
              {current.role && (
                <p className="text-[#C41E3A] text-sm mt-1">{current.role}</p>
              )}
              <p className="text-sm text-[#3c3c3c] mt-2 italic">{current.project}</p>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-[#C41E3A] w-8'
                      : 'bg-[#c0c0c0]/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
