export default function RemoveTodos({ todoItems, setTodoItems }) {
	
  const removeCompletedTodosHandler = () => {
		const updatedTodoItems = todoItems.filter((toDoItem) => toDoItem.completed === false);
		setTodoItems(updatedTodoItems);
	};

	const clearAllTodosHandler = () => {
		setTodoItems([]);
	};

	const isAnyTodoCompleted = todoItems.some((todoItem) => todoItem.completed);

	const buttonText = isAnyTodoCompleted ? 'Remove Completed' : 'Empty';
	const onClickHandler = isAnyTodoCompleted ? removeCompletedTodosHandler : clearAllTodosHandler;

	return (
		<button className="ClearAllBtn" onClick={onClickHandler}>
			{buttonText}
		</button>
	);
}
