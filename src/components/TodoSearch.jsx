/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { TodoContext } from '../App/TodoContext';
import '../css/TodoSearch.css';

function TodoSearch() {
	const { searchValue, setSearchValue } = React.useContext(TodoContext);
	const onSearchValueChange = ev => {
		const text = ev.target.value;
		setSearchValue(text);
	};
	return (
		<div>
			<input
				className='TodoSearch'
				placeholder='Cebolla'
				value={searchValue}
				onChange={onSearchValueChange}
			/>
		</div>
	);
}

export { TodoSearch };
