"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

function ReferralProgramContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showDialog, setShowDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectDescription: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  // Auto-open form if 'join' parameter is in URL (for email blast links)
  useEffect(() => {
    if (searchParams.get('join') === 'true') {
      setShowDialog(true);
    }
  }, [searchParams]);

  // Handle hash navigation on page load (for email links with #program-details)
  useEffect(() => {
    // Small delay to ensure page is fully rendered
    const timer = setTimeout(() => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const openJoinForm = () => {
    setShowDialog(true);
  };

  const scrollToProgram = () => {
    const programSection = document.getElementById('program-details');
    if (programSection) {
      programSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScheduleCall = () => {
    router.push('/#contact');
    // Delay to allow navigation to complete, then scroll to contact
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/referral-program', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you! We will contact you within 24-48 hours.' });
        setFormData({ name: "", phone: "", projectDescription: "" });
        setTimeout(() => {
          setShowDialog(false);
          setSubmitStatus(null);
        }, 3000);
      } else {
        setSubmitStatus({ type: 'error', message: result.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to submit. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/75 via-zinc-900/60 to-zinc-900/75"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <div className="bg-[#C41E3A] text-white mb-6 px-4 py-2 text-sm font-semibold inline-block rounded-md">
              California Iron-Works Partner Program
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              Landscaper Referral Program
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-300 mb-8 leading-relaxed">
              Partner with us. Earn more. Deliver more value to your clients.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg bg-[#C41E3A] hover:bg-[#A71930]" onClick={openJoinForm}>
                Join the Program
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white/10" onClick={scrollToProgram}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Landscapers Love This Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">
              Why Landscapers Love This Program
            </h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
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
              <Card key={idx} className="text-center p-8 hover:border-[#C41E3A] transition-colors">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-zinc-900">{item.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Landscaping Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-[#C41E3A] text-white mb-4 px-4 py-2 text-sm font-semibold inline-block rounded-md">
              Real Projects, Real Results
            </div>
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">
              Beautiful Landscapes Enhanced with Quality Iron Works
            </h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
              See how our custom iron works complement professional landscaping to create stunning outdoor spaces
            </p>
          </div>

          {/* Main Featured Image */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
              alt="Professional landscaping with custom iron fence"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Grid of Additional Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                alt="Iron fence with lush tropical landscaping"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Custom iron and wood gate with professional landscaping"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Modern home with iron fence and landscaping"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
                alt="Wrought iron fence along landscaped property"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80"
                alt="Luxury home with iron fencing and green lawn"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
                alt="Commercial property with iron fencing and landscaping"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-red-50 to-zinc-50 p-8 rounded-2xl border border-red-100">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                Complete the Picture for Your Clients
              </h3>
              <p className="text-lg text-zinc-700 mb-6">
                When you recommend our iron works, you're not just making a referral — you're offering a complete outdoor transformation. Your landscaping vision + our custom metalwork = dream properties that sell themselves.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-zinc-200">
                  <div className="text-[#C41E3A] font-bold text-lg">Premium Finish</div>
                  <div className="text-sm text-zinc-600">Complements your work</div>
                </div>
                <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-zinc-200">
                  <div className="text-[#C41E3A] font-bold text-lg">On-Time Delivery</div>
                  <div className="text-sm text-zinc-600">Matches your schedule</div>
                </div>
                <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-zinc-200">
                  <div className="text-[#C41E3A] font-bold text-lg">Professional Service</div>
                  <div className="text-sm text-zinc-600">Reflects well on you</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost-Effective Program Section */}
      <section id="program-details" className="py-20 bg-gradient-to-b from-zinc-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-[#C41E3A] text-white mb-4 px-4 py-2 text-sm font-semibold inline-block rounded-md">
              Simple & Attractive
            </div>
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">
              Cost-Effective Referral Program
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Cash Reward */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-3xl">💰</span>
                      Cash Reward per Closed Project
                    </CardTitle>
                    <CardDescription className="mt-3">
                      No cost until we close the job
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border-l-4 border-[#C41E3A]">
                    <span className="font-semibold text-zinc-900">Projects under $2,000</span>
                    <div className="bg-[#C41E3A] text-white text-lg px-4 py-1 rounded-md font-semibold">$100</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border-l-4 border-[#C41E3A]">
                    <span className="font-semibold text-zinc-900">Projects $2,000–$6,000</span>
                    <div className="bg-[#C41E3A] text-white text-lg px-4 py-1 rounded-md font-semibold">$200</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border-l-4 border-[#C41E3A]">
                    <span className="font-semibold text-zinc-900">Projects above $6,000</span>
                    <div className="bg-[#C41E3A] text-white text-lg px-4 py-1 rounded-md font-semibold">$300</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Repeat Partner Bonus */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-3xl">🎯</span>
                  Repeat Partner Bonus
                </CardTitle>
                <CardDescription className="mt-3">
                  For landscapers who send consistent business
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
                    <div className="text-3xl font-bold text-[#C41E3A] mb-2">+10% Extra</div>
                    <p className="text-zinc-700">Earn 10% extra on your referral reward every 3 closed jobs</p>
                  </div>
                  <div className="bg-zinc-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-zinc-900 mb-2">Example:</p>
                    <p className="text-sm text-zinc-600">
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-3xl">⚡</span>
                  On-Site Quote Priority
                </CardTitle>
                <CardDescription className="mt-3">
                  Your referred clients receive special treatment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#C41E3A] text-white rounded-full p-1 mt-0.5">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-zinc-700"><strong>48–72 hour priority scheduling</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#C41E3A] text-white rounded-full p-1 mt-0.5">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-zinc-700"><strong>Free site assessment</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#C41E3A] text-white rounded-full p-1 mt-0.5">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-zinc-700"><strong>Fast turnaround quotes</strong></span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-zinc-600 italic">
                  This makes you look good and keeps your customers happy
                </p>
              </CardContent>
            </Card>

            {/* Marketing Support */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-3xl">📸</span>
                  Marketing Support You Can Use
                </CardTitle>
                <CardDescription className="mt-3">
                  No cost — just tools to help you upsell more visually
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#C41E3A] text-white rounded-full p-1 mt-0.5">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-zinc-700">Simple <strong>"Iron-Works Partner" badge</strong> for your website or proposals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#C41E3A] text-white rounded-full p-1 mt-0.5">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-zinc-700">Shareable <strong>before/after project photos</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#C41E3A] text-white rounded-full p-1 mt-0.5">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-zinc-700">A short <strong>menu of services</strong> you can send clients</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Simple Tracking */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* No Paperwork */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-3xl">📋</span>
                  No Paperwork, No Complicated Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 mb-4">Just send your referral through:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#C41E3A] text-white rounded-full p-1 mt-0.5">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-zinc-700">A quick <strong>referral link</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#C41E3A] text-white rounded-full p-1 mt-0.5">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-zinc-700">Or text/email the client's name + contact</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-zinc-600 italic">
                  You get updates at each stage until the job is complete
                </p>
              </CardContent>
            </Card>

            {/* Year-End Bonus */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-3xl">🎁</span>
                  End-of-Year Appreciation Bonus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 mb-4">At the end of each year, your total referrals qualify you for:</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl mb-2">🎁</div>
                    <p className="text-sm font-semibold text-zinc-900">Gift Cards</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl mb-2">🔧</div>
                    <p className="text-sm font-semibold text-zinc-900">Tool Vouchers</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl mb-2">💵</div>
                    <p className="text-sm font-semibold text-zinc-900">Cash Bonus</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-zinc-900 mb-12 text-center">
            Why This Program Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "💸", title: "No upfront cost", desc: "Only pay when we close the job" },
              { icon: "💰", title: "Attractive rewards", desc: "Manageable, fair amounts that add up" },
              { icon: "🔄", title: "Ongoing referrals", desc: "Bonuses encourage repeat partnerships" },
              { icon: "🤝", title: "Easy to work with", desc: "Simple process, no complicated tracking" },
              { icon: "🌟", title: "Value-adding partner", desc: "Positions you as a trusted resource" },
              { icon: "📈", title: "Win-win-win", desc: "You, us, and your clients all benefit" }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-20 bg-gradient-to-r from-[#C41E3A] to-[#A71930] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join California's top landscapers who are already partnering with us
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg bg-white text-[#C41E3A] hover:bg-zinc-100"
              onClick={openJoinForm}
            >
              Get Your Referral Link
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg border-2 border-white text-white hover:bg-white/20"
              onClick={handleScheduleCall}
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm">
              Questions? Contact us to learn more about the program.
            </p>
            <p className="text-xs mt-4 text-zinc-500">
              California Iron-Works Referral Program • Built for Landscape Professionals
            </p>
          </div>
        </div>
      </footer>

      {/* Join Program Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-zinc-900">Join the Referral Program</DialogTitle>
            <DialogDescription className="text-zinc-600">
              Fill out the form below and we'll get back to you within 24-48 hours with your personalized referral link.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="projectDescription">Tell us about your business *</Label>
              <Textarea
                id="projectDescription"
                name="projectDescription"
                placeholder="Briefly describe your landscaping business and the types of projects you typically work on..."
                value={formData.projectDescription}
                onChange={handleInputChange}
                required
                className="w-full min-h-[120px]"
              />
            </div>

            {submitStatus && (
              <div className={`p-4 rounded-md ${
                submitStatus.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowDialog(false)}
                className="flex-1"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-[#C41E3A] hover:bg-[#A71930]"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default function ReferralProgram() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ReferralProgramContent />
    </Suspense>
  );
}
