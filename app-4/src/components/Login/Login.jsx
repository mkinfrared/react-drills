import React, {Component} from 'react';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleClick  = this.handleClick.bind(this);
	}

	handleClick() {
		const {username, password} = this.state;
		alert('Username: ' + username + '\n' + 'Password: ' + password);
		this.setState({
			username: '',
			password: ''
		});
	}

	handleChange(ev) {
		const {name, value} = ev.target;

		this.setState({
			[name]: value
		});
	}

	render() {
		const {username, password} = this.state;

		return (
			<div>
				<div>
					<input onChange={(ev) => this.handleChange(ev)} type="text" name="username" placeholder="username"
						   value={username}/>
				</div>
				<div>
					<input onChange={(ev) => this.handleChange(ev)} type="password" name="password"
						   placeholder="password" value={password}/>
				</div>
				<div>
					<button onClick={() => this.handleClick()}>Alert</button>
				</div>
			</div>
		);
	}

}