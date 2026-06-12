/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#0d1117',
        surface: '#161d27',
        'surface-2': '#1e2736',
        border: '#2a3545',
        green: {
          DEFAULT: '#2db832',
          dark: '#1f8a24',
          dim: '#1a6e1e',
        },
        orange: '#f07020',
        navy: '#1a2035',
        text: {
          DEFAULT: '#f0f0f0',
          muted: '#8a9ab0',
        },
        concrete: '#6b7280',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'h1-desktop': ['68px', { lineHeight: '1', letterSpacing: '0.02em' }],
        'h1-mobile': ['44px', { lineHeight: '1', letterSpacing: '0.02em' }],
        'h2-desktop': ['46px', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'h2-mobile': ['34px', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'h3-desktop': ['28px', { lineHeight: '1.2' }],
        'h3-mobile': ['22px', { lineHeight: '1.2' }],
      },
    },
  },
  plugins: [],
};
