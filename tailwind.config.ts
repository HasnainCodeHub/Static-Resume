import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#FF6347', // Tomato red
        secondary: '#4F83CC', // Sky blue
        accent: '#FFD700', // Gold
        dark: '#333333', // Dark gray
        light: '#F5F5F5', // Light gray
      },
    },
  },
  plugins: [],
} satisfies Config;
