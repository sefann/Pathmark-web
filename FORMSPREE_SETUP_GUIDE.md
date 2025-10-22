# 📧 Formspree Setup Guide for Pathmark Advisory

This guide will walk you through setting up Formspree to handle your contact form submissions.

## 🎯 What is Formspree?

Formspree is a form backend service that handles form submissions without requiring server-side code. Perfect for static sites!

**Benefits:**
- ✅ No server-side code needed
- ✅ Email notifications for submissions
- ✅ Spam protection built-in
- ✅ Submission management dashboard
- ✅ Free tier available (50 submissions/month)

---

## 🚀 Step-by-Step Setup (5 Minutes)

### Step 1: Create Formspree Account

1. **Visit Formspree:**
   - Go to: https://formspree.io/
   
2. **Click "Get Started"** or "Sign Up"

3. **Choose Sign-Up Method:**
   - Sign up with Google (quickest)
   - Or use email + password

4. **Verify Your Email:**
   - Check your inbox
   - Click the verification link
   - Log in to Formspree

---

### Step 2: Create Your Form

1. **Click "New Form"** (or "+ New Form" button)

2. **Configure Form Settings:**
   
   **Form Name:**
   ```
   Pathmark Contact Form
   ```

   **Form Endpoint:** (This is auto-generated)
   ```
   You'll get something like: xyzabc123
   Your full endpoint: https://formspree.io/f/xyzabc123
   ```

3. **Configure Notification Email:**
   - Enter: `contact@pathmarkadvisory.com`
   - Or your preferred email address
   - This is where submissions will be sent

4. **Click "Create Form"**

---

### Step 3: Copy Your Form Endpoint

After creating the form, you'll see your endpoint URL:

```
https://formspree.io/f/xyzabc123
```

**Copy this entire URL!** You'll need it in the next step.

---

### Step 4: Configure Your Project

