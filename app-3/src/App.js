import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data : ['peter', 'steve', 'donald', 'mickey', 'billy'],
			input: ''
		};

		this.handleChange = this.handleChange.bind(this);

	}

	handleChange(ev) {
		this.setState({
			[ev.target.name]: ev.target.value
		});
	}

	render() {
		const {data, input} = this.state;
		const display       = data
			.filter((elem) => elem.startsWith(input))
			.map((elem, i) => <h2 key={i}>{elem}</h2>);

		return (
			<div className="App">
				<input onChange={(ev) => this.handleChange(ev)} type="text" name="input"/>
				{display}
			</div>
		);
	}
}

export default App;
