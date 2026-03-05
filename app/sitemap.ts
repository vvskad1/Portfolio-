import type { MetadataRoute } from "next"

/**
 * Sitemap configuration
 * Provides search engines with site structure information
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.com"
  const currentDate = new Date()

  // Static routes with their priorities and change frequencies
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/now`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    },
  ]

  // TODO: Add dynamic work project routes when projects are added
  // const projectRoutes = projects.map((project) => ({
  //   url: `${baseUrl}/work/${project.slug}`,
  //   lastModified: project.updatedAt || currentDate,
  //   changeFrequency: "monthly" as const,
  //   priority: 0.7,
  // }))

  return [
    ...staticRoutes,
    // ...projectRoutes,
  ]
}