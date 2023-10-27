/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				carmesi: '#df2121'
			}
		},
	},
	plugins: [
		require('@shrutibalasa/tailwind-grid-auto-fit'),
	],
}