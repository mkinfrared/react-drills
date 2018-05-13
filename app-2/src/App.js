import React, {Component} from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: ['pizza', 'hamburger', 'sandwich']
		}
	}

	render() {
		const {data}  = this.state;
		const display = data.map((elem, i) => <h2 key={i}>{elem}</h2>);

		return (
			<div className="App">
				{display}
			</div>
		);

	}
}

export default App;
