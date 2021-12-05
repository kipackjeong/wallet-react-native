import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { Button } from "react-native-elements";
import useCalendarBox from "./useCalendarBox";

/*
CalendarBox
parent - ItemAddModal
child - Calendar, Button
states - isCalOpen, selectedDateObj, selectedDate
handlers - onDayPressHandler , onPressHandler

*/
const CalendarBox = ({ calendarBoxContainerStyle }) => {
	const { isCalOpen, selectedDateObj, selectedDate, dispatch } =
		useCalendarBox();

	// set the Calendar's markedDates = newDateObj -> selectedDateObj.
	// close modal , set isCalOpen to false
	function onDayPressHandler(day) {
		dispatch({ type: "SELECT_DATE", value: day });
	}

	// toggle Calendar
	function onPressHandler() {
		// console.log('CalendarBox -> onPressHandler')
		dispatch({ type: "CONTROL_CAL" });
	}

	return (
		<View style={[calendarBoxContainerStyle]}>
			<Button
				containerStyle={[styles.container, styles.btnContainer]}
				buttonStyle={styles.btnStyle}
				titleStyle={styles.btnTitleStyle}
				title={selectedDate}
				onPress={onPressHandler}
			/>

			{isCalOpen ? (
				<View style={styles.calContainer}>
					<Calendar
						markedDates={selectedDateObj}
						onDayPress={onDayPressHandler}
						horizontal={true}
						style={[styles.container]}
					/>
				</View>
			) : null}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		width: 300,
		elevation: 10,
		shadowOpacity: 1,
		shadowOffset: { width: 3, height: 3 },
	},
	btnContainer: {
		height: 50,
		color: "white",
		justifyContent: "center",
		alignContent: "center",
		backgroundColor: "#ff524f",
	},
	btnStyle: {
		height: "100%",
		borderColor: "white",
		backgroundColor: "#ff524f",
		shadowColor: "#ff524f",
	},
	btnTitleStyle: {
		height: "100%",
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
		color: "white",
		fontSize: 25,
	},
	calContainer: {
		height: 300,
		width: 300,
		position: "absolute",
		top: 40,
		zIndex: 1,
	},
	calStyle: {
		width: "100%",
		textAlign: "center",
		borderWidth: 0.1,
		borderColor: "gray",
	},
});

export default CalendarBox;
