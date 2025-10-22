# Hostinger Static Site Deployment Guide

This guide will walk you through deploying your converted Next.js static site to Hostinger Cloud hosting.

## 📋 Prerequisites

Before you begin, ensure you have:
- ✅ Node.js and npm installed on your local machine
- ✅ A Hostinger Cloud hosting account
- ✅ FTP/SFTP credentials from Hostinger
- ✅ WordPress site set up for blog posts (if using blog feature)
- ✅ Formspree account set up for contact form

## 🔧 Step 1: Configure Environment Variables

1. Create a `.env.local` file in your project root:

```bash
# Copy from ENVIRONMENT_CONFIG.md
cp ENVIRONMENT_CONFIG.md .env.local
# Then edit .env.local with your actual values
```

2. Fill in your actual values:

```env
# Your WordPress REST API URL
NEXT_PUBLIC_WORDPRESS_API_URL=https://yourdomain.com/wp-json/wp/v2

# Your Formspree form endpoint
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# Optional: Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 🏗️ Step 2: Build the Static Site

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the production site:**
   ```bash
   npm run build
   ```

   This will:
   - Create an `out` folder with all static files
   - Pre-render all pages
   - Optimize images and assets
   - Bake in your environment variables

3. **Verify the build:**
   - Check that the `out` folder exists
   - Look for `index.html`, `_next` folder, and other assets
   - The `out` folder should be around 5-20 MB depending on your content

## 📤 Step 3: Upload to Hostinger

### Option A: Using File Manager (Easy)

1. Log in to your Hostinger control panel
2. Navigate to **File Manager**
3. Go to `public_html` directory (or your domain's root folder)
4. **Delete** old files (if any) - backup first!
5. **Upload** all contents from the `out` folder
   - Select all files inside `out` (not the folder itself)
   - Use the upload button
   - Wait for upload to complete

### Option B: Using FTP/SFTP (Recommended)

1. **Get your FTP credentials:**
   - Hostinger Control Panel → Files → FTP Accounts
   - Note: Host, Username, Password, Port

2. **Connect using FileZilla or similar:**
   ```
   Host: ftp.yourdomain.com (or provided by Hostinger)
   Username: your-ftp-username
   Password: your-ftp-password
   Port: 21 (FTP) or 22 (SFTP)
   ```

3. **Navigate to your site's directory:**
   - Usually `public_html` or `domains/yourdomain.com/public_html`

4. **Upload the contents:**
   - Open the `out` folder on your local machine
   - Select ALL files and folders inside `out`
   - Drag and drop to the remote `public_html` folder
   - Wait for upload to complete (may take 5-15 minutes)

### Option C: Using SSH/SCP (Advanced)

```bash
# Replace with your actual values
scp -r out/* username@yourdomain.com:~/public_html/
```

## 🌐 Step 4: Configure Domain Settings

1. **Set up .htaccess** (for clean URLs and redirects)

Create/update `.htaccess` in your `public_html`:

```apache
# Enable Rewrite Engine
RewriteEngine On

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle trailing slashes (Next.js static export uses them)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_URI} !(.*)/$
RewriteRule ^(.*)$ $1/ [L,R=301]

# Serve index.html for directories
DirectoryIndex index.html

# Handle 404 errors
ErrorDocument 404 /404.html

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

## ✅ Step 5: Verify Deployment

Visit your website and check:

- ✅ Home page loads correctly
- ✅ All navigation links work
- ✅ Blog posts load from WordPress
- ✅ Contact form submits to Formspree
- ✅ Images display properly
- ✅ Responsive design works on mobile
- ✅ Check browser console for errors (F12)

## 🔄 Step 6: Future Updates

When you need to update your site:

1. **Make changes locally**
2. **Test with:** `npm run dev`
3. **Rebuild:** `npm run build`
4. **Upload the new `out` folder contents** (overwrite existing files)

**Note:** You DON'T need to rebuild for content changes in WordPress - those are fetched dynamically by the client.

## 🐛 Troubleshooting

### Issue: Pages return 404 errors

**Solution:** 
- Make sure you uploaded the CONTENTS of the `out` folder, not the folder itself
- Check that `index.html` is in the root of `public_html`
- Verify `.htaccess` is configured correctly

### Issue: WordPress posts not loading

**Solution:**
- Check that `NEXT_PUBLIC_WORDPRESS_API_URL` is correct in `.env.local`
- Verify your WordPress REST API is accessible: `https://yourdomain.com/wp-json/wp/v2/posts`
- Check browser console for CORS errors
- Make sure WordPress REST API is enabled (it's on by default)

### Issue: Contact form not working

**Solution:**
- Verify `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is correct
- Check Formspree dashboard for submissions
- Make sure Formspree form is active (not in test mode)
- Check browser console for errors

### Issue: Images not displaying

**Solution:**
- Verify image paths are correct
- Check that `images.unoptimized` is set to `true` in `next.config.ts`
- Make sure images were uploaded to the server
- Check file permissions (should be 644 for files, 755 for directories)

### Issue: Styles not loading

**Solution:**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check that `_next` folder was uploaded
- Verify `.htaccess` isn't blocking assets
- Check file permissions

### Issue: "Client-side exception" errors

**Solution:**
- These usually indicate missing environment variables during build
- Rebuild with correct `.env.local` values
- Re-upload the new `out` folder

## 📱 WordPress Configuration

### Setting up WordPress for your blog:

1. **Install WordPress** on a subdomain (e.g., `blog.yourdomain.com`) or separate hosting
2. **Enable REST API** (enabled by default)
3. **Install useful plugins:**
   - Yoast SEO (for SEO optimization)
   - Enable Media Replace (for managing images)
   - WP REST API Controller (for more control)

4. **Test your API:**
   ```
   https://yourdomain.com/wp-json/wp/v2/posts
   ```
   Should return JSON with your posts

5. **Create posts** as usual in WordPress admin
6. **Featured images** will automatically be used in your Next.js site

## 📧 Formspree Configuration

1. **Sign up** at https://formspree.io/
2. **Create a new form**
3. **Configure settings:**
   - Set form name: "Pathmark Contact Form"
   - Add notification email
   - Enable spam protection (recommended)
4. **Copy the endpoint URL** (looks like: `https://formspree.io/f/xyzabc123`)
5. **Add to `.env.local`** and rebuild

## 🚀 Performance Tips

1. **Enable Cloudflare** (Hostinger offers it) for:
   - CDN caching
   - DDoS protection
   - SSL certificate

2. **Optimize images** before uploading to WordPress:
   - Use WebP format when possible
   - Compress images (TinyPNG, ImageOptim)
   - Reasonable dimensions (max 1920px wide)

3. **Regular cache clearing**:
   - Clear Cloudflare cache after updates
   - Clear browser cache when testing

## 📊 Monitoring

- **Formspree Dashboard:** Check form submissions
- **Google Analytics:** Monitor site traffic (if configured)
- **WordPress Admin:** Manage blog content
- **Hostinger Control Panel:** Check server resources

## 🔐 Security Checklist

- ✅ WordPress is updated to latest version
- ✅ Strong passwords for WordPress admin
- ✅ WordPress login URL is protected (use plugin like WPS Hide Login)
- ✅ SSL certificate is active (HTTPS)
- ✅ Regular backups configured in Hostinger
- ✅ `.env.local` is in `.gitignore` and not committed

## 📞 Support

- **Hostinger Support:** 24/7 chat support available
- **WordPress Issues:** WordPress.org forums or your hosting support
- **Formspree Issues:** Formspree support or documentation
- **Next.js Questions:** Next.js documentation

---

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# The static files will be in the 'out' folder
# Upload contents of 'out' to Hostinger public_html
```

Good luck with your deployment! 🎉


