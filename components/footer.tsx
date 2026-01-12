import { PortfolioProfile } from "@/lib/db"
import { profile } from "console"
import { Mail, Github, Linkedin } from "lucide-react"

interface NavbarProps {
profile: PortfolioProfile | null
}
export default function Footer({ profile }: NavbarProps) {
  const currentYear = new Date().getFullYear()


  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-2">{profile?.name}</h3>
            <p className="text-sm opacity-80">{profile?.title}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="mailto:sarah@example.com" className="hover:text-primary transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/sarahchen"
                className="hover:text-primary transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/sarahchen"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          <p className="text-sm text-center opacity-75">© 2024 - {currentYear}  {profile?.name || "Portfolio"}. Built with Next.js and Neon.</p>
        </div>
      </div>
    </footer>
  )
}
