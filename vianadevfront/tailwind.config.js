
	/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./src/**/*.{html,ts}", 
	],
	theme: {
	  extend: {
		carousel: {
						'0%': { transform: 'translateX(0)' },
						'100%': { transform: 'translateX(-50%)' },
					},
		colors: {
			cinzaescuro: '#262626',
			cinzaclaro: '#BFBFBF',
			myRed: '#FF3C57',
			myWine: '#8E0038'
		},
		fontFamily: {
		  montserratAlt: ['"Montserrat Alternates"', 'sans-serif'],
		},
	  },
	},
	plugins: [],
  }
  
