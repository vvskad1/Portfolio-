"use client"

import React from "react"
import { SKILLS } from "@/content/home"
import { motion, useReducedMotion } from "framer-motion"
import SectionHeading from "./SectionHeading"

export default function SkillsSection() {
  const reduce = useReducedMotion()

  if (!SKILLS) {
    return <div>Loading skills...</div>
  }

  return (
    <div>
      <SectionHeading 
        overline="Technical Expertise" 
        title="Skills & Technologies" 
        description="A comprehensive overview of my technical skills across different domains of software development and AI engineering."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(SKILLS).map(([category, skills], index) => (
          <motion.div
            key={category}
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-muted/30 border border-border rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-accent">{category}</h3>
            <ul className="space-y-2">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center text-fg/80">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Proficiency Levels */}
      <div className="mt-12 bg-bg border border-border rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">Proficiency Levels</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-accent rounded mr-3"></div>
            <span><strong>Expert:</strong> TypeScript, React, Next.js</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-accent/70 rounded mr-3"></div>
            <span><strong>Advanced:</strong> Python, AI/ML, Node.js</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-accent/40 rounded mr-3"></div>
            <span><strong>Intermediate:</strong> DevOps, Cloud Services</span>
          </div>
        </div>
      </div>
    </div>
  )
}