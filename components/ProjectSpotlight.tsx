"use client"

import React, { useState } from "react"
import { PROJECTS } from "@/content/home"
import { motion, useReducedMotion } from "framer-motion"
import SectionHeading from "./SectionHeading"

export default function ProjectSpotlight() {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState<string | null>(null)

  return (
    <div>
      <SectionHeading overline="Featured Projects" title="Project Spotlight" description="A selection of my most impactful projects showcasing various skills and technologies." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <motion.article
            key={p.slug}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setOpen((s) => (s === p.slug ? null : p.slug))
              }
            }}
            onClick={() => setOpen((s) => (s === p.slug ? null : p.slug))}
            whileHover={reduce ? {} : { y: -6 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="cursor-pointer bg-muted/30 border border-border rounded-2xl p-6 focus:outline-none focus:ring-2 focus:ring-accent"
            aria-expanded={open === p.slug}
            aria-controls={`${p.slug}-detail`}
          >
            <div className="mb-2">
              <span className="text-xs font-medium text-accent uppercase tracking-wider">{p.category}</span>
            </div>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-fg/70">{p.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>

            {open === p.slug && (
              <div id={`${p.slug}-detail`} className="mt-4 border-t border-border/30 pt-4 text-fg/80">
                <p>
                  Short details for <strong>{p.title}</strong>. This expands inline for quick preview. Full
                  case study coming soon.
                </p>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </div>
  )
}
