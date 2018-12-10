import React from 'react';
import {shallow} from 'enzyme';
import Root from './Root';

describe('Root', () => {
	it('should render without throwing an error', () => {
		const render = jest.fn().mockImplementation(inner => inner());
		const routes = {MyRoute: 'testroute'};
		const store = {
			subscribe: jest.fn(),
			dispatch: jest.fn(),
			getState: jest.fn(),
		};

		expect(shallow(
			<Root render={render} store={store} routes={routes}/>
		)).toMatchSnapshot();
	});
});