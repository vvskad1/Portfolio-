"use client"

import { X, Mail, Linkedin, Github } from "lucide-react"
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/content/home"

interface ContactOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactOverlay({ isOpen, onClose }: ContactOverlayProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-[60] bg-bg/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Contact Panel */}
      <div className="fixed inset-0 z-[61] flex items-center justify-center p-4 pt-48">
        <div className="bg-bg border border-border rounded-xl shadow-2xl p-6 w-full max-w-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-fg">Get in Touch</h3>
            <button
              onClick={onClose}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted transition-colors duration-200"
              aria-label="Close contact overlay"
            >
              <X size={16} />
            </button>
          </div>
          
          <div className="space-y-4">
            {/* Email */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors duration-200 group"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-medium text-fg">Email</p>
                <p className="text-sm text-fg/70">{PERSONAL_INFO.email}</p>
              </div>
            </a>
            
            {/* LinkedIn */}
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors duration-200 group"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Linkedin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-medium text-fg">LinkedIn</p>
                <p className="text-sm text-fg/70">Connect with me</p>
              </div>
            </a>
            
            {/* GitHub */}
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors duration-200 group"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Github className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-medium text-fg">GitHub</p>
                <p className="text-sm text-fg/70">View my projects</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}