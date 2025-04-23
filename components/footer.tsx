import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/40 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-4">
            <Link
              href="https://github.com/paramjani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/param-v-jani-4ab9651b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:janiparam61@gmail.com"
              className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Param Jani. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
