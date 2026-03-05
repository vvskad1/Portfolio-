"use client"

import React, { useState, useEffect, useRef, lazy, Suspense } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { X, ArrowLeft, ExternalLink, Github } from "lucide-react"
import FocusTrap from "focus-trap-react"
import Image from "next/image"
import { getCaseSlugFromHash, clearCaseFromHash, addHashChangeListener } from "@/src/lib/hash"
import type { Project } from "@/src/content/projects"
import { PROJECTS } from "@/src/content/projects"
import MetricPills from "./MetricPills"
import TagChip from "./TagChip"
import ContactOverlay from "../ContactOverlay"

// Lazy load MDX components
const MDXProvider = lazy(() => import('./MDXProvider'))

interface CaseStudyModalProps {
  onClose?: () => void
}

export default function CaseStudyModal({ onClose }: CaseStudyModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentSlug, setCurrentSlug] = useState<string | null>(null)
  const [currentProject, setCurrentProject] = useState<Project | null>(null)
  const [mdxContent, setMdxContent] = useState<React.ComponentType | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [focusedElement, setFocusedElement] = useState<HTMLElement | null>(null)
  const [showContactOverlay, setShowContactOverlay] = useState(false)
  
  const reduce = useReducedMotion()
  const modalRef = useRef<HTMLDivElement>(null)
  
  // Handle hash changes
  useEffect(() => {
    const checkHash = () => {
      const slug = getCaseSlugFromHash()
      if (slug) {
        setCurrentSlug(slug)
        setIsOpen(true)
        // Store the currently focused element to restore later
        setFocusedElement(document.activeElement as HTMLElement)
      } else {
        setIsOpen(false)
        setCurrentSlug(null)
        setMdxContent(null)
        setError(null)
      }
    }
    
    // Check initial hash
    checkHash()
    
    // Listen for hash changes
    const cleanup = addHashChangeListener(checkHash)
    
    return cleanup
  }, [])
  
  // Load project data and MDX content
  useEffect(() => {
    if (!currentSlug) return
    
    const project = PROJECTS.find(p => p.slug === currentSlug)
    if (!project) {
      setError("Project not found")
      return
    }
    
    setCurrentProject(project)
    setIsLoading(true)
    setError(null)
    
    // Dynamic import of MDX content
    const loadMDX = async () => {
      try {
        const mdxModule = await import(`@/src/content/case-studies/${currentSlug}.mdx`)
        setMdxContent(() => mdxModule.default)
      } catch (err) {
        console.error('Failed to load case study:', err)
        setError("Failed to load case study content")
      } finally {
        setIsLoading(false)
      }
    }
    
    loadMDX()
  }, [currentSlug])
  
  // Handle escape key and body scroll
  useEffect(() => {
    if (isOpen) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleClose()
        }
      }
      
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
      
      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = ''
      }
    }
  }, [isOpen])
  
  const handleClose = () => {
    clearCaseFromHash()
    onClose?.()
    
    // Restore focus to the previously focused element
    if (focusedElement && focusedElement.focus) {
      setTimeout(() => {
        focusedElement.focus()
      }, 100)
    }
  }
  
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }
  
  const handleGetInTouch = () => {
    setShowContactOverlay(true)
  }
  
  if (!isOpen) return null
  
  return (
    <AnimatePresence>
      <FocusTrap
        focusTrapOptions={{
          initialFocus: () => modalRef.current,
          returnFocusOnDeactivate: false,
        }}
      >
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleOverlayClick}
            aria-hidden="true"
          />
          
          {/* Modal */}
          <motion.div
            ref={modalRef}
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-bg border border-border rounded-2xl shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            tabIndex={-1}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-bg/95 backdrop-blur-sm border-b border-border px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleClose}
                    className="p-2 hover:bg-muted rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50"
                    aria-label="Back to projects grid"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  
                  {currentProject && (
                    <div>
                      <h1 id="case-study-title" className="text-xl font-bold">
                        {currentProject.title}
                      </h1>
                      <div className="flex items-center gap-2 text-sm text-fg/60">
                        <span>{currentProject.role}</span>
                        <span>•</span>
                        <span>{currentProject.year}</span>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-2">
                  {currentProject?.liveUrl && (
                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-muted rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50"
                      aria-label="View live project"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  
                  {currentProject?.repoUrl && (
                    <a
                      href={currentProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-muted rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50"
                      aria-label="View source code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  
                  <button
                    onClick={handleClose}
                    className="p-2 hover:bg-muted rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50"
                    aria-label="Close case study"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
              {isLoading && (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
                </div>
              )}
              
              {error && (
                <div className="p-6 text-center">
                  <div className="text-red-500 mb-4">
                    <X className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-semibold">Failed to load case study</p>
                  </div>
                  <p className="text-fg/70 mb-4">{error}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              )}
              
              {currentProject && !isLoading && !error && (
                <div className="p-6">
                  {/* Cover Image */}
                  <div className="relative aspect-video mb-8 rounded-xl overflow-hidden bg-muted/30">
                    <Image
                      src={currentProject.cover}
                      alt={`${currentProject.title} cover`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  {/* Metrics */}
                  {currentProject.metrics && (
                    <MetricPills metrics={currentProject.metrics} className="mb-8" />
                  )}
                  
                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h3 className="text-sm font-medium text-fg/70 mb-3">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.tech.map((tech) => (
                        <TagChip key={tech} variant="accent" size="md">
                          {tech}
                        </TagChip>
                      ))}
                    </div>
                  </div>
                  
                  {/* MDX Content */}
                  {mdxContent && (
                    <Suspense fallback={
                      <div className="animate-pulse space-y-4">
                        <div className="h-4 bg-muted rounded w-3/4"></div>
                        <div className="h-4 bg-muted rounded w-1/2"></div>
                        <div className="h-4 bg-muted rounded w-5/6"></div>
                      </div>
                    }>
                      <MDXProvider>
                        {React.createElement(mdxContent)}
                      </MDXProvider>
                    </Suspense>
                  )}
                  
                  {/* Bottom CTA */}
                  <div className="mt-12 pt-8 border-t border-border/30 text-center">
                    <h3 className="text-xl font-semibold mb-4">Interested in working together?</h3>
                    <p className="text-fg/70 mb-6">
                      Let's discuss how we can build something amazing together.
                    </p>
                    <button
                      onClick={handleGetInTouch}
                      className="px-6 py-3 bg-accent text-white rounded-xl font-medium hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50"
                    >
                      Get in Touch
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </FocusTrap>
      
      {/* Contact Overlay */}
      <ContactOverlay 
        isOpen={showContactOverlay} 
        onClose={() => setShowContactOverlay(false)} 
      />
    </AnimatePresence>
  )
}