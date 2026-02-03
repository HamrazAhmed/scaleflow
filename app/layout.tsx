import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { DiscountPopup } from "@/components/discount-popup"

const _inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: 'ScaleFlow Digital | Marketing Course & Automation Agency Services',
  description: 'Scale your business with our comprehensive Marketing Mastery Course and Done-For-You automation systems. CRM, funnels, email marketing, and more.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <DiscountPopup />
        <Analytics />
      </body>
    </html>
  )
}
