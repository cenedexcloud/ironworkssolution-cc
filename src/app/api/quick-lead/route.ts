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
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>

      <p style="margin-top: 20px;"><strong>Source:</strong> Quick Lead Capture Form</p>
      <p><strong>Status:</strong> HOT LEAD - Immediate follow-up required</p>
    `;

    // Auto-reply email to customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #C41E3A;">Thanks for Reaching Out!</h2>
        <p>Hey ${name},</p>
        <p>We got your inquiry. We will be in touch with you within 24 hours.</p>
        <p>Your interest in our iron works services is important to us, and we're excited to help you with your project!</p>
        <p style="margin-top: 30px;">Best regards,<br><strong>Iron Works Solution Team</strong></p>
      </div>
    `;

    // Send notification to business owner
    const { data: ownerData, error: ownerError } = await resend.emails.send({
      from: 'Iron Works Solution <onboarding@resend.dev>',
      to: ['ray@wyesman.com'],
      replyTo: email,
      subject: '🔥 NEW HOT LEADS - Iron Works Solution',
      html: ownerEmailHtml,
    });

    if (ownerError) {
      console.error('Resend error (owner email):', ownerError);
    }

    // Save lead to storage
    saveLead({
      type: 'quick-lead',
      data: { name, email, phone },
      emailSent: !ownerError,
    });

    // Customer auto-reply (skip if using dev email to avoid errors)
    if (process.env.FROM_EMAIL && !process.env.FROM_EMAIL.includes('resend.dev')) {
      const { data: customerData, error: customerError } = await resend.emails.send({
        from: `Iron Works Solution <${process.env.FROM_EMAIL}>`,
        to: [email],
        subject: 'We Received Your Inquiry - Iron Works Solution',
        html: customerEmailHtml,
      });

      if (customerError) {
        console.error('Resend error (customer auto-reply):', customerError);
      }
    } else {
      console.log('⚠️ Customer auto-reply skipped (using dev email)');
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! We will contact you within 1 hour.'
    });
  } catch (error) {
    console.error('Quick lead API error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error. Please try again.' },
      { status: 500 }
    );
  }
}
