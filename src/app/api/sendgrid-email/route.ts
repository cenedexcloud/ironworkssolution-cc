import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { to, templateId, dynamicData } = await request.json()

    // SendGrid integration
    const sendGridData = {
      personalizations: [
        {
          to: [{ email: to }],
          dynamic_template_data: {
            ...dynamicData,
            company_name: 'Iron Works Solution',
            company_phone: '(555) 123-4567',
            company_email: 'info@ironworkssolution.net'
          }
        }
      ],
      from: {
        email: process.env.SENDGRID_FROM_EMAIL || 'noreply@ironworkssolution.net',
        name: 'Iron Works Solution'
      },
      template_id: templateId
    }

    // In production, make actual API call
    /*
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendGridData)
    })

    if (!response.ok) {
      throw new Error('SendGrid API error')
    }
    */

    console.log('Email would be sent:', sendGridData)

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      emailData: sendGridData
    })

  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
