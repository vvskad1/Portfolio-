"use client"

import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { SOCIAL_LINKS } from "@/content/home"

export default function Hero() {
  const reduce = useReducedMotion()

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }



  return (
    <section id="home" aria-labelledby="home-title" className="py-16">
      <div className="container grid gap-8">
        <div className="space-y-6 max-w-3xl">
          <h1 id="home-title" className="text-4xl sm:text-5xl font-bold tracking-tight">
            Backend Engineer
          </h1>
          <p className="text-lg text-fg/80">
            Designing and optimizing REST APIs with 2+ years of experience in Java, Spring Boot, and FastAPI. Specializing in LLM integration, RAG systems, and production-grade performance optimization.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={reduce ? {} : { scale: 1.04, y: -3 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={scrollToProjects}
              className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-2xl font-medium focus:outline-none focus:ring-2 focus:ring-accent"
            >
              View Projects
            </motion.button>

            <a
              href={SOCIAL_LINKS.email}
              className="inline-flex items-center px-6 py-3 border border-border rounded-2xl font-medium hover:bg-muted transition-colors duration-150"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <motion.a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduce ? {} : { scale: 1.1, y: -2 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center w-12 h-12 bg-muted/50 hover:bg-accent hover:text-white rounded-xl transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </motion.a>

            <motion.a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduce ? {} : { scale: 1.1, y: -2 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center w-12 h-12 bg-muted/50 hover:bg-accent hover:text-white rounded-xl transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </motion.a>

            <motion.a
              href={SOCIAL_LINKS.email}
              whileHover={reduce ? {} : { scale: 1.1, y: -2 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center w-12 h-12 bg-muted/50 hover:bg-accent hover:text-white rounded-xl transition-colors duration-200"
              aria-label="Email Contact"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>

        {/* subtle background motion - disable if reduced motion */}
        {!reduce && (
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-30">
            <div className="h-full w-full bg-gradient-to-r from-accent/10 via-transparent to-accent/5" />
          </div>
        )}
      </div>
    </section>
  )
}
