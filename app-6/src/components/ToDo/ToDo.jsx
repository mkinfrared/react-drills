import React from 'react';

export default function ToDo(props) {
	const tasks = props.tasks
					   .map((elem, i) => <li key={i}>{elem}</li>);

	return (
		<ul>
			{tasks}
		</ul>
	)
}