"use client"

import { motion, useReducedMotion } from "framer-motion"
import ProjectCard from "./ProjectCard"
import type { Project } from "@/src/content/projects"

interface ProjectGridProps {
  projects: Project[]
  onClearFilters?: () => void
}

export default function ProjectGrid({ projects, onClearFilters }: ProjectGridProps) {
  const reduce = useReducedMotion()
  
  if (projects.length === 0) {
    return (
      <motion.div
        initial={reduce ? {} : { opacity: 0, y: 20 }}
        animate={reduce ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12"
      >
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 mx-auto mb-6 bg-muted/30 rounded-full flex items-center justify-center">
            <span className="text-4xl opacity-50">🔍</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">No projects found</h3>
          <p className="text-fg/70 mb-6">
            We couldn't find any projects matching your current filters. Try adjusting your search criteria.
          </p>
          {onClearFilters && (
            <button
              onClick={onClearFilters}
              className="px-6 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50"
            >
              Clear all filters
            </button>
          )}
        </div>
      </motion.div>
    )
  }
  
  return (
    <motion.div
      initial={reduce ? {} : { opacity: 0 }}
      animate={reduce ? {} : { opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          index={index}
        />
      ))}
    </motion.div>
  )
}