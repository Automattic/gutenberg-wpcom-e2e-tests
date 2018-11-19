/** @format */
require('@babel/polyfill');

require('@babel/register')();

const args = process.argv.slice(2);

module.exports = require('./' + args[0] + '.js');
