import React from 'react';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true });
		console.error('error is: ', error);
		console.log('stack is', info.componentStack);
	}

	render() {
		// throw new Error('Self error');		
		if (this.state.hasError) {
			return <h1>Something went wrong.</h1>;
		}
		return this.props.children;
	}
}
export default ErrorBoundary;
