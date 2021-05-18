import type {ImperiumServerModule} from '@imperium/server';
import './defaults';
import {endpoints} from './endpoints';
import type {GraphqlServerModuleConfig} from './types';

/**
 * The graphql server module needs to be added to Imperium server modules to enable graphql endpoints.
 * @param config
 */
export function graphqlServerModule(config?: GraphqlServerModuleConfig): ImperiumServerModule<any> {
	return {
		name: '@imperium/graphql-server',
		endpoints: endpoints(config),
	};
}

export type {ImperiumGraphqlServerModule, GraphqlServerModuleConfig} from './types';
