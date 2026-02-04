# 🧪 Quick Form Testing Guide

## ⚡ Quick Start (Do This First!)

### 1. Add Your Web3Forms Key (2 minutes)
```bash
1. Go to https://web3forms.com
2. Sign up with: info@ironworkssolution.net
3. Copy your access key
4. Open .env.local file
5. Replace YOUR_ACCESS_KEY_HERE with your actual key
6. Save file
```

### 2. Restart Server
```bash
# If running locally:
Ctrl+C to stop, then: bun run dev

# If deployed:
Redeploy to Netlify
```

### 3. Test All Forms (5 minutes)

## 📝 Form Testing Checklist

### ✅ Test 1: Contact Form
**Where:** Homepage → Scroll to "Request a Free Quote" section

**Steps:**
1. Fill in:
   - Name: Test Customer
   - Phone: 555-123-4567
   - Email: test@example.com
   - City: Los Angeles
   - Project Type: Residential Fencing
   - Message: This is a test submission

2. Click "Submit My Request"

3. **Expected Result:**
   - ✅ Button shows "Submitting..."
   - ✅ Success message appears: "Thank you! We'll contact you within 24 hours"
   - ✅ Form fields clear
   - ✅ Email arrives at info@ironworkssolution.net within 30 seconds

4. **Email Should Contain:**
   - Subject: "New Contact Form Submission - Iron Works Solution"
   - Customer name, phone, email, city
   - Project type and message
   - Reply-to: test@example.com

---

### ✅ Test 2: Quote Wizard
**Where:** Homepage → Click "Start Quote Wizard" button

**Steps:**
1. **Step 1:** Select "Residential Fence" → Click next
2. **Step 2:** Enter "100" for length → Click next
3. **Step 3:** Select "Powder Coated Black" → Click next
4. **Step 4:** Fill in:
   - Name: Test Customer 2
   - Email: test2@example.com
   - Phone: 555-234-5678
5. Click "Get My Free Quote"

6. **Expected Result:**
   - ✅ Success alert: "Thank you! We'll send your quote within 24 hours"
   - ✅ Popup closes
   - ✅ Email arrives at info@ironworkssolution.net

7. **Email Should Contain:**
   - Subject: "New Quote Request - Iron Works Solution"
   - Fence Type: Residential Fence
   - Length: 100 feet
   - Finish: Powder Coated Black
   - Customer contact info

---

### ✅ Test 3: Booking Scheduler
**Where:** Homepage → Click "Schedule Consultation" or "Schedule Free Consultation" button

**Steps:**
1. **Step 1 - Date & Time:**
   - Select a date (click any future date)
   - Select a time slot (e.g., 9:00 AM)
   - Click "Continue to Your Details"

2. **Step 2 - Contact Info:**
   - Name: Test Customer 3
   - Email: test3@example.com
   - Phone: 555-345-6789
   - Project Type: Commercial gate (optional)
   - Click "Confirm Booking"

3. **Expected Result:**
   - ✅ Success alert with date/time confirmation
   - ✅ Popup closes
   - ✅ Email arrives at info@ironworkssolution.net

4. **Email Should Contain:**
   - Subject: "New Consultation Booking - Iron Works Solution"
   - Selected date and time
   - Project type
   - Customer contact info

---

## 🐛 Troubleshooting

### Error: "Failed to submit. Please call us at 323-470-2101"

**Cause:** Web3Forms access key not set up or invalid

**Fix:**
1. Check `.env.local` file
2. Make sure `WEB3FORMS_ACCESS_KEY` is NOT `YOUR_ACCESS_KEY_HERE`
3. Verify key is correct at https://web3forms.com/dashboard
4. Restart server

### Forms submit but no email arrives

**Check:**
1. ✅ Spam/junk folder at info@ironworkssolution.net
2. ✅ Web3Forms dashboard - see if submission recorded
3. ✅ Web3Forms monthly limit (250 free submissions)
4. ✅ Email verification at Web3Forms

### Button stays on "Submitting..." forever

**Fix:**
1. Check browser console (F12) for errors
2. Verify internet connection
3. Check if Web3Forms is down: https://web3forms.com/status

---

## 📧 Where Do Emails Go?

**Primary Email:** info@ironworkssolution.net
**Reply-To:** Customer's email (for easy responses)

### To Change Email Address:
1. Edit `.env.local`
2. Change `BUSINESS_EMAIL=info@ironworkssolution.net`
3. Save and restart

---

## ✅ Success Indicators

### Form Works If:
- ✅ Success message appears after submit
- ✅ Email arrives within 30 seconds
- ✅ Email contains all customer info
- ✅ Reply-to is set to customer's email
- ✅ No error messages shown

### Form Needs Fix If:
- ❌ Error message appears
- ❌ Button stays stuck on "Submitting..."
- ❌ No email arrives after 2 minutes
- ❌ Email missing customer info

---

## 🎯 Quick Test Command

Open browser console (F12) and type:
```javascript
// Test Contact Form API
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test',
    email: 'test@test.com',
    phone: '555-1234',
    city: 'LA',
    projectType: 'Test',
    message: 'Test message'
  })
}).then(r => r.json()).then(console.log)
```

**Expected Response:**
```json
{ "success": true, "message": "Form submitted successfully!" }
```

---

## 📱 Mobile Testing

Test forms on mobile devices:
1. Open site on phone
2. Test each form
3. Verify forms are responsive
4. Check success messages display properly

---

## 🚀 Production Checklist

Before going live:
- [ ] Web3Forms access key added
- [ ] All 3 forms tested and working
- [ ] Emails arriving at correct address
- [ ] Spam folder checked and whitelisted
- [ ] Mobile forms tested
- [ ] Success messages displaying correctly
- [ ] Error handling working (test with invalid key)
- [ ] Reply-to addresses working

---

## 📊 Monitoring Forms

**Check Submissions:**
- Web3Forms Dashboard: https://web3forms.com/dashboard
- View all submissions, export to CSV
- Track monthly usage (250 free/month)

**Email Setup:**
- Add noreply@web3forms.com to contacts
- Set up email filters for form submissions
- Consider auto-forwarding to multiple emails

---

**Questions?** See EMAIL_SETUP.md for detailed setup guide.
