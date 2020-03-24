const {
	title,
} = require('../config')

module.exports.general = {
	data: () => ({
		darkMode: false,
		clipped: false,
		drawer: false,
		fixed: false,
		title,
	}),
	methods: {
		switchTheme() {
			this.$vuetify.theme.dark =! this.$vuetify.theme.dark
			this.darkMode =! this.darkMode
			console.log("dark mode: " + this.darkMode);
		},
	},
}
