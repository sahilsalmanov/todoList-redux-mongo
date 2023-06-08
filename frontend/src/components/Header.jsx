import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../store/slices/tasksSlice';
import axios from 'axios';


function Header() {


	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	// const onSubmit = (event) => {
	// 	event.preventDefault();

	// 	if (value.trim().length === 0) {
	// 		alert("Input cannot be empty!");
	// 		setValue("");
	// 		return;
	// 	}

	// 	dispatch(
	// 		addTask({
	// 			task: value
	// 		})
	// 	);

	// 	setValue("");
	// };
	const onSubmit = async (event) => {
		event.preventDefault();
	
		if (value.trim().length === 0) {
			alert("Input cannot be empty!");
			setValue("");
			return;
		}
	
		try {
			const response = await axios.post('/api/tasks', { task: value });
			dispatch(
				addTask({
					task: value
				})
			);
			console.log(response.data); // İsteğin yanıtını konsola yazdırabilirsiniz
		} catch (error) {
			console.error(error);
		}
	
		setValue("");
	};
	
	


	function enter(event) {
		if (event.key === 'Enter') {
			onSubmit(event)
		}
	}

	return (
		<header class="header">
			<h1>todos</h1>
			<form>
				<input onChange={(e) => setValue(e.target.value)} class="new-todo" placeholder="What needs to be done?" autoFocus value={value}
					onKeyPress={enter} />
			</form>
		</header>
	)
}

export default Header

