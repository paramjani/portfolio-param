"use client";

import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

// Metadata
export const metadata = {
  metadataBase: new URL("https://portfolio-param-tau.vercel.app"),
  title: {
    default: "Param Jani | Computer Engineering Student Portfolio",
    template: "%s | Param Jani",
  },
  description:
    "Param Jani is a Computer Engineering student passionate about web development, SEO, and hackathons. Explore projects, skills, and portfolio work.",
  keywords: [
    "Param Jani",
    "Param Jani Portfolio",
    "Computer Engineering Student",
    "Web Developer Portfolio",
    "SEO Portfolio",
    "Hackathon Developer",
  ],
  authors: [{ name: "Param Jani" }],
  creator: "Param Jani",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://portfolio-param-tau.vercel.app/",
    languages: { "en-US": "https://portfolio-param-tau.vercel.app/" },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Param Jani | Computer Engineering Student Portfolio",
    description:
      "Explore Param Jani's developer portfolio featuring projects, skills, SEO knowledge, and hackathon experience.",
    url: "https://portfolio-param-tau.vercel.app/",
    siteName: "Param Jani Portfolio",
    images: [
      {
        url: "https://portfolio-param-tau.vercel.app/param_photo.jpeg",
        width: 1200,
        height: 630,
        alt: "Param Jani Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Param Jani Developer Portfolio",
    description:
      "Explore projects, skills, and hackathon experience of Param Jani, a Computer Engineering student.",
    images: ["https://portfolio-param-tau.vercel.app/param_photo.jpeg"],
  },
};

// Mobile viewport
export const viewport = { width: "device-width", initialScale: 1, maximumScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // SPA pageview tracking
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "pageview",
        page: pathname,
      });
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Hreflang & Canonical */}
        <link rel="alternate" href="https://portfolio-param-tau.vercel.app/" hrefLang="en" />
        <link rel="canonical" href="https://portfolio-param-tau.vercel.app/" />

        {/* Google Tag (gtag.js for GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-B0HXGSWKS9"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B0HXGSWKS9');
            `,
          }}
        />

        {/* Google Tag Manager (Head snippet) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W8JJHRS8');`,
          }}
        />
      </head>

      <body className={`${inter.className} max-w-6xl mx-auto px-4`}>
        {/* Google Tag Manager (Body snippet) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W8JJHRS8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Theme Provider */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
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
                description:
                  "Computer Engineering student skilled in web development, SEO, and hackathon projects.",
                sameAs: [
                  "https://github.com/YOUR_GITHUB",
                  "https://www.linkedin.com/in/YOUR_LINKEDIN",
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
  );
}
