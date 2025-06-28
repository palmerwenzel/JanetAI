/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{svelte,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				border: 'rgb(var(--border) / <alpha-value>)',
				input: 'rgb(var(--input) / <alpha-value>)',
				ring: 'rgb(var(--ring) / <alpha-value>)',
				background: 'rgb(var(--background) / <alpha-value>)',
				foreground: 'rgb(var(--foreground) / <alpha-value>)',
				muted: {
					foreground: 'rgb(var(--muted-foreground) / <alpha-value>)',
				},
				accent: 'rgb(var(--accent) / <alpha-value>)',
				destructive: 'rgb(var(--destructive) / <alpha-value>)',
				warning: 'rgb(var(--warning) / <alpha-value>)',
			},
			fontFamily: {
				sans: ['Geist Sans', 'sans-serif'],
				mono: ['Geist Mono', 'monospace'],
			},
			borderRadius: {
				sm: '4px',
				md: '8px',
				lg: '16px',
			}
		},
	},
	plugins: [],
}
