/**
 * Skip Link Component for Accessibility
 * Provides keyboard users a way to skip directly to main content
 */
export default function SkipLink() {
  return (
    <a 
      href="#main" 
      className="sr-only focus:not-sr-only fixed left-4 top-4 z-50 bg-muted text-fg px-3 py-2 rounded border border-border shadow-lg font-medium transition-all duration-200"
    >
      Skip to content
    </a>
  )
}