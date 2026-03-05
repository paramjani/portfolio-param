import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

// SEO Metadata
export const metadata = {
  title: "Param Jani | Portfolio",
  description:
    "Portfolio website of Param Jani, Computer Engineering student and Hackathon Enthusiast",
  generator: "v0.dev",

  // Canonical URL
  alternates: {
    canonical: "https://portfolio-param-tau.vercel.app/",
  },

  // Favicon
  icons: {
    icon: "/favicon.ico",
  },

  // Open Graph (for social sharing)
  openGraph: {
    title: "Param Jani | Portfolio",
    description:
      "Portfolio of Param Jani - Computer Engineering Student, Developer and Hackathon Enthusiast",
    url: "https://portfolio-param-tau.vercel.app/",
    siteName: "Param Jani Portfolio",
    images: [
      {
        url: "/param_photo.jpeg",
        width: 800,
        height: 600,
        alt: "Param Jani Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

// Mobile responsiveness
export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-6xl mx-auto px-4`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          {/* Structured Data for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Param Jani",
                url: "https://portfolio-param-tau.vercel.app/",
                image: "https://portfolio-param-tau.vercel.app/param_photo.jpeg",
                jobTitle: "Computer Engineering Student",
                sameAs: [
                  "https://github.com/",
                  "https://linkedin.com/"
                ],
              }),
            }}
          />

          {/* Profile Image */}
          <div className="w-full flex justify-center py-6">
            <Image
              src="/param_photo.jpeg"
              alt="Param Jani Portfolio Profile Photo"
              width={120}
              height={120}
              className="rounded-full border-4 border-primary shadow-md"
              priority
            />
          </div>

          {children}

        </ThemeProvider>
      </body>
    </html>
  )
}
