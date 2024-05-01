import { useState } from 'react';
import ToDoItem from './ToDoItem';

export default function ToDoList() {
	const toDoListItems = [
		'Read SpringBoot',
		'Complete Assignments',
		'Prepare breakfast',
		'Sleep for 2 hours',
		'Take a shower',
	];
	const [todoItems, setTodoItems] = useState(toDoListItems);
	const noItemsText = 'Nothing to do buddy. Sleep!';

	const clearAllToDoItems = () => {
		setTodoItems([]);
	};

	const getToDoItems = () => {
		return todoItems.map((toDoItem) => <ToDoItem key={toDoItem} task={toDoItem} />);
	};

	const noItemsElement = () => {
		return <i>{noItemsText} </i>;
	};

	return (
		<>
			<div className="ToDoList">{todoItems.length > 0 ? getToDoItems() : noItemsElement()}</div>
			<div>
				<button className="ClearAllBtn" onClick={clearAllToDoItems}>
					Empty
				</button>
			</div>
		</>
	);
}
