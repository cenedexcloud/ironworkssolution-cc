"use client"

import { Button } from "@/components/ui/button"
import { Target, Award, Gem, Clock } from "lucide-react"

const values = [
  { icon: Target, label: "Precision" },
  { icon: Award, label: "Integrity" },
  { icon: Gem, label: "Beauty" },
  { icon: Clock, label: "Endurance" },
]

interface AboutProps {
  onBookingOpen?: () => void
}

export default function About({ onBookingOpen }: AboutProps) {
  return (
    <section className="py-24 bg-[#f8f6f3] relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="absolute inset-0 brushed-metal" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Story */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
              The Iron Works Solution Story
            </h2>
            <div className="w-24 h-1 bg-[#C41E3A] mb-6" />
            <p className="text-lg text-[#3c3c3c] leading-relaxed mb-6">
              With over two decades of metal craftsmanship, Iron Works Solution unites artistry and engineering.
              Our California shop designs, fabricates, and installs premium ironwork for homes, estates, and commercial sites.
            </p>
            <p className="text-lg text-[#3c3c3c] leading-relaxed mb-8">
              Every piece we create is forged with the same commitment to excellence that has made us Southern California's
              trusted name in iron fabrication. From the first sketch to the final installation, we bring your vision to life
              with unmatched precision and care.
            </p>
            <Button size="lg" onClick={onBookingOpen}>
              Meet the Team → Book Your Consult
            </Button>
          </div>

          {/* Right: Values */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-lg border-2 border-[#e5e5e5] hover:border-[#C41E3A] transition-all duration-300 glow-on-hover text-center group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#C41E3A] to-[#a01829] rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-transparent group-hover:border-[#1a1a1a] group-hover:shadow-lg group-hover:shadow-[#1a1a1a]/50 transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-8 h-8 text-white transition-all duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a1a1a]">{value.label}</h3>
                  </div>
                )
              })}
            </div>

            {/* Tagline */}
            <div className="mt-8 p-6 bg-gradient-to-r from-[#1a1a1a] to-[#3c3c3c] rounded-lg text-center">
              <p className="text-2xl font-bold text-[#f8f6f3] mb-2">
                Strength · Style · Security
              </p>
              <p className="text-[#f8f6f3]/80 italic">
                Built to Last. Designed to Impress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
