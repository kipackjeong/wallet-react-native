import React, { useState, useEffect, useReducer } from "react";
import mockData from "../../../mockData";
import {
	getToday,
	getLastDateOfMonth,
	getSevenDays,
	generateMMDDYYYY,
} from "../../../utilities/date";

const reducer = (states, action) => {
	switch (action.type) {
		case "SELECT_DATE":
			const day = action.value;
			const dateString = day["dateString"];
			const newDateObj = {};
			newDateObj[dateString] = {
				selected: true,
				marked: true,
				selectedColor: "skyblue",
			};

			return { ...states, selectedDateObj: newDateObj, isCalOpen: false };
		case "CONTROL_CAL":
			return { ...states, isCalOpen: !states.isCalOpen };

		case "CHANGE_DATE_STRING":
			return { ...states, selectedDate: action.value };

		default:
			return state;
	}
};

const useCalendarBox = () => {
	function formatDate(date) {
		const yyyy = date.substring(0, 4);
		const dd = date.substring(8);
		const mm = date.substring(5, 7);

		const formattedDate = `${mm}/${dd}/${yyyy}`;
		return formattedDate;
	}

	const todayDate = getToday();

	const [states, dispatch] = useReducer(reducer, {
		isCalOpen: false,
		selectedDateObj: null,
		selectedDate: todayDate,
	});

	// Whenever date is selected from the calendar, updates button text to selected date.
	useEffect(() => {
		const value = states.selectedDateObj
			? formatDate(Object.keys(states.selectedDateObj)[0])
			: todayDate; // if nothing selected, default it to todayDate

		// params - date : string
		// return - formattedDate : string
		dispatch({
			type: "CHANGE_DATE_STRING",
			value,
		});
	}, [states.selectedDateObj]);

	return {
		isCalOpen: states.isCalOpen,
		selectedDateObj: states.selectedDateObj,
		selectedDate: states.selectedDate,
		dispatch,
	};
};

export default useCalendarBox;
