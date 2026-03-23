import type { Metadata } from 'next'
import { Instrument_Sans, Noto_Sans_JP, Space_Mono } from 'next/font/google'
import './globals.css'

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'lat91 - Hero Mockup',
  description: '人間の意志と創造性が輝く時代を創る',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${instrumentSans.variable} ${notoSansJP.variable} ${spaceMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
