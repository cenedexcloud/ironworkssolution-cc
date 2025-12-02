// SendGrid Email Template IDs
export const EMAIL_TEMPLATES = {
  WELCOME: 'd-welcome123',
  QUOTE_RECEIVED: 'd-quote456',
  BOOKING_CONFIRMATION: 'd-booking789',
  PROJECT_UPDATE: 'd-update012',
  INVOICE: 'd-invoice345',
  THANK_YOU: 'd-thankyou678'
}

// Email configuration
export const EMAIL_CONFIG = {
  fromEmail: process.env.SENDGRID_FROM_EMAIL || 'noreply@ironworkssolution.net',
  fromName: 'Iron Works Solution',
  replyTo: 'info@ironworkssolution.net'
}
