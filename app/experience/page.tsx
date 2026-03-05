import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experience — V.V.S. Krishna Aditya",
  description: "3 years of professional experience in backend development, API design, and AI system integration.",
}

/**
 * Experience Page
 * Professional background, skills, and career timeline
 */
export default function ExperiencePage() {
  return (
    <section aria-labelledby="experience-title" className="space-y-8">
      <div className="space-y-4">
        <h1 id="experience-title" className="text-3xl font-bold tracking-tight">
          Professional Experience
        </h1>
        <p className="text-lg text-fg/80 max-w-2xl leading-relaxed">
          3 years of experience building scalable backend systems, optimizing REST APIs, and
          integrating AI/ML capabilities with production-grade reliability.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        <section aria-labelledby="current-role">
          <h2 id="current-role" className="text-2xl font-semibold mb-6">
            Current Role
          </h2>
          <div className="bg-muted/30 border border-border rounded-xl p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-xl font-semibold">Graduate Research Assistant</h3>
              <span className="text-sm text-fg/60 font-medium">Oct 2025 - Present</span>
            </div>
            <p className="text-base text-fg/70 font-medium">California State University, East Bay</p>
            <p className="text-fg/80 leading-relaxed">
              Designing and implementing reproducible ML lifecycles, deploying models as production-ready
              FastAPI services. Building LLM evaluation frameworks to benchmark prompt strategies and
              retrieval accuracy. Enhancing system observability through structured logging and validation
              frameworks, reducing debugging time for research APIs.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-accent/10 text-accent rounded text-sm font-medium">
                FastAPI
              </span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded text-sm font-medium">
                ML Lifecycle
              </span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded text-sm font-medium">
                LLM Evaluation
              </span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded text-sm font-medium">
                Python
              </span>
            </div>
          </div>
        </section>

        <section aria-labelledby="skills-section">
          <h2 id="skills-section" className="text-2xl font-semibold mb-6">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Backend & APIs</h3>
              <ul className="space-y-1 text-fg/80">
                <li>Spring Boot (Java)</li>
                <li>FastAPI (Python)</li>
                <li>RESTful Microservices</li>
                <li>WebSockets</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Databases</h3>
              <ul className="space-y-1 text-fg/80">
                <li>PostgreSQL & MongoDB</li>
                <li>Redis Caching</li>
                <li>Query Optimization</li>
                <li>Vector Search</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">AI & DevOps</h3>
              <ul className="space-y-1 text-fg/80">
                <li>RAG & LLM APIs</li>
                <li>Semantic Caching</li>
                <li>Docker & CI/CD</li>
                <li>Testing Frameworks</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}