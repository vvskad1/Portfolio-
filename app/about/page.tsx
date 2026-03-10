import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About — V.V.S. Krishna Aditya",
  description: "Backend Engineer with 2+ years of experience designing high-performance REST APIs and integrating AI systems.",
}

/**
 * About Page
 * Personal background, philosophy, and approach to technology
 */
export default function AboutPage() {
  return (
    <section aria-labelledby="about-title" className="space-y-8">
      <div className="space-y-4">
        <h1 id="about-title" className="text-3xl font-bold tracking-tight">
          About Me
        </h1>
        <p className="text-lg text-fg/80 max-w-2xl leading-relaxed">
          I'm a Backend Engineer passionate about building high-performance REST APIs and integrating
          cutting-edge AI capabilities while maintaining production-grade reliability and scalability.
        </p>
      </div>

      <div className="space-y-8">
        <section aria-labelledby="background-heading" className="space-y-4">
          <h2 id="background-heading" className="text-2xl font-semibold">
            Background
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-fg/80 leading-relaxed">
              As a Backend Engineer with 2+ years of experience, I specialize in designing and optimizing
              REST APIs using Java (Spring Boot) and FastAPI. My expertise lies in improving API performance
              through intelligent caching strategies, query optimization, and integrating LLM-based systems
              using RAG and vector search technologies.
            </p>
            <p className="text-fg/80 leading-relaxed">
              I believe that great backend systems should be both powerful and elegant—handling complex
              operations efficiently while maintaining clean, maintainable code. This philosophy guides my
              approach to every project, from initial architecture design through to production deployment
              and ongoing optimization.
            </p>
          </div>
        </section>

        <section aria-labelledby="philosophy-heading" className="space-y-4">
          <h2 id="philosophy-heading" className="text-2xl font-semibold">
            Philosophy
          </h2>
          <div className="bg-muted/30 border border-border rounded-xl p-6 space-y-4">
            <blockquote className="text-lg italic text-fg/90 border-l-4 border-accent pl-4">
              "Great APIs should be fast, reliable, and intuitive — optimized for performance
              while remaining maintainable and scalable as systems grow."
            </blockquote>
            <p className="text-fg/80">
              This principle drives my work in creating robust backend systems that handle complex
              operations efficiently while integrating modern AI capabilities like RAG and vector search.
            </p>
          </div>
        </section>

        <section aria-labelledby="interests-heading" className="space-y-4">
          <h2 id="interests-heading" className="text-2xl font-semibold">
            Current Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Technical</h3>
              <ul className="space-y-1 text-fg/80 text-sm">
                <li>• REST API architecture & optimization</li>
                <li>• LLM integration & RAG systems</li>
                <li>• Database query optimization</li>
                <li>• Microservices architecture</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Learning</h3>
              <ul className="space-y-1 text-fg/80 text-sm">
                <li>• Advanced distributed systems</li>
                <li>• Vector databases & semantic search</li>
                <li>• Production ML systems</li>
                <li>• System design at scale</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}