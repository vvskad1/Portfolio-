import type { MetadataRoute } from "next"

/**
 * Robots.txt configuration
 * Defines crawling rules for search engines
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: [
        "/api/",
        "/_next/",
        "/admin/",
        "*.pdf",
      ],
    },
    sitemap: "https://example.com/sitemap.xml",
    host: "https://example.com",
  }
}