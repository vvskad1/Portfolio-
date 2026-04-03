export type Project = {
  slug: string
  title: string
  year: number
  category: "AI" | "Security" | "HealthTech" | "Full-Stack" | "Web Development"
  summary: string
  tech: string[]
  cover: string
  metrics?: { label: string; value: string }[]
  role?: string
  date?: string
  liveUrl?: string
  repoUrl?: string
}

export const PROJECTS: Project[] = [
  {
    slug: "ai-honeypot",
    title: "AI-Powered Honeypot for Advanced Cyber Threats",
    year: 2025,
    category: "Security",
    summary: "AI-powered honeypot system that actively engages attackers, misleads them, and gathers intelligence on their behavior using Falcon-7B for real-time deception.",
    tech: ["Python", "FastAPI", "React.js", "SQLAlchemy", "Falcon-7B", "WebSockets", "Material-UI", "SQLite"],
    cover: "/assets/images/ai-honeypot-cover.svg",
    role: "Creator & Lead Developer",
    date: "2025-03-01",
    metrics: [
      { label: "Attack Patterns", value: "AI-Driven" },
      { label: "Real-Time Updates", value: "WebSockets" },
      { label: "Counter-Responses", value: "AI Generated" },
      { label: "Threat Intel", value: "Automated" }
    ],
    repoUrl: "https://github.com/vvskad1/AI-Powered-Honey-Pot"
  },
  {
    slug: "vitaledger",
    title: "Vite-Ledger",
    year: 2025,
    category: "HealthTech",
    summary: "AI-driven fitness and wellness platform featuring modular FastAPI microservices, LLM-powered recommendation workflows, and background task processing delivering consistent sub-400ms response times.",
    tech: ["FastAPI", "React", "PostgreSQL", "LLM", "Redis", "Background Tasks", "REST APIs", "Python"],
    cover: "/assets/images/vitaledger-cover.svg",
    role: "Full-Stack Developer",
    date: "2025-10-01",
    metrics: [
      { label: "Plan Creation Effort", value: "-60%" },
      { label: "Response Time", value: "<400ms" },
      { label: "Architecture", value: "Microservices" },
      { label: "AI Features", value: "LLM-Powered" }
    ],
    liveUrl: "https://vitaledger.vercel.app",
    repoUrl: "https://github.com/vvskad1/ViteLedger"
  },
  {
    slug: "ai-interview-platform",
    title: "AI-Powered Interview Platform",
    year: 2025,
    category: "AI",
    summary: "Comprehensive full-stack candidate evaluation platform supporting 500+ mock interviews with speech-to-text scoring, automated rubric-based grading, multi-tenant session management, and row-level data isolation.",
    tech: ["FastAPI", "React", "PostgreSQL", "Groq AI", "Speech-to-Text", "Real-time Proctoring", "Python"],
    cover: "/assets/images/ai-interview-cover.svg",
    role: "Creator & Developer",
    date: "2025-08-01",
    metrics: [
      { label: "Mock Interviews", value: "500+" },
      { label: "Report Generation", value: "-35%" },
      { label: "Auth", value: "Token-Based" },
      { label: "Isolation", value: "Row-Level" }
    ],
    repoUrl: "https://github.com/vvskad1/AI_Interview_Platform"
  },
  {
    slug: "nutriscope-ai",
    title: "NutriScope AI",
    year: 2025,
    category: "AI",
    summary: "Intelligent platform analyzing medical reports using OCR, NLP, and CV to extract health indicators and generate personalized diet recommendations.",
    tech: ["FastAPI", "React.js", "Python", "Groq API", "OCR", "NLP", "MongoDB", "Computer Vision"],
    cover: "/assets/images/ai-interview-cover.svg",
    role: "Full-Stack Developer",
    date: "2025-07-01",
    metrics: [
      { label: "Report Types", value: "CBC, Lipid+" },
      { label: "AI Integration", value: "Groq API" },
      { label: "Recommendations", value: "Personalized" },
      { label: "Accessibility", value: "User-Friendly" }
    ],
    repoUrl: "https://github.com/vvskad1/NutriScopeAI_v2"
  },
  {
    slug: "employee-attrition",
    title: "Employee Attrition Prediction",
    year: 2024,
    category: "AI",
    summary: "Data analysis and classification model project tackling employee attrition challenges using machine learning algorithms and advanced data science techniques.",
    tech: ["Python", "Flask", "scikit-learn", "NumPy", "pandas", "HTML5", "Machine Learning"],
    cover: "/assets/images/attrition-cover.svg",
    role: "Data Scientist & Developer",
    date: "2024-09-01",
    metrics: [
      { label: "Model Type", value: "Classification" },
      { label: "Framework", value: "Flask" },
      { label: "Analysis", value: "Predictive" },
      { label: "Domain", value: "HR Analytics" }
    ],
    repoUrl: "https://github.com/vvskad1/EmployeeAttrition"
  },
  {
    slug: "simply-law",
    title: "Simply Law",
    year: 2024,
    category: "Full-Stack",
    summary: "End-to-end lawyer-client system with role-based access for Lawyers, Clients, and Admin using the MERN stack with MongoDB for data management.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Mongoose", "HTML", "CSS", "JavaScript"],
    cover: "/assets/images/simply-law-cover.svg",
    role: "Full-Stack Developer",
    date: "2024-06-01",
    metrics: [
      { label: "User Roles", value: "3 Types" },
      { label: "Stack", value: "MERN" },
      { label: "Database", value: "MongoDB" },
      { label: "Architecture", value: "Role-Based" }
    ],
    repoUrl: "https://github.com/vvskad1/SimplyLaw"
  }
]

export const CATEGORIES = ["All", "AI", "Security", "HealthTech", "Full-Stack", "Web Development"] as const
export const YEARS = [2025, 2024, 2023] as const

export type ProjectCategory = typeof CATEGORIES[number]
export type ProjectYear = typeof YEARS[number]

export interface ProjectFilters {
  category: ProjectCategory
  year: number | null
  search: string
}

export const getFilteredProjects = (filters: ProjectFilters): Project[] => {
  return PROJECTS.filter(project => {
    const matchesCategory = filters.category === "All" || project.category === filters.category
    const matchesYear = !filters.year || project.year === filters.year
    const matchesSearch = !filters.search ||
      project.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      project.summary.toLowerCase().includes(filters.search.toLowerCase()) ||
      project.tech.some(tech => tech.toLowerCase().includes(filters.search.toLowerCase()))

    return matchesCategory && matchesYear && matchesSearch
  })
}