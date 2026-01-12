import { Mail, Linkedin, Github, ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPortfolioProfile, getAllProjects } from "@/lib/db"
import ContactSection from "@/components/contact-section"
import ProjectsSection from "@/components/projects"

export const revalidate = 3600 // Revalidate every hour for SSR

async function HomePage() {
  const profile = await getPortfolioProfile()
  const projects = await getAllProjects()

  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-background via-background to-secondary/10"
      >
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-pretty">
                  {profile?.name || "Sarah Chen"}
                </h1>
                <p className="text-xl text-primary font-semibold mb-4">
                  {profile?.title || "Full-Stack Developer & Designer"}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg text-pretty">
                  {profile?.bio ||
                    "I craft beautiful, scalable web applications with a focus on user experience and clean code."}
                </p>
              </div>

              {/* CTA Buttons */}

              <div className="flex gap-4 mt-8 flex-wrap">
                <Link href="#contact">
                  <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground">
                    Get in touch <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <Link href="#projects">
                  <Button size="lg" variant="outline">
                    View my work
                  </Button>
                </Link>
                <a href="/cv.pdf" download>
                  <Button size="lg" variant="secondary">
                    <Download className="mr-2" size={18} />
                    Download CV
                  </Button>
                </a>
              </div>

              {/* Contact Info */}
              <div className="flex gap-6 mt-8">
                {profile?.email && (
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail size={20} />
                    <span className="sr-only">Email</span>
                  </a>
                )}
                {profile?.linkedin_url && (
                  <a
                    href={profile.linkedin_url}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={20} />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                )}
                {profile?.github_url && (
                  <a
                    href={profile.github_url}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                    <span className="sr-only">GitHub</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-300">
                <Image
                  src={
                    profile?.profile_image_url ||
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" ||
                    "/placeholder.svg"
                  }
                  alt={profile?.name || "Profile"}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection initialProjects={projects}/>

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}

export default HomePage
