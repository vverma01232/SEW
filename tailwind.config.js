/** @type {import('tailwindcss').Config} */
module.exports = {
    blocklist: ["overline"],
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Archivo Black"', 'Archivo', 'sans-serif'],
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace']
      },
      colors: {
        ink: '#0B0C0E',
        coal: '#121417',
        card: '#16181C',
        steel: '#2D333C',
        line: 'rgba(255,255,255,0.08)',
        linelight: 'rgba(11,12,14,0.10)',
        sew: { DEFAULT: '#E52321', dark: '#C81B19' },
        mist: '#F2F2F0',
        fog: '#E7E7E4'
      },
      letterSpacing: {
        widest2: '0.25em',
        tightest: '-0.04em'
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        scan: { '0%': { top: '-10%', opacity: '0' }, '8%': { opacity: '1' }, '92%': { opacity: '1' }, '100%': { top: '105%', opacity: '0' } },
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.25' } },
        dash: { to: { strokeDashoffset: '0' } }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        marquee: 'marquee 42s linear infinite',
        scan: 'scan 7s linear infinite',
        blink: 'blink 1.6s steps(1) infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
