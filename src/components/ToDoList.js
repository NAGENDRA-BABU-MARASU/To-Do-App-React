import ToDoItem from './ToDoItem';

export default function ToDoList() {
	const toDoListItems = [
		'Read SpringBoot',
		'Complete Assignments',
		'Prepare breakfast',
		'Sleep for 2 hours',
		'Take a shower',
	];
	return (
		<div className="ToDoList">
			{toDoListItems.map((toDoItem) => (
				<ToDoItem key={toDoItem} task={toDoItem} />
			))}
		</div>
	);
}
