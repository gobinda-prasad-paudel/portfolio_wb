// FILE: components/projects-section.tsx
"use client"

import { useState } from "react"
import { ArrowRight, ArrowUpDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/db"

interface ProjectsSectionProps {
  initialProjects: Project[]
}

type SortOption = "date-desc" | "date-asc" | "title-asc" | "title-desc"

export default function ProjectsSection({ initialProjects }: ProjectsSectionProps) {
  const [sortBy, setSortBy] = useState<SortOption>("date-desc")
  const [projects, setProjects] = useState(initialProjects)

  const handleSort = (option: SortOption) => {
    setSortBy(option)
    const sorted = [...projects].sort((a, b) => {
      switch (option) {
        case "date-desc":
          return new Date(b.date_completed || 0).getTime() - new Date(a.date_completed || 0).getTime()
        case "date-asc":
          return new Date(a.date_completed || 0).getTime() - new Date(b.date_completed || 0).getTime()
        case "title-asc":
          return a.title.localeCompare(b.title)
        case "title-desc":
          return b.title.localeCompare(a.title)
        default:
          return 0
      }
    })
    setProjects(sorted)
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A selection of my recent work showcasing design, development, and problem-solving across modern web
              technologies.
            </p>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="text-muted-foreground" size={18} />
            <select
              value={sortBy}
              onChange={(e) => handleSort(e.target.value as SortOption)}
              className="px-4 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="date-desc">Newest First</option>
              <option value="date-asc">Oldest First</option>
              <option value="title-asc">Title (A-Z)</option>
              <option value="title-desc">Title (Z-A)</option>
            </select>
          </div>
        </div>

        {/* Projects Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="group">
              <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                {/* Project Image */}
                <div className="relative h-44 overflow-hidden bg-secondary">
                  <Image
                    src={project.image_url || "/placeholder.svg?height=300&width=400&query=project"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Info */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {project.short_description || project.description}
                  </p>

                  {/* Tags */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.split(",").slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                          {tag.trim()}
                        </Badge>
                      ))}
                      {project.tags.split(",").length > 3 && (
                        <Badge variant="secondary" className="text-xs px-2 py-0.5">
                          +{project.tags.split(",").length - 3}
                        </Badge>
                      )}
                    </div>
                  )}

                  {/* Date & Arrow */}
                  <div className="flex items-center justify-between mt-3">
                    {project.date_completed && (
                      <p className="text-xs text-muted-foreground">
                        {new Date(project.date_completed).getFullYear()}
                      </p>
                    )}
                    <div className="flex items-center gap-1.5 text-primary text-sm group-hover:gap-2.5 transition-all ml-auto">
                      <span>View</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

