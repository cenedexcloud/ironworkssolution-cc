# 📧 How to Send Emails to ray@tradblaze.net

Currently, all forms send emails to **ray@wyesman.com** because that's your verified Resend account email.

To send emails to **ray@tradblaze.net**, you need to verify the domain with Resend.

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Add Domain to Resend
1. Go to **https://resend.com/domains**
2. Click **"Add Domain"**
3. Enter: **tradblaze.net**
4. Click **"Add"**

### Step 2: Add DNS Records
Resend will give you DNS records to add. You need to add these records in your domain registrar (where you bought tradblaze.net):

**DNS Records (example - use what Resend provides):**
- **TXT Record** for verification
- **MX Records** for receiving bounces
- **DKIM Records** for authentication

### Step 3: Verify Domain
1. After adding DNS records, click **"Verify"** in Resend dashboard
2. Wait for verification (usually instant, can take up to 48 hours)
3. Status should change to **"Verified"** ✅

### Step 4: Update Your Forms
Once verified, update the code to use your domain:

**Update `.env.local`:**
```
CONTACT_EMAIL=ray@tradblaze.net
FROM_EMAIL=noreply@tradblaze.net
```

**Update all form routes** (or I can do this for you):
Change:
```typescript
from: 'Iron Works Solution <onboarding@resend.dev>',
to: ['ray@wyesman.com'],
```

To:
```typescript
from: 'Iron Works Solution <noreply@tradblaze.net>',
to: ['ray@tradblaze.net'],
```

---

## 📍 Current Setup (Working Now)

### What's Working:
✅ All 5 forms are configured
✅ Emails send to: **ray@wyesman.com**
✅ From address: **onboarding@resend.dev**
✅ Reply-to: Customer's email

### Forms:
- `/api/contact` - Contact form
- `/api/quote` - Quote wizard
- `/api/quick-lead` - Quick lead capture
- `/api/booking` - Consultation booking
- `/api/photo-quote` - Photo upload

---

## 🧪 Test Your Forms Now

1. Go to your website
2. Fill out any contact form
3. Submit it
4. **Check your inbox at ray@wyesman.com**
5. Email should arrive within seconds!

---

## ❓ Why Two Email Addresses?

**ray@wyesman.com**
- Your Resend account email
- Automatically verified
- Can receive test emails immediately
- Use this for testing

**ray@tradblaze.net**
- Your business email
- Requires domain verification
- Better for production/professional use
- Use this after domain verification

---

## 📊 Alternative: Email Forwarding

If you don't want to verify the domain, you can:
1. Keep sending to **ray@wyesman.com**
2. Set up email forwarding in your email provider:
   - Forward all emails from **ray@wyesman.com** → **ray@tradblaze.net**

This way you'll receive emails at ray@tradblaze.net without domain verification!

---

## 🆘 Need Help?

**Domain Verification Issues:**
- Check DNS records are correct
- Wait 24-48 hours for DNS propagation
- Contact Resend support: https://resend.com/support

**Current Status:**
✅ Everything is working
✅ Forms send to ray@wyesman.com
✅ Ready to test!

**Next Steps:**
1. Test the forms (send to ray@wyesman.com)
2. Verify tradblaze.net domain when ready
3. Update configuration to use custom domain

---

Let me know when you want to switch to ray@tradblaze.net and I'll help you update the code!
