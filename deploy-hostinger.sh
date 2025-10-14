#!/bin/bash

# Pathmark Advisory - Hostinger Cloud Deployment Script
# Run this script on your Hostinger server after uploading your files

echo "🚀 Starting Pathmark Advisory Deployment..."
echo "============================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js 18+ first"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ NPM version: $(npm -v)"

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "⚠️  Warning: .env.local file not found!"
    echo "Please create .env.local with your environment variables"
    echo "See HOSTINGER_CLOUD_DEPLOYMENT.md for required variables"
    read -p "Do you want to continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Build the application
echo ""
echo "🔨 Building application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo ""
    echo "📦 Installing PM2..."
    npm install -g pm2
fi

# Stop existing PM2 process if running
echo ""
echo "🔄 Checking for existing processes..."
pm2 stop pathmark-web 2>/dev/null || true
pm2 delete pathmark-web 2>/dev/null || true

# Start the application
echo ""
echo "🚀 Starting application with PM2..."
pm2 start npm --name "pathmark-web" -- start

# Save PM2 process list
pm2 save

# Display status
echo ""
echo "📊 Application Status:"
pm2 list

echo ""
echo "✅ Deployment Complete!"
echo "============================================"
echo ""
echo "Your application should now be running on port 3000"
echo ""
echo "Next steps:"
echo "1. Configure Nginx reverse proxy (contact Hostinger support if needed)"
echo "2. Enable SSL certificate in Hostinger panel"
echo "3. Visit your domain to verify"
echo ""
echo "Useful commands:"
echo "  pm2 logs pathmark-web    - View logs"
echo "  pm2 restart pathmark-web - Restart app"
echo "  pm2 monit               - Monitor app"
echo ""

