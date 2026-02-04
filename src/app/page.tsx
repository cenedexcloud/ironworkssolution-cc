"use client"

import { useState, useEffect, useRef } from "react"
import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Gallery from "@/components/Gallery"
import About from "@/components/About"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Blog from "@/components/Blog"
import CaseStudies from "@/components/CaseStudies"
import PricingCalculator from "@/components/PricingCalculator"
import Footer from "@/components/Footer"

import SocialProof from "@/components/SocialProof"
import QuoteWizard from "@/components/QuoteWizard"
import ExitPopupTester from "@/components/ExitPopupTester"
// import ExitIntentPopup from "@/components/ExitIntentPopup" // Disabled - 15% discount popup
import BookingScheduler from "@/components/BookingScheduler"
import QuickLeadCapture from "@/components/QuickLeadCapture"
import FloatingLeadButton from "@/components/FloatingLeadButton"
import FloatingPhoneButton from "@/components/FloatingPhoneButton"
import PopupCoordinatorDebug from "@/components/PopupCoordinatorDebug"
import { Button } from "@/components/ui/button"
import { Calculator, CalendarClock } from "lucide-react"
import popupCoordinator from "@/lib/popup-coordinator"

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)
  const [isQuoteWizardOpen, setIsQuoteWizardOpen] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isQuickLeadOpen, setIsQuickLeadOpen] = useState(false)
  const quickLeadIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Mount check to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Disable browser scroll restoration (but don't force scroll on every load)
  useEffect(() => {
    // Only scroll to top on initial page load, not on hot reloads
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  // Show quick lead capture after 3 minutes, then every 5 minutes
  useEffect(() => {
    const showQuickLead = () => {
      // Only show if user hasn't already interacted with other modals
      // and the popup coordinator allows it (allow recurring for this popup)
      if (!isQuoteWizardOpen && !isBookingOpen && popupCoordinator.canShow('quick-lead', true)) {
        setIsQuickLeadOpen(true)
        popupCoordinator.show('quick-lead', true)
      }
    }

    // First show after 3 minutes (180000ms)
    const initialTimer = setTimeout(() => {
      showQuickLead()

      // After first show, start repeating every 5 minutes
      quickLeadIntervalRef.current = setInterval(() => {
        showQuickLead()
      }, 300000) // 5 minutes
    }, 180000)

    return () => {
      clearTimeout(initialTimer)
      if (quickLeadIntervalRef.current) {
        clearInterval(quickLeadIntervalRef.current)
      }
    }
  }, [isQuoteWizardOpen, isBookingOpen])

  // Show minimal placeholder during SSR to prevent hydration mismatch
  if (!isMounted) {
    return (
      <main className="min-h-screen bg-[#2a2a2a]">
        {/* Minimal SSR placeholder */}
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />

      <section id="services">
        <Services />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="about">
        <About onBookingOpen={() => setIsBookingOpen(true)} />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <CaseStudies />

      <PricingCalculator />

      {/* CTA Section - Quote Wizard Trigger */}
      <section className="py-20 bg-gradient-to-r from-[#1a1a1a] to-[#3c3c3c] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get an instant estimate with our interactive quote wizard
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => setIsQuoteWizardOpen(true)}
              className="text-lg px-8"
            >
              <Calculator className="w-5 h-5" />
              Start Quote Wizard
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsBookingOpen(true)}
              className="text-lg px-8 bg-white hover:bg-gray-100"
            >
              <CalendarClock className="w-5 h-5" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <section id="blog">
        <Blog />
      </section>

      <Contact />
      <Footer />

      {/* Lead Generation Widgets */}
      <SocialProof />
      <ExitPopupTester />
      {/* <ExitIntentPopup /> */} {/* Disabled - 15% discount popup */}
      <QuoteWizard
        isOpen={isQuoteWizardOpen}
        onClose={() => setIsQuoteWizardOpen(false)}
      />
      <BookingScheduler
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
      <QuickLeadCapture
        isOpen={isQuickLeadOpen}
        onClose={() => {
          setIsQuickLeadOpen(false)
          popupCoordinator.close('quick-lead')
        }}
      />
      <FloatingLeadButton onClick={() => {
        setIsQuickLeadOpen(true)
        popupCoordinator.show('quick-lead', true)
      }} />
      <FloatingPhoneButton />
      {/* <PopupCoordinatorDebug /> */}
    </main>
  )
}
