import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const screenshotsDir = path.join(process.cwd(), 'public', 'screenshots');
    const files = fs.readdirSync(screenshotsDir);

    // Filter for image files only
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(ext);
    });

    // Return paths relative to public folder
    const screenshots = imageFiles.map(file => `/screenshots/${file}`);

    return NextResponse.json({ screenshots });
  } catch (error) {
    console.error('Error reading screenshots:', error);
    return NextResponse.json({ screenshots: [] }, { status: 500 });
  }
}
