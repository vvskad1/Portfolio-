"use client"

import Link from "next/link"
import { ArrowLeft, Home, Search } from "lucide-react"

/**
 * 404 Not Found Page
 * Helpful error page with navigation options
 */
export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold text-accent">404</h1>
        <h2 className="text-2xl font-semibold text-fg">Page Not Found</h2>
        <p className="text-lg text-fg/70 max-w-md">
          The page you're looking for doesn't exist or may have been moved.
        </p>
      </div>

      {/* Navigation Options */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-200 font-medium"
        >
          <Home size={18} />
          Go Home
        </Link>
        
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors duration-200 font-medium"
        >
          <ArrowLeft size={18} />
          Go Back
        </button>
      </div>

      {/* Helpful Links */}
      <div className="pt-8 border-t border-border/50 w-full max-w-md">
        <p className="text-sm text-fg/60 mb-4">You might be looking for:</p>
        <nav className="space-y-2">
          <Link 
            href="/work" 
            className="block text-accent hover:underline underline-offset-2"
          >
            Portfolio & Work
          </Link>
          <Link 
            href="/experience" 
            className="block text-accent hover:underline underline-offset-2"
          >
            Experience & Skills
          </Link>
          <Link 
            href="/about" 
            className="block text-accent hover:underline underline-offset-2"
          >
            About Me
          </Link>
          <Link 
            href="/contact" 
            className="block text-accent hover:underline underline-offset-2"
          >
            Contact Information
          </Link>
        </nav>
      </div>
    </section>
  )
}