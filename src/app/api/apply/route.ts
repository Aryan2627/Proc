import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!process.env.GOOGLE_SHEET_WEBHOOK_URL) {
      return NextResponse.json({ error: "Vercel Error: GOOGLE_SHEET_WEBHOOK_URL is missing. Please check Vercel Environment Variables." }, { status: 500 });
    }

    try {
      const response = await fetch(process.env.GOOGLE_SHEET_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
          const errText = await response.text();
          return NextResponse.json({ error: `Google Sheets Error (${response.status}): ${errText.substring(0, 100)}` }, { status: 500 });
      }

      // Check if it's a redirect that we didn't follow properly, or a weird Google HTML response
      const resText = await response.text();
      if (resText.includes("error") || resText.includes("html>")) {
          // If google returned an HTML page (like a login page), it means permissions are wrong
          if (resText.includes("html>")) {
             return NextResponse.json({ error: "Google Permissions Error: Your Web App is not set to 'Anyone' access. Google is asking for a login." }, { status: 500 });
          }
      }

    } catch (e: any) {
      return NextResponse.json({ error: "Fetch Crash: " + e.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to process application: ' + error.message }, { status: 500 });
  }
}
