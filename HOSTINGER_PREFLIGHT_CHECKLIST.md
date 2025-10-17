# 🚀 Hostinger Deployment - Pre-Flight Checklist

**Status: ✅ READY FOR DEPLOYMENT**  
**Date: October 16, 2025**

---

## ✅ PRODUCTION-READY VERIFICATION

### Build Status: PERFECT ✅
```
✅ Build completed in 25 seconds
✅ NO errors
✅ NO warnings (all resolved!)
✅ 30 pages generated successfully
✅ All optimizations enabled
✅ Production bundle optimized
```

### Recent Optimizations Applied
- ✅ Added `metadataBase` to fix Open Graph warnings
- ✅ Contact API now uses environment variables for email config
- ✅ Security headers configured
- ✅ Caching headers optimized
- ✅ Compression enabled
- ✅ Package imports optimized (lucide-react, framer-motion)

---

## 📋 BEFORE YOU DEPLOY - ACTION ITEMS

### 1. Gather Your Credentials

#### ✅ Sanity CMS Credentials
- [ ] **Project ID**: Log in to https://sanity.io/manage
- [ ] **Dataset**: Usually `production`
- [ ] **API Token**: Create with read permissions
- [ ] **CORS Origins**: Add your domain (e.g., `https://yourdomain.com`)

**Where to find:**
```
1. Go to https://sanity.io/manage
2. Select your project
3. Go to "API" tab
4. Copy Project ID
5. Add CORS origin: https://yourdomain.com
6. Create API token with "Read" permission
```

#### ✅ Resend Email Service
- [ ] **API Key**: Get from https://resend.com/api-keys
- [ ] **Verified Domain**: (Optional but recommended for better deliverability)
- [ ] **From Email**: e.g., `noreply@pathmarkadvisory.com`
- [ ] **To Email**: e.g., `contact@pathmarkadvisory.com`

**Where to find:**
```
1. Go to https://resend.com
2. Sign up or log in
3. Go to "API Keys" section
4. Create new API key
5. Copy the key (starts with "re_")
6. Optional: Verify your domain for better deliverability
```

#### ✅ Google Analytics (Optional)
- [ ] **Measurement ID**: Get from https://analytics.google.com
- [ ] Format: `G-XXXXXXXXXX`

**Where to find:**
```
1. Go to https://analytics.google.com
2. Create property or select existing
3. Admin → Data Streams → Web
4. Copy Measurement ID
```

#### ✅ Domain & Hosting
- [ ] **Your Domain**: e.g., `pathmarkadvisory.com`
- [ ] **Hostinger SSH Host**: e.g., `ssh.hostinger.com`
- [ ] **SSH Port**: Usually `65002` or `22`
- [ ] **SSH Username**: From Hostinger panel
- [ ] **SSH Password**: Set in Hostinger panel

---

## 📝 CREATE YOUR .env.local FILE

Copy this template and fill in your actual values:

```bash
# ============================================
# SANITY CMS CONFIGURATION
# ============================================
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_token_here

# ============================================
# EMAIL SERVICE (RESEND)
# ============================================
RESEND_API_KEY=re_your_resend_key_here
CONTACT_EMAIL_TO=contact@pathmarkadvisory.com
CONTACT_EMAIL_FROM=Pathmark Advisory <noreply@pathmarkadvisory.com>

# ============================================
# GOOGLE ANALYTICS (OPTIONAL)
# ============================================
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# ============================================
# SITE CONFIGURATION
# ============================================
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NODE_ENV=production
```

**💾 IMPORTANT:** Save this in a secure text file on your computer. You'll copy/paste this into the server.

---

## 🚀 DEPLOYMENT PROCESS (STEP-BY-STEP)

### Step 1: Access Your Hostinger Account
1. [ ] Log in to https://hostinger.com
2. [ ] Go to **Hosting** → **Cloud Hosting**
3. [ ] Ensure your plan is active
4. [ ] Check SSH access is enabled

### Step 2: Prepare SSH Access
1. [ ] Note your SSH credentials from Hostinger panel:
   - **Host**: `ssh.hostinger.com` (or similar)
   - **Port**: Usually `65002`
   - **Username**: Your hosting username
   - **Password**: Set/reset if needed
2. [ ] Test SSH connection:
   ```bash
   ssh username@ssh.hostinger.com -p 65002
   ```

### Step 3: Upload Your Code

**Option A: Using Git (RECOMMENDED)**
```bash
# On your local machine
git add .
git commit -m "Production ready for Hostinger"
git push origin main

# Then on Hostinger server via SSH
cd ~/public_html
git clone https://github.com/your-username/Pathmark-web.git
cd Pathmark-web
```

