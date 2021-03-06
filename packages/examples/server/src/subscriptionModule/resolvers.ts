import {inspect} from 'util';
import debug from 'debug';
import {getConnector} from '@imperium/example-domain';
import {randomLetters} from '@thx/random';
import type {ImperiumServer} from '@imperium/server';
import type {IResolvers} from 'graphql-tools';
import type {Context} from '~core/context';
import {data} from './data';

const d = debug('imperium.examples.server.subscriptionModule.resolvers');
const dd = (obj: any) => d(inspect(obj, false, null, true));

export function resolvers(server: ImperiumServer<Context>): IResolvers<any, Context> {
	return {
		Query: {
			getSubscriptionValue() {
				// This is a normal query.
				return data;
			},
		},
		Mutation: {
			changeSubscriptionValue(obj, params, ctx) {
				// Perform the mutation
				data.id = randomLetters(10);

				// Notify the pubsub that the value changed. We can send the changed
				// data to the client via the subscription by passing it as the payload
				// to pubsub.publish(). The payload is an object with the key of the
				// subscription name.
				getConnector('pubsub', ctx.connectors).publish('VALUECHANGED', {
					subscriptionValueChanged: data,
				});

				// Return value for the mutation.
				return data;
			},
		},
		Subscription: {
			subscriptionValueChanged: {
				subscribe(obj, params, ctx) {
					return getConnector('pubsub', ctx.connectors).asyncIterator(['VALUECHANGED']);
				},
			},
		},
	};
}
