import clsx from 'clsx'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  metadataBase: new URL('https://danpoj.pages.dev'),
  title: {
    default: 'DanpoJ',
    template: '%s | DanpoJ',
  },
  description: 'FE Developer DanpoJ Blog',
  openGraph: {
    title: 'DanpoJ',
    description: 'FE Developer DanpoJ Blog',
    url: 'https://danpoj.pages.dev',
    siteName: 'DanpoJ',
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'DanpoJ',
    card: 'summary_large_image',
  },
  icons: [
    {
      url: '/favicon.svg',
      href: '/favicon.svg',
    },
  ],
  verification: {
    google: 'H2mJCdgJT7XLZoim4PlGfnDLKsbtoFo3BgaTv9inG2A',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className={clsx('text-black bg-white dark:text-white dark:bg-[#111010]', GeistSans.variable, GeistMono.variable)}
    >
      <body className='antialiased'>
        <main className='max-w-3xl mx-auto px-2 py-4 mt-8 mb-24'>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
