module.exports = {
	content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
	theme: {
		colors: {
			// Brand color palette

			// L = Light Mode
			"Purple-dark": "#2C2559",
			"Purple-light": "#3C3A8C",
			"Yellow-custom": "#F29A2E",
			"Red-custom": "#BF3F61",
			"Base-dark": "#383941",
			"Base-light": "#F9F9F9",
		},
		extend: {},
		fontFamily: {
			Epilogue: ['Epilogue']
		},
	},
	plugins: [require("flowbite/plugin")],
};
