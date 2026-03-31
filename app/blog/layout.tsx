import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Discover insights, tutorials, and articles about web development, technology trends, and industry best practices.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Blog | Param Jani",
    description:
      "Discover insights, tutorials, and articles about web development, technology trends, and industry best practices.",
    url: "https://portfolio-param-tau.vercel.app/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://portfolio-param-tau.vercel.app/blog",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
