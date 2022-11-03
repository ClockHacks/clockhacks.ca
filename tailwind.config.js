/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"accent-color": "var(--accent-color)",
				"light-color": "var(--light-color)",
				"dark-color": "var(--dark-color)",
				"accent-dark": '#4F9265'
			},
		},
	},
	plugins: [],
}
