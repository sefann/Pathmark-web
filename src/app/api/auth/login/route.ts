import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    // Get credentials from environment variables
    const validUsername = process.env.STUDIO_USERNAME;
    const validPassword = process.env.STUDIO_PASSWORD;

    // Check if environment variables are set
    if (!validUsername || !validPassword) {
      console.error('Studio credentials not configured in environment variables');
      return NextResponse.json(
        { error: 'Authentication service not configured' },
        { status: 500 }
      );
    }

    // Validate credentials
    if (username === validUsername && password === validPassword) {
      // Create a session token (you can enhance this with JWT if needed)
      const sessionToken = crypto.randomBytes(32).toString('hex');
      const timestamp = Date.now();

      const response = NextResponse.json({ 
        success: true, 
        message: 'Authentication successful' 
      });

      // Set secure cookies
      response.cookies.set('studio-auth', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60, // 24 hours
        path: '/'
      });

      response.cookies.set('studio-timestamp', timestamp.toString(), {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60, // 24 hours
        path: '/'
      });

      return response;
    } else {
      return NextResponse.json(
        { error: 'Invalid username or password' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
