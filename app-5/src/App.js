import React, {Component} from 'react';
import './App.css';
import Image from './components/Image/Image';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [],
			url   : ''
		};

		this.handleClick  = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);

	}

	handleClick() {
		const {images, url} = this.state;
		const key           = images.length;

		this.setState({
			images: [...images, <Image key={key} url={url}/>],
			url   : ''
		});
	}

	handleChange(ev) {
		const {name, value} = ev.target;

		this.setState({
			[name]: value
		});
	}

	render() {
		const {images, url} = this.state;

		return (
			<div className="App">
				<div>
					<input onChange={(ev) => this.handleChange(ev)} type="text" name="url" placeholder="URL"
						   value={url}/>
					<button onClick={() => this.handleClick()}>Add image</button>
				</div>
				{images}
			</div>
		);
	}
}

export default App;
