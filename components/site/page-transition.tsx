"use client"

import { MotionConfig, AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { usePathname } from "next/navigation"

/**
 * Page Transition Component
 * Provides smooth transitions between routes with reduced motion support
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const prefersReducedMotion = useReducedMotion()
  
  // Respect user's motion preferences
  const duration = prefersReducedMotion ? 0 : 0.45
  
  // Custom easing curve for smooth animations
  const easeInOut = [0.22, 1, 0.36, 1] as const

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait">
        <motion.main
          id="main"
          key={pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            transition: { 
              duration, 
              ease: easeInOut 
            } 
          }}
          exit={{ 
            opacity: 0, 
            y: -8, 
            transition: { 
              duration: duration * 0.8, 
              ease: easeInOut 
            } 
          }}
          className="container min-h-[60vh] py-8"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </MotionConfig>
  )
}