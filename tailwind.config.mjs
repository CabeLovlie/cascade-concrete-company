/** @type {import('tailwindcss').Config} */
export default {
 content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
 theme: {
 extend: {
 colors: {
 white: '#ffffff',
 bg: '#f5f4f0',
 surface: '#eceae4',
 'surface-dark': '#1a2035',
 charcoal: '#111418',
 text: {
 DEFAULT: '#1a1a1a',
 mid: '#444444',
 muted: '#888888',
 },
 border: {
 DEFAULT: '#e0ddd6',
 mid: '#c8c5be',
 },
 green: {
 DEFAULT: '#2db832',
 dark: '#1f8a24',
 },
 navy: '#1a2035',
 orange: '#f07020',
 },
 fontFamily: {
 display: ['"Bebas Neue"', 'sans-serif'],
 body: ['Inter', 'sans-serif'],
 mono: ['"JetBrains Mono"', 'monospace'],
 },
 maxWidth: {
 content: '1200px',
 },
 },
 },
 plugins: [],
};
