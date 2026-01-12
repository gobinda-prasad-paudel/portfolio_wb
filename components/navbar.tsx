"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

import { PortfolioProfile } from "@/lib/db"
import { useTheme } from "@/app/hooks/use-theme"

interface NavbarProps {
  profile: PortfolioProfile | null
}
export default function Navbar({ profile }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme, mounted } = useTheme()

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary hover:text-accent transition-colors">
            <span className="md:hidden">
              {profile?.name?.split(' ')[0] || "MyPortfolio"}
            </span>
            <span className="hidden md:inline">
              {profile?.name || "MyPortfolio"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Section - CTA Button + Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary"
                title={`Current theme: ${theme}`}
              >
                {theme === "dark" ||
                  (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? (
                  <Sun size={20} />
                ) : (
                  <Moon size={20} />
                )}
              </button>
            )}
            <Link href="#contact">
              <Button className="bg-primary hover:bg-accent text-primary-foreground">Get in touch</Button>
            </Link>
          </div>

          {/* Mobile Menu Button + Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary"
                title={`Current theme: ${theme}`}
              >
                {theme === "dark" ||
                  (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? (
                  <Sun size={20} />
                ) : (
                  <Moon size={20} />
                )}
              </button>
            )}
            <button onClick={() => setIsOpen(!isOpen)} className="p-2" aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link href="#contact" className="block mt-4">
              <Button className="w-full bg-primary hover:bg-accent text-primary-foreground">Get in touch</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}