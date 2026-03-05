"use client"

import { useReducedMotion, motion } from "framer-motion"
import React from "react"

export default function PhotoReveal({
  src,
  alt,
  widths,
  className = "",
}: {
  src: string
  alt: string
  widths?: string
  className?: string
}) {
  const reduce = useReducedMotion()

  const variants = {
    initial: { opacity: 0, scale: reduce ? 1 : 0.98, filter: "blur(8px)" },
    enter: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.5 } },
  }

  return (
    <motion.div initial="initial" animate="enter" variants={variants} className={`overflow-hidden rounded-2xl ${className}`}>
      <picture>
        {/* Prefer AVIF/WebP if available - fall back to provided src */}
        <source type="image/avif" srcSet={`${src}.avif`} />
        <source type="image/webp" srcSet={`${src}.webp`} />
        <img src={`${src}.jpg`} alt={alt} className="w-full h-auto object-cover" loading="lazy" />
      </picture>
    </motion.div>
  )
}
