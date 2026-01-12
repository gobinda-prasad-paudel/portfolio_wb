import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/constants/data';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link to="/projects">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-smooth" />
              Back to Projects
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Project Image */}
              <Card className="overflow-hidden mb-8">
                <div className="aspect-video bg-muted">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              {/* Project Title and Category */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="capitalize">
                    <Tag className="w-3 h-3 mr-1" />
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge variant="default">Featured</Badge>
                  )}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {project.title}
                </h1>
                
                <p className="text-xl text-muted-foreground">
                  {project.description}
                </p>
              </div>

              {/* Project Description */}
              <Card className="p-8 glass mb-8">
                <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>
              </Card>

              {/* Technologies Used */}
              <Card className="p-8 glass">
                <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="sticky top-24"
            >
              <Card className="p-6 glass mb-6">
                <h3 className="text-lg font-semibold mb-4">Project Links</h3>
                <div className="space-y-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full justify-start">
                        <Github className="mr-2 h-4 w-4" />
                        View Source Code
                      </Button>
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button variant="outline" className="w-full justify-start">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </Card>

              {/* Project Stats */}
              <Card className="p-6 glass">
                <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Tag className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Category:</span>
                    <span className="ml-auto capitalize font-medium">{project.category}</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Status:</span>
                    <span className="ml-auto text-green-400 font-medium">Completed</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Related Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-8">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(p => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject) => (
                <Card key={relatedProject.id} className="group overflow-hidden glass hover:glow-accent transition-smooth">
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img 
                      src={relatedProject.imageUrl} 
                      alt={relatedProject.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-smooth">
                      {relatedProject.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {relatedProject.description}
                    </p>
                    <Link to={`/projects/${relatedProject.id}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        View Project
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;