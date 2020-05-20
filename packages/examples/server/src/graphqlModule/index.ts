import type {ImperiumGraphqlServerModule} from '@imperium/graphql-server';
import debug from 'debug';
import type {connectors} from '../core/connectors';
import type {Context} from '../core/context';
import Sample from './Sample.graphqls';

const d = debug('imperium.examples.server.graphqlModule');

/*
	This is an example of a server module that uses graphql.

	The ImperiumGraphqlServerModule type extends the base server module type to include
	schema, resolvers and schemaDirectives (not shown here).
 */

export const graphqlModule = (): ImperiumGraphqlServerModule<Context, typeof connectors> => ({
	name: 'Server Module with GraphQL',
	schema: [Sample],
	resolvers(server) {
		return {
			Query: {
				async getData(obj, value, apolloContext) {
					d('getData resolver');
					// The apollo context is technically different than imperium context but we spread imperium context across apollo context.
					const fakeSecureData = await apolloContext.domainAdvanced.context.SecureModel.getSecureData('secure-thing', apolloContext.domainAdvanced);
					d(fakeSecureData);

					// We also have access to auth (via ContextManager) on the domain that supplies auth.
					d(apolloContext.domainAdvanced.auth.data?.auth?.id);
					d(apolloContext.domainAdvanced.auth.hasPermission('admin'));

					return 5;
				},
			},
		};
	},
});
