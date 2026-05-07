import type { Metadata } from 'next'
import { Instrument_Sans, Noto_Sans_JP, Space_Mono } from 'next/font/google'
import './globals.css'

const siteUrl = 'https://www.lat91.co.jp'
const companyName = '株式会社Lat91'
const siteTitle = `${companyName} | AIエージェント・DX推進パートナー`
const siteDescription =
  '株式会社Lat91は、AIエージェント導入とDX推進を通じて企業の成長を実現するAI・DXパートナーです。戦略立案から開発・運用まで一気通貫でサポートします。'

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
  metadataBase: new URL(siteUrl),
  applicationName: companyName,
  title: {
    default: siteTitle,
    template: '%s | Lat91',
  },
  description: siteDescription,
  keywords: [
    '株式会社Lat91',
    '株式会社lat91',
    'Lat91',
    'lat91.co.jp',
    'AIエージェント',
    'DX推進',
    'AI導入',
    '生成AI',
  ],
  authors: [{ name: companyName, url: siteUrl }],
  creator: companyName,
  publisher: companyName,
  category: 'AI・DXコンサルティング',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: companyName,
    type: 'website',
    locale: 'ja_JP',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '株式会社Lat91 - AIエージェント・DX推進パートナー',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'Izy-z1upA7Ac1Doc5xJ7NCwATCoUZJr4QX9yOX02FDk',
  },
}

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: companyName,
    alternateName: ['Lat91', '株式会社lat91', '株式会社Lat.91'],
    legalName: companyName,
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    image: `${siteUrl}/images/og-image.jpg`,
    foundingDate: '2026-03',
    founder: {
      '@type': 'Person',
      name: '稲葉 幸太郎',
    },
    address: {
      '@type': 'PostalAddress',
      postalCode: '107-0052',
      addressRegion: '東京都',
      addressLocality: '港区',
      streetAddress: '赤坂3-13-3 赤坂セントラルビル6F',
      addressCountry: 'JP',
    },
    areaServed: 'JP',
    description: siteDescription,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: companyName,
    alternateName: 'Lat91',
    url: siteUrl,
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
    inLanguage: 'ja',
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${instrumentSans.variable} ${notoSansJP.variable} ${spaceMono.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  )
}
