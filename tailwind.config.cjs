/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'web3-blue': '#30CFD0',
				'web3-pink': '#c43ad6',
			},
		},
	},
	plugins: [],
}
