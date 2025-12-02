# Email Setup Guide for Iron Works Solution

## ✅ FORMS READY - JUST NEED YOUR WEB3FORMS KEY!

All website forms are fully integrated and ready to forward leads to your email. You just need to add your free Web3Forms access key (takes 2 minutes).

## 🚀 Quick Setup (2 minutes)

### Step 1: Get Your Free Web3Forms Access Key
1. **Visit** → https://web3forms.com
2. **Click** → "Get Started - It's Free"
3. **Enter your email** → `info@ironworkssolution.net`
4. **Check your email** → Click the verification link Web3Forms sends you
5. **Copy your Access Key** → It looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`

### Step 2: Add Your Access Key to the Website
1. **Open** → `.env.local` file in your project root folder
2. **Replace** → Change line 6 from:
   ```
   WEB3FORMS_ACCESS_KEY=YOUR_ACCESS_KEY_HERE
   ```
   to:
   ```
   WEB3FORMS_ACCESS_KEY=a1b2c3d4-e5f6-7890-abcd-ef1234567890
   ```
   (Use your actual access key from Web3Forms)
3. **Save** → Save the file
4. **Restart** → If running locally, restart your dev server. If deployed, redeploy your site.

### Step 3: Test Your Forms (5 minutes)
Test each form to make sure emails arrive:

**Test 1: Contact Form** (Homepage)
1. Scroll to "Request a Free Quote" section
2. Fill in: Name, Phone, Email, City, Project Type
3. Click "Submit My Request"
4. ✅ Check email: info@ironworkssolution.net

**Test 2: Quote Wizard** (Interactive popup)
1. Click "Start Quote Wizard" button on homepage
2. Select fence type → Enter length → Choose finish → Add contact info
3. Click "Get My Free Quote"
4. ✅ Check email: info@ironworkssolution.net

**Test 3: Booking Scheduler** (Consultation booking)
1. Click "Schedule Consultation" button
2. Select date and time
3. Fill in contact details
4. Click "Confirm Booking"
5. ✅ Check email: info@ironworkssolution.net

## 📋 What Forms Are Set Up?

### ✅ Contact Form (Homepage - "Request a Free Quote" section)
**Location:** Scroll to contact section on homepage
**Captures:** Name, Phone, Email, City, Project Type, Message
**Email Subject:** "New Contact Form Submission - Iron Works Solution"
**Status:** ✅ Ready - Just add Web3Forms key

### ✅ Quote Wizard (Interactive Multi-Step Popup)
**Location:** Click "Start Quote Wizard" button
**Captures:** Fence Type, Length, Finish, Name, Email, Phone
**Email Subject:** "New Quote Request - Iron Works Solution"
**Status:** ✅ Ready - Just add Web3Forms key

### ✅ Booking Scheduler (Consultation Booking)
**Location:** Click "Schedule Consultation" button
**Captures:** Date, Time, Name, Email, Phone, Project Type
**Email Subject:** "New Consultation Booking - Iron Works Solution"
**Status:** ✅ Ready - Just add Web3Forms key

## 📧 Email Delivery Details

**All leads go to:** info@ironworkssolution.net

**Each email includes:**
- ✅ Customer contact information (Name, Phone, Email)
- ✅ Project details (Type, specifications, preferences)
- ✅ Submission timestamp (When they submitted)
- ✅ Reply-to address (Customer's email for easy response)

**Spam Protection:** Web3Forms has built-in spam filtering

## ❓ Troubleshooting

### Problem: Forms not sending emails?

**Solution 1:** Check your Web3Forms access key
1. Open `.env.local` file
2. Make sure line 6 has your actual access key (not `YOUR_ACCESS_KEY_HERE`)
3. Verify it matches your key at https://web3forms.com/dashboard
4. Save the file and restart your server

**Solution 2:** Check spam/junk folder
1. Check your spam folder at info@ironworkssolution.net
2. Mark Web3Forms emails as "Not Spam" if found there
3. Add noreply@web3forms.com to your contacts

**Solution 3:** Verify Web3Forms account
1. Log into https://web3forms.com/dashboard
2. Check that your access key is active
3. Check your submission count (free plan = 250/month)
4. Make sure your email is verified

**Solution 4:** Restart your server
1. If testing locally: Stop dev server (Ctrl+C) then run `bun run dev`
2. If deployed: Redeploy your site to Netlify

### Problem: Want to change the recipient email?

**Solution:**
1. Open `.env.local`
2. Change line 2: `BUSINESS_EMAIL=info@ironworkssolution.net` to your desired email
3. Save and restart server/redeploy

### Problem: Form shows error message when submitting

**This is NORMAL until you add your Web3Forms key!**
- The forms will show an error until you add a valid Web3Forms access key
- Once you add your key, forms will work perfectly
- Test all three forms after adding your key

## 🆘 Need Help?
- **Web3Forms Docs:** https://docs.web3forms.com
- **Web3Forms Support:** https://web3forms.com/support
- **Your Developer:** Contact the person who built this site

## 🎯 Testing Checklist

After adding your Web3Forms access key, test each form:

- [ ] **Contact Form** - Submit test, check email arrives
- [ ] **Quote Wizard** - Complete all 4 steps, check email arrives
- [ ] **Booking Scheduler** - Select date/time, check email arrives
- [ ] **Check spam folder** - Make sure emails aren't going to spam
- [ ] **Reply test** - Reply to a test submission to verify reply-to works

## 🚀 Advanced Features (Optional)

Web3Forms offers additional features you can enable for FREE:

### Auto-Responders (Recommended!)
Send automatic "Thank you" emails to customers after they submit
- Go to https://web3forms.com/dashboard
- Enable "Auto Responder"
- Customize your thank you message

### Webhooks (For CRM Integration)
Connect form submissions to other tools:
- Zapier - Connect to 5,000+ apps
- Make.com - Automation workflows
- Your CRM - Salesforce, HubSpot, etc.
- Slack - Get notifications in Slack

### File Uploads
Enable customers to upload photos with their submissions
- Already built into the forms (UI ready)
- Just enable in Web3Forms dashboard

### Email Notifications
Get push notifications on your phone when forms are submitted
- Enable in Web3Forms dashboard
- Great for instant lead response

## 📊 Form Submission Tracking

View all form submissions:
1. Log into https://web3forms.com/dashboard
2. See all submissions, dates, and customer info
3. Export to CSV for your CRM
4. Track conversion rates

**Free Plan:** 250 submissions per month
**Paid Plans:** Unlimited submissions + premium features

## 💡 Important Notes

✅ **Forms are fully functional** - Just add your Web3Forms key
✅ **No coding required** - Just update .env.local
✅ **100% free** - Web3Forms free plan is generous (250/month)
✅ **Instant delivery** - Emails arrive in seconds
✅ **Mobile responsive** - All forms work on phones/tablets
✅ **Spam protected** - Built-in spam filtering

## 📞 What Happens When Someone Submits?

1. **Customer fills form** → Enters their info and clicks submit
2. **Form validates** → Checks all required fields are filled
3. **Shows loading** → Button says "Submitting..."
4. **Sends to Web3Forms** → Securely transmits data
5. **Email sent** → You get email at info@ironworkssolution.net
6. **Success message** → Customer sees "Thank you! We'll contact you within 24 hours"
7. **You respond** → Reply to email or call customer

**Total time:** 2-3 seconds from click to email delivery!
