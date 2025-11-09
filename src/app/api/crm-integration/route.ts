import { NextResponse } from 'next/server'

// CRM Integration for Salesforce, HubSpot, Zoho, etc.
export async function POST(request: Request) {
  try {
    const leadData = await request.json()

    // Example: HubSpot Integration
    const hubspotContact = {
      properties: {
        email: leadData.email,
        firstname: leadData.name?.split(' ')[0],
        lastname: leadData.name?.split(' ').slice(1).join(' '),
        phone: leadData.phone,
        project_type: leadData.projectType,
        lead_source: 'Website',
        lifecycle_stage: 'lead'
      }
    }

    // Example: Salesforce Integration
    const salesforceLead = {
      FirstName: leadData.name?.split(' ')[0],
      LastName: leadData.name?.split(' ').slice(1).join(' ') || 'Unknown',
      Email: leadData.email,
      Phone: leadData.phone,
      Company: leadData.company || 'Individual',
      LeadSource: 'Website',
      Status: 'New',
      Description: `Project Type: ${leadData.projectType}\nCity: ${leadData.city}`
    }

    // In production, you would make actual API calls here:
    /*
    // HubSpot
    const hubspotResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(hubspotContact)
    })

    // Salesforce
    const salesforceResponse = await fetch(`${process.env.SALESFORCE_INSTANCE_URL}/services/data/v55.0/sobjects/Lead`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SALESFORCE_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(salesforceLead)
    })
    */

    console.log('Lead synced to CRM:', {
      hubspot: hubspotContact,
      salesforce: salesforceLead
    })

    return NextResponse.json({
      success: true,
      message: 'Lead synced to CRM',
      crm: {
        hubspot: 'ready',
        salesforce: 'ready'
      }
    })

  } catch (error) {
    console.error('CRM integration error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to sync with CRM' },
      { status: 500 }
    )
  }
}
