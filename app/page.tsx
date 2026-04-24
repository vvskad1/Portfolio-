"use client"

import Hero from "@/components/Hero"
import LogoStrip from "@/components/LogoStrip"
import WorkSection from "@/components/work/WorkSection"
import SkillsSection from "@/components/SkillsSection"
import EducationSection from "@/components/EducationSection"
import ScrollToTop from "@/components/ScrollToTop"
import SectionHeading from "@/components/SectionHeading"
import { PersonJsonLd } from "@/components/seo/jsonld"
import { EXPERIENCE, BIO_LONG, SOCIAL_LINKS, PERSONAL_INFO } from "@/content/home"
import { Github, Linkedin, Mail } from "lucide-react"

export default function HomePage() {
  return (
    <>
      <PersonJsonLd />
      <main>
        {/* Hero Section */}
        <section className="flex items-center justify-center pt-2 pb-16">
          <div className="container text-center">
            <div className="max-w-4xl mx-auto">
              {/* Main Heading with Profile Icon */}
              <div className="flex items-center justify-center gap-3 mb-6">
                {/* Profile Image */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full gradient-primary p-1 flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-xl sm:text-2xl md:text-3xl">
                    👨‍💻
                  </div>
                </div>

                {/* Heading */}
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gradient-accent">
                  Hi, I'm Venkata Sai Krishna Aditya Vatturi
                </h1>
              </div>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-fg/80 mb-8 leading-relaxed">
                Backend Engineer &amp; AI/ML Engineer | Graduate Research Assistant
                <br />
                <span className="text-lg text-fg/60">
                  Designing scalable REST APIs, ML pipelines, and LLM-powered systems
                </span>
              </p>

              {/* Current Status */}
              <div className="inline-flex items-center gap-2 bg-muted/50 text-fg px-4 py-2 rounded-full text-sm font-medium mb-8 border border-border">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                Currently studying at California State University - East Bay
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-muted/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-muted/40 transition-colors">
                  <div className="text-2xl mb-2">🎓</div>
                  <h3 className="font-semibold mb-1 text-fg">MS Computer Science</h3>
                  <p className="text-sm text-fg/70">3.9 GPA at CSU East Bay</p>
                </div>
                <div className="bg-muted/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-muted/40 transition-colors">
                  <div className="text-2xl mb-2">⚙️</div>
                  <h3 className="font-semibold mb-1 text-fg">Backend Engineering</h3>
                  <p className="text-sm text-fg/70">3+ Years · REST APIs, Spring Boot &amp; FastAPI</p>
                </div>
                <div className="bg-muted/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-muted/40 transition-colors">
                  <div className="text-2xl mb-2">🤖</div>
                  <h3 className="font-semibold mb-1 text-fg">AI/ML Engineering</h3>
                  <p className="text-sm text-fg/70">PyTorch, MLflow, AWS SageMaker &amp; LLMs</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" aria-labelledby="about-title" className="py-16 bg-muted/10">
          <div className="container">
            <SectionHeading
              overline="About Me"
              title="Background & Philosophy"
              description="Learn more about my journey, interests, and approach to technology and problem-solving."
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="prose prose-lg max-w-none">
                  {BIO_LONG.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-fg/80 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Philosophy Quote */}
                <div className="bg-bg border border-border rounded-xl p-6">
                  <blockquote className="text-lg italic text-fg/90 border-l-4 border-accent pl-4">
                    "Technology should empower people, not overwhelm them. My goal is to build solutions
                    that feel natural and intuitive while solving real-world problems."
                  </blockquote>
                </div>
              </div>

              {/* Profile Image */}
              <div className="lg:col-span-1">
                <div className="bg-muted/30 border border-border rounded-2xl p-6 text-center">
                  <img
                    src="/profile-picture.jpg"
                    alt="Venkata Sai Krishna Aditya Vatturi"
                    className="w-48 h-48 mx-auto rounded-2xl object-cover mb-4"
                  />

                  {/* Social Links */}
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <a
                      href={SOCIAL_LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-fg/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={SOCIAL_LINKS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-fg/60 hover:text-fg transition-colors duration-200"
                      aria-label="GitHub Profile"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-fg/60 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                      aria-label="Email Contact"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>

                  <p className="font-medium">Venkata Sai Krishna Aditya Vatturi</p>
                  <p className="text-sm text-fg/70">Computer Science Graduate Student</p>
                  <p className="text-sm text-fg/70">Backend Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" aria-labelledby="education-title" className="py-16">
          <div className="container">
            <EducationSection />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" aria-labelledby="experience-title" className="py-16 bg-muted/10">
          <div className="container">
            <SectionHeading
              overline="Professional Journey"
              title="Work Experience"
              description="My professional journey — from enterprise AI/ML engineering at JP Morgan Chase to production RAG systems and research-grade backend services."
            />

            {/* Experience Timeline */}
            <div className="space-y-6">
              {EXPERIENCE.map((exp, index) => (
                <div key={index} className="bg-bg border border-border rounded-xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-fg/60 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-fg/80 leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-muted text-fg/80 rounded text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" aria-labelledby="projects-title" className="py-16">
          <div className="container">
            <WorkSection />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" aria-labelledby="skills-title" className="py-16 bg-muted/10">
          <div className="container">
            <SkillsSection />
          </div>
        </section>
      </main>

      <ScrollToTop />
    </>
  )
}