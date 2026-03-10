export const PROJECTS = [
  {
    slug: "ai-honeypot",
    title: "AI-Powered Honeypot System",
    summary: "Real-time deception engine with FastAPI, Falcon-7B, and React dashboards for cybersecurity threat detection.",
    tags: ["FastAPI", "Falcon-7B", "React", "WebSockets", "Cybersecurity"],
    category: "AI/Security"
  },
  {
    slug: "vitaledger",
    title: "VitaLedger Health Platform",
    summary: "AI-driven wellness platform with adaptive plans and privacy-first design for personalized health management.",
    tags: ["React", "FastAPI", "Groq", "SQLite", "Healthcare"],
    category: "AI/Health"
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    summary: "Modern portfolio built with Next.js 15, TypeScript, and Framer Motion featuring smooth animations and accessibility.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Web Development"
  }
]

export const LOGOS = ["csueb", "scholarship-auditions", "yahvaai", "virtusa"] as const

export const SKILLS = {
  "Languages": [
    "Java",
    "Python",
    "SQL",
    "JavaScript",
    "TypeScript"
  ],
  "Backend & APIs": [
    "Spring Boot",
    "FastAPI",
    "RESTful Microservices",
    "MVC Architecture",
    "WebSockets",
    "Rate Limiting",
    "JWT Authentication",
    "RBAC"
  ],
  "AI & Data": [
    "RAG (Retrieval-Augmented Generation)",
    "LLM APIs (OpenAI/Groq)",
    "Vector Search",
    "Semantic Caching",
    "ML Lifecycle Management",
    "Prompt Engineering"
  ],
  "Databases": [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "SQLite",
    "Query Optimization",
    "Indexing Strategies"
  ],
  "Cloud & DevOps": [
    "Docker",
    "CI/CD Pipelines",
    "Git & Version Control",
    "Linux",
    "Postman",
    "Unit/Integration Testing"
  ]
}

export const EXPERIENCE = [
  {
    company: "California State University, East Bay",
    role: "Graduate Research Assistant",
    period: "Oct 2025 - Present",
    location: "Hayward, CA",
    description: "Architected and maintained FastAPI backend services supporting 8+ concurrent research projects, processing 50K+ inference requests per month across training and evaluation workflows. Designed an internal LLM evaluation framework integrating retrieval pipelines, structured benchmarking, and centralized logging, reducing experiment comparison time by 40%. Improved API reliability from 95% to 99.3% success rate by implementing request validation layers, structured exception handling, and distributed request tracing. Optimized PostgreSQL queries and indexing strategies for datasets exceeding 10GB+, reducing average response time from 420ms to 270ms.",
    skills: ["FastAPI", "PostgreSQL", "LLM Evaluation", "Distributed Tracing"]
  },
  {
    company: "Scholarship Auditions (Accoladi)",
    role: "AI Engineering Intern",
    period: "June 2025 - August 2025",
    location: "California, USA",
    description: "Designed and deployed a production RAG-based backend system serving 3K+ monthly active users with semantic retrieval over 100K+ structured records. Reduced P95 API latency by 30% (650ms → 450ms) through query plan optimization, composite indexing, and Redis caching under peak loads of 40+ concurrent requests. Built asynchronous ingestion pipelines to continuously synchronize structured data sources with vector indexes, reducing data staleness from hours to under 5 minutes. Conducted load testing and profiling to identify memory bottlenecks, improving throughput by 22% without additional infrastructure cost.",
    skills: ["RAG", "Vector Search", "Redis", "Load Testing", "Performance Optimization"]
  },
  {
    company: "YahvaAI",
    role: "Software Developer",
    period: "June 2023 - June 2024",
    location: "Hyderabad, India",
    description: "Owned backend architecture and performance optimization for enterprise Java APIs handling 200K+ daily requests across internal business platforms. Improved average response time by 25% (480ms → 360ms) through SQL tuning, cache-layer redesign, and elimination of N+1 query patterns. Implemented JWT-based authentication and RBAC authorization supporting 5+ user roles and secure multi-tenant access control. Increased unit and integration test coverage from 55% to 80%, reducing post-release defects by 30% across quarterly release cycles.",
    skills: ["Java", "Spring Boot", "SQL Optimization", "JWT", "RBAC"]
  },
  {
    company: "Virtusa",
    role: "Software Developer",
    period: "June 2022 - May 2023",
    location: "Hyderabad, India",
    description: "Developed and maintained RESTful services supporting enterprise workflows used by 10+ business teams. Resolved 50+ production issues and performance bottlenecks, reducing recurring incident rates by 18%. Strengthened CI/CD reliability by expanding automated test suites and deployment validations, reducing rollback frequency by 25%.",
    skills: ["Java", "REST APIs", "CI/CD", "Production Support", "Agile"]
  }
]

