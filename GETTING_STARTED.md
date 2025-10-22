# 🚀 Getting Started - WordPress Configuration

Your site now has fallback content that displays automatically! You'll see professional articles about energy, mining, construction, and more - even without WordPress configured yet.

## ✨ What's New

Your Insights page now includes:
- ✅ **Welcome section** introducing the page
- ✅ **6 professional fallback articles** about your services
- ✅ **Automatic fallback** when WordPress isn't configured
- ✅ **No more error messages** on the public site

## ⚡ Current Status

**Good news!** The site works perfectly right now:
- Visit http://localhost:3000/insights
- You'll see professional articles about:
  - Renewable Energy in Nigeria
  - Mining Operations & Sustainability
  - Infrastructure Development
  - Digital Transformation
  - Investment Opportunities
  - Strategic Business Consulting

**These articles will always display** until you add WordPress and publish your own posts.

---

## 📝 Optional: Add Your Own WordPress Blog

For your actual deployment, you'll want your own WordPress:

#### Step 1: Install WordPress

Choose one of these options:

**A. On a Subdomain (Recommended)**
- Install WordPress on `blog.yourdomain.com`
- Hostinger has a 1-click WordPress installer
- Keeps your blog separate and easy to manage

**B. On Separate Hosting**
- Use WordPress.com (free tier available)
- Or install on any hosting provider
- Just need the REST API URL

#### Step 2: Configure WordPress

1. **Install WordPress** (via Hostinger control panel or WordPress.com)
2. **Create a test post** to verify it works
3. **Get your REST API URL:**
   - Your URL will be: `https://yourdomain.com/wp-json/wp/v2`
   - Replace `yourdomain.com` with your actual domain
4. **Test it in browser:**
   - Visit: `https://yourdomain.com/wp-json/wp/v2/posts`
   - You should see JSON data

#### Step 3: Configure Your Project

1. **Create `.env.local`** (if not exists):
   ```bash
   touch .env.local
   ```

2. **Add your WordPress URL:**
   ```env
   NEXT_PUBLIC_WORDPRESS_API_URL=https://yourdomain.com/wp-json/wp/v2
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```

3. **Restart dev server:**
   ```bash
   npm run dev
   ```

---

## 📋 Set Up Contact Form (2 Minutes)

**Quick Setup:** See **`FORMSPREE_QUICKSTART.md`** for step-by-step guide!

Or follow these quick steps:

1. **Sign up at Formspree:** https://formspree.io/
2. **Create a new form** named "Pathmark Contact Form"
3. **Copy the endpoint URL** (looks like: `https://formspree.io/f/xyzabc123`)
4. **Add to `.env.local`:**
   ```env
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_ACTUAL_FORM_ID
   ```
5. **Restart dev server:** `npm run dev`
6. **Test:** Visit http://localhost:3000/contact

**Full Guide:** See `FORMSPREE_SETUP_GUIDE.md` for detailed instructions

---

## ✅ Verify Everything Works

After setting up, check:

1. **Blog page loads:** http://localhost:3000/insights
   - You should see blog posts (either from demo or your WordPress)
   - No errors in the console

2. **Contact form loads:** http://localhost:3000/contact
   - Form should be visible
   - Submit will work after Formspree is configured

---

## 🎯 What's Next?

### For Local Development:
- ✅ Use the demo WordPress URL for now
- ✅ Continue building/testing your site
- ✅ Set up your own WordPress before deployment

### For Production Deployment:
You'll need:
1. ✅ Your own WordPress site (with posts)
2. ✅ Formspree account (for contact form)
3. ✅ Build the site: `npm run build`
4. ✅ Upload `out` folder to Hostinger

---

## 🐛 Still Having Issues?

### No errors! The site works great
- Fallback articles display automatically
- No configuration needed to start developing
- WordPress is optional (add it when you're ready)

### Need Help?
- Check `ENVIRONMENT_CONFIG.md` for detailed environment setup
- Check `HOSTINGER_DEPLOYMENT_GUIDE.md` for deployment help
- Check `STATIC_DEPLOYMENT_README.md` for quick reference

---

## 📁 Your `.env.local` Should Look Like This:

```env
# WordPress Configuration
NEXT_PUBLIC_WORDPRESS_API_URL=https://yourdomain.com/wp-json/wp/v2

# Formspree Configuration
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# Optional: Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Important:** 
- ✅ Never commit `.env.local` to Git (it's already in `.gitignore`)
- ✅ Replace placeholders with your actual values
- ✅ Always restart dev server after editing `.env.local`

---

## 🎉 Quick Commands Reference

```bash
# Create .env.local file
touch .env.local

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# The built static site will be in the 'out' folder
```

---

**That's it!** Once you create `.env.local` with a WordPress URL (even the demo one), the error will be gone and you can continue developing! 🚀

