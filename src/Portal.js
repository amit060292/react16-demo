import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const portal = document.getElementById('portal');

class Counter extends Component {
	render() {
		return ReactDOM.createPortal(
			this.props.children,
			portal
		);
	}
}

export default Counter;
