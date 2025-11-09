"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowRight, Home, Building2, Sparkles, DoorOpen, Wrench, Paintbrush, Shield } from "lucide-react"

const services = [
  {
    name: "Residential Iron Fencing",
    description: "Classic or modern designs that secure and enhance any home.",
    icon: Home,
    href: "/services/residential-iron-fencing",
  },
  {
    name: "Commercial & HOA Ironworks",
    description: "Durable, code-compliant fencing and gates for communities, businesses, and facilities.",
    icon: Building2,
    href: "/services/commercial-hoa-ironworks",
  },
  {
    name: "Custom Fabrication & Design",
    description: "Architectural railings, decorative panels, and bespoke metal creations.",
    icon: Sparkles,
    href: "/services/custom-fabrication-design",
  },
  {
    name: "Gates & Automation",
    description: "Swing, slide, and smart-controlled gates integrated with keypads, cameras, and remote access.",
    icon: DoorOpen,
    href: "/services/gates-automation",
  },
  {
    name: "Repairs & Restoration",
    description: "Rust removal, rewelding, refinishing, and repainting to revive existing ironwork.",
    icon: Wrench,
    href: "/services/repairs-restoration",
  },
  {
    name: "Powder Coating & Finishes",
    description: "Protective coatings and premium colors for long-term durability and style.",
    icon: Paintbrush,
    href: "/services/powder-coating-finishes",
  },
  {
    name: "Balconies, Railings & Stair Systems",
    description: "Safety meets design with interior and exterior iron rail systems.",
    icon: Shield,
    href: "/services/balconies-railings-stair-systems",
  },
]

export default function Services() {
  return (
    <section className="py-24 bg-[#f8f6f3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-[#C41E3A] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link key={index} href={service.href}>
                <Card className="p-6 bg-white border-[#e5e5e5] hover:shadow-xl hover:border-[#C41E3A]/30 transition-all duration-300 group glow-on-hover cursor-pointer h-full">
                  <div className="mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#C41E3A] flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#C41E3A] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-[#3c3c3c] text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="text-[#C41E3A] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
