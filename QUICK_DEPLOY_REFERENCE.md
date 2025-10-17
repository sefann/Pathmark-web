# 🚀 Hostinger Deployment - Quick Reference Card

**Print this or keep it open during deployment!**

---

## 📋 CREDENTIALS NEEDED

```
Sanity CMS:
├─ Project ID: _________________
├─ Dataset: production
└─ API Token: _________________

Resend Email:
├─ API Key (re_*): _________________
├─ From Email: _________________
└─ To Email: _________________

Hostinger:
├─ SSH Host: _________________
├─ SSH Port: _________________
├─ Username: _________________
└─ Password: _________________

Domain: _________________
```

---

## 🎯 5-STEP DEPLOYMENT

### 1️⃣ SSH Connect
```bash
ssh username@ssh.hostinger.com -p 65002
```

### 2️⃣ Upload Code
```bash
# Git method
cd ~/public_html
git clone https://github.com/your-username/Pathmark-web.git
cd Pathmark-web

# OR use FTP to upload files
```

### 3️⃣ Create Environment File
```bash
nano .env.local
```
**Paste this (with YOUR values):**
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token
RESEND_API_KEY=re_your_key
CONTACT_EMAIL_TO=contact@pathmarkadvisory.com
CONTACT_EMAIL_FROM=Pathmark Advisory <noreply@pathmarkadvisory.com>
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NODE_ENV=production
```
**Save:** `CTRL+X` → `Y` → `Enter`

### 4️⃣ Deploy
```bash
chmod +x deploy-hostinger.sh
bash deploy-hostinger.sh
```

### 5️⃣ Configure Server
**Contact Hostinger Support:**
> "Please configure Nginx reverse proxy for my Next.js app 
> running on port 3000 to my domain: yourdomain.com"

**Enable SSL:**
- Hostinger Panel → SSL → Install Free SSL

---

## ✅ VERIFY IT WORKS

```bash
# Check app status
pm2 status

# View logs
pm2 logs pathmark-web

# Test on server
curl http://localhost:3000

# Visit your site
https://yourdomain.com
```

---

## 🔧 ESSENTIAL PM2 COMMANDS

```bash
pm2 status                # Check status
pm2 logs pathmark-web     # View logs
pm2 restart pathmark-web  # Restart app
pm2 monit                 # Monitor resources
```

---

## 🚨 QUICK FIXES

**App won't start?**
```bash
pm2 logs pathmark-web --lines 50
pm2 restart pathmark-web
```

**Build failed?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Port 3000 in use?**
```bash
lsof -i :3000
kill -9 $(lsof -t -i:3000)
pm2 restart pathmark-web
```

**Check environment variables?**
```bash
cat .env.local
```

---

## 📞 SUPPORT

**Hostinger 24/7:**
- Live Chat in panel
- support@hostinger.com

**What to ask:**
1. "Configure Nginx reverse proxy for Next.js on port 3000"
2. "Enable SSL certificate"
3. "Check Node.js 18+ installed"

---

## ✅ TEST CHECKLIST

After deployment:
- [ ] Homepage loads
- [ ] All pages accessible
- [ ] Contact form works
- [ ] Email received
- [ ] Images display
- [ ] Mobile responsive
- [ ] HTTPS works
- [ ] No console errors

---

## 📚 FULL DOCS

- `HOSTINGER_PREFLIGHT_CHECKLIST.md` - Complete checklist
- `HOSTINGER_CLOUD_DEPLOYMENT.md` - Detailed guide
- `DEPLOYMENT_CHECKLIST.md` - Full verification

---

**Status: ✅ READY**  
**Build: ✅ SUCCESS**  
**Last Check: Oct 16, 2025**

🎉 You got this!


