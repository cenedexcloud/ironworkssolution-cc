# 📊 Lead Tracking System - Complete Guide

## 🎯 Overview

Your Iron Works Solution website now has a complete lead tracking system! All form submissions are:
- ✅ Automatically saved to a local database
- ✅ Sent to your email (ray@wyesman.com)
- ✅ Tracked with submission time and status
- ✅ Viewable in a beautiful dashboard

---

## 🚀 Quick Start

### 1. Test All Forms (2 minutes)
Visit: **http://localhost:3000/test-forms**

This page lets you:
- Test all 4 contact forms with one click
- See instant success/error messages
- Verify email delivery
- Open the leads dashboard

Click "Test All Forms" to send test submissions to all forms!

### 2. View All Leads
Visit: **http://localhost:3000/leads-dashboard**

This dashboard shows:
- All captured leads in real-time
- Statistics (today, this week, this month)
- Filter by form type
- Email delivery status
- Contact information with clickable links

---

## 📝 Forms Being Tracked

### 1. **Contact Form** (`/api/contact`)
- **Location:** Homepage - "Request a Free Quote" section
- **Fields:** Name, Email, Phone, City, Project Type, Message
- **Email Subject:** 🔥 NEW HOT LEADS - Iron Works Solution

### 2. **Quote Wizard** (`/api/quote`)
- **Location:** Homepage - "Start Quote Wizard" button
- **Fields:** Fence Type, Length, Finish, Name, Email, Phone
- **Email Subject:** 🔥 NEW HOT LEADS - Quote Request

### 3. **Booking Scheduler** (`/api/booking`)
- **Location:** Homepage - "Schedule Consultation" button
- **Fields:** Date, Time, Project Type, Name, Email, Phone
- **Email Subject:** 🔥 NEW HOT LEADS - Consultation Booking

### 4. **Quick Lead Capture** (`/api/quick-lead`)
- **Location:** Exit popup, Floating lead button
- **Fields:** Name, Email, Phone
- **Email Subject:** 🔥 NEW HOT LEADS - Iron Works Solution

### 5. **Photo Quote** (`/api/photo-quote`)
- **Location:** Service pages (if implemented)
- **Fields:** Name, Email, Phone, Photo uploads
- **Email Subject:** 🔥 NEW HOT LEADS - Photo Quote Request

---

## 📧 Email Configuration

### Current Setup:
- **Recipient:** ray@wyesman.com
- **Sender:** Iron Works Solution <onboarding@resend.dev>
- **API:** Resend (API Key configured)
- **Reply-To:** Customer's email (for easy replies)

### Customer Auto-Replies:
Currently disabled because you're using the dev email (`onboarding@resend.dev`).

**To enable customer auto-replies:**
1. Verify your domain at https://resend.com/domains
2. Update `.env.local`: `FROM_EMAIL=noreply@yourdomain.com`
3. Restart the server

---

## 💾 Lead Storage

All leads are saved to: **`leads.json`** in the project root

### Data Structure:
```json
{
  "id": "lead_1732096545123_abc123",
  "type": "contact",
  "timestamp": "2025-11-20T12:30:45.123Z",
  "emailSent": true,
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "555-123-4567",
    "city": "Los Angeles",
    "projectType": "Residential Fencing",
    "message": "I need a quote for my backyard"
  }
}
```

### Export Leads:
The `leads.json` file can be:
- Backed up regularly
- Imported into CRM systems
- Analyzed with Excel/Google Sheets
- Integrated with other tools

---

## 🧪 Testing Instructions

### Method 1: Use the Test Page (Recommended)
1. Go to http://localhost:3000/test-forms
2. Click "Test All Forms" button
3. Wait for all tests to complete
4. Click "View Leads Dashboard"
5. Verify all 4 test leads appear

### Method 2: Test Individual Forms
1. Go to http://localhost:3000
2. Scroll to "Request a Free Quote" section
3. Fill out and submit the contact form
4. Click "Start Quote Wizard" and complete it
5. Click "Schedule Consultation" and book a time
6. Trigger the exit popup (move mouse to top of page)

### Method 3: API Testing
Open browser console (F12) and run:
```javascript
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'API Test',
    email: 'api@test.com',
    phone: '555-9999',
    city: 'LA',
    projectType: 'Test',
    message: 'API test message'
  })
}).then(r => r.json()).then(console.log)
```

---

## 📊 Dashboard Features

### Statistics Cards:
- **Total Leads:** All-time lead count
- **Today:** Leads captured today
- **This Week:** Leads from the last 7 days
- **This Month:** Leads from current month

### Filter Tabs:
- All leads
- Contact forms only
- Quote requests only
- Booking requests only
- Quick leads only
- Photo quote requests only

### Lead Cards Show:
- ✅ Form type badge with color coding
- ✅ Email delivery status
- ✅ Submission date/time
- ✅ All customer information
- ✅ Clickable phone/email links
- ✅ Delete button

---

## ✅ Verification Checklist

After testing, verify:
- [ ] All forms show success messages
- [ ] Emails arrive at ray@wyesman.com
- [ ] Leads appear in dashboard
- [ ] Lead statistics are correct
- [ ] Email status shows "Email Sent" (green)
- [ ] Contact info is clickable
- [ ] Delete button works
- [ ] Filter tabs work correctly

---

## 🐛 Troubleshooting

### Forms submit but no email arrives:
1. Check spam folder at ray@wyesman.com
2. Verify Resend API key in `.env.local`
3. Check Resend dashboard: https://resend.com/dashboard
4. Look for monthly limit (250 free emails/month)

### "Email Failed" status in dashboard:
1. Check server logs for errors
2. Verify `RESEND_API_KEY` is correct
3. Ensure API key has permissions

### Leads not appearing in dashboard:
1. Check if `leads.json` file exists in project root
2. Verify API routes have `saveLead()` calls
3. Check browser console for errors
4. Refresh the dashboard page

### Dashboard shows "No leads found":
- This is normal for first-time setup
- Submit a test form to create the first lead
- The dashboard will update automatically

---

## 🔐 Security Notes

### Dashboard Access:
Currently, the dashboard is publicly accessible. For production:
1. Add authentication (recommended)
2. Restrict access by IP
3. Use environment-based routing
4. Consider password protection

### Lead Data:
- Stored locally in `leads.json`
- Not encrypted by default
- Contains customer PII
- Should be backed up regularly
- Consider GDPR compliance if applicable

---

## 📱 Production Deployment

### Before deploying:
1. Test all forms thoroughly
2. Verify email delivery
3. Add dashboard authentication
4. Set up domain for customer auto-replies
5. Configure backup system for `leads.json`
6. Test on mobile devices

### After deploying:
1. Test forms on live site
2. Verify emails arrive
3. Monitor leads dashboard daily
4. Set up email notifications
5. Export leads regularly

---

## 🎯 Next Steps

1. **Test all forms** using the test page
2. **Check email inbox** for test submissions
3. **View leads dashboard** to see captured leads
4. **Consider adding:**
   - Email notifications when new leads arrive
   - CRM integration (HubSpot, Salesforce, etc.)
   - Lead scoring system
   - Automated follow-up emails
   - Analytics and reporting

---

## 📞 Support

If you need help:
- Email: ray@wyesman.com
- Check server logs for errors
- Review Resend dashboard for email issues
- Test forms using the test page

---

**Happy Lead Tracking! 🎉**

All your customer inquiries are now being captured, tracked, and delivered straight to your inbox!
