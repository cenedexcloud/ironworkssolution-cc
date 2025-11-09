"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Calculator, DollarSign, Info } from "lucide-react"
import BookingScheduler from "@/components/BookingScheduler"
import QuoteWizard from "@/components/QuoteWizard"

export default function PricingCalculator() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isQuoteWizardOpen, setIsQuoteWizardOpen] = useState(false)
  const [fenceLength, setFenceLength] = useState(100)
  const [fenceHeight, setFenceHeight] = useState(6)
  const [style, setStyle] = useState<'standard' | 'ornate' | 'premium'>('standard')
  const [gates, setGates] = useState(1)
  const [automation, setAutomation] = useState(false)
  const [coating, setCoating] = useState<'standard' | 'premium'>('standard')

  // Pricing logic - Based on actual pricing per linear foot
  const pricePerFoot = {
    standard: {
      5: 68.50,
      6: 75.00,
      8: 115.00
    },
    ornate: {
      5: 83.50,
      6: 90.00,
      8: 130.00
    },
    premium: {
      5: 113.50,
      6: 120.00,
      8: 160.00
    }
  }

  // Get the appropriate price per foot based on height and style
  const getPricePerFoot = () => {
    const prices = pricePerFoot[style]
    if (fenceHeight === 5) return prices[5]
    if (fenceHeight === 6) return prices[6]
    if (fenceHeight === 8) return prices[8]
    // Interpolate for heights not in our pricing table
    if (fenceHeight === 4) return prices[5] * 0.85 // Estimate for 4ft
    if (fenceHeight === 7) return (prices[6] + prices[8]) / 2 // Average of 6ft and 8ft
    return prices[6] // Default to 6ft price
  }

  const gatePrice = {
    standard: 1200,
    ornate: 2400,
    premium: 4000
  }

  const automationPrice = 1500
  const coatingUpcharge = coating === 'premium' ? 15 : 0

  // Calculations
  const fenceCost = fenceLength * (getPricePerFoot() + coatingUpcharge)
  const gateCost = gates * (gatePrice[style] + (automation ? automationPrice : 0))
  const subtotal = fenceCost + gateCost
  const laborCost = subtotal * 0.35
  const permitFees = 450
  const total = subtotal + laborCost + permitFees

  return (
    <section className="py-24 bg-white" id="pricing-calculator">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Instant Price Estimate
          </h2>
          <div className="w-24 h-1 bg-[#C41E3A] mx-auto mb-4" />
          <p className="text-lg text-[#3c3c3c] max-w-2xl mx-auto">
            Get an instant estimate for your iron fencing project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Calculator Controls */}
          <div className="space-y-8">
            <Card className="p-6 border-[#e5e5e5]">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-[#C41E3A]" />
                Configure Your Project
              </h3>

              <div className="space-y-6">
                {/* Fence Length */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    Fence Length: {fenceLength} linear feet
                  </Label>
                  <Slider
                    value={[fenceLength]}
                    onValueChange={(value: number[]) => setFenceLength(value[0])}
                    min={20}
                    max={500}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-[#3c3c3c] mt-2">
                    <span>20 ft</span>
                    <span>500 ft</span>
                  </div>
                </div>

                {/* Fence Height */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    Fence Height: {fenceHeight} feet
                  </Label>
                  <Slider
                    value={[fenceHeight]}
                    onValueChange={(value: number[]) => setFenceHeight(value[0])}
                    min={4}
                    max={8}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-[#3c3c3c] mt-2">
                    <span>4 ft</span>
                    <span>8 ft</span>
                  </div>
                </div>

                {/* Style Selection */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">Fence Style</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['standard', 'ornate', 'premium'] as const).map((s) => (
                      <button
                        key={s}
                        onClick={() => setStyle(s)}
                        className={`p-4 rounded-lg border-2 text-center capitalize transition-all ${
                          style === s
                            ? 'border-[#C41E3A] bg-[#C41E3A] text-white'
                            : 'border-gray-200 hover:border-[#C41E3A]'
                        }`}
                      >
                        {s}
                        <div className="text-xs mt-1 opacity-80">
                          ${pricePerFoot[s][6]}/ft
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Number of Gates */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    Number of Gates: {gates}
                  </Label>
                  <Slider
                    value={[gates]}
                    onValueChange={(value: number[]) => setGates(value[0])}
                    min={0}
                    max={5}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-[#3c3c3c] mt-2">
                    <span>No gates</span>
                    <span>5 gates</span>
                  </div>
                </div>

                {/* Gate Automation */}
                <div className="flex items-center justify-between p-4 bg-[#f8f6f3] rounded-lg">
                  <div>
                    <Label className="text-base font-semibold block">Gate Automation</Label>
                    <p className="text-sm text-[#3c3c3c]">Add remote & keypad access</p>
                  </div>
                  <button
                    onClick={() => setAutomation(!automation)}
                    className={`w-14 h-8 rounded-full transition-colors ${
                      automation ? 'bg-[#C41E3A]' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-6 h-6 bg-white rounded-full transition-transform ${
                      automation ? 'translate-x-7' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                {/* Coating */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">Powder Coating</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setCoating('standard')}
                      className={`p-4 rounded-lg border-2 text-center transition-all ${
                        coating === 'standard'
                          ? 'border-[#C41E3A] bg-[#C41E3A] text-white'
                          : 'border-gray-200 hover:border-[#C41E3A]'
                      }`}
                    >
                      Standard
                      <div className="text-xs mt-1 opacity-80">Included</div>
                    </button>
                    <button
                      onClick={() => setCoating('premium')}
                      className={`p-4 rounded-lg border-2 text-center transition-all ${
                        coating === 'premium'
                          ? 'border-[#C41E3A] bg-[#C41E3A] text-white'
                          : 'border-gray-200 hover:border-[#C41E3A]'
                      }`}
                    >
                      Premium
                      <div className="text-xs mt-1 opacity-80">+$15/ft</div>
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Price Breakdown */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <Card className="p-8 border-2 border-[#C41E3A]">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-[#C41E3A]" />
                Price Estimate
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-[#3c3c3c]">Fencing ({fenceLength} ft)</span>
                  <span className="font-semibold">${fenceCost.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                </div>

                {gates > 0 && (
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-[#3c3c3c]">
                      Gates ({gates}) {automation && '+ Automation'}
                    </span>
                    <span className="font-semibold">${gateCost.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                  </div>
                )}

                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-[#3c3c3c]">Labor & Installation</span>
                  <span className="font-semibold">${laborCost.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-[#3c3c3c]">Permits & Fees</span>
                  <span className="font-semibold">${permitFees.toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#3c3c3c] text-white p-6 rounded-lg mb-6">
                <div className="text-sm opacity-90 mb-2">Estimated Total</div>
                <div className="text-4xl font-bold">${total.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
                <div className="text-xs opacity-75 mt-2">*Final price may vary based on site conditions</div>
              </div>

              <div className="space-y-3">
                <Button size="lg" className="w-full" onClick={() => setIsQuoteWizardOpen(true)}>
                  Get Official Quote
                </Button>
                <Button size="lg" variant="outline" className="w-full" onClick={() => setIsBookingOpen(true)}>
                  Schedule Consultation
                </Button>
              </div>

              <div className="mt-6 p-4 bg-[#f8f6f3] rounded-lg">
                <div className="flex items-start gap-2">
                  <Info className="w-5 h-5 text-[#C41E3A] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#3c3c3c]">
                    This is an instant estimate. Final pricing will be confirmed after a free on-site consultation.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <BookingScheduler isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <QuoteWizard isOpen={isQuoteWizardOpen} onClose={() => setIsQuoteWizardOpen(false)} />
    </section>
  )
}
