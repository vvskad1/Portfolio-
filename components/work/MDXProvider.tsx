"use client"

import { MDXProvider as BaseMDXProvider } from '@mdx-js/react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

// Custom components for MDX
const components = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-3xl font-bold mb-6 text-fg">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-semibold mb-4 mt-8 text-fg">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-semibold mb-3 mt-6 text-fg">{children}</h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-4 leading-relaxed text-fg/80">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-fg/80">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-fg/80">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="leading-relaxed">{children}</li>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-accent pl-4 py-2 mb-4 bg-accent/5 rounded-r-lg">
      <div className="italic text-fg/90">{children}</div>
    </blockquote>
  ),
  code: ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const match = /language-(\w+)/.exec(className || '')
    const language = match ? match[1] : ''
    
    if (language) {
      return (
        <SyntaxHighlighter
          style={oneDark}
          language={language}
          PreTag="div"
          className="rounded-lg text-sm mb-4 overflow-x-auto"
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      )
    }
    
    return (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-accent">
        {children}
      </code>
    )
  },
  pre: ({ children }: { children: React.ReactNode }) => children,
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:text-accent/80 underline underline-offset-2 transition-colors"
    >
      {children}
    </a>
  ),
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-semibold text-fg">{children}</strong>
  ),
  em: ({ children }: { children: React.ReactNode }) => (
    <em className="italic">{children}</em>
  ),
}

// Custom Callout component
export function Callout({ 
  children, 
  type = 'info' 
}: { 
  children: React.ReactNode
  type?: 'info' | 'warning' | 'success' | 'error'
}) {
  const typeStyles = {
    info: 'border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100',
    warning: 'border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-100',
    success: 'border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100',
    error: 'border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-100'
  }
  
  return (
    <div className={`border-l-4 p-4 mb-6 rounded-r-lg ${typeStyles[type]}`}>
      {children}
    </div>
  )
}

// Add Callout to components
const extendedComponents = {
  ...components,
  Callout,
}

interface MDXProviderProps {
  children: React.ReactNode
}

export default function MDXProvider({ children }: MDXProviderProps) {
  return (
    <BaseMDXProvider components={extendedComponents}>
      <div className="prose prose-lg max-w-none">
        {children}
      </div>
    </BaseMDXProvider>
  )
}