import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Now — V.V.S. Krishna Aditya",
  description: "What I'm currently working on and learning in my professional journey.",
}

/**
 * Now Page
 * Current activities, learning, and focus areas (inspired by nownownow.com)
 */
export default function NowPage() {
  return (
    <section aria-labelledby="now-title" className="space-y-8">
      <div className="space-y-4">
        <h1 id="now-title" className="text-3xl font-bold tracking-tight">
          What I'm Doing Now
        </h1>
        <p className="text-lg text-fg/80 max-w-2xl leading-relaxed">
          A snapshot of my current focus areas, projects, and learning journey. 
          Updated regularly to reflect my evolving interests and work.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Current Projects */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Current Projects</h2>
          
          <div className="space-y-4">
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Portfolio Development</h3>
              <p className="text-sm text-fg/70 mb-3">
                Building this portfolio site with Next.js 15, focusing on performance, 
                accessibility, and showcasing technical capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">
                  Next.js 15
                </span>
                <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">
                  TypeScript
                </span>
                <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">
                  Framer Motion
                </span>
              </div>
            </div>

            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">AI-Powered Tools</h3>
              <p className="text-sm text-fg/70 mb-3">
                Exploring and building developer tools that integrate AI capabilities 
                to enhance productivity and code quality.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">
                  OpenAI API
                </span>
                <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">
                  Python
                </span>
                <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">
                  FastAPI
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Learning & Growth */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Learning & Growth</h2>
          
          <div className="space-y-4">
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Advanced AI Techniques</h3>
              <p className="text-sm text-fg/70">
                Deepening understanding of machine learning concepts, fine-tuning models, 
                and implementing advanced AI features in web applications.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Design Systems at Scale</h3>
              <p className="text-sm text-fg/70">
                Studying how to build and maintain design systems that scale 
                across multiple products and teams.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Leadership & Mentoring</h3>
              <p className="text-sm text-fg/70">
                Developing skills in technical leadership, code reviews, 
                and helping other developers grow in their careers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Current Reading/Resources */}
      <section aria-labelledby="resources-heading" className="space-y-4">
        <h2 id="resources-heading" className="text-2xl font-semibold">
          Currently Reading & Learning From
        </h2>
        <div className="bg-muted/30 border border-border rounded-xl p-6">
          <ul className="space-y-2 text-fg/80">
            <li>• "Designing Data-Intensive Applications" by Martin Kleppmann</li>
            <li>• Latest React and Next.js documentation and best practices</li>
            <li>• AI/ML research papers and implementation guides</li>
            <li>• Accessibility guidelines and inclusive design principles</li>
          </ul>
        </div>
      </section>

      <div className="pt-8 border-t border-border/50">
        <p className="text-sm text-fg/60">
          <strong>Last updated:</strong> October 30, 2025 — This page is regularly updated to reflect current activities and interests.
        </p>
      </div>
    </section>
  )
}