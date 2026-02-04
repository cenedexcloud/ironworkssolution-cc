'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

interface LeadData {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  projectType?: string;
  message?: string;
  fenceType?: string;
  length?: string;
  finish?: string;
  date?: string;
  time?: string;
  photoCount?: number;
}

interface Lead {
  id: string;
  type: 'contact' | 'quote' | 'booking' | 'quick-lead' | 'photo-quote';
  timestamp: string;
  data: LeadData;
  emailSent: boolean;
}

interface Stats {
  total: number;
  today: number;
  thisWeek: number;
  thisMonth: number;
  byType: {
    contact: number;
    quote: number;
    booking: number;
    quickLead: number;
    photoQuote: number;
  };
}

export default function LeadsDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | Lead['type']>('all');

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await fetch('/api/leads');
      const data = await response.json();
      if (data.success) {
        setLeads(data.leads);
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteLead = async (id: string) => {
    if (confirm('Are you sure you want to delete this lead?')) {
      try {
        const response = await fetch(`/api/leads?id=${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          fetchLeads();
        }
      } catch (error) {
        console.error('Error deleting lead:', error);
      }
    }
  };

  const filteredLeads = filter === 'all'
    ? leads
    : leads.filter(lead => lead.type === filter);

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getTypeLabel = (type: Lead['type']) => {
    const labels = {
      'contact': 'Contact Form',
      'quote': 'Quote Request',
      'booking': 'Consultation Booking',
      'quick-lead': 'Quick Lead',
      'photo-quote': 'Photo Quote',
    };
    return labels[type];
  };

  const getTypeColor = (type: Lead['type']) => {
    const colors = {
      'contact': 'bg-blue-100 text-blue-800',
      'quote': 'bg-green-100 text-green-800',
      'booking': 'bg-purple-100 text-purple-800',
      'quick-lead': 'bg-orange-100 text-orange-800',
      'photo-quote': 'bg-pink-100 text-pink-800',
    };
    return colors[type];
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading leads...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Lead Management Dashboard</h1>
          <p className="text-gray-600">Track and manage all your customer inquiries</p>
        </div>

        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="text-sm text-gray-600 mb-1">Total Leads</div>
              <div className="text-3xl font-bold text-gray-900">{stats.total}</div>
            </Card>
            <Card className="p-6">
              <div className="text-sm text-gray-600 mb-1">Today</div>
              <div className="text-3xl font-bold text-blue-600">{stats.today}</div>
            </Card>
            <Card className="p-6">
              <div className="text-sm text-gray-600 mb-1">This Week</div>
              <div className="text-3xl font-bold text-green-600">{stats.thisWeek}</div>
            </Card>
            <Card className="p-6">
              <div className="text-sm text-gray-600 mb-1">This Month</div>
              <div className="text-3xl font-bold text-purple-600">{stats.thisMonth}</div>
            </Card>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="mb-6 flex gap-2 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg transition ${
              filter === 'all'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            All ({leads.length})
          </button>
          <button
            onClick={() => setFilter('contact')}
            className={`px-4 py-2 rounded-lg transition ${
              filter === 'contact'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Contact ({stats?.byType.contact || 0})
          </button>
          <button
            onClick={() => setFilter('quote')}
            className={`px-4 py-2 rounded-lg transition ${
              filter === 'quote'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Quote ({stats?.byType.quote || 0})
          </button>
          <button
            onClick={() => setFilter('booking')}
            className={`px-4 py-2 rounded-lg transition ${
              filter === 'booking'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Booking ({stats?.byType.booking || 0})
          </button>
          <button
            onClick={() => setFilter('quick-lead')}
            className={`px-4 py-2 rounded-lg transition ${
              filter === 'quick-lead'
                ? 'bg-orange-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Quick Lead ({stats?.byType.quickLead || 0})
          </button>
          <button
            onClick={() => setFilter('photo-quote')}
            className={`px-4 py-2 rounded-lg transition ${
              filter === 'photo-quote'
                ? 'bg-pink-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Photo Quote ({stats?.byType.photoQuote || 0})
          </button>
        </div>

        {/* Leads List */}
        <div className="space-y-4">
          {filteredLeads.length === 0 ? (
            <Card className="p-8 text-center">
              <div className="text-gray-500 text-lg">No leads found</div>
              <p className="text-gray-400 mt-2">Leads will appear here as customers submit forms</p>
            </Card>
          ) : (
            filteredLeads.map((lead) => (
              <Card key={lead.id} className="p-6 hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(lead.type)}`}>
                      {getTypeLabel(lead.type)}
                    </span>
                    {lead.emailSent ? (
                      <span className="text-green-600 text-sm flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        Email Sent
                      </span>
                    ) : (
                      <span className="text-red-600 text-sm flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        Email Failed
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">{formatDate(lead.timestamp)}</span>
                    <button
                      onClick={() => deleteLead(lead.id)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {lead.data.name && (
                    <div>
                      <div className="text-sm text-gray-600">Name</div>
                      <div className="font-medium">{lead.data.name}</div>
                    </div>
                  )}
                  {lead.data.email && (
                    <div>
                      <div className="text-sm text-gray-600">Email</div>
                      <div className="font-medium">
                        <a href={`mailto:${lead.data.email}`} className="text-blue-600 hover:underline">
                          {lead.data.email}
                        </a>
                      </div>
                    </div>
                  )}
                  {lead.data.phone && (
                    <div>
                      <div className="text-sm text-gray-600">Phone</div>
                      <div className="font-medium">
                        <a href={`tel:${lead.data.phone}`} className="text-blue-600 hover:underline">
                          {lead.data.phone}
                        </a>
                      </div>
                    </div>
                  )}
                  {lead.data.city && (
                    <div>
                      <div className="text-sm text-gray-600">City</div>
                      <div className="font-medium">{lead.data.city}</div>
                    </div>
                  )}
                  {lead.data.projectType && (
                    <div>
                      <div className="text-sm text-gray-600">Project Type</div>
                      <div className="font-medium">{lead.data.projectType}</div>
                    </div>
                  )}
                  {lead.data.fenceType && (
                    <div>
                      <div className="text-sm text-gray-600">Fence Type</div>
                      <div className="font-medium">{lead.data.fenceType}</div>
                    </div>
                  )}
                  {lead.data.length && (
                    <div>
                      <div className="text-sm text-gray-600">Length</div>
                      <div className="font-medium">{lead.data.length} feet</div>
                    </div>
                  )}
                  {lead.data.finish && (
                    <div>
                      <div className="text-sm text-gray-600">Finish</div>
                      <div className="font-medium">{lead.data.finish}</div>
                    </div>
                  )}
                  {lead.data.date && (
                    <div>
                      <div className="text-sm text-gray-600">Date</div>
                      <div className="font-medium">{lead.data.date}</div>
                    </div>
                  )}
                  {lead.data.time && (
                    <div>
                      <div className="text-sm text-gray-600">Time</div>
                      <div className="font-medium">{lead.data.time}</div>
                    </div>
                  )}
                  {lead.data.photoCount && (
                    <div>
                      <div className="text-sm text-gray-600">Photos Uploaded</div>
                      <div className="font-medium">{lead.data.photoCount} photos</div>
                    </div>
                  )}
                  {lead.data.message && (
                    <div className="md:col-span-2">
                      <div className="text-sm text-gray-600">Message</div>
                      <div className="font-medium">{lead.data.message}</div>
                    </div>
                  )}
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
