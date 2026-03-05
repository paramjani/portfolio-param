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
              I’m <strong>Param Jani</strong>, a third-year Computer Engineering student passionate about Web Development and Search Engine Optimization (SEO). I am establishing my career as an <strong>SEO Expert</strong>, <strong>SEO Consultant</strong>, and <strong>SEO Specialist</strong>, helping websites improve search visibility, drive organic traffic, and achieve digital growth.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              As a <strong>Freelance SEO Consultant</strong>, I focus on creating innovative web solutions that solve real-world problems. My participation in hackathons has strengthened my skills in rapid prototyping, collaborative teamwork, and problem-solving under pressure.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              I also specialize as a <strong>Technical SEO Expert</strong>, optimizing website performance, improving crawlability, and ensuring proper indexing to boost search rankings and user experience.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              Beyond coding and SEO, I enjoy exploring emerging technologies, contributing to open-source projects, and continuously expanding my knowledge in the ever-evolving field of computer engineering.
            </p>

            <ul className="list-disc ml-5 text-lg leading-relaxed">
              <li>SEO Strategy and Consultation</li>
              <li>Technical SEO Audits</li>
              <li>On-Page and Off-Page Optimization</li>
              <li>Website Performance & Crawlability Improvement</li>
              <li>Keyword Research and Competitive Analysis</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
