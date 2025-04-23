"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"

export default function Resume() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold mb-2">Resume</h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4"></div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Download my resume to learn more about my education, experience, and skills.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <a href="/resume.pdf" download>
          <Button size="lg">
            <FileDown className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </a>
      </motion.div>
    </div>
  )
}
