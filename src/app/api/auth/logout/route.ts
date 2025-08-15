import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true });
  
  // Clear authentication cookies
  response.cookies.delete('studio-auth');
  response.cookies.delete('studio-timestamp');
  
  return response;
}
