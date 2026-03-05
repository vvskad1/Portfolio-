import type { Metadata } from "next"
import { Mail, MessageCircle, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact — Venkata Sai Krishna Aditya Vatturi",
  description: "Get in touch for collaboration opportunities, technical discussions, or project inquiries.",
}

/**
 * Contact Page
 * Contact information and collaboration opportunities
 */
export default function ContactPage() {
  return (
    <section aria-labelledby="contact-title" className="space-y-8">
      <div className="space-y-4">
        <h1 id="contact-title" className="text-3xl font-bold tracking-tight">
          Get In Touch
        </h1>
        <p className="text-lg text-fg/80 max-w-2xl leading-relaxed">
          I'm always interested in discussing new opportunities, technical challenges,
          and collaborative projects. Let's explore how we can work together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Methods */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Let's Connect</h2>

          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors duration-200">
              <Mail className="mt-1 h-5 w-5 text-accent" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-fg/70 mb-2">
                  For project inquiries and collaboration
                </p>
                <a
                  href="mailto:your.email@example.com"
                  className="text-accent hover:underline underline-offset-2"
                >
                  your.email@example.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors duration-200">
              <MessageCircle className="mt-1 h-5 w-5 text-accent" />
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <p className="text-sm text-fg/70 mb-2">
                  Professional networking and updates
                </p>
                <a
                  href="#"
                  className="text-accent hover:underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors duration-200">
              <Calendar className="mt-1 h-5 w-5 text-accent" />
              <div>
                <h3 className="font-medium">Schedule a Call</h3>
                <p className="text-sm text-fg/70 mb-2">
                  For detailed discussions about projects
                </p>
                <a
                  href="#"
                  className="text-accent hover:underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a meeting
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration Types */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Collaboration Opportunities</h2>

          <div className="space-y-4">
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Backend API Development</h3>
              <p className="text-sm text-fg/70">
                RESTful API design and optimization using Spring Boot and FastAPI,
                specializing in high-performance, scalable backend systems.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">AI Integration</h3>
              <p className="text-sm text-fg/70">
                Implementing AI capabilities into existing applications,
                API integrations, and custom AI-powered features.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Technical Consulting</h3>
              <p className="text-sm text-fg/70">
                Architecture reviews, performance optimization,
                technology stack decisions, and development best practices.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Mentoring & Training</h3>
              <p className="text-sm text-fg/70">
                Code reviews, technical mentoring, and team training
                on modern web development practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-border/50">
        <p className="text-sm text-fg/60 text-center">
          Response time is typically within 24-48 hours. Looking forward to hearing from you!
        </p>
      </div>
    </section>
  )
}