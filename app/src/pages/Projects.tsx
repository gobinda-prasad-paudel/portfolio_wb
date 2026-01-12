import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/constants/data';

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const categories = ['all', 'web', 'iot', 'ai', 'embedded'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen py-12 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          A collection of projects showcasing my expertise in web development, IoT, embedded systems, and AI
        </p>
      </motion.div>

      {/* Featured Projects */}
      <section className="mb-16">
        <motion.h2 
          className="text-2xl font-bold mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="group overflow-hidden glass hover:glow-primary transition-smooth">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="capitalize">
                      {project.category}
                    </Badge>
                    <div className="flex space-x-2">
                      {project.githubUrl && (
                        <Button variant="ghost" size="sm">
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-muted px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-muted-foreground">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <Link to={`/projects/${project.id}`}>
                    <Button className="w-full group-hover:scale-105 transition-smooth">
                      View Details
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Filter */}
      <motion.div 
        className="flex items-center gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Filter className="h-5 w-5 text-muted-foreground" />
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className="capitalize transition-smooth"
            >
              {category}
            </Button>
          ))}
        </div>
      </motion.div>

      {/* All Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            layout
          >
            <Card className="group overflow-hidden glass hover:glow-accent transition-smooth h-full">
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
              </div>
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="capitalize">
                    {project.category}
                  </Badge>
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <Button variant="ghost" size="sm">
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-muted px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="text-xs text-muted-foreground px-2 py-1">
                      +{project.technologies.length - 2}
                    </span>
                  )}
                </div>
                
                <Link to={`/projects/${project.id}`} className="mt-auto">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;