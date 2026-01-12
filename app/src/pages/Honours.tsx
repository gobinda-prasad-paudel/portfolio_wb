import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, FileText, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { honours } from '@/constants/data';

const Honours = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'award':
        return Trophy;
      case 'certification':
        return FileText;
      case 'recognition':
        return Star;
      default:
        return Award;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'award':
        return 'text-yellow-500';
      case 'certification':
        return 'text-blue-500';
      case 'recognition':
        return 'text-purple-500';
      default:
        return 'text-primary';
    }
  };

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'award':
        return 'default';
      case 'certification':
        return 'secondary';
      case 'recognition':
        return 'outline';
      default:
        return 'default';
    }
  };

  return (
    <div className="min-h-screen py-12 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Honours & Achievements</h1>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          A collection of awards, certifications, and recognitions that mark my journey in technology
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
      >
        <Card className="p-6 text-center glass hover:glow-primary transition-smooth">
          <Trophy className="h-8 w-8 mx-auto mb-3 text-yellow-500" />
          <h3 className="text-2xl font-bold mb-2">
            {honours.filter(h => h.type === 'award').length}
          </h3>
          <p className="text-muted-foreground">Awards Won</p>
        </Card>
        
        <Card className="p-6 text-center glass hover:glow-primary transition-smooth">
          <FileText className="h-8 w-8 mx-auto mb-3 text-blue-500" />
          <h3 className="text-2xl font-bold mb-2">
            {honours.filter(h => h.type === 'certification').length}
          </h3>
          <p className="text-muted-foreground">Certifications</p>
        </Card>
        
        <Card className="p-6 text-center glass hover:glow-primary transition-smooth">
          <Star className="h-8 w-8 mx-auto mb-3 text-purple-500" />
          <h3 className="text-2xl font-bold mb-2">
            {honours.filter(h => h.type === 'recognition').length}
          </h3>
          <p className="text-muted-foreground">Recognitions</p>
        </Card>
      </motion.div>

      {/* Honours Timeline */}
      <div className="space-y-8">
        {honours.map((honour, index) => {
          const Icon = getIcon(honour.type);
          
          return (
            <motion.div
              key={honour.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              <Card className="p-8 glass hover:glow-accent transition-smooth">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center">
                      <Icon className={`h-8 w-8 ${getIconColor(honour.type)}`} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-semibold mb-2 sm:mb-0">
                        {honour.title}
                      </h3>
                      <div className="flex items-center gap-3">
                        <Badge variant={getBadgeVariant(honour.type)} className="capitalize">
                          {honour.type}
                        </Badge>
                        <span className="text-lg font-bold text-primary">{honour.year}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground font-medium mb-3">
                      {honour.organization}
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {honour.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <Card className="p-12 glass hero-gradient">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Always Learning, Always Growing
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            These achievements represent my commitment to excellence and continuous learning in technology
          </p>
        </Card>
      </motion.div>
    </div>
  );
};

export default Honours;