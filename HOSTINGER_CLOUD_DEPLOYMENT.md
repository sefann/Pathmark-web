# Hostinger Cloud Hosting Deployment Guide

This guide will help you deploy your Pathmark Advisory Next.js application to Hostinger Cloud Hosting.

## Prerequisites

✅ Hostinger Cloud Hosting plan activated  
✅ SSH access enabled  
✅ Node.js support (Cloud hosting includes this)  
✅ Domain connected to your hosting

## Step 1: Prepare Your Environment Variables

Before deployment, gather all your environment variables. You'll need:

### Required Environment Variables

```bash
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token

# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL_TO=your_email@pathmarkadvisory.com
CONTACT_EMAIL_FROM=noreply@yourdomain.com

# Google Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NODE_ENV=production
```

## Step 2: Access Your Hostinger Cloud Hosting

1. Log in to your Hostinger account
2. Go to **Hosting** → **Cloud Hosting**
3. Click on your hosting plan
4. Access **SSH Access** section
5. Note your SSH credentials:
   - **SSH Host**: (e.g., ssh.hostinger.com)
   - **SSH Port**: (usually 22 or 65002)
   - **Username**: (your hosting username)
   - **Password**: (create/reset if needed)

## Step 3: Connect via SSH

### Using Terminal (Mac/Linux) or PowerShell/CMD (Windows)

```bash
ssh username@ssh.hostinger.com -p 65002
```

Replace:
- `username` with your SSH username
- Port number with your actual port

Enter your password when prompted.

## Step 4: Install Node.js (If Not Installed)

Check if Node.js is installed:
```bash
node -v
npm -v
```

If not installed or version is too old, install Node.js 18 or higher:
```bash
# Using nvm (Node Version Manager) - Recommended
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18
```

## Step 5: Upload Your Application

### Option A: Using Git (Recommended)

1. **Navigate to your public_html directory:**
```bash
cd ~/public_html
```

2. **Clone your repository:**
```bash
# If using GitHub
git clone https://github.com/your-username/Pathmark-web.git
cd Pathmark-web

# Or if you have your code elsewhere
# Upload via FTP to a folder first
```

### Option B: Using FTP

1. **Use FileZilla or Hostinger File Manager**
2. **Upload all project files** to `~/public_html/Pathmark-web/`
3. **Connect via SSH** and navigate to the folder:
```bash
cd ~/public_html/Pathmark-web
```

## Step 6: Set Up Environment Variables

Create a `.env.local` file in your project directory:

```bash
nano .env.local
```

Paste your environment variables:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL_TO=contact@pathmarkadvisory.com
CONTACT_EMAIL_FROM=noreply@pathmarkadvisory.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NODE_ENV=production
```

**Save and exit:**
- Press `CTRL + X`
- Press `Y` to confirm
- Press `Enter`

## Step 7: Install Dependencies and Build

```bash
# Install dependencies
npm install

# Build the application
npm run build
```

This may take 5-10 minutes depending on your server.

## Step 8: Install PM2 (Process Manager)

PM2 keeps your Next.js app running continuously:

```bash
npm install -g pm2
```

## Step 9: Start Your Application

```bash
# Start the app with PM2
pm2 start npm --name "pathmark-web" -- start

# Save the PM2 process list
pm2 save

# Set PM2 to start on server reboot
pm2 startup
```

Copy and run the command that PM2 outputs after `pm2 startup`.

## Step 10: Configure Nginx/Apache as Reverse Proxy

### For Nginx (Most Cloud Hosting)

1. **Create/Edit Nginx configuration:**

Contact Hostinger support or access your Nginx config:

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

2. **Restart Nginx:**
```bash
sudo systemctl restart nginx
```

### If You Need Hostinger Support

Hostinger support can help configure the reverse proxy. Tell them:
- "I need to configure reverse proxy for Next.js app running on port 3000"
- Show them this guide

## Step 11: SSL Certificate (HTTPS)

1. Access **Hostinger Panel** → **SSL**
2. Enable **Free SSL Certificate** for your domain
3. It will automatically configure HTTPS

## Step 12: Verify Deployment

1. Visit your domain: `https://yourdomain.com`
2. Test all pages and features
3. Check contact form submission
4. Verify Sanity CMS content loads

## Useful PM2 Commands

```bash
# View running apps
pm2 list

# View logs
pm2 logs pathmark-web

# Restart app
pm2 restart pathmark-web

# Stop app
pm2 stop pathmark-web

# Monitor app
pm2 monit
```

## Updating Your Application

When you make changes:

```bash
# Pull latest changes (if using Git)
cd ~/public_html/Pathmark-web
git pull origin main

# Rebuild
npm install
npm run build

# Restart with PM2
pm2 restart pathmark-web
```

## Troubleshooting

### App won't start
```bash
# Check logs
pm2 logs pathmark-web

# Check if port 3000 is in use
lsof -i :3000

# Kill process on port 3000 if needed
kill -9 $(lsof -t -i:3000)
```

### Build errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Environment variables not loading
```bash
# Verify .env.local exists
cat .env.local

# Restart PM2
pm2 restart pathmark-web
```

### Permission issues
```bash
# Fix permissions
chmod -R 755 ~/public_html/Pathmark-web
```

## Performance Optimization

1. **Enable caching** in Nginx config
2. **Compress assets** (Next.js does this automatically)
3. **Use CDN** for static assets (optional)
4. **Monitor with PM2**: `pm2 monit`

## Backup Strategy

```bash
# Create backup
cd ~/public_html
tar -czf pathmark-backup-$(date +%Y%m%d).tar.gz Pathmark-web/

# Download backup via FTP or keep on server
```

## Support

- **Hostinger Support**: Contact via live chat for server configuration help
- **Next.js Issues**: Check logs with `pm2 logs pathmark-web`
- **Application Issues**: Check browser console and server logs

---

## Quick Start Summary

```bash
# 1. SSH into server
ssh username@ssh.hostinger.com -p 65002

# 2. Navigate to directory
cd ~/public_html/Pathmark-web

# 3. Install and build
npm install
npm run build

# 4. Start with PM2
pm2 start npm --name "pathmark-web" -- start
pm2 save

# 5. Configure Nginx reverse proxy (contact Hostinger support if needed)

# 6. Enable SSL in Hostinger panel

# 7. Visit your site!
```

Good luck with your deployment! 🚀

