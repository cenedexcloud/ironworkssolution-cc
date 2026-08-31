import { NextResponse } from 'next/server';
import { saveLead } from '@/lib/lead-storage';
import {
  escapeHtml,
  FROM_ADDRESS,
  isMailerConfigured,
  sendLeadNotification,
} from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    console.log('📧 Referral Program form API called');
    const formData = await request.json();

    // Email to business owner
    const ownerEmailHtml = `
      <h2>New Landscaper Referral Program Application</h2>
      <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(formData.phone)}</p>
      <p><strong>Project Description:</strong></p>
      <p>${escapeHtml(formData.projectDescription)}</p>
    `;

    if (!isMailerConfigured()) {
      // Accept the lead rather than failing the visitor, but be explicit in logs.
      console.error('[referral-program] MAILER_URL / MAILER_API_KEY are not set — no email sent');
      saveLead({ type: 'referral-program', data: formData, emailSent: false });
      return NextResponse.json({
        success: true,
        message: 'Application submitted successfully!',
        warning: 'Email notifications are not configured on this environment.',
      });
    }

    let messageId: string | undefined;
    let emailSent = true;
    try {
      messageId = await sendLeadNotification('referral-program', {
        subject: '🤝 NEW Landscaper Referral Program Application',
        html: ownerEmailHtml,
        from: FROM_ADDRESS,
      });
      console.log('✅ Owner notification sent! ID:', messageId);
    } catch {
      emailSent = false;
    }

    // Save lead to storage
    saveLead({
      type: 'referral-program',
      data: formData,
      emailSent,
    });

    if (!emailSent) {
      return NextResponse.json(
        { success: false, message: 'Failed to submit application. Please try again.' },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully!', messageId },
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
