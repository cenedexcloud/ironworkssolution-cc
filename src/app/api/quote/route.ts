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
    const formData = await request.json();

    // Email to business owner
    const ownerEmailHtml = `
      <h2>New Quote Request</h2>
      <h3>Project Details</h3>
      <p><strong>Fence Type:</strong> ${escapeHtml(formData.fenceType)}</p>
      <p><strong>Length:</strong> ${escapeHtml(formData.length)} feet</p>
      <p><strong>Finish:</strong> ${escapeHtml(formData.finish)}</p>

      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(formData.phone)}</p>
    `;

    // Auto-reply email to customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #C41E3A;">Thank You for Your Quote Request</h2>
        <p>Hey ${escapeHtml(formData.name)},</p>
        <p>We got your inquiry. We will be in touch with you within 24 hours with a detailed quote for your project.</p>
        <p><strong>Your Project Details:</strong><br>
        Fence Type: ${escapeHtml(formData.fenceType)}<br>
        Length: ${escapeHtml(formData.length)} feet<br>
        Finish: ${escapeHtml(formData.finish)}</p>
        <p>We're excited to work with you!</p>
        <p style="margin-top: 30px;">Best regards,<br><strong>Iron Works Solution Team</strong></p>
      </div>
    `;

    if (!isMailerConfigured()) {
      // Accept the lead rather than failing the visitor, but be explicit in logs.
      console.error('[quote] MAILER_URL / MAILER_API_KEY are not set — no email sent');
      saveLead({ type: 'quote', data: formData, emailSent: false });
      return NextResponse.json({
        success: true,
        message: 'Quote request submitted successfully!',
        warning: 'Email notifications are not configured on this environment.',
      });
    }

    let messageId: string | undefined;
    let emailSent = true;
    try {
      messageId = await sendLeadNotification('quote', {
        subject: '🔥 NEW HOT LEADS - Quote Request - Iron Works Solution',
        html: ownerEmailHtml,
        replyTo: formData.email,
        from: FROM_ADDRESS,
      });
    } catch {
      emailSent = false;
    }

    // Save lead to storage
    saveLead({
      type: 'quote',
      data: formData,
      emailSent,
    });

    if (!emailSent) {
      return NextResponse.json(
        { success: false, message: 'Failed to submit quote request. Please try again.' },
        { status: 502 }
      );
    }

    // Customer auto-reply. A failure here must not fail the request — the
    // notification to the office already went out.
    if (formData.email) {
      try {
        await sendMail({
          to: formData.email,
          subject: 'Quote Request Received - Iron Works Solution',
          html: customerEmailHtml,
          from: FROM_ADDRESS,
        });
      } catch (err) {
        console.error('[quote] auto-reply failed:', (err as Error).message);
      }
    }

    return NextResponse.json(
      { success: true, message: 'Quote request submitted successfully!', messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error('Quote form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit quote request. Please try again.' },
      { status: 500 }
    );
  }
}
