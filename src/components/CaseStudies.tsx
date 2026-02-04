"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, DollarSign, CheckCircle2 } from "lucide-react"
import QuoteWizard from "@/components/QuoteWizard"

const caseStudies = [
  {
    id: 1,
    title: "Luxury Estate Iron Fencing - Malibu Hills",
    location: "Malibu, CA",
    duration: "3 weeks",
    budget: "$45,000",
    category: "Residential",
    challenge: "The client needed a custom ornate iron fence that matched their Mediterranean-style estate while providing security for their 2-acre property.",
    solution: "We designed and fabricated a 6-foot custom wrought iron fence with decorative scrollwork and automated dual swing gates. The design incorporated the client's family crest into the main entrance gate.",
    results: [
      "Enhanced property value by $80,000",
      "Increased security with automated access control",
      "Featured in Southern California Home & Garden magazine",
      "100% client satisfaction with zero callbacks"
    ],
    testimonial: {
      text: "Iron Works Solution transformed our vision into reality. The craftsmanship is extraordinary, and the attention to detail exceeded all expectations.",
      author: "Jennifer M.",
      role: "Homeowner"
    }
  },
  {
    id: 2,
    title: "Commercial HOA Perimeter Fencing - Orange County",
    location: "Irvine, CA",
    duration: "6 weeks",
    budget: "$125,000",
    category: "Commercial",
    challenge: "An HOA community needed to replace 2,000 linear feet of aging fence while maintaining curb appeal and meeting strict city code requirements.",
    solution: "We installed code-compliant iron fencing with anti-climb features, integrated three automated vehicle gates, and two pedestrian access points with keypad entry systems.",
    results: [
      "Reduced security incidents by 75%",
      "Met all city compliance requirements ahead of schedule",
      "Increased property values within the community",
      "Maintenance-free powder coating with 10-year warranty"
    ],
    testimonial: {
      text: "Professional, on-time, and on-budget. The Iron Works team handled our complex project with expertise and clear communication throughout.",
      author: "Robert K.",
      role: "HOA Board President"
    }
  },
  {
    id: 3,
    title: "Custom Balcony Railings - Downtown LA Penthouse",
    location: "Los Angeles, CA",
    duration: "2 weeks",
    budget: "$28,000",
    category: "Residential",
    challenge: "A high-rise penthouse required custom modern iron railings that provided safety while maintaining unobstructed city views.",
    solution: "We fabricated minimalist horizontal bar railings with brushed stainless steel finish and integrated LED accent lighting for evening ambiance.",
    results: [
      "Modern aesthetic that complemented contemporary architecture",
      "Passed all building safety inspections",
      "Featured in Architectural Digest",
      "Client referred 3 additional projects"
    ],
    testimonial: {
      text: "Absolutely stunning work. The railings are both a safety feature and a work of art. Couldn't be happier!",
      author: "Michael T.",
      role: "Homeowner"
    }
  }
]

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(caseStudies[0])
  const [isQuoteWizardOpen, setIsQuoteWizardOpen] = useState(false)

  return (
    <section className="py-24 bg-[#f8f6f3]" id="case-studies">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Success Stories
          </h2>
          <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-4" />
          <p className="text-lg text-[#3c3c3c] max-w-2xl mx-auto">
            See how we've transformed properties across Southern California with our expert ironwork
          </p>
        </div>

        {/* Case Study Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => setSelectedCase(study)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCase.id === study.id
                  ? 'bg-[#C41E3A] text-white shadow-lg'
                  : 'bg-white text-[#3c3c3c] hover:bg-gray-100'
              }`}
            >
              {study.category} - {study.location.split(',')[0]}
            </button>
          ))}
        </div>

        {/* Selected Case Study */}
        <div className="max-w-4xl mx-auto">
          {/* Details */}
          <div>
            <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6">
              {selectedCase.title}
            </h3>

            {/* Project Info */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <Card className="p-4 text-center border-[#e5e5e5]">
                <MapPin className="w-6 h-6 text-[#C41E3A] mx-auto mb-2" />
                <div className="text-sm text-[#3c3c3c]">Location</div>
                <div className="font-bold text-[#1a1a1a]">{selectedCase.location}</div>
              </Card>
              <Card className="p-4 text-center border-[#e5e5e5]">
                <Clock className="w-6 h-6 text-[#C41E3A] mx-auto mb-2" />
                <div className="text-sm text-[#3c3c3c]">Duration</div>
                <div className="font-bold text-[#1a1a1a]">{selectedCase.duration}</div>
              </Card>
              <Card className="p-4 text-center border-[#e5e5e5]">
                <DollarSign className="w-6 h-6 text-[#C41E3A] mx-auto mb-2" />
                <div className="text-sm text-[#3c3c3c]">Investment</div>
                <div className="font-bold text-[#1a1a1a]">{selectedCase.budget}</div>
              </Card>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-[#1a1a1a] mb-2">The Challenge</h4>
                <p className="text-[#3c3c3c]">{selectedCase.challenge}</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#1a1a1a] mb-2">Our Solution</h4>
                <p className="text-[#3c3c3c]">{selectedCase.solution}</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#1a1a1a] mb-3">Key Results</h4>
                <ul className="space-y-2">
                  {selectedCase.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#C41E3A] flex-shrink-0 mt-0.5" />
                      <span className="text-[#3c3c3c]">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              <Card className="p-6 bg-gradient-to-br from-[#1a1a1a] to-[#3c3c3c] text-white border-none">
                <div className="text-4xl text-[#C41E3A] mb-3">"</div>
                <p className="text-lg italic mb-4">{selectedCase.testimonial.text}</p>
                <div>
                  <div className="font-bold">{selectedCase.testimonial.author}</div>
                  <div className="text-sm text-white/70">{selectedCase.testimonial.role}</div>
                </div>
              </Card>

              <Button size="lg" className="w-full" onClick={() => setIsQuoteWizardOpen(true)}>
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <QuoteWizard isOpen={isQuoteWizardOpen} onClose={() => setIsQuoteWizardOpen(false)} />
    </section>
  )
}
