"use client"

import React, { useEffect, useState } from "react"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed right-6 bottom-6 z-50 inline-flex items-center justify-center h-11 w-11 rounded-full bg-accent text-white shadow-lg"
    >
      ↑
    </button>
  )
}
