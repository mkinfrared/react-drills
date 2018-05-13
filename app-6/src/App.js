import React, {Component} from 'react';
import './App.css';
import ToDo from './components/ToDo/ToDo';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
			input: ''
		};

		this.handleClick  = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);

	}

	handleChange(ev) {
		const {name, value} = ev.target;

		this.setState({
			[name]: value
		});
	}

	handleClick() {
		const {tasks, input} = this.state;

		this.setState({
			tasks: [...tasks, input],
			input: ''
		});
	}

	render() {
		const {tasks, input} = this.state;
		return (
			<div className="App">
				<div>
					<input onChange={(ev) => this.handleChange(ev)} type="text" name="input" value={input}
						   placeholder="enter your task"/>
					<button onClick={() => this.handleClick()}>Add task</button>
				</div>
				<ToDo tasks={tasks}/>
			</div>
		);
	}
}

export default App;