1. **Create `.env.local`** (if it doesn't exist):
   ```bash
   # In your project root
   touch .env.local
   ```

2. **Add Your Formspree Endpoint:**
   
   Open `.env.local` and add:
   ```env
   # Formspree Configuration
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_ACTUAL_FORM_ID
   
   # WordPress Configuration (optional)
   NEXT_PUBLIC_WORDPRESS_API_URL=https://yourdomain.com/wp-json/wp/v2
   ```

   **Replace `YOUR_ACTUAL_FORM_ID` with your real form ID from Formspree!**

   Example:
   ```env
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xyzabc123
   ```

3. **Save the file**

---

### Step 5: Restart Development Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

---

### Step 6: Test Your Form

1. **Visit the contact page:**
   ```
   http://localhost:3000/contact
   ```

2. **Fill out the form:**
   - Name: Test User
   - Email: your-email@example.com
   - Subject: Test Submission
   - Message: This is a test message

3. **Click "Send Message"**

4. **Check for Success:**
   - You should see a green success message
   - Check your email (the one you configured in Formspree)
   - You should receive the test submission

5. **Check Formspree Dashboard:**
   - Log in to Formspree
   - Click on "Pathmark Contact Form"
   - You'll see the submission listed

---

## ⚙️ Formspree Configuration Options

### Recommended Settings (In Formspree Dashboard)

#### 1. **Email Notifications**
```
✅ Enable email notifications
✅ Set notification email: contact@pathmarkadvisory.com
✅ Enable instant notifications (for immediate alerts)
```

#### 2. **Spam Protection**
```
✅ Enable reCAPTCHA (recommended)
✅ Enable honeypot (catches bots)
✅ Block submissions with suspicious patterns
```

#### 3. **Custom Reply-To**
```
✅ Use submitter's email as reply-to
   (This allows you to reply directly to submissions)
```

#### 4. **Auto-Response** (Optional)
```
Enable auto-response to send confirmation to submitters:

Subject: "Thank you for contacting Pathmark Advisory"
Message: 
"Thank you for reaching out to Pathmark Advisory. 
We have received your message and will respond within 24-48 hours.

Best regards,
Pathmark Advisory Team"
```

---

## 📊 Formspree Plans

### Free Plan (Perfect for Starting)
- ✅ 50 submissions per month
- ✅ Email notifications
- ✅ Basic spam protection
- ✅ Submission archive (1 month)

### Paid Plans (If You Need More)
- **Basic ($10/month):** 1,000 submissions
- **Pro ($40/month):** 10,000 submissions + advanced features

**For most businesses, the free plan is sufficient to start!**

---

## 🎨 Form Customization (Already Done!)

Your contact form already includes:
- ✅ Name field
- ✅ Email field
- ✅ Phone field (optional)
- ✅ Subject dropdown
- ✅ Message textarea
- ✅ Beautiful design
- ✅ Loading states
- ✅ Success/error messages
- ✅ Form validation

**No code changes needed!** Just add your Formspree endpoint to `.env.local`.

---

## 🧪 Testing Checklist

Test these scenarios:

### ✅ Successful Submission
- [ ] Fill out all required fields
- [ ] Click "Send Message"
- [ ] See success message
- [ ] Receive email notification
- [ ] Submission appears in Formspree dashboard

### ✅ Form Validation
- [ ] Try submitting empty form → Should show validation errors
- [ ] Try invalid email format → Should show error
- [ ] Required fields work correctly

### ✅ Multiple Submissions
- [ ] Submit form multiple times
- [ ] All submissions appear in Formspree
- [ ] All emails are received

### ✅ Form Reset
- [ ] After successful submission, form fields should clear
- [ ] Can submit another message immediately

---

## 🐛 Troubleshooting

### Issue: Form submission fails

**Check:**
1. `.env.local` exists in project root
2. `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is set correctly
3. Endpoint starts with `https://formspree.io/f/`
4. No typos in the form ID
5. Development server was restarted after adding `.env.local`

**Solution:**
```bash
# Verify .env.local contents
cat .env.local

# Should show:
# NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# Restart server
npm run dev
```

---

### Issue: Not receiving email notifications

**Check:**
1. Email address is correct in Formspree dashboard
2. Check spam folder
3. Verify email notifications are enabled in Formspree settings
4. Wait a few minutes (sometimes there's a delay)

**Solution:**
- Log in to Formspree dashboard
- Go to form settings
- Verify notification email is correct
- Enable notifications if disabled

---

### Issue: "Form not found" error

**Check:**
1. Form ID is correct (copy from Formspree dashboard)
2. Endpoint format is exactly: `https://formspree.io/f/YOUR_FORM_ID`
3. Form is active in Formspree (not deleted)

---

## 📧 Email Template

Emails you receive will look like this:

```
From: Pathmark Contact Form <notifications@formspree.io>
Reply-To: submitter@example.com
To: contact@pathmarkadvisory.com

Subject: New Contact Form Submission: [Subject]

Name: John Doe
Email: john@example.com
Phone: +234 xxx xxx xxxx
Subject: General Inquiry

Message:
Hello, I'm interested in learning more about your services...

---
Submitted via Pathmark Advisory Contact Form
Time: [Timestamp]
```

You can reply directly to these emails!

---

## 🚀 Deployment Notes

### For Local Development
```env
# .env.local (NOT committed to Git)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xyzabc123
```

### For Production Build
The endpoint is **baked into the build**, so:

1. Set `.env.local` with correct endpoint
2. Run `npm run build`
3. Upload `out` folder to Hostinger
4. Form will work on production!

**Important:** Environment variables are compiled at build time. If you change the Formspree endpoint, you must rebuild.

---

## 🎯 Quick Reference

### Your Formspree Dashboard
```
Login: https://formspree.io/login
View submissions: https://formspree.io/forms/YOUR_FORM_ID
Settings: https://formspree.io/forms/YOUR_FORM_ID/settings
```

### Environment Variable Format
```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

### Test the Form
```
Local: http://localhost:3000/contact
Production: https://yourdomain.com/contact
```

---

## 🔐 Security Best Practices

1. ✅ **Enable reCAPTCHA** in Formspree (free)
2. ✅ **Enable honeypot** to catch bots
3. ✅ **Set rate limiting** (prevent spam)
4. ✅ **Monitor submissions** regularly
5. ✅ **Never commit `.env.local`** to Git (already in .gitignore)

---

## 📊 Monitoring Submissions

### Formspree Dashboard Features:
- **Submissions List:** See all form submissions
- **Export Data:** Download as CSV
- **Archive:** Access old submissions (plan dependent)
- **Analytics:** Track submission trends
- **Spam Filter:** Review blocked submissions

### Email Management:
- Set up email filters for form submissions
- Create labels/folders for organization
- Set up auto-forwarding if needed

---

## 💡 Pro Tips

### Tip 1: Multiple Notification Emails
Formspree Pro allows multiple notification emails. On free plan, use email forwarding.

### Tip 2: Custom Thank You Page
Want to redirect after submission? You can customize this in Formspree settings.

### Tip 3: Form Analytics
Track conversion rates by monitoring submissions in Formspree dashboard.

### Tip 4: Integration with CRM
Formspree integrates with tools like:
- Google Sheets (automatic logging)
- Slack (instant notifications)
- Zapier (connect to 1000+ apps)

---

## ✅ Final Checklist

Before deploying to production:

- [ ] Formspree account created
- [ ] Form created in Formspree dashboard
- [ ] Notification email configured
- [ ] Spam protection enabled
- [ ] Form endpoint copied
- [ ] `.env.local` created with endpoint
- [ ] Development server restarted
- [ ] Test submission successful
- [ ] Email notification received
- [ ] Form resets after submission
- [ ] Validation working correctly

---

## 🎉 You're Done!

Your contact form is now:
- ✅ Connected to Formspree
- ✅ Sending email notifications
- ✅ Protected from spam
- ✅ Ready for production

**Next steps:**
1. Customize email notifications (optional)
2. Set up auto-response (optional)
3. Test thoroughly
4. Deploy to Hostinger!

---

**Need help?** 
- Formspree Docs: https://help.formspree.io/
- Formspree Support: support@formspree.io

**Ready to deploy?** See `HOSTINGER_DEPLOYMENT_GUIDE.md`


