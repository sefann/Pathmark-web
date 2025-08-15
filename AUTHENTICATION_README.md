# 🔐 Sanity Studio Authentication Setup

This document explains how to set up and manage authentication for the Sanity Studio using environment variables.

## 📋 Overview

The authentication system has been upgraded from hardcoded credentials to environment variables for better security and flexibility.

## 🚀 Quick Setup

### 1. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Sanity Studio Authentication
STUDIO_USERNAME=your-username
STUDIO_PASSWORD=your-secure-password
STUDIO_SECRET_KEY=your-secret-key-here
```

### 2. Default Credentials

The current default credentials are:
- **Username**: `admin`
- **Password**: `pathmark2024`

## 🔧 How to Change Credentials

### Method 1: Edit .env.local File

1. Open `.env.local` in your project root
2. Update the values:
   ```bash
   STUDIO_USERNAME=your-new-username
   STUDIO_PASSWORD=your-new-password
   ```
3. Restart your development server

### Method 2: Using Terminal

```bash
# Update username
echo "STUDIO_USERNAME=your-new-username" > .env.local

# Update password
echo "STUDIO_PASSWORD=your-new-password" >> .env.local
```

## 🔒 Security Features

### 1. Environment Variables
- Credentials are stored in `.env.local` (not committed to git)
- Server-side validation prevents client-side exposure

### 2. Secure Cookies
- HttpOnly cookies prevent XSS attacks
- Secure flag enabled in production
- SameSite strict for CSRF protection

### 3. Session Management
- 24-hour session timeout
- Automatic logout on session expiry
- Secure session tokens

### 4. API Protection
- Server-side authentication validation
- Environment variable validation in middleware
- Error handling for missing configuration

## 🛠️ API Endpoints

### POST /api/auth/login
Authenticates user credentials and sets session cookies.

**Request Body:**
```json
{
  "username": "your-username",
  "password": "your-password"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Authentication successful"
}
```

### POST /api/auth/logout
Clears authentication cookies and logs out the user.

## 🚨 Important Notes

1. **Never commit `.env.local` to version control**
2. **Use strong passwords in production**
3. **Restart the server after changing environment variables**
4. **The `.env.local` file is already in `.gitignore`**

## 🔍 Troubleshooting

### "Authentication service not configured"
- Check that `.env.local` exists and contains the required variables
- Ensure variable names match exactly: `STUDIO_USERNAME`, `STUDIO_PASSWORD`

### "Invalid username or password"
- Verify credentials in `.env.local`
- Check for typos or extra spaces
- Restart the development server

### Session expires quickly
- Default session duration is 24 hours
- Check system time settings
- Clear browser cookies if needed

## 📝 Migration from Hardcoded Credentials

If you were using the previous hardcoded system:
1. The old credentials are preserved in `.env.local`
2. No action needed - the system will work immediately
3. You can now change credentials without code changes

## 🔄 Environment Variables Reference

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `STUDIO_USERNAME` | Login username | Yes | `admin` |
| `STUDIO_PASSWORD` | Login password | Yes | `pathmark2024` |
| `STUDIO_SECRET_KEY` | Additional security key | No | `your-secret-key-here` |

## 🚀 Production Deployment

For production deployment:
1. Set environment variables in your hosting platform
2. Ensure `NODE_ENV=production` is set
3. Use HTTPS for secure cookie transmission
4. Consider using a more robust authentication system for high-security needs
