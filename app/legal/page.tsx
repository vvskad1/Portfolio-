import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal — V.V.S. Krishna Aditya",
  description: "Privacy policy, terms of use, and legal information for this portfolio website.",
}

/**
 * Legal Page
 * Privacy policy, terms of use, and legal information
 */
export default function LegalPage() {
  return (
    <section aria-labelledby="legal-title" className="space-y-8 max-w-4xl">
      <div className="space-y-4">
        <h1 id="legal-title" className="text-3xl font-bold tracking-tight">
          Legal Information
        </h1>
        <p className="text-lg text-fg/80 leading-relaxed">
          Information about privacy, data usage, and terms for this portfolio website.
        </p>
      </div>

      <div className="space-y-8">
        <section aria-labelledby="privacy-heading">
          <h2 id="privacy-heading" className="text-2xl font-semibold mb-4">
            Privacy Policy
          </h2>
          <div className="bg-muted/30 border border-border rounded-xl p-6 space-y-4">
            <p className="text-fg/80">
              <strong>Last updated:</strong> October 30, 2025
            </p>
            <p className="text-fg/80 leading-relaxed">
              This portfolio website is designed with privacy in mind. We do not collect, 
              store, or process personal information beyond basic web analytics for 
              improving user experience.
            </p>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">What we collect:</h3>
              <ul className="list-disc pl-6 space-y-1 text-fg/80">
                <li>Basic web analytics (page views, referrers) via privacy-focused tools</li>
                <li>No personal information is collected through contact forms</li>
                <li>No cookies are set by this website directly</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Third-party services:</h3>
              <ul className="list-disc pl-6 space-y-1 text-fg/80">
                <li>Hosting provided by Vercel (see their privacy policy)</li>
                <li>Optional analytics may be provided by privacy-focused services</li>
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="terms-heading">
          <h2 id="terms-heading" className="text-2xl font-semibold mb-4">
            Terms of Use
          </h2>
          <div className="bg-muted/30 border border-border rounded-xl p-6 space-y-4">
            <p className="text-fg/80 leading-relaxed">
              This website is a personal portfolio showcasing professional work and experience. 
              All content is provided for informational purposes.
            </p>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Usage terms:</h3>
              <ul className="list-disc pl-6 space-y-1 text-fg/80">
                <li>Content is for personal and professional reference</li>
                <li>Code examples and snippets are provided as-is for educational purposes</li>
                <li>No warranty is provided for any information or code shared</li>
                <li>Professional work remains property of respective clients/employers</li>
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="copyright-heading">
          <h2 id="copyright-heading" className="text-2xl font-semibold mb-4">
            Copyright & Attribution
          </h2>
          <div className="bg-muted/30 border border-border rounded-xl p-6 space-y-4">
            <p className="text-fg/80 leading-relaxed">
              © {new Date().getFullYear()} V.V.S. Krishna Aditya. All rights reserved.
            </p>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Open source acknowledgments:</h3>
              <ul className="list-disc pl-6 space-y-1 text-fg/80">
                <li>Built with Next.js, React, TypeScript, and Tailwind CSS</li>
                <li>Icons provided by Lucide React</li>
                <li>Animations powered by Framer Motion</li>
                <li>Theme management by next-themes</li>
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="text-2xl font-semibold mb-4">
            Questions?
          </h2>
          <p className="text-fg/80 leading-relaxed">
            If you have any questions about this privacy policy or these terms, 
            please <a href="/contact" className="text-accent hover:underline underline-offset-2">get in touch</a>.
          </p>
        </section>
      </div>
    </section>
  )
}