"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center"
      >
        <Card>
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">22ce69@svitvasad.ac.in</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <Link
                  href="https://www.linkedin.com/in/param-v-jani-4ab9651b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  param-v-jani-4ab9651b4
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
