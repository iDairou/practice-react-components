import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class Counter extends React.Component {
	state = {
		amount: 0,
	};

	// handleClick() {
	// 	this.setState((prev) => ({
	// 		amount: prev.amount + 1,
	// 	}));
	// }

	// render() {
	// 	return (
	// 		<button onClick={this.handleClick.bind(this)}>
	// 			click me ({this.state.amount})
	// 		</button>
	// 	);
	// }

	handleClick = (e) => {
		this.setState((prev) => ({
			amount: prev.amount + 1,
		}));
	};

	render() {
		return (
			<button onClick={this.handleClick}>click me ({this.state.amount})</button>
		);
	}
}

root.render(<Counter />);
