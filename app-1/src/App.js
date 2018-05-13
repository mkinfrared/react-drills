import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ''
		};

		this.handleChange = this.handleChange.bind(this);

	}

	handleChange(ev) {
		this.setState({
			[ev.target.name]: ev.target.value,
		});
	}

	render() {
		const {input} = this.state;
		return (
			<div className="App">
				<input type="text" name="input" onChange={(ev) => this.handleChange(ev)}/>
				<p>{input}</p>
			</div>
		);
	}
}

export default App;
