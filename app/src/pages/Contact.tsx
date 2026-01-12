import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Github, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { info, socialLinks } from '@/constants/data';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [state, handleSubmit] = useForm("xpwjjako"); // <-- Formspree form ID
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const getIcon = (iconName: string) => {
    const icons = { Github, Linkedin, Twitter, Mail, MessageCircle, Youtube };
    return icons[iconName as keyof typeof icons] || Mail;
  };

  const getSocialColor = (name: string) => {
    const colors = {
      GitHub: 'hover:text-gray-400',
      LinkedIn: 'hover:text-blue-500',
      Twitter: 'hover:text-sky-400',
      Email: 'hover:text-red-500',
      Discord: 'hover:text-indigo-500',
      YouTube: 'hover:text-red-600'
    };
    return colors[name as keyof typeof colors] || 'hover:text-primary';
  };

  return (
    <div className="min-h-screen py-12 container mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h1>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="p-8 glass">
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

            {state.succeeded ? (
              <p className="text-green-600 font-medium">
                ✅ Thanks! Your message has been sent.
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  if (!captchaToken) {
                    e.preventDefault();
                    alert("Please complete the reCAPTCHA.");
                    return;
                  }
                  handleSubmit(e);
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" placeholder="John" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" placeholder="Doe" className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" className="mt-2" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="Project Collaboration" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    className="mt-2 resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                {/* reCAPTCHA */}
                <ReCAPTCHA
                  sitekey="6LdECLsrAAAAAM4GURY5Pm2rxD8mAlFtWLTsrMmw"  // <-- replace with your actual site key
                  onChange={handleCaptchaChange}
                />

                <Button
                  type="submit"
                  disabled={state.submitting || !captchaToken}
                  className="w-full hero-gradient hover:scale-105 transition-smooth glow-primary"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </Card>
        </motion.div>




        {/* Contact Info & Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          {/* Quick Contact */}
          <Card className="p-8 glass">
            <h2 className="text-2xl font-bold mb-6">Quick Contact</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href={`mailto:${info[1].email}`}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {info[1].email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Response Time</p>
                  <p className="text-muted-foreground">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Social Media */}
          <Card className="p-8 glass">
            <h2 className="text-2xl font-bold mb-6">Follow Me</h2>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = getIcon(social.icon);
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`flex items-center space-x-3 p-4 rounded-lg glass hover:glow-accent transition-smooth group ${getSocialColor(social.name)}`}
                  >
                    <Icon className="h-5 w-5 transition-smooth" />
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </Card>

          {/* Availability */}
          <Card className="p-8 glass hero-gradient">
            <div className="text-center text-white">
              <h3 className="text-xl font-bold mb-3">Available for Projects</h3>
              <p className="text-white/80 mb-4">
                I'm currently open to new opportunities and exciting collaborations
              </p>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Available Now</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <Card className="p-12 glass text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Build Something Amazing Together</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            Whether you have a project in mind, need consultation, or just want to chat about technology,
            I'm always excited to connect with fellow developers and innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${info[1].email}`}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <Button size="lg" className="hero-gradient hover:scale-105 transition-smooth">
                <Mail className="mr-2 h-4 w-4" />
                Start a Conversation
              </Button>
            </a>
            <Link to={socialLinks[0].url}>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-smooth">
                <Github className="mr-2 h-4 w-4" />
                View My Work
              </Button>
            </Link>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Contact;
