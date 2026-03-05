"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import TagChip from "./TagChip"
import type { ProjectFilters, ProjectCategory } from "@/src/content/projects"
import { CATEGORIES, YEARS } from "@/src/content/projects"
import { readFiltersFromHash, writeFiltersToHash } from "@/src/lib/hash"

interface FiltersBarProps {
  filters: ProjectFilters
  onFiltersChange: (filters: ProjectFilters) => void
}

export default function FiltersBar({ filters, onFiltersChange }: FiltersBarProps) {
  const [searchInput, setSearchInput] = useState(filters.search)
  
  // Sync search input with filters
  useEffect(() => {
    setSearchInput(filters.search)
  }, [filters.search])
  
  // Handle search input with debounce
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchInput !== filters.search) {
        const newFilters = { ...filters, search: searchInput }
        onFiltersChange(newFilters)
        writeFiltersToHash(newFilters)
      }
    }, 300)
    
    return () => clearTimeout(timeout)
  }, [searchInput, filters, onFiltersChange])
  
  const handleCategoryChange = (category: ProjectCategory) => {
    const newFilters = { ...filters, category }
    onFiltersChange(newFilters)
    writeFiltersToHash(newFilters)
  }
  
  const handleYearChange = (year: number | null) => {
    const newFilters = { ...filters, year }
    onFiltersChange(newFilters)
    writeFiltersToHash(newFilters)
  }
  
  const clearFilters = () => {
    const newFilters: ProjectFilters = {
      category: "All",
      year: null,
      search: ""
    }
    onFiltersChange(newFilters)
    setSearchInput("")
    writeFiltersToHash(newFilters)
  }
  
  const hasActiveFilters = filters.category !== "All" || filters.year !== null || filters.search !== ""
  
  return (
    <div className="space-y-4 mb-8">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fg/40 w-4 h-4" />
        <input
          type="text"
          placeholder="Search projects, technologies..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-border rounded-xl bg-bg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-colors"
          aria-label="Search projects"
        />
        {searchInput && (
          <button
            onClick={() => setSearchInput("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-fg/40 hover:text-fg transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      
      {/* Category Filters */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-fg/70">Category</h3>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((category) => (
            <TagChip
              key={category}
              variant={filters.category === category ? "accent" : "default"}
              onClick={() => handleCategoryChange(category)}
              className="cursor-pointer"
            >
              {category}
            </TagChip>
          ))}
        </div>
      </div>
      
      {/* Year Filters */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-fg/70">Year</h3>
        <div className="flex flex-wrap gap-2">
          <TagChip
            variant={filters.year === null ? "accent" : "default"}
            onClick={() => handleYearChange(null)}
            className="cursor-pointer"
          >
            All Years
          </TagChip>
          {YEARS.map((year) => (
            <TagChip
              key={year}
              variant={filters.year === year ? "accent" : "default"}
              onClick={() => handleYearChange(year)}
              className="cursor-pointer"
            >
              {year}
            </TagChip>
          ))}
        </div>
      </div>
      
      {/* Clear Filters */}
      {hasActiveFilters && (
        <div className="flex justify-between items-center pt-2 border-t border-border/30">
          <span className="text-sm text-fg/70">
            {filters.category !== "All" && `Category: ${filters.category}`}
            {filters.year && ` • Year: ${filters.year}`}
            {filters.search && ` • Search: "${filters.search}"`}
          </span>
          <button
            onClick={clearFilters}
            className="text-sm text-accent hover:text-accent/80 font-medium transition-colors focus:outline-none focus:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  )
}