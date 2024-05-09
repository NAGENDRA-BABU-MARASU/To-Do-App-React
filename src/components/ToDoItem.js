export default function ToDoItem({ toDoItem, toDoItemClickHandler }) {
	const onClickHandler = () => {
		toDoItemClickHandler(toDoItem.id);
	};

	return (
		<li className="ToDoItem" onClick={onClickHandler}>
			{toDoItem.isCompleted ? <strike>{toDoItem.taskDescription}</strike> : toDoItem.taskDescription}
		</li>
	);
}
