/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const sansFontFamily = require('tailwindcss/defaultTheme').fontFamily.sans;

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['"Work Sans"', sansFontFamily]
			},
			colors: {
				primary: {
					DEFAULT: colors.blue[700],
					light: colors.blue[400],
					dark: colors.blue[900]
				}
			},
			scale: {
				'80': '.8'
			}
		},
	},
	plugins: [],
}
