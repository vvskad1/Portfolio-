import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Work — V.V.S. Krishna Aditya",
  description: "Selected projects and case studies showcasing backend API development, AI integration, and system optimization work.",
}

/**
 * Work Page
 * Portfolio grid showcasing selected projects and case studies
 */
export default function WorkPage() {
  return (
    <section aria-labelledby="work-title" className="space-y-8">
      <div className="space-y-4">
        <h1 id="work-title" className="text-3xl font-bold tracking-tight">
          Selected Work
        </h1>
        <p className="text-lg text-fg/80 max-w-2xl leading-relaxed">
          A curated collection of projects that demonstrate my expertise in backend API development,
          AI system integration, and performance optimization.
        </p>
      </div>

      {/* Project Grid Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Card Placeholders */}
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="group relative bg-muted/30 border border-border rounded-2xl p-6 hover:bg-muted/50 transition-colors duration-200"
          >
            <div className="aspect-video bg-muted rounded-lg mb-4" />
            <h3 className="text-lg font-semibold mb-2">Project {i + 1}</h3>
            <p className="text-fg/70 text-sm mb-4">
              Coming soon - detailed case study with project overview, technical implementation, and outcomes.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">
                TypeScript
              </span>
              <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">
                React
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-8">
        <p className="text-fg/60">
          More detailed project case studies coming soon. Each will include technical deep-dives,
          design decisions, and measurable outcomes.
        </p>
      </div>
    </section>
  )
}