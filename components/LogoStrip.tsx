"use client"

import React from "react"
import { useReducedMotion, motion } from "framer-motion"

import { LOGOS } from "@/content/home"

const LABELS: Record<string, string> = {
  csueb: "California State University, East Bay",
  "scholarship-auditions": "Scholarship Auditions",
  jpmorgan: "JP Morgan Chase",
}

export default function LogoStrip() {
  const reduce = useReducedMotion()

  return (
    <div className="py-6">
      <div className="container">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          {LOGOS.map((key) => (
            <motion.div
              key={key}
              className="h-10 flex items-center"
              whileHover={reduce ? {} : { scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div
                role="img"
                aria-label={LABELS[key as string] || key}
                className="h-8 grayscale hover:grayscale-0 transition-all duration-200"
              >
                {/* Placeholder logo as text to keep bundle light */}
                <span className="text-sm font-medium text-fg/70">{(key || "").toUpperCase()}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
