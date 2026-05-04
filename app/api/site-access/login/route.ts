import { NextResponse, type NextRequest } from 'next/server'
import {
  ACCESS_COOKIE_NAME,
  areAccessCredentialsConfigured,
  getAccessSessionSecret,
  verifyAccessCredentials,
} from '@/lib/site-access'

function safeRedirectPath(value: FormDataEntryValue | null) {
  if (typeof value !== 'string' || !value.startsWith('/') || value.startsWith('//')) {
    return '/'
  }

  return value
}

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  const redirectPath = safeRedirectPath(formData.get('redirect'))

  if (
    typeof email !== 'string' ||
    typeof password !== 'string' ||
    !areAccessCredentialsConfigured() ||
    !verifyAccessCredentials(email, password)
  ) {
    const loginUrl = new URL('/site-access', request.url)
    loginUrl.searchParams.set('error', '1')
    loginUrl.searchParams.set('redirect', redirectPath)
    return NextResponse.redirect(loginUrl, { status: 303 })
  }

  const response = NextResponse.redirect(new URL(redirectPath, request.url), {
    status: 303,
  })

  response.cookies.set(ACCESS_COOKIE_NAME, getAccessSessionSecret(), {
    httpOnly: true,
    maxAge: 60 * 60 * 12,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  })

  return response
}
