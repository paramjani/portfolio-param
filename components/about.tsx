"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8 text-center"
      >
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed mb-4">
              I'm Param Jani, a third-year Computer Engineering student with a passion for Web Development and
              Hackathons. My academic journey has equipped me with a strong foundation in programming principles and
              problem-solving skills.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              I'm particularly interested in creating innovative web solutions that solve real-world problems. My
              experience participating in hackathons has taught me to work efficiently under pressure, collaborate
              effectively with teams, and rapidly prototype ideas.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and
              continuously expanding my knowledge in the ever-evolving field of computer engineering.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
