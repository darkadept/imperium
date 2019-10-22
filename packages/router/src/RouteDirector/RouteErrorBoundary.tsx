import React from 'react';
import debug from 'debug';

const d = debug('imperium.router.RouteErrorBoundary');

export default class RouteErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {hasError: false};
	}

	static getDerivedStateFromError(error) {
		return {hasError: true};
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		d(error);
		d(errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong.</h1>;
		}
		return this.props.children;
	}
}