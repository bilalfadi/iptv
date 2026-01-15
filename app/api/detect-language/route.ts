import { NextRequest, NextResponse } from 'next/server';
import { getUserCountry, getLanguageFromCountry } from '@/lib/detect-country';

export async function GET(request: NextRequest) {
  try {
    // Pass the request to get IP from headers
    const countryCode = await getUserCountry(request);
    const language = getLanguageFromCountry(countryCode);
    
    return NextResponse.json({ 
      countryCode,
      language 
    });
  } catch (error) {
    console.error('Error detecting language:', error);
    return NextResponse.json({ 
      countryCode: 'US',
      language: 'en' 
    });
  }
}
