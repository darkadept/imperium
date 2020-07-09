/* eslint-disable react/static-property-placement */
import debug from 'debug';
import type {AuthenticationDomain, ServiceInfo} from '@imperium/auth-server';
import type {Context} from './index';

const d = debug('imperium.examples.domain-advanced.AuthenticationModel');

const authKeyPrefix = 'auth';

function getKey(key: string | string[]) {
	return key instanceof Array ? [authKeyPrefix, ...key].join(':') : `${authKeyPrefix}:${key}`;
}

export class Authentication implements AuthenticationDomain {
	private context: Context;

	constructor(context: Context) {
		this.context = context;
	}

	async setCache(key: string | string[], value: any, expire?: number): Promise<typeof value> {
		await this.context.connectors.connections.sharedCache.set(getKey(key), value, expire);
		return value;
	}

	async getCache(key: string | string[]): Promise<any> {
		return this.context.connectors.connections.sharedCache.get(getKey(key));
	}

	async invalidateCache(key: string | string[]): Promise<void> {
		await this.context.connectors.connections.sharedCache.clear(getKey(key));
	}

	async getServiceInfo(identifier: string): Promise<ServiceInfo | null> {
		return null;
		// const user = await this.context.connectors.connections.pg.getRepository(this.context.context.User).findOne({name: identifier});
		// if (!user) return null;
		// return {
		// 	id: user.id,
		// 	...user.services,
		// };
	}
}
