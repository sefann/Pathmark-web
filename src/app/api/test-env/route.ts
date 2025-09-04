import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      message: 'Environment test endpoint',
      timestamp: new Date().toISOString(),
      env: {
        hasResendKey: !!process.env.RESEND_API_KEY,
        hasGaId: !!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}