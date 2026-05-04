import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import StickyApplyButton from '@/components/StickyApplyButton'
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton'
import { ACCESS_COOKIE_NAME, isValidAccessCookie } from '@/lib/site-access'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kings & Queens School | Premium School in Umuahia',
  description: 'A premium, digitally-enabled school in Umuahia combining Nigerian curriculum excellence with modern digital learning support.',
  keywords: 'school in umuahia, kings and queens school, premium school in abia state, nigerian curriculum school, digital learning school',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const hasSiteAccess = isValidAccessCookie(cookieStore.get(ACCESS_COOKIE_NAME)?.value)

  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {hasSiteAccess ? (
          <>
            <StickyApplyButton />
            <WhatsAppFloatingButton />
          </>
        ) : null}
      </body>
    </html>
  )
}
