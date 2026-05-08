import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Digitized Web Solutions - Professional Websites for Ahmedabad Businesses',
  description: 'Expert web development agency in Ahmedabad. Custom coded websites, WordPress CMS, e-commerce solutions, SEO optimization, and digital marketing services.',
  keywords: 'web development, website design, WordPress, e-commerce, SEO, Ahmedabad, web solutions',
  openGraph: {
    title: 'Digitized Web Solutions',
    description: 'Professional web development services for Ahmedabad businesses',
    type: 'website',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
