import { useState } from 'react';
import ToDoItem from './ToDoItem';
import RemoveTodosButton from './RemoveTodosButton';

export default function ToDoList() {
	const toDoListItems = [
		{ id: 0, taskDescription: 'Read SpringBoot', isCompleted: false },
		{ id: 1, taskDescription: 'Complete Assignments', isCompleted: false },
		{ id: 2, taskDescription: 'Prepare breakfast', isCompleted: false },
		{ id: 3, taskDescription: 'Sleep for 2 hours', isCompleted: false },
		{ id: 4, taskDescription: 'Take a shower', isCompleted: false },
	];
	const [todoItems, setTodoItems] = useState(toDoListItems);
	const noItemsText = 'Nothing to do buddy. Sleep!';

	const onToDoItemClickHandler = (toDoId) => {
		const updatedTodos = [...todoItems];
		updatedTodos.map((toDoItem) => {
			if (toDoItem.id === toDoId) {
				toDoItem.isCompleted = !toDoItem.isCompleted;
			}
			return toDoItem;
		});
		setTodoItems(updatedTodos);
	};

	const getToDoItems = () => {
		return todoItems.map((toDoItem) => (
			<ToDoItem key={toDoItem.id} toDoItem={toDoItem} toDoItemClickHandler={onToDoItemClickHandler} />
		));
	};

	const noItemsElement = () => {
		return <i className="NoItemsElement">{noItemsText} </i>;
	};

	return (
		<>
			<div>
				<ol className="ToDoList">{todoItems.length > 0 ? getToDoItems() : noItemsElement()}</ol>
			</div>
			<div>
				<RemoveTodosButton todoItems={todoItems} setTodoItems={setTodoItems} />
			</div>
		</>
	);
}
