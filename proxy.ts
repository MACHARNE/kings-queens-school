import { NextResponse, type NextRequest } from 'next/server'
import { ACCESS_COOKIE_NAME, isValidAccessCookie } from './lib/site-access'

const PUBLIC_FILE = /\.(.*)$/

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  if (
    pathname === '/site-access' ||
    pathname === '/api/site-access/login' ||
    pathname.startsWith('/_next') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  if (isValidAccessCookie(request.cookies.get(ACCESS_COOKIE_NAME)?.value)) {
    return NextResponse.next()
  }

  const loginUrl = request.nextUrl.clone()
  loginUrl.pathname = '/site-access'
  loginUrl.searchParams.set('redirect', `${pathname}${search}`)

  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|icon.png|images).*)'],
}
