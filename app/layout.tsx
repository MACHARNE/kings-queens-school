import type { Metadata } from 'next'
import StickyApplyButton from '@/components/StickyApplyButton'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kings and Queens School, Umuahia, Abia State',
  description: 'A premium, digitally-enabled Nigerian school preparing students for both local and global success.',
  keywords: 'school in umuahia, kings and queens school, best school in abia state, nigerian curriculum school, digital learning school',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <StickyApplyButton />
        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/2348033505742"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.99 1 4.29L2.5 21l4.71-1.5c1.3.64 2.75 1 4.29 1 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.44 0-2.83-.39-4.02-1.07l-.29-.17-2.79.89.89-2.79-.17-.29C5.39 14.83 5 13.44 5 12c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7z"/>
          </svg>
        </a>
      </body>
    </html>
  )
}
