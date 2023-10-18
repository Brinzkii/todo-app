import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import uuid from 'react-uuid';

const TodoList = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		const newTodo = {
			...todo,
			id: uuid(),
		};

		setTodos((todos) => [...todos, newTodo]);
	};

	const removeTodo = (id) => {
		const idx = todos.findIndex((todo) => todo.id === id);
		const todosCopy = [...todos];
		todosCopy.splice(idx, 1);
		setTodos([...todosCopy]);
	};

	return (
		<>
			<NewTodoForm addTodo={addTodo} />

			<ul className="TodoList">
				{todos.map((t) => (
					<li key={uuid()}>
						<Todo todo={t.todo} id={t.id} removeTodo={removeTodo} key={uuid()} />
					</li>
				))}
			</ul>
		</>
	);
};

export default TodoList;
