# Vercel Deployment Guide for Pathmark Advisory

## 🚀 Quick Deployment Steps

### 1. Fix Build Issues (Already Done ✅)
- Fixed TypeScript errors in Sanity configuration
- Fixed StudioWrapper syntax error
- Updated Sanity schema configurations

### 2. Environment Variables Setup

You need to set up these environment variables in Vercel:

#### Required Environment Variables:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

### 3. Deploy to Vercel

#### Option A: Deploy via Vercel CLI (Recommended)
```bash
# Install Vercel CLI if not already installed
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

#### Option B: Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Add environment variables in project settings
6. Deploy

### 4. Environment Variables in Vercel Dashboard
1. Go to your project dashboard
2. Click "Settings" tab
3. Click "Environment Variables"
4. Add each variable:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` (Production)
   - `NEXT_PUBLIC_SANITY_DATASET` (Production)
   - `SANITY_API_TOKEN` (Production)

### 5. Custom Domain (Optional)
1. In Vercel dashboard, go to "Domains"
2. Add your custom domain
3. Configure DNS settings as instructed

## 🔧 Build Configuration

The project is configured with:
- **Framework**: Next.js 15.4.5
- **Node Version**: 18.x
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## 📝 Pre-Deployment Checklist

- [x] Fixed TypeScript build errors
- [x] Created vercel.json configuration
- [x] Environment variables documented
- [ ] Set up Sanity project (if not done)
- [ ] Configure environment variables in Vercel
- [ ] Test deployment

## 🆘 Troubleshooting

### Common Issues:

1. **Build Fails**: Check environment variables are set correctly
2. **Sanity Connection Issues**: Verify project ID and dataset name
3. **Image Loading Issues**: Check Sanity CDN configuration

### Build Commands to Test Locally:
```bash
npm install
npm run build
npm run start
```

## 📞 Client Access

Once deployed, your client can access:
- **Main Site**: `https://your-project-name.vercel.app`
- **Admin Panel**: `https://your-project-name.vercel.app/studio`
- **Login**: `https://your-project-name.vercel.app/login`

## 🔄 Updates and Maintenance

- Push to main branch = automatic deployment
- Environment variables can be updated in Vercel dashboard
- Monitor deployment logs in Vercel dashboard

## 📊 Performance Monitoring

Vercel provides built-in:
- Performance analytics
- Error tracking
- Real-time logs
- Speed insights

---

**Next Steps:**
1. Set up your Sanity project (if needed)
2. Configure environment variables in Vercel
3. Deploy using one of the methods above
4. Share the live URL with your client

Need help? Check Vercel's documentation or contact support.
