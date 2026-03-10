import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip next internals, api routes and static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  // Match URLs like /de/..., /tr/..., /en/...
  const localeMatch = pathname.match(/^\/(en|de|tr)(\/.*)?$/)

  if (localeMatch) {
    const locale = localeMatch[1]
    const restPath = localeMatch[2] || '/'

    // Internally serve the non-prefixed route but keep URL as /{locale}/...
    const url = request.nextUrl.clone()
    url.pathname = restPath

    const response = NextResponse.rewrite(url)
    // Optional: hint for client-side language, though we mainly use pathname
    response.cookies.set('iptv-language', locale, { path: '/' })
    return response
  }

  return NextResponse.next()
}

