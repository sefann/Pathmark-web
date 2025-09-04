# Resend Setup: Get Contact Form Emails in 5 Minutes

## Step 1: Install Resend
```bash
npm install resend
```

## Step 2: Get Your Resend API Key
1. Go to [resend.com](https://resend.com)
2. Sign up for free
3. Copy your API key (starts with `re_`)

## Step 3: Add API Key to Environment
Create or edit `.env.local` file in your project root:
```
RESEND_API_KEY=re_your_actual_api_key_here
```

## Step 4: Update Email Address
In `src/app/api/contact/route.ts`, change this line:
```typescript
to: ['contact@pathmarkadvisory.com'], // Change this to your email
```

**Change it to your actual email address** where you want to receive the form submissions.

## Step 5: Test Your Form
1. Start your development server: `npm run dev`
2. Go to your contact page
3. Fill out the form
4. Submit it
5. **Check your email!** You should receive a beautifully formatted email

## What You'll Receive:

✅ **Professional Email Design** - Branded with your company colors  
✅ **Complete Form Details** - Name, email, phone, subject, message  
✅ **Timestamp** - When the form was submitted  
✅ **Direct Reply** - You can reply directly to the person who submitted the form  

## How to Access All Messages:

1. **Your Email Inbox** - All submissions go directly to your email
2. **Organize with Folders** - Create a "Contact Form Submissions" folder
3. **Search & Filter** - Use your email client's search to find specific inquiries
4. **Reply Directly** - Click reply to respond to potential clients

## Troubleshooting:

- **No emails received?** Check your spam folder
- **API error?** Make sure your API key is correct
- **Form not working?** Check the browser console for errors

## Next Steps:

Once this is working, you can:
- Add more team members to receive emails
- Set up email forwarding rules
- Create automated responses
- Add form submission tracking

Your contact form will now send professional, branded emails directly to your inbox every time someone submits it!
