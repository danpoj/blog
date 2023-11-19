import clsx from 'clsx'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: {
    default: 'Home | DanpoJ',
    template: '%s | DanpoJ',
  },
  metadataBase: new URL('localhost:3000'),
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
