/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: colors.blue[700],
					light: colors.blue[400],
					dark: colors.blue[900]
				}
			}
		},
	},
	plugins: [],
}
