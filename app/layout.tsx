import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import Header from "@/components/site/header"
import Footer from "@/components/site/footer"
import SkipLink from "@/components/a11y/skip-link"
import PageTransition from "@/components/site/page-transition"
import RouteProgress from "@/components/site/route-progress"

export const metadata: Metadata = {
  title: "V.V.S. Krishna Aditya — Portfolio",
  description: "Backend Engineer — designing and optimizing REST APIs with 3 years of experience in Java, Spring Boot, and FastAPI.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    type: "website",
    title: "V.V.S. Krishna Aditya — Portfolio",
    description: "Backend Engineer specializing in REST APIs and AI integration",
    url: "https://example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "V.V.S. Krishna Aditya",
    description: "Backend Engineer specializing in REST APIs and AI integration"
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: ["Backend Engineer", "REST API", "Spring Boot", "FastAPI", "Java", "Python", "AI Integration", "Portfolio"],
  authors: [{ name: "V.V.S. Krishna Aditya" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-bg text-fg antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <RouteProgress />
          <SkipLink />
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}