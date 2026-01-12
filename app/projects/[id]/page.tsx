import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getProjectById, getAllProjects, getPortfolioProfile } from "@/lib/db"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const profile = await getPortfolioProfile()
  const project = await getProjectById(Number.parseInt(resolvedParams.id))

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - ${profile?.name || "Portfolio"}`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      images: project.image_url
        ? [
            {
              url: project.image_url,
              width: 1200,
              height: 630,
              alt: project.title,
            },
          ]
        : [],
    },
  }
}

export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}

async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const resolvedParams = await params
  const project = await getProjectById(Number.parseInt(resolvedParams.id))

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Back Button */}
        <Link href="/#projects" className="inline-flex items-center gap-2 text-primary hover:text-accent mb-8">
          <ArrowLeft size={20} />
          Back to projects
        </Link>

        {/* Project Image - Contained and Rounded */}
        <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden bg-secondary rounded-2xl mb-8 ring-1 ring-border">
          <Image
            src={project.image_url || "/placeholder.svg?height=600&width=1000&query=project"}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{project.title}</h1>

          <div className="flex flex-wrap items-center gap-6 mb-6">
            {project.date_completed && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={20} />
                <span>
                  {new Date(project.date_completed).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            )}
          </div>

          {/* Tags */}
          {project.tags && (
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.split(",").map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag.trim()}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <Separator className="mb-12" />

        {/* Description */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-wrap">{project.description}</p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {project.live_url && (
            <a href={project.live_url} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-primary hover:bg-accent text-primary-foreground">
                <ExternalLink className="mr-2" size={18} />
                Live Demo
              </Button>
            </a>
          )}
          {project.demo_url && (
            <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-primary hover:bg-accent text-primary-foreground">
                <ExternalLink className="mr-2" size={18} />
                Try Demo
              </Button>
            </a>
          )}
          {project.github_url && (
            <a href={project.github_url} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full">
                <Github className="mr-2" size={18} />
                View Code
              </Button>
            </a>
          )}
        </div>

        <Separator className="mb-12" />

        {/* Related Projects */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">More Projects</h2>
          <Link href="/#projects">
            <Button variant="outline">
              View all projects
              <ArrowLeft className="ml-2 rotate-180" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailPage