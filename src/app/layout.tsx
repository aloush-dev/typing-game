import type { Metadata } from 'next'
import { Inter, Noto_Sans } from 'next/font/google'
import './globals.css'

const inter = Noto_Sans({ subsets: ['latin'], weight: ['800'] })

export const metadata: Metadata = {
  title: 'Typing Game',
  description: 'Typing game by Aloush',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
