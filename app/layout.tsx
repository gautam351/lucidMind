import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LucidMind Consulting - Medical Device Regulatory & Quality",
  description:
    "We help medtech teams clear regulatory hurdles and build scalable QMS—whether it’s hardware, software, or AI-driven innovation.",
  keywords: "medical device, regulatory consulting, quality management, FDA, EU MDR, ISO 13485",
  icons:{
    icon: "/favicon.png", 
     // Path to your favicon in the public directory
  },
  verification:{
    google:'McMVOQUvz4GIeWKwmJeSZO5NfoVZ2r27TV8ehLCpgR0'
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  )
}