export const EDUCATION = [
  {
    degree: "Master of Science - MS, Computer Science",
    school: "California State University - East Bay",
    period: "August 2024 - Present",
    status: "Current",
    gpa: "3.9/4.0",
    type: "Graduate"
  },
  {
    degree: "Bachelor of Technology - B.Tech, Computer Science",
    school: "Jawaharlal Nehru Technological University",
    period: "August 2019 - August 2023",
    status: "Completed",
    gpa: "",
    type: "Undergraduate"
  }
]

export const RELEVANT_COURSES = [
  "Advanced Machine Learning",
  "Data Structures & Algorithms",
  "Software Engineering",
  "Database Systems",
  "Computer Networks",
  "Web Development",
  "Artificial Intelligence",
  "Data Mining",
  "Software Architecture",
  "Mobile Computing"
]

export const PERSONAL_INFO = {
  name: "Venkata Sai Krishna Aditya Vatturi",
  shortName: "Krishna Aditya",
  dob: "01-26-2002",
  title: "Backend Engineer",
  location: "San Francisco, CA",
  email: "vvatturi@horizon.csueastbay.edu",
  interests: ["API Design", "System Architecture", "Machine Learning", "Open Source"],
  languages: ["English", "Telugu", "Hindi"]
}

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/vvs-krishna-aditya-2002vvsk/",
  github: "https://github.com/vvskad1",
  email: "vvatturi@horizon.csueastbay.edu"
}

export const BIO_SHORT = "Backend Engineer with 2+ years of experience designing and optimizing REST APIs using Java (Spring Boot) and FastAPI. Specializing in LLM integration, RAG systems, and production-grade API performance optimization with measurable results."

export const BIO_LONG = `I'm a Backend Engineer with 2+ years of experience designing and optimizing REST APIs using Java (Spring Boot) and FastAPI. Currently pursuing my Master's in Computer Science at California State University - East Bay, where I work as a Graduate Research Assistant architecting FastAPI services for 8+ research projects, processing 50K+ monthly inference requests.

My professional journey began with enterprise software development at Virtusa, building RESTful backend services for 10+ business teams, followed by YahvaAI where I owned backend architecture for APIs handling 200K+ daily requests, improving response times by 25%. Most recently, as an AI Engineering Intern at Scholarship Auditions, I deployed production RAG systems serving 3K+ users with 100K+ records, reducing P95 latency by 30% through optimization and intelligent caching.

I specialize in building high-performance backend systems that integrate cutting-edge AI capabilities, including RAG (Retrieval-Augmented Generation), vector search, and LLM APIs, while maintaining production-grade reliability and security. My focus is on creating scalable, maintainable architectures that deliver measurable performance improvements and business value.

I'm passionate about API design, system optimization, and leveraging AI/ML technologies to solve complex technical challenges. When I'm not coding, I enjoy exploring new backend technologies, contributing to open-source projects, and staying current with the latest developments in distributed systems and machine learning.`
