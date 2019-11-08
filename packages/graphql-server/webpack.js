/* eslint-disable @typescript-eslint/no-var-requires */
const {commonWebpack, inspectLoader} = require('@imperium/util');
const {name} = require('./package.json');

module.exports = commonWebpack({
	isProduction: process.env.NODE_ENV === 'production',
	isClient: false,
	name,
	entry: './index.ts',
	outputFile: 'server.js',
	rules: [
		{
			test: /\.graphqls$/,
			exclude: /node_modules/,
			use: [
				inspectLoader('GRAPHQLS'),
				{
					loader: 'graphql-tag/loader',
				},
			],
		},
	],
});
