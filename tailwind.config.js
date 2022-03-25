const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{html,js}'],
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		colors: {
			border: {
				primary: '#4B5563',
			},
			background: {
				primary: '#191d30',
				secondary: '#0D1020',
				teritiary: '#1C1E29',
			},
			gray: {
				primary: '#262b42',
				secondary: '#7D94B2',
				teritiary: '#ECF1F6',
			},
			subtle: {
				primary: '#ECF1F6',
				secondary: '#D5DEEC',
				teritiary: '#3B4057',
				text: '#E6E6E6',
			},

			white: colors.white,
		},
		extend: {},
	},
	plugins: [],
};
