"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import BookingScheduler from "@/components/BookingScheduler"
import {
  Shield,
  Home,
  Grid3x3,
  Building,
  Ruler,
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Calendar
} from "lucide-react"

const railingServices = [
  {
    icon: Grid3x3,
    title: "Interior Staircases",
    description: "Custom interior staircase railings combining safety with sophisticated design for residential and commercial spaces.",
    features: [
      "Modern & traditional designs",
      "Wood/iron combinations",
      "Cable rail systems",
      "Code-compliant heights"
    ],
    image: "https://southernstaircase.com/wp-content/uploads/2023/04/IMG-2503.jpg"
  },
  {
    icon: Home,
    title: "Exterior Railings",
    description: "Weather-resistant exterior railing systems for decks, porches, balconies, and outdoor stairs with powder-coated finishes.",
    features: [
      "Rust-resistant coatings",
      "ADA compliant options",
      "Custom baluster designs",
      "UV-protected finishes"
    ],
    image: "https://newmanironworks.com/wp-content/uploads/2016/03/Exterior-Stair-Railing-50B.jpg"
  },
  {
    icon: Building,
    title: "Balcony Systems",
    description: "Complete balcony railing systems with decorative panels, privacy screens, and architectural elements.",
    features: [
      "Custom panel designs",
      "Privacy screen options",
      "Decorative infill patterns",
      "Integrated lighting ready"
    ],
    image: "https://ixp.glmetalfab.com/2020/10/tuscany-wrought-iron-railing-metal-balcony-rail.jpg"
  },
  {
    icon: Shield,
    title: "Safety Barriers",
    description: "Code-compliant safety railings for elevated walkways, mezzanines, and commercial applications meeting OSHA standards.",
    features: [
      "OSHA compliant designs",
      "Industrial-grade construction",
      "High-visibility options",
      "Impact-resistant materials"
    ],
    image: "https://ixp.glmetalfab.com/2019/12/dark-bronze-metal-handrail-brushed-oil-rubbed-bronze-rectangle-rail-interior-stone-carpet-stairs-modern-square-brackets-vertical-pickets-collars-knuckles-scaled.jpg"
  },
  {
    icon: Ruler,
    title: "Custom Handrails",
    description: "Individually crafted handrails with ergonomic profiles, decorative elements, and seamless installation.",
    features: [
      "Ergonomic grip designs",
      "Smooth welded corners",
      "Wall-mounted or continuous",
      "ADA compliant options"
    ],
    image: "https://ixp.glmetalfab.com/2023/04/interior-twisted-wrought-iron-railing-twisted-pickets-twist-spindles-metal-stair-railing-wood-treads-scaled-edited-1.jpg"
  },
  {
    icon: Award,
    title: "Decorative Balusters",
    description: "Artistic baluster designs including scrollwork, geometric patterns, and custom shapes that enhance visual appeal.",
    features: [
      "Hand-forged scrollwork",
      "Geometric modern patterns",
      "Twisted & hammered designs",
      "Custom spacing options"
    ],
    image: "https://ornamentalironworks.net/wp-content/uploads/2023/04/wrought-iron-interior-handrails-manufacturer-houston-texas44.jpg"
  }
]

const benefits = [
  {
    title: "Code Compliance Guaranteed",
    description: "All our railing systems meet or exceed local building codes, ADA requirements, and safety standards."
  },
  {
    title: "Safety First",
    description: "Proper height, spacing, and structural integrity ensure your railings provide reliable fall protection for decades."
  },
  {
    title: "Architectural Enhancement",
    description: "Custom railings become a focal point that elevates your property's aesthetic and increases its value."
  },
  {
    title: "Versatile Applications",
    description: "From grand sweeping staircases to simple deck railings, we design systems for any application and budget."
  }
]

export default function BalconiesRailingsStairSystemsPage() {
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
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Balconies, Railings & Stair Systems
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Where safety meets sophisticated design. Our custom iron railings and balcony systems provide reliable protection while enhancing your property's architectural beauty—inside and out.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg" onClick={() => setIsBookingOpen(true)}>
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-[#1a1a1a]">
                <Phone className="w-5 h-5" />
                Discuss Your Project
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
              Expert Railing & Balcony Solutions
            </h2>
            <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-8" />
            <p className="text-lg text-[#3c3c3c] mb-6 leading-relaxed">
              Railings and balconies are critical safety features that also serve as prominent architectural elements. Our custom iron railing systems are engineered to meet stringent building codes and safety standards while delivering the aesthetic impact that distinguishes exceptional properties from ordinary ones.
            </p>
            <p className="text-lg text-[#3c3c3c] mb-6 leading-relaxed">
              Whether you're designing a grand curved staircase for a luxury home, installing safety railings for a commercial building, or creating decorative balcony systems for a multi-family development, we bring the technical expertise and design sensibility to execute flawlessly. Our installations are built to last generations, with proper engineering, quality materials, and meticulous craftsmanship.
            </p>
            <p className="text-lg text-[#3c3c3c] leading-relaxed">
              From traditional ornamental designs with decorative scrollwork to sleek modern systems with clean lines and cable infill, our railing capabilities span all architectural styles. We work closely with architects, contractors, and homeowners to ensure every railing system is perfectly integrated with your overall design vision.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
            Benefits of Custom Iron Railings
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
            Our Railing & Stair System Services
          </h2>
          <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {railingServices.map((service, index) => {
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

      {/* Design Styles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
            Popular Railing Styles
          </h2>
          <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-12" />

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { style: "Traditional Ornamental", desc: "Classic scrollwork and decorative elements" },
              { style: "Modern Minimalist", desc: "Clean lines with horizontal or vertical bars" },
              { style: "Contemporary Cable", desc: "Stainless steel cables with sleek posts" },
              { style: "Industrial Pipe", desc: "Black iron pipe with industrial aesthetic" },
              { style: "Glass Panel Infill", desc: "Iron frame with glass panels for views" },
              { style: "Geometric Patterns", desc: "Custom geometric designs and shapes" }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-[#f8f6f3] rounded-lg hover:bg-white hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{item.style}</h3>
                <p className="text-[#3c3c3c] text-sm">{item.desc}</p>
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
              Design Your Perfect Railing System
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Combine safety with style. Schedule a consultation to discuss your railing project and receive a detailed quote.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Calendar className="w-5 h-5" />
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-[#1a1a1a]">
                <Mail className="w-5 h-5" />
                View Railing Gallery
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">Code</div>
                <div className="text-white/70 text-sm">Compliant Designs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">Licensed</div>
                <div className="text-white/70 text-sm">Installers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">Lifetime</div>
                <div className="text-white/70 text-sm">Warranty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">1,500+</div>
                <div className="text-white/70 text-sm">Railings Installed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BookingScheduler isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  )
}
