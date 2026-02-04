"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import QuoteWizard from "@/components/QuoteWizard"
import BookingScheduler from "@/components/BookingScheduler"
import {
  Building2,
  Lock,
  Shield,
  Signpost,
  Warehouse,
  Factory,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Calendar
} from "lucide-react"

const commercialServices = [
  {
    icon: Lock,
    title: "Security Fencing & Gates",
    description: "High-security commercial fencing systems with anti-climb features, access control integration, and reliable perimeter protection.",
    features: [
      "Anti-climb & anti-cut designs",
      "Automated gate systems",
      "Camera & alarm integration",
      "ASTM F2781 compliant"
    ],
    image: "https://marshalrenee.com/wp-content/uploads/2020/08/img-fencepro-commercial-gallery-8.jpg"
  },
  {
    icon: Shield,
    title: "Perimeter Enclosures",
    description: "Complete site security solutions for commercial properties, industrial facilities, and municipal buildings.",
    features: [
      "Custom height specifications",
      "Barbed wire/razor wire tops",
      "Vehicle barrier systems",
      "Pedestrian access gates"
    ],
    image: "https://www.fencefactory.com/wp-content/uploads/2025/06/commercial-fence-gates-3-800x800.jpg"
  },
  {
    icon: Signpost,
    title: "Custom Business Signage Frames",
    description: "Architectural iron frames and mounting systems for business signage, creating distinctive brand presence.",
    features: [
      "Monument sign structures",
      "Hanging sign brackets",
      "LED-ready frameworks",
      "Powder-coated finishes"
    ],
    image: "https://titanfence.com/_next/image?url=https%3A%2F%2Fassets.titanfence.com%2FTitanfence_fence_ideas_2721.jpg%3F2025-09-26T14%3A27%3A35.607Z&w=3840&q=40"
  },
  {
    icon: Warehouse,
    title: "Warehouse & Industrial Barriers",
    description: "Heavy-duty protective barriers, machine guards, and safety railings for industrial and warehouse environments.",
    features: [
      "Loading dock safety rails",
      "Machine guard panels",
      "Forklift protection barriers",
      "OSHA compliant designs"
    ],
    image: "https://magnoliafenceandpatio.com/wp-content/uploads/2025/08/Security-Fence-Installation-4.jpg"
  },
  {
    icon: Factory,
    title: "Parking & Access Control Fencing",
    description: "Complete parking lot security including gates, bollards, and rollup doors for controlled access and vehicle management.",
    features: [
      "Automatic sliding gates",
      "Rollup door fabrication & install",
      "Bollard installation",
      "RFID/keycard integration"
    ],
    image: "https://u.realgeeks.media/networkwilmington1/2023_blog_images/ProsConsGatedCommunities.jpg"
  }
]

const benefits = [
  {
    title: "Enhanced Business Security",
    description: "Protect your assets, inventory, and employees with industrial-grade iron fencing designed to deter unauthorized access."
  },
  {
    title: "Code Compliance Expertise",
    description: "Our commercial installations meet all local building codes, ADA requirements, and industry-specific regulations."
  },
  {
    title: "Minimal Maintenance",
    description: "Commercial-grade powder coating and galvanization ensure decades of service with minimal upkeep costs."
  },
  {
    title: "Professional Appearance",
    description: "Create a strong first impression with polished, professional fencing that reinforces your brand identity."
  }
]

export default function CommercialHOAIronworksPage() {
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
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Commercial & HOA Ironworks
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Secure your business, facility, or community with professional-grade iron fencing and gates. We deliver code-compliant, high-security solutions trusted by businesses, HOAs, and municipalities across Southern California.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Calendar className="w-5 h-5" />
                Schedule Site Assessment
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-[#1a1a1a]">
                <Phone className="w-5 h-5" />
                Speak to Expert
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
              Professional Ironworks for Commercial Properties
            </h2>
            <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-8" />
            <p className="text-lg text-[#3c3c3c] mb-6 leading-relaxed">
              Commercial and industrial properties face unique security challenges that demand specialized solutions. Our commercial ironworks division specializes in designing and installing high-performance fencing systems that protect your business assets while projecting professionalism and strength.
            </p>
            <p className="text-lg text-[#3c3c3c] mb-6 leading-relaxed">
              With over 500 completed commercial projects, we understand the complexities of commercial installations—from navigating permit requirements to coordinating with property managers and meeting strict deadlines. Our team works efficiently to minimize disruption to your business operations while delivering superior results.
            </p>
            <p className="text-lg text-[#3c3c3c] leading-relaxed">
              Whether you're securing a warehouse facility, installing perimeter fencing for an HOA community, or upgrading your business's access control systems, our commercial-grade ironwork solutions provide the durability, security, and aesthetic appeal your property deserves.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
            Why Choose Us for Commercial Projects
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
            Our Commercial Ironwork Services
          </h2>
          <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialServices.map((service, index) => {
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

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
            Industries We Serve
          </h2>
          <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-12" />

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              "HOA Communities",
              "Warehouses & Distribution",
              "Manufacturing Facilities",
              "Office Parks",
              "Retail Centers",
              "Municipal Buildings",
              "Educational Institutions",
              "Healthcare Facilities",
              "Hotels & Hospitality"
            ].map((industry, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-[#f8f6f3] rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-[#C41E3A] flex-shrink-0" />
                <span className="text-[#1a1a1a] font-medium">{industry}</span>
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
              Secure Your Business with Professional Ironworks
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Trusted by businesses, HOAs, and municipalities across Southern California. Get a comprehensive quote for your commercial project.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Calendar className="w-5 h-5" />
                Request Commercial Quote
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-[#1a1a1a]">
                <Mail className="w-5 h-5" />
                View Commercial Projects
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">500+</div>
                <div className="text-white/70 text-sm">Commercial Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">150+</div>
                <div className="text-white/70 text-sm">HOA Communities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">20+</div>
                <div className="text-white/70 text-sm">Year Warranty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">Licensed</div>
                <div className="text-white/70 text-sm">Bonded & Insured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
