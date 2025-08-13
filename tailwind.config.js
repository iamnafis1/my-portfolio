/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Orbitron','ui-sans-serif','system-ui'],
        sans: ['Space Grotesk','ui-sans-serif','system-ui'],
      },
      colors: {
        neon: {
          green: '#00FFB2',
          purple: '#8A2BE2',
          blue: '#00D1FF',
          pink: '#FF4DFF'
        }
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 209, 255, 0.45)',
        glowStrong: '0 0 40px rgba(255, 77, 255, 0.55)',
      },
      backdropBlur: {
        xs: '2px',
      }
    }
  },
  plugins: []
}
