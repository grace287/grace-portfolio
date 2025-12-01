import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Grace 브랜딩 컬러 팔레트
        grace: {
          rose: '#F7D7E0',
          lavender: '#D8C8FF', 
          champagne: '#F7F4DD',
          wine: '#7C3A53',
          gold: '#D5C27F',
          mint: '#BEE6DF',
          text: '#1C1C1E',
          secondary: '#6E6E73',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'pretendard': ['Pretendard', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'fade-in': 'fadeIn 0.9s ease-out',
        'slide-up': 'slideUp 0.7s ease-out',
        'scale-in': 'scaleIn 1.2s ease-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.7)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'grace': '0 4px 14px rgba(124, 58, 83, 0.08)',
        'grace-lg': '0 8px 25px rgba(124, 58, 83, 0.12)',
      },
    },
  },
  plugins: [],
} satisfies Config;