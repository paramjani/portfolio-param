"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Air Pollen Index Website",
    description:
      "An air quality monitoring tool that provides real-time data on pollen levels and air quality metrics. Helps users with allergies and respiratory conditions make informed decisions about outdoor activities.",
    techStack: ["Next.js", "Tailwind CSS", "REST API", "Chart.js"],
    githubLink: "https://github.com/Vishw-modi/Air_Pollen_Index",
    demoLink: "#",
  },
]

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4"></div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each project represents my skills and passion for creating
          innovative solutions.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button asChild variant="outline" size="sm">
                  <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
