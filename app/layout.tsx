import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Financial Advisor",
  description: "Your personal AI-powered financial advisor",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-screen">
      <body className={`${inter.className} min-h-screen antialiased`}>
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  )
}
