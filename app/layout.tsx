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
  title: 'Lat91 | AIエージェント・DX推進パートナー',
  description: 'Lat91は、AIエージェント導入とDX推進を通じて、企業の成長を実現します。戦略立案から開発・運用まで一気通貫でサポート。',
  openGraph: {
    title: 'Lat91 | AIエージェント・DX推進パートナー',
    description: 'Lat91は、AIエージェント導入とDX推進を通じて、企業の成長を実現します。戦略立案から開発・運用まで一気通貫でサポート。',
    url: 'https://www.lat91.jp',
    siteName: 'Lat91',
    type: 'website',
    locale: 'ja_JP',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lat91 - AIエージェント・DX推進パートナー',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lat91 | AIエージェント・DX推進パートナー',
    description: 'Lat91は、AIエージェント導入とDX推進を通じて、企業の成長を実現します。戦略立案から開発・運用まで一気通貫でサポート。',
    images: ['/images/og-image.jpg'],
  },
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
