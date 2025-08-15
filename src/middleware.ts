import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the request is for the studio route
  if (request.nextUrl.pathname.startsWith('/studio')) {
    // Check for authentication token in cookies
    const authToken = request.cookies.get('studio-auth');
    const authTimestamp = request.cookies.get('studio-timestamp');
    
    // Check if token exists and is not expired (24 hours)
    const isAuthenticated = authToken && authTimestamp;
    const isExpired = authTimestamp ? 
      (Date.now() - parseInt(authTimestamp.value)) > (24 * 60 * 60 * 1000) : true;
    
    if (!isAuthenticated || isExpired) {
      // Redirect to login page
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Additional security: Check if environment variables are configured
    if (!process.env.STUDIO_USERNAME || !process.env.STUDIO_PASSWORD) {
      console.error('Studio credentials not configured in environment variables');
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/studio/:path*',
};







