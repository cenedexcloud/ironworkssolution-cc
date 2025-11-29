"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Paintbrush, Palette, Sparkles, CheckCircle2 } from "lucide-react"
import QuoteWizard from "@/components/QuoteWizard"

const powderCoatingServices = [
  {
    icon: Palette,
    title: "Custom Color Powder Coating",
    description: "Premium powder coating in any color imaginable - from classic blacks to vibrant custom hues that match your brand or architecture.",
    features: [
      "500+ color options available",
      "Color matching services",
      "UV-resistant formulations",
      "10-year warranty on finish"
    ],
    image: "https://cdn.thefabricator.com/a/an-overview-of-a-powder-coating-line-1709654532.jpg"
  },
  {
    icon: CheckCircle2,
    title: "Hot-Dip Galvanization",
    description: "Industrial-grade galvanization process providing superior rust and corrosion protection for maximum longevity in harsh environments.",
    features: [
      "50+ year rust protection",
      "Ideal for coastal areas",
      "ASTM A123 compliant",
      "Environmentally friendly process"
    ],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80"
  },
  {
    icon: Sparkles,
    title: "Custom Patina & Antique Finishes",
    description: "Artisan-applied patina treatments and antique finishes that add character, elegance, and timeless beauty to your ironwork.",
    features: [
      "Authentic aged copper patina",
      "Bronze & verdigris effects",
      "Hand-applied techniques",
      "Sealed for permanence"
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80"
  }
]

export default function ServicesDetail() {
  const [isQuoteWizardOpen, setIsQuoteWizardOpen] = useState(false)

  return (
    <section className="py-24 bg-white" id="powder-coating-services">
      <div className="container mx-auto px-4">
        {/* Powder Coating & Finishes Section */}
        <div>
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C41E3A] to-[#a01829] rounded-full flex items-center justify-center">
                <Paintbrush className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                🎨 Powder Coating & Finishes
              </h2>
            </div>
            <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-6" />
            <p className="text-xl text-[#3c3c3c] max-w-3xl mx-auto">
              Differentiate your quality from competitors
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {powderCoatingServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="group overflow-hidden border-[#e5e5e5] hover:border-[#C41E3A] transition-all duration-300 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#C41E3A] to-[#a01829] rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#C41E3A] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#3c3c3c] text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#C41E3A] flex-shrink-0 mt-0.5" />
                          <span className="text-[#3c3c3c]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Powder Coating CTA Section */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#3c3c3c] rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Premium Finishes That Last Decades
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Our state-of-the-art coating facility ensures every project receives the highest quality finish
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/services/powder-coating-finishes">
                <Button size="lg" variant="secondary" className="text-lg">
                  View Finish Samples
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-[#1a1a1a]" onClick={() => setIsQuoteWizardOpen(true)}>
                Get Coating Quote
              </Button>
            </div>

            {/* Coating Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">500+</div>
                <div className="text-white/70 text-sm">Color Options</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">10-Year</div>
                <div className="text-white/70 text-sm">Finish Warranty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">UV</div>
                <div className="text-white/70 text-sm">Resistant Coating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">Eco</div>
                <div className="text-white/70 text-sm">Friendly Process</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuoteWizard isOpen={isQuoteWizardOpen} onClose={() => setIsQuoteWizardOpen(false)} />
    </section>
  )
}
