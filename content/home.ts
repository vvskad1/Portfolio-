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
    title: "Vite-Ledger",
    summary: "AI-driven wellness platform with modular FastAPI microservices and LLM-powered recommendations, delivering sub-400ms response times.",
    tags: ["FastAPI", "React", "PostgreSQL", "LLM", "Redis"],
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

export const LOGOS = ["csueb", "scholarship-auditions", "accenture"] as const

export const SKILLS = {
  "Languages": [
    "Python",
    "Java",
    "SQL",
    "C++",
    "MATLAB",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Spring",
    "Spring Boot"
  ],
  "Machine Learning": [
    "Supervised & Unsupervised Learning",
    "Reinforcement Learning (RL/RLHF)",
    "Transformers",
    "CNN",
    "LSTM",
    "GANs",
    "Gradient Boosting (XGBoost, LightGBM)",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "DeepSpeed",
    "Hugging Face Accelerate"
  ],
  "Large Language Models": [
    "LLaMA 3 / LLaMA 4",
    "GPT-3 / GPT-4",
    "BERT",
    "Mixture of Experts (MoE)",
    "Transformer-XL",
    "LoRA",
    "ONNX Runtime",
    "Quantization-Aware Training"
  ],
  "NLP & AI": [
    "Hugging Face Transformers",
    "spaCy",
    "NLTK",
    "OpenAI API",
    "RAG (Retrieval-Augmented Generation)",
    "Sentiment Analysis",
    "Multilingual NLP",
    "Red-Teaming"
  ],
  "Data Engineering": [
    "Apache Spark",
    "PySpark",
    "Spark SQL",
    "Airflow",
    "DVC",
    "Presto",
    "Hive",
    "AWS Glue",
    "ETL Pipelines",
    "Large-scale Token Filtering"
  ],
  "Model Deployment & MLOps": [
    "MLflow",
    "TorchServe",
    "Triton Inference Server",
    "Docker",
    "Kubernetes",
    "FastAPI",
    "Flask",
    "REST APIs",
    "CI/CD Automation",
    "Canary Deployments",
    "Shadow Deployments",
    "Model Quantization"
  ],
  "Cloud Platforms": [
    "AWS (EC2, EKS, S3, Lambda, Redshift, SageMaker)",
    "Azure (Azure ML, Data Lake)",
    "GCP (Vertex AI, BigQuery)"
  ],
  "Responsible AI": [
    "SHAP",
    "LIME",
    "Fairlearn",
    "Bias Detection",
    "AI Governance",
    "GDPR Compliance",
    "Safety Alignment"
  ],
  "Data Visualization": [
    "Power BI",
    "Tableau",
    "Matplotlib",
    "Seaborn"
  ],
  "Backend & APIs": [
    "Microservices Architecture",
    "Scalable REST APIs",
    "WebSockets",
    "JWT Authentication",
    "RBAC",
    "Query Optimization",
    "Redis Caching",
    "PostgreSQL",
    "MongoDB"
  ],
  "DevOps & Collaboration": [
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Jenkins",
    "GitHub Actions",
    "Jira",
    "Confluence",
    "Agile / Scrum",
    "A/B Testing"
  ],
  "Development Tools": [
    "Jupyter Notebook",
    "VS Code",
    "Streamlit",
    "Linux",
    "Shell Scripting"
  ]
}

export const EXPERIENCE = [
  {
    company: "California State University, East Bay",
    role: "Graduate Research Assistant",
    period: "Aug 2025 - Present",
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
    company: "Accenture",
    role: "AI/ML Engineer",
    period: "June 2021 - July 2024",
    location: "Hyderabad, India",
    description: "Developed scalable ML solutions using Python, PyTorch, and Scikit-learn for customer segmentation, churn prediction, and real-time fraud detection, resulting in a 41% increase in digital sales and significant fraud reduction. Built production-ready ML pipelines with Apache Spark, PySpark, Airflow, and MLflow, enabling automated retraining and deployment of 25+ models on AWS SageMaker using CI/CD and canary deployments. Leveraged Hugging Face Transformers and LLM fine-tuning (Transformer-XL) for customer service automation and NLP-based chat workflows. Designed explainable AI systems using SHAP, LIME, and Fairlearn, ensuring Responsible AI and GDPR compliance. Architected modular ML microservices using FastAPI and Flask, and engineered real-time inference systems with AWS Lambda, TorchServe, and Triton Inference Server.",
    skills: ["Python", "PyTorch", "Apache Spark", "MLflow", "AWS SageMaker", "FastAPI", "LLM Fine-tuning", "SHAP", "Docker", "Kubernetes"]
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

export const BIO_SHORT = "Backend Engineer & AI/ML Engineer with 3+ years of experience designing and optimizing scalable REST APIs using Java (Spring Boot) and FastAPI. Proven track record of improving system performance by up to 30% through query optimization, caching strategies, and indexing. Experienced in building production-grade backend systems integrating LLM-based pipelines (RAG, vector search) and deploying reliable, high-throughput services under concurrent workloads."

export const BIO_LONG = `I'm a Backend Engineer and AI/ML Engineer with 3+ years of experience designing and optimizing scalable REST APIs using Java (Spring Boot) and FastAPI. Currently pursuing my Master's in Computer Science at California State University - East Bay, where I work as a Graduate Research Assistant architecting FastAPI services for 8+ research projects, processing 50K+ monthly inference requests.

My professional journey spans enterprise AI/ML engineering at Accenture, where I built production-ready ML pipelines for 25+ models on AWS SageMaker, developed scalable ML solutions driving a 41% increase in digital sales, and architected real-time inference systems using TorchServe, Triton Inference Server, and AWS Lambda. I also gained deep expertise in LLM fine-tuning, RAG systems, and Responsible AI practices (SHAP, LIME, Fairlearn, GDPR compliance).

Most recently, as an AI Engineering Intern at Scholarship Auditions, I deployed a production RAG system serving 3K+ monthly active users with 100K+ records, reducing P95 latency by 30% through query optimization, composite indexing, and Redis caching.

I specialize in building high-performance backend systems that integrate cutting-edge AI capabilities — including RAG, vector search, LLM APIs, and MLOps pipelines — while maintaining production-grade reliability and security. My focus is on creating scalable, maintainable architectures that deliver measurable performance improvements and business value.

I'm passionate about API architecture, system optimization, and pushing the boundaries of what AI systems can do at scale. When I'm not coding, I enjoy exploring new ML research, contributing to open-source projects, and staying current with the latest developments in distributed systems and large language models.`
