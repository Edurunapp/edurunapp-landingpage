/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				edurun: {
					blue: '#2563EB',
					purple: '#9333EA',
					dark: '#1F2937',
					light: '#F9FAFB',
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			}
		},
	},
	// AQUÍ ESTÁ LA CLAVE: Agregamos el plugin
	plugins: [
		require('@tailwindcss/typography'),
	],
}