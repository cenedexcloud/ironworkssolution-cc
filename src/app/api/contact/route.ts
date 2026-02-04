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

    console.log('📧 Contact form API called');
    const formData = await request.json();
    console.log('Form data received:', formData);

    // Email to business owner
    const ownerEmailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>City:</strong> ${formData.city || 'Not provided'}</p>
      <p><strong>Project Type:</strong> ${formData.projectType || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message}</p>
    `;

    // Auto-reply email to customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #C41E3A;">Thank You for Contacting Iron Works Solution</h2>
        <p>Hey ${formData.name},</p>
        <p>We got your inquiry. We will be in touch with you within 24 hours.</p>
        <p>In the meantime, if you have any urgent questions, feel free to call us directly.</p>
        <p style="margin-top: 30px;">Best regards,<br><strong>Iron Works Solution Team</strong></p>
      </div>
    `;

    console.log('Sending notification email to ray@wyesman.com...');
    const { data: ownerData, error: ownerError } = await resend.emails.send({
      from: 'Iron Works Solution <onboarding@resend.dev>',
      to: ['ray@wyesman.com'],
      replyTo: formData.email,
      subject: '🔥 NEW HOT LEADS - Iron Works Solution',
      html: ownerEmailHtml,
    });

    if (ownerError) {
      console.error('❌ Resend error (owner email):', ownerError);
    } else {
      console.log('✅ Owner notification sent! ID:', ownerData?.id);
    }

    // Save lead to storage
    saveLead({
      type: 'contact',
      data: formData,
      emailSent: !ownerError,
    });

    // Customer auto-reply (skip if using dev email to avoid errors)
    if (process.env.FROM_EMAIL && !process.env.FROM_EMAIL.includes('resend.dev')) {
      console.log('Sending auto-reply to customer...');
      const { data: customerData, error: customerError } = await resend.emails.send({
        from: `Iron Works Solution <${process.env.FROM_EMAIL}>`,
        to: [formData.email],
        subject: 'We Received Your Inquiry - Iron Works Solution',
        html: customerEmailHtml,
      });

      if (customerError) {
        console.error('❌ Resend error (customer auto-reply):', customerError);
      } else {
        console.log('✅ Customer auto-reply sent! ID:', customerData?.id);
      }
    } else {
      console.log('⚠️ Customer auto-reply skipped (using dev email - verify domain at resend.com/domains)');
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully!' },
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
