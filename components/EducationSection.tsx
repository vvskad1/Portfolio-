"use client"

import React from "react"
import { EDUCATION, RELEVANT_COURSES } from "@/content/home"
import { motion, useReducedMotion } from "framer-motion"
import SectionHeading from "./SectionHeading"

export default function EducationSection() {
  const reduce = useReducedMotion()

  return (
    <div>
      <SectionHeading 
        overline="Academic Background" 
        title="Education" 
        description="My academic journey from undergraduate to graduate studies, building a strong foundation in computer science."
      />

      {/* Education Timeline */}
      <div className="space-y-6 mb-8">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className={`${edu.type === 'Graduate' ? 'bg-accent/5 border-2 border-accent/20' : 'bg-muted/30 border border-border'} rounded-2xl p-6`}
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    edu.status === 'Current' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {edu.status}
                  </span>
                </div>
                <p className="text-lg text-accent font-semibold mb-1">{edu.school}</p>
                {edu.gpa && (
                  <p className="text-fg/70">GPA: <span className="font-semibold text-accent">{edu.gpa}</span></p>
                )}
              </div>
              <div className="text-right">
                <span className="inline-block px-4 py-2 bg-accent text-white rounded-full text-sm font-medium">
                  {edu.period}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Relevant Coursework */}
      <motion.div
        initial={reduce ? {} : { opacity: 0, y: 20 }}
        whileInView={reduce ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-bg border border-border rounded-2xl p-6 mb-8"
      >
        <h4 className="text-lg font-semibold mb-4 text-accent">Relevant Coursework</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {RELEVANT_COURSES.map((course, index) => (
            <motion.div
              key={course}
              initial={reduce ? {} : { opacity: 0, scale: 0.9 }}
              whileInView={reduce ? {} : { opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-muted/50 border border-border rounded-lg p-3 text-center"
            >
              <span className="text-sm font-medium text-fg/80">{course}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Academic Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-muted/30 border border-border rounded-xl p-6 text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-accent">3.9</span>
          </div>
          <h4 className="font-semibold mb-2">Graduate GPA</h4>
          <p className="text-sm text-fg/70">Maintaining excellence in Master's program while gaining practical experience</p>
        </motion.div>

        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-muted/30 border border-border rounded-xl p-6 text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
            <span className="text-2xl">📚</span>
          </div>
          <h4 className="font-semibold mb-2">Research Focus</h4>
          <p className="text-sm text-fg/70">Specializing in AI applications and software engineering methodologies</p>
        </motion.div>

        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-muted/30 border border-border rounded-xl p-6 text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
            <span className="text-2xl">🎓</span>
          </div>
          <h4 className="font-semibold mb-2">Expected Graduation</h4>
          <p className="text-sm text-fg/70">Currently pursuing degree with focus on practical applications</p>
        </motion.div>
      </div>

      {/* Academic Projects */}
      <motion.div
        initial={reduce ? {} : { opacity: 0, y: 20 }}
        whileInView={reduce ? {} : { opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-8 bg-bg border border-border rounded-xl p-6"
      >
        <h4 className="text-lg font-semibold mb-4">Academic Projects & Research</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h5 className="font-medium text-accent">Machine Learning Research</h5>
            <p className="text-sm text-fg/70">Conducting research on AI applications in cybersecurity and healthcare domains</p>
          </div>
          <div className="space-y-2">
            <h5 className="font-medium text-accent">Software Engineering Projects</h5>
            <p className="text-sm text-fg/70">Building scalable applications using modern development methodologies</p>
          </div>
          <div className="space-y-2">
            <h5 className="font-medium text-accent">Database Systems</h5>
            <p className="text-sm text-fg/70">Designing and optimizing database architectures for web applications</p>
          </div>
          <div className="space-y-2">
            <h5 className="font-medium text-accent">Web Development</h5>
            <p className="text-sm text-fg/70">Creating responsive, accessible web applications with modern frameworks</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}