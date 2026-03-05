"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail, Instagram, Youtube, Facebook, Twitter } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4"></div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </motion.div>

      <Card>
        <CardContent className="p-6 space-y-6">

          {/* Email */}
          <div className="flex items-center space-x-4">
            <Mail className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-muted-foreground">22ce69@svitvasad.ac.in</p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-4">
            <Linkedin className="h-6 w-6 text-primary" />
            <Link
              href="https://www.linkedin.com/in/param-v-jani-4ab9651b4/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </div>

          {/* Instagram */}
          <div className="flex items-center space-x-4">
            <Instagram className="h-6 w-6 text-primary" />
            <Link href="https://instagram.com/yourusername" target="_blank">
              Instagram
            </Link>
          </div>

          {/* YouTube */}
          <div className="flex items-center space-x-4">
            <Youtube className="h-6 w-6 text-primary" />
            <Link href="https://youtube.com/@yourchannel" target="_blank">
              YouTube
            </Link>
          </div>

          {/* Facebook */}
          <div className="flex items-center space-x-4">
            <Facebook className="h-6 w-6 text-primary" />
            <Link href="https://facebook.com/yourpage" target="_blank">
              Facebook
            </Link>
          </div>

          {/* X / Twitter */}
          <div className="flex items-center space-x-4">
            <Twitter className="h-6 w-6 text-primary" />
            <Link href="https://x.com/yourusername" target="_blank">
              X (Twitter)
            </Link>
          </div>

        </CardContent>
      </Card>
    </div>
  )
}
