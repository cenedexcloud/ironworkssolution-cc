"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import {
  Wrench,
  RefreshCw,
  Hammer,
  Zap,
  Shield,
  Paintbrush,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Calendar
} from "lucide-react"

const repairServices = [
  {
    icon: RefreshCw,
    title: "Rust Removal & Prevention",
    description: "Complete rust removal using sandblasting and chemical treatments, followed by protective coatings to prevent future corrosion.",
    features: [
      "Sandblasting services",
      "Chemical rust conversion",
      "Rust inhibitor application",
      "Preventive coating systems"
    ],
    image: "https://vegasvalleyiron.com/wp-content/uploads/2023/10/Different-ways-to-repair-iron-fence-requirements-pros-and-cons.jpg"
  },
  {
    icon: Hammer,
    title: "Welding & Structural Repairs",
    description: "Expert welding services to repair broken components, reinforce weak sections, and restore structural integrity.",
    features: [
      "Crack welding & reinforcement",
      "Broken component replacement",
      "Post strengthening",
      "Frame straightening"
    ],
    image: "https://i.ytimg.com/vi/W7G-bWmSRDM/maxresdefault.jpg"
  },
  {
    icon: Paintbrush,
    title: "Refinishing & Repainting",
    description: "Professional surface preparation and powder coating application to restore the appearance of weathered ironwork.",
    features: [
      "Old coating removal",
      "Surface preparation",
      "Powder coating application",
      "Color matching services"
    ],
    image: "https://vegasvalleyiron.com/wp-content/uploads/2023/08/Simple-steps-to-restore-an-old-iron-fence.jpg"
  },
  {
    icon: Zap,
    title: "Gate Motor Repairs",
    description: "Diagnosis and repair of automated gate systems including motors, sensors, control boards, and access devices.",
    features: [
      "Motor replacement & repair",
      "Sensor calibration",
      "Control board diagnostics",
      "Remote programming"
    ],
    image: "https://m.media-amazon.com/images/I/61gZ7doW30L._AC_UF894,1000_QL80_.jpg"
  },
  {
    icon: Shield,
    title: "Historical Restoration",
    description: "Authentic restoration of antique ironwork using period-appropriate techniques and materials to preserve historical integrity.",
    features: [
      "Historical research & documentation",
      "Traditional forging methods",
      "Patina matching",
      "Preservation-grade materials"
    ],
    image: "http://www.wroughtironhandrailings.com/cdn/shop/files/railreplacementboot_1200x1200.jpg?v=1751733578"
  },
  {
    icon: Wrench,
    title: "Maintenance Agreements",
    description: "Preventive maintenance programs including regular inspections, lubrication, adjustments, and minor repairs.",
    features: [
      "Quarterly inspections",
      "Lubrication service",
      "Hardware tightening",
      "Priority service scheduling"
    ],
    image: "https://m.media-amazon.com/images/I/51UgU20sjjL._AC_UF894,1000_QL80_.jpg"
  }
]

const benefits = [
  {
    title: "Cost-Effective Solutions",
    description: "Professional repairs often cost 40-60% less than full replacement while extending the life of your ironwork by decades."
  },
  {
    title: "Preserve Investment",
    description: "Protect your initial investment with timely repairs that prevent minor issues from becoming major problems."
  },
  {
    title: "Quick Turnaround",
    description: "Most repairs are completed within 1-3 days, minimizing disruption to your property's security and appearance."
  },
  {
    title: "Expert Diagnosis",
    description: "Our experienced technicians accurately identify problems and recommend the most effective repair solutions."
  }
]

export default function RepairsRestorationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a1a1a] to-[#3c3c3c] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#C41E3A] to-[#a01829] rounded-full flex items-center justify-center">
                <Wrench className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Repairs & Restoration
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Restore your ironwork to like-new condition with our professional repair and restoration services. From rust removal to complete refinishing, we revive weathered, damaged, or aging ironwork with expert care.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Calendar className="w-5 h-5" />
                Schedule Inspection
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-[#1a1a1a]">
                <Phone className="w-5 h-5" />
                Request Service
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
              Expert Ironwork Repair & Restoration
            </h2>
            <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-8" />
            <p className="text-lg text-[#3c3c3c] mb-6 leading-relaxed">
              Even the highest quality ironwork requires occasional maintenance and repairs. Weather exposure, physical damage, mechanical wear, and time can all take their toll on iron fencing, gates, and railings. Our repair and restoration services breathe new life into aging or damaged ironwork, often at a fraction of the cost of replacement.
            </p>
            <p className="text-lg text-[#3c3c3c] mb-6 leading-relaxed">
              Our skilled technicians have extensive experience diagnosing and repairing all types of ironwork issues—from simple rust spots to complex structural failures. We use professional-grade materials and proven techniques to ensure repairs last for years, not just months. Whether you're dealing with rusted sections, broken welds, malfunctioning gate motors, or fading finishes, we provide comprehensive solutions tailored to your specific situation.
            </p>
            <p className="text-lg text-[#3c3c3c] leading-relaxed">
              For historical properties, we offer specialized restoration services that preserve the authentic character of antique ironwork while ensuring structural soundness and code compliance. Our restoration work has helped preserve countless historic gates, railings, and decorative iron elements throughout Southern California.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
            Why Choose Professional Repairs?
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
            Our Repair & Restoration Services
          </h2>
          <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repairServices.map((service, index) => {
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

      {/* Common Issues */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
            Common Issues We Fix
          </h2>
          <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-12" />

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { issue: "Rust & Corrosion", solution: "Sandblasting and protective coating application" },
              { issue: "Broken Welds", solution: "Professional re-welding and reinforcement" },
              { issue: "Gate Won't Open/Close", solution: "Motor repair or replacement with adjustment" },
              { issue: "Loose or Missing Hardware", solution: "Hardware replacement and tightening" },
              { issue: "Fading or Peeling Paint", solution: "Complete refinishing with powder coating" },
              { issue: "Sagging Gates", solution: "Structural reinforcement and hinge repair" },
              { issue: "Bent or Damaged Sections", solution: "Section replacement or straightening" },
              { issue: "Squeaking or Grinding Sounds", solution: "Lubrication and mechanical adjustment" }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-[#f8f6f3] rounded-lg">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#C41E3A] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">{item.issue}</h3>
                    <p className="text-[#3c3c3c] text-sm">{item.solution}</p>
                  </div>
                </div>
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
              Restore Your Ironwork Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't let minor issues become major problems. Schedule a free inspection and get an honest assessment of your repair needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Calendar className="w-5 h-5" />
                Schedule Free Inspection
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-[#1a1a1a]">
                <Mail className="w-5 h-5" />
                Request Repair Quote
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">Fast</div>
                <div className="text-white/70 text-sm">Service Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">Lifetime</div>
                <div className="text-white/70 text-sm">Repair Warranty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">Free</div>
                <div className="text-white/70 text-sm">Inspection & Quote</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">3,000+</div>
                <div className="text-white/70 text-sm">Repairs Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
