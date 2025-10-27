# Pathmark Advisory Co. Website

This repository contains the source code for the official website of **Pathmark Advisory Co. Ltd**, a multidisciplinary consulting and project execution company based in Abuja, Nigeria.

**Live Site (Coming Soon)**: [www.pathmarkadvisory.com](https://www.pathmarkadvisory.com)

---

## Project Overview

Pathmark Advisory provides professional services across sectors including Energy, Construction, Technology, Finance, and Public Sector Consulting. This website aims to:

- Establish a modern, high-performing online presence
- Highlight Pathmark's services, team, and portfolio
- Drive engagement through interactive animations and clear CTAs
- Allow for dynamic content management (CMS optional)

---

## Tech Stack

- **Frontend:** Next.js (React-based), Tailwind CSS  
- **Backend (optional):** WordPress or Headless CMS (Strapi)  
- **Animations:** GSAP or Framer Motion  
- **Forms:** EmailJS, Formspree, or WPForms  
- **Media CDN:** Cloudinary  
- **Hosting:** Hostinger Premium + SSL  
- **Deployment:** Git/FTP to Hostinger, Cloudflare CDN  

---

## Site Structure

- `/` — Home (video hero, tagline, animated service blocks, CTAs, motion sections)  
- `/about` — Company intro, leadership messages, timeline, vision, values  
- `/services` — 6 core service areas with animations and tabs  
- `/industries` — Interactive sector showcase  
- `/team` — Team grid with modals, leadership highlights  
- `/careers` — Job listings, form upload, culture highlights  
- `/portfolio` — Filterable project showcase with lightbox  
- `/contact` — Contact form, Google Map, company info  

---

## UI/UX Guidelines

- Mobile-first design with Tailwind CSS  
- Motion & interactivity via GSAP or Framer Motion  
- Clean sans-serif fonts (Inter, Poppins)  
- Corporate blue, gray, white, and soft orange accents  
- Accessibility with semantic HTML and readable contrasts  
- Optimized for Lighthouse Score > 90  

---

## Functional Requirements

- HTTPS with SSL  
- Spam-protected forms (honeypot or reCAPTCHA)  
- SEO-ready (meta tags, Open Graph, alt attributes)  
- Social media previews for Facebook, Twitter, LinkedIn  
- Responsive design for iOS, Android, Desktop  
- Optional CMS for managing jobs, team, services  

---

## File Structure (Next.js)

```
pathmark-advisory/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx        # Home page
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── insights/       # Insights/Blog page
│   │   └── layout.tsx      # Root layout
│   ├── components/         # Reusable components
│   │   └── Layout/         # Header & Footer
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
└── package.json           # Dependencies
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Local Development

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to `http://localhost:3000`

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run start
```

## 🌐 Deployment Options

### 1. Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### 2. Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=out
```

### 3. Static Export (for any host)
```bash
# Add to next.config.js:
# output: 'export'

npm run build
# Upload the 'out' folder to your hosting provider
```

---

## 🎨 Features

- ✅ Responsive design (mobile-first)
- ✅ Modern animations with Framer Motion
- ✅ SEO optimized
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Contact form ready for integration
- ✅ Blog/Insights section
- ✅ Professional UI/UX

## 🔧 Customization

### Brand Colors
Update colors in `tailwind.config.ts`:
```javascript
colors: {
  primary: '#00477f',  // Pathmark Blue
  accent: '#ff5757',   // Pathmark Red
}
```

### Contact Information
Update contact details in:
- `src/components/Layout/Footer.tsx`
- `src/app/contact/page.tsx`

### Content
- Company information: `src/app/about/page.tsx`
- Services: Update service cards in `src/app/page.tsx`
- Insights: Add articles in `src/app/insights/page.tsx`

## 📧 Form Integration

The contact form is ready for integration with:
- EmailJS
- Formspree
- Netlify Forms
- Custom API endpoint

## 🗺️ Google Maps

Replace the map placeholder in `src/app/contact/page.tsx` with:
```jsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
```

## 📱 Performance

- Lighthouse Score: 90+
- Mobile-first responsive design
- Optimized images and assets
- Fast loading times

## 🔒 Security

- HTTPS ready
- XSS protection
- CSRF protection
- Secure headers

---

## Deployment Notes

- Deploy via FTP or Git to Hostinger  
- Connect domain: www.pathmarkadvisory.com  
- Set up Cloudflare CDN for caching  
- Configure email forwarding: contact@pathmarkadvisory.com  
- Integrate analytics (Google Analytics, Meta Pixel optional)  

---

## Assets & Content

- Company profile PDF (provided by client)  
- Logos and brand colors (from company profile)  
- Stock and industry-specific images/videos (via Cloudinary)  

---

## Status

Website is under active development.

---

## 📞 Support

For support or customization requests, contact the development team.

---

## License

Private Repository — all rights reserved by Pathmark Advisory Co. Ltd.

---

## Contributors

Built and maintained by [Stephen Iortyer].

---

**Built with ❤️ for Pathmark Advisory Co. Ltd**
