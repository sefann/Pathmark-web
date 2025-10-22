# ⚡ Formspree Quick Start (2 Minutes)

## Step 1: Create Account
1. Go to: **https://formspree.io/**
2. Click **"Get Started"** or **"Sign Up"**
3. Sign up with Google (fastest) or email
4. Verify your email

## Step 2: Create Form
1. Click **"+ New Form"**
2. **Form Name:** `Pathmark Contact Form`
3. **Notification Email:** `contact@pathmarkadvisory.com` (or your email)
4. Click **"Create Form"**
5. **Copy your form endpoint** (looks like: `https://formspree.io/f/xyzabc123`)

## Step 3: Add to Your Project
1. Create **`.env.local`** in project root (if it doesn't exist)
2. Add this line (replace with YOUR actual endpoint):
   ```env
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xyzabc123
   ```
3. Save the file

## Step 4: Restart Server
```bash
# Stop server: Ctrl+C
# Restart:
npm run dev
```

## Step 5: Test It!
1. Go to: **http://localhost:3000/contact**
2. Fill out the form
3. Click "Send Message"
4. ✅ Check your email for the submission!

---

## ✅ Done!

Your contact form now:
- ✅ Sends emails to you
- ✅ Works without a server
- ✅ Has spam protection
- ✅ Stores submissions in Formspree dashboard

---

## 🎯 Example .env.local File

Your `.env.local` should look like this:

```env
# Formspree - Contact Form
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xyzabc123

# WordPress - Blog (optional)
NEXT_PUBLIC_WORDPRESS_API_URL=https://yourdomain.com/wp-json/wp/v2
```

**Important:** 
- Replace `xyzabc123` with your actual Formspree form ID
- Never commit `.env.local` to Git (it's already in .gitignore)

---

## 🐛 Not Working?

### Check:
1. `.env.local` is in project root (not in a subfolder)
2. Form endpoint is correct (copy from Formspree)
3. Server was restarted after creating `.env.local`

### Still stuck?
See full guide: **`FORMSPREE_SETUP_GUIDE.md`**

---

## 🚀 Ready to Deploy?

When deploying to Hostinger:
1. Make sure `.env.local` has your Formspree endpoint
2. Run `npm run build`
3. Upload `out` folder to Hostinger
4. Form works on production! 🎉

---

**That's it!** Contact form is now live and working. 📧

