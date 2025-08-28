import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Cubie Group colors
        black: '#0B0F14',
        white: '#FFFFFF',
        silver: '#C0C0C0',
        'finance-blue': '#007bff',
        'neon-cyan': '#00FFFF',
        // Using Cubie Group black as the default background
        background: '#0B0F14',
        foreground: '#FFFFFF', // Default foreground to white for dark theme
        primary: {
          DEFAULT: '#007bff', // Finance blue as primary
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#00FFFF', // Neon cyan as accent
          1: 'hsl(var(--accent-1))',
          2: 'hsl(var(--accent-2))',
          3: 'hsl(var(--accent-3))',
        },
        brand: {
          primary: '#007bff',
          secondary: '#00FFFF',
          tertiary: '#C0C0C0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Satoshi', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        bulletproof: ['Bulletproof', 'sans-serif'], // Add the new font family
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
