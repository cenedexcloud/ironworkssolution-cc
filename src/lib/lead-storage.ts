import fs from 'fs';
import path from 'path';

interface ContactData {
  name: string;
  email: string;
  phone: string;
  city?: string;
  projectType?: string;
  message?: string;
}

interface QuoteData {
  name: string;
  email: string;
  phone: string;
  fenceType: string;
  length: string;
  finish: string;
}

interface BookingData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  projectType?: string;
}

interface QuickLeadData {
  name: string;
  email: string;
  phone: string;
}

interface PhotoQuoteData {
  name: string;
  email: string;
  phone: string;
  photoCount: number;
}

interface ReferralProgramData {
  name: string;
  phone: string;
  projectDescription: string;
}

type LeadData = ContactData | QuoteData | BookingData | QuickLeadData | PhotoQuoteData | ReferralProgramData;

export interface Lead {
  id: string;
  type: 'contact' | 'quote' | 'booking' | 'quick-lead' | 'photo-quote' | 'referral-program';
  timestamp: string;
  data: LeadData;
  emailSent: boolean;
}

const LEADS_FILE = path.join(process.cwd(), 'leads.json');

// Initialize leads file if it doesn't exist
function ensureLeadsFile() {
  if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2));
  }
}

export function saveLead(lead: Omit<Lead, 'id' | 'timestamp'>) {
  try {
    ensureLeadsFile();
    const leads = getLeads();

    const newLead: Lead = {
      ...lead,
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
    };

    leads.unshift(newLead); // Add to beginning
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));

    return newLead;
  } catch (error) {
    console.error('Error saving lead:', error);
    return null;
  }
}

export function getLeads(): Lead[] {
  try {
    ensureLeadsFile();
    const data = fs.readFileSync(LEADS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading leads:', error);
    return [];
  }
}

export function getLeadById(id: string): Lead | null {
  const leads = getLeads();
  return leads.find(lead => lead.id === id) || null;
}

export function deleteLead(id: string): boolean {
  try {
    const leads = getLeads();
    const filteredLeads = leads.filter(lead => lead.id !== id);
    fs.writeFileSync(LEADS_FILE, JSON.stringify(filteredLeads, null, 2));
    return true;
  } catch (error) {
    console.error('Error deleting lead:', error);
    return false;
  }
}

export function getLeadStats() {
  const leads = getLeads();
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const thisWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  return {
    total: leads.length,
    today: leads.filter(l => new Date(l.timestamp) >= today).length,
    thisWeek: leads.filter(l => new Date(l.timestamp) >= thisWeek).length,
    thisMonth: leads.filter(l => new Date(l.timestamp) >= thisMonth).length,
    byType: {
      contact: leads.filter(l => l.type === 'contact').length,
      quote: leads.filter(l => l.type === 'quote').length,
      booking: leads.filter(l => l.type === 'booking').length,
      quickLead: leads.filter(l => l.type === 'quick-lead').length,
      photoQuote: leads.filter(l => l.type === 'photo-quote').length,
      referralProgram: leads.filter(l => l.type === 'referral-program').length,
    }
  };
}
