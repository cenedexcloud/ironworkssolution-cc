import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Iron Works Solution",
  description: "Privacy Policy for Iron Works Solution - Learn how we collect, use, and protect your information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      {/* Header */}
      <div className="bg-[#1a1a1a] text-white py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-[#C41E3A] hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-gray-400 mt-4">Iron Works Solution</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Effective date:</strong> 02-04-2026<br />
              <strong>Website:</strong> ironworkssolution.net ("Site")<br />
              <strong>Company:</strong> Iron Works Solution ("we," "us," "our")
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">1) What this policy covers</h2>
            <p className="text-gray-700 mb-6">
              This Privacy Policy explains how we collect, use, share, and protect information when you visit our Site or contact us for quotes, consultations, referrals, or resources (such as downloadable guides).
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">2) Information we collect</h2>
            <p className="text-gray-700 mb-4">We may collect the following categories of information:</p>

            <h3 className="text-xl font-semibold text-[#1a1a1a] mt-6 mb-3">A. Information you provide</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Contact details</strong> (such as name, email, phone number, address/city) when you request a quote, consultation, referral, or contact us.</li>
              <li><strong>Project details</strong> you submit (messages, measurements, photos you upload if enabled, preferred timelines, service interests).</li>
              <li><strong>Referral information</strong> if you participate in a referral program (e.g., your name and the referred person's contact information) when provided through our Site.</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a1a1a] mt-6 mb-3">B. Information collected automatically</h3>
            <p className="text-gray-700 mb-2">When you use the Site, we (and our service providers) may automatically collect:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Device and usage data</strong> (IP address, browser type, pages viewed, approximate location inferred from IP, date/time, referring URLs).</li>
              <li><strong>Cookies and similar technologies</strong> (see Section 6).</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a1a1a] mt-6 mb-3">C. Downloads</h3>
            <p className="text-gray-700 mb-6">
              If you request or download resources (for example, a free guide), we may collect information associated with that request and basic usage data related to the download.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">3) How we use your information</h2>
            <p className="text-gray-700 mb-2">We use information for purposes such as:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li><strong>Providing quotes and services</strong> (responding to inquiries, scheduling consultations, preparing estimates, delivering services).</li>
              <li><strong>Customer support</strong> (answering questions, coordinating projects).</li>
              <li><strong>Improving the Site</strong> (analytics, troubleshooting, performance).</li>
              <li><strong>Marketing and communications</strong> (sending follow-ups, newsletters, promotions, or service updates where permitted—see Section 7).</li>
              <li><strong>Security and fraud prevention</strong> (protecting our Site, users, and business).</li>
              <li><strong>Legal compliance</strong> (enforcing terms, complying with laws and regulations).</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">4) How we share your information</h2>
            <p className="text-gray-700 mb-2">We do <strong>not</strong> rent your personal information. We may share information in these situations:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li><strong>Service providers</strong>: vendors that help operate our Site and business (hosting, website platform tools, analytics, communications, CRM, scheduling, forms, or similar). They may access information only to perform services for us.</li>
              <li><strong>Business transfers</strong>: if we're involved in a merger, acquisition, financing, or sale of assets, information may be transferred as part of that transaction.</li>
              <li><strong>Legal and safety</strong>: to comply with law, respond to lawful requests, protect rights/safety, investigate fraud, or enforce agreements.</li>
              <li><strong>With your direction</strong>: if you ask us to share information (e.g., coordinating with your property manager, designer, or contractor).</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">5) Sensitive information</h2>
            <p className="text-gray-700 mb-6">
              Please do not submit sensitive personal information through the Site (e.g., government ID numbers, payment card details, medical information). If a payment is needed, we will tell you the accepted method and any provider involved.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">6) Cookies & analytics</h2>
            <p className="text-gray-700 mb-2">We (and our providers) may use cookies, pixels, and similar technologies to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>remember preferences,</li>
              <li>understand Site traffic and performance,</li>
              <li>measure marketing effectiveness.</li>
            </ul>
            <p className="text-gray-700 mb-6">
              <strong>Your choices:</strong> You can control cookies through your browser settings. If you disable cookies, some features may not work properly.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">7) Marketing choices</h2>
            <p className="text-gray-700 mb-6">
              You can opt out of promotional emails by using the <strong>unsubscribe</strong> link (if included) or by contacting us at{" "}
              <a href="mailto:info@ironworkssolution.net" className="text-[#C41E3A] hover:underline">info@ironworkssolution.net</a>.
              Note: even if you opt out of marketing, we may still send non-promotional messages (e.g., quote follow-ups or project communications).
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">8) Data retention</h2>
            <p className="text-gray-700 mb-2">We retain personal information only as long as reasonably necessary for:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>providing services and support,</li>
              <li>maintaining business records,</li>
              <li>complying with legal obligations,</li>
              <li>resolving disputes and enforcing agreements.</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Retention periods vary depending on the type of information and why we collected it.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">9) Security</h2>
            <p className="text-gray-700 mb-6">
              We use reasonable administrative, technical, and physical safeguards designed to protect information. However, no method of transmission or storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">10) Children's privacy</h2>
            <p className="text-gray-700 mb-6">
              Our Site is not intended for children under 13, and we do not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">11) California privacy notice (CCPA/CPRA)</h2>
            <p className="text-gray-700 mb-2">If you are a California resident, you may have rights such as:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Right to know/access</strong> the categories and specific pieces of personal information collected about you.</li>
              <li><strong>Right to delete</strong> personal information (subject to exceptions).</li>
              <li><strong>Right to correct</strong> inaccurate personal information.</li>
              <li><strong>Right to opt out of "sale" or "sharing"</strong> of personal information (as those terms are defined under California law).</li>
              <li><strong>Right to non-discrimination</strong> for exercising your privacy rights.</li>
            </ul>
            <p className="text-gray-700 mb-6">
              <strong>Do we sell or share personal information?</strong><br />
              "We do not sell personal information, and we do not share personal information for cross-context behavioral advertising."
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">12) Links to other websites</h2>
            <p className="text-gray-700 mb-6">
              Our Site may link to third-party websites. We are not responsible for the privacy practices of those third parties.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">13) Changes to this policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will revise the "Effective date" above when changes are posted.
            </p>

            <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">14) Contact us</h2>
            <p className="text-gray-700 mb-2">For questions or requests about privacy, contact:</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 font-semibold mb-2">Iron Works Solution</p>
              <p className="text-gray-700">
                Email: <a href="mailto:info@ironworkssolution.net" className="text-[#C41E3A] hover:underline font-semibold">info@ironworkssolution.net</a>
              </p>
              <p className="text-gray-700">
                Phone: <a href="tel:+13234702101" className="text-[#C41E3A] hover:underline font-semibold">(323) 470-2101</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
