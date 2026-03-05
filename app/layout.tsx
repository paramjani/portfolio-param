import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "Param Jani | Portfolio",
    template: "%s | Param Jani",
  },

  description:
    "Portfolio website of Param Jani, Computer Engineering student, developer and hackathon enthusiast.",

  generator: "Next.js",

  metadataBase: new URL("https://portfolio-param-tau.vercel.app"),

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Param Jani | Portfolio",
    description:
      "Portfolio of Param Jani - Computer Engineering Student, Developer and Hackathon Enthusiast",
    url: "https://portfolio-param-tau.vercel.app",
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

  twitter: {
    card: "summary_large_image",
    title: "Param Jani | Portfolio",
    description:
      "Portfolio of Param Jani - Computer Engineering Student and Developer",
    images: ["/param_photo.jpeg"],
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
                url: "https://portfolio-param-tau.vercel.app",
                image:
                  "https://portfolio-param-tau.vercel.app/param_photo.jpeg",
                jobTitle: "Computer Engineering Student",
                description:
                  "Computer Engineering student passionate about development, SEO, and hackathons.",
                sameAs: [
                  "https://github.com/",
                  "https://www.linkedin.com/"
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
