import React, { useState } from 'react';

const Square = () => {

	const [backgroundColor, setBackgroundColor] = useState('black');

	const generateRandomColor = () => {
		const red = Math.floor(Math.random() * 256);
		const green = Math.floor(Math.random() * 256);
   		const blue = Math.floor(Math.random() * 256);
    	return `rgb(${red}, ${green}, ${blue})`;
	}
	const squareStyle = {
		backgroundColor,
		width: '255px',
		height: '255px'
	}
	const handleOnMouseEnter = () => {
		setBackgroundColor(generateRandomColor());
	}
	const handleToBlack = () => {
		setBackgroundColor('black');
	}
	return (
		<div style={squareStyle} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleToBlack} onDoubleClick={handleToBlack}>
		</div>
	);
}

export default Square;
