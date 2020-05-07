import type {ImperiumServer, ImperiumServerModule} from '@imperium/server';
import type {EntitySchema} from 'typeorm';
import type {ImperiumTypeormServerModule} from './types';

export function gatherEntities<Context>(server: ImperiumServer<Context>) {
	return server.modules.reduce((memo, module: ImperiumServerModule & ImperiumTypeormServerModule) => {
		if (module.entities) {
			return [...memo, ...module.entities()];
		}
		return memo;
	}, [] as (string | Function | EntitySchema<any>)[]);
}

export function gatherSubscribers(server: ImperiumServer) {
	return server.modules.reduce((memo, module: ImperiumServerModule & ImperiumTypeormServerModule) => {
		if (module.subscribers) {
			return [...memo, ...module.subscribers()];
		}
		return memo;
	}, [] as (string | Function)[]);
}

export {ImperiumTypeormServerModule} from './types';
