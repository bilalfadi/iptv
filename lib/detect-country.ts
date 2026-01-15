/**
 * Detect user's country from IP address
 */

export async function getUserCountry(request?: Request): Promise<string> {
  try {
    // Try to get country from Vercel's geo headers first (if deployed on Vercel)
    if (request) {
      const country = request.headers.get('x-vercel-ip-country') || 
                      request.headers.get('cf-ipcountry') || // Cloudflare
                      request.headers.get('x-country-code');
      
      if (country && country.length === 2) {
        return country.toUpperCase();
      }
    }

    // Fallback: Use ip-api.com (free, no API key needed)
    // Get client IP from headers if available
    let clientIP = '';
    if (request) {
      const forwarded = request.headers.get('x-forwarded-for');
      const realIP = request.headers.get('x-real-ip');
      clientIP = forwarded?.split(',')[0] || realIP || '';
    }

    const apiUrl = clientIP 
      ? `https://ip-api.com/json/${clientIP}?fields=countryCode`
      : 'https://ip-api.com/json/?fields=countryCode';
    
    const response = await fetch(apiUrl, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      return 'US'; // Default to English
    }
    
    const data = await response.json();
    return data.countryCode || 'US';
  } catch (error) {
    console.error('Error detecting country:', error);
    return 'US'; // Default to English
  }
}

export function getLanguageFromCountry(countryCode: string): 'en' | 'de' | 'tr' {
  // Turkey
  if (countryCode === 'TR') {
    return 'tr';
  }
  
  // Germany, Austria, Switzerland
  if (['DE', 'AT', 'CH'].includes(countryCode)) {
    return 'de';
  }
  
  // Default to English
  return 'en';
}
