"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Github } from "lucide-react"
import Image from "next/image"
import TagChip from "./TagChip"
import type { Project } from "@/src/content/projects"
import { setCaseSlugInHash } from "@/src/lib/hash"

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const reduce = useReducedMotion()
  
  const handleCardClick = () => {
    setCaseSlugInHash(project.slug)
  }
  
  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation()
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  
  return (
    <motion.article
      initial={reduce ? {} : { opacity: 0, y: 20 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? {} : { y: -8, scale: 1.02 }}
      className="bg-bg border border-border rounded-2xl overflow-hidden cursor-pointer group focus-within:ring-2 focus-within:ring-accent/50 transition-shadow duration-300 hover:shadow-lg"
      onClick={handleCardClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleCardClick()
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View case study for ${project.title}`}
    >
      {/* Cover Image */}
      <div className="relative aspect-video bg-muted/30 overflow-hidden">
        <Image
          src={project.cover}
          alt={`${project.title} cover image`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action Links */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.repoUrl && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleLinkClick(e, project.repoUrl!)}
              className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-black shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="View source code"
            >
              <Github className="w-4 h-4" />
            </motion.button>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors duration-200">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-fg/60">
              <span>{project.year}</span>
              <span>•</span>
              <span>{project.category}</span>
            </div>
          </div>
        </div>
        
        {/* Summary */}
        <p className="text-fg/80 mb-4 leading-relaxed">
          {project.summary}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 4).map((tech) => (
            <TagChip key={tech} variant="muted" size="sm">
              {tech}
            </TagChip>
          ))}
          {project.tech.length > 4 && (
            <TagChip variant="muted" size="sm">
              +{project.tech.length - 4} more
            </TagChip>
          )}
        </div>
        
        {/* Metrics Preview */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border/30">
            {project.metrics.slice(0, 2).map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-sm font-bold text-accent">{metric.value}</div>
                <div className="text-xs text-fg/60">{metric.label}</div>
              </div>
            ))}
          </div>
        )}


      </div>
    </motion.article>
  )
}