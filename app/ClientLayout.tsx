"use client"

import type React from "react"
import { Inter, Dancing_Script } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
})

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <style jsx global>{`
          .font-script {
            font-family: ${dancingScript.style.fontFamily};
          }
        `}</style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

