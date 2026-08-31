import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Push to Google Sheets if configured
    if (process.env.GOOGLE_SHEET_WEBHOOK_URL) {
      try {
        const response = await fetch(process.env.GOOGLE_SHEET_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            console.error("Google Sheets returned an error:", response.status);
        }
      } catch (e) {
        console.error("Failed to push to Google Sheets", e);
        // We still continue to return success so the user doesn't get stuck if webhook drops
      }
    }

    // Artificial delay for UI
    await new Promise(resolve => setTimeout(resolve, 1500));

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Application Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to process application' }, { status: 500 });
  }
}
