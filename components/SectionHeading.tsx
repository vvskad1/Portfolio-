import React from "react"

export default function SectionHeading({
  overline,
  title,
  description,
  id,
}: {
  overline?: string
  title: string
  description?: string
  id?: string
}) {
  return (
    <header id={id} className="mb-6">
      {overline && <p className="text-sm uppercase tracking-wider text-fg/60">{overline}</p>}
      <h2 className="text-2xl font-semibold mt-1">{title}</h2>
      {description && <p className="mt-2 text-fg/70 max-w-3xl">{description}</p>}
    </header>
  )
}
