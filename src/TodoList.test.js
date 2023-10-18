import { fireEvent, render } from '@testing-library/react';
import TodoList from './TodoList';

it('renders without crashing', () => {
	render(<TodoList />);
});

it('matches snapshot', () => {
	const { asFragment } = render(<TodoList />);
	expect(asFragment()).toMatchSnapshot();
});

it('can add a new todo', () => {
	const { getByLabelText, queryByTitle, queryByText } = render(<TodoList />);
	expect(queryByTitle('Todo-item')).not.toBeInTheDocument();

	const todoInput = getByLabelText('Todo:');
	const submitBtn = queryByText('Add Todo');

	fireEvent.change(todoInput, { target: { value: 'mow the grass' } });
	fireEvent.click(submitBtn);

	expect(queryByTitle('Todo-item')).toBeInTheDocument();
});

it('can remove a todo', () => {
	const { getByLabelText, queryByTitle, queryByText } = render(<TodoList />);
	const todoInput = getByLabelText('Todo:');
	const submitBtn = queryByText('Add Todo');

	fireEvent.change(todoInput, { target: { value: 'mow the grass' } });
	fireEvent.click(submitBtn);

	const removeBtn = queryByText('X');

	fireEvent.click(removeBtn);

	expect(queryByTitle('Todo-item')).not.toBeInTheDocument();
});
