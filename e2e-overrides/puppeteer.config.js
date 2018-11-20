/** @format */

const { headless, slowMo } = require('../config.json').puppeteer;

module.exports = {
	launch: {
		headless,
		slowMo,
	},
};
