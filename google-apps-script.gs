/**
 * Google Apps Script for Allanki MVP Checkout Form
 * 
 * Instructions:
 * 1. Open Google Sheets and create a new spreadsheet (or use existing one)
 * 2. Go to Extensions > Apps Script
 * 3. Replace the default code with this script
 * 4. Update the SPREADSHEET_ID variable below with your Google Sheet ID
 * 5. Deploy as a web app:
 *    - Click "Deploy" > "New deployment"
 *    - Choose type: "Web app"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 *    - Click "Deploy"
 * 6. Copy the Web App URL and set it as NEXT_PUBLIC_GOOGLE_SCRIPT_URL in your .env.local file
 * 
 * Google Sheet should have these columns (in order):
 * - Timestamp
 * - Name
 * - Email
 * - Plan (includes pricing info like "AI Editing - Unlimited" or "Scheduling - Token-based")
 * - Features
 */

// Replace with your Google Sheet ID (found in the URL)
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';

function doPost(e) {
  try {
    // Parse the JSON payload
    const data = JSON.parse(e.postData.contents);
    
    // Open the spreadsheet
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    
    // Prepare the row data
    const timestamp = new Date();
    const name = data.name || '';
    const email = data.email || '';
    const plan = data.plan || '';
    const features = data.features || '';
    
    // Append the row to the sheet
    // Order: Timestamp, Name, Email, Plan, Features
    sheet.appendRow([
      timestamp,
      name,
      email,
      plan,
      features
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Optional: Function to set up the sheet headers if they don't exist
 * Run this once manually from the Apps Script editor to create headers
 */
function setupHeaders() {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
  
  // Check if headers already exist
  const firstRow = sheet.getRange(1, 1, 1, 5).getValues()[0];
  if (firstRow[0] !== 'Timestamp') {
    // Set headers
    sheet.getRange(1, 1, 1, 5).setValues([[
      'Timestamp',
      'Name',
      'Email',
      'Plan',
      'Features'
    ]]);
    
    // Format header row
    const headerRange = sheet.getRange(1, 1, 1, 5);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#2D1B4E');
    headerRange.setFontColor('#F6F2E7');
  }
}
