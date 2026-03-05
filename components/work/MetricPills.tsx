"use client"

import { motion, useReducedMotion } from "framer-motion"

interface MetricPill {
  label: string
  value: string
}

interface MetricPillsProps {
  metrics: MetricPill[]
  className?: string
}

export default function MetricPills({ metrics, className = '' }: MetricPillsProps) {
  const reduce = useReducedMotion()
  
  if (!metrics || metrics.length === 0) return null
  
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={reduce ? {} : { opacity: 0, y: 10 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className="bg-accent/5 border border-accent/20 rounded-lg px-4 py-2 min-w-0"
        >
          <div className="text-xs font-medium text-accent uppercase tracking-wide">
            {metric.label}
          </div>
          <div className="text-sm font-bold text-fg mt-0.5">
            {metric.value}
          </div>
        </motion.div>
      ))}
    </div>
  )
}