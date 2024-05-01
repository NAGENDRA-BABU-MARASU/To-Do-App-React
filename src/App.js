import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './styles.css';

export default function App() {
	return (
		<div className="Application">
			<Header />
			<ToDoList />
		</div>
	);
}
