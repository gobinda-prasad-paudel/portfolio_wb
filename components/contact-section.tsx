import { Mail, Linkedin, Github, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getPortfolioProfile } from "@/lib/db"

export default async function ContactSection() {
  const profile = await getPortfolioProfile()

  if (!profile) {
    return null
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Let's work together</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {/* Email */}
          <Card className="p-6 hover:shadow-lg transition-all hover:border-primary/50">
            <div className="flex flex-col items-center">
              <div className="p-3 rounded-lg bg-primary/10 mb-4">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <a
                href={`mailto:${profile.email}`}
                className="text-primary hover:text-accent transition-colors break-all"
              >
                {profile.email}
              </a>
            </div>
          </Card>

          {/* LinkedIn */}
          {profile.linkedin_url && (
            <Card className="p-6 hover:shadow-lg transition-all hover:border-primary/50">
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-lg bg-primary/10 mb-4">
                  <Linkedin className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">LinkedIn</h3>
                <a
                  href={profile.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors"
                >
                  Connect
                </a>
              </div>
            </Card>
          )}

          {/* GitHub */}
          {profile.github_url && (
            <Card className="p-6 hover:shadow-lg transition-all hover:border-primary/50">
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-lg bg-primary/10 mb-4">
                  <Github className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">GitHub</h3>
                <a
                  href={profile.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors"
                >
                  View code
                </a>
              </div>
            </Card>
          )}

          {/* CV */}
          {profile.cv_url && (
            <Card className="p-6 hover:shadow-lg transition-all hover:border-primary/50">
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-lg bg-primary/10 mb-4">
                  <FileText className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">CV</h3>
                <a
                  href={profile.cv_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors"
                >
                  CV
                </a>
              </div>
            </Card>
          )}
        </div>

        {/* Direct Email Button */}
        <a href={`mailto:${profile.email}`}>
          <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground">
            <Mail className="mr-2" size={20} />
            Send me an email
          </Button>
        </a>
      </div>
    </section>
  )
}
