import React from 'react';
import { useEffect, useState } from 'react';

function CountDown() {
	const [countDown, setCountDown] = useState(180);

	useEffect(() => {
		const timerID = setInterval(() => {
			setCountDown((preState) => preState - 1);
			console.log('countDown', countDown);
		}, 1000);

		return () => clearInterval(timerID);
	}, []);

	return (
		<div>
			<h1>{countDown}</h1>
		</div>
	);
}

export default CountDown;
