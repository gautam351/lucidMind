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
    "Medical meets Clarity. Regulatory made simple. Bringing your medical device to market, without the maze.",
  keywords: "medical device, regulatory consulting, quality management, FDA, EU MDR, ISO 13485",
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

