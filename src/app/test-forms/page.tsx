'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function TestForms() {
  const [results, setResults] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({});

  const testContactForm = async () => {
    setLoading(prev => ({ ...prev, contact: true }));
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Test Customer',
          email: 'test@example.com',
          phone: '555-123-4567',
          city: 'Los Angeles',
          projectType: 'Residential Fencing',
          message: 'This is a test submission from the test page',
        }),
      });
      const data = await response.json();
      setResults(prev => ({
        ...prev,
        contact: data.success ? '✅ SUCCESS: ' + data.message : '❌ ERROR: ' + data.message
      }));
    } catch (error) {
      setResults(prev => ({ ...prev, contact: '❌ ERROR: ' + String(error) }));
    } finally {
      setLoading(prev => ({ ...prev, contact: false }));
    }
  };

  const testQuoteForm = async () => {
    setLoading(prev => ({ ...prev, quote: true }));
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fenceType: 'Residential Fence',
          length: '100',
          finish: 'Powder Coated Black',
          name: 'Test Customer Quote',
          email: 'quote@example.com',
          phone: '555-234-5678',
        }),
      });
      const data = await response.json();
      setResults(prev => ({
        ...prev,
        quote: data.success ? '✅ SUCCESS: ' + data.message : '❌ ERROR: ' + data.message
      }));
    } catch (error) {
      setResults(prev => ({ ...prev, quote: '❌ ERROR: ' + String(error) }));
    } finally {
      setLoading(prev => ({ ...prev, quote: false }));
    }
  };

  const testBookingForm = async () => {
    setLoading(prev => ({ ...prev, booking: true }));
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: '2025-11-25',
          time: '10:00 AM',
          projectType: 'Commercial Gate',
          name: 'Test Customer Booking',
          email: 'booking@example.com',
          phone: '555-345-6789',
        }),
      });
      const data = await response.json();
      setResults(prev => ({
        ...prev,
        booking: data.success ? '✅ SUCCESS: ' + data.message : '❌ ERROR: ' + data.message
      }));
    } catch (error) {
      setResults(prev => ({ ...prev, booking: '❌ ERROR: ' + String(error) }));
    } finally {
      setLoading(prev => ({ ...prev, booking: false }));
    }
  };

  const testQuickLead = async () => {
    setLoading(prev => ({ ...prev, quickLead: true }));
    try {
      const response = await fetch('/api/quick-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Test Quick Lead',
          email: 'quicklead@example.com',
          phone: '555-456-7890',
        }),
      });
      const data = await response.json();
      setResults(prev => ({
        ...prev,
        quickLead: data.success ? '✅ SUCCESS: ' + data.message : '❌ ERROR: ' + data.message
      }));
    } catch (error) {
      setResults(prev => ({ ...prev, quickLead: '❌ ERROR: ' + String(error) }));
    } finally {
      setLoading(prev => ({ ...prev, quickLead: false }));
    }
  };

  const testAllForms = async () => {
    await testContactForm();
    await new Promise(resolve => setTimeout(resolve, 500));
    await testQuoteForm();
    await new Promise(resolve => setTimeout(resolve, 500));
    await testBookingForm();
    await new Promise(resolve => setTimeout(resolve, 500));
    await testQuickLead();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Form Testing Dashboard</h1>
          <p className="text-gray-600">Test all contact forms and verify email delivery</p>
        </div>

        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="flex gap-4">
            <Button
              onClick={testAllForms}
              className="bg-blue-600 hover:bg-blue-700"
              disabled={Object.values(loading).some(v => v)}
            >
              Test All Forms
            </Button>
            <Button
              onClick={() => window.open('/leads-dashboard', '_blank')}
              variant="outline"
            >
              View Leads Dashboard
            </Button>
            <Button
              onClick={() => setResults({})}
              variant="outline"
            >
              Clear Results
            </Button>
          </div>
        </Card>

        <div className="space-y-6">
          {/* Contact Form Test */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">1. Contact Form</h3>
            <p className="text-gray-600 mb-4">
              Tests: /api/contact - Main contact form from homepage
            </p>
            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-2">Test Data:</div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono">
                Name: Test Customer<br />
                Email: test@example.com<br />
                Phone: 555-123-4567<br />
                City: Los Angeles<br />
                Project Type: Residential Fencing<br />
                Message: This is a test submission
              </div>
            </div>
            <Button
              onClick={testContactForm}
              disabled={loading.contact}
              className="mb-4"
            >
              {loading.contact ? 'Testing...' : 'Test Contact Form'}
            </Button>
            {results.contact && (
              <div className={`p-4 rounded ${results.contact.includes('✅') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {results.contact}
              </div>
            )}
          </Card>

          {/* Quote Form Test */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">2. Quote Request Form</h3>
            <p className="text-gray-600 mb-4">
              Tests: /api/quote - Quote wizard from homepage
            </p>
            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-2">Test Data:</div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono">
                Fence Type: Residential Fence<br />
                Length: 100 feet<br />
                Finish: Powder Coated Black<br />
                Name: Test Customer Quote<br />
                Email: quote@example.com<br />
                Phone: 555-234-5678
              </div>
            </div>
            <Button
              onClick={testQuoteForm}
              disabled={loading.quote}
              className="mb-4"
            >
              {loading.quote ? 'Testing...' : 'Test Quote Form'}
            </Button>
            {results.quote && (
              <div className={`p-4 rounded ${results.quote.includes('✅') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {results.quote}
              </div>
            )}
          </Card>

          {/* Booking Form Test */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">3. Consultation Booking Form</h3>
            <p className="text-gray-600 mb-4">
              Tests: /api/booking - Booking scheduler from homepage
            </p>
            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-2">Test Data:</div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono">
                Date: 2025-11-25<br />
                Time: 10:00 AM<br />
                Project Type: Commercial Gate<br />
                Name: Test Customer Booking<br />
                Email: booking@example.com<br />
                Phone: 555-345-6789
              </div>
            </div>
            <Button
              onClick={testBookingForm}
              disabled={loading.booking}
              className="mb-4"
            >
              {loading.booking ? 'Testing...' : 'Test Booking Form'}
            </Button>
            {results.booking && (
              <div className={`p-4 rounded ${results.booking.includes('✅') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {results.booking}
              </div>
            )}
          </Card>

          {/* Quick Lead Test */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">4. Quick Lead Capture</h3>
            <p className="text-gray-600 mb-4">
              Tests: /api/quick-lead - Quick lead form (exit popup, floating button)
            </p>
            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-2">Test Data:</div>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono">
                Name: Test Quick Lead<br />
                Email: quicklead@example.com<br />
                Phone: 555-456-7890
              </div>
            </div>
            <Button
              onClick={testQuickLead}
              disabled={loading.quickLead}
              className="mb-4"
            >
              {loading.quickLead ? 'Testing...' : 'Test Quick Lead'}
            </Button>
            {results.quickLead && (
              <div className={`p-4 rounded ${results.quickLead.includes('✅') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {results.quickLead}
              </div>
            )}
          </Card>
        </div>

        <Card className="p-6 mt-6">
          <h3 className="text-xl font-bold mb-4">Expected Results</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-start gap-2">
              <span className="text-green-600">✅</span>
              <div>All forms should return SUCCESS message</div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">✅</span>
              <div>Email notification sent to: <strong>ray@wyesman.com</strong></div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">✅</span>
              <div>All leads appear in the Leads Dashboard</div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">✅</span>
              <div>Lead data is stored with correct type and timestamp</div>
            </div>
          </div>
        </Card>

        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
          <h4 className="font-bold text-yellow-800 mb-2">Note about Email Delivery:</h4>
          <ul className="list-disc list-inside text-sm text-yellow-700 space-y-1">
            <li>Emails will be sent from: onboarding@resend.dev</li>
            <li>Check your spam folder if emails don't arrive</li>
            <li>Customer auto-replies are currently disabled (using dev email)</li>
            <li>To enable customer auto-replies, verify a domain at resend.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
