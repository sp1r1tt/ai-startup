import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Signal/People — Digital identities, reimagined',
  description: 'A living gallery of digital creators and AI personalities.',
  generator: '',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#08090c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
