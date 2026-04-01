import { NextResponse } from 'next/server';
import { after } from 'next/server';

/**
 * GOOGLE APPS SCRIPT SETUP (one-time, done by client)
 * =====================================================
 *
 * STEP 1 — Create a Google Sheet
 *   Add these column headers in row 1:
 *   A: Timestamp | B: Name | C: Email | D: School | E: Grad Year | F: Bootcamp | G: Status
 *
 * STEP 2 — Create an Apps Script
 *   In your Google Sheet: Extensions → Apps Script
 *   Paste the following code and save it:
 *
 * -------------------------------------------------------
 * function doPost(e) {
 *   try {
 *     const data = JSON.parse(e.postData.contents);
 *     const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *     sheet.appendRow([
 *       new Date().toLocaleString(),
 *       data.name    || '',
 *       data.email   || '',
 *       data.school  || '',
 *       data.gradYear || '',
 *       data.bootcamp || '',
 *       'Interested'
 *     ]);
 *     // ↓ Change this to the team email that should receive notifications
 *     const recipient = 'info@purpluni.com';
 *     GmailApp.sendEmail(
 *       recipient,
 *       'New Career Kickstart Signup: ' + data.name,
 *       'Name: '      + data.name + '\n' +
 *       'Email: '     + data.email + '\n' +
 *       'School: '    + (data.school   || 'Not provided') + '\n' +
 *       'Grad Year: ' + (data.gradYear || 'Not provided') + '\n' +
 *       'Status: Interested (pre-payment)\n\n' +
 *       'Check the signup sheet for the full list.'
 *     );
 *     return ContentService
 *       .createTextOutput(JSON.stringify({ success: true }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   } catch (err) {
 *     return ContentService
 *       .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   }
 * }
 * -------------------------------------------------------
 *
 * STEP 3 — Deploy as a Web App
 *   Click Deploy → New Deployment → Web App
 *   - Execute as: Me
 *   - Who has access: Anyone
 *   Click Deploy and authorize the permissions.
 *
 * STEP 4 — Add to Vercel
 *   Copy the Web App URL and add it to Vercel Environment Variables:
 *   Key:   APPS_SCRIPT_WEBHOOK_URL
 *   Value: https://script.google.com/macros/s/YOUR_ID/exec
 *
 * STEP 5 — Set the Payra payment URL
 *   Once you have the $99 Career Kickstart Payra payment link, add:
 *   Key:   NEXT_PUBLIC_CAREER_KICKSTART_PAYRA_URL
 *   Value: https://app.payra.com/YOUR_NEW_LINK
 *   Then redeploy.
 */

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, school, gradYear, bootcamp } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    // TODO: move to APPS_SCRIPT_WEBHOOK_URL env var before going live
    const webhookUrl = process.env.APPS_SCRIPT_WEBHOOK_URL ?? 'https://script.google.com/macros/s/AKfycbxjmY4f4PzZ4TR4CRp2Wl_VZUTvBZUGEp-DpzX4KmGsKQGFkv9jI8ZYRL8ppzWVMaUMJA/exec';

    after(async () => {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            school: school || '',
            gradYear: gradYear || '',
            bootcamp: bootcamp || 'career-kickstart',
          }),
        });
      } catch (webhookError) {
        console.error('Apps Script webhook failed:', webhookError);
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Bootcamp signup error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
