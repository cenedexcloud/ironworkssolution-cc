"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import {
  Sparkles,
  Ruler,
  PenTool,
  Layers,
  Palette,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Calendar
} from "lucide-react"

const designServices = [
  {
    icon: PenTool,
    title: "Custom Design Consultations",
    description: "One-on-one design sessions with our master craftsmen to create ironwork that perfectly matches your vision and architectural style.",
    features: [
      "3D design renderings",
      "Style matching expertise",
      "Historical accuracy options",
      "Unlimited revisions"
    ],
    image: "https://thumbs.dreamstime.com/b/floorplan-blueprint-rolls-architectural-plan-cad-drawing-engineering-design-house-construction-project-generative-ai-building-367494790.jpg"
  },
  {
    icon: Ruler,
    title: "Professional Site Measurements",
    description: "Precise on-site measurements using laser technology ensuring perfect fit and eliminating costly errors during installation.",
    features: [
      "Laser-accurate measurements",
      "Topography assessment",
      "Grade & slope evaluation",
      "Digital site documentation"
    ],
    image: "https://m.media-amazon.com/images/I/71Z4om9DUJL._UF894,1000_QL80_.jpg"
  },
  {
    icon: Layers,
    title: "Material Selection Guidance",
    description: "Expert consultation on selecting the right materials, gauges, and finishes to meet your budget, aesthetic, and durability needs.",
    features: [
      "Lifecycle cost analysis",
      "Maintenance requirement review",
      "Aesthetic compatibility advice",
      "Sample viewing available"
    ],
    image: "https://images.squarespace-cdn.com/content/v1/5a6199d18c56a82d030a5f52/4b6e1bee-16d7-49d8-8e79-1d1ba7f17a78/custom+metalwork+fabrication+bauer+metal+5.jpg"
  },
  {
    icon: Sparkles,
    title: "Architectural Metalwork",
    description: "Bespoke metal creations including decorative screens, artistic panels, sculptures, and architectural elements.",
    features: [
      "Custom scrollwork patterns",
      "Laser-cut designs",
      "Hand-forged details",
      "Artistic collaborations"
    ],
    image: "https://images.squarespace-cdn.com/content/v1/5a6199d18c56a82d030a5f52/1592351312498-HYDEOENWDIV0H4PTRXW4/custom+metal+kitchen+hood+metalwork+blackened+steel+bauer+metal+fabrication+fabricator+architectural+metal+interior+design+minnesota+twin+cities+minneapolis+st+paul+mn+4.JPG?format=1000w"
  },
  {
    icon: Palette,
    title: "Style Matching Services",
    description: "Recreation and restoration of historical ironwork styles or matching existing designs for seamless additions.",
    features: [
      "Period-specific designs",
      "Pattern replication",
      "Aged finish matching",
      "Historical research included"
    ],
    image: "https://images.squarespace-cdn.com/content/v1/5a6199d18c56a82d030a5f52/50d4e55e-2787-4e31-a47a-96122862fd29/custom+metalwork+fabricator+railings+stairs+mn+33.jpg"
  },
  {
    icon: Lightbulb,
    title: "Concept Development",
    description: "Transform your ideas from rough sketches to detailed blueprints with our comprehensive design development process.",
    features: [
      "Sketch-to-CAD conversion",
      "Engineering analysis",
      "Structural calculations",
      "Building permit packages"
    ],
    image: "https://images.squarespace-cdn.com/content/v1/5a6199d18c56a82d030a5f52/1bffb420-baef-460e-ae3f-6dd270cdc9cf/custom+metalwork+fabrication+bauer+metal+5.jpg?format=1500w"
  }
]

const benefits = [
  {
    title: "Truly One-of-a-Kind",
    description: "Your custom ironwork will be a unique piece crafted specifically for your property—no mass-produced, cookie-cutter designs."
  },
  {
    title: "Expert Craftsmanship",
    description: "Our master metalworkers combine traditional forging techniques with modern fabrication technology for exceptional results."
  },
  {
    title: "Perfect Fit Guarantee",
    description: "Precise measurements and custom fabrication ensure your ironwork fits perfectly the first time, every time."
  },
  {
    title: "Design Flexibility",
    description: "From Victorian elegance to ultra-modern minimalism, we create designs that complement any architectural style."
  }
]

export default function CustomFabricationDesignPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a1a1a] to-[#3c3c3c] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#C41E3A] to-[#a01829] rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Custom Fabrication & Design
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Transform your vision into reality with our custom ironwork design and fabrication services. From concept sketches to finished masterpieces, we create bespoke metal creations that elevate your property's aesthetic.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Calendar className="w-5 h-5" />
                Schedule Design Consultation
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
              Crafting Unique Ironwork Masterpieces
            </h2>
            <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-8" />
            <p className="text-lg text-[#3c3c3c] mb-6 leading-relaxed">
              Custom fabrication is where artistry meets engineering. Our design studio specializes in creating one-of-a-kind ironwork pieces that reflect your personal style while meeting exacting structural and functional requirements. Whether you're envisioning an ornate Victorian gate, a sleek contemporary staircase, or an artistic metal sculpture, our team brings decades of experience to every custom project.
            </p>
            <p className="text-lg text-[#3c3c3c] mb-6 leading-relaxed">
              The custom design process begins with understanding your vision, architectural style, and functional needs. We then translate these requirements into detailed drawings and 3D renderings, allowing you to visualize the final product before fabrication begins. Our master craftsmen use a combination of traditional hand-forging techniques and modern CNC technology to create pieces that are both beautiful and structurally sound.
            </p>
            <p className="text-lg text-[#3c3c3c] leading-relaxed">
              From intricate scrollwork and decorative panels to monumental gates and architectural features, our custom fabrication capabilities are limited only by imagination. We work closely with architects, designers, and homeowners to ensure every detail exceeds expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
            Benefits of Custom Fabrication
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
            Our Design & Fabrication Services
          </h2>
          <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices.map((service, index) => {
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

      {/* Project Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
            Custom Projects We Create
          </h2>
          <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-12" />

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Ornamental Gates",
              "Decorative Railings",
              "Privacy Screens",
              "Garden Arbors",
              "Wine Cellar Doors",
              "Fireplace Screens",
              "Handrails & Balusters",
              "Art Installations",
              "Security Grilles",
              "Lighting Fixtures",
              "Furniture Pieces",
              "Signage Frames"
            ].map((project, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-[#f8f6f3] rounded-lg hover:bg-white hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-[#C41E3A] flex-shrink-0" />
                <span className="text-[#1a1a1a] font-medium">{project}</span>
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
              Ready to Create Something Extraordinary?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our experienced design team brings 20+ years of expertise to every consultation. Let's discuss your custom ironwork project today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Calendar className="w-5 h-5" />
                Schedule Design Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-[#1a1a1a]">
                <Mail className="w-5 h-5" />
                View Design Portfolio
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">Free</div>
                <div className="text-white/70 text-sm">Design Consultation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">3D</div>
                <div className="text-white/70 text-sm">Design Renderings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">24hr</div>
                <div className="text-white/70 text-sm">Quote Turnaround</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">100%</div>
                <div className="text-white/70 text-sm">Satisfaction Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
