/** @format */
const rsync = require('rsync');

const copyOverrides = new rsync()
	.flags('a')
	.source('./e2e-overrides/')
	.destination('./e2e');

copyOverrides.execute(function() {
	console.log('e2e overridden!');
});
