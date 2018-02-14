import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = { counter: 0 };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(({ counter }) => ({
			counter: counter + 1,
		}));
	}

	render() {
		if (this.state.counter === 5) {
			// Simulate a JS error
			throw new Error('Counter is Greater Than 5');
		}
		return (
			<React.Fragment>
				<div>{'The count is: '}</div>
				<h1 onClick={this.handleClick}>{this.state.counter}</h1>
			</React.Fragment>
		);
	}
}

export default Counter;
