/* eslint-disable @typescript-eslint/no-var-requires */
const {commonWebpack} = require('@imperium/util');
const {name} = require('../package.json');

module.exports = commonWebpack({
	isProduction: process.env.NODE_ENV === 'production',
	isClient: false,
	name,
	entry: './server/index.ts',
	outputFile: 'server.js',
});