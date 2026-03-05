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
    description: "Designed and implemented reproducible ML lifecycles (data prep to evaluation), deploying models as production-ready FastAPI services for departmental research applications. Built a comprehensive LLM evaluation harness to benchmark prompt strategies and retrieval accuracy. Enhanced system observability by implementing structured logging and validation frameworks, reducing failure debugging time for research APIs.",
    skills: ["FastAPI", "ML Lifecycle", "LLM Evaluation", "System Observability"]
  },
  {
    company: "Scholarship Auditions (Accoladi)",
    role: "AI Engineering Intern",
    period: "June 2025 - Aug 2025",
    description: "Engineered and deployed a production-ready RAG chatbot utilizing Gemma-7B via Groq API, automating FAQ resolution and significantly reducing manual support load. Reduced average query latency by 30% by designing and implementing a vector-based semantic search layer and intelligent caching strategy. Developed automated data ingestion pipelines to ensure real-time synchronization between structured retrieval sources and LLM context windows.",
    skills: ["RAG", "Groq API", "Vector Search", "Semantic Caching"]
  },
  {
    company: "Virtusa & YahvaAI",
    role: "Software Developer",
    period: "June 2022 - Dec 2024",
    description: "Optimized backend SQL queries and integrated Redis caching, resulting in a 25% improvement in API response times for enterprise-scale Java applications. Designed and maintained secure REST APIs using Spring Boot, implementing JWT-based authentication and fine-grained Role-Based Access Control (RBAC). Spearheaded the refactoring of legacy modules and increased test coverage through unit/integration testing, significantly reducing technical debt and improving maintainability.",
    skills: ["Spring Boot", "Redis", "JWT", "RBAC", "SQL Optimization"]
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

export const BIO_SHORT = "Backend Engineer with 3 years of experience designing and optimizing REST APIs using Java (Spring Boot) and FastAPI. Specializing in LLM integration, RAG systems, and production-grade API performance optimization."

export const BIO_LONG = `I'm a Backend Engineer with 3 years of experience designing and optimizing REST APIs using Java (Spring Boot) and FastAPI. Currently pursuing my Master's in Computer Science at California State University - East Bay, where I work as a Graduate Research Assistant deploying production-ready ML systems and LLM evaluation frameworks.

My professional journey spans from enterprise software development at Virtusa & YahvaAI, where I optimized backend SQL queries and implemented secure REST APIs with JWT authentication, to AI engineering at Scholarship Auditions, where I reduced query latency by 30% through vector-based semantic search and intelligent caching strategies.

I specialize in building high-performance backend systems that integrate cutting-edge AI capabilities, including RAG (Retrieval-Augmented Generation), vector search, and LLM APIs, while maintaining production-grade reliability and security. My focus is on creating scalable, maintainable architectures that deliver measurable performance improvements and business value.

I'm passionate about API design, system optimization, and leveraging AI/ML technologies to solve complex technical challenges. When I'm not coding, I enjoy exploring new backend technologies, contributing to open-source projects, and staying current with the latest developments in distributed systems and machine learning.`
