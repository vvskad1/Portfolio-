import { useEffect, useState } from "react"

/**
 * useActiveSection
 * Simple IntersectionObserver hook to track currently visible section.
 */
export function useActiveSection(ids: string[], rootMargin = "-40% 0% -40% 0%") {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.25, rootMargin }
    )

    elements.forEach((el) => el && observer.observe(el))

    return () => observer.disconnect()
  }, [ids.join("|")])

  return active
}

export default useActiveSection
