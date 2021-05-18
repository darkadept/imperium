module.exports = {
	source: {
		watchPaths: ['../../server/dist', '../../connector/dist', '../../graphql-server/dist', '../../auth-server/dist', '../domain/dist', '../../log/dist', '../../dev/scripts'],
	},
	production: {
		server: {
			minimize: false,
		}
	},
};
