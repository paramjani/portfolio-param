import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL("https://portfolio-param-tau.vercel.app"),

  title: {
    default: "Param Jani – Computer Engineering Student | Developer Portfolio",
    template: "%s | Param Jani",
  },

  description:
    "Explore the portfolio of Param Jani, a Computer Engineering student skilled in web development, SEO, and hackathons. View projects, skills, and experience.",

  generator: "Next.js",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Param Jani – Computer Engineering Student | Developer Portfolio",
    description:
      "Portfolio of Param Jani showcasing projects, skills, web development work, and hackathon experience.",
    url: "https://portfolio-param-tau.vercel.app/",
    siteName: "Param Jani Portfolio",
    images: [
      {
        url: "/param_photo.jpeg",
        width: 800,
        height: 600,
        alt: "Param Jani Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Param Jani – Developer Portfolio",
    description:
      "Explore Param Jani's portfolio featuring web development projects, skills, and hackathon work.",
    images: ["/param_photo.jpeg"],
  },
}

// Mobile responsive viewport
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
          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Param Jani",
                url: "https://portfolio-param-tau.vercel.app/",
                image:
                  "https://portfolio-param-tau.vercel.app/param_photo.jpeg",
                jobTitle: "Computer Engineering Student",
                description:
                  "Computer Engineering student passionate about web development, SEO, and building innovative projects.",
                sameAs: [
                  "https://github.com/yourusername",
                  "https://www.linkedin.com/in/yourusername",
                ],
              }),
            }}
          />

          {/* Profile Image */}
          <div className="w-full flex justify-center py-6">
            <Image
              src="/param_photo.jpeg"
              alt="Param Jani Developer Portfolio Profile Photo"
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
