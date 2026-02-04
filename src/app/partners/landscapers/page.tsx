"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function LandscaperReferralProgram() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-black via-charcoal to-black text-white overflow-hidden pt-28">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url('https://automaticgatemasters.com/wp-content/uploads/2025/07/Electric_Gate_Los_Altos.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 sm:py-32">
            <div className="max-w-3xl">
              <div className="inline-block bg-[#C41E3A] text-white mb-6 px-5 py-2.5 text-sm font-semibold rounded-md">
                California Iron-Works Partner Program
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6 leading-tight">
                Landscaper Referral Program
              </h1>
              <p className="text-xl sm:text-2xl text-cream/80 mb-8 leading-relaxed font-light">
                Partner with us. Earn more. Deliver more value to your clients.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#C41E3A] hover:bg-[#A01830] text-white text-lg h-12 px-8">
                  Join the Program
                </Button>
                <Button size="lg" variant="outline" className="text-lg h-12 px-8 border-2 border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Landscapers Love This Section */}
        <section className="py-20 bg-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-4">
                Why Landscapers Love This Program
              </h2>
              <p className="text-xl text-warm-gray max-w-3xl mx-auto">
                Landscapers are often first on-site when clients need custom metalwork.
                Turn your referrals into high-value projects — and get rewarded.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Custom Gates", icon: "🚪" },
                { title: "Railings", icon: "🛡️" },
                { title: "Fencing", icon: "🔒" },
                { title: "Pergola Frames", icon: "🏗️" },
                { title: "Metal Accents", icon: "✨" },
                { title: "Security Upgrades", icon: "🔐" }
              ].map((item, idx) => (
                <Card key={idx} className="text-center p-8 hover:border-[#C41E3A] transition-all hover:shadow-xl bg-white">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal">{item.title}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cost-Effective Program Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#C41E3A] text-white mb-4 px-5 py-2 text-sm font-semibold rounded-md">
                Simple & Attractive
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-4">
                Cost-Effective Referral Program
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Cash Reward */}
              <Card className="bg-white border-2">
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-3 text-2xl">
                    <span className="text-3xl">💰</span>
                    Cash Reward per Closed Project
                  </CardTitle>
                  <CardDescription className="text-base mt-3">
                    No cost until we close the job
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-cream rounded-lg border-l-4 border-[#C41E3A]">
                      <span className="font-semibold text-charcoal">Projects under $2,000</span>
                      <div className="bg-[#C41E3A] text-white text-lg px-4 py-1.5 rounded-md font-bold">$100</div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-cream rounded-lg border-l-4 border-[#C41E3A]">
                      <span className="font-semibold text-charcoal">Projects $2,000–$6,000</span>
                      <div className="bg-[#C41E3A] text-white text-lg px-4 py-1.5 rounded-md font-bold">$200</div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-cream rounded-lg border-l-4 border-[#C41E3A]">
                      <span className="font-semibold text-charcoal">Projects above $6,000</span>
                      <div className="bg-[#C41E3A] text-white text-lg px-4 py-1.5 rounded-md font-bold">$300</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Repeat Partner Bonus */}
              <Card className="bg-white border-2">
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-3 text-2xl">
                    <span className="text-3xl">🎯</span>
                    Repeat Partner Bonus
                  </CardTitle>
                  <CardDescription className="text-base mt-3">
                    For landscapers who send consistent business
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-cream to-[#F5E6E8] p-6 rounded-lg border border-[#C41E3A]/30">
                      <div className="text-4xl font-bold text-[#C41E3A] mb-2">+10% Extra</div>
                      <p className="text-charcoal">Earn 10% extra on your referral reward every 3 closed jobs</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-semibold text-charcoal mb-2">Example:</p>
                      <p className="text-sm text-warm-gray">
                        After 3 projects, your $200 reward becomes <span className="font-bold text-[#C41E3A]">$220</span> for the next cycle
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Benefits */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Priority Scheduling */}
              <Card className="bg-white border-2">
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-3 text-2xl">
                    <span className="text-3xl">⚡</span>
                    On-Site Quote Priority
                  </CardTitle>
                  <CardDescription className="text-base mt-3">
                    Your referred clients receive special treatment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-[#C41E3A] text-white rounded-full p-1.5 mt-0.5 flex-shrink-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-charcoal"><strong>48–72 hour priority scheduling</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-[#C41E3A] text-white rounded-full p-1.5 mt-0.5 flex-shrink-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-charcoal"><strong>Free site assessment</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-[#C41E3A] text-white rounded-full p-1.5 mt-0.5 flex-shrink-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-charcoal"><strong>Fast turnaround quotes</strong></span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-warm-gray italic">
                    This makes you look good and keeps your customers happy
                  </p>
                </CardContent>
              </Card>

              {/* Marketing Support */}
              <Card className="bg-white border-2">
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-3 text-2xl">
                    <span className="text-3xl">📸</span>
                    Marketing Support You Can Use
                  </CardTitle>
                  <CardDescription className="text-base mt-3">
                    No cost — just tools to help you upsell more visually
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-[#C41E3A] text-white rounded-full p-1.5 mt-0.5 flex-shrink-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-charcoal">Simple <strong>"Iron-Works Partner" badge</strong> for your website or proposals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-[#C41E3A] text-white rounded-full p-1.5 mt-0.5 flex-shrink-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-charcoal">Shareable <strong>before/after project photos</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-[#C41E3A] text-white rounded-full p-1.5 mt-0.5 flex-shrink-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-charcoal">A short <strong>menu of services</strong> you can send clients</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Simple Tracking */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* No Paperwork */}
              <Card className="bg-white border-2">
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-3 text-2xl">
                    <span className="text-3xl">📋</span>
                    No Paperwork, No Complicated Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-warm-gray mb-4">Just send your referral through:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-[#C41E3A] text-white rounded-full p-1.5 mt-0.5 flex-shrink-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-charcoal">A quick <strong>referral link</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-[#C41E3A] text-white rounded-full p-1.5 mt-0.5 flex-shrink-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-charcoal">Or text/email the client's name + contact</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-warm-gray italic">
                    You get updates at each stage until the job is complete
                  </p>
                </CardContent>
              </Card>

              {/* Year-End Bonus */}
              <Card className="bg-white border-2">
                <CardHeader>
                  <CardTitle className="font-serif flex items-center gap-3 text-2xl">
                    <span className="text-3xl">🎁</span>
                    End-of-Year Appreciation Bonus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-warm-gray mb-4">At the end of each year, your total referrals qualify you for:</p>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-4 bg-cream rounded-lg">
                      <div className="text-2xl mb-2">🎁</div>
                      <p className="text-sm font-semibold text-charcoal">Gift Cards</p>
                    </div>
                    <div className="text-center p-4 bg-cream rounded-lg">
                      <div className="text-2xl mb-2">🔧</div>
                      <p className="text-sm font-semibold text-charcoal">Tool Vouchers</p>
                    </div>
                    <div className="text-center p-4 bg-cream rounded-lg">
                      <div className="text-2xl mb-2">💵</div>
                      <p className="text-sm font-semibold text-charcoal">Cash Bonus</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why This Works */}
        <section className="py-20 bg-cream">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-12 text-center">
              Why This Program Works
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "💸", title: "No upfront cost", desc: "Only pay when we close the job" },
                { icon: "💰", title: "Attractive rewards", desc: "Manageable, fair amounts that add up" },
                { icon: "🔄", title: "Ongoing referrals", desc: "Bonuses encourage repeat partnerships" },
                { icon: "🤝", title: "Easy to work with", desc: "Simple process, no complicated tracking" },
                { icon: "🌟", title: "Value-adding partner", desc: "Positions you as a trusted resource" },
                { icon: "📈", title: "Win-win-win", desc: "You, us, and your clients all benefit" }
              ].map((item, idx) => (
                <div key={idx} className="text-center p-6">
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-sm text-warm-gray">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#C41E3A] to-[#A01830] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
              Ready to Start Earning?
            </h2>
            <p className="text-xl mb-8 opacity-90 font-light">
              Join California's top landscapers who are already partnering with us
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="text-lg h-12 px-8 bg-white text-[#C41E3A] hover:bg-cream">
                  Get Your Referral Link
                </Button>
              </Link>
              <Link href="/#contact">
                <Button size="lg" variant="outline" className="text-lg h-12 px-8 border-2 border-white text-white hover:bg-white/20">
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
