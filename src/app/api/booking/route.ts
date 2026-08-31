import { NextResponse } from 'next/server';
import { saveLead } from '@/lib/lead-storage';
import { clientIp, verifyTurnstile } from '@/lib/turnstile';
import {
  escapeHtml,
  FROM_ADDRESS,
  isMailerConfigured,
  sendLeadNotification,
  sendMail,
} from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    const { turnstileToken, ...formData } = await request.json();

    if (!(await verifyTurnstile(turnstileToken, clientIp(request)))) {
      return NextResponse.json(
        { success: false, message: 'Captcha verification failed. Please try again.' },
        { status: 403 }
      );
    }

    // Email to business owner
    const ownerEmailHtml = `
      <h2>New Consultation Booking</h2>

      <h3>Appointment Details</h3>
      <p><strong>Date:</strong> ${escapeHtml(formData.date)}</p>
      <p><strong>Time:</strong> ${escapeHtml(formData.time)}</p>
      <p><strong>Project Type:</strong> ${escapeHtml(formData.projectType) || 'Not specified'}</p>

      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(formData.phone)}</p>
    `;

    // Auto-reply email to customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #C41E3A;">Your Consultation is Scheduled!</h2>
        <p>Hey ${escapeHtml(formData.name)},</p>
        <p>We got your inquiry. We will be in touch with you within 24 hours to confirm your consultation appointment.</p>
        <p><strong>Requested Date:</strong> ${escapeHtml(formData.date)}<br>
        <strong>Requested Time:</strong> ${escapeHtml(formData.time)}</p>
        <p>We look forward to discussing your project with you!</p>
        <p style="margin-top: 30px;">Best regards,<br><strong>Iron Works Solution Team</strong></p>
      </div>
    `;

    if (!isMailerConfigured()) {
      // Accept the lead rather than failing the visitor, but be explicit in logs.
      console.error('[booking] MAILER_URL / MAILER_API_KEY are not set — no email sent');
      saveLead({ type: 'booking', data: formData, emailSent: false });
      return NextResponse.json({
        success: true,
        message: 'Booking submitted successfully!',
        warning: 'Email notifications are not configured on this environment.',
      });
    }

    let messageId: string | undefined;
    let emailSent = true;
    try {
      messageId = await sendLeadNotification('booking', {
        subject: '🔥 NEW HOT LEADS - Consultation Booking - Iron Works Solution',
        html: ownerEmailHtml,
        replyTo: formData.email,
        from: FROM_ADDRESS,
      });
    } catch {
      emailSent = false;
    }

    // Save lead to storage
    saveLead({
      type: 'booking',
      data: formData,
      emailSent,
    });

    if (!emailSent) {
      return NextResponse.json(
        { success: false, message: 'Failed to submit booking. Please try again.' },
        { status: 502 }
      );
    }

    // Customer auto-reply. A failure here must not fail the request — the
    // notification to the office already went out.
    if (formData.email) {
      try {
        await sendMail({
          to: formData.email,
          subject: 'Consultation Booking Received - Iron Works Solution',
          html: customerEmailHtml,
          from: FROM_ADDRESS,
        });
      } catch (err) {
        console.error('[booking] auto-reply failed:', (err as Error).message);
      }
    }

    return NextResponse.json(
      { success: true, message: 'Booking submitted successfully!', messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit booking. Please try again.' },
      { status: 500 }
    );
  }
}
