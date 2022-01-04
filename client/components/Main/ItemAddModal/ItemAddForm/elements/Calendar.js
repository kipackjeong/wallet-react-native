import React from "react";
import CalendarBox from "../../../../UI/CalendarBox/CalendarBox";
const Calendar = ({ onDateChange }) => {
	return (
		<CalendarBox
			visible={true}
			containerStyle={{
				position: "absolute",
				top: -20,
				width: 360,
				elevation: 10,
				zIndex: 2,
			}}
			onDateChange={onDateChange}
		/>
	);
};

export default Calendar;
