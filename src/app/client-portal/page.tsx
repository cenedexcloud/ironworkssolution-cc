"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileText, Download, Eye, Calendar, DollarSign, CheckCircle2, Clock } from "lucide-react"

export default function ClientPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Enhanced client data with more realistic information
  const clientData = {
    name: "John Smith",
    projectName: "Custom Iron Fence Installation",
    projectAddress: "1234 Oak Street, Beverly Hills, CA 90210",
    projectStatus: "In Progress",
    completionPercentage: 65,
    nextMilestone: "Final inspection scheduled for Feb 20, 2024",
    startDate: "January 10, 2024",
    expectedCompletion: "February 25, 2024",
    invoices: [
      { id: "INV-001", date: "2024-01-15", amount: 15000, status: "Paid", description: "Initial deposit" },
      { id: "INV-002", date: "2024-02-01", amount: 20000, status: "Paid", description: "Materials & fabrication" },
      { id: "INV-003", date: "2024-02-15", amount: 10000, status: "Pending", description: "Final payment" }
    ],
    documents: [
      { name: "Project Contract", date: "2024-01-10", type: "PDF", size: "2.4 MB" },
      { name: "Building Permit", date: "2024-01-12", type: "PDF", size: "1.1 MB" },
      { name: "Design Plans", date: "2024-01-15", type: "PDF", size: "5.2 MB" },
      { name: "Installation Photos", date: "2024-02-10", type: "ZIP", size: "15.8 MB" }
    ],
    timeline: [
      { date: "2024-01-10", event: "Contract signed", status: "completed" },
      { date: "2024-01-15", event: "Deposit received", status: "completed" },
      { date: "2024-01-20", event: "Fabrication started", status: "completed" },
      { date: "2024-02-05", event: "Installation began", status: "completed" },
      { date: "2024-02-20", event: "Final inspection", status: "upcoming" },
      { date: "2024-02-25", event: "Project completion", status: "upcoming" }
    ]
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would authenticate with your backend
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#f8f6f3] flex items-center justify-center py-12 px-4">
        <Card className="max-w-md w-full p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#1a1a1a] mb-2">Client Portal</h1>
            <p className="text-[#3c3c3c]">Access your project information</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Sign In
            </Button>
            <p className="text-sm text-center text-[#3c3c3c]">
              Need help? <a href="#" className="text-[#C41E3A] hover:underline">Contact support</a>
            </p>
          </form>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f8f6f3] py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1a1a1a] mb-2">Welcome back, {clientData.name}!</h1>
          <p className="text-[#3c3c3c]">Track your project progress and access important documents</p>
        </div>

        {/* Project Status */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-[#C41E3A] to-[#a01829] text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold">Your Project Status</h2>
              <p className="opacity-90">{clientData.projectStatus}</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">{clientData.completionPercentage}%</div>
              <div className="text-sm opacity-90">Complete</div>
            </div>
          </div>
          <div className="w-full bg-white/30 rounded-full h-3 mb-3">
            <div
              className="bg-white rounded-full h-3 transition-all duration-500"
              style={{ width: `${clientData.completionPercentage}%` }}
            />
          </div>
          <p className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Next: {clientData.nextMilestone}
          </p>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Invoices */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-[#C41E3A]" />
              Invoices
            </h3>
            <div className="space-y-3">
              {clientData.invoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between p-4 bg-[#f8f6f3] rounded-lg">
                  <div className="flex-1">
                    <div className="font-semibold text-[#1a1a1a]">{invoice.id}</div>
                    <div className="text-sm text-[#3c3c3c]">{invoice.description}</div>
                    <div className="text-xs text-[#3c3c3c]">{invoice.date}</div>
                  </div>
                  <div className="text-right mr-4">
                    <div className="font-bold text-[#1a1a1a]">${invoice.amount.toLocaleString()}</div>
                    <div className={`text-sm ${invoice.status === 'Paid' ? 'text-green-600' : 'text-yellow-600'}`}>
                      {invoice.status}
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          {/* Documents */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#C41E3A]" />
              Documents
            </h3>
            <div className="space-y-3">
              {clientData.documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-[#f8f6f3] rounded-lg">
                  <div className="flex-1">
                    <div className="font-semibold text-[#1a1a1a]">{doc.name}</div>
                    <div className="text-xs text-[#3c3c3c]">{doc.type} • {doc.size} • {doc.date}</div>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Timeline */}
        <Card className="p-6 mt-8">
          <h3 className="text-xl font-bold text-[#1a1a1a] mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#C41E3A]" />
            Project Timeline
          </h3>
          <div className="space-y-4">
            {clientData.timeline.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.status === 'completed' ? 'bg-green-100' : 'bg-gray-100'
                }`}>
                  {item.status === 'completed' ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  ) : (
                    <Clock className="w-5 h-5 text-gray-400" />
                  )}
                </div>
                <div className="flex-1 pb-8 border-b border-gray-200 last:border-0">
                  <div className="font-semibold text-[#1a1a1a]">{item.event}</div>
                  <div className="text-sm text-[#3c3c3c]">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
