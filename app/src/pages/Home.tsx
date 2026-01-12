import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { info, skills, socialLinks } from '@/constants/data';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8"
          >
            {/* Left Section - Text */}
            <div>
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hello, I am
              </motion.h1>
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Gobinda Prasad Paudel
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Web Developer, IoT Engineer, Embedded Systems Expert & AI Enthusiast
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link to="/projects">
                  <Button size="lg" className="group hero-gradient hover:scale-105 transition-smooth glow-primary">
                    View My Projects
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </Link>

                <Link to={"/cv"}>

                  <Button variant="outline" size="lg" className="glass hover:scale-105 transition-smooth">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                className="flex space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Button variant="ghost" size="sm" className="hover:text-primary transition-smooth">
                  <Link to={socialLinks[0].url}><Github className="h-5 w-5" /> </Link>

                </Button>
                <Button variant="ghost" size="sm" className="hover:text-primary transition-smooth">
                  <Link to={socialLinks[1].url} >  <Linkedin className="h-5 w-5" /></Link>

                </Button>
                <Button variant="ghost" size="sm" className="hover:text-primary transition-smooth">
                  <a href={`mailto:${info[1].email}`}>
                    <Mail className="h-5 w-5" />
                  </a>


                </Button>
              </motion.div>
            </div>

            {/* Right Section - Responsive Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.03 }}
              className="flex justify-center md:justify-start items-"
            >
              <img
                src="/photo2.jpg"
                alt="Gobinda Paudel"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg 
               rounded-3xl shadow-xl object-cover"
              />
            </motion.div>


          </motion.div>

        </div>

        {/* Floating Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0
              }}
              animate={{
                y: -100,
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating innovative solutions across multiple technology domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, techs], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 glass hover:glow-primary transition-smooth h-full">
                <h3 className="text-lg font-semibold mb-4 text-primary">{category}</h3>
                <div className="space-y-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-muted/50 text-sm px-3 py-1 rounded-full mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-12 glass hero-gradient">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to collaborate?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life with cutting-edge technology
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="hover:scale-105 transition-smooth">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;