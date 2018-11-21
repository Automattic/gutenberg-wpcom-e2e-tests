/** @format */

const rimraf = require('rimraf');
const rsync = require('rsync');
const { spawnSync } = require('child_process');

const gutenbergRelease = process.argv.slice(2)[0];
if (!gutenbergRelease) {
	console.log('Need to know which release you want!');
	console.log('E.g. `node ./bin/update-e2e.js v4.5.0`');
	process.exit();
}

rimraf.sync('./tmp');
rimraf.sync('./e2e');

const cloneGutenberg = spawnSync('git', [
	'clone',
	'https://github.com/WordPress/gutenberg.git',
	'./tmp',
]);

process.chdir('./tmp');

const checkoutTag = spawnSync('git', ['checkout', 'tags/' + gutenbergRelease]);

const copyTests = spawnSync('cp', ['-r', './test/e2e/', '../e2e']);

const copyOverrides = new rsync()
	.flags('a')
	.source('../e2e-overrides/')
	.destination('../e2e');

copyOverrides.execute(function(error) {
	console.log('Done!');
	process.exit();
});
