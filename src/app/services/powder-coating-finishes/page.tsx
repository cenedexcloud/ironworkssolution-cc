"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import QuoteWizard from "@/components/QuoteWizard"
import {
  Paintbrush,
  Palette,
  Shield,
  Sparkles,
  Sun,
  Droplets,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Calendar
} from "lucide-react"

const coatingServices = [
  {
    icon: Palette,
    title: "Custom Color Powder Coating",
    description: "Premium powder coating in any color imaginable—from classic blacks to vibrant custom hues that match your brand or architecture.",
    features: [
      "500+ color options available",
      "Color matching services",
      "UV-resistant formulations",
      "4+ year warranty on finish"
    ],
    image: "https://surfaceprep.com/wp-content/uploads/2023/06/Powder-coating-resize-2.jpg"
  },
  {
    icon: Shield,
    title: "Hot-Dip Galvanization",
    description: "Industrial-grade galvanization process providing superior rust and corrosion protection for maximum longevity in harsh environments.",
    features: [
      "20+ year rust protection",
      "Ideal for coastal areas",
      "ASTM A123 compliant",
      "Environmentally friendly process"
    ],
    image: "https://djaimports.com/wp-content/uploads/2021/03/hot-dipped-galvanized-powder-coated-railing.jpg"
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
    image: "https://oblist.com/cdn/shop/files/mc_KtzkIvL-K.jpg?v=1742203213&width=2106"
  },
  {
    icon: Sun,
    title: "UV-Resistant Coatings",
    description: "Advanced UV-resistant formulations that prevent fading and color degradation even under intense sunlight.",
    features: [
      "Fade-resistant technology",
      "Enhanced color retention",
      "Ideal for sunny climates",
      "Extended lifespan guarantee"
    ],
    image: "https://m.media-amazon.com/images/I/71eTiLUW0PL.jpg"
  },
  {
    icon: Droplets,
    title: "Weatherproof Protection",
    description: "Multi-layer coating systems designed to withstand rain, humidity, salt air, and temperature extremes.",
    features: [
      "Moisture barrier technology",
      "Salt spray resistant",
      "Temperature stable (-50°F to 200°F)",
      "Prevents oxidation & rust"
    ],
    image: "https://pizzello.com/cdn/shop/files/7_674d9436-3a9a-4b9d-9afe-297a6693ddba_1080x.jpg?v=1736491689"
  },
  {
    icon: Paintbrush,
    title: "Specialty Finishes",
    description: "Unique finishes including metallic, textured, hammertone, and multi-tone effects for distinctive appearances.",
    features: [
      "Metallic & pearl effects",
      "Texture options available",
      "Hammertone finishes",
      "Custom blend capabilities"
    ],
    image: "https://i0.wp.com/chaircare.com/wp-content/uploads/2017/09/Metallics-and-Specialty-Finishes.png?ssl=1"
  }
]

const benefits = [
  {
    title: "Superior Durability",
    description: "Powder coating is 3-5 times more durable than traditional paint, providing decades of protection without chipping or fading."
  },
  {
    title: "Eco-Friendly Process",
    description: "Our powder coating process produces zero VOC emissions and generates minimal waste, making it environmentally responsible."
  },
  {
    title: "Cost-Effective Protection",
    description: "While the initial investment is higher than paint, powder coating eliminates the need for repainting, saving money over time."
  },
  {
    title: "Unlimited Color Options",
    description: "Choose from 500+ standard colors or create custom matches to perfectly complement your property's aesthetic."
  }
]

export default function PowderCoatingFinishesPage() {
  const [isQuoteWizardOpen, setIsQuoteWizardOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a1a1a] to-[#3c3c3c] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#C41E3A] to-[#a01829] rounded-full flex items-center justify-center">
                <Paintbrush className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Powder Coating & Finishes
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Protect and beautify your ironwork with premium powder coating and specialty finishes. Our state-of-the-art facility delivers superior durability, unlimited color options, and finishes that last for decades.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg" onClick={() => {
                const section = document.getElementById('coating-services')
                section?.scrollIntoView({ behavior: 'smooth' })
              }}>
                <Calendar className="w-5 h-5" />
                View Color Samples
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-[#1a1a1a]" onClick={() => setIsQuoteWizardOpen(true)}>
                <Phone className="w-5 h-5" />
                Get Coating Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-[#f8f6f3]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-6 text-center">
              Premium Finishes That Stand the Test of Time
            </h2>
            <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-8" />
            <p className="text-lg text-[#3c3c3c] mb-6 leading-relaxed">
              The finish on your ironwork is not merely decorative—it's the critical barrier that protects your investment from the elements. Our state-of-the-art powder coating facility uses electrostatic application and high-temperature curing to create a finish that's significantly more durable than traditional liquid paint.
            </p>
            <p className="text-lg text-[#3c3c3c] mb-6 leading-relaxed">
              Powder coating creates a uniform, chip-resistant surface that withstands UV rays, moisture, salt air, and temperature extremes. With proper surface preparation and application, our powder-coated finishes provide 10-20 years of maintenance-free protection—far exceeding the 3-5 year lifespan of conventional paint.
            </p>
            <p className="text-lg text-[#3c3c3c] leading-relaxed">
              Beyond standard colors, we offer specialty finishes including metallic effects, custom patinas, textured surfaces, and color matching to specific brand guidelines. Whether you need a classic matte black for timeless elegance or a vibrant custom color that makes a statement, our finishing capabilities bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
            Why Choose Powder Coating?
          </h2>
          <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 border-[#e5e5e5] hover:border-[#C41E3A] hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C41E3A] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-[#3c3c3c] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#f8f6f3]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
            Our Coating & Finishing Services
          </h2>
          <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coatingServices.map((service, index) => {
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
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
            Our Powder Coating Process
          </h2>
          <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-12" />

          <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Cleaning", description: "Chemical degreasing removes all oils and contaminants" },
              { step: "02", title: "Sandblasting", description: "Surface preparation for optimal coating adhesion" },
              { step: "03", title: "Pre-Treatment", description: "Rust inhibitor application for added protection" },
              { step: "04", title: "Application", description: "Electrostatic powder application for even coverage" },
              { step: "05", title: "Curing", description: "High-heat oven curing creates permanent bond" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-[#C41E3A] to-[#a01829] rounded-full flex items-center justify-center mx-auto mb-3 text-white text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="text-[#3c3c3c] text-sm leading-snug">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a1a] to-[#3c3c3c] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Premium Finishes That Last Decades
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our state-of-the-art coating facility ensures every project receives the highest quality finish. View our color samples or request a custom quote today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" variant="secondary" className="text-lg px-8" onClick={() => {
                const section = document.getElementById('coating-services')
                section?.scrollIntoView({ behavior: 'smooth' })
              }}>
                <Calendar className="w-5 h-5" />
                View Finish Samples
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-[#1a1a1a]" onClick={() => setIsQuoteWizardOpen(true)}>
                <Mail className="w-5 h-5" />
                Get Coating Quote
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">500+</div>
                <div className="text-white/70 text-sm">Color Options</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">4+ Year</div>
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
      </section>

      <Footer />
      <QuoteWizard isOpen={isQuoteWizardOpen} onClose={() => setIsQuoteWizardOpen(false)} />
    </main>
  )
}
