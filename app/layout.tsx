import type React from "react"
import type { Metadata } from "next/types"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "NINO Skin Care Clinic",
  description: "המומחים שלנו לטיפוח העור",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}



import './globals.css'