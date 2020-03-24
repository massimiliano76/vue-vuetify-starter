const {
	title,
} = require('../config')

const pkg = require('../../package.json')

module.exports.general = {
	data: () => ({
		fixed: true,
		title,
		author: pkg.author,
	}),
}
