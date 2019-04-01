import React from 'react';
import debug from 'debug';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {parse, stringify} from 'query-string';
import {SwitchWithError, Reroute} from '@thx/router';

const d = debug('imperium.core.RouteDirector');

interface RouteType {
	path: string,
	exact?: boolean,
	strict?: boolean,
	redirect?: boolean,
	permissions?: string | string[],
	layout?: any,
	portal: any,
	content: any,
	key: string,
}

interface Props {
	routes: RouteType[],
	defaults?: {
		exact?: boolean,
		strict?: boolean,
		redirect?: boolean,
		permissions?: string | string[],
		layout?: any,
		portal: any,
	},
	location: {
		pathname: string,
		search: string,
		hash: string,
	},
	history: {
		push: (pushObj: object) => {},
	},
	onRouteChange?: () => {},
	AuthContextConsumer?: JSX.Element,
}

interface AuthContextConsumerRenderProp {
	checkPermissions?: () => void,
}

function NoAuthContextConsumer({children}: {children: (param: AuthContextConsumerRenderProp) => any}) {
	return children({checkPermissions: undefined});
}

/**
 * The RouteDirector renders main routes, usually in a layout, based off of route objects.
 * @param props
 * @return {*}
 * @constructor
 */
function RouteDirector(props: Props) {
	const {location: {pathname, search, hash}, history, routes, defaults, AuthContextConsumer} = props;

	d(`Rendering RouteDirector: ${pathname}${search}${hash}`);

	const currentQuery = parse(search);

	const AuthContextConsumerComponent = AuthContextConsumer || NoAuthContextConsumer;

	return (
		<AuthContextConsumerComponent>
			{({checkPermissions}: AuthContextConsumerRenderProp) => (
				<div>
					<SwitchWithError>
						{routes.map(route => {
							// Apply default route options and then apply specific route options
							const routeProps = Object.assign({}, defaults || {}, route);

							// If the route is a portal route, don't render it here
							if (routeProps.portal) return null;

							// Render the route content in a Reroute, which checks for permissions
							return (
								<Reroute
									key={routeProps.path}
									render={(rrProps: RouteType) => {
										d(`Rendering route: ${routeProps.path}`);
										if (routeProps.layout) {
											return <routeProps.layout route={routeProps} {...rrProps}/>;
										}
										if (routeProps.content) {
											return <routeProps.content route={routeProps} {...rrProps}/>;
										}
										return null;
									}}
									checkPermissions={checkPermissions}
									{...routeProps}
								/>
							);
						})}
					</SwitchWithError>
					{
						routes.map(route => {
							// If the route is not a portal route or if the current key isn't present, don't render it here
							if (!route.portal || !currentQuery[route.key]) return null;
							d('Rendering a portal', route.key);
							return (
								<route.portal
									key={route.key}
									routeKey={route.key}
									restoreRoute={(routeKey: string) => {
										d('Removing portal route key', routeKey);
										// @ts-ignore
										delete currentQuery[routeKey];
										history.push({
											...props.location,
											search: stringify(currentQuery),
										});
									}}
									{...route}
								/>
							);
						})
					}
				</div>
			)}
		</AuthContextConsumerComponent>
	);
}

export default withRouter(RouteDirector);