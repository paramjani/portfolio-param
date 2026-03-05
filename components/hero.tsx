"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center">
      {/* H1 - plain text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          SEO Expert – Param Jani
        </h1>
      </motion.div>

      {/* Subheading - clickable link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <p className="text-xl md:text-2xl text-muted-foreground">
          <Link href="/seo-consultant" className="text-primary hover:underline">
            SEO CONSULTANT
          </Link>
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Button asChild size="lg">
          <Link href="#projects">View Projects</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="#contact">Get in Touch</Link>
        </Button>
      </motion.div>
    </div>
  )
}
