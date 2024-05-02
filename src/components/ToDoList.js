import { useState } from 'react';
import ToDoItem from './ToDoItem';

export default function ToDoList() {
	const toDoListItems = [
		{ id: 0, taskDescription: 'Read SpringBoot', completed: false },
		{ id: 1, taskDescription: 'Complete Assignments', completed: false },
		{ id: 2, taskDescription: 'Prepare breakfast', completed: false },
		{ id: 3, taskDescription: 'Sleep for 2 hours', completed: false },
		{ id: 4, taskDescription: 'Take a shower', completed: false },
	];
	const [todoItems, setTodoItems] = useState(toDoListItems);
	const noItemsText = 'Nothing to do buddy. Sleep!';

	const removeCompletedToDosHandler = () => {
		const updatedTodoItems = todoItems.filter((toDoItem) => toDoItem.completed === false);
		setTodoItems(updatedTodoItems);
	};

	const onToDoItemClickHandler = (toDoId) => {
		const updatedTodos = [...todoItems];
		updatedTodos.map((toDoItem) => {
			if (toDoItem.id === toDoId) {
				toDoItem.completed = !toDoItem.completed;
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
		return <i className='NoItemsElement'>{noItemsText} </i>;
	};

	return (
		<>
			<div>
				<ol className="ToDoList">{todoItems.length > 0 ? getToDoItems() : noItemsElement()}</ol>
			</div>
			<div>
				<button className="ClearAllBtn" onClick={removeCompletedToDosHandler}>
					Remove Completed
				</button>
			</div>
		</>
	);
}
