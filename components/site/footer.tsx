import Link from "next/link"
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/content/home"
import { Mail, Linkedin, Github } from "lucide-react"

/**
 * Site Footer Component
 * Simple footer with copyright and links
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 mt-16 bg-muted/5" role="contentinfo">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div>
            <p className="font-semibold text-lg">{PERSONAL_INFO.name}</p>
            <p className="mt-1 text-fg/70">Backend Engineer | Graduate Research Assistant</p>
            <p className="mt-2 text-sm text-fg/60">
              Designing and optimizing REST APIs with expertise in Java, Spring Boot, and FastAPI.
            </p>
          </div>

          <div className="md:text-right">
            <nav className="flex flex-col gap-3 text-sm" aria-label="Footer links">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-accent hover:underline font-medium flex items-center gap-2 md:justify-end"
              >
                <Mail className="w-4 h-4" />
                {PERSONAL_INFO.email}
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg/70 hover:text-accent flex items-center gap-2 md:justify-end"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg/70 hover:text-accent flex items-center gap-2 md:justify-end"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-border/30 text-sm text-fg/60">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
            <p>Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}