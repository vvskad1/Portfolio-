import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { 
      center: true, 
      padding: "1rem", 
      screens: { "2xl": "1200px" } 
    },
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        fg: "hsl(var(--fg))",
        muted: "hsl(var(--muted))",
        accent: "hsl(var(--accent))",
        border: "hsl(var(--border))",
      },
      borderRadius: { 
        xl: "1rem", 
        "2xl": "1.5rem" 
      },
    },
  },
  plugins: [],
}

export default config