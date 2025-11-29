"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import BookingScheduler from "@/components/BookingScheduler"
import {
  DoorOpen,
  DoorClosed,
  Smartphone,
  Camera,
  Lock,
  Wifi,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Calendar
} from "lucide-react"

const gateServices = [
  {
    icon: DoorOpen,
    title: "Swing Gates",
    description: "Classic single or double swing gates with smooth operation and elegant design for residential and commercial applications.",
    features: [
      "Single & double configurations",
      "Smooth hydraulic operators",
      "Battery backup systems",
      "Adjustable swing speed"
    ],
    image: "https://leadingedgeaccess.com/wp-content/uploads/2025/07/how-custom-gate-installation-can-boost-curb-appeal-and-security.jpg"
  },
  {
    icon: DoorClosed,
    title: "Sliding Gates",
    description: "Space-efficient sliding gates perfect for driveways with limited clearance, featuring robust track systems.",
    features: [
      "Cantilever & track-mounted options",
      "Heavy-duty motor systems",
      "Weather-resistant components",
      "Quiet operation technology"
    ],
    image: "http://allsecurityequipment.com/cdn/shop/articles/gate_house_morning_fence.jpg?v=1671202054"
  },
  {
    icon: Smartphone,
    title: "Smart Access Control",
    description: "Modern access control systems including smartphone apps, keypads, intercoms, and biometric scanners.",
    features: [
      "Smartphone app control",
      "Keypad & card readers",
      "Video intercom systems",
      "Guest access management"
    ],
    image: "https://titanfence.com/_next/image?url=https%3A%2F%2Fassets.titanfence.com%2FAuto%20Gate-10.jpg%3F2025-09-29T00%3A58%3A32.034Z&w=3840&q=55"
  },
  {
    icon: Camera,
    title: "Camera Integration",
    description: "Integrated camera systems providing visual verification and recording of all gate activity for enhanced security.",
    features: [
      "High-definition cameras",
      "Night vision capability",
      "Cloud storage options",
      "Mobile video access"
    ],
    image: "http://americanaccesscompany.com/wp-content/uploads/2020/04/20180920_114042-1024x768-1.jpg"
  },
  {
    icon: Lock,
    title: "Safety Features",
    description: "Advanced safety sensors and emergency systems ensuring safe operation and preventing accidents.",
    features: [
      "Obstruction detection sensors",
      "Emergency manual release",
      "Auto-reverse functionality",
      "Loop detector systems"
    ],
    image: "http://allsecurityequipment.com/cdn/shop/articles/how-much-does-it-cost-to-install-a-gate-operator.jpg?v=1662479888"
  },
  {
    icon: Wifi,
    title: "Remote Monitoring",
    description: "Remote access and monitoring capabilities allowing you to control your gate from anywhere in the world.",
    features: [
      "Real-time status updates",
      "Activity logging & alerts",
      "Remote troubleshooting",
      "Usage analytics dashboard"
    ],
    image: "https://m.media-amazon.com/images/I/51UgU20sjjL._AC_UF894,1000_QL80_.jpg"
  }
]

const benefits = [
  {
    title: "Enhanced Convenience",
    description: "Open and close your gate from the comfort of your car or remotely via smartphone—no more manual operation in rain or darkness."
  },
  {
    title: "Superior Security",
    description: "Control who enters your property with access logs, video verification, and multiple authentication methods."
  },
  {
    title: "Increased Property Value",
    description: "Automated gates can increase property value by 5-10% while providing a prestigious entrance to your home or business."
  },
  {
    title: "Reliable Operation",
    description: "Modern automation systems provide years of trouble-free operation with minimal maintenance requirements."
  }
]

export default function GatesAutomationPage() {
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
                <DoorOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Gates & Automation
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Experience the perfect blend of security, convenience, and technology with our custom-designed automated gate systems. From smartphone control to advanced access management, we deliver smart solutions for modern properties.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg" onClick={() => setIsBookingOpen(true)}>
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-[#1a1a1a]">
                <Phone className="w-5 h-5" />
                Get Expert Advice
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
              Smart Gate Solutions for the Modern Era
            </h2>
            <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-8" />
            <p className="text-lg text-[#3c3c3c] mb-6 leading-relaxed">
              Automated gates represent the pinnacle of property access control, combining security, convenience, and cutting-edge technology. Our comprehensive gate automation solutions transform your property entrance into a smart, secure access point that you control with a simple tap on your smartphone.
            </p>
            <p className="text-lg text-[#3c3c3c] mb-6 leading-relaxed">
              With decades of experience in gate automation, we've installed hundreds of systems ranging from residential driveway gates to high-security commercial facilities. Our expertise covers all aspects of automated gates—from selecting the right operator system to integrating advanced access control features like video intercoms, license plate recognition, and cloud-based management.
            </p>
            <p className="text-lg text-[#3c3c3c] leading-relaxed">
              Whether you're automating an existing gate or designing a complete new entrance system, we ensure seamless operation, robust reliability, and intuitive control that makes managing your property access effortless.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
            Benefits of Automated Gates
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
            Our Gate Automation Services
          </h2>
          <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gateServices.map((service, index) => {
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

      {/* Technology Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
            Advanced Technology Features
          </h2>
          <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-12" />

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { title: "Smartphone Control", desc: "Open gates from anywhere using iOS or Android apps" },
              { title: "Voice Integration", desc: "Compatible with Alexa, Google Home, and Siri" },
              { title: "Guest Access Codes", desc: "Generate temporary codes for visitors and deliveries" },
              { title: "Activity Logs", desc: "Track all gate activity with detailed timestamps" },
              { title: "Solar Power Options", desc: "Eco-friendly solar panel kits for remote locations" },
              { title: "Emergency Override", desc: "Manual release and battery backup for power outages" }
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-[#f8f6f3] rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-[#C41E3A] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">{feature.title}</h3>
                  <p className="text-[#3c3c3c] text-sm">{feature.desc}</p>
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
              Upgrade to Smart Gate Automation
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your property entrance with state-of-the-art automation. Get a custom quote for your gate automation project today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Calendar className="w-5 h-5" />
                Schedule Free Assessment
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-[#1a1a1a]">
                <Mail className="w-5 h-5" />
                Request Quote
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">1,000+</div>
                <div className="text-white/70 text-sm">Gates Automated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">5-Year</div>
                <div className="text-white/70 text-sm">System Warranty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">Licensed</div>
                <div className="text-white/70 text-sm">#1141599</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C41E3A] mb-1">Certified</div>
                <div className="text-white/70 text-sm">Installation Teams</div>
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
