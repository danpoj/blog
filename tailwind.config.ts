import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './posts/**/*.mdx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
      colors: {
        'baekjoon-bronze': '#AD5600',
        'baekjoon-silver': '#435F7A',
        'baekjoon-gold': '#EB9A01',
        'baekjoon-platinum': '#27E2A3',
        'baekjoon-diamond': '#00B4FC',
        'baekjoon-ruby': '#FF0061',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config
