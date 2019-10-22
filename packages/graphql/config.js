/* eslint-disable @typescript-eslint/no-var-requires */
const {inspectLoader} = require('@imperium/util');
const {name} = require('./package.json');

module.exports = function() {
	const proto = process.env.PROTOCOL || 'http';
	const host = process.env.HOST || 'localhost';
	const port = parseInt(process.env.PORT || '4001', 10);
	const url = process.env.GRAPHQL_URL || '/api/graphql';
	const enableGraphqlWs = process.env.GRAPHQL_WS === 'true';

	const config = {
		name,
		initialConfig: {
			graphql: `${proto}://${host}:${port}${url}`,
			graphqlws: enableGraphqlWs ? `ws://${host}:${port}${url}` : false,
		},
		webpack: {
			client: {
				rules: [
					{
						test: /\.graphql$/,
						exclude: /node_modules/,
						use: [
							inspectLoader('GRAPHQL'),
							{
								loader: 'graphql-tag/loader',
							},
						],
					},
				],
			},
			server: {
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
			},
		},
	};

	return config;
};