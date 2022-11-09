/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"accent-color": "#78B68C",
				"light-color": "#8AD342",
				"dark-color": "var(--dark-color)",
				"accent-dark": '#4F9265'
			},
		},
	},
	plugins: [],
}
