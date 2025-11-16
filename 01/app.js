import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

class App extends React.Component {
	state = {
		counter: 0,
	};

	componentDidMount() {
		console.log("componentDidMount");

		this.id = setInterval(() => {
			this.setState((prev) => ({
				counter: prev.counter + 1,
			}));
		}, 5000);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("componentDidUpdate");
		console.log("Poprzedni counter:", prevState.counter);
		console.log("Nowy counter:", this.state.counter);
	}

	componentWillUnmount() {
		console.log("componentWillUnmount");
		clearInterval(this.id);
	}
	render() {
		console.log("render");
		return <h1>{this.state.counter}</h1>;
	}
}

root.render(<App />);
