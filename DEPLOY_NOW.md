# 🚀 Pathmark Advisory - DEPLOY NOW!

**Everything is ready!** Follow these exact commands step-by-step.

---

## ✅ ALL CREDENTIALS READY

- ✅ Sanity CMS configured
- ✅ Resend Email configured  
- ✅ Domain: www.pathmarkadvisory.com
- ✅ SSH Access: Ready

---

## 📋 STEP-BY-STEP DEPLOYMENT

### **STEP 1: Connect to Hostinger via SSH**

Open PowerShell and run:

```powershell
ssh -p 65002 u295304651@72.60.21.164
```

**Enter password when prompted:** `@ssh.COM2025`

✅ You should now be connected to your Hostinger server!

---

### **STEP 2: Navigate to web directory**

```bash
cd ~/public_html
```

---

### **STEP 3: Upload Your Code**

**Option A: Using Git (Recommended)**

```bash
# Clone your repository
git clone https://github.com/YOUR_USERNAME/Pathmark-web.git

# Navigate into the project
cd Pathmark-web
```

**Option B: Using FTP (if not using Git)**
- Use FileZilla or Hostinger File Manager
- Upload all files EXCEPT: `node_modules`, `.next`, `.git`
- Upload to: `~/public_html/Pathmark-web/`
- Then SSH in and run: `cd ~/public_html/Pathmark-web`

---

### **STEP 4: Create Environment Variables File**

```bash
nano .env.local
```

**Paste this EXACT content:**

```env
# Pathmark Advisory - Production Environment Variables

# ============================================
# SANITY CMS CONFIGURATION
# ============================================
NEXT_PUBLIC_SANITY_PROJECT_ID=ch79hnv9
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk2XIwNKnU3w4lLr7AZutI4HtrgWmoPDr6vUyKiUgMOvSGUStn0qKAMpBRDyFqvYnOrUsmEzCoFaJWNo3dDxxTRHBQypfKmN7JRQO1NnNzwcFMJAjUMsP1SmOLzKO7Xln9v37BQzeyctBFPLgFfIEOZXAmor1m74IwEajZuKvQC9q1YP47VN

# ============================================
# EMAIL SERVICE (RESEND)
# ============================================
RESEND_API_KEY=re_W8u9QgT5_EmDoVr7XKLNbS2Qja2fCYQnP
CONTACT_EMAIL_TO=contact@pathmarkadvisory.com
CONTACT_EMAIL_FROM=Pathmark Advisory <noreply@pathmarkadvisory.com>

# ============================================
# GOOGLE ANALYTICS (OPTIONAL)
# ============================================
NEXT_PUBLIC_GA_MEASUREMENT_ID=

# ============================================
# SITE CONFIGURATION
# ============================================
NEXT_PUBLIC_SITE_URL=https://www.pathmarkadvisory.com
NODE_ENV=production
```

**Save the file:**
1. Press `CTRL + X`
2. Press `Y` (yes to save)
3. Press `Enter` (confirm filename)

**Verify it was saved:**
```bash
cat .env.local
```

---

### **STEP 5: Make Deployment Script Executable**

```bash
chmod +x deploy-hostinger.sh
```

---

### **STEP 6: Run Deployment Script**

```bash
bash deploy-hostinger.sh
```

**This will:**
- ✅ Check Node.js installation
- ✅ Install all dependencies (`npm install`)
- ✅ Build the application (`npm run build`)
- ✅ Install PM2 process manager
- ✅ Start your app on port 3000

**⏱️ This will take 5-10 minutes. Be patient!**

---

### **STEP 7: Verify App is Running**

```bash
# Check PM2 status
pm2 status

# View logs
pm2 logs pathmark-web

# Test locally on server
curl http://localhost:3000
```

✅ If you see HTML output, your app is running!

---

### **STEP 8: Configure Nginx Reverse Proxy**

Your app is running on port 3000, but needs to be accessible via your domain.

**Contact Hostinger Support:**

1. Go to Hostinger Panel: https://hpanel.hostinger.com
2. Open **Live Chat** (24/7 support)
3. Send this message:

```
Hello! I've deployed a Next.js application on my cloud hosting that's running on port 3000.

Could you please configure the Nginx reverse proxy to point my domain www.pathmarkadvisory.com to localhost:3000?

My SSH username is: u295304651
Application port: 3000
Domain: www.pathmarkadvisory.com

Thank you!
```

