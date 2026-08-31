import { NextResponse } from 'next/server';
import { saveLead } from '@/lib/lead-storage';
import {
  escapeHtml,
  FROM_ADDRESS,
  isMailerConfigured,
  sendLeadNotification,
  sendMail,
} from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email to business owner
    const ownerEmailHtml = `
      <h2 style="color: #ff6b00;">🔥 NEW HOT LEAD - Iron Works Solution</h2>
      <div style="background: #fff3e0; padding: 15px; border-left: 4px solid #ff6b00; margin: 20px 0;">
        <p style="margin: 0; font-weight: bold; color: #e65100;">⚡ PRIORITY: Contact within 1 hour!</p>
      </div>

      <h3>Lead Information</h3>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>

      <p style="margin-top: 20px;"><strong>Source:</strong> Quick Lead Capture Form</p>
      <p><strong>Status:</strong> HOT LEAD - Immediate follow-up required</p>
    `;

    // Auto-reply email to customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #C41E3A;">Thanks for Reaching Out!</h2>
        <p>Hey ${escapeHtml(name)},</p>
        <p>We got your inquiry. We will be in touch with you within 24 hours.</p>
        <p>Your interest in our iron works services is important to us, and we're excited to help you with your project!</p>
        <p style="margin-top: 30px;">Best regards,<br><strong>Iron Works Solution Team</strong></p>
      </div>
    `;

    if (!isMailerConfigured()) {
      // Accept the lead rather than failing the visitor, but be explicit in logs.
      console.error('[quick-lead] MAILER_URL / MAILER_API_KEY are not set — no email sent');
      saveLead({ type: 'quick-lead', data: { name, email, phone }, emailSent: false });
      return NextResponse.json({
        success: true,
        message: 'Thank you! We will contact you within 1 hour.',
        warning: 'Email notifications are not configured on this environment.',
      });
    }

    let messageId: string | undefined;
    let emailSent = true;
    try {
      messageId = await sendLeadNotification('quick-lead', {
        subject: '🔥 NEW HOT LEADS - Iron Works Solution',
        html: ownerEmailHtml,
        replyTo: email,
        from: FROM_ADDRESS,
      });
    } catch {
      emailSent = false;
    }

    // Save lead to storage
    saveLead({
      type: 'quick-lead',
      data: { name, email, phone },
      emailSent,
    });

    if (!emailSent) {
      return NextResponse.json(
        { success: false, message: 'Server error. Please try again.' },
        { status: 502 }
      );
    }

    // Customer auto-reply. A failure here must not fail the request — the
    // notification to the office already went out.
    try {
      await sendMail({
        to: email,
        subject: 'We Received Your Inquiry - Iron Works Solution',
        html: customerEmailHtml,
        from: FROM_ADDRESS,
      });
    } catch (err) {
      console.error('[quick-lead] auto-reply failed:', (err as Error).message);
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! We will contact you within 1 hour.',
      messageId,
    });
  } catch (error) {
    console.error('Quick lead API error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error. Please try again.' },
      { status: 500 }
    );
  }
}
