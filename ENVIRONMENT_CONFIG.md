# Environment Variables Configuration

Copy these environment variables to your `.env.local` file (create it in the root directory):

```env
# ============================================
# WORDPRESS CONFIGURATION
# ============================================
# Your WordPress site URL (include /wp-json/wp/v2 for REST API)
# Example: https://yourdomain.com/wp-json/wp/v2
NEXT_PUBLIC_WORDPRESS_API_URL=https://example.com/wp-json/wp/v2

# ============================================
# FORMSPREE CONFIGURATION (Contact Form)
# ============================================
# Get your form ID from https://formspree.io/
# After creating an account and form, you'll get an endpoint like:
# https://formspree.io/f/YOUR_FORM_ID
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# ============================================
# GOOGLE ANALYTICS (Optional)
# ============================================
# Get your GA4 Measurement ID from Google Analytics
# Format: G-XXXXXXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=

# ============================================
# SITE CONFIGURATION (Optional)
# ============================================
NEXT_PUBLIC_SITE_URL=https://pathmarkadvisory.com
NEXT_PUBLIC_SITE_NAME=Pathmark Advisory
```

## Important Notes

1. **Create .env.local**: This file should be in your project root and NEVER committed to Git
2. **WordPress Setup**: Make sure your WordPress site has the REST API enabled (it's on by default)
3. **Formspree Setup**: 
   - Sign up at https://formspree.io/
   - Create a new form
   - Copy the form endpoint URL
4. **Build Process**: Environment variables are baked into the build, so you must rebuild after changing them

## For Hostinger Deployment

Since this is a static site, environment variables are compiled during build time:
- You DON'T need to configure environment variables on the Hostinger server
- Just make sure your `.env.local` is set correctly BEFORE building
- Run `npm run build` locally
- Upload the `out` folder contents to Hostinger


