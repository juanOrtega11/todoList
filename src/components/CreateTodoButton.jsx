/* eslint-disable react/prop-types */
// import React from 'react';
import '../css/CreateTodoButton.css';

function CreateTodoButtom(props) {
	const onClickButton = () => {
		props.setOpenModal(prevState => !prevState);
	};
	return (
		<button onClick={onClickButton} className='CreateTodoButton'>
			+
		</button>
	);
}

export { CreateTodoButtom };