**⏱️ Support usually responds within 5-10 minutes**

---

### **STEP 9: Enable SSL Certificate**

**In Hostinger Panel:**

1. Go to **Hosting** → **SSL**
2. Select your domain: `www.pathmarkadvisory.com`
3. Click **Install SSL** (Free Let's Encrypt)
4. Wait 5-10 minutes for activation

✅ Your site will now have HTTPS!

---

### **STEP 10: Test Your Website**

Visit: **https://www.pathmarkadvisory.com**

**Test Checklist:**
- [ ] Homepage loads
- [ ] Navigation works
- [ ] All service pages load
- [ ] Contact form submits
- [ ] Check email received
- [ ] Insights page shows articles
- [ ] Images and videos load
- [ ] PDFs download (brochures)
- [ ] Mobile responsive
- [ ] No console errors (F12)

---

## 🎉 DEPLOYMENT COMPLETE!

Your website is now live at: **https://www.pathmarkadvisory.com**

---

## 🔧 USEFUL COMMANDS (After Deployment)

**SSH Connect:**
```bash
ssh -p 65002 u295304651@72.60.21.164
```

**Navigate to project:**
```bash
cd ~/public_html/Pathmark-web
```

**Check app status:**
```bash
pm2 status
```

**View logs:**
```bash
pm2 logs pathmark-web
```

**Restart app:**
```bash
pm2 restart pathmark-web
```

**Stop app:**
```bash
pm2 stop pathmark-web
```

**Update app (after code changes):**
```bash
cd ~/public_html/Pathmark-web
git pull origin main
npm install
npm run build
pm2 restart pathmark-web
```

---

## 🚨 TROUBLESHOOTING

### App won't build?
```bash
# Check Node.js version (need 18+)
node -v

# Clear and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### App won't start?
```bash
# Check logs for errors
pm2 logs pathmark-web --lines 50

# Restart
pm2 restart pathmark-web
```

### Domain not loading?
- Wait for DNS propagation (up to 48 hours)
- Check DNS: https://dnschecker.org
- Verify Nginx proxy configured (contact support)
- Check SSL certificate active

### Port 3000 in use?
```bash
# Find process using port 3000
lsof -i :3000

# Kill it
kill -9 $(lsof -t -i:3000)

# Restart app
pm2 restart pathmark-web
```

---

## 📞 SUPPORT CONTACTS

**Hostinger Support:**
- Live Chat: 24/7 in Hostinger panel
- Email: support@hostinger.com

**What to ask for help:**
1. "Configure Nginx reverse proxy for Next.js on port 3000"
2. "Enable SSL certificate"
3. "Check Node.js 18+ installed"
4. "Help with DNS configuration"

---

## 🔐 SECURITY REMINDERS

- ✅ `.env.local` is NOT in Git (never commit it!)
- ✅ Keep API keys secure
- ✅ Change SSH password regularly
- ✅ Enable 2FA on Hostinger account
- ✅ Regular backups

**Create backup:**
```bash
cd ~/public_html
tar -czf pathmark-backup-$(date +%Y%m%d).tar.gz Pathmark-web/
```

---

## 📧 EMAIL DOMAIN VERIFICATION (Important!)

For emails to work properly from your domain:

1. Go to: https://resend.com/domains
2. Click **Add Domain**
3. Enter: `pathmarkadvisory.com`
4. Copy DNS records shown
5. Add these DNS records in your domain provider:
   - **TXT record** for verification
   - **MX records** for email
   - **DKIM records** for authentication
6. Wait for verification (5-30 minutes)

**Until verified:** Emails will send from Resend sandbox but contact form will work!

---

## 🎯 QUICK START

**Ready to deploy?** Follow these 6 commands:

```bash
# 1. Connect to server
ssh -p 65002 u295304651@72.60.21.164

# 2. Navigate to web directory
cd ~/public_html

# 3. Clone repository (or upload via FTP)
git clone https://github.com/YOUR_USERNAME/Pathmark-web.git
cd Pathmark-web

# 4. Create .env.local (paste the credentials from above)
nano .env.local

# 5. Make script executable and run deployment
chmod +x deploy-hostinger.sh
bash deploy-hostinger.sh

# 6. Contact support for Nginx proxy + Enable SSL
```

---

**Generated:** October 18, 2025  
**Domain:** www.pathmarkadvisory.com  
**Status:** ✅ READY TO DEPLOY

🚀 **Let's deploy!**

