"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X, Mail, Linkedin, Github } from "lucide-react"
import { useState } from "react"
import useActiveSection from "@/hooks/useActiveSection"
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/content/home"

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/education", label: "Education" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
]

/**
 * Site Header Component
 * Responsive navigation with theme toggle and mobile menu
 */
export default function Header() {
  const pathname = usePathname()
  const active = useActiveSection(["home", "about", "education", "experience", "projects", "skills"]) || undefined
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactOverlayOpen, setContactOverlayOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleContactOverlay = () => {
    setContactOverlayOpen(!contactOverlayOpen)
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md border-b border-border/50 bg-bg/70 supports-[backdrop-filter]:bg-bg/60">
      <nav className="container flex h-14 items-center justify-between" role="navigation" aria-label="Main navigation">
        
        {/* Logo / Brand */}
        <Link 
          href="/" 
          className="font-semibold text-lg hover:text-accent transition-colors duration-200"
          aria-label="VVSK - Home"
        >
          VVSK
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6" role="list">
          {NAV_ITEMS.map((item) => {
            const id = item.href.replace("/", "") || "home"
            return (
              <li key={item.href}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "page" : undefined}
                  className={`hover:text-accent hover:underline underline-offset-4 transition-colors duration-200 ${
                    active === id ? "font-medium text-accent" : "text-fg"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Actions: Get in Touch, Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Get in Touch Button */}
          <button
            onClick={toggleContactOverlay}
            className="hidden md:inline-flex items-center px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-200 text-sm font-medium"
          >
            Get in Touch
          </button>
          
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-muted transition-colors duration-200"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40 bg-bg/80 backdrop-blur-sm md:hidden"
              onClick={toggleMobileMenu}
              aria-hidden="true"
            />
            
            {/* Mobile Menu Panel */}
            <div className="fixed top-14 left-0 right-0 z-50 border-b border-border bg-bg md:hidden">
              <ul className="container py-4 space-y-2" role="list">
                {NAV_ITEMS.map((item) => {
                  const id = item.href.replace("/", "") || "home"
                  return (
                    <li key={item.href}>
                      <a
                        href={`#${id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        aria-current={pathname === item.href ? "page" : undefined}
                        className={`block px-3 py-2 rounded-lg hover:bg-muted transition-colors duration-200 ${
                          pathname === item.href ? "font-medium text-accent bg-muted/50" : "text-fg"
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  )
                })}
                
                {/* Mobile Get in Touch */}
                <li>
                  <button
                    onClick={toggleContactOverlay}
                    className="block w-full text-left px-3 py-2 rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors duration-200 font-medium"
                  >
                    Get in Touch
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}

        {/* Contact Overlay */}
        {contactOverlayOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-[60] bg-bg/80 backdrop-blur-sm"
              onClick={toggleContactOverlay}
              aria-hidden="true"
            />
            
            {/* Contact Panel */}
            <div className="fixed inset-0 z-[61] flex items-center justify-center p-4 pt-48">
              <div className="bg-bg border border-border rounded-xl shadow-2xl p-6 w-full max-w-md">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-fg">Get in Touch</h3>
                <button
                  onClick={toggleContactOverlay}
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
        )}
      </nav>
    </header>
  )
}