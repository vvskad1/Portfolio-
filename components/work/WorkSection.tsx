"use client"

import { useState, useEffect } from "react"
import SectionHeading from "../SectionHeading"
import FiltersBar from "./FiltersBar"
import ProjectGrid from "./ProjectGrid"
import CaseStudyModal from "./CaseStudyModal"
import type { ProjectFilters } from "@/src/content/projects"
import { PROJECTS, getFilteredProjects } from "@/src/content/projects"
import { readFiltersFromHash, writeFiltersToHash } from "@/src/lib/hash"

export default function WorkSection() {
  const [filters, setFilters] = useState<ProjectFilters>({
    category: "All",
    year: null,
    search: ""
  })
  
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS)
  
  // Initialize filters from URL on mount
  useEffect(() => {
    const urlFilters = readFiltersFromHash()
    const initialFilters: ProjectFilters = {
      category: urlFilters.category || "All",
      year: urlFilters.year || null,
      search: urlFilters.search || ""
    }
    setFilters(initialFilters)
  }, [])
  
  // Update filtered projects when filters change
  useEffect(() => {
    const filtered = getFilteredProjects(filters)
    setFilteredProjects(filtered)
  }, [filters])
  
  const handleFiltersChange = (newFilters: ProjectFilters) => {
    setFilters(newFilters)
  }
  
  const clearAllFilters = () => {
    const clearedFilters: ProjectFilters = {
      category: "All",
      year: null,
      search: ""
    }
    setFilters(clearedFilters)
    writeFiltersToHash(clearedFilters)
  }
  
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <SectionHeading 
        overline="Portfolio" 
        title="Selected Work" 
        description="Filter by category, year, or technology to explore my projects. Click on any project to view a detailed case study."
      />
      
      {/* Filters */}
      <FiltersBar 
        filters={filters}
        onFiltersChange={handleFiltersChange}
      />
      
      {/* Results Count */}
      <div className="flex items-center justify-between text-sm text-fg/70">
        <span>
          {filteredProjects.length === PROJECTS.length 
            ? `Showing all ${PROJECTS.length} projects`
            : `Showing ${filteredProjects.length} of ${PROJECTS.length} projects`
          }
        </span>
        
        {filteredProjects.length !== PROJECTS.length && (
          <button
            onClick={clearAllFilters}
            className="text-accent hover:text-accent/80 font-medium transition-colors"
          >
            Show all projects
          </button>
        )}
      </div>
      
      {/* Project Grid */}
      <ProjectGrid 
        projects={filteredProjects}
        onClearFilters={clearAllFilters}
      />
      
      {/* Case Study Modal */}
      <CaseStudyModal />
    </div>
  )
}