import React, { Component } from 'react';
import logo from './logo.svg';
import Component1 from './Component1';
import Counter from './Counter';
import './App.css';
import ErrorBoundaries from './ErrorBoundaries';
import Portal from './Portal';

class Component2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
		};
		this.showModal = this.showModal.bind(this);
		this.handleHide = this.handleHide.bind(this);
	}
	showModal() {
		this.setState({ showModal: true });
	}
	handleHide() {
		this.setState({ showModal: false });
	}
	render() {
		const modal = this.state.showModal ? (
			<Portal>
				<div className="modal">
					<div>
						With a portal, we can render content into a different part of the DOM, as if
						it were any other React child.
					</div>
					<button onClick={this.handleHide}>Hide modal</button>
				</div>
			</Portal>
		) : null;
		return [
			<header amit='yes' key="App-header" className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to React</h1>
			</header>,
			<p className="App-intro" key="App-intro">
				<Component1 />
			</p>,
			<ErrorBoundaries key="counter">
				<Counter />
			</ErrorBoundaries>,
			<button key="button" onClick={this.showModal}>
				{'Show Modal'}
			</button>,
			<div key="portal">{modal}</div>,
		];
	}
}

export default Component2;
