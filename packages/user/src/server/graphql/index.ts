import property from 'lodash/property';
import User from './User.graphqls';

export const schema = User;

export function resolvers() {
	return {
		User: {
			id: property('_id'),
		},
	};
}