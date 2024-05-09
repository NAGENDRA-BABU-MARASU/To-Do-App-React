export default function RemoveTodosButton({ todoItems, setTodoItems }) {
	const removeCompletedTodosHandler = () => {
		const updatedTodoItems = todoItems.filter((toDoItem) => toDoItem.isCompleted === false);
		setTodoItems(updatedTodoItems);
	};

	const clearAllTodosHandler = () => {
		setTodoItems([]);
	};

	const isAnyTodoCompleted = todoItems.some((todoItem) => todoItem.isCompleted);

	const buttonText = isAnyTodoCompleted ? 'Remove Completed' : 'Empty';
	const onClickHandler = isAnyTodoCompleted ? removeCompletedTodosHandler : clearAllTodosHandler;

	return (
		<button className="ClearAllBtn" onClick={onClickHandler}>
			{buttonText}
		</button>
	);
}
