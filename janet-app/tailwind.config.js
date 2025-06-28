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
				// Janet's warm gradient spectrum
				nebulapurple: 'rgb(var(--nebulapurple) / <alpha-value>)',
				neonfuchsia: 'rgb(var(--neonfuchsia) / <alpha-value>)',
				marssunset: 'rgb(var(--marssunset) / <alpha-value>)',
				atomictangerine: 'rgb(var(--atomictangerine) / <alpha-value>)',
			},
			fontFamily: {
				sans: ['Geist Sans', 'sans-serif'],
				mono: ['Geist Mono', 'monospace'],
			},
			borderRadius: {
				sm: '4px',
				md: '8px',
				lg: '16px',
			},
			animation: {
				"border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
			},
			keyframes: {
				"border-beam": {
					"100%": {
						"offset-distance": "100%",
					},
				},
			},
		},
	},
	plugins: [],
}
