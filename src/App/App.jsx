// import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from './TodoContext';

// const defaultTodos = [
// 	{ id: 1, text: 'Cortar cebolla', completed: true },
// 	{ id: 2, text: 'Tormar el curso de intro a react', completed: false },
// 	{ id: 3, text: 'Llorar con la llorona', completed: false },
// ];

function App() {
	return (
		<TodoProvider>
			<AppUI />;
		</TodoProvider>
	);
}

export default App;