**Option B: Using FTP**
1. [ ] Open FileZilla or Hostinger File Manager
2. [ ] Connect to your hosting account
3. [ ] Upload all files to: `~/public_html/Pathmark-web/`
4. [ ] **Do NOT upload these folders:**
   - `node_modules/` (too large)
   - `.next/` (will be generated)
   - `.git/` (optional)

### Step 4: Configure Environment Variables
```bash
# SSH into your server
ssh username@ssh.hostinger.com -p 65002

# Navigate to project
cd ~/public_html/Pathmark-web

# Create .env.local file
nano .env.local

# Paste your environment variables (prepared earlier)
# Press CTRL+X, then Y, then Enter to save
```

### Step 5: Deploy with Script
```bash
# Make deploy script executable
chmod +x deploy-hostinger.sh

# Run deployment
bash deploy-hostinger.sh
```

**The script will:**
- ✅ Check Node.js version
- ✅ Install all dependencies
- ✅ Build production bundle
- ✅ Install PM2 process manager
- ✅ Start application on port 3000
- ✅ Configure auto-restart

### Step 6: Configure Reverse Proxy
**Contact Hostinger Support** and request:
```
"Hello, I need help configuring Nginx reverse proxy for my Next.js 
application. It's running on port 3000 and I need it accessible via 
my domain: yourdomain.com"
```

Or if you have access to Nginx config:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Step 7: Enable SSL Certificate
1. [ ] Go to **Hostinger Panel** → **SSL**
2. [ ] Select your domain
3. [ ] Click **Install SSL**
4. [ ] Choose **Free SSL Certificate**
5. [ ] Wait for installation (usually instant)
6. [ ] Verify HTTPS works: `https://yourdomain.com`

---

## ✅ POST-DEPLOYMENT VERIFICATION

### Immediate Tests (5 minutes)
- [ ] Visit `https://yourdomain.com` - Homepage loads
- [ ] Click all navigation links - All pages work
- [ ] Test contact form - Submit and verify email received
- [ ] Check browser console (F12) - No JavaScript errors
- [ ] Check mobile version - Responsive design works

### Detailed Functionality Tests (15 minutes)
- [ ] **Homepage** - Video plays, stats display, sections load
- [ ] **About** - Team members display correctly
- [ ] **Services** - All 7 service pages load with images
- [ ] **Industries** - Page displays correctly
- [ ] **Portfolio** - Projects display
- [ ] **Insights** - Articles load from Sanity CMS
- [ ] **Careers** - Page displays job listings
- [ ] **Contact Form** - Submit test message and receive email
- [ ] **Footer Links** - Privacy, Terms, Social media links work
- [ ] **PDFs** - Brochures download correctly

### Performance Tests (10 minutes)
- [ ] **Page Load Speed** - Under 3 seconds on good connection
- [ ] **Images** - All images load properly
- [ ] **Videos** - Banner video plays smoothly
- [ ] **Animations** - Smooth on scroll and hover
- [ ] **Google Analytics** - If enabled, tracking fires

### Cross-Browser Tests (10 minutes)
- [ ] **Chrome** (Windows/Mac)
- [ ] **Firefox**
- [ ] **Safari** (Mac)
- [ ] **Edge**
- [ ] **Mobile Chrome** (Android)
- [ ] **Mobile Safari** (iOS)

---

## 🔧 USEFUL PM2 COMMANDS

Once deployed, manage your app with these commands:

```bash
# View application status
pm2 status

# View real-time logs
pm2 logs pathmark-web

# Restart application
pm2 restart pathmark-web

# Stop application
pm2 stop pathmark-web

# Monitor CPU & Memory usage
pm2 monit

# View detailed info
pm2 show pathmark-web
```

---

## 🔍 TROUBLESHOOTING GUIDE

### Issue: Build Fails
**Symptoms:** `npm run build` fails on server

**Solutions:**
```bash
# Check Node.js version (need 18+)
node -v

# If version is old, install newer version
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18

# Clear cache and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Issue: App Won't Start
**Symptoms:** PM2 shows app as "errored" or "stopped"

**Solutions:**
```bash
# Check logs for errors
pm2 logs pathmark-web --lines 50

# Verify .env.local exists
cat .env.local

# Check if port 3000 is in use
lsof -i :3000

# Kill process if needed
kill -9 $(lsof -t -i:3000)

# Restart
pm2 restart pathmark-web
```

### Issue: Domain Not Loading
**Symptoms:** Can't access site via domain

**Solutions:**
1. **Check DNS propagation**: Visit https://dnschecker.org
2. **Verify Nginx configuration**: Contact Hostinger support
3. **Check PM2 status**: `pm2 status`
4. **Check port**: `curl http://localhost:3000` (should work on server)

### Issue: Contact Form Not Working
**Symptoms:** Form submits but no email received

**Solutions:**
```bash
# Check API route directly
curl -X POST https://yourdomain.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Test message"}'

# Verify environment variables
cat .env.local | grep RESEND

# Check logs
pm2 logs pathmark-web | grep contact

# Verify Resend API key is valid
# Log in to https://resend.com and check API key
```

