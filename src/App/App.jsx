import { useTodos } from './useTodos.jsx';
import { TodoCounter } from '../components/TodoCounter.jsx';
import { TodoSearch } from '../components/TodoSearch.jsx';
import { TodoList } from '../components/TodoList.jsx';
import { TodoItem } from '../components/TodoItem.jsx';
import { CreateTodoButtom } from '../components/CreateTodoButton.jsx';
import { Modal } from '../Modal/index.jsx';
import { TodoForm } from '../components/TodoForm/TodoForm';
import { TodoHeader } from '../TodoHeader/TodoHeader.jsx';

function App() {
	const {
		error,
		loading,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		setOpenModal,
		addTodo,
		totalTodos,
		completedTodos,
		searchValue,
		setSearchValue,
	} = useTodos();
	return (
		<>
			<TodoHeader>
				<TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
				<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
			</TodoHeader>
			<TodoList>
				{error && <p>Desesperate, hubo un error</p>}
				{loading && <p>Estamos cargando, no desesperes</p>}
				{!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}

				{searchedTodos.map(todo => (
					<TodoItem
						key={todo.id}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>
			{openModal && (
				<Modal>
					<TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
				</Modal>
			)}
			<CreateTodoButtom setOpenModal={setOpenModal} />
		</>
	);
}

export default App;
