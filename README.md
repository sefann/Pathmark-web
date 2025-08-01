# Pathmark Advisory Co. Ltd - Website

A modern, responsive website built with Next.js, TypeScript, and Tailwind CSS for Pathmark Advisory Co. Ltd.

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

## 🏗️ Project Structure

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

## 📞 Support

For support or customization requests, contact the development team.

---

**Built with ❤️ for Pathmark Advisory Co. Ltd**
