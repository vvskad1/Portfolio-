"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

/**
 * Theme Toggle Component
 * Provides dark/light mode switching with proper accessibility
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-transparent" />
    )
  }

  const isDark = theme === "dark"
  
  return (
    <button
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-transparent hover:bg-muted transition-colors duration-200"
    >
      {isDark ? (
        <Sun size={18} className="transition-transform duration-200" />
      ) : (
        <Moon size={18} className="transition-transform duration-200" />
      )}
    </button>
  )
}