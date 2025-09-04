# Contact Form Email Setup Guide

Your contact form is now connected to an API route, but you need to implement actual email sending to receive emails. Here are the best options:

## Option 1: Resend (Recommended for Production)

Resend is a modern email API that's easy to use and reliable.

### Setup Steps:

1. **Install Resend:**
   ```bash
   npm install resend
   ```

2. **Get API Key:**
   - Go to [resend.com](https://resend.com)
   - Sign up and get your API key
   - Add to your `.env.local` file:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   ```

3. **Update the API Route:**
   Replace the commented code in `src/app/api/contact/route.ts` with:
   ```typescript
   import { Resend } from 'resend';
   
   const resend = new Resend(process.env.RESEND_API_KEY);
   
   const { data, error } = await resend.emails.send({
     from: 'Contact Form <noreply@yourdomain.com>',
     to: ['your-email@example.com'], // Your email address
     subject: `New Contact Form Submission: ${subject}`,
     html: `
       <h2>New Contact Form Submission</h2>
       <p><strong>Name:</strong> ${name}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
       <p><strong>Subject:</strong> ${subject}</p>
       <p><strong>Message:</strong></p>
       <p>${message}</p>
       <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
     `
   });
   ```

## Option 2: SendGrid

SendGrid is another popular email service.

### Setup Steps:

1. **Install SendGrid:**
   ```bash
   npm install @sendgrid/mail
   ```

2. **Get API Key:**
   - Go to [sendgrid.com](https://sendgrid.com)
   - Sign up and get your API key
   - Add to your `.env.local` file:
   ```
   SENDGRID_API_KEY=SG.xxxxxxxxxxxx
   ```

3. **Update the API Route:**
   ```typescript
   import sgMail from '@sendgrid/mail';
   
   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
   
   const msg = {
     to: 'your-email@example.com',
     from: 'noreply@yourdomain.com',
     subject: `New Contact Form Submission: ${subject}`,
     html: `
       <h2>New Contact Form Submission</h2>
       <p><strong>Name:</strong> ${name}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
       <p><strong>Subject:</strong> ${subject}</p>
       <p><strong>Message:</strong></p>
       <p>${message}</p>
       <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
     `
   };
   
   await sgMail.send(msg);
   ```

## Option 3: Nodemailer with SMTP

Use your own email server or Gmail.

### Setup Steps:

1. **Install Nodemailer:**
   ```bash
   npm install nodemailer
   npm install @types/nodemailer --save-dev
   ```

2. **Add SMTP credentials to `.env.local`:**
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```

3. **Update the API Route:**
   ```typescript
   import nodemailer from 'nodemailer';
   
   const transporter = nodemailer.createTransporter({
     host: process.env.SMTP_HOST,
     port: parseInt(process.env.SMTP_PORT || '587'),
     secure: false,
     auth: {
       user: process.env.SMTP_USER,
       pass: process.env.SMTP_PASS,
     },
   });
   
   await transporter.sendMail({
     from: process.env.SMTP_USER,
     to: 'your-email@example.com',
     subject: `New Contact Form Submission: ${subject}`,
     html: `
       <h2>New Contact Form Submission</h2>
       <p><strong>Name:</strong> ${name}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
       <p><strong>Subject:</strong> ${subject}</p>
       <p><strong>Message:</strong></p>
       <p>${message}</p>
       <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
     `
   });
   ```

## Option 4: Form Services (No Code Required)

If you prefer not to handle email sending yourself:

### Netlify Forms:
- Add `data-netlify="true"` to your form
- Netlify will automatically handle form submissions
- You'll receive emails at your registered email address

### Formspree:
- Sign up at [formspree.io](https://formspree.io)
- Get a form endpoint
- Update your form action to point to their endpoint

## Testing Your Setup

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Fill out the contact form on your website**

3. **Check your email** - you should receive the form submission

4. **Check the console** - form data will be logged there as well

## Security Considerations

- **Rate Limiting:** Consider adding rate limiting to prevent spam
- **Validation:** The API already validates required fields and email format
- **CAPTCHA:** Consider adding reCAPTCHA for additional spam protection
- **Environment Variables:** Never commit API keys to your repository

## Current Status

✅ **Form UI:** Complete and styled  
✅ **Form Validation:** Client-side validation implemented  
✅ **API Route:** Created and connected  
✅ **Form Submission:** Connected to API  
❌ **Email Sending:** Needs to be implemented (choose one of the options above)

Choose the option that best fits your needs and budget. Resend is recommended for production use as it's reliable and has a generous free tier.
