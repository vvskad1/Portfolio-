/**
 * JSON-LD Structured Data Components
 * Provides structured data for search engines
 */

export function PersonJsonLd() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Venkata Sai Krishna Aditya Vatturi",
    alternateName: "V.V.S. Krishna Aditya",
    url: "https://example.com",
    jobTitle: "Backend Engineer",
    description: "Backend Engineer with 3 years of experience designing and optimizing REST APIs using Java (Spring Boot) and FastAPI",
    knowsAbout: [
      "Java",
      "Spring Boot",
      "Python",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "RAG",
      "LLM Integration",
      "Vector Search",
      "Microservices",
      "Software Engineering"
    ],
    sameAs: [
      // Add your social media profiles here
      // "https://linkedin.com/in/yourprofile",
      // "https://github.com/yourprofile",
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personData, null, 2) }}
    />
  )
}

export function WebsiteJsonLd() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "Website",
    name: "V.V.S. Krishna Aditya Portfolio",
    url: "https://example.com",
    description: "Portfolio website of V.V.S. Krishna Aditya - Backend Engineer specializing in REST APIs and AI integration",
    author: {
      "@type": "Person",
      name: "V.V.S. Krishna Aditya"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData, null, 2) }}
    />
  )
}