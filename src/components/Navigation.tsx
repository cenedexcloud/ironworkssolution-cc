"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Navigation() {
  const { t } = useLanguage()
  const [isMounted, setIsMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null)

  const servicePages = [
    { name: t.services.residential.title, href: "/services/residential-iron-fencing" },
    { name: t.services.commercial.title, href: "/services/commercial-hoa-ironworks" },
    { name: t.services.custom.title, href: "/services/custom-fabrication-design" },
    { name: t.services.gates.title, href: "/services/gates-automation" },
    { name: t.services.repairs.title, href: "/services/repairs-restoration" },
    { name: t.services.powder.title, href: "/services/powder-coating-finishes" },
    { name: t.services.balconies.title, href: "/services/balconies-railings-stair-systems" },
  ]

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.gallery, href: "/#gallery" },
    { name: t.nav.testimonials, href: "/#testimonials" },
    { name: "Free Guide", href: "/resources/free-guide" },
    { name: "Referral Program", href: "/referral" },
    { name: t.nav.contact, href: "/#contact" },
  ]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (closeTimeout) {
        clearTimeout(closeTimeout)
      }
    }
  }, [closeTimeout])

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    }
    setServicesDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setServicesDropdownOpen(false)
    }, 300) // 300ms delay before closing
    setCloseTimeout(timeout)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#000000] shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-serif text-3xl text-white font-bold leading-tight">Iron Works</span>
            <span className="font-serif text-3xl text-[#C41E3A] font-bold leading-tight">Solution</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {/* Home Link */}
            <Link
              href="/"
              className="text-white hover:text-[#C41E3A] transition-colors font-normal text-lg"
            >
              {t.nav.home}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-white hover:text-[#C41E3A] transition-colors font-normal text-lg py-2">
                {t.nav.services}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Invisible bridge to prevent gap issues */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50">
                  <div className="bg-white shadow-2xl rounded-lg py-2 border border-gray-100">
                    {servicePages.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-6 py-3 text-[#1a1a1a] hover:bg-[#f8f6f3] hover:text-[#C41E3A] transition-colors text-sm"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other Nav Links */}
            {navLinks.filter(link => link.name !== 'Home').map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#C41E3A] transition-colors font-normal text-lg"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Phone Button */}
          <div className="hidden lg:flex items-center gap-4 ml-8">
            <Button className="bg-[#C41E3A] hover:bg-[#A71930] text-white h-14 px-8 rounded-lg text-lg">
              <Phone className="w-5 h-5 mr-2" />
              {isMounted ? t.nav.phone : '(323) 470-2101'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#404040] border-t border-[#555]">
          <div className="container mx-auto px-4 py-6 space-y-2">
            {/* Home Link */}
            <Link
              href="/"
              className="block text-white hover:text-[#C41E3A] transition-colors font-normal py-3 px-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.home}
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full text-white hover:text-[#C41E3A] transition-colors font-normal py-3 px-4"
              >
                {t.nav.services}
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="bg-[#333] rounded-lg mt-1">
                  {servicePages.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-white/90 hover:text-[#C41E3A] transition-colors py-2 px-8 text-sm"
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        setMobileServicesOpen(false)
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Nav Links */}
            {navLinks.filter(link => link.name !== 'Home').map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-white hover:text-[#C41E3A] transition-colors font-normal py-3 px-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 mt-4 border-t border-[#333]">
              <Button className="w-full bg-[#C41E3A] hover:bg-[#A71930] text-white" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                {t.nav.phone}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
