import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { saveLead } from '@/lib/lead-storage';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: 'Server configuration error. Please contact support.' },
        { status: 500 }
      );
    }
    const resend = new Resend(apiKey);

    console.log('📧 Referral Program form API called');
    const formData = await request.json();
    console.log('Form data received:', formData);

    // Email to business owner
    const ownerEmailHtml = `
      <h2>New Landscaper Referral Program Application</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Project Description:</strong></p>
      <p>${formData.projectDescription}</p>
    `;

    // Auto-reply email to applicant
    const applicantEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #C41E3A;">Welcome to the California Iron-Works Partner Program!</h2>
        <p>Hi ${formData.name},</p>
        <p>Thank you for your interest in joining our Landscaper Referral Program. We're excited to partner with you!</p>
        <p>Our team will review your application and get back to you within 24-48 hours with your personalized referral link and program details.</p>
        <p>In the meantime, if you have any questions, feel free to reach out to us directly.</p>
        <p style="margin-top: 30px;">Best regards,<br><strong>California Iron-Works Solution Team</strong></p>
      </div>
    `;

    console.log('Sending notification email to ray@wyesman.com...');
    const { data: ownerData, error: ownerError } = await resend.emails.send({
      from: 'Iron Works Solution <onboarding@resend.dev>',
      to: ['ray@wyesman.com'],
      subject: '🤝 NEW Landscaper Referral Program Application',
      html: ownerEmailHtml,
    });

    if (ownerError) {
      console.error('❌ Resend error (owner email):', ownerError);
    } else {
      console.log('✅ Owner notification sent! ID:', ownerData?.id);
    }

    // Save lead to storage
    saveLead({
      type: 'referral-program',
      data: formData,
      emailSent: !ownerError,
    });

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Referral program form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit application. Please try again.' },
      { status: 500 }
    );
  }
}
