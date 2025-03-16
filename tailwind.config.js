/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        foreground: "#3c3c50",
        background: "var(--background)",
        primary: {
          DEFAULT: "#3c3c50",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "#3c3c50",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "#3c3c50",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "#3c3c50",
        },
        hero: {
          start: "#faf8ff",
          mid: "#f7f1ff",
          end: "#f3e8ff",
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(140deg, var(--tw-colors-hero-start) 0%, var(--tw-colors-hero-mid) 50%, var(--tw-colors-hero-end) 100%)',
      },
    },
  },
  plugins: [],
} 