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
    const formData = await request.formData();

    // Get form fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;

    // Get all uploaded files
    const files = formData.getAll('photos').filter((f) => f instanceof File) as File[];

    // TODO: the mailer service carries no attachments — upload the photos to the
    // storage bucket and link them here instead. Until then the notification
    // reports the count only and the owner contacts the customer for the images.
    const photoNames = files.map((f) => f.name);

    // Email to business owner
    const ownerEmailHtml = `
      <h2>New Photo Quote Request</h2>

      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>

      <h3>Project Photos</h3>
      <p>${files.length > 0 ? `Customer uploaded ${files.length} photo(s) for quote estimation.` : 'No photos provided.'}</p>
      ${photoNames.length > 0 ? `<ul>${photoNames.map((n) => `<li>${escapeHtml(n)}</li>`).join('')}</ul>` : ''}

      <p>Please contact the customer to discuss their project and provide a quote.</p>
    `;

    // Auto-reply email to customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #C41E3A;">Thank You for Your Photo Quote Request</h2>
        <p>Hey ${escapeHtml(name)},</p>
        <p>We got your inquiry. We will be in touch with you within 24 hours with a quote based on the photos you submitted.</p>
        <p>We received ${files.length} photo(s) and our team is reviewing them to provide you with an accurate estimate.</p>
        <p>We appreciate your interest in our services!</p>
        <p style="margin-top: 30px;">Best regards,<br><strong>Iron Works Solution Team</strong></p>
      </div>
    `;

    const lead = { name, email, phone, photoCount: files.length };

    if (!isMailerConfigured()) {
      // Accept the lead rather than failing the visitor, but be explicit in logs.
      console.error('[photo-quote] MAILER_URL / MAILER_API_KEY are not set — no email sent');
      saveLead({ type: 'photo-quote', data: lead, emailSent: false });
      return NextResponse.json({
        success: true,
        message: 'Photos submitted successfully!',
        warning: 'Email notifications are not configured on this environment.',
      });
    }

    let messageId: string | undefined;
    let emailSent = true;
    try {
      messageId = await sendLeadNotification('photo-quote', {
        subject: '🔥 NEW HOT LEADS - Photo Quote Request - Iron Works Solution',
        html: ownerEmailHtml,
        replyTo: email,
        from: FROM_ADDRESS,
      });
    } catch {
      emailSent = false;
    }

    // Save lead to storage
    saveLead({
      type: 'photo-quote',
      data: lead,
      emailSent,
    });

    if (!emailSent) {
      return NextResponse.json(
        { success: false, message: 'Failed to submit photos. Please try again.' },
        { status: 502 }
      );
    }

    // Customer auto-reply. A failure here must not fail the request — the
    // notification to the office already went out.
    if (email) {
      try {
        await sendMail({
          to: email,
          subject: 'Photo Quote Request Received - Iron Works Solution',
          html: customerEmailHtml,
          from: FROM_ADDRESS,
        });
      } catch (err) {
        console.error('[photo-quote] auto-reply failed:', (err as Error).message);
      }
    }

    return NextResponse.json(
      { success: true, message: 'Photos submitted successfully!', messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error('Photo quote error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit photos. Please try again.' },
      { status: 500 }
    );
  }
}
