import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ravi Azzura Putra - Backend Developer",
  description: "Backend Developer Portfolio - Specializing in scalable APIs and system design",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/assets/coding.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/coding.svg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/assets/coding.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/assets/coding.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <body className={`font-sans antialiased bg-black text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
