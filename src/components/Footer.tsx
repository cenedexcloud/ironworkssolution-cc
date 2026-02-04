"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, QrCode } from "lucide-react"

const serviceAreas = [
  "Los Angeles", "Malibu", "Beverly Hills", "Pasadena",
  "Santa Monica", "Calabasas", "Orange County", "Irvine",
  "Newport Beach", "Riverside", "Ventura", "San Diego"
]

const serviceLinks = [
  { name: "Residential Iron Fencing", href: "/services/residential-iron-fencing" },
  { name: "Commercial & HOA Ironworks", href: "/services/commercial-hoa-ironworks" },
  { name: "Custom Fabrication & Design", href: "/services/custom-fabrication-design" },
  { name: "Gates & Automation", href: "/services/gates-automation" },
  { name: "Repairs & Restoration", href: "/services/repairs-restoration" },
  { name: "Powder Coating & Finishes", href: "/services/powder-coating-finishes" },
  { name: "Balconies & Railings", href: "/services/balconies-railings-stair-systems" },
]

const companyLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Blog", href: "/#blog" },
  { name: "Contact", href: "/#contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
]

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#f8f6f3]">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C41E3A] to-[#A71930] rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">Iron Works Solution</h3>
                <p className="text-xs text-[#C41E3A]">Built to Last</p>
              </div>
            </Link>
            <p className="text-sm text-[#f8f6f3]/70 mb-6">
              Premium iron fencing and metal fabrication serving Southern California for over 20 years.
            </p>
            <div className="space-y-3">
              <a href="tel:323-470-2101" className="flex items-center gap-3 text-sm hover:text-[#C41E3A] transition-colors">
                <Phone className="w-4 h-4 text-[#C41E3A]" />
                323-470-2101
              </a>
              <a href="mailto:info@ironworkssolution.net" className="flex items-center gap-3 text-sm hover:text-[#C41E3A] transition-colors">
                <Mail className="w-4 h-4 text-[#C41E3A]" />
                info@ironworkssolution.net
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-[#C41E3A] mt-0.5 flex-shrink-0" />
                <span className="text-[#f8f6f3]/70">
                  Southern California<br />
                  CSLB License #1141599
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <svg className="w-4 h-4 text-[#C41E3A] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[#f8f6f3]/70">
                  Mon-Fri: 8AM-5PM<br />
                  Sat: 8AM-1PM<br />
                  Sun: Closed
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-sm font-semibold mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-[#2a2a2a] rounded-lg flex items-center justify-center hover:bg-[#C41E3A] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#2a2a2a] rounded-lg flex items-center justify-center hover:bg-[#C41E3A] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#2a2a2a] rounded-lg flex items-center justify-center hover:bg-[#C41E3A] transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-[#f8f6f3]/70 hover:text-[#C41E3A] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-[#f8f6f3]/70 hover:text-[#C41E3A] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-lg mb-6">Service Areas</h3>
            <div className="space-y-2">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="text-sm text-[#f8f6f3]/70"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="mt-12 pt-12 border-t border-[#3c3c3c]">
          <div className="max-w-md mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <QrCode className="w-6 h-6 text-[#C41E3A]" />
              <h3 className="font-bold text-xl">Scan to Visit Our Website</h3>
            </div>
            <p className="text-sm text-[#f8f6f3]/70 mb-6">
              Scan this QR code with your phone to visit our website and get a free quote
            </p>
            <div className="inline-block p-6 bg-white rounded-xl shadow-xl">
              <img
                src="/QR_code.jpg"
                alt="QR Code to visit Iron Works Solution website"
                width={200}
                height={200}
                className="w-[200px] h-[200px]"
              />
            </div>
            <p className="text-xs text-[#f8f6f3]/60 mt-4">
              ironworkssolution.net
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#3c3c3c]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#f8f6f3]/60">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p>© 2025 Iron Works Solution. All rights reserved.</p>
              <Link href="/privacy-policy" className="hover:text-[#C41E3A] transition-colors">
                Privacy Policy
              </Link>
            </div>
            <a
              href="https://tradeblaze.net"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img
                src="/tradeblaze.jpg"
                alt="TradeBLAZE"
                className="h-6 object-contain"
              />
              <span className="text-[#f8f6f3]/60 hover:text-[#f8f6f3] transition-colors">tradeblaze.net</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
