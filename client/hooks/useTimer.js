import React, { useState } from "react";

const useTimer = () => {
	const [timer, setTimer] = useState(false);
	const timeIt = () => {
		const timer = setTimeout(() => {
			setTimer((prev) => !prev);
		}, 4000);
		return () => {
			clearTimeout(timer);
		};
	};

	return {
		timer,
		timeIt,
	};
};

export default useTimer;
