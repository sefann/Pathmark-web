# 🔑 Environment Variables Setup Guide

## Required Environment Variables for Vercel Deployment

You need to set these **3 environment variables** in your Vercel dashboard:

### 1. **NEXT_PUBLIC_SANITY_PROJECT_ID**
- **Purpose**: Identifies your Sanity project
- **How to get**: Go to [sanity.io/manage](https://sanity.io/manage) → Select your project → Copy Project ID
- **Example**: `abc123def`

### 2. **NEXT_PUBLIC_SANITY_DATASET**
- **Purpose**: Specifies which dataset to use (usually "production")
- **Value**: `production`
- **Example**: `production`

### 3. **SANITY_API_TOKEN**
- **Purpose**: Allows your app to read/write data from Sanity
- **How to get**: Go to [sanity.io/manage](https://sanity.io/manage) → Your project → API → Create new token → Copy token
- **Example**: `sk1234567890abcdef...`

---

## 🚀 How to Set Environment Variables in Vercel

### **Method 1: Via Vercel Dashboard (Recommended)**

1. **Go to Vercel Dashboard**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Select your project

2. **Navigate to Settings**
   - Click on your project
   - Go to "Settings" tab
   - Click on "Environment Variables" in the left sidebar

3. **Add Each Variable**
   ```
   Name: NEXT_PUBLIC_SANITY_PROJECT_ID
   Value: your-actual-project-id
   Environment: Production (check this box)
   ```

   ```
   Name: NEXT_PUBLIC_SANITY_DATASET
   Value: production
   Environment: Production (check this box)
   ```

   ```
   Name: SANITY_API_TOKEN
   Value: your-actual-api-token
   Environment: Production (check this box)
   ```

4. **Save and Redeploy**
   - Click "Save" after adding each variable
   - Go to "Deployments" tab
   - Click "Redeploy" on the latest deployment

### **Method 2: Via Vercel CLI**

```bash
# Set environment variables
vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID production
vercel env add NEXT_PUBLIC_SANITY_DATASET production
vercel env add SANITY_API_TOKEN production

# Redeploy
vercel --prod
```

---

## 🔍 How to Get Your Sanity Credentials

### **Getting Project ID:**
1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your Pathmark Advisory project
3. Copy the Project ID (looks like: `abc123def`)

### **Getting API Token:**
1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Go to "API" section
4. Click "Create new token"
5. Give it a name (e.g., "Pathmark Website")
6. Select permissions: "Read" and "Write"
7. Copy the generated token (starts with `sk...`)

---

## 📋 Quick Checklist

- [ ] Create `.env.local` file locally (for testing)
- [ ] Get Sanity Project ID from Sanity dashboard
- [ ] Create Sanity API token with read/write permissions
- [ ] Set all 3 environment variables in Vercel dashboard
- [ ] Redeploy your project
- [ ] Test that the website loads correctly

---

## 🧪 Testing Locally First

Create a `.env.local` file in your project root:

```bash
# .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
NEXT_PUBLIC_SANITY_USE_CDN=false
```

Then test locally:
```bash
npm run dev
```

---

## ⚠️ Important Notes

1. **Never commit `.env.local`** - it's already in `.gitignore`
2. **Use Production environment** in Vercel for live deployment
3. **Redeploy after adding variables** - changes won't take effect until redeploy
4. **Keep your API token secure** - don't share it publicly

---

## 🆘 Troubleshooting

**If your site doesn't load after deployment:**
1. Check Vercel deployment logs for errors
2. Verify environment variables are set correctly
3. Ensure your Sanity project is accessible
4. Check that the API token has correct permissions

**If you get "Project not found" errors:**
- Double-check your Project ID
- Ensure the project is in the correct Sanity account

**If you get "Unauthorized" errors:**
- Check your API token is correct
- Verify token has read/write permissions
- Make sure token hasn't expired
