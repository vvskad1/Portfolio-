"use client"

import React from "react"
import PhotoReveal from "./PhotoReveal"
import SectionHeading from "./SectionHeading"

export default function AboutTeaser() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      <div className="lg:col-span-2">
        <SectionHeading overline="About" title="Short Bio" description={undefined} />
        <p className="text-fg/80 leading-relaxed">
          Backend Engineer with 2+ years of experience designing and optimizing REST APIs using Java
          (Spring Boot) and FastAPI. Specializing in building high-performance backend systems that
          integrate LLM-based capabilities, RAG systems, and vector search while maintaining
          production-grade reliability and security.
        </p>
        <p className="mt-4 text-fg/70">
          <a href="#about" className="text-accent hover:underline">
            View full bio
          </a>
        </p>
      </div>

      <div className="lg:col-span-1">
        <PhotoReveal src="/images/portrait" alt="Portrait of Venkata Sai Krishna Aditya" className="max-w-xs" />
      </div>
    </div>
  )
}
