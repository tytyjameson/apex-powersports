import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        cond: ['var(--font-barlow-condensed)', 'sans-serif'],
        body: ['var(--font-barlow)', 'sans-serif'],
      },
      colors: {
        black: '#0a0a0a',
        dark: '#111111',
        card: '#181818',
        border: '#2a2a2a',
        orange: {
          DEFAULT: '#f05a1a',
          dim: '#c04812',
        },
        cream: '#f5f5f0',
        muted: '#888884',
      },
    },
  },
  plugins: [],
}
export default config
