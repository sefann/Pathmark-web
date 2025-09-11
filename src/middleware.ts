import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Allow studio routes to pass through
  return NextResponse.next();
}

export const config = {
  matcher: '/studio/:path*',
};







