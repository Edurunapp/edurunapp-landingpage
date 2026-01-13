/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				edurun: {
					blue: '#2563EB',   // Azul fuerte (Logo)
					purple: '#9333EA', // Púrpura (Logo)
					dark: '#1F2937',   // Gris oscuro (Texto)
					light: '#F9FAFB',  // Gris muy claro (Fondo)
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'], // Tipografía estándar profesional
			}
		},
	},
	plugins: [],
}