import '../css/TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
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
