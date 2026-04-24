import type { Metadata } from "next"
import { EXPERIENCE } from "@/content/home"

export const metadata: Metadata = {
  title: "Experience — V.V.S. Krishna Aditya",
  description: "3+ years of professional experience in backend development, AI/ML engineering, and production-grade API and ML pipeline design.",
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
          3+ years of experience building scalable backend systems, optimizing REST APIs, and
          integrating AI/ML capabilities — from ML pipelines and LLM fine-tuning at JP Morgan Chase
          to production-grade RAG systems in research and startup environments.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        <section aria-labelledby="work-history">
          <h2 id="work-history" className="text-2xl font-semibold mb-6">
            Work History
          </h2>
          <div className="space-y-6">
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className="bg-muted/30 border border-border rounded-xl p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-base text-accent font-medium">{exp.company}</p>
                    {exp.location && (
                      <p className="text-sm text-fg/60">{exp.location}</p>
                    )}
                  </div>
                  <span className="text-sm text-fg/60 font-medium whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-fg/80 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-accent/10 text-accent rounded text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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