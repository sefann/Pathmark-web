# Hostinger Cloud Deployment Checklist

Use this checklist to ensure you have everything ready before deploying.

## ✅ Pre-Deployment Checklist

### 1. Hostinger Account Setup
- [ ] Cloud hosting plan activated
- [ ] Domain connected to hosting
- [ ] SSH access enabled
- [ ] SSH credentials saved (host, port, username, password)

### 2. Environment Variables Ready
- [ ] Sanity Project ID (`NEXT_PUBLIC_SANITY_PROJECT_ID`)
- [ ] Sanity Dataset (`NEXT_PUBLIC_SANITY_DATASET`)
- [ ] Sanity API Token (`SANITY_API_TOKEN`)
- [ ] Resend API Key (`RESEND_API_KEY`)
- [ ] Contact email addresses configured
- [ ] Google Analytics ID (optional)
- [ ] Site URL configured

### 3. Sanity CMS Setup
- [ ] Sanity project created
- [ ] Content schema deployed
- [ ] CORS origins configured for your domain
- [ ] API token generated with proper permissions
- [ ] Test content added

### 4. Email Service (Resend)
- [ ] Resend account created
- [ ] API key generated
- [ ] Domain verified (for better deliverability)
- [ ] Contact form tested locally

### 5. Local Testing
- [ ] App builds successfully (`npm run build`)
- [ ] No build errors or warnings
- [ ] All pages load correctly
- [ ] Contact form works
- [ ] Insights page loads
- [ ] All images display
- [ ] Mobile responsive design verified

### 6. Files Ready for Upload
- [ ] All source code files
- [ ] `package.json` and `package-lock.json`
- [ ] Environment variables documented
- [ ] `.gitignore` reviewed (don't upload `node_modules`, `.next`)
- [ ] Public assets (images, PDFs, etc.)

## 📋 Deployment Steps

### Step 1: Prepare Environment Variables
```bash
# Create a file named: hostinger-env.txt
# Copy this template and fill in your actual values:

NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
CONTACT_EMAIL_TO=contact@pathmarkadvisory.com
CONTACT_EMAIL_FROM=noreply@pathmarkadvisory.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NODE_ENV=production
```
**Save this file locally - you'll copy/paste into `.env.local` on the server**

### Step 2: Upload Files
Choose one method:

**Option A: Git (Recommended)**
- [ ] Push code to GitHub/GitLab
- [ ] Clone on server via SSH

**Option B: FTP Upload**
- [ ] Connect via FileZilla or Hostinger File Manager
- [ ] Upload all files to `~/public_html/Pathmark-web/`
- [ ] Don't upload: `node_modules/`, `.next/`, `.git/` (if large)

### Step 3: SSH Deployment
- [ ] Connect to server via SSH
- [ ] Navigate to project directory
- [ ] Create `.env.local` file
- [ ] Run deployment script: `bash deploy-hostinger.sh`

### Step 4: Configure Server
- [ ] PM2 process running
- [ ] Nginx/Apache reverse proxy configured
- [ ] Port 3000 forwarding to domain

### Step 5: SSL Certificate
- [ ] SSL certificate installed
- [ ] HTTPS working
- [ ] HTTP redirects to HTTPS

### Step 6: DNS Configuration
- [ ] Domain A record points to server IP
- [ ] WWW subdomain configured
- [ ] DNS propagation complete (check: https://dnschecker.org)

## 🧪 Post-Deployment Testing

### Functionality Tests
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] About page displays team members
- [ ] Services pages load
- [ ] Industries page loads
- [ ] Portfolio page displays
- [ ] Insights page shows articles
- [ ] Contact form submits successfully
- [ ] Contact form sends email
- [ ] All images load
- [ ] Videos play (if any)
- [ ] PDFs downloadable (brochures)

### Performance Tests
- [ ] Page load speed acceptable
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Google Analytics tracking (if enabled)
- [ ] Cookie consent works

### Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

## 🔧 Configuration Files Checklist

### Required Files on Server
```
Pathmark-web/
├── .env.local                 ✅ Create on server
├── package.json               ✅ Upload
├── package-lock.json          ✅ Upload
├── next.config.ts             ✅ Upload
├── tsconfig.json              ✅ Upload
├── tailwind.config.ts         ✅ Upload
├── postcss.config.js          ✅ Upload
├── src/                       ✅ Upload entire folder
├── public/                    ✅ Upload entire folder
├── node_modules/              ❌ Will be created by npm install
└── .next/                     ❌ Will be created by build
```

## 🚨 Common Issues & Solutions

### Build Fails
- Check Node.js version (needs 18+)
- Verify all dependencies in package.json
- Check for TypeScript errors
- Ensure environment variables are set

### App Won't Start
- Check PM2 logs: `pm2 logs pathmark-web`
- Verify port 3000 is available
- Check .env.local exists and is correct
- Ensure build completed successfully

### Domain Not Loading
- Verify DNS settings
- Check Nginx/Apache configuration
- Ensure reverse proxy is set up
- Check SSL certificate

### Images Not Loading
- Verify public folder uploaded
- Check file permissions: `chmod -R 755 public`
- Check Next.js image optimization settings

### Contact Form Not Working
- Verify Resend API key
- Check email addresses in .env.local
- Test API route: `https://yourdomain.com/api/contact`
- Check server logs for errors

## 📞 Support Resources

### Hostinger Support
- **Live Chat**: Available 24/7 in Hostinger panel
- **Email**: support@hostinger.com
- **Knowledge Base**: https://support.hostinger.com

### Things to Ask Hostinger Support
1. "How do I configure Nginx reverse proxy for Next.js on port 3000?"
2. "Can you help me enable SSL certificate for my domain?"
3. "How do I check if Node.js is installed on my cloud hosting?"

### Project Documentation
- `HOSTINGER_CLOUD_DEPLOYMENT.md` - Detailed deployment guide
- `ENVIRONMENT_VARIABLES_SETUP.md` - Environment setup
- `SANITY_README.md` - Sanity CMS setup
- `RESEND_SETUP_STEPS.md` - Email service setup

## 🎯 Quick Commands Reference

```bash
# SSH Connect
ssh username@ssh.hostinger.com -p 65002

# Navigate to project
cd ~/public_html/Pathmark-web

# Deploy
bash deploy-hostinger.sh

# View logs
pm2 logs pathmark-web

# Restart app
pm2 restart pathmark-web

# Monitor app
pm2 monit

# Check status
pm2 list
```

## ✅ Final Verification

Before considering deployment complete:
- [ ] Website accessible via domain
- [ ] HTTPS working
- [ ] All pages functional
- [ ] Contact form tested and emails received
- [ ] No console errors
- [ ] Mobile version works
- [ ] Google Analytics tracking (if enabled)
- [ ] PM2 configured to auto-restart on reboot

---

## 🎉 Deployment Complete!

Once all items are checked, your Pathmark Advisory website is live!

**Remember to:**
- Keep your environment variables secure
- Regularly backup your server
- Monitor PM2 logs for errors
- Update dependencies periodically
- Test after any changes

Good luck! 🚀

