import { ArrowDown } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Resume from "@/components/resume"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section id="home" className="py-20 md:py-32">
          <Hero />
          <div className="flex justify-center mt-16 animate-bounce">
            <Link href="#about" className="rounded-full p-2 bg-primary/10 text-primary">
              <ArrowDown size={24} />
            </Link>
          </div>
        </section>

        <section id="about" className="py-20">
          <About />
        </section>

        <section id="projects" className="py-20">
          <Projects />
        </section>

        <section id="skills" className="py-20">
          <Skills />
        </section>

        <section id="resume" className="py-20">
          <Resume />
        </section>

        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}
