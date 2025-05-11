import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  // Example: Protect all /dashboard routes
  if (req.nextUrl.pathname.startsWith('/dashboard')) {
    // You would check for a token or session here
    const isAuthenticated = false // Replace with real check

    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/', req.url))
    }
  }

  return NextResponse.next()
}
