import '../css/TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos }) {
	return (
		<h2 className='TodoCounter'>
			Has completado {completedTodos} de {totalTodos} Todos
		</h2>
	);
}

export { TodoCounter };
