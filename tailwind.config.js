/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
	  extend: {
		colors: {
		  'dark-orange': '#FF8C00',
		  'orange': '#FF4500',
		  'orange-500': '#FF4500',
		  'orange-600': '#FF4500',
		  'yellow': '#FFD700',
		  'yellow-100': '#FFD700',
		  'yellow-200': '#FFD700',
		  'yellow-300': '#FFD700',
		  'yellow-400': '#FFD700',
		  'yellow-500': '#FFD700',
		  'yellow-600': '#FFD700',
		  'dark-yellow': '#FFD700',
		  'dark-blue-900': '#00008B',
		  'dark-blue-800': '#00008B',
		  'dark-blue-700': '#00008B',
		  'dark-blue-600': '#00008B',
		  'dark-blue-500': '#00008B',
		  'dark-blue-400': '#00008B',	
		  'dark-blue': '#00008B',
		  'gray-200': '#f3f4f6',
		  'lightYellow': '#FFD700',
		},
		fontFamily: {
		  Inter: ['Inter', 'sans-serif'],
		},
	  },
	},
	plugins: [],
};

export default config;
