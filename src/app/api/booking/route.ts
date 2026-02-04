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

    const formData = await request.json();

    // Email to business owner
    const ownerEmailHtml = `
      <h2>New Consultation Booking</h2>

      <h3>Appointment Details</h3>
      <p><strong>Date:</strong> ${formData.date}</p>
      <p><strong>Time:</strong> ${formData.time}</p>
      <p><strong>Project Type:</strong> ${formData.projectType || 'Not specified'}</p>

      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
    `;

    // Auto-reply email to customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #C41E3A;">Your Consultation is Scheduled!</h2>
        <p>Hey ${formData.name},</p>
        <p>We got your inquiry. We will be in touch with you within 24 hours to confirm your consultation appointment.</p>
        <p><strong>Requested Date:</strong> ${formData.date}<br>
        <strong>Requested Time:</strong> ${formData.time}</p>
        <p>We look forward to discussing your project with you!</p>
        <p style="margin-top: 30px;">Best regards,<br><strong>Iron Works Solution Team</strong></p>
      </div>
    `;

    // Send notification to business owner
    const { data: ownerData, error: ownerError } = await resend.emails.send({
      from: 'Iron Works Solution <onboarding@resend.dev>',
      to: ['ray@wyesman.com'],
      replyTo: formData.email,
      subject: '🔥 NEW HOT LEADS - Consultation Booking - Iron Works Solution',
      html: ownerEmailHtml,
    });

    if (ownerError) {
      console.error('Resend error (owner email):', ownerError);
    }

    // Save lead to storage
    saveLead({
      type: 'booking',
      data: formData,
      emailSent: !ownerError,
    });

    // Customer auto-reply (skip if using dev email to avoid errors)
    if (process.env.FROM_EMAIL && !process.env.FROM_EMAIL.includes('resend.dev')) {
      const { data: customerData, error: customerError } = await resend.emails.send({
        from: `Iron Works Solution <${process.env.FROM_EMAIL}>`,
        to: [formData.email],
        subject: 'Consultation Booking Received - Iron Works Solution',
        html: customerEmailHtml,
      });

      if (customerError) {
        console.error('Resend error (customer auto-reply):', customerError);
      }
    } else {
      console.log('⚠️ Customer auto-reply skipped (using dev email)');
    }

    return NextResponse.json(
      { success: true, message: 'Booking submitted successfully!' },
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
