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
    console.log('📧 Contact form API called');
    const formData = await request.json();

    // Email to business owner
    const ownerEmailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(formData.phone)}</p>
      <p><strong>City:</strong> ${escapeHtml(formData.city) || 'Not provided'}</p>
      <p><strong>Project Type:</strong> ${escapeHtml(formData.projectType) || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(formData.message)}</p>
    `;

    // Auto-reply email to customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #C41E3A;">Thank You for Contacting Iron Works Solution</h2>
        <p>Hey ${escapeHtml(formData.name)},</p>
        <p>We got your inquiry. We will be in touch with you within 24 hours.</p>
        <p>In the meantime, if you have any urgent questions, feel free to call us directly.</p>
        <p style="margin-top: 30px;">Best regards,<br><strong>Iron Works Solution Team</strong></p>
      </div>
    `;

    if (!isMailerConfigured()) {
      // Accept the lead rather than failing the visitor, but be explicit in logs.
      console.error('[contact] MAILER_URL / MAILER_API_KEY are not set — no email sent');
      saveLead({ type: 'contact', data: formData, emailSent: false });
      return NextResponse.json({
        success: true,
        message: 'Form submitted successfully!',
        warning: 'Email notifications are not configured on this environment.',
      });
    }

    let messageId: string | undefined;
    let emailSent = true;
    try {
      messageId = await sendLeadNotification('contact', {
        subject: '🔥 NEW HOT LEADS - Iron Works Solution',
        html: ownerEmailHtml,
        replyTo: formData.email,
        from: FROM_ADDRESS,
      });
      console.log('✅ Owner notification sent! ID:', messageId);
    } catch {
      emailSent = false;
    }

    // Save lead to storage
    saveLead({
      type: 'contact',
      data: formData,
      emailSent,
    });

    if (!emailSent) {
      return NextResponse.json(
        { success: false, message: 'Failed to submit form. Please try again.' },
        { status: 502 }
      );
    }

    // Customer auto-reply. A failure here must not fail the request — the
    // notification to the office already went out.
    if (formData.email) {
      try {
        const customerId = await sendMail({
          to: formData.email,
          subject: 'We Received Your Inquiry - Iron Works Solution',
          html: customerEmailHtml,
          from: FROM_ADDRESS,
        });
        console.log('✅ Customer auto-reply sent! ID:', customerId);
      } catch (err) {
        console.error('[contact] auto-reply failed:', (err as Error).message);
      }
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully!', messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit form. Please try again.' },
      { status: 500 }
    );
  }
}
