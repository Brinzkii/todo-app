import React from 'react';

const Todo = ({ todo, id, removeTodo }) => {
	const handleClick = (evt) => {
		removeTodo(evt.target.className);
	};

	return (
		<>
			<button className={id} onClick={handleClick}>
				X
			</button>
			<div className="Todo-item" title="Todo-item">
				{todo}
			</div>
		</>
	);
};

export default Todo;
