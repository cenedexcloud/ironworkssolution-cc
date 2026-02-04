"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import QuoteWizard from "@/components/QuoteWizard"
import BookingScheduler from "@/components/BookingScheduler"
import {
  Home,
  Fence,
  Shield,
  Waves,
  DoorClosed,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Calendar
} from "lucide-react"
import Image from "next/image"

const residentialServices = [
  {
    icon: Fence,
    title: "Ornamental Iron Fences",
    description: "Classic designs featuring decorative scrollwork, finials, and custom patterns that enhance your home's curb appeal.",
    features: [
      "Custom scrollwork designs",
      "Hand-forged finials & accents",
      "Traditional & modern styles",
      "Powder-coated finishes"
    ],
    image: "http://customironmasters.com/wp-content/uploads/2025/01/custom-wrought-iron-fence-1536x1024-1-1024x683.webp"
  },
  {
    icon: Shield,
    title: "Privacy Fences",
    description: "Secure perimeter fencing combining solid panels with iron framework for maximum privacy and durability.",
    features: [
      "6-8 ft height options",
      "Solid panel construction",
      "Iron reinforced frames",
      "Weather-resistant materials"
    ],
    image: "https://barrierbossusa.com/cdn/shop/files/Black-Aluminum-Privacy-Fence-Panels-72-High-x-96-Wide-BarrierBoss-41834978083117_535x.jpg?v=1750220963"
  },
  {
    icon: Waves,
    title: "Pool Enclosures",
    description: "Code-compliant pool fencing with self-latching gates, ensuring safety while maintaining elegant aesthetics.",
    features: [
      "Self-closing gate mechanisms",
      "Non-climbable designs",
      "Rust-resistant coatings",
      "Building code certified"
    ],
    image: "https://ixp.glmetalfab.com/2021/10/custom-wrought-iron-metal-fencing-inground-pool-scroll-gate-child-safe-enclosure-classic-black-s.jpg"
  },
  {
    icon: DoorClosed,
    title: "Driveway Gates",
    description: "Grand entrance gates with automation options, keypads, and smart access control systems.",
    features: [
      "Swing & slide gate options",
      "Motor automation systems",
      "Keypad & remote access",
      "Camera integration ready"
    ],
    image: "http://ideovo.net/cdn/shop/files/wrought_iron_gates_wrought_iron_gate_entrance_decorative.jpg?v=1683557409"
  },
  {
    icon: Home,
    title: "Balcony & Stair Railings",
    description: "Interior and exterior railings combining safety with sophisticated design for multi-level homes.",
    features: [
      "Building code compliant",
      "Custom height specifications",
      "Decorative balusters",
      "Interior & exterior options"
    ],
    image: "https://ixp.glmetalfab.com/2020/10/tuscany-wrought-iron-railing-metal-balcony-rail.jpg"
  }
]

const benefits = [
  {
    title: "Enhanced Security",
    description: "Protect your family and property with robust iron fencing that deters intruders while maintaining aesthetic appeal."
  },
  {
    title: "Increased Property Value",
    description: "Quality iron fencing can increase your home's value by 10-15% through improved curb appeal and security."
  },
  {
    title: "Long-Lasting Durability",
    description: "Our premium materials and powder coating ensure your fence withstands harsh weather for decades."
  },
  {
    title: "Customizable Designs",
    description: "From classic Victorian scrollwork to sleek modern lines, we create fencing that complements your home's architecture."
  }
]

export default function ResidentialIronFencingPage() {
  const [isQuoteWizardOpen, setIsQuoteWizardOpen] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a1a1a] to-[#3c3c3c] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#C41E3A] to-[#a01829] rounded-full flex items-center justify-center">
                <Home className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Residential Iron Fencing
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Elevate your home's security and curb appeal with custom-designed iron fencing. We specialize in creating beautiful, durable fences that protect your property while enhancing its architectural character.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg"
                onClick={() => setIsBookingOpen(true)}
              >
                <Calendar className="w-5 h-5" />
                Schedule Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg border-white text-white hover:bg-white hover:text-[#1a1a1a]"
                onClick={() => window.location.href = 'tel:323-470-2101'}
              >
                <Phone className="w-5 h-5" />
                Call Us Now
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
              Why Choose Iron Fencing for Your Home?
            </h2>
            <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-8" />
            <p className="text-lg text-[#3c3c3c] mb-6 leading-relaxed">
              Iron fencing represents the perfect marriage of form and function for residential properties. Unlike wood that rots or vinyl that fades, iron fencing provides decades of reliable service while maintaining its elegant appearance. Our residential iron fencing solutions are designed to meet the unique needs of homeowners who demand both security and style.
            </p>
            <p className="text-lg text-[#3c3c3c] mb-6 leading-relaxed">
              With over 20 years of experience serving Southern California homeowners, we understand that your fence is more than just a property boundary—it's an extension of your home's personality. Whether you're seeking the timeless elegance of ornamental scrollwork or the clean lines of contemporary design, our master craftsmen bring your vision to life with precision and artistry.
            </p>
            <p className="text-lg text-[#3c3c3c] leading-relaxed">
              From initial consultation to final installation, we guide you through every step of the process, ensuring your new iron fence exceeds expectations in quality, appearance, and durability.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
            Benefits of Residential Iron Fencing
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
            Our Residential Iron Fencing Services
          </h2>
          <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialServices.map((service, index) => {
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
            Our Installation Process
          </h2>
          <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-12" />

          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Free on-site assessment and design consultation" },
              { step: "02", title: "Design", description: "Custom design and 3D rendering approval" },
              { step: "03", title: "Fabrication", description: "Precision crafting in our workshop" },
              { step: "04", title: "Installation", description: "Professional installation and final inspection" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C41E3A] to-[#a01829] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="text-[#3c3c3c] text-sm">{item.description}</p>
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
              Ready to Transform Your Property?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free consultation and personalized quote for your residential iron fencing project. Our experts are ready to help you design the perfect fence for your home.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8"
                onClick={() => setIsBookingOpen(true)}
              >
                <Calendar className="w-5 h-5" />
                Schedule Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-[#1a1a1a]"
                onClick={() => setIsQuoteWizardOpen(true)}
              >
                <Mail className="w-5 h-5" />
                Request a Quote
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">2,000+</div>
                <div className="text-white/70 text-sm">Homes Secured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">20+</div>
                <div className="text-white/70 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">A+</div>
                <div className="text-white/70 text-sm">BBB Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">100%</div>
                <div className="text-white/70 text-sm">Licensed & Insured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Popups */}
      <QuoteWizard isOpen={isQuoteWizardOpen} onClose={() => setIsQuoteWizardOpen(false)} />
      <BookingScheduler isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  )
}
