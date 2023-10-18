import React, { useState } from 'react';

const NewTodoForm = ({ addTodo }) => {
	const INITIAL_STATE = {
		todo: '',
	};
	const [formData, setFormData] = useState(INITIAL_STATE);

	const handleChange = (evt) => {
		const { name, value } = evt.target;

		setFormData((fData) => ({
			...fData,
			[name]: value,
		}));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		addTodo(formData);
		setFormData(INITIAL_STATE);
	};

	return (
		<form onSubmit={handleSubmit} className="Todo-form">
			<label htmlFor="todo" className="Todo-form-label">
				Todo:
			</label>
			<input
				name="todo"
				type="text"
				onChange={handleChange}
				placeholder="Cut the grass"
				value={formData.todo}
				className="Todo-form-input"
			/>

			<button className="Todo-form-button">Add Todo</button>
		</form>
	);
};

export default NewTodoForm;
