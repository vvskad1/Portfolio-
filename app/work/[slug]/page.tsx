import type { Metadata } from "next"
import { notFound } from "next/navigation"

interface WorkSlugPageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: WorkSlugPageProps): Metadata {
  return {
    title: `${params.slug} — Case Study — V.V.S. Krishna Aditya`,
    description: `Detailed case study of the ${params.slug} project showcasing technical implementation and outcomes.`,
  }
}

/**
 * Dynamic Work Case Study Page
 * Individual project case studies with detailed technical breakdowns
 */
export default function WorkSlugPage({ params }: WorkSlugPageProps) {
  const { slug } = params

  return (
    <article aria-labelledby="case-study-title" className="space-y-8">
      <div className="space-y-4">
        <h1 id="case-study-title" className="text-3xl font-bold tracking-tight capitalize">
          {slug.replace(/-/g, ' ')} Case Study
        </h1>
        <p className="text-lg text-fg/80 leading-relaxed">
          Coming soon - A comprehensive breakdown of this project including technical challenges, 
          solutions implemented, and measurable outcomes.
        </p>
      </div>

      {/* Project Overview */}
      <section aria-labelledby="overview-heading" className="space-y-4">
        <h2 id="overview-heading" className="text-2xl font-semibold">
          Project Overview
        </h2>
        <div className="bg-muted/30 border border-border rounded-xl p-6">
          <p className="text-fg/70">
            This case study will include detailed technical documentation, architecture decisions, 
            user experience considerations, and performance metrics for the <strong>{slug}</strong> project.
          </p>
        </div>
      </section>

      {/* Technical Stack */}
      <section aria-labelledby="tech-heading" className="space-y-4">
        <h2 id="tech-heading" className="text-2xl font-semibold">
          Technical Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium">
            TypeScript
          </span>
          <span className="px-3 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium">
            React
          </span>
          <span className="px-3 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium">
            Next.js
          </span>
        </div>
      </section>

      {/* Back to Work */}
      <nav className="pt-8 border-t border-border/50">
        <a 
          href="/work" 
          className="inline-flex items-center text-accent hover:underline underline-offset-4"
        >
          ← Back to all work
        </a>
      </nav>
    </article>
  )
}