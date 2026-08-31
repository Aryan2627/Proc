import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, resume, coverLetter, role } = data;

    // We save directly to a CSV file in the project root which can be opened in Excel
    const filePath = path.join(process.cwd(), 'applicants.csv');
    
    // Check if file exists to write headers
    const fileExists = fs.existsSync(filePath);
    
    // Clean inputs to avoid CSV breaking
    const clean = (str: string) => `"${(str || '').replace(/"/g, '""')}"`;
    
    const csvRow = `${clean(new Date().toISOString())},${clean(role)},${clean(name)},${clean(email)},${clean(phone)},${clean(resume)},${clean(coverLetter)}\n`;

    if (!fileExists) {
      const headers = "Timestamp,Role,Name,Email,Phone,Resume Link,Cover Letter\n";
      fs.writeFileSync(filePath, headers + csvRow, 'utf8');
    } else {
      fs.appendFileSync(filePath, csvRow, 'utf8');
    }

    // Optional: If they provided a Google Apps Script URL in .env, we also push there.
    if (process.env.GOOGLE_SHEET_WEBHOOK_URL) {
      try {
        await fetch(process.env.GOOGLE_SHEET_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      } catch (e) {
        console.error("Failed to push to Google Sheets", e);
      }
    }

    // Artificial delay to show the submitting animation
    await new Promise(resolve => setTimeout(resolve, 1500));

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Application Error:', error);
    return NextResponse.json({ error: 'Failed to process application' }, { status: 500 });
  }
}
