import { NextRequest, NextResponse } from 'next/server';
import { validateSession } from '@/lib/auth';

export function middleware(request: NextRequest) {
  // Only apply to admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Skip authentication for login page
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next();
    }

    // Check for session token
    const sessionToken = request.cookies.get('adminSession')?.value || 
                        request.headers.get('authorization')?.replace('Bearer ', '');

    if (!sessionToken) {
      // Redirect to login if no session
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    // Validate session
    const user = validateSession(sessionToken);
    if (!user) {
      // Clear invalid session and redirect to login
      const response = NextResponse.redirect(new URL('/admin/login', request.url));
      response.cookies.delete('adminSession');
      return response;
    }

    // Add user info to headers for use in API routes
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-admin-user', JSON.stringify(user));

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};