### Issue: Images Not Loading
**Symptoms:** Broken image icons

**Solutions:**
```bash
# Check if public folder exists
ls -la public/

# Fix permissions
chmod -R 755 public/

# Verify images uploaded
ls -la public/images/
ls -la public/construction/
ls -la public/consulting/

# Restart app
pm2 restart pathmark-web
```

---

## 📞 SUPPORT CONTACTS

### Hostinger Support (24/7)
- **Live Chat**: In Hostinger panel (bottom right)
- **Email**: support@hostinger.com
- **Phone**: Check Hostinger panel for regional numbers
- **Knowledge Base**: https://support.hostinger.com

### Questions to Ask Hostinger Support:
1. "How do I configure Nginx reverse proxy for Next.js on port 3000?"
2. "Can you verify my domain DNS is pointing correctly?"
3. "How do I check Node.js version on my cloud hosting?"
4. "Can you help install PM2 globally?"
5. "How do I enable SSL certificate for my domain?"

---

## 📊 DEPLOYMENT TIMELINE

**Expected Duration:** 1-2 hours (first time)

| Step | Time | Status |
|------|------|--------|
| Gather credentials | 15 min | ⏳ |
| Upload files | 10-20 min | ⏳ |
| Configure environment | 5 min | ⏳ |
| Run deployment script | 10-15 min | ⏳ |
| Configure reverse proxy | 5-30 min* | ⏳ |
| Enable SSL | 5 min | ⏳ |
| Testing | 20-30 min | ⏳ |

*May require Hostinger support assistance

---

## ✅ FINAL CHECKLIST BEFORE GOING LIVE

### Technical Checks
- [ ] Build completes successfully
- [ ] PM2 shows app as "online"
- [ ] Port 3000 responds on server
- [ ] Nginx reverse proxy configured
- [ ] SSL certificate installed
- [ ] DNS propagation complete

### Content Checks
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Videos play correctly
- [ ] Contact form works
- [ ] Email notifications received
- [ ] Sanity CMS content displays
- [ ] PDFs download correctly

### SEO & Analytics
- [ ] Google Analytics tracking (if enabled)
- [ ] Meta tags correct
- [ ] Open Graph images load
- [ ] Favicon displays
- [ ] robots.txt accessible
- [ ] sitemap.xml accessible (if generated)

### Security Checks
- [ ] HTTPS working (not just HTTP)
- [ ] HTTP redirects to HTTPS
- [ ] Environment variables not exposed
- [ ] Security headers configured
- [ ] No sensitive data in console logs

---

## 🎉 YOU'RE READY TO DEPLOY!

### Quick Start Command Summary
```bash
# 1. SSH into server
ssh username@ssh.hostinger.com -p 65002

# 2. Navigate or clone
cd ~/public_html/Pathmark-web
# OR
git clone https://github.com/your-username/Pathmark-web.git
cd Pathmark-web

# 3. Create environment file
nano .env.local
# (paste your variables, save with CTRL+X, Y, Enter)

# 4. Deploy
bash deploy-hostinger.sh

# 5. Verify
pm2 status
pm2 logs pathmark-web

# 6. Visit your site!
# https://yourdomain.com
```

---

## 📚 DOCUMENTATION REFERENCE

- **Full Deployment Guide**: `HOSTINGER_CLOUD_DEPLOYMENT.md`
- **Deployment Checklist**: `DEPLOYMENT_CHECKLIST.md`
- **Environment Setup**: `ENVIRONMENT_VARIABLES_SETUP.md`
- **Ready Status**: `HOSTINGER_DEPLOYMENT_READY.md`
- **Sanity Setup**: `SANITY_README.md`
- **Email Setup**: `RESEND_SETUP_STEPS.md`

---

## 🔒 SECURITY REMINDERS

1. ✅ **Never commit `.env.local` to Git**
2. ✅ **Use strong passwords for SSH**
3. ✅ **Keep API keys secure**
4. ✅ **Enable 2FA on Hostinger account**
5. ✅ **Regularly backup your server**
6. ✅ **Monitor PM2 logs for suspicious activity**
7. ✅ **Keep dependencies updated**

---

**Status: ✅ DEPLOYMENT READY**  
**Build: ✅ CLEAN (No Errors, No Warnings)**  
**Optimizations: ✅ APPLIED**  
**Documentation: ✅ COMPLETE**

---

### Need Help?
1. Check `HOSTINGER_CLOUD_DEPLOYMENT.md` for detailed instructions
2. Review troubleshooting section above
3. Contact Hostinger 24/7 support
4. Check PM2 logs: `pm2 logs pathmark-web`

---

**Good luck with your deployment! 🚀**

*Last Updated: October 16, 2025*


