import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Image from "next/image" // ✅ import Image component from Next.js

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Param Jani | Portfolio",
  description: "Portfolio website of Param Jani, Computer Engineering student and Hackathon Enthusiast",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>

          {/* Profile Image Section */}
          <div className="w-full flex justify-center py-6">
            <Image
              src="/param_photo.jpeg" // ✅ Make sure this image is in your /public folder
              alt="Param Jani"
              width={120}
              height={120}
              className="rounded-full border-4 border-primary shadow-md"
              priority
            />
          </div>

          {/* Page content */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
