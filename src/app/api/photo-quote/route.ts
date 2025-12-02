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

    const formData = await request.formData();

    // Get form fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;

    // Get all uploaded files
    const files = formData.getAll('photos');

    const attachments = [];

    // Convert files to base64 attachments for Resend
    for (const file of files) {
      if (file instanceof File) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        attachments.push({
          filename: file.name,
          content: buffer,
        });
      }
    }

    // Email to business owner
    const ownerEmailHtml = `
      <h2>New Photo Quote Request</h2>

      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>

      <h3>Project Photos</h3>
      <p>${files.length > 0 ? `Customer has uploaded ${files.length} photo(s) for quote estimation.` : 'No photos provided.'}</p>

      ${attachments.length > 0 ? '<p>Please review the attached photos and provide a quote.</p>' : '<p>Please contact the customer to discuss their project and provide a quote.</p>'}
    `;

    // Auto-reply email to customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #C41E3A;">Thank You for Your Photo Quote Request</h2>
        <p>Hey ${name},</p>
        <p>We got your inquiry. We will be in touch with you within 24 hours with a quote based on the photos you submitted.</p>
        <p>We received ${files.length} photo(s) and our team is reviewing them to provide you with an accurate estimate.</p>
        <p>We appreciate your interest in our services!</p>
        <p style="margin-top: 30px;">Best regards,<br><strong>Iron Works Solution Team</strong></p>
      </div>
    `;

    const ownerEmailOptions = {
      from: 'Iron Works Solution <onboarding@resend.dev>',
      to: ['ray@tradeblaze.net'],
      replyTo: email,
      subject: '🔥 NEW HOT LEADS - Photo Quote Request - Iron Works Solution',
      html: ownerEmailHtml,
      ...(attachments.length > 0 && { attachments }),
    };

    // Update email recipient to ray@wyesman.com
    ownerEmailOptions.to = ['ray@wyesman.com'];

    // Send notification to business owner
    const { data: ownerData, error: ownerError } = await resend.emails.send(ownerEmailOptions);

    if (ownerError) {
      console.error('Resend error (owner email):', ownerError);
    }

    // Save lead to storage
    saveLead({
      type: 'photo-quote',
      data: { name, email, phone, photoCount: files.length },
      emailSent: !ownerError,
    });

    // Customer auto-reply (skip if using dev email to avoid errors)
    if (process.env.FROM_EMAIL && !process.env.FROM_EMAIL.includes('resend.dev')) {
      const { data: customerData, error: customerError } = await resend.emails.send({
        from: `Iron Works Solution <${process.env.FROM_EMAIL}>`,
        to: [email],
        subject: 'Photo Quote Request Received - Iron Works Solution',
        html: customerEmailHtml,
      });

      if (customerError) {
        console.error('Resend error (customer auto-reply):', customerError);
      }
    } else {
      console.log('⚠️ Customer auto-reply skipped (using dev email)');
    }

    return NextResponse.json(
      { success: true, message: 'Photos submitted successfully!' },
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
