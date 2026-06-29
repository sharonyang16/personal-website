import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/your-ui-library-name/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
    },
  },
} satisfies Config;
